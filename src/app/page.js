"use client";

import { register } from "@/utils/API";
import configFile from "@/utils/config";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("token");
  const router = useRouter();
  const registerWithGoogle = () => {
    register();
  };
  useEffect(() => {
    if (search) {
      localStorage.setItem("token", search);
      location.href = `http://${configFile.redirectURL}`;
      return;
    }
  }, [search]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
    return;
  }, [search]);

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-between">
      <div className="py-3 border-b border-[#25262B]">
        <h1 className="text-center">REACHINBOX</h1>
      </div>
      <div className="flex justify-center">
        <div
          style={{ width: 460, height: 310, backgroundColor: "#111214" }}
          className="border border-[#343A40] rounded-xl p-5 flex flex-col justify-between"
        >
          <h1 className="text-center font-semibold text-xl">
            Create a new account
          </h1>
          <button
            className="border border-[#343A40] w-full py-3 rounded-lg font-light flex justify-center items-center"
            onClick={registerWithGoogle}
          >
            <img src="/googleFrame.svg" className="pe-2" />
            Sign Up with Google
          </button>
          <div className="flex justify-center">
            <button
              className="w-1/2 py-3 rounded-md"
              style={{
                background:
                  "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              }}
              onClick={() => router.push("/dashboard")}
            >
              Create Account
            </button>
          </div>
          <div className="">
            <p className="text-center text-[#909296]">
              Already have an account?{" "}
              <span className="text-[#C1C2C5]">Sign In</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] py-2 border-t border-[#25262B]">
        <h1 className="text-center text-[#5C5F66]">
          © 2023 Reachinbox. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
