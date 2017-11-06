<template>
  <div id="wrap">
    <eHeader class="eHeader" ></eHeader>
    <eFooter class="eFooter"></eFooter>
    <router-view></router-view>
 </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  export default{
    data () {
      return {

      }
    },

    methods:{

    },

    components:{
      "eHeader":header,
      "eFooter":footer,
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:23.4rem;
  #wrap{
    position: relative;
    width: 100%;
    height:100%;
    .eHeader{
      position: absolute;
      top:0;
      left:0;
      z-index: 2;
    }
    .eFooter{
      position: absolute;
      bottom:0;
      left:0;
      width: 100%;
      background-color: #fff;
      z-index: 2;
    }
  }





</style>

