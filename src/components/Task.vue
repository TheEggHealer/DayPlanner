<template>
  <div class="task" :class="{'task-completed': completed}">
    <div>
      <p class="text-bold">{{ title }}</p>
      <p v-if="description" style="margin-top: 0.5rem">{{ description }}</p>
    </div>
    <button v-if="!completed">Klar</button>
  </div>
</template>


<script>
import { toRefs } from 'vue';

export default {
  props: {
    title: String,
    description: String,
    completed: Boolean,
  },
  setup(props) {
    const { title, description, completed } = toRefs(props);
    
    return {
      title,
      description,
      completed,
    }
  }
}

</script>


<style lang="scss" scoped>
@import "@/styles/main.scss";

.task {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  padding: 1.5rem 2rem;
  border-radius: 4px;
  
  background-color: $color-card;
  box-shadow: $card-shadow;

  &.task-completed {
    background-color: $color-card-highlight;
    box-shadow: none;
  }
}

</style>