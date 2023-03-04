const BASE_URL = "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

export const api = {
  searchLanguages: async (value) => {
    try {
      const res = await fetch(`${BASE_URL}/languages?keyword=${value}`);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (e) {
      console.error("fetch 에러!!", e);
    }
  },
};
