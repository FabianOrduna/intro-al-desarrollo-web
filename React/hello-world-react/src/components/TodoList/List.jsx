const elementos = [
  {
    id: 1,
    title: "Learn React",
    completed: true,
  },
  {
    id: 2,
    title: "Build a Todo App",
    completed: false,
  },
  {
    id: 3,
    title: "Master JavaScript",
    completed: false,
  },
];

const ListItem = ({ title, completed }) => {
  const checkbox = completed ? "☑️" : "⬜";
  return (
    <li>
      {checkbox}
      {title}
    </li>
  );
};

const List = () => {
  return (
    <div>
      <h1 className="text-info">Todo List</h1>
      <ul>
        {elementos.map((elemento) => (
          <ListItem
            key={elemento.id}
            title={elemento.title}
            completed={elemento.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
