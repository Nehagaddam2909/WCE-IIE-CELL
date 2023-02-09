import logo from "../../public/assets/images/question.png";
import Image from "next/image";
import React from "react";
import RegisterQuestions from "../../data/registerQuestions";
import Question from "./Question";

const IdeaSubmission = () => {

  const handleClick = () => {
    setVisible(!visible);
    console.log(visible);
  };
  return (
    <div className=" flex flex-col w-full items-center justify-center">
      <div className="my-3 tracking-wide font-medium text-[1.5rem]">
        Idea Submission
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 space-x-12 space-y-5" method="post">
        <div className="grid grid-cols-2 items-center space-x-4">
          <label className="ml-5">Title:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>

        <div className="grid grid-cols-2 items-center space-x-4">
          <label>Name of the leader:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>
        <div className="grid grid-cols-2 items-center space-x-4">
          <label>Select type:</label>
          <div className="flex space-x-4">
            <div className="flex space-x-2">
              <input
                type="radio"
                name="type"
                id="rd1"
                className="p-1 bg-gray-50"
                value={"Student"}
              />
              <label htmlFor="id1">Student</label>
            </div>
            <div className="flex space-x-2">
              <input
                type="radio"
                name="type"
                id="id2"
                className="p-1  bg-gray-50"
                value={"Faculty"}
              />

              <label htmlFor="id2">Faculty</label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center space-x-4">
          <label>Mobile No:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>
        <div className="grid grid-cols-2 items-center  space-x-4">
          <label>Department:</label>
          <select className="p-2">
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
          </select>
        </div>
        <div className="grid grid-cols-2 items-center space-x-4">
          <label>Program:</label>
          <select className="p-2">
            <option>UG</option>
            <option>PG</option>
          </select>
        </div>
        <div className="grid grid-cols-2 items-center  space-x-4">
          <label>Year:</label>
          <select className="p-2">
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
            <option>Final Year</option>
          </select>
        </div>
        <div className="grid grid-cols-2 items-center space-x-4">
          <label>Name of other team members/guide:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>
        <div className="grid grid-cols-2 items-center space-x-4">
          <label>Abstract/Report:</label>
          <input
            type="file"
            accept=".pdf,.docx"
            className="p-1 outline outline-1 bg-gray-50"
          />
        </div>
        {RegisterQuestions.map((ele, idx) => (
          <Question
            key={idx}
            logo={logo}
            title={ele.title}
            desc={ele.desc}
          ></Question>
        ))}
        <div className="grid grid-cols-2 justify-center">
          <button
            type="submit"
            className="p-2 rounded-xl w-[8rem] border bg-primary text-white"
          >
            Submit Idea
          </button>
        </div>
      </form>
    </div>
  );
};
export default IdeaSubmission;
