<template>
  <div class="footer">
    <ul class="footer-list">
      <li>
        <router-link to="/middle" class="cssSprite1"></router-link>
      </li>
      <li>
          <router-link to="/classify" class="cssSprite2"></router-link>
      </li>
      <li>
        <router-link to="/shopcar" class="cssSprite3"></router-link>
      </li>
      <li>
        <router-link to="/my" class="cssSprite4"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../css/common/common";
  @rem:23.4rem;
  .footer{
      position: absolute;
      bottom:0;
      left:0;
      width: 100%;
      background-color: #fff;
      z-index: 5;
    .footer-list{
      height: 55 /@rem;
      overflow: hidden;
      li{
        float: left;
        width: 93 /@rem;
        height: 55 /@rem;
        text-align: center;
        line-height: 90/@rem;
        .cssSprite1{
          .icons();
          background-position: -90/@rem 0/@rem;
          &.active{
            background-position: 3/@rem -2/@rem;
          }
        }
        .cssSprite2{
          .icons();
          background-position: -90/@rem -48/@rem;
          &.active{
            background-position: 0/@rem -48/@rem;
          }
        }
        .cssSprite3{
          .icons();
          background-position: -90/@rem -92/@rem;
          &.active{
            background-position: 0/@rem -92/@rem;
          }
        }
        .cssSprite4{
          .icons();
          background-position: -90/@rem -138/@rem;
          &.active{
            background-position: 0/@rem -138/@rem;
          }
        }
      }
    }
  }
</style>
