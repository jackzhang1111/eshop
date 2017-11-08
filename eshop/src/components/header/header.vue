<template>
  <div class="header">
    <div class="header-up">
      <span>{{nav.pet}}</span>
      <span>|</span>
      <span>{{nav.City}}</span>
      <Icon type="arrow-down-b"></Icon>
      <input type="text" disabled="disabled" placeholder="搜索商品和品牌">
      <span class="icon"></span>
    </div>
    <div class="header-down" ref="vau">
      <ul class="header-list" >
        <li v-if="nav.menuNames" v-for="(menuName,index) in nav.menuNames"
            :class="{greenCo: greenCoIndex===index}" @click="clickColor(index)">{{menuName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default{
    data () {
      return {
        nav:{},
        greenCoIndex:0

      }
    },
    mounted(){
      axios.get('/api/data')
        .then(response => {
          const result = response.data;
          if(result.code===0){
              this.nav = result.data
            this.$nextTick(() => {
              this._vauScroll()
            })
          }
        })
    },
    methods:{
      _vauScroll(){
        new BScroll(this.$refs.vau,{
          click:true,
          scrollX: true
        })
      },
      clickColor(index){
        this.greenCoIndex = index
        console.log(index);
      }

    }


  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:23.4rem;
  .header{
    position: absolute;
    top:0;
    left:0;
    z-index: 2;
    width: 100%;
    height: 87/@rem;
    .header-up{
      position: relative;
      height: 51/@rem;
      line-height: 51/@rem;
      span{
        color: #898989;
        &:nth-of-type(1){
          margin-left: 10 /@rem;;
        }
      }
      input{
        display: inline-block;
        width: 220 /@rem;
        height: 25 /@rem;
        border-radius: 5%;
        margin-left: 3 /@rem;
      }
      .icon{
        float: right;
        margin-top: 10 /@rem;
        margin-right: 5 /@rem;
        width: 25 /@rem;
        height:25 /@rem;
        background: url("../../img/mydope.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .header-down{
      position: relative;
      height:35 /@rem;
      .header-list{
        overflow: hidden;
        width: 530 /@rem;
        height: 100%;
        li{
          float: left;
          width: 75 /@rem;
          height: 36 /@rem;
          text-align: center;
          line-height:36 /@rem;
          &.greenCo{
            color: #2b542c;
            background-color: pink;
          }
        }
      }
    }
  }
</style>
