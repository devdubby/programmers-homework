function SelectLanguage({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;
  const $container = document.createElement("div");
  $container.setAttribute("class", "SelectedLanguage");
  this.$target.appendChild($container);

  this.render = function () {
    if (this.state.selectedLangs.length === 0) {
      return;
    }

    $container.innerHTML = `
      <ul>
        ${this.state.selectedLangs
          .map(
            (lang) => `
          <li>${lang}</li>
        `
          )
          .join("")}
      </ul>
    `;
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}

export default SelectLanguage;
