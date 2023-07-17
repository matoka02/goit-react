// import { useContext } from "react";
// import { Context } from "./App";
import { useCustomContext } from "./Context";

// const Main = ({setToggleAlert}) => {
const Main = () => {
	// const context = useContext(Context);
  const context = useCustomContext();

	return (
		<div>
			<h1>Hello Context</h1>
			<button
				className='btn btn-success' 
        // onClick={setToggleAlert()}
        onClick={() => context.toggle(!context.toggleValue)}
			>
				Open Alert
			</button>
		</div>
	)
}

export default Main;