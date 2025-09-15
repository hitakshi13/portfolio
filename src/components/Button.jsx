/**
* A reusable CTA button component.
* - If `action="scroll"`, it scrolls smoothly to the section with ID `targetId`.
* - If `action="download"`, it downloads the provided `filePath`.
* Keeps the same design + animation.
*/

const Button = ({ text, className, id, action = "scroll", targetId = "counter", filePath }) => {
    const handleClick = (e) => {
        e.preventDefault();

        if (action === "download" && filePath) {
            // Trigger download
            const link = document.createElement("a");
            link.href = filePath;
            link.download = "Hitakshi_Kharag_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
        }

        if (action === "scroll") {
            const target = document.getElementById(targetId);

            if (target && id) {
                const offset = window.innerHeight * 0.15; // space at the top
                const top =
                    target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    };

    return (
        <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;
