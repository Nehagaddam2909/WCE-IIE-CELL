import logo from "../../public/assets/images/question.png";
import Image from "next/image";
// import { Tooltip } from '@nextui-org/react';

const IdeaSubmission = () => {
  return (
    <div className=" flex flex-col w items-center justify-center">
      <div className="my-3 tracking-wide font-medium text-[1.5rem]">
        Idea Submission
      </div>
      <form className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label>Title:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>
        <div className="flex items-center space-x-4">
          <label>Name of the leader:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>
        <div className="flex items-center space-x-4">
          <label>Select type:</label>

          <input
            type="radio"
            name="type"
            id="rd1"
            className="p-1 bg-gray-50"
            value={"Student"}
          />
          <label for="id1">Student</label>
          <input
            type="radio"
            name="type"
            id="id2"
            className="p-1  bg-gray-50"
            value={"Faculty"}
          />

          <label for="id2">Faculty</label>
        </div>
        <div className="flex items-center space-x-4">
          <label>Mobile No:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>
        <div className="flex items-center  space-x-4">
          <label>Department:</label>
          <select>
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
            <option>Electrical</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label>Program:</label>
          <select>
            <option>UG</option>
            <option>PG</option>
          </select>
        </div>
        <div className="flex items-center  space-x-4">
          <label>Year:</label>
          <select>
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
            <option>Final Year</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label>Name of other team members/guide:</label>
          <input type="text" className="p-1 outline outline-1 bg-gray-50" />
        </div>
        <div className="flex items-center space-x-4">
          <label>Abstract/Report:</label>
          <input
            type="file"
            accept=".pdf,.docx"
            className="p-1 outline outline-1 bg-gray-50"
          />
        </div>

        <div className="flex space-x-4">
          <label>Relevance </label>
          <button
            data-tooltip-target="tooltip-dark"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Dark
          </button>
          <div
            id="tooltip-dark"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <textarea
            accept=".pdf,.docx"
            className="p-1 outline outline-1 bg-gray-50"
          />
        </div>
        <div className="flex space-x-4">
          <label>Potential for impact:</label>
          <textarea
            accept=".pdf,.docx"
            className="p-1 outline outline-1 bg-gray-50"
          />
        </div>
        <div className="flex space-x-4">
          <label>Viability :</label>
          <textarea
            accept=".pdf,.docx"
            className="p-1 outline outline-1 bg-gray-50"
          />
        </div>
        <div className="flex space-x-4">
          <label>Applicability :</label>
          <textarea
            accept=".pdf,.docx"
            className="p-1 outline outline-1  bg-gray-50"
          />
        </div>
      </form>
    </div>
  );
};
export default IdeaSubmission;
