import React, { useState } from "react";
import MainForm from "./Components/MainForm";
import { data } from "./utils/data";

function App() {
  const [formTab, setFormTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const { heading, inputFields, id, schema } = data[formTab];
  const totalTab = data.length - 1;
  return (
    <div className='w-screen h-screen bg-gray-200 pt-10'>
      <div className='border rounded-lg border-gray-200 bg-white p-4 w-full lg:w-4/12 md:w-1/2 mx-auto  shadow-lg'>
        <MainForm
          heading={heading}
          inputFields={inputFields}
          id={id}
          formTab={formTab}
          setFormTab={setFormTab}
          schema={schema}
          totalTab={totalTab}
          progress={progress}
          setProgress={setProgress}
        />
      </div>
    </div>
  );
}

export default App;
