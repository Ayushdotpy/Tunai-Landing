import Image from "next/image";

export default function SectionHeading() {
  return (
    <div className="flex flex-col items-start text-left lg:w-auto">
      <div className="flex flex-col items-start justify-between w-full max-w-[467px] h-auto lg:h-[284px]">
        <div>
          <h2
            className="font-mosvita text-[28px] lg:text-[42px] font-normal leading-[1.4] tracking-[-0.56px] lg:tracking-[-0.84px] text-white"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Manage & Track Ads, Affiliates and Promoters
          </h2>
          <p
            className="mt-6 font-geist text-[14px] lg:text-[16px] font-medium leading-[1.6] tracking-[-0.28px] lg:tracking-[-0.32px] text-[rgba(255,255,255,0.44)] max-w-[305px] lg:max-w-none"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Every Ad campaign, promoter, influencer and community gets a unique
            link. Track clicks, conversions and revenue, all from one place.
          </p>
        </div>

        <button
          className="mt-8 lg:mt-0 inline-flex items-center justify-center gap-[7.5px] lg:gap-[10px] rounded-[21px] lg:rounded-[28px] border-[0.75px] lg:border border-[rgba(255,255,255,0.16)] bg-transparent px-[20px] py-[8px] lg:px-4 lg:py-2 font-geist text-[12px] lg:text-[16px] font-medium leading-[2] tracking-[-0.32px] text-[rgba(255,255,255,0.94)] transition-all hover:bg-white/10 hover:border-[rgba(255,255,255,0.3)]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Manage Your Links
          <Image
            src="/test/icons/arrow-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
            className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
          />
        </button>
      </div>
    </div>
  );
}
