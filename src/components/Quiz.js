import { useEffect, useState } from "react";
import Question from "./questions";
import { questions } from "./questions";

const Quiz = () => {
  const [originalQuestions, setOriginalQuestions] = useState(questions);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [correctOption, setCorrectOption] = useState([]);
  return (
    <div className="quiz">
      <h1>Pop Culture Quiz: Pop Music Edition!</h1>
      {questions.map((ques) => (
        <Question
          key={Math.random()}
          ques={ques}
          originalQuestions={originalQuestions}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
          correctOption={correctOption}
          setCorrectOption={setCorrectOption}
        />
      ))}
    </div>
  );
};

export default Quiz;
