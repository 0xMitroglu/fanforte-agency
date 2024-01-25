import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Sabrina() {
  const image = "/images/model_sabrina.jpg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Sabrina</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Sabrina"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Sabrina</h1>
          <p className="div__ava__div__subdiv2__p__1">No fans – no money</p>
          <p className="div__ava__div__subdiv2__p__2">
            We were supposed to help her generate reach and fans, which worked
            wonderfully.
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              No reach on Instagram, Twitter, TikTok, etc.
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              no idea how to build reach and generate fans
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 4 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Sabrina now has a huge reach on social media.
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              We developed strategies for them that work very well
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              new fans are joining onlyfans every day
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              we quickly achieved sales of $37,000
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Sabrina says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            I hesitated to use my personal Instagram account for OnlyFans; it
            just didn't feel right. At the time, I didn't have any alternative
            accounts either.
            <br />
            <br />
            Building a substantial following on social media can be incredibly
            challenging, as it depends on various factors that are often beyond
            your control. I'll admit, I initially tried another agency, but even
            after weeks of effort, we saw no significant success. That's when I
            decided to make the switch to FanForte. Right from day one, they
            helped me grow my audience in the way I envisioned. What fascinated
            me the most was that not only did my fanbase expand as I'd hoped,
            but I also started earning an income that I never thought was
            possible.
            <br />
            <br />
            So, can you really make a substantial income with OnlyFans?
            Absolutely, you can generate an incredible amount of money. But can
            you do it all on your own? Well, if you possess a deep understanding
            of all the social media platforms, stay up-to-date with current
            trends and marketing strategies, have technical expertise, and know
            the myriad ways to self-promote, then theoretically, yes, it's
            possible. But it's a monumental task for one person to handle alone.
            Personally, I prefer having a dedicated team behind me, a team I can
            rely on completely, and one without whom I would have never reached
            the heights I have.
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
