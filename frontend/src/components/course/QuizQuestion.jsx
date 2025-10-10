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
    <div
      className="
        mt-8
        w-full
        max-w-2xl
        p-4 sm:p-6 md:p-8 lg:p-[2rem]
        bg-gray-100 dark:bg-[#232136]
        rounded-lg
        shadow-md dark:shadow-violet-900
        mx-auto
        border dark:border-gray-700
      "
    >
      <h2
        className="
          text-base sm:text-lg md:text-xl
          font-semibold
          mb-3
          text-center sm:text-left
          text-gray-800 dark:text-gray-100
        "
      >
        {question}
      </h2>

      <div className="space-y-2">
        {options.map((option, idx) => (
          <label
            key={idx}
            className="
              flex items-center space-x-2
              cursor-pointer
              text-sm sm:text-base
              text-gray-800 dark:text-gray-100
            "
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
          className={`
            mt-4 font-medium
            text-sm sm:text-base
            ${
              selected === correctAnswer
                ? "text-green-600"
                : "text-red-600"
            }
          `}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}

export default QuizQuestion;