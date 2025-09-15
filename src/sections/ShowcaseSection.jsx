import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="projects" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">

                    {/* === PrepWise Project === */}
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper cursor-pointer">
                            <a
                                href="https://github.com/hitakshi13/ai_mock_interviews"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/project1.png" alt="PrepWise App Interface" />
                            </a>
                        </div>

                        <div className="text-content">
                            <h2>PrepWise: Smart Preparation Made Easy</h2>
                            <p className="text-white-50 md:text-xl">
                                An AI-powered mock interview platform built with Next.js, TailwindCSS,
                                Firebase, and Vapi for a seamless, interactive practice experience.
                            </p>

                            {/* GitHub Button */}
                            <a
                                href="https://github.com/hitakshi13/ai_mock_interviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 rounded-lg bg-white text-black font-medium shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                View Code
                            </a>
                        </div>
                    </div>

                    {/* === LMS SaaS App Project === */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB] cursor-pointer">
                                <a
                                    href="https://github.com/hitakshi13/saas-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/project2.png"
                                        alt="LMS SaaS App"
                                    />
                                </a>
                            </div>
                            <h2>LMS SaaS App</h2>

                            {/* GitHub Button */}
                            <a
                                href="https://github.com/hitakshi13/saas-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-6 py-2 rounded-lg bg-white text-black font-medium shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                View Code
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowCase;
