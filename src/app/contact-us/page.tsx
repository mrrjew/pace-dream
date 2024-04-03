import SectionSubscribe from "@/components/SectionSubscribe";
import ContactUsForm from "./ContactUsForm";
import ContactUsHero from "./ContactUsHero";

const ContactUs = () => {
  return (
    <div className="flex flex-col mb-20">
      <ContactUsHero />
      <ContactUsForm />
      <SectionSubscribe className="mx-4" />
    </div>
  );
};

export default ContactUs;
