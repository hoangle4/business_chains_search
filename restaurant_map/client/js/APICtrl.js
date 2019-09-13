const APICtrl = (() => {
	let query = [ { id: 1, name: 'Pho', active: true } ];
	let location;
	let radius;

	const searchResults = async () => {
		const result = await fetch(
			`https://maps.googleapis.com/maps/api/place/textsearch/json?query=Starbucks&location=${location}&radius=${radius}&key=${GoogleMapKey}`
		);
		console.log(result);
	};

	return {
		setLocation: (lat, lng, r) => {
			location = [ lat, lng ];
			radius = r;
			console.log(location, radius);
		},
		setQuery: (q) => {
			query.push({ id: query.length + 1, name: q, active: true });
		},
		getSearchResults: () => {
			searchResults();
		},
		getQuery: () => {
			return query;
		}
	};
})();
