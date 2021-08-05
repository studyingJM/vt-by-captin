<template>
  <div>
    <h1>Vue Todo with TypeScript</h1>
    <TodoInput
      :item="todoText"
      @input="updateTodoText"
      @add="addTodoItem"
    ></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      localStorage.setItem(value, value); // (key , value)를 같은 형태로 저장
      this.initTodoText();
    },
    // 텍스트 초기화를 위한 함수
    initTodoText() {
      this.todoText = "";
    },
  },
});
</script>

<style scoped></style>
