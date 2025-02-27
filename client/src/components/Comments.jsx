import React from "react";

const Comments = () => {
  return (
    <div className="ml-6">
      <h2 className=" relative border-b-2 w-2/3 border-gray-400 p-4 text-gray-600">
        COMMENTS
        <span className="absolute left-0 bottom-0 w-32 h-[1px] bg-black"></span>
      </h2>

      <br />
      <form className="flex flex-col w-2/3">
        <div className="flex gap-4">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-md outline-none "
            type="text"
            placeholder="Name"
          />
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-md outline-none "
            type="email"
            placeholder="Email Address"
          />
        </div>

        <textarea
          className="w-full h-32 border border-gray-400 p-3 mt-4 rounded-md outline-none "
          placeholder="Comment"
        />

        <button className="w-24 p-2 mt-4 rounded-sm bg-black text-white ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
