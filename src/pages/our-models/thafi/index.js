import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Thafi() {
  const image = "/images/model_thafi.jpg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Thafi</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Thafi"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Thafi</h1>
          <p className="div__ava__div__subdiv2__p__1">
            Thafi now works for 2 hours a day and earns around $47,000 a month
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            Time is very important for Thafi and today she can use it however
            she wants because we at FanForte take care of everything.
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She had a 9 to 5 job and needed for OnlyFans additional 4-6 hours
              a day
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              It was not possible every day to have up to 6h for OnlyFans
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Thafi had no steady income. When she had a lot of time, it was
              $4000. When she did not manage to invest time, it was only $400
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 4 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              We take a lot of work off Thafi's hands. She only needs 1-2h a day
              now.
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              We were able to increase her monthly revenue to $40,000+
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Thafi was able to leave her 9 to 5 job
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Thafi says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            It all became overwhelming for me.
            <br />
            <br />
            You see, I used to have a typical 9-to-5 job, and I was determined
            to break free from that routine. My ambition was to maximize my
            earnings on OnlyFans. I pushed myself relentlessly, and it paid off.
            In just two months, I was making $5,000. But I couldn't sustain it.
            It demanded 4-6 hours of my time every day, all week long. I
            couldn't always keep up that pace, and my earnings plummeted to $500
            - $1,000. I tried to get back on track, but my motivation waned.
            <br />
            <br />
            Then, fate intervened, and I stumbled upon FanForte, who took the
            time to guide me through the possibilities. I was introduced to
            Lisa, my mentor, and I decided to entrust her with the reins. It was
            liberating to relinquish the responsibility and let someone else
            handle the heavy lifting. Suddenly, just 1-2 hours a day were
            enough, and I could finally regain some semblance of a normal life.
            <br />
            <br />I never thought it was possible, but now my earnings have
            surged to over $40,000. Lisa believes we can achieve even more. I'm
            thrilled about the future.
            <br />
            <br />
            Most important of all, ! could finaly leave my 9 to 5 job!
            <br />
            Thanks a lot to FanForte, they have improved my life so much!
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
