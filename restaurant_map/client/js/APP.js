const APP = ((MapCtrl, UICtrl, APICtrl) => {
  const Map_Btn = document.getElementById("map_now_btn");
  const Trumbotron_Container = document.getElementById("trumbotron_container");
  const addPlaceBtn = document.getElementById("add_place_btn");
  const placeNameInput = document.getElementById("placename_input");
  //----------------------------------------------------------------
  const initMap = e => {
    e.preventDefault();
    MapCtrl.initMap();
    Trumbotron_Container.remove();
  };

  const eventHandler = () => {
    addPlaceBtn.addEventListener("click", handleAddPlace);
    placeNameInput.addEventListener(
      "keyup",
      e => e.keyCode === 13 && handleAddPlace()
    );
  };

  const handleAddPlace = e => {
    e && e.target.tagName === "BUTTON" && e.preventDefault();
    placeNameInput.value !== "" && UICtrl.addPlace(placeNameInput.value);
    placeNameInput.value = "";
  };

  Map_Btn.addEventListener("click", initMap);
  document.addEventListener("DOMContentLoaded", eventHandler);
})(MapCtrl, UICtrl, APICtrl);
