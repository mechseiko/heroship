
const SectionHeader = ({ title, subtitle, theme="dark" }) => {
	return (
		<div className="text-center w-full lg:w-[55%] mx-auto">
			<h2 className={`text-[30px] mb-3 lg:text-[50px] font-medium leading-7 lg:leading-16 ${theme === "muted" ? "text-dark" : "text-muted"}`}>
				{title}
			</h2>
			{subtitle && (
				<p className={`${theme === "muted" ? "text-dark" : "text-[#75828A]"} text-[20px] lg:text-[26px] leading-6 lg:leading-9`}>
					{subtitle}
				</p>
			)}
		</div>
	);
};

export default SectionHeader;
