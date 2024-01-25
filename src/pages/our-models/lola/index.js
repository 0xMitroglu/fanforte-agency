import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Lola() {
  const image = "/images/model_lola.jpeg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Lola</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Lola"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Lola</h1>
          <p className="div__ava__div__subdiv2__p__1">
            She was already happy with 57 fans but with 5,700 she is 100x
            happier
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            At OnlyFans there is often a certain limit that cannot be crossed.
            In Olivia’s case, it was the 57 fans she couldn’t top on her own.
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Lola started with just 57 fans and couldn’t increase that
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Only made $700 per month
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Almost no revenue from direct messaging
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 3 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Earnings now from over 5,700 fans
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Now earns $70,000 a month
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              80% of sales now come from direct messages
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Lola says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            Hey there, I'm Lola, and I'm sure you've heard plenty about the
            incredible opportunities that OnlyFans offers. Let me share my
            journey as a complete unknown in this vast digital realm. Armed with
            just my trusty iPhone, I began creating content and slowly started
            attracting a small audience. I have to admit, that first
            subscription was like a rush of euphoria. It was money flowing in
            because of something I'd produced, not tied to any company or
            employer. It felt liberating.
            <br />
            <br />
            JFor months, I poured my heart and soul into it, and at my peak, I
            had around 57 fans. It was nice, but it didn't seem sustainable
            given the effort I was putting in.
            <br />
            <br />
            I knew I needed a change, a fresh approach, and that's when FanForte
            entered the picture. I stumbled upon their name and decided to have
            an informal chat. The conversation flowed naturally, and I felt
            right at home. After signing with FanForte, they revamped my account
            and expanded my presence across various social networks. They
            handled all the intricate details while I eagerly monitored my
            account daily. To my astonishment, the numbers kept climbing. I
            started with just 57 fans, and within three months of collaborating
            with FanForte, I had a whopping 5,700 fans!
            <br />
            <br />I made a life-changing decision to quit my full-time job
            because, thanks to FanForte, I'm now consistently making over
            $70,000 USD each month. It's been a surreal journey, and I'm living
            a life that many can only dream of. I want to express my deepest
            gratitude to FanForte, and most importantly, to my incredibly loyal
            fans who have made all of this possible!
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
