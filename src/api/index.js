const getBreeds = async () => {
	try {
		let res = await fetch("https://dog.ceo/api/breeds/list/all");
		let data = await res.json();
		if (data && data.status === "success") {
			return data.message
		}

		return []
	} catch (error) {
		console.log(error);
		return false
	}
}

const byBreeds = async (breed = '') => {
	if (!breed) return []
	try {
		let res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
		let data = await res.json();
		if (data && data.status === "success") {
			return data.message
		}

		return []
	} catch (error) {
		console.log(error);
		return false
	}
}

export {
	getBreeds,
	byBreeds
}