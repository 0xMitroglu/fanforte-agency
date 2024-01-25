export default function ContactDiv() {
  return (
    <div className="contact__div">
      <div className="main__div div13">
        <h1 className="main__div13__h1">Make an appointment</h1>
        <h5 className="main__div13__h5">
          We will advise you on how to become successful in just a few days
        </h5>
        <p className="main__div13__p">
          Get in touch with us and we’ll make sure that you never have to work
          again and become so successful that you can go on vacation at any time
          to places that others only dream of !
        </p>
        <button
          className="main__div13__button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/contact-form";
          }}
        >
          Make an appointment now
        </button>
      </div>
    </div>
  );
}
