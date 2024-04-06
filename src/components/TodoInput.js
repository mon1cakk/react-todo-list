import { useState } from 'react'

function TodoInput(props) {
  const { addTodo } = props
  function addTodoHandler() {
    addTodo(text)
    setText('')
  }

  const [text, setText] = useState('')
  function handleChangeText(event) {
    setText(event.target.value)
  }
  return (
    <div>
      <input value={text} onChange={handleChangeText} /> {/* 受控组件 */}
      <button onClick={addTodoHandler}>todo input</button>
    </div>
  )
}
export default TodoInput
