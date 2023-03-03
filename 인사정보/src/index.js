import App from "./App.js";
import storage from "./utils/storage.js";

(async function () {
  const data = storage.getItem("personalInfo");

  if (!data) {
    const data = await (await fetch("http://localhost:3000/data")).json();
    storage.setItem("personalInfo", data);
    storage.setItem(
      "cardStatus",
      data.map((info, index) => ({ idx: index, status: "card" }))
    );
  }
})();

new App(document.querySelector(".app"));
