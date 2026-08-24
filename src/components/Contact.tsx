const contacts = [
  {
    label: "Email",
    value: "siw24010029@class.siw.ac.jp",
    href: "mailto:siw24010029@class.siw.ac.jp",
  },
  {
    label: "GitHub",
    value: "github.com/0yuu321",
    href: "https://github.com/0yuu321",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>CONTACT</h2>
        </div>

        <div className="contact-grid">
          {contacts.map((contact) => (
            <a className="card contact-card" href={contact.href} key={contact.label}>
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
