import { ISection, IService } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  prices: ISection;
}

const Services: React.FC<Props> = ({ prices }) => {
  if (prices.services)
    return (
      <div
        className="mx-12   pr-16 text-white flex w-full h-screen justify-center items-center relative border-l-[1px] sm:mx-16"
        id="price"
      >
        <h2 className="text-[20px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[78%] left-[-74px] sm:left-[-38px] sm:text-[30px]">
          Prices
        </h2>
        <div className="w-full h-auto text-left px-[10%] sm:px-[15%]">
          <h2 className="text-[30px] font-[500] leading[109%] tracking-[0.13em] uppercase">
            Design services
          </h2>
          <div className="flex w-full h-auto relative top-[20px]">
            <div className="flex flex-col gap-8 w-full h-[450px] overflow-y-scroll">
              {prices.services.map((item: IService, id: number) => (
                <div className="flex flex-col gap-8 lg:flex-row w-full h-auto items-center" key={id}>
                  <div className="w-full h-full lg:w-[254px] lg:h-[126px] mr-[26px] ml-0">
                    <Image
                      className="w-auto h-auto object-cover"
                      src={item.url}
                      alt="service"
                      width={254}
                      height={126}
                    />
                  </div>
                  <div className="flex w-full lg:w-[70%] flex-col justify-between">
                    <h3 className="font-[700] text-[20px] leading-[109%] tracking-[0.13em] uppercase">
                      {item.title}
                    </h3>
                    <p className="font-[400] my-2 font-sans font text-[10px] leading-[155%] tracking-[0.06em] sm:text-[13px]">
                      {item.desc}
                    </p>
                    <p className="font-[700] text-[20px] leading-[109%] tracking-[0.13em] uppercase">
                      {item.price} <span>$</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;
