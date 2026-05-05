import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Member from "./components/Member";
import OurStory from "./components/OurStory";
import TopVisual from "./components/TopVisual";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex flex-1 flex-col">
        <TopVisual />
        <OurStory />
        <Member />
        <ContactUs />
      </main>
    </>
  );
}
