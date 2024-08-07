import React from "react";

const MessageBox = () => {
  return (
    <div className="w-full absolute bottom-3 px-4">
      <div className="h-[450px] bg-[#141517] rounded-md border border-[#4A5055] relative">
        <div className="bg-[#23272C] flex justify-between px-5 py-2">
          <span>Reply</span>
          <span>X</span>
        </div>
        <div className="">
          <div className="border-b border-t border-[#4A5055] py-2 text-sm">
            <div className="flex gap-3 px-5">
              <span className="text-[#BAB9BD]">To:</span>
              <input
                className="outline-none bg-[#141517] w-full"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="border-b  border-[#4A5055] py-2 text-sm">
            <div className="flex gap-3 px-5">
              <span className="text-[#BAB9BD]">From:</span>
              <input
                className="outline-none bg-[#141517] w-full"
                placeholder="Enter from email"
              />
            </div>
          </div>
          <div className="border-b  border-[#4A5055] py-2 text-sm">
            <div className="flex gap-3 px-5">
              <span className="text-[#BAB9BD]">Subject:</span>
              <input
                className="outline-none bg-[#141517] w-full"
                placeholder="Enter subject"
              />
            </div>
          </div>
        </div>
        <div>
          <textarea className="w-full h-full p-5 bg-[#141517] outline-none" />
        </div>
        <div className="ps-3 border-t border-[#4A5055] pt-1 absolute bottom-2 w-full">
          <button
            className="px-8 py-2 rounded"
            style={{
              background:
                "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
