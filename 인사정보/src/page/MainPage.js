import ContentTitle from "../components/ContentTitle.js";
import HomePage from "./HomePage.js";
import SignupPage from "./SignupPage.js";

function MainPage({ $target }) {
  this.$target = $target;
  const $main = document.createElement("main");
  $main.setAttribute("id", "page_content");

  this.state = {
    contentTitle: "Great PeoPle",
  };

  const contentTitle = new ContentTitle({ $target: this.$target, initialState: this.state });

  this.render = function () {
    this.$target.appendChild($main);
  };

  const handlePathUrl = (e) => {
    const path = e.detail.url;

    switch (path) {
      case "/":
        this.setState({ contentTitle: "Great PeoPle" });
        new HomePage({ $target: $main }).render();
        break;
      case "/signup":
        this.setState({ contentTitle: "Hello, GreatPeoPle!" });
        new SignupPage({ $target: $main }).render();
        break;
    }
  };

  window.addEventListener("urlchange", handlePathUrl);

  this.setState = function (nextState) {
    this.state = nextState;
    contentTitle.setState(nextState);
  };

  this.render();
}

export default MainPage;
