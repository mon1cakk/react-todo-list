// src/App.js

import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import EffectTest from './components/EffectTest'

function App() {
  useEffect(() => {
    document.title = 'Todo List'
  })
  const [list, setList] = useState([
    { id: 1, text: 'todo 1' },
    { id: 2, text: 'todo 2' },
  ])
  function addTodo(t) {
    const newTodo = { id: list.length + 1, text: t }
    setList([...list, newTodo]) //【注意】这里不能直接修改 list 而是要调用 setList
  }
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      {list.length > 0 && <TodoList foo="hello foo" list={list} />}
      <EffectTest />
    </div>
  )
}
export default App
