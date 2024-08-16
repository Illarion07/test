"use client";

import Sections from "@/components/dashboard/sections/sections";
import useTokenValidation from "@/hooks/useTokenValidation";
import { useGetContentQuery } from "@/lib/redux";
import { ISection } from "@/types";
import React from "react";

//здесь мапятся все секции main страницы в админ панель

const ContentPage = () => {
  // проверяем валидность токенов и их наличие
  useTokenValidation();
  
  const { data = [], isLoading } = useGetContentQuery(undefined);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="dashboard w-full h-screen overflow-hidden overflow-y-scroll">
      {data.main.map((item: ISection, id: number) => (
        <Sections data={item} page={"main"} sectionId={id} key={id} />
      ))}
    </div>
  );
};

export default ContentPage;
