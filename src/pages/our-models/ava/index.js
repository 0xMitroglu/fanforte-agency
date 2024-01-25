import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Ava() {
  const image = "/images/model_ava.jpg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Ava</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Ava"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Ava</h1>
          <p className="div__ava__div__subdiv2__p__1">
            Ava was already well-known in the modeling scene, but her OnlyFans
            account wasn't doing well. She spent a lot of time on it without
            much success.
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            Ava's account was not convincing. She was there for a long time and
            invested a lot of time in her OnlyFans account without real success
            until she contacted us.
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She was making only about $100 a month
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She wasn't making much money from direct messages
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Despite all her efforts, her account wasn't successful
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 4 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Her monthly earnings skyrocketed to $57,000
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Her sales kept going up every month
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Now, Ava only has to work for two hours a day on her account, and
              it's thriving
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Ava says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            Hello, my name is Ava, and I come from a quiet town in New Zealand.
            My dream has always been to break free from the confines of my small
            hometown and achieve something more substantial. But, as you can
            imagine, it's not always a straightforward journey. Times can be
            challenging, and every job seems like a traditional trade of time
            for money. Often, by the end of the day, I felt too drained to do
            anything else. Then, a friend introduced me to a platform where, as
            she described it, you could earn "quick cash." The idea was
            straightforward: you get naked, take pictures, and people reward you
            with money. The amounts people were willing to pay were
            astonishingly high. So, I grabbed my smartphone, created an account,
            and started creating content. After a few months, I managed to earn
            my first $100, which I quickly withdrew. This was a significant
            moment for me, considering I used to make just a little over $100 a
            month at my nine-to-five job. However, I must admit that after six
            months on OnlyFans, I was completely exhausted, and it didn't bring
            in the money I had hoped for.
            <br />
            <br />
            Just when I was on the verge of closing my OnlyFans account, I
            stumbled upon FanForte Agency. I visited their website and decided
            to schedule a meeting with them, and the process was smooth. Once I
            signed with them, things started moving swiftly.
            <br />
            <br />
            Within the first month of our partnership, I was pleasantly
            surprised to see that I was in capable hands. It almost felt like a
            dream because in the first month, I earned $5,000. And then, my
            earnings skyrocketed. In the second month, it was $24,000, in the
            third month, $35,000, and after four months of collaboration, I was
            making an astounding $57,000 per month.
            <br />
            <br />I promptly quit my job, and I'm currently savoring this
            newfound freedom. FanForte does so much of the heavy lifting for me
            that I only need to dedicate two hours a day to maintain this
            impressive income. A heartfelt thank you to FanForte, to have helped
            me make so much money!
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
