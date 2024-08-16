import { ISection } from "@/types";
import React from "react";

interface Props {
  main: ISection;
}

const Main: React.FC<Props> = ({ main }) => {
  if (main.content)
    return (
      <div className="flex text-white w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/bg-vector.svg')] items-center justify-center px-[10%] sm:px-[14%] lg:px-[18%]">
        <div className="w-full h-auto text-left relative flex flex-col items-start justify-start">
          <p className="w-[100%] max-w-[600px] text-xs sm:text-base">{main.content[0].value}</p>
          <h1 className=" font-light font-['Potra'] leading-[109%] tracking-[0.015em] uppercase text-[36px] sm:text-[74px] lg:text-[100px]">
            {main.content[1].value}
            <span className="font-sans font-black block">
              {main.content[2].value}
            </span>
          </h1>
          <button className="size-[120px] sm:size-[160px] rounded-[100%] bg-[#fb1b3d] absolute left-0 bottom-[-120px] shadow_circle">
            <span className="relative w-full text-sm sm:text-[16px]">Consultation</span>
            <svg
              className="absolute w-[90px] h-[9px] left-[16px] sm:w-[160px] sm:left-0 sm:right-0 "
              viewBox="0 0 99 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98.0031 4.9893C98.1983 4.79403 98.1983 4.47745 98.0031 4.28219L94.8211 1.10021C94.6258 0.904946 94.3092 0.904946 94.114 1.10021C93.9187 1.29547 93.9187 1.61205 94.114 1.80732L96.9424 4.63574L94.114 7.46417C93.9187 7.65943 93.9187 7.97601 94.114 8.17128C94.3092 8.36654 94.6258 8.36654 94.8211 8.17128L98.0031 4.9893ZM0.396118 5.13574H97.6495V4.13574H0.396118V5.13574Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    );
};

export default Main;
