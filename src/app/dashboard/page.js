import Inbox from "@/pages/inbox";
import ZerothPage from "@/pages/zerothPage";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black text-white h-screen relative">
      <div className="bg-[#1F1F1F] border-b border-[#343A40] fixed top-0 pl-[65px] h-[64px] w-full flex items-center justify-between pe-3">
        <h2 className="font-semibold">Onebox</h2>
        <div>
          <h3>Tim Workers</h3>
        </div>
      </div>
      <div className="bg-[#101113] border-r border-[#343A40] fixed left-0 w-[56px] h-full flex flex-col justify-between items-center">
        <div>
          <div>
            <img src="/Logo_holder.svg" />
          </div>
          <ul className="mx-auto flex flex-col items-center gap-3 pt-10">
            <li className="hover:bg-[#2a2e33] p-2 rounded-lg">
              <img src="/Home.svg" />
            </li>
            <li className="hover:bg-[#2a2e33] p-2 rounded-lg">
              <img src="/email.svg" />
            </li>
            <li className="hover:bg-[#2a2e33] p-2 rounded-lg">
              <img src="/emails.svg" />
            </li>
            <li className="hover:bg-[#2a2e33] p-2 rounded-lg">
              <img src="/share.svg" />
            </li>
            <li className="hover:bg-[#2a2e33] p-2 rounded-lg">
              <img src="/menu.svg" />
            </li>
            <li className="hover:bg-[#2a2e33] p-2 rounded-lg">
              <img src="/inbox.svg" />
            </li>
            <li className="hover:bg-[#2a2e33] p-2 rounded-lg">
              <img src="/bar_chart.svg" />
            </li>
          </ul>
        </div>
        <div>
          <img src="/user.svg" />
        </div>
      </div>
      <div className="pt-[65px] pl-[65px] w-full h-screen">
        {/* <ZerothPage /> */}
        <Inbox />
      </div>
    </div>
  );
};

export default Page;
