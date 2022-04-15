export async function get() {
	let res = await fetch('https://api.covid19api.com/summary');
	const data = await res.json();
	return {
		status: 201,
		body: { data }
	};
}
