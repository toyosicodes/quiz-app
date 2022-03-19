import { useEffect, useState } from "react";
const Question = ({
  ques,
  setSelectedQuestion,
  originalQuestions,
  selectedQuestion,
  correctOption,
  setCorrectOption,
}) => {
  const knowCurrentQuestion = () => {
    setSelectedQuestion(ques);
  };
  useEffect(() => {
    console.log(selectedQuestion);
  }, [selectedQuestion]);
  const checkAnswer = () => {};
  return (
    <div className="set">
      <p className="question">{ques.question}</p>
      <div className="options">
        <p className="option" onClick={knowCurrentQuestion}>
          {ques.answers[0].text}
        </p>
        <p className="option" onClick={knowCurrentQuestion}>
          {ques.answers[1].text}
        </p>
        <p className="option" onClick={knowCurrentQuestion}>
          {ques.answers[2].text}
        </p>
        <p className="option" onClick={knowCurrentQuestion}>
          {ques.answers[3].text}
        </p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Question;

export const questions = [
  {
    question: "What year did Rihanna release her last album, ANTI?",
    id: Math.random(),
    answers: [
      { text: "2015", correct: false },
      { text: "2016", correct: true },
      { text: "2017", correct: true },
      { text: "2018", correct: true },
    ],
  },
  {
    question:
      "What is the name of the other woman in the rumoured Olivia Rodrigo - Joshua Bassett situation?",
    answers: [
      { text: "Devon Lee Carson", correct: false },
      { text: "Elizabeth Grant", correct: false },
      { text: "Sabrina Carpenter", correct: true },
      { text: "Kaia Gerber", correct: false },
    ],
  },
  {
    question: "Which match of iconic song to artiste is incorrect?",
    answers: [
      { text: "Applause - Lady Gaga", correct: false },
      { text: "Roar - Britney Spears", correct: true },
      { text: "Blank Space - Taylor Swift", correct: false },
      { text: "Halo - Beyoncé", correct: false },
    ],
  },
  {
    question:
      "One of these artistes is credited for changing the sound of pop with her slow, softly sung music",
    answers: [
      { text: "Beyoncé", correct: false },
      { text: "Lana Del Rey", correct: false },
      { text: "Lorde", correct: false },
      { text: "Taylor Swift", correct: false },
    ],
  },
  {
    question: "Match the quote to its right speaker:",
    answers: [
      {
        text: "'I would very much like to be excluded from this narrative' - Beyoncé",
        correct: false,
      },
      { text: "'Ain't that 'bout a b*tch' - Rihanna'", correct: false },
      {
        text: "'There can be a hundred people in the room, and 99 don't believe in you, but one does' - Lady Gaga",
        correct: true,
      },
      { text: "'Who got the Grammys?' - Doja Cat", correct: false },
    ],
  },
  {
    question: "One of these is not like the others",
    answers: [
      { text: "Olivia Rodrigo", correct: false },
      { text: "Taylor Swift", correct: false },
      { text: "Billie Eilish", correct: false },
      { text: "Lana Del Rey", correct: true },
    ],
  },
  {
    question:
      "One of these is not like the others (and I'll be nice this time by giving context: all but one are praised for a particular talent)",
    answers: [
      { text: "Taylor Swift", correct: false },
      { text: "Lorde", correct: false },
      { text: "Beyoncé", correct: true },
      { text: "Olivia Rodrigo", correct: false },
    ],
  },
  {
    question: "One of these artistes does not have a film on Netflix",
    answers: [
      { text: "Rihanna", correct: true },
      { text: "Beyoncé", correct: false },
      { text: "Taylor Swift", correct: false },
      { text: "BLACKPINK", correct: false },
    ],
  },
  {
    question: "One of these is not a pop album",
    answers: [
      { text: "Chromatica", correct: false },
      { text: "Red", correct: true },
      { text: "In The Zone", correct: false },
      { text: "SAWAYAMA", correct: false },
    ],
  },
  {
    question: "Select the pop star alter ego",
    answers: [
      { text: "Sasha Fierce", correct: true },
      { text: "Tina Snow", correct: false },
      { text: "Roman Zolanski", correct: false },
      { text: "Slim Shady", correct: false },
    ],
  },
];
