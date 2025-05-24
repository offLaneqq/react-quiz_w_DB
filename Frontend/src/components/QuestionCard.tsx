import React, { useMemo } from 'react'
import { AnswerObject } from '../App'
import { ButtonWrapper, Wrapper } from './QuestionCard.styled';

// Fisher-Yates (Knuth) shuffle algorithm
const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    score: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
    score
}) => {
    // Shuffle answers only when the question changes
    const shuffledAnswers = useMemo(() => shuffleArray(answers), [answers]);

    return (
        <Wrapper>
            <div className="score-display">
                <p>Правильних відповідей: {score} з {totalQuestions}</p>
            </div>
            <p className='number'>
                Питання: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {shuffledAnswers.map((answer) => (
                    <ButtonWrapper
                        key={answer}
                        $correct={userAnswer?.correctAnswer === answer}
                        $userClicked={userAnswer?.answer === answer}
                        >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;