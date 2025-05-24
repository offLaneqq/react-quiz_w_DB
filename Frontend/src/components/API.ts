export type Question = {
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    description: string
}

export type QuestionState = Question & { answers: string[] }

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const fetchQuizQuestion = async () => {
    const endpoint = `http://localhost:8081/narutoquiz`
    const data = await (await fetch(endpoint)).json()

    console.log(data)
    
    data.map((q: any) => {
        q.incorrect_answers = q.incorrect_answers.slice(1, -1).replace(/["]/g, '').split(', ')
        return q
    })
    // [0].incorrect_answers.slice(1, -1).replace(/["]/g, '').split(', ')  - from API-string to formatted array 

    // Shuffle the questions array
    const shuffledQuestions = [...data].sort(() => Math.random() - 0.5);

    return shuffledQuestions.map((question: Question) => (
        {
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        })
    )
}

