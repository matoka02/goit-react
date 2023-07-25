// import { useState } from "react";

const FormFilterToDo = ({setSearchParams}) => {
  // const [filter, setFilter] = useState('');

  const handleChange = ({ target }) => {
    // setFilter(target.value);
    setSearchParams({filter: target.value});
  };

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(params);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">
          Filter:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInput"
          onChange={handleChange}
          // value={this.state.todo}
        />
      </div>
    </form>
  );
};

// class FormFilterToDo extends Component {
//   state = {
//     todo: '',
//   };

//   handleChange = ({ target }) => {
//     this.setState({
//       // [имя ключа]: значение, откуда забирать
//       [target.name]: target.value,
//     });
//   };

//   render() {
//     return (
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInput" className="form-label">
//             Filter:
//           </label>
//           <input
//             name="todo"
//             type="text"
//             className="form-control"
//             id="exampleInput"
//             onChange={this.handleChange}
//             // value={this.state.todo}
//           />
//         </div>

//       </form>
//     );
//   }
// }

export default FormFilterToDo;
