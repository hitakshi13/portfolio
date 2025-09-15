import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        setClickedIndex(index === clickedIndex ? null : index);
    };

    // Animate the tech cards on scroll
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Technical Skills" />
                <div className="tech-grid flex flex-wrap gap-6 justify-center">
                    {techStackImgs.map((techStackIcon, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`card-border tech-card overflow-hidden group xl:rounded-full rounded-lg cursor-pointer transform transition-all duration-300
                hover:scale-105 hover:shadow-xl
                ${clickedIndex === index ? "scale-110 shadow-2xl" : ""}`}
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content flex flex-col items-center p-4">
                                <div className="tech-icon-wrapper mb-2">
                                    <img
                                        src={techStackIcon.imgPath}
                                        alt={techStackIcon.name}
                                        className="w-24 h-24 object-contain transition-transform duration-300 group-hover:rotate-12"
                                    />
                                </div>
                                <div className="padding-x w-full text-center">
                                    <p className="text-lg font-semibold">{techStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
