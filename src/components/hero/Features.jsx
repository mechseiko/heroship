import SectionHeader from '../SectionHeader';
import Container from '../Container';
import { useState, useEffect } from 'react';
import * as lucid from 'lucide-react'

const Features = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.getElementById("features");
			if (!section) return;

			const rect = section.getBoundingClientRect();
			const sectionTop = rect.top;
			const sectionHeight = rect.height;
			const windowHeight = window.innerHeight;
			let progress = 0;

			if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
				// Section is in viewport
				const visibleTop = Math.max(0, windowHeight - sectionTop);
				const visibleHeight = Math.min(visibleTop, sectionHeight);
				progress = Math.min(100, (visibleHeight / sectionHeight) * 100);
			}

			setScrollProgress(progress);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial call

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

    const Features = [
        {
            feature: "Instant Generation",
            description: "Answer a few questions and get a ready-to-use hero section in minutes.",
            luce: lucid.FastForward
        },
        {
            feature: "Fully Responsive",
            description: "Every hero section adapts beautifully across devices whether mobile, tablet, and desktop.",
            luce: lucid.Laptop
        },
        {
            feature: "Customizable",
            description: "Fine colors, layout, and typography to match your brand perfectly.",
            luce: lucid.Edit
        },
        {
            feature: "Exportable",
            description: "Export your generated hero section code in your preferred programming language.",
            luce: lucid.ExternalLink
        }
    ]
    return (
        <>
            <section className="bg-muted">
                <Container>
                    <div className='py-10'>
                        <SectionHeader
                            title="Ship Breathtaking Hero Sections for your website in minutes."
                            subtitle="Fast, flexible, and beautiful."
                            theme="muted"
                        />
                    </div>
                    <section id="features" className="relative flex flex-col gap-20">

                        {/* Progress fill line */}
                        <div
                            className="absolute left-1/2 -top-6 w-[5px] bg-secondary transform -translate-x-1/2 z-10 rounded-3xl transition-all duration-300 ease-out"
                            style={{
                                height: `${scrollProgress}%`,
                                maxHeight: "calc(100% + 48px)",
                            }}
                        ></div>
                        {
                            Features.map((article, index) => (
                                <div key={index} className="relative flex odd:flex-row-reverse items-start justify-between gap-6 z-20">
                                    <div className="w-[40%]">
                                        <div className="flex items-center justify-center w-20 h-20 lg:w-30 lg:h-30 mx-auto rounded-full bg-primary text-muted relative z-30">
                                            {article.luce && <article.luce size={50} />}
                                        </div>
                                    </div>
                                    <div className="w-[42%]">
                                        <h5 className="text-dark font-medium text-[20px] lg:text-[30px] leading-7 lg:leading-12 mb-2">
                                            {article.feature}
                                        </h5>
                                        <p className="text-[#525B61] text-lg leading-7 font-normal">
                                            {article.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </Container>
            </section>
        </>
    );
}

export default Features;