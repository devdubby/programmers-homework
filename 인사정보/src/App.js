import Header from "./components/Header.js";
import MainPage from "./page/MainPage.js";

function App($root) {
  this.$target = $root;

  const header = new Header({
    $target: this.$target,
    onClickNav: (path) => {
      window.history.pushState("", "", path);
      window.dispatchEvent(
        new CustomEvent("urlchange", {
          detail: {
            url: path,
          },
        })
      );
    },
  });
  const main = new MainPage({ $target: this.$target });

  window.dispatchEvent(
    new CustomEvent("urlchange", {
      detail: {
        url: "/",
      },
    })
  );
}

export default App;
