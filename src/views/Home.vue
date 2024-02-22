<template>
  <div class="home-panel">
    <h5 style="margin-bottom: 2rem">Att göra idag:</h5>

    <div class="task-list">
      <div v-for="task in $store.state.active_tasks">
        <Task 
          :title=task.title
          :description=task.description
          :completed=task.completed />
      </div>
    </div>

    <div class="quote-panel">
      <p>Om jag var tvungen att välja mellan två onda ting väljer jag alltid det jag inte tog förra gången.</p>
      <p class="text-bold" style="margin-top: 0.5rem;">- Mae West</p>
    </div>

    <div class="continue-panel">
      <button class="button-text text--danger" @click="$store.dispatch('shouldUpdateActiveTasks')">Inte hemma</button>
      <button class="button--danger">Avsluta dag</button>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';
import { useStore } from 'vuex';
import {
  getTasks,
} from '../store/backend'

export default {
  name: 'Home',
  components: {
    Task,
  },
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.home-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  padding: 2rem 4rem;
}

.task-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.quote-panel {
  width: 100%;
  text-align: center;

  margin-top: 2rem;

  p {
    color: $color-diasbled;
  }
}

.continue-panel {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20%;

  margin-top: 2rem;
}

</style>
