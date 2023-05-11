import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Tasks available
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          <h3 className="blue">
            ◉ Solve errors or problems in the execution of websites.
          </h3>
          <br />
          <h3 className="gray">◉ Add new website features</h3>
          <br />
          <h3 className="blue">
            ◉ Write code in different programming languages
          </h3>
          <br />
          <h3 className="gray">◉ Monitor Website Traffic</h3>
          <br />
          <h3 className="blue">
            ◉ Make portable while maintaining and updating the website
          </h3>
          <br />
          <h3 className="gray">
            ◉Extensive testing of websites to find errors.
          </h3>

          <div className="app__skills-exp-list">
            <button
              style={{
                marginRight: "10px",
              }}
            >
              <a
                href="./CV-Web developer.pdf"
                download={true}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Download CV
              </a>
            </button>

            <button>
              <a
                href="./Recommendation letter.pdf"
                download={true}
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
              >
                Recommendation letter
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__3color"
);
