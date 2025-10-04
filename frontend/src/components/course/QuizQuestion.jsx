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
        w-full                    /* Full width by default */
        max-w-2xl                 /* Limit width on large screens (~42rem) */
        p-4 sm:p-6 md:p-8 lg:p-[2rem]  /* Responsive padding */
        bg-gray-100
        rounded-lg
        shadow-md
        mx-auto                   /* Center on page */
      "
    >
      <h2
        className="
          text-base sm:text-lg md:text-xl
          font-semibold
          mb-3
          text-center sm:text-left   /* Center text on small screens */
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
              text-sm sm:text-base     /* Responsive text size */
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