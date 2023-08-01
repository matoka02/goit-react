// export const productsSelector = (state) => {
// 	console.log('object');
// 	return state.products
// };

// // фильтрация
// export const productsSelector = (state) => {
// 	return {
// 		...state.products,
// 	products: [...state.products.products].sort((a, b) => a.price - b.price)
// 	}
// };

// рефакторинг
export const productsSelector = (state) =>
	[...state.products.products].sort((a, b) => a.price - b.price);	