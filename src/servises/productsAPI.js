const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const getProducts = async () => {
	const data = await fetch(`${BASE_URL}/products`)
	return await data.json()
};

export const createProducts = async (data) => {
	const resp = await fetch(`${BASE_URL}/products`, {
		body: JSON.stringify(data),
	})
	return await resp.json()
};

export const deleteProducts = async (id) => {
	const resp = await fetch(`${BASE_URL}/products/${id}`)
	return await resp.json()
};