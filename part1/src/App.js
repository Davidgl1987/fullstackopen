import React from 'react'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({parts}) => {
  return parts.map((part, i) => (
    <Part key={i} name={part.name} exercise={part.exercise} />
  ))
}

const Part = ({name, exercise}) => {
  return <p>{name} {exercise}</p>
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
        parts={[
          {name: part1, exercise: exercises1},
          {name: part2, exercise: exercises2},
          {name: part3, exercise: exercises3},
        ]}
      />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
