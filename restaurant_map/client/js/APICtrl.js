const APICtrl = (() => {
  let query = [{ id: 1, name: "Pho", active: true }];
  let location;
  let radius;

  const searchResults = async () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open(
      "GET",
      `http://localhost:3001/getPlaces?location=${location}&radius=${radius}`,
      true
    );

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.response));
      }
    };
    xhttp.send();
  };

  return {
    setLocation: (lat, lng, r) => {
      location = [lat, lng];
      radius = r;
      console.log(location, radius);
    },
    setQuery: q => {
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
