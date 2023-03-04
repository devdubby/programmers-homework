import { debounce } from "../utils.js";

function SearchInput({ $target, initialState, onSearch, onSelect }) {
  this.$target = $target;
  this.state = initialState;

  const $form = document.createElement("form");
  $form.setAttribute("class", "SearchInput");
  $form.setAttribute("onsubmit", "return false");

  const $input = document.createElement("input");
  $input.setAttribute("class", "SearchInput__input");
  $input.setAttribute("type", "text");
  $input.setAttribute("autofocus", true);
  $input.placeholder = "프로그램 언어를 입력하세요.";

  this.$target.appendChild($form);
  $form.appendChild($input);

  this.render = function () {
    $input.value = this.state.value;
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();

  $input.addEventListener("keyup", function (e) {
    debounce(() => onSearch(e.target.value), 500);
  });

  $input.addEventListener("keydown", onSelect);
}

export default SearchInput;
