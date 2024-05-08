import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const ulStyle = {
    fontSize: "25px",
  };
  return (
    <div className="privacy__policy">
      <Header />
      <div className="privacy__policy__title__div">
        <h1 className="privacy__policy__title__div__h1">Privacy Policy</h1>
      </div>
      <p className="privacy__policy__p privacy__policy__p__first-child">
        At FanForte, accessible from www.fanforte-agency.vercel.app, one of our main priorities is
        the privacy of our visitors. This Privacy Policy document contains types of information that
        is collected and recorded by Fanforte and how we use it. <br />
        <br />
        If you have additional questions or require more information about our Privacy Policy, do
        not hesitate to contact us. <br />
        <br />
        This Privacy Policy applies only to our online activities and is valid for visitors to our
        website with regards to the information that they shared and/or collect in Fanforte. This
        policy is not applicable to any information collected offline or via channels other than
        this website.
      </p>
      <h1 className="privacy__policy__h1">Consent</h1>
      <p className="privacy__policy__p">
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>
      <h1 className="privacy__policy__h1">Information we collect</h1>
      <p className="privacy__policy__p">
        The personal information that you are asked to provide, and the reasons why you are asked to
        provide it, will be made clear to you at the point we ask you to provide your personal
        information. If you contact us directly, we may receive additional information about you
        such as your name, email address, phone number, the contents of the message and/or
        attachments you may send us, and any other information you may choose to provide. We do not
        collect neither sell cookies.
      </p>
      <h1 className="privacy__policy__h1">How we use your information</h1>
      <p className="privacy__policy__p">
        We use the information we collect in various ways, including to:
      </p>
      <ul className="privacy__policy__p privacy__policy__ul" style={ulStyle}>
        <li>Provide, operate, and maintain our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>
          Communicate with you, either directly or through one of our partners, including for
          customer service, to provide you with updates and other information relating to the
          website
        </li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>
      <h1 className="privacy__policy__h1">Log Files</h1>
      <p className="privacy__policy__p">
        FanForte doesn't follow a standard procedure of using log files. We collect no information
        about you, but regular business use these files to log visitors when they visit websites.
        All hosting companies do this and a part of hosting services’ analytics. The information
        collected by log files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number
        of clicks. These are not linked to any information that is personally identifiable. The
        purpose of the information is for analyzing trends, administering the site, tracking users’
        movement on the website, and gathering demographic information. And as statedt before, we do
        NOT use any kind of log files.
      </p>
      <h1 className="privacy__policy__h1">Advertising Partners Privacy Policies</h1>
      <p className="privacy__policy__p">
        We do not use cookies, neither we use third-party ad servers or ad networks to personalize
        the website. We do not sell any data, or use Javascript or Web Beacons to get any personal
        information.
      </p>
      <h1 className="privacy__policy__h1">Third Party Privacy Policies</h1>
      <p className="privacy__policy__p">No third party. 100% privacy</p>
      <h1 className="privacy__policy__h1">
        CCPA Privacy Rights (Do Not Sell My Personal Information)
      </h1>
      <p className="privacy__policy__p">
        As a consumer you have the right to: Request that a business that collects a consumer’s
        personal data disclose the categories and specific pieces of personal data that a business
        has collected about consumers. Request that a business delete any personal data about the
        consumer that a business has collected. Request that a business that sells a consumer’s
        personal data, not sell the consumer’s personal data. If you make a request, we have one
        month to respond to you. If you would like to exercise any of these rights, please contact
        us.(does not apply to us since we do not collect any type of data, but you can still contact
        us.)
      </p>
      <h1 className="privacy__policy__h1">GDPR Data Protection Rights</h1>
      <p className="privacy__policy__p">
        We would like to make sure you are fully aware of all of your data protection rights. Every
        user is entitled to the following: The right to access – You have the right to request
        copies of your personal data. We may charge you a small fee for this service. The right to
        rectification – You have the right to request that we correct any information you believe is
        inaccurate. You also have the right to request that we complete the information you believe
        is incomplete. The right to erasure – You have the right to request that we erase your
        personal data, under certain conditions. The right to restrict processing – You have the
        right to request that we restrict the processing of your personal data, under certain
        conditions. The right to object to processing – You have the right to object to our
        processing of your personal data, under certain conditions. The right to data portability –
        You have the right to request that we transfer the data that we have collected to another
        organization, or directly to you, under certain conditions. If you make a request, we have
        one month to respond to you. If you would like to exercise any of these rights, please
        contact us.
      </p>
      <h1 className="privacy__policy__h1">Children’s Information</h1>
      <p className="privacy__policy__p">
        Another part of our priority is adding protection for children while using the internet. We
        encourage parents and guardians to observe, participate in, and/or monitor and guide their
        online activity. FanForte does not encourage neither supports the usage of OnlyFans for
        people under the age of 18. If you think that your child provided this kind of information
        on our website, we strongly encourage you to contact us immediately and we will do our best
        efforts to promptly remove such information from our records.
      </p>
      <Footer />
    </div>
  );
}
