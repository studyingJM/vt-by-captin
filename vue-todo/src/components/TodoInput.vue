<template>
  <div>
    <label for="todo-input">오늘의 할 일 : </label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  // props: ["item"],
  props: {
    item: {
      type: String,
      required: true, // required: true는 반드시 필요할 때 사용(부모컴포넌트에서 자식컴포넌트를 사용할 때 반드시 값을 넣어줘야 한다)
    },
  },
  methods: {
    handleInput(event: InputEvent) {
      const eventTarget = event.target as HTMLInputElement; // event.target 이 HTMLInputElement라고 정의
      this.$emit("input", eventTarget.value); // template에 있는 @input 이벤트와는 별개이다
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>

<style scoped></style>
