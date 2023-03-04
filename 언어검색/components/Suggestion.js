function Suggestion({ $target, initialState, clickEvent }) {
  this.$target = $target;
  this.state = initialState;
  const $container = document.createElement("div");
  $container.setAttribute("class", "Suggestion");

  this.renderMatchedItem = (keyword, item) => {
    if (!item.includes(keyword)) {
      return item;
    }

    // 정규표현식을 이용한 방법
    const matchedText = item.match(new RegExp(keyword, "gi"))[0];
    return item.replace(
      new RegExp(matchedText, "gi"),
      `<span class="Suggestion__item--matched">${matchedText}</span>`
    );
  };

  this.render = function () {
    if (this.state.languages.length === 0) {
      return;
    }

    this.$target.appendChild($container);

    $container.innerHTML = `
      <ul>
        ${this.state.languages
          .map(
            (lang, index) => `
          <li class="${
            this.state.selectedIndex === index ? "Suggestion__item--selected" : ""
          }">${this.renderMatchedItem(this.state.value, lang)}</li>
        `
          )
          .join("")}
      </ul>
    `;
  };

  $container.addEventListener("click", clickEvent);

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}

export default Suggestion;
