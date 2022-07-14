<template>
  <v-simple-table >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Age
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in one"
          :key="item.name"
        >
          <td><nuxt-link :to="`/One/${item.id}`">{{ item.name }}</nuxt-link></td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed:{
        ...mapState([
          'one'
        ])
    },
      created(){
    console.log(this.$route);
  }
  }
</script>

<style lang="css">
    td{
      cursor: pointer;
    }
</style>