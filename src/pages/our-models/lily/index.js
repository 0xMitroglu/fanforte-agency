import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function Lily() {
  const image = "/images/model_lily.jpeg";
  const imageQuote1 = "/images/quote_img.png";
  const imageQuote2 = "/images/quote_img_reverse.png";
  return (
    <div className="div__ava">
      <Header />
      <div className="div__ava__div">
        <div className="div__ava__div__subdiv1">
          <h1 className="div__ava__div__subdiv2__h1 display_2">Lily</h1>
          <br />
          <br />
          <Image
            src={image}
            height={718}
            width={512}
            alt="OF model Lily"
            className="div__ava__div__subdiv1__img"
          />
        </div>
        <div className="div__ava__div__subdiv2">
          <h1 className="div__ava__div__subdiv2__h1 display_1">Lily</h1>
          <p className="div__ava__div__subdiv2__p__1">
            Lily had a bit of a success on OF, doing $4,000 per month, but there
            was not the problem.
          </p>
          <p className="div__ava__div__subdiv2__p__2">
            Lily was dealing with odd individuals on her profile, critizising
            her constantly and making her feel horrible.
          </p>
          <p className="div__ava__div__subdiv2__p__3">Problem:</p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__1">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              Was only able to sleep about 4 hours per night due to odd people
              online
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She had to endure it all on herself, she wasn't mentally prepared
              for so much hate
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__1__li">
              She wasn't happy with the amount of money she was making every
              month
            </li>
          </ul>
          <p className="div__ava__div__subdiv2__p__4">
            After 3 months with FanForte:
          </p>
          <ul className="div__ava__div__subdiv2__ul div__ava__div__subdiv2__ul__2">
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Now, FanForte is doing all the work forher, she only needs to take
              pictures, no more hate or weird people hitting her
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              she can finally enjoy long nights of sleep, as well as a lifestyle
              that fits her expectations
            </li>
            <li className="div__ava__div__subdiv2__ul__li div__ava__div__subdiv2__ul__2__li">
              Her monthly earnings skyrocketed to $63,000
            </li>
          </ul>
        </div>
      </div>
      <div className="div__ava__div__2 ">
        <div className="width">
          <h1>What Lily says : </h1>
          <Image
            src={imageQuote1}
            height={512}
            width={512}
            className="div__ava__div__2__img div__ava__div__2__img__1"
          />
          <p className="div__ava__div__2__p">
            Hello, I'm Lily, and I'd like to share my remarkable journey with
            FanForte. Before I joined forces with this incredible agency, I was
            facing quite a few challenges. You see, I'd been dealing with a
            flood of odd individuals online, constantly striving to perfect
            myself, and squeezing in just four hours of sleep each night - all
            for a modest income of $6,000 per month.
            <br />
            <br />
            The online world can be a strange and unpredictable place, and I was
            struggling to navigate it on my own. Then, I heard about FanForte,
            and it felt like a lifeline had been thrown my way. I took a chance
            and reached out to them, and the transformation that followed was
            nothing short of amazing.
            <br />
            <br />
            FanForte not only shielded me from the eccentricities of the online
            realm but also shouldered the burden of self-improvement. They
            allowed me to focus on what truly mattered while they handled the
            rest. With their expert guidance, I found myself sleeping soundly
            through the night, free from the relentless grind I'd grown
            accustomed to.
            <br />
            <br />
            But the most incredible part of it all? My income skyrocketed.
            Thanks to FanForte's strategic approach and support, I'm now earning
            a staggering amount that far exceeds my previous efforts. FanForte
            didn't just solve my problems; they propelled me to new heights of
            success that I could only dream of. I am now able to make $63,000
            per month
            <br />
            <br />I can't thank FanForte enough for their unwavering dedication
            and expertise. They've turned my life around, and I'm now living the
            life I've always wanted, both financially and personally. If you
            find yourself facing similar challenges, don't hesitate to connect
            with FanForte. They have the power to transform your life just as
            they did mine.
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
