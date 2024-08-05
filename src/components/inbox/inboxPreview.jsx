import React from "react";

const InboxPreview = () => {
  return (
    <div className="flex-1 relative">
      <div className="flex justify-between items-center border-b border-[#F8FAFC33] p-4">
        <div>
          <h1 className="font-semibold">Orlando</h1>
          <label className="block">test@test.com</label>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <button className="px-5 py-2 bg-[#1F1F1F] rounded">
              Meeting Completed
            </button>
            <button className="px-5 py-2 bg-[#1F1F1F] rounded">Move</button>
            <button className="px-5 py-2 bg-[#1F1F1F] rounded">...</button>
          </div>
        </div>
      </div>
      <div className="flex items-center my-4 px-4">
        <div className="flex-grow border-t border-[#F8FAFC33]"></div>
        <span className="px-2 bg-[#1F1F1F] text-sm py-1">Today</span>
        <div className="flex-grow border-t border-[#F8FAFC33]"></div>
      </div>
      <div className="px-4">
        <div className="p-4 rounded bg-[#141517] border border-[#343A40]">
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-sembold">New Product Launch</h2>
              <p className="text-gray-400 text-sm">
                from : jeanne@icloud.com cc : lennon.j@mail.com <br />
                to : lennon.j@mail.com
              </p>
            </div>
            <span className="text-gray-400 text-sm">20 June 2022 : 9:16AM</span>
          </div>
          <div className="mt-4 text-sm text-[#E1E0E0]">
            <p>Hi {`{FIRST_NAME}`},</p>
            <p>
              I would like to introduce you to SaaSgrow, a productized design
              service specifically tailored for SaaS startups. Our aim is to
              help you enhance the user experience and boost the visual appeal
              of your software products.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center my-4 px-4">
        <div className="flex-grow border-t border-[#F8FAFC33]"></div>
        <span className="px-2 bg-[#1F1F1F] text-sm py-1">
          View all 4 replies
        </span>
        <div className="flex-grow border-t border-[#F8FAFC33]"></div>
      </div>
      <div className="ps-4 fixed bottom-5">
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded">Reply</button>
      </div>
    </div>
  );
};

export default InboxPreview;
