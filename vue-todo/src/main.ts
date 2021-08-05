import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

/**
 * TODO APP (CRUD)
 * - 할 일 조회
 * - 할 일 추가
 * - 할 일 삭제
 * - 할 일 수정
 */
