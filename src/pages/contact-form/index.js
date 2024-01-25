import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactForm() {
  useEffect(() => {
    let load = 0;

    const iframe = document.getElementById("gform");

    if (iframe) {
      iframe.addEventListener("load", () => {
        load++;
        if (load > 1) {
          window.location.href = "/thanks-for-submitting";
        }
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="forms__div">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9UuhMdTUvHQb6cS52DPPX97GaNzsTSl4zzF-7WYoWLJyH6g/viewform?embedded=true"
          id="gform"
          title="Google Form"
          className="googleForms"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </>
  );
}
