export const getAllDinos = async (cb) => {
	const res = await fetch("http://localhost:5000/api");
	const data = await res.json();
	cb(data);
};

export const CreateDino = async (dinoObj) => {
	const res = await fetch("http://localhost:5000/api", {
		method: "POST",
		body: JSON.stringify(dinoObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const deleteDino = async (dinoID) => {
	const res = await fetch(`http://localhost:5000/api/${dinoID}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const editDino = async (dinoID, dinoObj) => {
	const res = await fetch(`http://localhost:5000/api/${dinoID}`, {
		method: "PUT",
		body: JSON.stringify(dinoObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};
