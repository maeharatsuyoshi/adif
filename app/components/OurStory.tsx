import {
  getOurStoryContent,
  listOurStoryParagraphs,
} from "../lib/siteContent";
import OurStoryView from "./OurStoryView";

export default async function OurStory() {
  const [content, paragraphs] = await Promise.all([
    getOurStoryContent(),
    listOurStoryParagraphs(),
  ]);

  return <OurStoryView content={content} paragraphs={paragraphs} />;
}
