import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { TbUpload } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import Head from "next/head";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("chat");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Stoic Education Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <div className="bg-[#1C1C1C] py-10 px-5 w-[250px] border-r border-[#282828] flex flex-col justify-between">
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="text-xl w-full flex justify-center items-center cursor-default">
              <h1>S T O I C</h1>
            </div>
            <div className="w-full flex flex-col gap-2">
              {/* Chat */}
              <div
                className={`flex justify-start items-center gap-2 text-[#9D9D9D] cursor-pointer px-3 py-2 rounded-md w-full transition-all hover:text-white  border border-transparent ${
                  activeSection === "chat" ? "bg-[#2B2B2B] shadow-md border-[#393939]" : ""
                }`}
                onClick={() => handleSectionClick("chat")}
              >
                <BsChatLeftText
                  size={14}
                  className={activeSection === "chat" ? "text-white" : ""}
                />
                <h1 className={activeSection === "chat" ? "text-white" : ""}>Chat</h1>
              </div>

              {/* Upload */}
              <div
                className={`flex justify-start items-center gap-2 text-[#9D9D9D] cursor-pointer px-3 py-2 rounded-md w-full transition-all hover:text-white border border-transparent ${
                  activeSection === "upload" ? "bg-[#2B2B2B] shadow-md border-[#393939]" : ""
                }`}
                onClick={() => handleSectionClick("upload")}
              >
                <TbUpload
                  size={14}
                  className={activeSection === "upload" ? "text-white" : ""}
                />
                <h1 className={activeSection === "upload" ? "text-white" : ""}>Upload</h1>
              </div>

              {/* Resources */}
              <div
                className={`flex justify-start items-center gap-2 text-[#9D9D9D] cursor-pointer px-3 py-2 rounded-md w-full transition-all hover:text-white border border-transparent ${
                  activeSection === "resources" ? "bg-[#2B2B2B] shadow-md border-[#393939]" : ""
                }`}
                onClick={() => handleSectionClick("resources")}
              >
                <FiBook
                  size={14}
                  className={activeSection === "resources" ? "text-white" : ""}
                />
                <h1 className={activeSection === "resources" ? "text-white" : ""}>Resources</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* Profile */}
            <div
              className={`flex justify-start items-center gap-2 text-[#9D9D9D] cursor-pointer px-3 py-2 rounded-md w-full transition-all hover:text-white border border-transparent ${
                activeSection === "profile" ? "bg-[#2B2B2B] shadow-md border-[#393939]" : ""
              }`}
              onClick={() => handleSectionClick("profile")}
            >
              <BiUser
                size={14}
                className={activeSection === "profile" ? "text-white" : ""}
              />
              <h1 className={activeSection === "profile" ? "text-white" : ""}>Profile</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <h1>{activeSection === "chat" ? "Chat" : ""}</h1>
          <h1>{activeSection === "upload" ? "Upload" : ""}</h1>
          <h1>{activeSection === "resources" ? "Resources" : ""}</h1>
          <h1>{activeSection === "profile" ? "Profile" : ""}</h1>
        </div>
      </div>
    </>
  );
}