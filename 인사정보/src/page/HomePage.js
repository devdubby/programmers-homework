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
    let target = document.getElementById("cards_container").lastChild;

    function callback(entry, observer) {
      if (entry[0].isIntersecting) {
        // 스크롤이 끝에 도달하면 새로운 데이터를 가져오는 함수를 호출합니다.
        console.log("testest");
      }
    }

    let options = {
      threshold: 0.7, // 컨테이너 전체가 뷰포트 안에 있을 때 콜백이 실행됩니다.
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(target);
  };
}

export default HomePage;
