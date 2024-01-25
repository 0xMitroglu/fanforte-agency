import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Jane() {
  const image = "/images/model_jane.jpeg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Jane</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Jane"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Jane</h1>
          <p className="div__ava__div__subdiv2__p__1">
            Jane didn't have any job, since she was working full-time on her
            OnlyFans account.
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            She was working 8 hours a day, week-end included, for less than
            $10,000 monthly
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She had to work 8 hours a day
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She did not have any idea of the trends or marketing strategy
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Despite 8 hours of daily work she was earnig less than $10k per
              month
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 6 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              She now works less than 2 hours a day
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              We propulsed her account into the top 1% with our marketing
              startegies
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Now, Jane is a really succesfull model, earning over $100k per
              month
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Jane says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            Hello, I'm Jane, and I'd like to share my journey with you. Not too
            long ago, I was in a tough spot. I didn't have a job, and my days
            were consumed by endless hours of work on OnlyFans, including
            weekends. Despite my dedication, I was barely making ends meet, with
            a monthly income of less than $10,000.
            <br />
            <br />
            Then, one day, I stumbled upon FanForte Agency, and everything
            changed. Their team was incredibly supportive right from the start.
            They helped me create an account, establish a strong social media
            presence, and produce quality content. But what truly set FanForte
            apart was their strategic approach.
            <br />
            <br />
            With their guidance, I went from earning less than $10,000 a month
            to becoming a resounding success. In a matter of months, my income
            soared to new heights. I can hardly believe it myself, but now, I'm
            making well over $100,000 USD per month, and I couldn't be happier.
            <br />
            <br />
            The best part? I no longer have to work grueling hours every day,
            including weekends, just to make ends meet. FanForte has made this
            incredible transformation possible, and I'm forever grateful for
            their support. If you find yourself in a similar situation, I
            strongly recommend reaching out to FanForte Agency. They can help
            turn your life around, just like they did for me.
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
