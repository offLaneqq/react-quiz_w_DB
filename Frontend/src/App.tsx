import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestion } from './components/API';
import { QuestionState } from './components/API';
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string,
}

const TOTAL_QUESTION = 10

const App: React.FC = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestion = await fetchQuizQuestion()

    setQuestions(newQuestion)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)

  }

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer
      if (correct) setScore((prev) => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject])
    }
  }


  const nextQuestion = () => {
    const nextQuestion = number + 1
    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }

  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || userAnswer.length === TOTAL_QUESTION ? (
          <button className='start' onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading && <p>Loading Questions ...</p>}
        {!gameOver && !loading && (<QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={checkAnswer}
        />)}
        {userAnswer.length === number + 1  && <div className='description'>
          <p>
            {questions[number].description}
          </p>
        </div>}
        {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTION - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
