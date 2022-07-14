<template>
    <div id="body">
        <Table/>
    </div>
</template>

<script>
import Table from '../../components/Table'
export default {
    components:{
        Table
    }
}
</script>

<style lang="css" scoped>
    #body{
      width: 100%;
      height: 80vh; display: flex;
      justify-content: center; align-items: center;
    }
</style>
