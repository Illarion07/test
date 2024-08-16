import { ISection } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  about: ISection;
}

const About: React.FC<Props> = ({ about }) => {
  if (about.content && about.images)
    return (
      <div
        className="mx-12 pr-16 text-white flex w-full h-screen relative border-l-[1px] sm:mx-16"
        id="about"
      >
        <h2 className="font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[60%] left-[-166px] text-[20px] sm:text-[30px] sm:left-[-180px]">
          INFORMATION ABOUT
        </h2>
        <div className="flex flex-col w-full h-full items-start justify-center text-left px-[10%] sm:px-[15%]">
          <h3 className="font[600px] leading-[168%] tracking-[0.13em] uppercase text-[12px]  mb-2 sm:text-[22px] sm:mb-[20px] md:text-[30px]">
            {about.content[0].value}
          </h3>
          <div className="flex flex-col lg:flex-row w-full h-auto items-center justify-between">
            <div className="flex flex-row items-end justify-between">
              <p className="block font-[400] text-[10px] leading-[159%] tracking-[159%] w-full h-auto mr-6 mb-8 sm:text-[12px]  lg:max-w-[267px] lg:mb-0 lg:text-[15px]">
                {about.content[1].value}
              </p>
            </div>
            <div className="w-[200px] h-[130px] relative md:w-[400px] md:h-[230px] flex items-center justify-center">
              <div className="absolute w-[200px] h-[120px] md:w-[340px] md:h-[200px] z-10">
                <Image
                  className="w-full h-full "
                  src={about.images[0].url || ""}
                  alt={"converse"}
                  width={340}
                  height={200}
                  priority 
                />
              </div>
              <div className="absolute w-[200px] h-[120px] md:w-[340px] md:h-[200px] z-20 left-[10px] top-[15px] sm:left-[30px] sm:top-[30px]">
                <Image
                  className="w-full h-full "
                  src={about.images[1].url || ""}
                  alt={"converse"}
                  width={340}
                  height={200}
                  priority 
                />
              </div>
              <h2 className="absolute text-[30px] font-[600] leading-[109%] uppercase text-white z-30 bottom-[-30px] right-0 md:text-[60px]">
                Design
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
