import "../style/contact.css";
import { links } from "../data/data-contact";

export function Contact() {
  const contact = links.map((link) => (
    <a href={link.anchore} key={link.name} target="blank">
      <img src={link.src} className="contact-container__icon" alt={link.name} />
    </a>
  ));

  return (
    <div id="contact-container">
      <div id="contact-container__contact">contact</div>
      {contact}
    </div>
  );
}
