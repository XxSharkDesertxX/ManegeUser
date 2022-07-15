<template>
  <div>
    <Header/>
      <div> 
          <Nuxt/>
      </div>
      <Fotter class="footer"/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Fotter from '../components/Fotter';
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  },
  components:{
    Header,
    Fotter
  }
}
</script>

<style lang="css" scoped>
  *{
    margin: 0; padding: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .footer{
    position: relative;
    bottom: 0;
  }
</style>
