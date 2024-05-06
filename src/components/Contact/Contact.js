
import './Contact.css';
import Footer from '../Footer/Footer'


function Contact() {
  return (
    <>
      <div className="contact-content custom-content-padding margin-top-auto">
        <h1>Contacts</h1>
        <div>
          <section className="general-contacts">
            <p>
              You can contact us <a className="link" href="https://www.instagram.com/"> @gazebosessions </a> on instagram
            </p>
          </section>
          <section className="specific-contacts">
            <p>
              Our members social media:
              <ul>
                <li>
                  <span>
                    image #01
                  </span>
                  <span>
                    name #01
                  </span>
                </li>
                <li>
                  <span>
                    image #01
                  </span>
                  <span>
                    name #01
                  </span>
                </li>
                <li>
                  <span>
                    image #01
                  </span>
                  <span>
                    name #01
                  </span>
                </li>
              </ul>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default Contact;
