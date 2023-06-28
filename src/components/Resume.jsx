import React from "react";
import Title from "./Title";

function Resume() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <Title>Resume</Title>

      <button>
        <a
          className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md
                        text-white drop-shadow-xl bg-gradient-to-r from-sky-400 bg-emerald-400 
                        hover:outline-amber-400"
          href="/assets/resume.pdf"
          download="Resume_Naman_Uttamchandani.pdf"
        >
          Download Resume
        </a>
      </button>
    </div>
  );
}

export default Resume;
