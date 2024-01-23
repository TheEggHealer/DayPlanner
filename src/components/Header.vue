<template>
  <div class="header">
    <h4 class="today text-bold">Torsdag</h4>
    <div class="date-panel">
      <h4>22 Januari</h4>
    </div>
    <div class="streak-panel">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  padding: 1rem 4rem;

  background-color: $color-card-highlight;
}

.today, .streak-panel {
  flex: 1;
}

</style>