import { useEffect } from "react";
export const options = [
  [
    { option: "Halle Berry", correctAnswer: false },
    { option: "Sean Bean", correctAnswer: true },
    { option: "David Washington", correctAnswer: false },
  ],
  [
    { option: "2015", correctAnswer: false },
    { option: "2016", correctAnswer: true },
    { option: "2017", correctAnswer: false },
  ],
];

const Option = ({
  option,
  selectedOption,
  setSelectedOption,
  shuffledOptions,
  correctOption,
  setCorrectOption,
  setWrongOption,
  optionsArray,
}) => {
  const handleSelectedOption = () => {
    setSelectedOption(
      optionsArray.filter((arrOption) => arrOption.id === option.id)
    );
  };
  useEffect(() => {
    if (selectedOption.length > 0) {
      if (selectedOption[0].correctAnswer) {
        setCorrectOption(selectedOption);
        setWrongOption();
      } else {
        setWrongOption(selectedOption);
        setCorrectOption();
      }
    }
  }, [selectedOption]);
  return (
    <div className="option">
      <p onClick={handleSelectedOption}>{option[0].option}</p>
    </div>
  );
};

export default Option;
