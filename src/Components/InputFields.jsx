import React from "react";

function InputFields({
  label,
  registerName,
  type,
  option,
  register,
  errors,
  fields,
}) {
  const getNestedError = (errObj, path) => {
    if (!path || !errObj) return undefined;
    return path.split(".").reduce((acc, key) => acc?.[key], errObj);
  };

  const currentError = getNestedError(errors, registerName);

  const renderInput = () => {
    switch (type) {
      case "dropdown":
        return (
          <select
            {...register(registerName)}
            className={`border ${currentError ? "border-red-400" : "border-gray-600"} w-full border-gray-300 outline-gray-400 rounded-sm p-1 shadow-sm bg-white`}
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

      case "section": {
        return (
          <div className=' border-gray-200 rounded-lg  mt-2'>
            <h3 className='font-bold text-sm text-gray-600 mb-3 border-b pb-1'>
              {label}
            </h3>
            {fields.map((nestedInput) => (
              <div className='my-3' key={nestedInput.id}>
                <InputFields
                  {...nestedInput}
                  register={register}
                  errors={errors}
                />
              </div>
            ))}
          </div>
        );
      }

      default:
        return (
          <input
            id={registerName}
            type={type}
            {...register(registerName)}
            className={`border w-full ${currentError ? "border-red-400 outline-red-400" : "border-gray-400 "} outline-blue-500  rounded-sm p-1 shadow-sm`}
          />
        );
    }
  };

  return (
    <div className='flex  relative flex-col gap-1  mb-2'>
      {type !== "section" && (
        <label className='font-semibold text-sm' htmlFor={registerName}>
          {label}
        </label>
      )}

      <div className='w-full flex flex-col '>{renderInput()}</div>

      {type !== "section" && currentError && (
        <span className='text-xs font-semibold text-red-500'>
          {currentError.message}
        </span>
      )}
    </div>
  );
}

export default InputFields;
