<template>
  <div class="home-panel">
    <h5 style="margin-bottom: 2rem">Att göra idag:</h5>

    <div class="task-list">
      <Task 
        title="Bädda sängen"
        description=""
        :completed=true />
      <Task 
        title="Borsta tänderna"
        description=""
        :completed=false />
      <Task 
        title="Diska"
        description=""
        :completed=false />
      <Task 
        title="Plocka undan saker (10 min)"
        description="Om det inte finns något att plocka undan, damma / torka av ytor."
        :completed=false />
      <Task 
        title="Gymma"
        description=""
        :completed=false />
      <Task 
        title="Exjobb"
        description=""
        :completed=false />
    </div>

    <div class="quote-panel">
      <p>Om jag var tvungen att välja mellan två onda ting väljer jag alltid det jag inte tog förra gången.</p>
      <p class="text-bold" style="margin-top: 0.5rem;">- Mae West</p>
    </div>

    <div class="continue-panel">
      <button class="button-text">Inte hemma</button>
      <button>Avsluta dag</button>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';

export default {
  name: 'Home',
  components: {
    Task,
  },
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
