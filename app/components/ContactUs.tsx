import { getContactContent } from "../lib/siteContent";
import ContactUsView from "./ContactUsView";

export default async function ContactUs() {
  const content = await getContactContent();
  return <ContactUsView content={content} />;
}
