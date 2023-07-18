import React, { useState, useEffect } from "react";
import react from "@astrojs/react";

const template_url = "https://api.dicebear.com/6.x";

const API = () => {
  const [source, setSource] = useState("");
  const [inputs, setInputs] = useState({
    style: "pixel-art",
    name: "Violet",
    background: "#d0c8ff",
  });

  useEffect(() => {
    setSource(
      template_url +
        "/" +
        inputs.style +
        "/svg?seed=" +
        inputs.name +
        "&backgroundColor=" +
        inputs.background.replace("#", "")
    );
  }, []);

  //form data

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSource(
      template_url +
        "/" +
        inputs.style +
        "/svg?seed=" +
        inputs.name +
        "&backgroundColor=" +
        inputs.background.replace("#", "")
    );
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 bg-white/50 shadow-lg rounded-lg">
          <div className="mb-6">
            <div className="">
              <label>Background Color</label>
            </div>
            <div className="">
              <input
                type="color"
                className="h-12"
                id="head"
                name="background"
                value={inputs.background}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="mb-6">
            <div className="">
              <label>Art Style</label>
            </div>
            <div className="">
              <select
                data-te-select-init
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                onChange={handleChange}
                name="style"
                value={inputs.style}
              >
                <option value="pixel-art">Pixel Art</option>
                <option value="adventurer">Adventurer</option>
                <option value="avataaars">Avataaars</option>
                <option value="bottts">Bottts</option>
                <option value="fun-emoji">Fun Emoji</option>
                <option value="identicon">Identicon</option>
                <option value="lorelei">Lorelei</option>
                <option value="notionists">Notionists</option>
                <option value="shapes">Shapes</option>
                <option value="initials">Initials</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <div className="">
              <label>
                Name{" "}
                <span className="block text-xs">
                  (used as randomization value)
                </span>
              </label>
            </div>
            <div className="">
              <input
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-password"
                type="text"
                placeholder="Violet"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <button
                type="button"
                onClick={handleSubmit}
                className="shadow bg-gray-500 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Generate
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-12 justify-center items-center p-4">
          {source && <img src={source} alt="SVG" className="w-full" />}
          {source && (
            <a href={source} download className="hover:text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </>
  );

  // return (
  //   // ... consume here
  //   <>
  //   <div>    {source && (<img src={source} alt="SVG" className="w-full" />)} </div>

  //   </>
  // );
};

export default API;
