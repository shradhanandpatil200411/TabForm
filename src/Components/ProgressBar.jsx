import React from "react";

function ProgressBar({ progress, heading }) {
  return (
    <div className='flex text-center flex-col gap-1'>
      <h1 className='text-sm font-semibold'>{heading}</h1>
      <div className='w-full border h-1 border-gray-400 rounded-lg overflow-hidden'>
        <div
          style={{ width: progress + "%" }}
          className='bg-green-400 h-full'></div>
      </div>
    </div>
  );
}

export default ProgressBar;
