"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { searchContext } from "./SearchContext";
import { IStrengths, IPersonData } from "@/assets/models";

interface SearchContextProviderProps {
  children: ReactNode;
}

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<IStrengths[]>([]);
	const [personData, setPersonData] = useState<IPersonData>({
    name: "Alexander Torrenegra",
    pictureThumbnail:
      "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg",
  });

  const fetchSkills = async (username: string = "torrenegra") => {
    const res = await fetch(`http://localhost:5000/data/${username}`);
    const data = await res.json();
    let strengths: IStrengths[] = [];
    data.strengths.forEach((item: IStrengths) => strengths.push(item));
		setPersonData(data.person);
    setData(strengths);
  };

  useEffect(() => {
    fetchSkills(username);
  }, []);

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const contextValue = {
    username,
    handleUsername,
  };

  return (
    <searchContext.Provider
      value={{ username, handleUsername, data, personData, fetchSkills }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;
