import React from "react"
import Tilt from "react-parallax-tilt"
import { fadeIn, textVariant } from "../utils/motions"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"

// Tech.jsx
const SIZE_MAP = {
  "SQL Server": "max-w-[95%] max-h-[95%]", // was ~72%
  "Power BI": "max-w-[95%] max-h-[95%]",
};

const TechCard = ({ index, icon, name }) => {
  const sizeClass = SIZE_MAP[name] ?? "max-w-[72%] max-h-[72%]"; // default
  return (
    <Tilt className="w-28 h-28 md:w-32 md:h-32 select-none">
      <div className="w-full h-full green-pink-gradient p-[1px] rounded-full shadow-card">
        <div className="w-full h-full bg-tertiary rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={icon}
            alt={name}
            className={`${sizeClass} object-contain pointer-events-none`}
            loading="lazy"
          />
        </div>
      </div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My tools</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((t, i) => (
          <TechCard key={t.name} icon={t.icon} name={t.name} index={i} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "")
