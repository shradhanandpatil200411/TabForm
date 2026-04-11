import { useForm } from "react-hook-form";
import InputFields from "./InputFields";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormSchema from "../Hook/useFormSchema";

function MainForm({
  heading,
  inputFields,
  formTab,
  setFormTab,
  schema,
  setProgress,
  id,
  setAllFormData,
  allFormData,
}) {
  const { formSchema } = useFormSchema(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: allFormData[id] || { experience: "0-2 Years" },
  });

  const submitHandler = (data) => {
    setAllFormData((prev) => ({ ...prev, [id]: { ...data } }));

    if (id != "formEnd") {
      setFormTab((prev) => prev + 1);
      setProgress((prev) => ({
        ...prev,
        [id]: 100,
      }));
    }
  };

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-2xl'>{heading}</h1>
          {formTab > 0 && (
            <span
              onClick={() => {
                if (formTab >= 0) {
                  setFormTab((prev) => prev - 1);
                }
              }}
              className='cursor-pointer text-blue-400 text-sm font-semibold'>
              Back to Previous
            </span>
          )}
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          {inputFields.map((input) => {
            return (
              <div className='my-4 ' key={input.id}>
                <InputFields {...input} register={register} errors={errors} />
              </div>
            );
          })}

          <div className='w-fit mx-auto my-4'>
            <button className='bg-blue-400 px-4 py-2 rounded-lg outline-none text-white font-semibold cursor-pointer '>
              Process to Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MainForm;
