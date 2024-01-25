import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Matilda() {
  const image = "/images/model_matilda.jpg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Matilda</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Matilda"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Matilda</h1>
          <p className="div__ava__div__subdiv2__p__1">
            FanForte was the right step towards a successful lifestyle
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            Matilda' didn’t have an account as she had never engaged with
            OnlyFans. That’s why we did it for her and were able to promote her
            to the top 1% of OnlyFans models
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Never dealt with OnlyFans
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Had no real connection to the background of the production of the
              content
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Wanted to earn money as a model (online), but did not know how
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 5 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              All social media accounts optimized for performance and sales
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Ava has learned how to create content that sells
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              She now earns over $25,000 per month after 5 months of working
              together – with no prior experience
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Matilda says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            Hello, I'm Matilda, and I'd like to share my journey with you,
            specifically about how I overcame inconsistent income with the help
            of FanForte.
            <br />
            <br />
            In the past, people often praised my looks. While it was pleasant,
            it didn't translate into a steady income. The idea of OnlyFans had
            crossed my mind, but I was unsure where to start, especially since I
            wasn't tech-savvy. I started researching tips and tricks for
            OnlyFans and discovered FanForte agency.
            <br />
            <br />
            First, I tried to do OnlyFans on my own, but sometimes I was not
            motivated, I had a busy day or I just did not know what content to
            produce.
            <br />
            <br />
            After a few days, I decided to take the plunge and set up an
            appointment with FanForte. I was quickly connected with my dedicated
            manager, who has been a tremendous support throughout my journey.
            <br />
            <br />
            FanForte built my presence on social media, and guided me in
            producing engaging content. They devised a strategic marketing plan
            and optimized my social media profiles. When my initial photos
            started gaining traction, we celebrated our achievements with a
            toast.
            <br />
            <br />
            From that point forward, I knew my life was about to transform, and
            I immersed myself in creating content with dedication. In just a
            couple of months, despite having no prior experience, I'm now
            earning a consistent income of over $45,000 USD each month, putting
            an end to my financial instability.
            <br />
          </p>
          <Image
            src={imageQuote2}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__2"
          />
        </div>
      </div>
      <ContactDiv />
      <Footer />
    </div>
  );
}
