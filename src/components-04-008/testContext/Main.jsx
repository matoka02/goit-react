// import { useCustomContext } from './Context/Context';
import { useContext } from "react";
import { Context } from "./App";

// const Main = ({setToggleAlert}) => {
const Main = () => {
	const context = useContext(Context);

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