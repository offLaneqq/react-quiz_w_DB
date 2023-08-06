# Naruto theme test using TypeScript, React and MySQL

**The project is divided into two parts: FrontEnd and BackEnd.
Accordingly, React + TS is located on the FrontEnd, and a simple server is located on the BackEnd for reading data from the database to transfer them in the form of an object for reading data from the FrontEnd.**

# FrontEnd

## App.tsx

- The purpose of the first StartTrivia function is to initialize the variables from useState and call the data from the BackEnd.

- The following function is designed to check if the user's answer is correct. If it is correct, one is added to the number of points. This is then collected into a single AnswerObject object and passed to the UserAnswer variable using the setUserAnswer method.

- The next function nextQuestion is designed to check whether the user has reached the end (i.e. the questions have run out). If the user has not reached the end, the next question will be generated

- Well, accordingly, the main function of the App (all functions are included in the added function) returns the data that will be displayed on the screen

## components/utils.ts

This file has a single function called shuffleArray. As the name implies, this function is designed to shuffle the sequence of response options offered to the user. If you do not use this function, the correct answer will always be the first or the last (depending on the order in which it was sent)

## components/API.ts

This API.ts file is designed to read, format, and pass data to the StartTrivia function of the App.tsx file.
 > _Here I have some problem reading array from database. From the database, the array of values for incorrect answers was passed as a regular string, not as an array of strings._

Accordingly, the only function in the fetchQuizQuestion file returns a data object where the correct answer and the array of incorrect answers are shuffled and combined into a single array called answers.

## components/QuestionCard.ts

There is one QuestionCard function in this file, which is responsible for the correct logic and displaying the answer options as buttons.

# BackEnd

## server.js

As the file name suggests, this creates a simple server to read data from the database and send it to the FrontEnd for further reading on port 8081.

## narutoquiz.sql

This file has been exported from MySQL, so you will be able to try to import it into your database.

> _I used MySQL via xampp, which I had installed before, but you can install MySQL separately or try using xampp._

### Initially, this project was written under Trivia's API, but I became interested in rewriting it for my own correct and incorrect answers. Later, I found a way how to start a server for data transfer (simulate the transfer of an object as from an API)
