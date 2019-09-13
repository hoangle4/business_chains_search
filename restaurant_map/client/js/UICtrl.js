const UICtrl = (() => {
  const placeGroup = document.getElementById("place_group");
  const placeName = [];
  return {
    addPlace: value => {
      placeName.push(value);
      placeGroup.insertAdjacentHTML(
        "beforeend",
        `<div class="custom-control custom-switch">
          <input
            name="${value}"
            type="checkbox"
            class="custom-control-input"
            id="customSwitch${placeName.length}"
            checked=""
          />
          <label class="custom-control-label" for="customSwitch${placeName.length}">
          ${value}
          </label>
    </div>
    `
      );
    }
  };
})();
