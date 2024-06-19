import React from 'react';

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div className='question-section'>
      <div className='question-text'>{question.question}</div>
      <div className='answer-section'>
        {question.options.map((option) => (
          <button onClick={() => handleAnswerOptionClick(option)} key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
