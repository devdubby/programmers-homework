import storage from "../utils/storage.js";

function HomePage({ $target }) {
  this.$target = $target;
  const cardData = storage.getItem("personalInfo", []);
  const cardStatus = storage.getItem("cardStatus");

  this.render = function () {
    this.$target.innerHTML = `
      <div id="cards_container">
				${cardData
          .map(
            (info, index) => `
					  <div idx=${index} class="${cardStatus[index].status}" data-index=${index}>
              <div class="card_plane card_plane--front">${info.nickname}</div>
              <div class="card_plane card_plane--back">${info.mbti}</div>
					</div>
				`
          )
          .join("")}
      </div>
    `;

    this.infiniteScroll();
  };

  this.$target.addEventListener("click", function (e) {
    const $card = e.target.closest(".card");
    $card.classList.toggle("is-flipped");

    const cardStatus = storage.getItem("cardStatus");
    const idx = $card.getAttribute("data-index");
    const newStatus = [...cardStatus];
    newStatus[idx].status = $card.className;
    storage.setItem("cardStatus", newStatus);
  });

  this.infiniteScroll = function () {
    const target = document.getElementById("cards_container");

    function callback(entries, observer) {
      if (entries[0].isIntersecting) {
        // 스크롤이 끝에 도달하면 새로운 데이터를 가져오는 함수를 호출합니다.
        console.log("끝에 도달!!!");
      }
    }

    const observer = new IntersectionObserver(callback, {
      threshold: 0.7,
    });

    observer.observe(target);
  };
}

export default HomePage;
