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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const exercises = course.parts.reduce((acc, part) => acc + part.exercises, 0);
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
