import App from "./App.js";
import storage from "./utils/storage.js";

(async function () {
  const data = storage.getItem("personalInfo");

  if (!data) {
    const data = await (await fetch("http://localhost:3000/data")).json();
    const newData = [...data, ...data];
    storage.setItem("personalInfo", newData);
    storage.setItem(
      "cardStatus",
      newData.map((info, index) => ({ idx: index, status: "card" }))
    );
  }
})();

new App(document.querySelector(".app"));
