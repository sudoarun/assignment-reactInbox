import React from "react";

const InboxDetails = () => {
  return (
    <div className="w-1/4 px-2 bg-black border-l border-[#33383F]">
      <h2 className="text-lg font-sembold bg-[#23272C] py-1 px-2 rounded-lg mt-2">
        Lead Details
      </h2>
      <div className="mt-4 flex flex-col gap-3 p-2">
        <p className="flex justify-between items-center">
          <span>Name:</span> <span className="text-[#B9B9B9]">Orlando</span>
        </p>
        <p className="flex justify-between items-center">
          <span>Contact No:</span>{" "}
          <span className="text-[#B9B9B9]">+54-9062827869</span>
        </p>
        <p className="flex justify-between items-center">
          <span>Email ID:</span>{" "}
          <span className="text-[#B9B9B9]">orlando@gmail.com</span>
        </p>
        <p className="flex justify-between items-center">
          <span>LinkedIn:</span>{" "}
          <span className="text-[#B9B9B9]">linkedin.com/in/timvadde</span>
        </p>
        <p className="flex justify-between items-center">
          <span>Company Name:</span>{" "}
          <span className="text-[#B9B9B9]">Reachinbox</span>
        </p>
      </div>
      <h2 className="text-lg font-sembold bg-[#23272C] py-1 px-2 rounded-lg mt-8">
        Activities
      </h2>
      <div className="mt-4 p-3">
        <p>
          <span>Campaign Name</span>
        </p>
        <div className="py-2">
          <h1 className="text-sm">3 steps | 5 days in sequence</h1>
        </div>
        <ul className="mt-2 detailLiTag">
          <li className="flex items-center relative">
            <span className="line"></span>
            <div className="bg-[#23272C] px-2 py-2 rounded-full">
              <img src="/mailTranslucent.svg" height={20} width={20} />
            </div>
            <div>
              <span className=" px-2 py-1 rounded  block">Step 1: Email</span>
              <span className="text-gray-400 ml-2 text-xs flex gap-2">
                <img src="/sendMail.svg" />
                <span> Sent 3rd, Feb</span>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2 relative">
            <span className="line"></span>
            <div className="bg-[#23272C] px-2 py-2 rounded-full">
              <img src="/mailTranslucent.svg" height={20} width={20} />
            </div>
            <div>
              <span className=" px-2 py-1 rounded  block">Step 2: Email</span>
              <span className="text-gray-400 ml-2 flex text-xs gap-2">
                <img src="/openMail.svg" /> <span>Opened 5th, Feb</span>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2 relative">
            <div className="bg-[#23272C] px-2 py-2 rounded-full">
              <img src="/mailTranslucent.svg" height={20} width={20} />
            </div>
            <div>
              <span className="px-2 py-1 rounded block">Step 3: Email</span>
              <span className="text-gray-400 ml-2 flex text-xs gap-2">
                <img src="/openMail.svg" /> <span>Opened 5th, Feb</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InboxDetails;
