import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden flex flex-col items-center">
      {/* Background gradient container */}
      <div
        className="relative w-full flex justify-center items-center"
        style={{
          width: "100%",
          height: "538px",
          background:
            "linear-gradient(90deg, #FFFF93 -25.35%, #FFC27F 11.59%, #FEA8FB 48.52%, #A7FFFF 85.46%, #8DBFFC 122.4%), #FFF",
          filter: "blur(0px)",
        }}
      >
        <BrandLogo />
      </div>
    </footer>
  );
}
