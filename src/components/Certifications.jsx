import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants"; // array lives in constants
import { fadeIn, textVariant } from "../utils/motions";
import { credly } from "../assets"; // ⬅️ NEW

const CertCard = ({ index, name, provider, image, description, credentialUrl }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} certificate`}
            className="w-full h-full object-contain rounded-2xl"
            loading="lazy"
          />

          {/* 🔶 Decorative Credly icon overlay (NOT clickable) */}
          {credentialUrl && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none">
              <div className="black-gradient w-12 h-12 rounded-full flex justify-center items-center">
                <img
                  src={credly}
                  alt=""
                  aria-hidden="true"
                  className="w-[92%] h-[92%] object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] leading-tight">{name}</h3>
          <p className="text-secondary text-[14px] mt-1">{provider}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* ✅ Only this button opens the credential */}
        {credentialUrl && (
          <div className="mt-4">
            <a
              href={credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 rounded-full black-gradient text-white text-sm"
            >
              View Credential
            </a>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  const [showAll, setShowAll] = React.useState(false);
  const visible = showAll ? certifications : certifications.slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>MY EARNED</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the certifications I have earned, demonstrating my commitment to continuous learning and professional development.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {visible.map((c, i) => (
          <CertCard key={`${c.name}-${i}`} index={i} {...c} />
        ))}
      </div>

      {certifications.length > 3 && (
        <div className="w-full flex justify-center mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 transition text-white text-sm font-medium"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
