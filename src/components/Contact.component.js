import "../style/contact.css";

import GITHUB_ICON from "../img/contact/github.png";
import LINKEDIN_ICON from "../img/contact/linkedin.png";
import MAIL_ICON from "../img/contact/mail.png";
import PHONE_ICON from "../img/contact/phone.png";

export function Contact() {
  const links = [
    { name: "Mail", src: MAIL_ICON, anchore: "mailto:rafalwas88@gmail.com" },
    { name: "Phone", src: PHONE_ICON, anchore: "tel:602367854" },
    {
      name: "LinkedIn",
      src: LINKEDIN_ICON,
      anchore: "https://www.linkedin.com/in/rafa%C5%82-w%C4%85s-5b34a0248/",
    },
    { name: "GitHub", src: GITHUB_ICON, anchore: "https://github.com/qrreel" },
  ];

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
