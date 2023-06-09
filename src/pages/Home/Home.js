import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import BackgroundImage from "../../assets/images/book-donation.webp";
import QuoteImage1 from "../../assets/images/bono.jpg";
import QuoteImage2 from "../../assets/images/Helen-Keller.png";
import QuoteImage3 from "../../assets/images/maya-angelou.jpg";
import HomeTestimonialSection from "../../components/testimonial/testimonial";
import { headerStatus } from "../../App.js";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";

function HomePage() {
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const toggleAdditionalText = () => {
    setShowAdditionalText(!showAdditionalText);
  };
  // eslint-disable-next-line
  const [headerExpanded, setHeaderExpanded] = useContext(headerStatus);

  return (
    <div>
      <div
        className="homepage-hero-container"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {isTablet && <button
          onClick={() => {
            setHeaderExpanded((prev) => !prev);
          }}
          style={{
            display: isTablet ? "block" : "none",
          }}
        >
          <MenuIcon
            sx={{
              display: isTablet ? "block" : "none",
              position: "absolute",
              top: 0,
              right: 0,
              margin: "20px",
              color: "white",
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
        </button>}
        <div className="homepage-content">
          <h1 className="homepage-headline">Donate, Empower, Inspire!</h1>
          <Link to="/donate">
            <button className="homepage-backgroundimage-button">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
      <section className="homepage-about-section" id="about-section">
        <h2>About Our Book Donation Initiative</h2>
        <p>
          Our mission is to support university students in Lebanon by providing
          them with access to educational resources through book donations. We
          believe that every student deserves the opportunity to pursue their
          education and achieve their goals, regardless of their financial
          circumstances.
        </p>
        {showAdditionalText ? (
          <>
            <p>
              By donating your books, you can make a meaningful impact on the
              lives of these students. Your generosity will help them overcome
              the barriers they face in acquiring the necessary textbooks and
              learning materials, enabling them to excel academically and
              broaden their knowledge.
            </p>
            <p>
              When you donate books through our website, you empower students to
              unlock their full potential and inspire them to pursue their
              dreams. Your contribution not only provides them with valuable
              resources but also sends a powerful message of solidarity and
              support.
            </p>
            <p>
              Join us in making a difference. Together, we can create a brighter
              future for university students in Lebanon. Donate your books today
              and be a part of their educational journey.
            </p>
          </>
        ) : null}
        <button className="read-more-button" onClick={toggleAdditionalText}>
          {showAdditionalText ? "Read Less" : "Read More"}
        </button>
      </section>
      <div className="homepage-quote-container">
        <div className="homepage-quote">
          <img
            src={QuoteImage2}
            alt="Quote 2"
            className="homepage-quote-image"
          />
          <p className="homepage-quote-text">
            “Alone we can do so little, together we can do so much.” - Helen
            Keller.
          </p>
        </div>
        <div className="homepage-quote">
          <img
            src={QuoteImage1}
            alt="Quote 1"
            className="homepage-quote-image"
          />
          <p className="homepage-quote-text">
            "Books! I dunno if I ever told you this, but books are the greatest
            gift one person can give another." - Bono
          </p>
        </div>
        <div className="homepage-quote">
          <img
            src={QuoteImage3}
            alt="Quote 3"
            className="homepage-quote-image"
          />
          <p className="homepage-quote-text">
            "When you learn, teach. When you get, give." - Maya Angelou
          </p>
        </div>
      </div>
      <HomeTestimonialSection id="#testimonials" />
    </div>
  );
}

export default HomePage;
