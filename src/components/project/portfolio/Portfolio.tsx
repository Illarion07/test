import { IPicture, ISection } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  portfolio: ISection;
}

// секция картинок\галерея

const Portfolio: React.FC<Props> = ({ portfolio }) => {
  if (portfolio.gallery)
    return (
      <section
        className="mx-12 pr-16 text-white flex w-full h-screen justify-center items-center relative border-l-[1px] sm:mx-16"
        id="works"
      >
        <h2 className="text-[20px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[72%] left-[-100px] sm:left-[-80px] sm:text-[30px]">
          portfolio
        </h2>
        <div className="w-[100%] h-auto flex justify-center flex-col items-center px-[10%] sm:px-[15%]">
          <div className="works">
            {portfolio.gallery.map((item: IPicture, id: number) => (
              <div key={id} className="max-w-[340px] max-h-[200px] relative">
               <Link
                  href="/#"
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    className="w-full h-auto object-cover"
                    src={item.url}
                    alt="converse"
                    width={340}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Portfolio;
