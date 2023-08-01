import React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
	useDeleteProductsMutation,
	useGetProductsQuery,
} from '../store/products/productsAPI';
import { getProductsThunk } from 'components-07-014/store/products/thunk';
import { productsSelector } from 'components-07-014/store/products/selectors';

// // выносится в selectors.js
// const productSelector = (state) => {
// 	console.log('object');
// 	return state.products
// };

const ProductsPage = () => {
	// // const { products, error, isLoading } = useSelector(productsSelector);
	// const products = useSelector(productsSelector);
	// const { error, isLoading } = useSelector(state=>state.products);

	// const [val, setVal] = useState(0);

	// const dispatch = useDispatch();

	// // const sortedProducts = products && [...products].sort((a, b) => a.price - b.price);

	// useEffect(() => {
	// 	dispatch(getProductsThunk())
	// }, [dispatch]);


	// рефакторинг на RTK
	// const data = useGetProductsQuery();
	// console.log(data);
	const {isLoading, data: products, isError} = useGetProductsQuery();
	console.log();
	
	// return (<></>)

	return (
		<>
			{/* <button onClick={()=>setVal((perv)=>perv+1)}>{val}</button> */}
			{/* {delInfo.isLoading && <h1>Deleting...</h1>} */}

			{isLoading && (
				<div className='spinner-border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			)}

			{/* {sortedProducts && ( */}
			{products && (
				<div className='container text-center'>
					<div className='row'>
						{/* {sortedProducts.map(						 */}
						{products.map(
							({ id, title, description, images, price }) => (
								<div className='col' key={id}>
									<div
										className='card'
										style={{ width: '18rem' }}
									>
										<img
											src={images[0]}
											className='card-img-top'
											alt={title}
										/>
										<div className='card-body'>
											<h5 className='card-title'>
												{title}
											</h5>
											<p className='card-text'>
												{price} $
											</p>
											<p className='card-text'>
												{description}
											</p>
											<button
												className='btn btn-danger'
												// onClick={() =>
												// 	deleteProduct(id)
												// }
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			)}

			{isError && <h2>error</h2>}
		</>
	)
}

export default ProductsPage;



// // вариант на state-machins

// const STATUS = {
// 	IDLE: 'idle',
// 	PENDING: 'pending',
// 	REJECTED: 'rejected',
// 	FULFILLED: 'fulfilled',
// };

// const ProductsPage = () => {
// 	const { products, error, status } = useSelector((state) => state.products)

// 	const dispatch = useDispatch()

// 	useEffect(() => {
// 		dispatch(getProductsThunk())
// 	}, [dispatch])

// 	if (status === STATUS.PENDING)
// 		return (
// 			<div className='spinner-border' role='status'>
// 				<span className='visually-hidden'>Loading...</span>
// 			</div>
// 		)
// 	else if (status === STATUS.FULFILLED)
// 		return (
// 			<div className='container text-center'>
// 				<div className='row'>
// 					{products.map(
// 						({ id, title, description, images, price }) => (
// 							<div className='col' key={id}>
// 								<div
// 									className='card'
// 									style={{ width: '18rem' }}
// 								>
// 									<img
// 										src={images[0]}
// 										className='card-img-top'
// 										alt={title}
// 									/>
// 									<div className='card-body'>
// 										<h5 className='card-title'>{title}</h5>
// 										<p className='card-text'>{price} $</p>
// 										<p className='card-text'>
// 											{description}
// 										</p>
// 										<button
// 											className='btn btn-danger'
// 											onClick={() =>
// 												dispatch(
// 													deleteProductsThunk(id)
// 												)
// 											}
// 										>
// 											Delete
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						)
// 					)}
// 				</div>
// 			</div>
// 		)
// 	else if (status === STATUS.REJECTED) return <h2>{error}</h2>
// }

// export default ProductsPage;