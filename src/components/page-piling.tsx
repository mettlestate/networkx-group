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
import { useNavStore } from "./store";

interface IPagePiling {
  initialView?: number;
  children: ReactNode[];
  onViewChange?: (pageIndex: number) => void;
}

export default function PagePiling(props: IPagePiling) {
  const store = useNavStore();

  const startTransition = () => store.setIsTransitioning(true);
  const endTransition = () => store.setIsTransitioning(false);

  function changeView(newView: number) {
    if (!store.isTransitioning) {
      store.setLastPageIndex(store.pageIndex);
      store.setPageIndex(newView);
      // history.replaceState({}, "", `${window.location.origin}?store.pageIndex=${store.pageIndex}`);
    }
  }

  const navigateUp = () =>
    store.pageIndex > 0 ? changeView(store.pageIndex - 1) : null;
  const navigateDown = () =>
    store.pageIndex < props.children.length - 1
      ? changeView(store.pageIndex + 1)
      : null;

  function renderChildren() {
    const direction = store.pageIndex > store.lastPageIndex ? 1 : -1;
    return Children.map(props.children, (child, index) => {
      return (
        <PagePilingSection
          key={index}
          direction={direction}
          open={index === store.pageIndex}
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
  const duration = 400;

  function handleScrollBehavior(currentTarget: Element, change: number) {
    const { clientHeight, scrollHeight, scrollTop } = currentTarget;
    if (scrollTop === 0 && change < 0) {
      navigateUp();
    } else if (scrollTop + clientHeight === scrollHeight && change > 0) {
      navigateDown();
    }
  }

  const onWheel = (e: WheelEvent) =>
    handleScrollBehavior(e.currentTarget, e.deltaY);

  const onTouchScroll = ({
    currentTarget,
    direction,
  }: {
    currentTarget: Element;
    direction: number;
  }) => handleScrollBehavior(currentTarget, direction);

  const { onTouchMove, onTouchStart } = useOnTouchScroll(onTouchScroll);

  function animateSlide(
    node: HTMLElement,
    done: () => void,
    direction: number
  ) {
    const keyframes =
      direction > 0
        ? [
            { transform: `translateY(-100%)`, zIndex: 49 },
            { transform: `translateY(0)`, zIndex: 49 },
          ]
        : [
            { transform: `translateY(0)`, zIndex: 49 },
            { transform: `translateY(-100%)`, zIndex: 49 },
          ];

    startTransition();

    node.animate(keyframes, {
      duration: duration + 20,
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

  const transitionStyles: { [key: string]: any } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
  };

  return (
    <Transition
      in={open}
      addEndListener={animation}
      enter={true}
      exit={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {(state) => (
        <div
          style={transitionStyles[state]}
          className="absolute w-full h-full top-0 overflow-y-auto"
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

function useOnTouchScroll(
  onTouchScroll: ({
    currentTarget,
    direction,
  }: {
    currentTarget: Element;
    direction: number;
  }) => void
) {
  const startLocation = useRef<number>(0);
  const onTouchStart = useCallback((e: TouchEvent) => {
    startLocation.current = e.touches[0].clientY;
  }, []);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      const { touches, currentTarget } = e;
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
