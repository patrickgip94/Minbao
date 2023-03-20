"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10 justify-center">
      <div className="flex-col pt-10">
        <h1 className="font-bold text-2xl text-red-500">
          Something went wrong!
        </h1>
        <button
          className="hover:text-yellow-300 mt-4 font-semibold "
          onClick={() => reset()}
        >
          Try Again?
        </button>
      </div>
      <div className="flex items-center justify-center pt-10">
        <img
          className="flex items-center justify-center rounded-md"
          src="https://media3.giphy.com/media/sgZdwNkOH43wZOEUJ2/giphy.gif?cid=ecf05e471kxh5byxnu6ma93ugoqw697xu93krfddrfowfa9u&rid=giphy.gif&ct=g"
          alt="error - Parks and Rec"
        />
      </div>
    </div>
  );
}

export default Error;
