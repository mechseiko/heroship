
const SectionHeader = ({ title, subtitle, theme="muted" }) => {
	return (
		<div className="text-center w-full mx-auto py-5">
			<h1 className={`text-3xl mb-3 lg:text-5xl font-bold ${theme === "muted" ? "text-dark" : "text-muted"}`}>
				{title}
			</h1>
			{subtitle && (
				<p className={`${theme === "muted" ? "text-dark" : "text-[#75828A]"} text-xl lg:text-2xl leading-6 lg:leading-9`}>
					{subtitle}
				</p>
			)}
		</div>
	);
};

export default SectionHeader;
