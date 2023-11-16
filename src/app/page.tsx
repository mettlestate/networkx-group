// "use client";

import PagePiling from "@/components/page-piling";
import { SectionAbout } from "@/components/section-about";
import {
  SectionCompanies1,
  SectionCompanies2,
} from "@/components/section-companies";
import { SectionMain } from "@/components/section-home";
import { SectionMettlestate } from "@/components/section-mettlestate";
// import type { ReactNode } from "react";

// function getInitialView() {
//   const params = new URLSearchParams(window.location.search);
//   const initialView = parseInt(params?.get("view") || "0");
//   return !isNaN(initialView) ? initialView : 0;
// }

function App() {
  // const initialView = getInitialView();
  // const colors = ["red", "green", "blue", "orange"];

  // function onViewChange(view: number) {
  //   history.replaceState({}, "", `${window.location.origin}?view=${view}`);
  // }

  return (
    <PagePiling>
      <SectionMain />
      <SectionAbout />
      <SectionCompanies1 />
      <SectionCompanies2 />
      <SectionMettlestate />
    </PagePiling>
  );
}

export default App;
