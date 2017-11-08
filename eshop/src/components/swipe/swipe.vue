<template>
  <div class="CarouselWrap">
    <mt-swipe :auto="2000" >
      <mt-swipe-item><img :src="home.Carousel1Jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img :src="home.Carousel2Jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img :src="home.Carousel3Jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img :src="home.Carousel4Jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default{
    props:{
      home: Object
    },
    components:{
      Swipe:Swipe,
      SwipeItem:SwipeItem
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 23.4rem;
  .CarouselWrap{
    position: relative;
    width: 100%;
    height:160 /@rem;
    .mint-swipe{
      .mint-swipe-items-wrap{
        img{
          width: 100%;
        }
      }
      .mint-swipe-indicators{
        position: absolute;
        top:130 /@rem;
        left:350 /@rem;
        .mint-swipe-indicator{
          width: 5 /@rem;
          height:5 /@rem;
          background-color: white;
          border-radius: 30%;
          opacity: 1;
          &.is-active{
            width: 15 /@rem;
            transition: .5s width;
          }
        }
      }
    }
  }

</style>
