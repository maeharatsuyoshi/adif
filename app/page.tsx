import { Suspense } from "react";
import BackToTop from "./components/BackToTop";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Member from "./components/Member";
import MemberSkeleton from "./components/MemberSkeleton";
import OurStory from "./components/OurStory";
import ScrollIndicator from "./components/ScrollIndicator";
import TopVisual from "./components/TopVisual";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex flex-1 flex-col">
        <TopVisual />
        <OurStory />
        <Suspense fallback={<MemberSkeleton />}>
          <Member />
        </Suspense>
        <ContactUs />
      </main>
      <ScrollIndicator />
      <BackToTop />
    </>
  );
}
