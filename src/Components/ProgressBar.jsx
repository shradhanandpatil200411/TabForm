import React from "react";

function ProgressBar({ id, progress, heading }) {
  return (
    <>
      {id !== "formEnd" && (
        <div
          className='flex w-full text-center flex-col  gap-1'
          style={{ display: progress[id] > 100 ? "none" : "block" }}>
          <h1 className='text-xs font-semibold'>{heading}</h1>
          <div className='w-full border h-1 border-gray-400  overflow-hidden'>
            <div
              style={{
                width: progress[id] + "%",
              }}
              className='bg-green-400 h-full'></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProgressBar;
