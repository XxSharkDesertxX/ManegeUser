<template>
  <div>
        <ul>
            <li><nuxt-link to="/" class="nuxtLink" >Home</nuxt-link></li>
            <li><nuxt-link to="/One" class="nuxtLink" >Mail</nuxt-link></li>
            <li><nuxt-link to="/Tow" class="nuxtLink" >Tow</nuxt-link></li>
        </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="css" scoped>
    div{
        width: 100%; height: 10vh;
        display: flex; justify-content: center; align-items: center;
        background: aliceblue;
    }
    ul{
        display: flex;
        justify-content: space-around; align-items: center;
    }
    ul li{
        list-style: none;
        margin: 0 1rem;
        cursor: pointer;
        transition: all .6s;
    }
    ul li:hover{
        border-bottom: 2px solid black;
    }
    .nuxtLink{
        text-decoration: none;
        color: black;
        font-weight: bolder;
    }
</style>