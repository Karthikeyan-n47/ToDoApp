"use client";
import { useState } from "react";
import Axios from "../axios";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const login = () => {
  const route = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(data);
    try {
      const res = await Axios.post("/auth/login", data);
      console.log(res);
      if (res.data.status === "success") {
        route.push("/home");
      }
      setErr("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErr(error?.response?.data);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center page-gradient">
      <div className="bg-gradient w-[648px] border-[1px] rounded-2xl h-auto flex-row items-center justify-center text-center p-[60px]">
        <p className="font-barlow font-semibold text-5xl loading-[58px] mb-[32px] text-customBlack">
          Welcome to <span className="text-customPurple">Workflo</span>!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="w-[528px] mx-auto block  mb-[24px] px-3 py-4 rounded-lg font-inter text-customGrey bg-bgInput"
            type="email"
            name="email"
            value={data?.email}
            onChange={handleChange}
            placeholder="jgardner@gmail.com"
          ></input>
          <input
            className="w-[528px] mx-auto block  mb-[22px] px-3 py-4 rounded-lg text-customGrey bg-bgInput"
            type="password"
            name="password"
            value={data?.password}
            onChange={handleChange}
            placeholder="*************"
          ></input>

          <button
            className="font-inter w-[528px] border-2 py-[14px] text-2xl leading-6 btn-gradient rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="mt-8 font-inter text-2xl text-customGrey">
          Don’t have an account? Create a{" "}
          <Link href={"/sign-up"}>
            <span className="text-customBlue">new account</span>
          </Link>
        </p>

        <p className="mt-4 font-inter text-xs text-red-600">{err}</p>
      </div>
    </div>
  );
};

export default login;
