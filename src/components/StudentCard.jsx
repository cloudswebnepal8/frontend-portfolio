import React from 'react'

function StudentCard(props) {
  return (
    <div className="border-2 border-gray-200 rounded-sm p-4 m-4">
      <h1>{props.name}</h1>
      <h2>{props.faculty}</h2>
      <p>{props.roll}</p>

    </div>
  )
}

export default StudentCard