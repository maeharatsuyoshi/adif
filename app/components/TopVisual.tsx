import { getHeroContent } from "../lib/siteContent";
import TopVisualView from "./TopVisualView";

export default async function TopVisual() {
  const content = await getHeroContent();
  return <TopVisualView content={content} />;
}
