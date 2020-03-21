<template>
  <div class="params">
    <table class="table " cellspacing="0" 
           v-for="(table, index) in paramsData.tables" :key="index">
      <tr v-for="(item, indey) in table" :key="indey">
        <td class="key">{{item[0]}}</td>
        <td>{{item[1]}}</td>
        <td>{{item[2]}}</td>
        <td>{{item[3]}}</td>
      </tr>
    </table>
    <table class="table set" cellspacing="0">
      <tr v-for="(item, index) in paramsData.set" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    paramsData: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
  .params{
    padding-bottom: 4px;
    border-bottom: 2px solid gainsboro;
  }
  .table{
    font-size: 14px;
    width: 100%;
    padding: 10px 15px;
  }
  .table tr{
    height: 35px;
  }
  .table td{
    border-bottom: 1px solid gainsboro;
  }
  .key{
    width: 25%;
  }
  .value{
    color: var(--color-high-text);
  }
</style>