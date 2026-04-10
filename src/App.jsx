import React, { useState } from "react";
import MainForm from "./Components/MainForm";
import { data } from "./utils/data";
import ThankYou from "./Components/ThankYou";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [formTab, setFormTab] = useState(0);
  const [progress, setProgress] = useState({
    personalInfo: 0,
    professionalInfo: 0,
    billingInfo: 0,
  });
  const [allFormData, setAllFormData] = useState({});
  const { heading, inputFields, id, schema } = data[formTab];

  return (
    <div className='w-min-screen h-min-screen bg-gray-200 pt-10'>
      <div className='border rounded-lg border-gray-200 bg-white p-4 w-full lg:w-4/12 md:w-1/2 mx-auto  shadow-lg'>
        {id !== "formEnd" ?
          <>
            <div className='flex gap-1 my-2'>
              {data.map((tab) => {
                return (
                  <ProgressBar
                    key={tab.id}
                    id={tab.id}
                    heading={tab?.heading}
                    progress={progress}
                  />
                );
              })}
            </div>
            <MainForm
              heading={heading}
              inputFields={inputFields}
              id={id}
              formTab={formTab}
              setFormTab={setFormTab}
              schema={schema}
              progress={progress}
              setProgress={setProgress}
              setAllFormData={setAllFormData}
            />
          </>
        : <ThankYou allFormData={allFormData} progress={progress} />}
      </div>
    </div>
  );
}

export default App;
