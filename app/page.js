"use client"
import { useState, useRef } from 'react'

export default function Home() {
  const [tasks, setTasks ] = useState([])
  const inputRef = useRef(null)

  function addTask() {
    setTasks(tasks.concat(inputRef.current.value))
  }

  function InputField() {
    return <><div>Task: <input id="task" type="text" ref={inputRef}/></div>
    <button className="bg-blue-500 rounded text-white px-4" onClick={addTask}>Add</button>
    </>
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    Todo List
    <InputField />
    { tasks.map (e =><p><input type="checkbox" id="check" name="check" /> {e} </p>) }
    </main>
  )
}
