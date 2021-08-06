import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

/**
 * TODO APP (CRUD)
 * - [o] 할 일 조회
 * - [o] 할 일 추가
 * - [o] 할 일 삭제
 * - [o] 할 일 수정
 */
