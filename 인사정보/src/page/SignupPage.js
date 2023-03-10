function SignupPage({ $target }) {
  this.$target = $target;

  this.render = function () {
    this.$target.innerHTML = `
      <div id="form_container">
        <span class="form_elem">
          <input id="name" placeholder="이름">
        </span>
        <span class="form_elem">
          <input id="email" placeholder="이메일">
        </span>
        <span class="form_elem">
          <select id="role" name="role">
            <option value="">직군을 선택해주세요</option>
            <option value="backend">백엔드</option>
            <option value="frontend">프론트엔드</option>
            <option value="fullstack">풀스택</option>
          </select>
        </span>
        <span class="form_elem">
          <button type="submit">등록</button>
        </span>
      </div>
    `;
  };
}

export default SignupPage;
