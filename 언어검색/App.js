import SelectLanguage from "./components/SelectLanguage.js";
import SearchInput from "./components/SearchInput.js";
import Suggestion from "./components/Suggestion.js";
import { api } from "./api.js";

function App($target) {
  this.$target = $target;
  this.state = {
    value: "",
    languages: [],
    selectedIndex: 0,
    selectedLangs: [],
  };

  const handleSelectItems = (e) => {
    if (e.key === "Enter") {
      const { selectedIndex, languages } = this.state;
      const selectLang = languages[selectedIndex];
      alert(selectLang);

      const isExist = this.state.selectedLangs.includes(selectLang);
      if (isExist) {
        return;
      }

      let prevSelectedLangs = [];
      if (this.state.selectedLangs.length === 5) {
        prevSelectedLangs = [...this.state.selectedLangs.slice(1)];
      } else {
        prevSelectedLangs = [...this.state.selectedLangs];
      }

      this.setState({
        ...this.state,
        selectedLangs: [...prevSelectedLangs, selectLang],
      });
    }
  };

  const clickEvent = (e) => {
    const $li = e.target.closest("li");
    const selectLang = $li.innerText;
    alert($li.innerText);

    const isExist = this.state.selectedLangs.includes(selectLang);
    if (isExist) {
      return;
    }

    let prevSelectedLangs = [];
    if (this.state.selectedLangs.length === 5) {
      prevSelectedLangs = [...this.state.selectedLangs.slice(1)];
    } else {
      prevSelectedLangs = [...this.state.selectedLangs];
    }

    this.setState({
      ...this.state,
      selectedLangs: [...prevSelectedLangs, selectLang],
    });
  };

  const selectLanguage = new SelectLanguage({ $target: this.$target, initialState: this.state });

  const searchInput = new SearchInput({
    $target: this.$target,
    initialState: this.state,
    onSearch: async (value) => {
      if (!value || value === "") {
        return;
      }

      const result = await api.searchLanguages(value);

      this.setState({
        ...this.state,
        value,
        languages: result,
      });
    },
    onSelect: (e) => {
      handleSelectItems(e);

      if (e.key === "ArrowUp") {
        let nextIndex = this.state.selectedIndex - 1;

        if (nextIndex < 0) {
          nextIndex = this.state.languages.length - 1;
        }

        this.setState({
          ...this.state,
          selectedIndex: nextIndex,
        });
      } else if (e.key === "ArrowDown") {
        let nextIndex = this.state.selectedIndex + 1;

        if (nextIndex === this.state.languages.length) {
          nextIndex = 0;
        }

        this.setState({
          ...this.state,
          selectedIndex: nextIndex,
        });
      }
    },
  });
  const suggestion = new Suggestion({
    $target: this.$target,
    initialState: this.state,
    clickEvent,
  });

  this.setState = function (nextState) {
    this.state = nextState;
    selectLanguage.setState(nextState);
    searchInput.setState(nextState);
    suggestion.setState(nextState);
  };
}

export default App;
