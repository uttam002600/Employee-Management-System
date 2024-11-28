import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-green-400 rounded-xl p-5 flex-shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-2">
        <div className="w-full bg-green-900 rounded-xl text-center">
          Completed ✔️
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;