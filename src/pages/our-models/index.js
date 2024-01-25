import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactDiv from "@/components/ContactDiv";

export default function OurModels() {
  const img1 = "/images/model_ava.jpg";
  const img2 = "/images/model_sabrina.jpg";
  const img3 = "/images/model_matilda.png";
  const img4 = "/images/model_thafi.jpg";
  const img5 = "/images/model_lily.png";
  const img6 = "/images/model_carolina.jpg";
  const img7 = "/images/model_jane.png";
  const img8 = "/images/model_lola.png";
  const img9 = "/images/model_ashley.jpeg";
  return (
    <div className="our__models">
      <Header />
      <div className="our__models__heading">
        <h1 className="our__models__heading__h1">Our Models</h1>
        <h2 className="our__models__heading__h2">
          <span className="hide__-__on__responsive">-</span> Success Stories{" "}
          <span className="hide__-__on__responsive">-</span>
        </h2>
      </div>
      <div className="our__models__pictures">
        <div className="our__models__pictures__picture picture1">
          <Image
            src={img1}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Ava</h3>
          <p className="our__models__pictures__p">Only made $200 per month</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/ava";
            }}
          >
            Ava's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture2">
          <Image
            src={img2}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Sabrina</h3>
          <p className="our__models__pictures__p">No reach on any platform</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/sabrina";
            }}
          >
            Sabrina's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture3">
          <Image
            src={img3}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Matilda</h3>
          <p className="our__models__pictures__p">Inconsistent Income</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/matilda";
            }}
          >
            Matilda's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture4">
          <Image
            src={img4}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Thafi</h3>
          <p className="our__models__pictures__p">
            Didn't have time to get going
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/thafi";
            }}
          >
            Thafi's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture5">
          <Image
            src={img5}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Lily</h3>
          <p className="our__models__pictures__p">Mental Health Struggles</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/lily";
            }}
          >
            Lily's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture6">
          <Image
            src={img6}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Carolina</h3>
          <p className="our__models__pictures__p">
            Haven't had an OnlyFans account
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/carolina";
            }}
          >
            Carolina's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture7">
          <Image
            src={img7}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Jane</h3>
          <p className="our__models__pictures__p">Was working 8 hours a day</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/jane";
            }}
          >
            Jane's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture8">
          <Image
            src={img8}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Lola</h3>
          <p className="our__models__pictures__p">Started out with 57 Fans</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/lola";
            }}
          >
            Lola's solution
          </button>
        </div>
        <div className="our__models__pictures__picture picture9">
          <Image
            src={img9}
            width={512}
            height={718} /* layout="responsive" */
          />
          <h3 className="our__models__pictures__h3">Ashley</h3>
          <p className="our__models__pictures__p">Wasn't relevant enough</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/our-models/ashley";
            }}
          >
            Ashley's solution
          </button>
        </div>
      </div>
      <ContactDiv />
      <Footer />
    </div>
  );
}
