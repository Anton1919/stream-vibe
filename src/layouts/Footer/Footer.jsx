import "./Footer.scss"
import Socials from "@/components/Socials"

const Footer = () => {
  const menuItems = [
    { title: "Home", links: ["Categories", "Devices", "Pricing", "FAQ"] },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    { title: "Shows", links: ["Gernes", "Trending", "New Release", "Popular"] },
    { title: "Support", links: ["Contact Us"] },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
    {
      title: "Connect With Us",
      socialLinks: [
        { label: "Facebook", iconName: "facebook" },
        { label: "Twitter", iconName: "twitter" },
        { label: "LinkedIn", iconName: "linked-in" },
      ],
    },
  ]

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map((item, idx) => {
            return (
              <div className="footer__menu-column" key={idx}>
                <a href="/" className="footer__menu-title h6">
                  {item.title}
                </a>
                {item.links?.length > 0 && (
                  <ul className="footer__menu-list">
                    {item.links.map((link, idx) => (
                      <li className="footer__menu-item" key={idx}>
                        <a href="/" className="footer__menu-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {item.socialLinks?.length > 0 && (
                  <Socials
                    className="footer__soc1als"
                    links={item.socialLinks}
                  />
                )}
              </div>
            )
          })}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @ <time dateTime="2025">2025</time> streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks.map((extraLink, idx) => (
              <a className="footer__extra-link" href="/" key={idx}>
                {extraLink}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
