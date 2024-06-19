import React, { useState } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import './App.css';

// Questions

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Tolkien', 'Hemingway', 'Fitzgerald'],
    answer: 'Shakespeare'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter'
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answer: 'Lion'
  },
  {
    question: 'How many colors are there in a rainbow?',
    options: ['5', '6', '7', '8'],
    answer: '7'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars'
  },
  {
    question: 'What is the name of the toy cowboy in Toy Story?',
    options: ['Buzz', 'Woody', 'Jessie', 'Slinky'],
    answer: 'Woody'
  },
  {
    question: 'What do bees make?',
    options: ['Milk', 'Honey', 'Wax', 'Silk'],
    answer: 'Honey'
  },
  {
    question: 'Which ocean is the largest?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    answer: 'Pacific'
  },
  {
    question: 'Which fruit is known to keep the doctor away?',
    options: ['Banana', 'Apple', 'Orange', 'Grapes'],
    answer: 'Apple'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>

      <h1>Welcome to Fun Quiz</h1>
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default App;
