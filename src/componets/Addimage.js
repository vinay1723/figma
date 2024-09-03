import { useState } from "react";
import { useRef } from "react";
function Addimage({ setImages }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const imageUrl = file ? URL.createObjectURL(file) : "";

    // Add the image URL to the array
    setImages((prevArray) =>
      file ? [...prevArray, imageUrl] : [...prevArray]
    );

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Optional: Clean up the URL object after the image is loaded
    return () => URL.revokeObjectURL(imageUrl);
  };
  return (
    <div>
      <label
        htmlFor="file-input"
        className="w-[131.32px] h-[46px] font-['Plus Jakarta Sans'] font-[500] text-[14px] leading-[6.29px] text-center flex justify-center items-center border-t-4 border-l-gray-500 shadow-custom-right bg-[#6F787C] blurred-border-top text-white rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="ml-2">ADD IMAGE</span>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </label>
    </div>
  );
}

export default Addimage;
