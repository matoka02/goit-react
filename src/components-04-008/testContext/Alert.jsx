import React from 'react';
// import { useContext } from 'react';
// import { Context } from './App';
import { useCustomContext } from './Context';
// import { Context } from './App'

const Alert = () => {
	// const context = useContext(Context);
  // console.log(context);
  const context = useCustomContext();

	// return <div className='alert alert-danger'>Messaaaaaggee</div>
	return (
		context.toggleValue && (
			<div className='alert alert-danger'>Messaaaaaggee</div>
		)
	)
}

export default Alert;