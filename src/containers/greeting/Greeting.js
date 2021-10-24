import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import { margin } from "glamor/utils";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style(
    {
      backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },

  },
);

  const stylesCV = style({
    marginLeft : "50px",
    backgroundColor: `${theme.yellow}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.yellow}`,
    },
  },);

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
                <button
                  {...stylesCV}
                  className="button"
                  onClick={() => {
                    window.open("https://docs.google.com/document/d/e/2PACX-1vRX3mPl3-2FtXlANogfDUa7jR9IBoIfdUTGiqC0RPqwK8KNsn0ILYy-dpkJwAcAGg/pub")
                  }}
                >
                 Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
