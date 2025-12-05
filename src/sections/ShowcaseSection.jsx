import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const sectionRef = useRef(null);
    const wanderlustRef = useRef(null);
    const prepwiseRef = useRef(null);
    const saasRef = useRef(null);

    useGSAP(() => {
        const cards = [wanderlustRef.current, prepwiseRef.current, saasRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
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
        <div id="projects" ref={sectionRef} className="app-showcase w-full">
            <div className="showcaselayout flex flex-col md:flex-row gap-10 w-full">

                {/* Left: Wanderlust */}
                <div className="md:w-1/2 w-full" ref={wanderlustRef}>
                    <div className="first-project-wrapper w-full">
                        <div className="image-wrapper cursor-pointer">
                            <a
                                href="https://github.com/hitakshi13/wanderlust"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/project3.png" alt="Wanderlust App" className="w-full" />
                            </a>
                        </div>

                        <div className="text-content mt-4">
                            <h2>Wanderlust: Explore Your Next Adventure</h2>
                            <p className="text-white-50 md:text-xl mt-2">
                               A full-stack travel platform using HTML, CSS, JavaScript, Bootstrap, Node.js, Express, MongoDB, and Mapbox API with MVC architecture, interactive destination listings, detailed location pages, and a responsive UI.
                            </p>

                            <a
                                href="https://github.com/hitakshi13/wanderlust"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 rounded-lg bg-white text-black font-medium shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                View Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: PrepWise on top, LMS SaaS App below */}
                <div className="md:w-1/2 w-full flex flex-col gap-10">

                    {/* PrepWise */}
                    <div className="project-list-wrapper w-full" ref={prepwiseRef}>
                        <div className="project w-full">
                            <div className="image-wrapper cursor-pointer">
                                <a
                                    href="https://github.com/hitakshi13/ai_mock_interviews"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project1.png" alt="PrepWise App Interface" className="w-full" />
                                </a>
                            </div>
                            <h2 className="mt-2">PrepWise: Smart Preparation Made Easy</h2>
   

                            <a
                                href="https://github.com/hitakshi13/ai_mock_interviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-6 py-2 rounded-lg bg-white text-black font-medium shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                View Code
                            </a>
                        </div>
                    </div>

                    {/* LMS SaaS App */}
                    <div className="project-list-wrapper w-full" ref={saasRef}>
                        <div className="project w-full">
                            <div className="image-wrapper bg-[#FFEFDB] cursor-pointer">
                                <a
                                    href="https://github.com/hitakshi13/saas-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project2.png" alt="LMS SaaS App" className="w-full" />
                                </a>
                            </div>
                            <h2 className="mt-2">LMS SaaS App</h2>

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
