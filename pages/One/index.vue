<template>
    <div id="body">
        <Table/>
        <br>
        <v-btn @click="toggleform">
             <v-icon>
                mdi-{{isform ? 'menu-up' : 'plus'}}
             </v-icon>            
        </v-btn>
        <FormAdd v-if="isform"/>
    </div>
</template>

<script>
import Table from '../../components/Table'
export default {
    data() {
        return {
            isform:false
        }
    },
    components:{
        Table
    },
    methods: {
        toggleform(){
            return this.isform  = !this.isform
        }
    },
}
</script>

<style lang="css" scoped>
    #body{
      width: 100%;
      min-height: 80vh;
     display: flex;
      justify-content: center; align-items: center;
      flex-direction: column;
    }
</style>
