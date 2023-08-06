
export type Question = {
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    description: string
}

export type QuestionState = Question & { answers: string[] }

export const fetchQuizQuestion = async () => {
    const endpoint = `http://localhost:8081/narutoquiz`
    const data = await (await fetch(endpoint)).json()
    
    data.map((q: any) => {
        q.incorrect_answers = q.incorrect_answers.slice(1, -1).replace(/["]/g, '').split(', ')
        return q
    })
    // [0].incorrect_answers.slice(1, -1).replace(/["]/g, '').split(', ')  - from API-string to formatted array 
    return data.map((question: Question) => (
        {
        ...question,
        answers: [...question.incorrect_answers, question.correct_answer]
        })
    )
}

