import { questions } from "./questions";
import { options } from "./options";
import { useEffect, useState } from "react";

const Quiz = () => {
  const [optionsArray, setOptionsArray] = useState(options);
  const shuffleOptions = () => {
    const shuffledOptions = [...options].sort(() => Math.random() - 0.5);
    setOptionsArray(shuffledOptions);
    console.log(shuffledOptions);
  };

  useEffect(() => {
    shuffleOptions();
  }, []);

  return (
    <div className="quiz">
      <div className="question">
        <p>{questions[0].question}</p>
        <p>{optionsArray[0].option}</p>
        <p>{optionsArray[1].option}</p>
        <p>{optionsArray[2].option}</p>
      </div>
    </div>
  );
};

export default Quiz;
