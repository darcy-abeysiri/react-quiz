import React, { useState } from 'react'

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  //We need to add more questions here.
]

const Quiz = () => {
  //Start with an initial question index of 0.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  //Start with an intial score value of 0.
  const [score, setScore] = useState(0)

  //Start with the initial state of the quiz being finished = false so the quiz is not finished on intialization.
  const [quizFinished, setQuizFinished] = useState(false)

  //Start with the selected option and question as an empty string.

  const [selectedOption, setSelectedOption] = useState('')

  //Start with the initial answer feedback (correct or incorrect answer) as an empty string.
  const [feedback, setFeedback] = useState('')

  //Display the question.
  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex]

    //If the correct option is selected for the question add 1 to the score and set the feedback as correct.
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1)
      setFeedback('correct')

      //If the correct option is not selected for the question set the feedback as incorrect.
    } else {
      setFeedback('incorrect')
    }
    setSelectedOption(selectedOption)

    // Create a timer and delay so that the user can see the feedback for the question before Delay moving to the next question to show feedback
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedOption('')
        setFeedback('')
      } else {
        setQuizFinished(true)
      }
    }, 1000) // Feedback is shown for 1 second
  }

  //Render the questions
  const renderQuestion = () => {
    //Destruct to extract the current questions and answer options.
    const { question, options } = questions[currentQuestionIndex]
    return (
      //Render the questions and answer options. Iterate over the options array and render a button for each option.

      <div>
        <h2>{question}</h2>
        <div>
          {options.map((option) => {
            let buttonClass = ''

            //Check to see the if the selected options is equal to the correct answer. If it is set the button class to correct and if not set the button class to incorrect.

            if (option === selectedOption) {
              buttonClass =
                option === questions[currentQuestionIndex].answer
                  ? 'correct'
                  : 'incorrect'
            } else if (
              option === questions[currentQuestionIndex].answer &&
              feedback === 'incorrect'
            ) {
              buttonClass = 'correct'
            }

            return (
              <button
                key={option}
                className={buttonClass}
                onClick={() => handleAnswer(option)}
                disabled={selectedOption !== ''} // Disable buttons after answer is selected
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    //If the quiz is finished show a summary of the score. If not render another question.

    <div>
      {quizFinished ? (
        <div>
          <h2>Quiz Finished!</h2>
          <p>
            Your score: {score} out of {questions.length}
          </p>
        </div>
      ) : (
        renderQuestion()
      )}
    </div>
  )
}

export default Quiz