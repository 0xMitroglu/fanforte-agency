import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Ashley() {
  const image = "/images/model_ashley.jpeg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Ashley</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Ashley"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Ashley</h1>
          <p className="div__ava__div__subdiv2__p__1">
            Ashley was already on Onlyfans, Tik-Tok and Instagram, but had no
            idea how to generate Fans and redirect them to her OF account.
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            Ashley's account was not convincing, she had no idea of trends or
            marketing
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She was not a marketing professional
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She did not know how to generate fans
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Her OF account was not well-managed
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 4 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              We have a marketing and advertising crew that help Ashley stand
              out
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Her fan-basis keeps going up every month
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Her new generated fans on tik-tok and Instagram are easily
              converted into OnyFans followers
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Ashley says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            My name is Ashley, and I want to share my incredible journey with
            FanForte. Before I joined this agency, I had worked with another
            agency before, but it was just a scam. I struggled to find my place
            in the digital world. I was just another face in the crowd, not
            relevant enough to stand out. I didn't know what was popular and
            successful, and I had no clue how to become famous or redirect my
            Instagram and TikTok followers to my OnlyFans account.
            <br />
            <br />
            Then, FanForte came into my life like a beacon of hope. They have a
            whole crew dedicated to tracking trends, testing innovative
            advertising methods, and employing AI to stay ahead of the curve.
            And that's not all; they have a team of marketing professionals who
            work tirelessly to help me maximize my earnings on OnlyFans.
            <br />
            <br />
            FanForte transformed my life. Thanks to their guidance, expertise,
            and cutting-edge strategies, I've become incredibly successful. I'm
            now a recognized name in the digital world, and my income has
            skyrocketed beyond my wildest dreams. FanForte has not only helped
            me find my way but has also given me the tools and knowledge to
            continue growing and thriving in this industry. If you're looking to
            make it big and truly succeed, FanForte is the agency you need by
            your side. They've certainly made all the difference in my journey
            to success.
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
