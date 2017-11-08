<template>
  <div class="classify">
    <div class="classify-header">
      <div class="left"><span class="redSize">分类</span></div>
      <div class="right"><span>品牌</span></div>
    </div>
    <div class="classify-nav">
      <ul class="nav-list">
        <li>为您推荐</li>
        <li>狗狗主粮</li>
        <li>狗狗零食</li>
        <li>狗狗服饰</li>
        <li>狗狗垫窝</li>
        <li>狗狗生活</li>
        <li>狗狗玩具</li>
        <li>狗狗保健</li>
        <li>狗狗医疗</li>
        <li>狗狗牵引</li>
        <li>狗狗美容</li>
        <li>狗狗周边</li>
        <li>狗狗清洁</li>
      </ul>
    </div>
    <div class="classify-container">
      <div class="container-up">
        <div class="up-title">
          <span>狗狗服饰</span>
          <img src="../../img/quanbu.png" alt="">
        </div>
        <div class="goods">
          <ul class="goods-list">
            <li>
              <img src="../../img/eshoppic2/a1.jpg" alt="">
              <span>实弹</span>
            </li>
            <li>
              <img src="../../img/eshoppic2/a2.jpg" alt="">
              <span>实弹</span>
            </li>
            <li>
              <img src="../../img/eshoppic2/a3.jpg" alt="">
              <span>实弹</span>
            </li>
            <li>
              <img src="../../img/eshoppic2/a3.jpg" alt="">
              <span>实弹</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-down">
        <div class="down-title">
          <span>热门品牌</span>
        </div>
        <div class="brand">
          <ul class="brand-list">
            <li>
              <img src="../../img/eshoppic2/b1.jpg" alt="">
              <span>aaaa</span>
            </li>
            <li>
              <img src="../../img/eshoppic2/b2.jpg" alt="">
              <span>aaaa</span>
            </li>
            <li>
              <img src="../../img/eshoppic2/b3.jpg" alt="">
              <span>aaaa</span>
            </li>
            <li>
              <img src="../../img/eshoppic2/b4.jpg" alt="">
              <span>aaaa</span>
            </li>
            <li>
              <img src="../../img/eshoppic2/b5.jpg" alt="">
              <span>aaaa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}

</script>

<style lang="less" rel="stylesheet/less">
  @import "../../css/common/common";
  @rem: 23.4rem;
  .classify{
    position: absolute;
    width: 100%;
    height:100%;
    background-color: #F3F4F5;
    z-index: 3;
    .classify-header{
      width: 100%;
      height:5%;
      background-color: #fff;
      margin-bottom: 2 /@rem;
      .left{
        .siz();
        text-align: right;
        padding-right: 14 /@rem;
      }
      .right{
        .siz();
        text-align: left;
        padding-left: 14 /@rem;
      }

    }
    .classify-nav{
      width: 20%;
      height:94%;
      float: left;
      .nav-list{
        width: 100%;
        height: 100%;
        li{
          width: 70 /@rem;
          height: 50 /@rem;
          background-color: #fff;
          text-align: center;
          line-height: 50 /@rem;
          color: #080808;
          font-size: 13 /@rem;
        }
      }
    }
    .classify-container{
      width: 79%;
      height: 94%;
      float: left;
      background-color: #fff;
      .container-up{
        width: 100%;
        margin-top: 25 /@rem;
        margin-bottom: 25 /@rem;
        .up-title{
          width: 100%;
          height: 100%;
          line-height: 19 /@rem;
          span{
            float: left;
            margin-left: 10 /@rem;
          }
          img{
            width: 46 /@rem;
            height: 10 /@rem;
            float: right;
          }
        }
        .goods{
          width: 100%;
          .goods-list{
            width: 100%;
            overflow: hidden;
            li{
              float: left;
              width: 33%;
              height:116 /@rem;
              text-align: center;
              img{
                width: 100%;
                height:80%;
              }
            }
          }
        }
      }
      .container-down{
        width: 100%;
        height: 50 /@rem;
        .down-title{
          width: 100%;
          height: 100%;
          line-height: 19 /@rem;
          span{
            float: left;
            margin-left: 10 /@rem;
          }
        }
        .brand{
          width: 100%;
          .brand-list{
            width: 100%;
            overflow: hidden;
            li{
              float: left;
              width: 50%;
              height:116 /@rem;
              text-align: center;
              img{
                width: 100%;
                height:80%;
              }
            }
          }
        }
      }

    }
  }
</style>
