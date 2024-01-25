import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutUs() {
  const image_our_mission = "/images/our_mission.png";
  const image_our_history = "/images/our_history.png";
  const image_what_sets_us_apart = "/images/what_sets_us_apart.png";
  const image_our_promise = "/images/our_promise.png";
  const image_join_us = "/images/join_us.png";
  return (
    <>
      <Header />
      <div className="about_us_div width">
        <div className="about_us__title__div">
          <h1>About Us</h1>
          <h2>
            Welcome to FanForte agency – Your Path to Success on OnlyFans!
          </h2>
          <p>
            Welcome to FanForte agency, we manage your OnlyFans account, you
            make the money! With 3+ years of experience, we rapidly grew to be
            the best OnlyFans management agency in our country.
          </p>
        </div>

        <div className="about_us__our_mission__div">
          <div className="about_us__our_mission__div__subdiv_1">
            <h1>Our mission</h1>
            <Image
              className="about_us_img_0"
              src={image_our_mission}
              height={512}
              width={512}
            />
            <p>
              At FanForte, we are dedicated to helping creators like you unlock
              your full potential on OnlyFans. Our mission is simple: empower,
              support, and elevate your online presence, enabling you to thrive
              in the digital world.
            </p>
          </div>
          <div className="about_us__our_mission__div__subdiv_2">
            <Image
              className="about_us_img"
              src={image_our_mission}
              height={512}
              width={512}
            />
          </div>
        </div>

        <div className="about_us__our_story__div">
          <div className="about_us__our_story__div__subdiv_2">
            <Image
              className="about_us_img_right"
              src={image_our_history}
              height={387}
              width={575}
            />
          </div>
          <div className="about_us__our_story__div__subdiv_1">
            <h1>Our Story</h1>
            <Image
              className="about_us_img_0"
              src={image_our_history}
              height={387}
              width={575}
            />
            <p>
              Founded in 2020 by Jessica, FanForte emerged from a simple act of
              friendship when Jessica helped her close friend Sarah navigate the
              complexities of online content creation. Impressed by Sarah's
              success, Jessica recognized a gap in the market for managing
              OnlyFans (OF) content creators. With her entrepreneurial spirit
              and talent-spotting abilities, she formalized her services and
              founded FanForte.
              <br />
              <br />
              Starting as a passion project, FanForte quickly gained traction in
              the online content creation industry. Jessica's dedication to her
              clients and her knack for spotting rising stars set the agency
              apart. Today, FanForte is a premier agency in Luxembourg and
              across Europe. Their comprehensive services, including content
              strategy, marketing, financial management, and legal support, have
              propelled many creators to online stardom. Jessica's agency is
              synonymous with excellence, reflecting her commitment to nurturing
              talent and helping individuals achieve their dreams in the dynamic
              world of online content creation.
            </p>
          </div>
        </div>

        <div className="about_us__our_mission__div">
          <div className="about_us__our_mission__div__subdiv_1">
            <h1>What Sets Us Apart</h1>
            <Image
              className="about_us_img_0"
              src={image_what_sets_us_apart}
              height={512}
              width={512}
            />
            <ul>
              <li>
                <span className="bold">Creator-Centric Approach:</span> We put
                creators first. Your vision, your content, your success - that's
                what matters most.
              </li>
              <li>
                <span className="bold">Experienced Guidance:</span> Our team of
                experts brings years of experience in content creation,
                marketing, and brand building.
              </li>
              <li>
                <span className="bold">Personalized Support:</span> We
                understand that every creator is unique. That's why we offer
                tailored guidance and support to help you reach your goals.
              </li>
              <li>
                <span className="bold">Cutting-Edge Technology:</span> We
                leverage the latest tools and strategies to ensure your content
                stands out in a crowded digital landscape.
              </li>
            </ul>
          </div>
          <div className="about_us__our_mission__div__subdiv_2">
            <Image
              className="about_us_img"
              src={image_what_sets_us_apart}
              height={512}
              width={512}
            />
          </div>
        </div>

        <div className="about_us__our_promise_div">
          <div className="about_us__our_promise_div__subdiv_2">
            <Image
              className="about_us_img_right"
              src={image_our_promise}
              height={512}
              width={512}
            />
          </div>
          <div className="about_us__our_promise_div__subdiv_1">
            <h1>Our Promise</h1>
            <Image
              className="about_us_img_0"
              src={image_our_promise}
              height={512}
              width={512}
            />
            <p>
              We promise to be your partner on your OnlyFans journey. When you
              choose FanForte, you're choosing:
            </p>
            <ul>
              <li>A team that believes in your vision</li>
              <li>Guidance to maximize your earning potential</li>
              <li>A community of like-minded creators</li>
              <li>Total control over your content</li>
            </ul>
          </div>
        </div>

        <div className="about_us__join_us_div">
          <div className="about_us__join_us_div__subdiv_1">
            <h1>Join Us Today!</h1>
            <Image
              className="about_us_img_0"
              src={image_join_us}
              height={512}
              width={512}
            />
            <p>
              Ready to take your OnlyFans presence to the next level? Join
              FanForte today and let us help you shine. Together, we'll reach
              for the stars!
            </p>
            <a href="contact-form">Join Now</a> <span className="bold2">|</span>{" "}
            <a href="contact-form">Contact Us</a>
          </div>
          <div className="about_us__join_us_div__subdiv_2">
            <Image
              className="about_us_img"
              src={image_join_us}
              height={512}
              width={512}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
