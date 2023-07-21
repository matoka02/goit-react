import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import ToDo from "./ToDo";

const ToDoDetails = () => {
	const params = useParams();
	// console.log('params :>> ', params);

	const [todoList, setTodoList] = useState(null);

  const location = useLocation();
  console.log('location :>> ', location);     // location :>>  {pathname: '/todo/FfrZEqRMLBZpnz3qYrrN3', search: '', hash: '', state: {…}, key: 'pr6z2dde'}

	useEffect(() => {
		const localTodo = localStorage.getItem('todo');
		if (localTodo) setTodoList(JSON.parse(localTodo));
	}, []);

	return (
		<>
      {/* <Link to='/todo' className="btn btn-secondary m-2">Back</Link> */}
      <Link to={location.state} className="btn btn-secondary m-2">Back</Link>
			{todoList?.map(
				(todo) =>
					todo.id === params.id && <ToDo key={todo.id} todo={todo} />
			)}
		</>
	)
};

export default ToDoDetails;