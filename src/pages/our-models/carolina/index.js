import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Carolina() {
  const image = "/images/model_carolina.jpg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Carolina</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Carolina"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Carolina</h1>
          <p className="div__ava__div__subdiv2__p__1">
            FanForte was the right step towards a successful lifestyle
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            Carolina' didn’t have an account as she had never engaged with
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
          <h1>What Carolina says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            Truth be told, I've always received compliments on my beauty.
            Whenever I went to a club, guys would buy me drinks, and on dates,
            they'd insist on paying for dinner. It's a nice feeling, but you
            can't exactly make a living out of it, can you? Well, I found out
            that you can.
            <br />
            <br />
            Of course, I'd heard about OnlyFans, and one of my friends was doing
            exceptionally well on the platform. I was always a bit hesitant, and
            my technological skills weren't exactly top-notch. I started
            googling for tips and tricks for OnlyFans and stumbled upon the vast
            knowledgebase provided by FanForte, which has been my nightly
            reading ever since. After a few days, I mustered the courage to set
            up an appointment with FanForte, and to my surprise, I was
            immediately contacted, and everything went well!
            <br />
            <br />
            FanForte took charge of creating an account for me, helped me
            establish a presence on social media, and guided me in producing
            content. They also devised a marketing strategy and fine-tuned my
            social media accounts. When I saw the first pictures gaining immense
            popularity, I opened a bottle of champagne to celebrate my success.
            From that moment on, I knew my life was on the brink of a major
            transformation, and I began churning out content like there was no
            tomorrow. With just five months of experience under my belt, I'm now
            raking in over $25,000 USD per month. In fact, I could take a break
            for a few years if I wanted, but I'm having way too much fun, and
            working with FanForte is simply incredible. I hope my story can
            serve as an inspiration in some way. Who knows, maybe we'll cross
            paths at FanForte's offices someday!
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
