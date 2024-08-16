"use client"

import UserInfo from "@/components/dashboard/userInfo/UserInfo";
import useTokenValidation from "@/hooks/useTokenValidation";
import { useGetContentQuery } from "@/lib/redux";
import React from "react";

// информация о пользователе

const UserPage = () => {
  // проверяем валидность токенов и их наличие
  useTokenValidation();

  const {data = [], isLoading} = useGetContentQuery(undefined)

  if(isLoading) return <h1>Loading...</h1>

  return (
    <UserInfo data={data}/>
  )
};

export default UserPage;