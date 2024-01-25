import Image from "next/image";
import CarouselComponent from "./Slider";
import { useState, useEffect, useRef } from "react";
import ContactDiv from "./ContactDiv";

export default function Main() {
  const imgsrc1 = "/images/why_choose_us_resized.png";
  const imgsrc2 = "/images/depressed_model.png";
  const imgsrc3 = "/images/money_graph.jpg";
  const imgsrc4 = "/images/statement_1.png";
  const imgsrc5 = "/images/statement_2.png";
  const imgsrc6 = "/images/statement_3.png";
  const imgsrc7 = "/images/up-arrow.png";
  const imgsrc10 = "/images/faq_image.jpg";
  const numberElements = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value as needed to trigger the animation at the right point
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element is in the viewport, start the count-up animation
          const target = entry.target;
          const originalText = target.innerText; // Store the original text
          const startValue = 0; // Set your initial value here
          const endValue = parseFloat(originalText.replace(/[^\d.-]/g, "")); // Extract the numeric value from the element's text
          const duration = 1500; // Animation duration in milliseconds (3 seconds)

          let startTime;
          function animateCount(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const currentValue =
              startValue + percentage * (endValue - startValue);
            target.innerText = originalText.replace(
              /[\d,.]+/,
              currentValue.toFixed(0)
            ); // Update the element with the current value, preserving symbols

            if (percentage < 1) {
              requestAnimationFrame(animateCount);
            }
          }

          requestAnimationFrame(animateCount);
        }
      });
    }, options);

    // Observe all the number elements
    numberElements.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <button
        className={`to-top${isVisible ? " active" : ""}`}
        onClick={scrollToTop}
      >
        <Image src={imgsrc7} height={50} width={50} alt="arrow to top" />
      </button>
      <div className="main__div div1 width">
        <h1>The #1 OnlyFans Agency in Luxembourg</h1>
        <p>
          The top 0.1% of the OnlyFans models earn more than 1,000,000 $ per
          month!
          <br />
          And guess what? They ALL work with an agency!
        </p>
        <button
          className="main__div1__button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/contact-form";
          }}
        >
          Contact us now
        </button>
      </div>

      <div className="main__div div2 width">
        <div className="main__div2__subdiv1">
          <h1>We want your business to succeed</h1>
          <p>We build outstanding OnlyFans careers</p>
          <ul className="main__div2__subdiv1__ul">
            <li>Influencer Outreach</li>
            <li>24/7 Earnings</li>
            <li>Dedicated Account Managers</li>
            <li>Strategic Growth Plans</li>
            <li>Client Retention Experts</li>
            <br className="main__div2__subdiv1__br" />
            <li>Social Media Consultation</li>
            <li>Comprehensive Account Audits</li>
            <li>Customized Account Strategies</li>
            <li>Efficient Customer Acquisition</li>
          </ul>
        </div>
        <div className="main__div2__subdiv2">
          <Image
            src={imgsrc1}
            width={1250}
            height={954}
            className="main__div2__why_us_img"
            alt="talent manage picture"
            priority={true}
          />
        </div>
      </div>
      <div className="main__div2__button__container">
        <button
          className="main__div2__button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/about-us";
          }}
        >
          why you should choose us
        </button>
      </div>

      <div className="main__div div3 width">
        <div className="main__div3__subdiv1">
          <h1>OnlyFans is not easy</h1>
          <p className="main__div3__subdiv1__p">
            OnlyFans is a really competitive market, and without an agency you
            might never make it
          </p>
          <Image
            src={imgsrc2}
            width={1244}
            height={1474}
            className="main__div3__subdiv1__img"
            alt="depressed OF model"
          />
        </div>
        <div className="main__div3__subdiv2">
          <ul className="main__div3__subdiv2__ul">
            <li className="main__div3__subdiv2__ul__li">
              <h2 className="main__div3__subdiv2__ul__li__h2 main__div3__subdiv2__ul__li__h2__first__child">
                Difficult competition
              </h2>
              <p>
                Stand out in a crowded field of 5 million creators. Gain
                followers daily and tackle challenges effectively.
              </p>
            </li>
            <li className="main__div3__subdiv2__ul__li">
              <h2 className="main__div3__subdiv2__ul__li__h2">No strategy</h2>
              <p>
                Avoid disappointment by crafting content with a plan. Let us
                guide you with a strategic blueprint for success.
              </p>
            </li>
            <li className="main__div3__subdiv2__ul__li">
              <h2 className="main__div3__subdiv2__ul__li__h2">
                Efficient Time Management
              </h2>
              <p>
                Meet audience expectations with consistent content. Learn
                effective time management to keep followers engaged.
              </p>
            </li>
            {/* <li className="main__div3__subdiv2__ul__li">
              <h2 className="main__div3__subdiv2__ul__li__h2">
                No Inspiration
              </h2>
              <p>
                Don't struggle with ideas and teamwork. Our experts analyze
                trends and inspire fresh concepts for TikTok, Instagram, and
                OnlyFans.
              </p>
            </li> */}
            <li className="main__div3__subdiv2__ul__li">
              <h2 className="main__div3__subdiv2__ul__li__h2">No motivation</h2>
              <p>
                Overcome creative blocks with expert insights. Explore trends
                and gain inspiration for TikTok, Instagram, and OnlyFans.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="div4-content-container">
        <div className="main__div div4">
          <h1>But with us you will succeed</h1>
          <p className="main__div4__p">
            With over 3 years of experience, we rapidly grew to be the best OF
            agency in our country, if not through whole Europe! Our motto that
            was and will ever be: Monetize, We Optimize! So don't hesitate:
          </p>
          <button
            className="main__div5__button main__div4__button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/contact-form";
            }}
          >
            Contact us now
          </button>
        </div>
      </div>

      <div className="main__div div5 width">
        <div className="main__div5__subdiv1">
          <h1>Why do successful models need an Agency ?</h1>
          <p className="main__div5__subdiv1__p0">
            At our agency, we provide invaluable support to help you fast-track
            your journey toward achieving your goals and dreams.
          </p>
          <h2 className="main__div5__subdiv1__h2">
            Non-Stop Earnings, Effortlessly
          </h2>
          <p className="main__div5__subdiv1__p">
            With us, you can enjoy a 24/7 income stream without constantly
            tending to your OnlyFans account. Say goodbye to checking your
            earnings every few minutes; instead, kick back and watch the money
            roll in continuously.
          </p>
          <h2 className="main__div5__subdiv1__h2">
            Unleashing the Power of AI
          </h2>
          <p className="main__div5__subdiv1__p">
            Keeping tabs on the ever-evolving market and emerging trends can be
            a daunting task for an individual. Our AI systems are your
            behind-the-scenes experts, meticulously identifying trends and
            crafting highly effective strategies. We adapt to your audience's
            responses automatically, catapulting your channel's growth ahead of
            the competition.
          </p>
          <h2 className="main__div5__subdiv1__h2">
            Boosting Your Content Creation
          </h2>
          <p className="main__div5__subdiv1__p">
            We're here to support you in content production. Our team, with its
            wealth of marketing and management experience, guarantees remarkable
            growth and sustained popularity for both you and your creative
            endeavors.
          </p>
          <h2 className="main__div5__subdiv1__h2">You're Never Alone</h2>
          <p className="main__div5__subdiv1__p">
            When you're with us, you're not just a client; you're part of our
            family. We maintain close contact, ensuring you can reach out to us
            anytime. We believe wholeheartedly in you, your work, and the joy it
            brings. Join us; we want you!
          </p>
        </div>
        <div className="main__div5__subdiv2">
          <Image
            src={imgsrc3}
            width={7972}
            height={6600}
            className="moneygraphimg"
            alt="graph of money"
          />
        </div>
      </div>

      <div className="main__div div6 width">
        <div className="main__div6__subdiv1">
          <h1 className="main__div6__h1">FanForte Agency</h1>
          <ul className="main__div6__subdiv1__ul">
            <li className="main__div6__subdiv1__ul__li__1">
              No upfront or setup fees
            </li>
            <li className="main__div6__subdiv1__ul__li__1">
              Over 3 years of experience
            </li>
            <li className="main__div6__subdiv1__ul__li__1">
              Direct payout to the model’s bank account
            </li>
            <li className="main__div6__subdiv1__ul__li__1">
              Models still have access to all accounts
            </li>
            <li className="main__div6__subdiv1__ul__li__1">
              We usually respond within 0 - 2 business days
            </li>
          </ul>
        </div>
        <div className="main__div6__subdiv2">
          <h1 className="main__div6__h1">Other agencys</h1>
          <ul>
            <li className="main__div6__subdiv1__ul__li__2">
              Up to $20,000 upfront or setup fee
            </li>
            <li className="main__div6__subdiv1__ul__li__2">
              No experience (beginner agency)
            </li>
            <li className="main__div6__subdiv1__ul__li__2">
              Payout to agency’s bank account
            </li>
            <li className="main__div6__subdiv1__ul__li__2">
              No access to any account
            </li>
            <li className="main__div6__subdiv1__ul__li__2">Sporadic contact</li>
          </ul>
        </div>
      </div>
      <div className="main__div65__btndiv width">
        <button
          className="main__div65__button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/contact-form";
          }}
        >
          Apply now
        </button>
      </div>

      <div className="main__div div7">
        <div className="main__div7__subdiv subdiv1">
          <h4
            className="main__div7__subdiv__h4"
            ref={(el) => numberElements.current.push(el)}
          >
            15+
          </h4>
          <p className="main__div7__subdiv__p">
            The size of our dedicated team
          </p>
        </div>
        <div className="main__div7__subdiv subdiv2">
          <h4
            className="main__div7__subdiv__h4"
            ref={(el) => numberElements.current.push(el)}
          >
            7 K
          </h4>
          <p className="main__div7__subdiv__p">Number of daily new fans</p>
        </div>
        <div className="main__div7__subdiv subdiv3">
          <h4
            className="main__div7__subdiv__h4"
            ref={(el) => numberElements.current.push(el)}
          >
            10+
          </h4>
          <p className="main__div7__subdiv__p">
            Number of models under contract
          </p>
        </div>
        <div className="main__div7__subdiv subdiv4">
          <h4
            className="main__div7__subdiv__h4"
            ref={(el) => numberElements.current.push(el)}
          >
            $ 31700
          </h4>
          <p className="main__div7__subdiv__p">Average turnover per model</p>
        </div>
        <div className="main__div7__subdiv subdiv5">
          <h4
            className="main__div7__subdiv__h4"
            ref={(el) => numberElements.current.push(el)}
          >
            $ 110,000
          </h4>
          <p className="main__div7__subdiv__p">
            Our Nr. 1 Model turnover per month
          </p>
        </div>
      </div>

      <div className="div14"></div>
      <div className="div16">
        <div className="main__div div8">
          <h1 className="main__div8__h1">Results of our models</h1>
          <p className="main__div8__p">
            Some of our models have allowed us to post their earnings and
            achievements on the website so you can see what is possible when you
            have the right agency.
          </p>
          <Image
            src={imgsrc4}
            height={700}
            width={400}
            className="main__div8__img"
            alt="example of money made by one of our OF models"
          />
          <Image
            src={imgsrc5}
            height={700}
            width={400}
            className="main__div8__img"
            alt="example of money made by one of our OF models"
          />
          <Image
            src={imgsrc6}
            height={700}
            width={400}
            className="main__div8__img"
            alt="example of money made by one of our OF models"
          />
        </div>
      </div>
      <div className="div17"></div>

      <div className="main__div div9 width">
        <h1 className="main__div9__h1">Have a look at our talents</h1>
        <div className="carousel-container">
          <CarouselComponent />
        </div>
      </div>
      <div className="main__div9__button__container">
        <button
          className="main__div9__button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/our-models";
          }}
        >
          see more
        </button>
      </div>

      <div className="main__div div10 width">
        <div className="main__div__div10__subdiv1">
          <h2 className="main__div__div10__subdiv1__h2">Why work with us ?</h2>
          <p>
            We maximize your OnlyFans earnings with tailored strategies and
            expert marketing. Our focus on privacy, compliance, and transparent
            pricing ensures a worry-free partnership. Get responsive,
            data-driven support for your unique content goals.
          </p>
        </div>
        <div className="main__div__div10__subdiv2">
          <div className="main__div__div10__subdiv2__container">
            <div className="main__div__div10__subdiv2__container__subcon1">
              <div className="main__div__div10__subdiv2__subdiv1 main__div10__subdiv2__box">
                Experience
              </div>
              <div className="main__div__div10__subdiv2__subdiv2 main__div10__subdiv2__box">
                Transparency
              </div>
              <div className="main__div__div10__subdiv2__subdiv3 main__div10__subdiv2__box">
                Loyalty
              </div>
            </div>
            <div className="main__div__div10__subdiv2__container__subcon2">
              <div className="main__div__div10__subdiv2__subdiv4 main__div10__subdiv2__box">
                Results
              </div>
              <div className="main__div__div10__subdiv2__subdiv5 main__div10__subdiv2__box">
                Trust
              </div>
              <div className="main__div__div10__subdiv2__subdiv6 main__div10__subdiv2__box">
                Secure
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main__div div11">
        <div className="main__div__div11__subdiv0"></div>
        <div className="main__div__div11__subdiv1">
          <h1 className="main__div__div11__subdiv__h1">200M+</h1>
          <p className="main__div__div11__subdiv__p">views</p>
        </div>
        <div className="main__div__div11__subdiv2">
          <h1 className="main__div__div11__subdiv__h1">23,5M</h1>
          <p className="main__div__div11__subdiv__p">followers</p>
        </div>
        <div className="main__div__div11__subdiv4"></div>
      </div>

      <div className="main__div div12 width">
        <div className="main__div12__subdiv1">
          <h1 className="main__div12__subdiv1__h1">
            Frequently Asked Questions
          </h1>
          <Image
            src={imgsrc10}
            width={1660}
            height={1660}
            alt="faq image"
            className="faq_image"
          />
          <p className="main__div12__subdiv1__p">
            See all questions <a href="/faq">here</a>
          </p>
        </div>
        <div className="main__div12__subdiv2">
          <ul className="accordion">
            <li>
              <input type="radio" name="accordion" id="first" defaultChecked />
              <label htmlFor="first">
                How long does it take to see the first results?
              </label>
              <div className="content">
                <p>
                  It depends on your current social media presence. Without
                  followers, it is possible to earn $10,000 after just 3-4
                  weeks. If you already have a few fans or a good quality social
                  media following it could be much quicker.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="second" />
              <label htmlFor="second">
                What if I do not want to take nude photos?
              </label>
              <div className="content">
                <p>
                  This is an important consideration that everyone must answer
                  for themselves. Our models should only go as far as they feel
                  comfortable. Normal and erotic photos, are enough to test it
                  in the beginning. To give the fans more exclusive content,
                  nude photos are very helpful. Fans like to see this and are
                  willing to pay more for this exclusive content.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="third" />
              <label htmlFor="third">How much time do I have to invest?</label>
              <div className="content">
                <p>
                  LUsually you only need about 1-2 hours per day. Sometimes,
                  when your DMs are full of paying fans, it can be more. When
                  the revenue rises above $40,000, it often makes sense to quit
                  your main job and invest more time in Onlyfans
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="fourth" />
              <label htmlFor="fourth">
                What if I do not want to show my face?
              </label>
              <div className="content">
                <p>
                  It always the better option to show the face. It is much
                  easier to generate fans. People like to see faces and read
                  them. They see if you’re having fun, if you’re happy, if
                  you’re doing well, or if you want more. We have some
                  successful models who do not show their face. It can work very
                  well. We have to test it.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <ContactDiv />
    </main>
  );
}
