<template>
    <div id="body">
        <h2>The All user is :</h2>
        <br>
        <h3 class="alluser">
            {{usersCont}}
        </h3>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters([
            "usersCont"
        ]),
    }
}
</script>

<style lang="css" scoped>
    #body{
      width: 100%;
      height: 80vh; display: flex;
      justify-content: center; align-items: center;
      flex-direction: column;
      user-select: none;
    }
    .alluser{
        border-bottom: 2px solid gray;
    }
</style>
