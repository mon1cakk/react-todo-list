function TodoList(props) {
    const { list = [] } = props
    return (
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
export default TodoList  