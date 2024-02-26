import '../assets/Contact.css'
import '../assets/App.css'


function Contact() {
    return (
        <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src="src/assets/imgs/email.png"
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p><a href="mailto:vks7pp@gmail.com">vks7pp@gmail.com</a></p>
          </div>
          <div class="contact-info-container">
            <img
              src="src/assets/imgs/linkedin.png"
              alt="LinkedIn icon"
              class="icon contact-icon"
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>
    )
}

export default Contact;