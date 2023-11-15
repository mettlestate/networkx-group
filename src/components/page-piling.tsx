"use client";

import {
  Children,
  type ReactNode,
  type TouchEvent,
  type WheelEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import { Transition } from "react-transition-group";

interface IPagePiling {
  initialView?: number;
  children: ReactNode[];
  onViewChange?: (view: number) => void;
}

export default function PagePiling(props: IPagePiling) {
  /** Index of the currently visible view */
  const [view, setView] = useState(props.initialView || 0);
  /** Index of the last visible view, needed to  */
  const [lastView, setLastView] = useState(0);
  /** True if the page is animating the transition to a new section */
  const [transitioning, setTransitioning] = useState(false);

  const startTransition = () => setTransitioning(true);
  const endTransition = () => setTransitioning(false);

  /** If not already switching sections, switch the section being viewed */
  function changeView(newView: number) {
    if (!transitioning) {
      setLastView(view);
      setView(newView);
      history.replaceState({}, "", `${window.location.origin}?view=${view}`);
    }
  }

  /** Switch to the previous section */
  const navigateUp = () => (view > 0 ? changeView(view - 1) : null);
  /** Switch to the next section */
  const navigateDown = () =>
    view < props.children.length - 1 ? changeView(view + 1) : null;

  /**
   * Wrap each child in a section
   * Each section tracks its own scroll position and listens to events that afford moving to a different section
   * When such an event occurs, it triggers a navigation handler here
   * Each section also contains a Transition element to animate page piling
   * The animation used depends on whether the new view is before or after the old view
   */
  function renderChildren() {
    const direction = view > lastView ? 1 : -1;
    return Children.map(props.children, (child, index) => {
      return (
        <PagePilingSection
          key={index}
          direction={direction}
          open={index === view}
          navigateUp={navigateUp}
          navigateDown={navigateDown}
          startTransition={startTransition}
          endTransition={endTransition}
        >
          {child}
        </PagePilingSection>
      );
    });
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {renderChildren()}
    </div>
  );
}

interface IPagePilingSection {
  direction: number;
  open: boolean;
  children: ReactNode;
  navigateUp: () => void;
  navigateDown: () => void;
  startTransition: () => void;
  endTransition: () => void;
}

function PagePilingSection({
  direction,
  open,
  children,
  navigateUp,
  navigateDown,
  startTransition,
  endTransition,
}: IPagePilingSection) {
  const duration = 500;

  function handleScrollBehavior(currentTarget: Element, change: number) {
    const { clientHeight, scrollHeight, scrollTop } = currentTarget;
    if (scrollTop === 0 && change < 0) {
      navigateUp();
    } else if (scrollTop + clientHeight === scrollHeight && change > 0) {
      navigateDown();
    }
  }

  /** wheel events happen whenever the scroll wheel is moved, and also when scroll is initiated on a trackpad */
  const onWheel = (e: WheelEvent) =>
    handleScrollBehavior(e.currentTarget, e.deltaY);
  /**
   * Custom event that wraps around a combination of touchmove and touchstart
   * The direction is positive when scrolling down, since y values are higher when you scroll down
   */
  const onTouchScroll = ({
    currentTarget,
    direction,
  }: {
    currentTarget: Element;
    direction: number;
  }) => handleScrollBehavior(currentTarget, direction);
  const { onTouchMove, onTouchStart } = useOnTouchScroll(onTouchScroll);

  /** Use Web Animation API to animate a section going up or down */
  function animateSlide(
    node: HTMLElement,
    done: () => void,
    direction: number
  ) {
    const keyframes =
      direction > 0
        ? [
            { transform: `translateY(-100%)`, zIndex: 1 },
            { transform: `translateY(0)`, zIndex: 1 },
          ]
        : [
            { transform: `translateY(0)`, zIndex: 1 },
            { transform: `translateY(-100%)`, zIndex: 1 },
          ];
    startTransition();
    node.animate(keyframes, {
      // a bit extra time to avoid screen flashing when the animation ends and both sections have the same z-index
      duration: duration + 500,
      easing: "ease-out",
    }).onfinish = () => {
      endTransition();
      done();
    };
  }

  const slideDown = (node: HTMLElement, done: () => void) =>
    animateSlide(node, done, 1);
  const slideUp = (node: HTMLElement, done: () => void) =>
    animateSlide(node, done, -1);

  /** Make the section stay still */
  function wait(done: any) {
    setTimeout(done, duration);
  }

  function animation(node: HTMLElement, done: () => void) {
    if (open) {
      direction > 0 ? wait(done) : slideDown(node, done);
    } else {
      direction > 0 ? slideUp(node, done) : wait(done);
    }
  }

  return (
    <Transition
      in={open}
      addEndListener={animation}
      enter={true}
      exit={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <div
        className="absolute w-full h-full top-0 overflow-y-auto"
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {children}
      </div>
    </Transition>
  );
}

function useOnTouchScroll(
  onTouchScroll: ({
    currentTarget,
    direction,
  }: {
    currentTarget: any;
    direction: any;
  }) => void
) {
  const startLocation = useRef<number>(0);
  const onTouchStart = useCallback((e: TouchEvent) => {
    startLocation.current = e.touches[0].clientY;
  }, []);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      const { touches, currentTarget } = e;
      // a swipe up is a scroll down, but vertically down is greater y value
      if (touches[0].clientY > startLocation.current) {
        onTouchScroll({ direction: -1, currentTarget });
      } else if (touches[0].clientY < startLocation.current) {
        onTouchScroll({ direction: 1, currentTarget });
      }
    },
    [onTouchScroll]
  );

  return { onTouchStart, onTouchMove };
}
