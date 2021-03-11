import React from 'react'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({paragraphs}) => {
  return paragraphs.map((paragraph, i) => (
    <p key={i}>{paragraph.part} {paragraph.exercise}</p>
  ))
}

const Total = ({exercises}) => {
  return <p>Number of exercises {exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        paragraphs={[
          {part: part1, exercise: exercises1},
          {part: part2, exercise: exercises2},
          {part: part3, exercise: exercises3},
        ]}
      />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
