export default function SectionHeading() {
  return (
    <div className="w-full pt-[30px] pl-4 md:pt-[45px] md:pl-[60px] lg:pt-[61px] lg:pl-[120px]">
      <h2
        className="text-white max-w-[505px] w-full font-mosvita text-[36px] md:text-[52px] lg:text-[67.899px] font-bold leading-[110%]"
        style={{
          fontStyle: "normal",
          letterSpacing: "-1.358px",
          fontFeatureSettings: "'liga' off, 'clig' off",
          textShadow: "0px 0px 40px rgba(255, 255, 255, 0.5)",
        }}
      >
        Host Anything,
        <br />
        Host Everything
      </h2>
    </div>
  );
}
