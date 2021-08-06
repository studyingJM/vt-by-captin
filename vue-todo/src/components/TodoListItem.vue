<template>
  <li>
    <span @click="toggleComplete" class="item" :class="todoItemClass">{{
      todoItem.title
    }}</span>
    <!-- <button @click="$emit('remove')">삭제</button> -->
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from "@/App.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  methods: {
    toggleComplete() {
      this.todoItem.index = this.index;
      this.$emit("toggle", this.todoItem);
    },
    removeItem() {
      this.$emit("remove", this.index);
    },
  },
  computed: {
    todoItemClass(): string | null {
      return this.todoItem.complete ? "complete" : null;
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
