<template>
  <div
    class="card"
    :class="{ 'card--selected': selected }"
    @click="$emit('click')"
  >
    <div class="card-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "selected"],
};
</script>

<style>
.card {
  border: 1px solid black;
  border-radius: 20px;
}
.card--selected {
  background-color: red;
}
</style>
