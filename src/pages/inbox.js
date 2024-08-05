import InboxDetails from "@/components/inbox/inboxDetails";
import InboxPreview from "@/components/inbox/inboxPreview";
import InboxUISideBar from "@/components/inbox/InboxUI";
import React from "react";

const Inbox = () => {
  return (
    <div className="flex h-full w-full bg-black text-white">
      <InboxUISideBar />

      {/* Main Content */}
      <InboxPreview />

      {/* Details Section */}
      <InboxDetails />
    </div>
  );
};

export default Inbox;
