

class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_akiKey = 'apikey=d12b61c642723d65dcaea7bbf38dbd30'

    getResourse = async (url) => {
		let res = await fetch(url);

		if(!res.ok) {
			throw new Error(`Cloud not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getAllCaracters = () => {
		return this.getResourse(`${this._apiBase}characters?${this._akiKey}`);
	}

	getCaracter = (id) => {
		return this.getResourse(`${this._apiBase}characters/${id}?${this._akiKey}`);
	}
}

export default MarvelService;