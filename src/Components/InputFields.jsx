import React from "react";

function InputFields({ label, registerName, type, option, register, errors }) {
  const renderInput = () => {
    switch (type) {
      case "dropdown":
      case "select":
        return (
          <select
            {...register(registerName)}
            className='border w-full border-gray-300 outline-gray-400 rounded-sm p-1 shadow-sm bg-white'
            id={registerName}>
            <option value=''>Select {label}...</option>
            {option.map((op, i) => (
              <option value={op} key={i}>
                {op}
              </option>
            ))}
          </select>
        );

      case "radio":
        return (
          <div className='flex gap-4 items-center h-full'>
            {option.map((op, i) => (
              <label key={i} className='flex items-center gap-1 cursor-pointer'>
                <input
                  type='radio'
                  value={op}
                  {...register(registerName)}
                  className='cursor-pointer'
                />
                <span className='text-sm'>{op}</span>
              </label>
            ))}
          </div>
        );

      default:
        return (
          <input
            id={registerName}
            type={type}
            {...register(registerName)}
            className={`border w-full ${errors[registerName] ? "border-red-400" : "border-gray-300"} outline-blue-400 rounded-sm p-1 shadow-sm`}
          />
        );
    }
  };

  return (
    <div className='flex relative flex-col gap-1  mb-2'>
      <label className='font-semibold text-sm' htmlFor={registerName}>
        {label}
      </label>

      <div className='w-full flex flex-col '>{renderInput()}</div>

      {errors[registerName] && (
        <span className='text-xs font-semibold text-red-500 absolute -bottom-4'>
          {errors[registerName].message}
        </span>
      )}
    </div>
  );
}

export default InputFields;
