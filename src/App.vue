<template>
  <div id="app">
    <drop-down-menu :title="menu_title" v-on:listenToChildEvent="showMsgFromChild"></drop-down-menu>
    <router-view></router-view>
</div>
</template>

<script>
import dropDownMenu from './components/DropDownMenu'
export default {
  name: 'app',
  components: {
    dropDownMenu,
  },
  data () {
    return {
      menu_title: 'Hexcal下拉菜单'
    }
  },
  methods: {
    showMsgFromChild: function (data) {
      console.log('选择的是' + data)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
