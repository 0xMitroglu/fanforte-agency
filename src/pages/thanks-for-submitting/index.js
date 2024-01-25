import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThanksForSubmitting() {
  return (
    <div className="thanks__for__submitting footer__grow">
      <Header />
      <div className="thanks__submitting__div footer__grow__div">
        thanks for submitting to our form, go back to homepage{" "}
        <a href="/" className="thanks__submitting__div__a">
          here
        </a>
      </div>
      <Footer />
    </div>
  );
}
