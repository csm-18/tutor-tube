import { useState } from "react";

function QuizQuestion({ questionId, question, options, correctAnswer }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleChange = (option) => {
    setSelected(option);
    if (option === correctAnswer) {
      setFeedback("✅ Correct answer!");
    } else {
      setFeedback(`❌ Wrong answer! The correct answer is: ${correctAnswer}`);
    }
  };

  return (
    <div className="mt-[3rem] px-[1rem] p-[2rem] bg-gray-100 rounded-lg shadow-md w-[45rem]">
      <h2 className="text-lg font-semibold mb-3">{question}</h2>
      <div className="space-y-2">
        {options.map((option, idx) => (
          <label
            key={idx}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name={`quiz-${questionId}`}
              value={option}
              checked={selected === option}
              onChange={() => handleChange(option)}
              className="accent-purple-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {selected && (
        <p
          className={`mt-3 font-medium ${
            selected === correctAnswer ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}

export default QuizQuestion;
