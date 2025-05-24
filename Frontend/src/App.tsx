import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestion } from "./components/API";
import { QuestionState } from "./components/API";
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(10);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestion();

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const handleQuestionCount = (count: number) => {
    setTotalQuestions(count);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);

      // Automatically move to next question after a short delay
      setTimeout(() => {
        const nextQuestion = number + 1;
        if (nextQuestion === totalQuestions) {
          setGameOver(true);
        } else {
          setNumber(nextQuestion);
        }
      }, 1000); // 1 second delay to show the answer
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === totalQuestions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {gameOver || userAnswer.length === totalQuestions ? (
          <div className="start-screen">
            <h1>Підготовка до ЕФВВ Інформаційні технології</h1>
            {userAnswer.length === totalQuestions && (
              <p className="final-score">
                Ваш результат: {score} з {totalQuestions} балів
              </p>
            )}
            <p>
              Запитання та відповіді було взяти з файлу ЕФВВ-2024 Інформаційні
              технології
            </p>
            <div className="question-count-buttons">
              <button
                className={`count-btn ${
                  totalQuestions === 10 ? "selected" : ""
                }`}
                onClick={() => handleQuestionCount(10)}
                disabled={!gameOver && userAnswer.length !== totalQuestions}
              >
                10 Запитань
              </button>
              <button
                className={`count-btn ${
                  totalQuestions === 20 ? "selected" : ""
                }`}
                onClick={() => handleQuestionCount(20)}
                disabled={!gameOver && userAnswer.length !== totalQuestions}
              >
                20 Запитань
              </button>
              <button
                className={`count-btn ${
                  totalQuestions === 30 ? "selected" : ""
                }`}
                onClick={() => handleQuestionCount(30)}
                disabled={!gameOver && userAnswer.length !== totalQuestions}
              >
                30 Запитань
              </button>
            </div>
            <button className="start" onClick={startTrivia}>
              Розпочати
            </button>
          </div>
        ) : null}
        {!gameOver && !loading && (
          <>
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={totalQuestions}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswer ? userAnswer[number] : undefined}
              callback={checkAnswer}
              score={score}
            />
          </>
        )}

        {!gameOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== totalQuestions - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Наступне питання
          </button>
        ) : null}
        <footer className="footer">
          <p>Created by Klymchuk Dmytro</p>
        </footer>
      </Wrapper>
    </>
  );
};

export default App;
