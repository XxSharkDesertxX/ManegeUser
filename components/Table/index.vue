<template>
  <v-simple-table>
    <template v-slot:default >
      <thead >
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Age
          </th>
          <th>
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in one"
          :key="item.name"
        >
          <td><nuxt-link :to="`/One/${item.id}`">{{ item.name }}</nuxt-link></td>
          <td>
            {{ item.age }}
          </td>
            <td>
                <v-btn x-small class="trash" @click="removes(item.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
            </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex';
  export default {
    data () {
      return {
        iduser:null
      }
    },
    computed:{
        ...mapState([
          'one'
        ]),
    },
    created(){
    console.log(this.$route);
    },
    methods: {

      ...mapActions([
          'remove',
          'save'
      ]),

      removes(item){
        let data = item;
        console.log(data);
        this.remove(data)
     }
    },
    mounted() {
     this.save();
      console.log(true)
    },
  }
</script>

<style lang="css">
    td{
      cursor: pointer;
      width: 10rem;
      text-align: center;
    }
    .trash{
      margin-top: .7rem;
    }
</style>