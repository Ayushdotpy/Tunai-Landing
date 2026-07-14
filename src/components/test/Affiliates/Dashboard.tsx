export default function Dashboard() {
  return (
    <div className="relative flex w-full lg:w-auto justify-start lg:justify-end flex-grow">
      {/* Mobile Version */}
      <div className="block lg:hidden relative" style={{ width: "444.339px", height: "298.605px" }}>
        {/* Mobile Glow */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            width: "475.706px",
            height: "253.055px",
            left: "-31.53px",
            top: "10.11px",
            opacity: 0.24,
            background: "linear-gradient(71deg, #FFE348 6.42%, #74CAFF 93.58%)",
            filter: "blur(115px)",
          }}
        />
        {/* Mobile Image */}
        <div 
          className="relative z-10 w-full h-full"
          style={{
            aspectRatio: "125 / 84",
            borderRadius: "50px 0 0 0",
            backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 72.73%, #000 99.97%), url('/test/images/affilate-dashboard.png')",
            backgroundPosition: "center, -0.187px 19.169px",
            backgroundSize: "auto, 128.218% 112.221%",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundColor: "#000"
          }}
        />
      </div>
      {/* Desktop Version */}
      <div 
        className="hidden lg:block"
        style={{
          width: "914.141px",
          height: "614.323px",
          aspectRatio: "125 / 84",
          borderRadius: "50px 0 0 0",
          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 72.73%, #000 99.97%), url('/test/images/affilate-dashboard.png')",
          backgroundPosition: "center, -0.385px 39.436px",
          backgroundSize: "auto, 128.218% 112.221%",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundColor: "#000"
        }}
      />
    </div>
  );
}
