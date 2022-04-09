<template>
  <div>
    <SelectCard
      v-for="option in options"
      :title="option.name"
      :key="option.value"
      @click="onCardClick(option)"
      :selected="isSelected(option)"
    />
  </div>
</template>

<script>
import SelectCard from "./SelectCard.vue";
import Vue from "vue";

export default Vue.extend({
  components: { SelectCard },
  props: ["options"],
  data: () => ({
    selectedCard: null,
  }),
  methods: {
    isSelected(option) {
      return this.selectedCard === option.value;
    },
    onCardClick(option) {
      this.selectedCard = option.value;
      this.$emit("cardSelected", option.value);
    },
  },
});
</script>

<style></style>
