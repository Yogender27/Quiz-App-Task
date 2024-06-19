import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div className='score-section'>
      You scored {score} out of {totalQuestions}
      <br />
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
}

export default Score;
