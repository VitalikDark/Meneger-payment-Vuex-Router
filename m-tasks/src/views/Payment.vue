<template>
  <div>
    <hr>
    <span :class="{red: sum>max}"> {{sum}} </span><span>/ {{max}} </span>
    <h3 v-if="maxLook">нету денег ...</h3>
    <h3 v-else>Денег достаточно</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        max: 3000,
        april: [], 
        may: []
      }
    },

    computed: {
      sum() {
        return this.$store.getters.tasks.reduce(
          (acc, curr) => acc + (isNaN(Number(curr.title)) ? 0 : Number(curr.title)), 0)
      },
      maxLook() {
        return this.$store.getters.tasks.reduce(
          (acc, curr) => acc + (isNaN(Number(curr.title)) ? 0 : Number(curr.title)), 0)>this.max
      }
    }

}
</script>

<style scoped>
#mounth p{
  border: 1px solid orange;
}
.red {
  color: red;
}
.blue {
  color: #6495ED;
}
</style>