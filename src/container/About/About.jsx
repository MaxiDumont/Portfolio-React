import ME from "../../assets/me.jpg";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import Tilt from "react-vanilla-tilt";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="todo">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <Tilt
              style={{
                height: 350,
                width: 250,
                margin: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: 10,
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                background: "rgba(255,255,255,0.1)",
                padding: 10,
                cursor: "pointer",
                transformStyle: "preserve-3d",
                tranfform: "perspective(1000px)",
              }}
              options={{
                max: 25,
                speed: 400,
                scale: 1.1,
                glare: true,
                "max-glare": 0.5,
              }}
            >
              <div
                className="app__profile-item"
                key={about.title + index}
                style={{
                  borderRadius: 10,
                  transform: "translateZ(50px)",
                  transformStyle: "perspective(1000px)",
                }}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
              </div>

              <div
                className="app__profile-item"
                key={about.title + index}
                style={{
                  borderRadius: 10,
                  transform: "translateZ(35px)",
                  transformStyle: "perspective(1000px)",
                }}
              >
                <h2 className="blue" style={{ marginTop: 5 }}>
                  {about.title}
                </h2>
              </div>

              <div
                className="app__profile-item"
                key={about.title + index}
                style={{
                  borderRadius: 10,
                  transform: "translateZ(15px)",
                  transformStyle: "perspective(1000px)",
                }}
              >
                {" "}
                <p className="p-text" style={{ marginTop: 5 }}>
                  {about.description}
                </p>
              </div>

            </Tilt>
          ))}
          <p className="description">
            Knowledge of a wide variety of programming tools and languages of
            back-end and front-end development requirements. I am a dedicated
            person, with ambitions to learn and grow in the industry, the
            pursuit of knowledge and optimization is my personal goal I
            specialize in problem solving competently and analytically with calm
            and focused behavior, Capable of contributing to a highly
            collaborative workplace that is built on trust and kindness finding
            solutions, improving the user experience as well as improving code,
            design, adaptability and maintainability through bug fixes and
            end-to-end testing it's my specialty
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
