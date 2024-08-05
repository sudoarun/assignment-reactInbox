import React from "react";

const InboxUISideBar = () => {
  return (
    <div className="w-1/4 p-4 bg-black border-r border-[#33383F]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-blue-600">All Inbox(s)</h2>
          <span className="">
            25/25 <span className="text-[#7F7F7F]">inboxes are selected</span>
          </span>
        </div>
        <img src="/refresh.svg" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full py-1 px-2 outline-none mb-4 rounded bg-[#23272C]"
      />
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400">
          <span className="bg-[#23272C] py-2 px-3 rounded-2xl text-blue-600">
            26
          </span>{" "}
          New Replies
        </span>
        <span className="text-gray-400">Newest</span>
      </div>
      <div className="py-2 border-t border-[#33383F]">
        <div className="p-2 rounded hover:bg-[#2a2e33] cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-sembold relative flex items-center">
              <img src="/newPoint.svg" className="pe-2" />
              Beata@gmail.com
            </h3>
            <span className="text-[#FCFCFC66]">Mar 7</span>
          </div>

          <p className="text-gray-400 text-sm">I've tried a lot and .</p>
          <div className="flex items-center mt-3">
            <span className="px-2 py-1 rounded-3xl text-xs font-semibold flex items-center bg-[#222426]">
              <img src="/interestedPoint.svg" className="inline pe-2" />{" "}
              <span className="text-green-600">Interested</span>
            </span>
            <span className=" px-2 py-1 rounded-3xl text-xs font-semibold ml-2 flex items-center bg-[#222426]">
              <img
                src="/share.svg"
                className="inline pe-2"
                height={"20px"}
                width={"20px"}
              />
              <span>Campaign Name</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxUISideBar;
