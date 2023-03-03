function ContentTitle({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;
  const $title = document.createElement("div");
  $title.setAttribute("class", "content_title");
  this.$target.appendChild($title);

  this.render = function () {
    $title.innerHTML = `
      <div class="content_title">
        <h1>${this.state.contentTitle}</h1>
      </div>
    `;
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}

export default ContentTitle;
