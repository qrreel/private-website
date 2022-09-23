import "../style/contact.css";

import GitHubLogo from "../img/GitHub-Mark-Light-32px.png";
import LinkedInLogo from "../img/PinClipart.com_graduation-designs-clip-art_1198440.png";
import MailLogo from "../img/Daco_532333.png";

export function Contact() {
  const links = [
    { name: "Mail", src: MailLogo, anchore: "mailto:rafalwas88@gmail.com" },
    {
      name: "LinkedIn",
      src: LinkedInLogo,
      anchore: "https://www.linkedin.com/in/rafa%C5%82-w%C4%85s-5b34a0248/",
    },
    { name: "GitHub", src: GitHubLogo, anchore: "https://github.com/qrreel" },
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
