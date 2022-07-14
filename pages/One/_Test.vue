<template>
  <div >
        <div class="container_img">
            <img :src="single.img" alt="">
        </div>

      <h3 class="colortext" >Name: {{single.name}}</h3>
      <h4 class="colortext" >Age: {{single.age}}</h4>
  </div>
</template>
<script>
  import { mapState } from "vuex";
export default {
  data() {
    return {
      single:{}
    }
  },
  computed:{
      ...mapState([
          'one'
      ])
  },
  mounted(){
    // this["one"]
    this.single = {
      name:this.one[this.$nuxt.$route.params.Test].name,
      age:this.one[this.$nuxt.$route.params.Test].age,
      img:this.one[this.$nuxt.$route.params.Test].img
    },
    console.log(this.$nuxt.$route.params.Test);
  },

}
</script>

<style lang="css" scoped>
  .colortext{
    text-align: center;
    color: gray;
    margin: 1rem;
    user-select: none;
  }
  div{
    height: 75vh;
    display: flex; justify-content: center; align-items: center;
    flex-direction: column;
  }
  .container_img{
    width: 25%; height: 45%;
    border-radius: 50%;
    overflow: hidden;
  }
  .container_img img{
    width: 110%; height: 110%;
  }
</style>