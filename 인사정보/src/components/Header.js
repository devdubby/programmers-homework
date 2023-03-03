function Header({ $target, onClickNav }) {
  this.$target = $target;
  const $header = document.createElement("header");

  this.render = function () {
    this.$target.appendChild($header);

    $header.innerHTML = `
      <div class="header header_left">
        <span class="menu_name" id="menu_home" data-path="/">HOME</span>
      </div>
      <div class="header header_right">
        <span class="menu_name" id="menu_signup" data-path="/signup">SIGNUP</span>
      </div>
    `;
  };

  $header.addEventListener("click", function (e) {
    const navButton = e.target.closest("span");
    const nextPath = navButton.getAttribute("data-path");
    onClickNav(nextPath);
  });

  this.render();
}

export default Header;
