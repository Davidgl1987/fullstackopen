import React from 'react'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part text={part.name+' '+part.exercises} />
      ))}
    </div>
  )
}

const Part = ({text}) => {
  return <p>{text}</p>
}

const Total = ({exercises}) => {
  return <p>Number of exercises {exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const exercises = parts.reduce((acc, part) => acc + part.exercises, 0);
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
