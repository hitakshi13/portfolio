import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const sectionRef = useRef(null);
    const placeTrackRef = useRef(null);
    const wanderlustRef = useRef(null);
    const prepwiseRef = useRef(null);
    const saasRef = useRef(null);
    const zerodhaRef = useRef(null);

    useGSAP(() => {
        const cards = [
            placeTrackRef.current,
            wanderlustRef.current,
            prepwiseRef.current,
            saasRef.current,
            zerodhaRef.current,
        ];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 60, opacity: 0, scale: 0.96 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    delay: 0.15 * index,
                    ease: "power3.out",
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

                {/* Left: PlaceTrack (hero) */}
                <div className="md:w-1/2 w-full" ref={placeTrackRef}>
                    <div className="first-project-wrapper w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 rounded-xl">
                        <div className="image-wrapper cursor-pointer overflow-hidden rounded-lg">
                            <a
                                href="https://github.com/hitakshi13/placeTrack"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/project4.png" alt="PlaceTrack App" className="w-full transition-transform duration-500 ease-out group-hover:scale-110" />
                            </a>
                        </div>

                        <div className="text-content mt-4">
                            <h2>PlaceTrack: Campus Placement Tracker</h2>
                            <p className="text-white-50 md:text-xl mt-2">
                                An AI-powered campus placement tracker built with Next.js, TypeScript, Prisma/PostgreSQL, NextAuth, and Recharts, with an analytics dashboard for tracking placement progress.
                            </p>

                            <a
                                href="https://github.com/hitakshi13/placeTrack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 rounded-lg bg-white text-black font-medium shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                View Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: 2x2 grid of Wanderlust, PrepWise, SaaS, Zerodha */}
                <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Wanderlust */}
                    <div className="project-list-wrapper w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 rounded-xl" ref={wanderlustRef}>
                        <div className="project w-full">
                            <div className="image-wrapper cursor-pointer overflow-hidden rounded-lg">
                                <a
                                    href="https://github.com/hitakshi13/wanderlust"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project3.png" alt="Wanderlust App" className="w-full transition-transform duration-500 ease-out group-hover:scale-110" />
                                </a>
                            </div>
                            <h2 className="mt-2">Wanderlust: Explore Your Next Adventure</h2>
                            <p className="text-white-50 mt-1 text-sm">
                                A full-stack travel platform with interactive destination listings, detailed location pages, and Mapbox-powered maps.
                            </p>

                            <a
                                href="https://github.com/hitakshi13/wanderlust"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-6 py-2 rounded-lg bg-white text-black font-medium shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                View Code
                            </a>
                        </div>
                    </div>

                    {/* PrepWise */}
                    <div className="project-list-wrapper w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 rounded-xl" ref={prepwiseRef}>
                        <div className="project w-full">
                            <div className="image-wrapper cursor-pointer overflow-hidden rounded-lg">
                                <a
                                    href="https://github.com/hitakshi13/ai_mock_interviews"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project1.png" alt="PrepWise App Interface" className="w-full transition-transform duration-500 ease-out group-hover:scale-110" />
                                </a>
                            </div>
                            <h2 className="mt-2">PrepWise: Smart Preparation Made Easy</h2>
                            <p className="text-white-50 mt-1 text-sm">
                                An AI-powered mock interview platform that simulates real interview conditions with instant feedback.
                            </p>

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
                    <div className="project-list-wrapper w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 rounded-xl" ref={saasRef}>
                        <div className="project w-full">
                            <div className="image-wrapper bg-[#FFEFDB] cursor-pointer overflow-hidden rounded-lg">
                                <a
                                    href="https://github.com/hitakshi13/saas-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project2.png" alt="LMS SaaS App" className="w-full transition-transform duration-500 ease-out group-hover:scale-110" />
                                </a>
                            </div>
                            <h2 className="mt-2">LMS SaaS App</h2>
                            <p className="text-white-50 mt-1 text-sm">
                                A voice-enabled SaaS learning platform where users create and interact with AI companions for lessons.
                            </p>

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

                    {/* Zerodha Clone */}
                    <div className="project-list-wrapper w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 rounded-xl" ref={zerodhaRef}>
                        <div className="project w-full">
                            <div className="image-wrapper cursor-pointer overflow-hidden rounded-lg">
                                <a
                                    href="https://github.com/hitakshi13/stock-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project5.png" alt="Zerodha Clone Stock Trading App" className="w-full transition-transform duration-500 ease-out group-hover:scale-110" />
                                </a>
                            </div>
                            <h2 className="mt-2">Zerodha Clone: MERN Stock Trading App</h2>
                            <p className="text-white-50 mt-1 text-sm">
                                A MERN-stack stock trading platform with a live dashboard, watchlist, order flow, and portfolio views.
                            </p>

                            <a
                                href="https://github.com/hitakshi13/stock-app"
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
