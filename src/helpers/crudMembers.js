export const getAllDinos = async (cb) => {
	const res = await fetch("https://concord-dinopedia.herokuapp.com/api");
	const data = await res.json();
	cb(data);
};

export const createDino = async (dinoObj) => {
	const res = await fetch("https://concord-dinopedia.herokuapp.com/api", {
		method: "POST",
		body: JSON.stringify(dinoObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const deleteDino = async (dinoID) => {
	const res = await fetch(`https://concord-dinopedia.herokuapp.com/api/${dinoID}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const putDino = async (dinoID, dinoObj) => {
	const res = await fetch(`https://concord-dinopedia.herokuapp.com/api/${dinoID}`, {
		method: "PUT",
		body: JSON.stringify(dinoObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};
