import React, { useContext } from 'react'
import { Context } from './App';
// import { Context } from './App'

const Alert = () => {
	const context = useContext(Context);
  console.log(context);

	// return <div className='alert alert-danger'>Messaaaaaggee</div>
	return (
		context.toggleValue && (
			<div className='alert alert-danger'>Messaaaaaggee</div>
		)
	)
}

export default Alert;