import React from "react";

function ThankYou({ allFormData, progress }) {
  console.log({ allFormData, progress });

  return (
    <div className='h-52 flex justify-center items-center'>
      <div className='w-fit  text-center '>
        <h1 className='text-green-500 font-bold text-6xl'>Thank You</h1>
        <p className='font-semibold text-xl text-gray-500'>
          Your form is submitted
        </p>
      </div>
    </div>
  );
}

export default ThankYou;
