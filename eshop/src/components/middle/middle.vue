<template>
  <scroller class="scroller">
    <div class="middle">
        <div class="banner1">
          <img :src="home.activityJpg" alt="">
        </div>
        <div class="carousel">
          <swipe :home="home"></swipe>
        </div>
        <div class="banner2">
          <img :src="home.banner2Jpg" alt="">
        </div>
        <div class="columnNav">
          <ul class="columnNavList">
            <li class="list1">
              <a href="javascript:;">
                <img :src="home.a1Jpg" alt="">
              </a>
            </li>
            <li class="list2">
              <a href="javascript:;">
                <img :src="home.a2Jpg" alt="">
              </a>
            </li>
            <li class="list3">
              <a href="javascript:;">
                <img :src="home.a3Jpg" alt="">
              </a>
            </li>
            <li class="list4">
              <a href="javascript:;">
                <img :src="home.a4Jpg" alt="">
              </a>
            </li>
            <li class="list5">
              <a href="javascript:;">
                <img :src="home.a5Jpg" alt="">
              </a>
            </li>
            <li class="list6">
              <a href="javascript:;">
                <img :src="home.a6Jpg" alt="">
              </a>
            </li>
            <li class="list7">
              <a href="javascript:;">
                <img :src="home.a7Jpg" alt="">
              </a>
            </li>
            <li class="list8">
              <a href="javascript:;">
                <img :src="home.a8Jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
        <div class="activity-11-1">
          <a href="javascript:;"><img :src="home.a9Jpg" alt=""></a>
        </div>
        <div class="activity-11-2">
          <a href="javascript:;"><img :src="home.a10Jpg" alt=""></a>
        </div>
        <div class="surprise">
          <div class="surprise-up">
            <img :src="home.supricePng" alt="">
            <span>距离本场结束</span>
            <span class="timer">{{hour}}时</span>
            <span>:</span>
            <span class="timer">{{minute}}分</span>
            <span>:</span>
            <span class="timer">{{second}}秒</span>
            <img :src="home.morePng" alt="">
          </div>
          <div class="surprise-down" ref="bPicScroll">
            <ul class="surprise-down-list">
              <li v-for="bPic in home.bPics">
                <a href="javascript:;">
                  <img :src="bPic.bJpg" alt="">
                  <div><span class="redColor">¥{{bPic.b1Price}}</span></div>
                  <div><span class="grayColor">省¥ {{bPic.oldPrice-bPic.b1Price}}</span></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="banner3">
          <img :src="home.banner3Jpg" alt="">
        </div>
        <div class="imported">
          <div class="jk-title"></div>
          <div class="goods">
            <ul class="list">
              <li v-for="jkPic in home.jkPics">
                <a href="javascript:;">
                  <img :src="jkPic.jcPic" alt="">
                  <p><span>{{jkPic.product}}</span></p>
                  <p>
                    <span class="newPrice">¥{{jkPic.newPrice}}</span>
                    <span class="oldPrice">¥{{jkPic.oldPrice}}</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="imported">
          <div class="zl-title"></div>
          <div class="goods">
            <ul class="list">
              <li v-for="zhuluang in home.zhuluangs">
                <a href="javascript:;">
                  <img :src="zhuluang.jcPic" alt="">
                  <p><span>{{zhuluang.product}}</span></p>
                  <p>
                    <span class="newPrice">¥{{zhuluang.newPrice}}</span>
                    <span class="oldPrice">¥{{zhuluang.oldPrice}}</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="imported">
          <div class="ls-title"></div>
          <div class="goods">
            <ul class="list">
              <li v-for="lsPic in home.lsPics">
                <a href="javascript:;">
                  <img :src="lsPic.jcPic" alt="">
                  <p><span>{{lsPic.product}}</span></p>
                  <p>
                    <span class="newPrice">¥{{lsPic.newPrice}}</span>
                    <span class="oldPrice">¥{{lsPic.oldPrice}}</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="imported">
          <div class="bj-title"></div>
          <div class="goods">
            <ul class="list">
              <li v-for="bjPic in home.bjPics">
                <a href="javascript:;">
                  <img :src="bjPic.bjPic" alt="">
                  <p><span>{{bjPic.product}}</span></p>
                  <p>
                    <span class="newPrice">¥{{bjPic.newPrice}}</span>
                    <span class="oldPrice">¥{{bjPic.oldPrice}}</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="imported">
          <div class="sh-title"></div>
          <div class="goods">
            <ul class="list">
              <li v-for="shenghuo in home.shenghuos">
                <a href="javascript:;">
                  <img :src="shenghuo.jcPic" alt="">
                  <p><span>{{shenghuo.product}}</span></p>
                  <p>
                    <span class="newPrice">¥{{shenghuo.newPrice}}</span>
                    <span class="oldPrice">¥{{shenghuo.oldPrice}}</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="banner4">
          <a href="javascript:;"><img :src="home.banner4Jpg" alt=""></a>
        </div>
        <div class="bigpic">
          <img :src="home.bigpic1Jpg" alt="">
        </div>
        <div class="abroad-up">
          <ul class="abroad-list">
            <li>
              <a href="javascript:;"><img :src="home.d1Jpg" alt=""></a>
              <a href="javascript:;"><img :src="home.d2Jpg" alt=""></a>
            </li>
            <li>
              <a href="javascript:;"><img :src="home.d3Jpg" alt=""></a>
              <a href="javascript:;"><img :src="home.d4Jpg" alt=""></a>
            </li>

            <li>
            <a href="javascript:;"><img :src="home.d5Jpg" alt=""></a>
            <a href="javascript:;"><img :src="home.d6Jpg" alt=""></a>
          </li>
            <li><a href="javascript:;"><img :src="home.da1Jpg" alt=""></a></li>
          </ul>
        </div>
        <div class="abroad-down">
          <img :src="home.d13Jpg" alt="">
          <img :src="home.d14Jpg" alt="">
        </div>
        <div class="abroad-up">
          <ul class="abroad-list">
            <li>
              <a href="javascript:;"><img :src="home.d7Jpg" alt=""></a>
              <a href="javascript:;"><img :src="home.d8Jpg" alt=""></a>
            </li>
            <li>
              <a href="javascript:;"><img :src="home.d9Jpg" alt=""></a>
              <a href="javascript:;"><img :src="home.d10Jpg" alt=""></a>
            </li>
            <li>
            <a href="javascript:;"><img :src="home.d11Jpg" alt=""></a>
            <a href="javascript:;"><img :src="home.d12Jpg" alt=""></a>
          </li>
            <li><a href="javascript:;"><img :src="home.da2Jpg" alt=""></a></li>
          </ul>
        </div>
        <div class="abroad-down">
          <img :src="home.d15Jpg" alt="">
          <img :src="home.d16Jpg" alt="">
        </div>
        <div class="bigpic">
          <img :src="home.bigpic2Jpg" alt="">
        </div>
        <div class="gather">
          <ul class="gather-list">
            <li class="left">
              <img :src="home.e1Jpg" alt="">
              <img :src="home.e3Jpg" alt="">
              <img :src="home.e5Jpg" alt="">
            </li>
            <li class="right">
              <img :src="home.e2Jpg" alt="">
              <img :src="home.e4Jpg" alt="">
              <img :src="home.e6Jpg" alt="">
            </li>
          </ul>
        </div>
        <div class="bigpic">
          <img :src="home.bigpic3Jpg" alt="">
        </div>
        <div class="video">
          <img v-if="play" @click="isClick" :src="home.videoJpg" alt="">
          <video v-else src="../../audio/audio.mp4" controls="controls">
            your browser does not support the video tag
            </video>
        </div>
        <div class="bigRed">
          <img :src="home.bigredJpg" alt="">
        </div>
        <div class="foot">
          <div class="ft">
            <span class="bt">触屏版</span>
            <span><a href="javascript:;">手机客户端</a></span>
            <span><a href="javascript:;">关于我们</a></span>
            <span><a href="javascript:;">联系我们</a></span>
          </div>
          <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </div>
    </div>
  </scroller>
</template>

<script>
  import swipe from '../swipe/swipe.vue'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        home:{},
        hour:3,
        minute:0,
        second:0,
        play:true
      }
    },
    mounted(){
      axios.get('/api/data')
        .then(response => {
          const result = response.data
          if(result.code===0){
              this.home = result.data
              this.$nextTick(()=>{
                this._bPicScroll()
              })
          }
        })
    },
    methods:{
      _bPicScroll(){
        new BScroll(this.$refs.bPicScroll,{
          click:true,
          scrollX: true
        })
      },
      isClick(){
        this.play = false
        console.log('aaa');
      }
    },

    components:{
      swipe,
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../css/common/common";
  @rem:23.4rem;
  .scroller {
    margin-top: 4rem;
    .middle {
      width: 100%;
      height: 4397 /@rem;
      .banner1 {
        .banner();
        height: 50 /@rem;
      }
      .carousel {
        width: 100%;
        height: 160 /@rem;
        div {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 160 /@rem;
          }
        }
      }
      .banner2 {
        .banner();
        height: 288 /@rem;
      }
      .columnNav {
        width: 100%;
        height: 176 /@rem;
        .columnNavList {
          width: 100%;
          height: 100%;
          .list1 {
            .listLiNodes()
          }
          .list2 {
            .listLiNodes()
          }
          .list3 {
            .listLiNodes()
          }
          .list4 {
            .listLiNodes()
          }
          .list5 {
            .listLiNodes()
          }
          .list6 {
            .listLiNodes()
          }
          .list7 {
            .listLiNodes()
          }
          .list8 {
            .listLiNodes()
          }
        }
      }
      .activity-11-1 {
        width: 100%;
        height: 50 /@rem;
        .tile()
      }
      .activity-11-2 {
        width: 100%;
        height: 150 /@rem;
        .tile()
      }
      .surprise {
        width: 100%;
        height: 191 /@rem;
        .surprise-up {
          width: 100%;
          height: 61 /@rem;
          vertical-align: top;
          img {
            &:nth-of-type(1) {
              float: left;
              width: 105 /@rem;
              height: 34 /@rem;
              padding-top: 10 /@rem;
            }
            &:nth-of-type(2) {
              float: right;
              width: 64 /@rem;
              height: 40 /@rem;
            }
          }
          span {
            float: left;
            margin-top: 12 /@rem;
            &:nth-last-child(1) {
              float: right;
            }
          }
        }
        .surprise-down {
          width: 100%;
          height: 131 /@rem;
          .surprise-down-list {
            width: 882 /@rem;
            height: 100%;
            li {
              float: left;
              width: 98 /@rem;
              height: 84 /@rem;
              a {
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 100%;
                }
                div {
                  width: 100%;
                  height: 23 /@rem;
                  text-align: center;
                  line-height: 23 /@rem;
                  margin-top: -5 /@rem;
                  span{
                    &.redColor{
                      color: red;
                    }
                    &.grayColor{
                      color: #7e8c8d;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .banner3 {
        width: 100%;
        height: 62 /@rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .imported {
        width: 100%;
        height: 305 /@rem;
        background-color: #F24865;
        margin-bottom: 8 /@rem;
        div {
          &.jk-title {
            .title();
            background: url("../../img/eshoppic/jinkou/jk-title.jpg") no-repeat;
            background-size: 100% 100%;
          }
          &.zl-title {
            .title();
            background: url("../../img/eshoppic/zhuliang/zl-title.gif") no-repeat;
            background-size: 100% 100%;
          }
          &.bj-title {
            .title();
            background: url("../../img/eshoppic/baojian/bj-title.jpg") no-repeat;
            background-size: 100% 100%;
          }
          &.ls-title {
            .title();
            background: url("../../img/eshoppic/lingshi/food-title.png") no-repeat;
            background-size: 100% 100%;
          }
          &.sh-title {
            .title();
            background: url("../../img/eshoppic/shenghuo/huo-title.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .goods {
          width: 100%;
          height: 265 /@rem;
          .list {
            width: 100%;
            height: 100%;
            li {
              float: left;
              width: 25%;
              height: 50%;
              border: 1px solid #EBEBEB;
              background-color: #fff;
              a {
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 70%
                }
                p {
                  text-align: center;
                  .newPrice{
                    color: red;
                    margin-right: 7 /@rem;
                  }
                  .oldPrice{
                    color: #7e8c8d;
                    text-decoration: line-through;
                  }
                }
              }
            }
          }

        }
      }
      .banner4 {
        .banner();
        height: 140 /@rem;
      }
      .bigpic {
        .banner();
        height: 54 /@rem;
      }
      .abroad-up {
        width: 100%;
        height: 209 /@rem;
        background-color: #F24865;
        .abroad-list {
          width: 100%;
          height: 100%;
          display: -webkit-box;
          display: flex;
          li {
            float: left;
            width: 24%;
            height: 100%;
            -webkit-box-flex: 1;
            flex: 1;
            &:nth-last-of-type(1) {
              a {
                width: 100%;
                height: 209/@rem;

                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 5%;
                  //margin-top: -18 /@rem;
                }
              }
            }
            a {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 49%;
                border-radius: 5%;
              }
            }
          }
        }
      }
      .abroad-down {
        width: 100%;
        height: 80 /@rem;
        background-color: #F24865;
        display: -webkit-box;
        display: flex;
        img {
          width: 49%;
          height: 100%;
          -webkit-box-flex:1 ;
          flex: 1;
        }
      }
      .gather {
        width: 100%;
        height: 307/@rem;
        .gather-list {
          width: 100%;
          height: 100%;
          display: -webkit-box;
          display: flex;
          .left {
            float: left;
            height: 33%;
            -webkit-box-flex: 1;
            flex: 1;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .right {
            float: left;
            height: 33%;
            -webkit-box-flex: 1;
            flex: 1;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .video {
        width: 100%;
        height: 235 /@rem;
        img {
          width: 100%;
          height: 100%
        }
        video{
          width: 100%;
          height: 100%
        }
      }
      .bigRed {
        width: 100%;
        height: 35 /@rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .foot {
        margin-top: 14 /@rem;
        width: 100%;
        height: 87 /@rem;
        text-align: center;
        .ft {
          width: 100%;
          height: 42 /@rem;
          line-height: 42 /@rem;
          font-size: 14 /@rem;
          span {
            margin-left: 10 /@rem;
          }
          .bt {
            color: red;
          }
        }
        p {
          margin-bottom: 30 /@rem;
        }
      }
    }
  }

</style>
