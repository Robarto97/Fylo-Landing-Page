import image2 from "./images/illustration-2.svg";
import arrow from "./images/icon-arrow.svg";
import quotes from "./images/icon-quotes.svg";
import avatar from "./images/avatar-testimonial.jpg";
const Main = () => {
  return (
    <main>
      <section className="productive">
        <div className="img-wrapper">
          <img src={image2} alt="" />
        </div>
        <div className="text">
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <p>
            <a href="/">See how Fylo works</a>
            <img src={arrow} alt="" />
          </p>
          <div className="review">
            <img src={quotes} alt="" />
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile">
              <div className="img-wrapper">
                <img src={avatar} alt="" />
              </div>
              <div className="roles">
                <p>Kyle Burton</p>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="access">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="form-group">
          <input type="text" placeholder="email@example.com" />
          <button>Get Started For Free</button>
        </div>
      </section>
    </main>
  );
};

export default Main;
