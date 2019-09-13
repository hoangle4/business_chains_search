const APICtrl = (() => {
  let query;
  let location;
  let radius;

  const searchResults = async () => {
    const result = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location}&radius=${radius}&key=${GoogleMapKey}`
    );
    console.log(result);
  };

  return {
    setData: (q, l, r) => {
      query = q;
      location = l;
      radius = r;
    },
    getSearchResults: () => {
      searchResults();
    }
  };
})();
