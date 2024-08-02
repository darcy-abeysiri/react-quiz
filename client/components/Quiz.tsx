// The main feature and our main criteria to complete
import React, { useState } from 'react'

const questions = [
  {
    // Q1
    question: 'Which Olypics have been postponed due to Covid-19?',
    options: ['Rio de Janerio', 'Beijing', 'Tokyo', 'Pyeongchang'],
    answer: 'Tokyo',
  },
  {
    // Q2
    question: 'When were the first known Olympic games held?',
    options: ['775 BC', '776 BC', '777 BC', '778 BC'],
    answer: '776 BC',
  },
  {
    // Q3
    question: 'What does the green colour on the olympic symbol represent?',
    options: ['Europe', 'America', 'Africa', 'Australia', 'Asia'],
    answer: 'Australia',
  },
  {
    // Q4
    question: 'What are not the 5 official Olympic Values',
    options: [
      'Fair Play',
      'Respect for others',
      'Joy of effort',
      'Mental Activity',
    ],
    answer: 'Mental Activity',
  },
  {
    // Q5
    question: 'What is not the Olympic Motto',
    options: ['Higher', 'Teamwork', 'Faster', 'Stronger'], // Daft punk ref there
    answer: 'Teamwork',
  },
  {
    // Q6
    question: 'When were the first Winter Olympics held?',
    options: ['1924', '1925', '1926', '1927'],
    answer: '1924',
  },
  {
    // Q7
    question: 'Where did the first Winter Olympic Games take place?',
    options: [
      'Sapporo, Japan',
      'Chamonix, France',
      'St. Moritz, Swizerland',
      'Innsbruck, Austria',
    ],
    answer: 'Chamonix, France',
  },
  {
    // Q8
    question: 'What is the first Offcial Olympic Mascot?',
    options: ['Waldi', 'Misha', 'Amil', 'Sam'],
    answer: 'Waldi',
  },
  {
    // Q9
    question: 'How many grams of gold are in gold medals?',
    options: ['4', '5', '6', '7'],
    answer: '6',
  },
  {
    // Q10
    question: 'What is not new sports introduced at the Pris Olympics?',
    options: ['Breaking', 'Surfing', 'Skateboarding', 'E-Sports'],
    answer: 'E-Sports',
  },
  {
    // Q11
    question: 'How many rings are there in the olympic flag?',
    options: ['4', '7', '5', '6'],
    answer: '5',
  },
  {
    // Q12
    question:
      'The Olympic Games could be viewed on mobile devices for the first time in which year?',
    options: ['2000', '2002', '2004', '2006'],
    answer: '2006',
  },
  {
    // Q13
    question: 'Which of the follow is not an Olympic Sport?',
    options: ['Squash', 'Swimming', 'High Jumping', 'Wrestling'],
    answer: 'Squash',
  },
  {
    // Q14
    question: 'What is the distance for the Olympic Marathon?',
    options: ['45km', '44km', '43km', '42km'],
    answer: '42km',
  },
  {
    // Q15
    question:
      'Who is the only athlete to win gold medals at both the Summer and Winter Olympics?',
    options: ['Usain Bolt', 'Eddie Eagan', 'Carl Lewis', 'Marit Bjørgen'],
    answer: 'Eddie Eagan',
  },
  {
    // Q16
    question: 'When were the last pure gold medals awarded at the Olympics?',
    options: ['1909', '1910', '1911', '1912'],
    answer: '1912',
  },
  {
    // Q17
    question: 'When was drug testing introduced in the Olympics?',
    options: ['1960', '1968', '1986', '1988'],
    answer: '1968',
  },
  {
    // Q18
    question: 'How many times has London hosted the Olympic Games?',
    options: ['1', '2', '3', '4'],
    answer: '3',
  },
  {
    // Q19
    question: 'What organiziation manages the Olympic Games',
    options: [
      'Olympic Club International',
      'UN Olympic Committee',
      'World Olympic Organization',
      'International Olympic Committee',
    ],
    answer: 'International Olympic Committee',
  },
  {
    // Q20
    question: 'How often are the Olympic Games held?',
    options: ['1 years', '2 years', '3 years', '4 years'],
    answer: '4 years',
  },
  // Added more
  ////We need to add more questions here.
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
  const Question = () => {
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
        <Question />
      )}
    </div>
  )
}

export default Quiz
