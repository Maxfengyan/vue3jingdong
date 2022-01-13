<template>
  <!-- <router-view /> -->
  <div class="wrapper">
    <Position />
    <div class="search">
      <svg-icon icon-class="search" />
      山姆会员商店优惠商品
    </div>
    <div class="banner">
      <img :src="banner" alt="banner" />
    </div>

    <div class="icons">
      <div class="icons-item" v-for="item in iconList" :key="item.name">
        <img :src="item.img" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby_title">附近店铺</h3>
      <div class="nearby_item" v-for="item in 5" :key="item">
        <img :src="nearby" />
        <div class="nearby_content">
          <div class="nearby_content_title">沃尔玛</div>
          <div class="nearby_content_tags">
            <span class="nearby_content_tag">月售1万＋</span>
            <span class="nearby_content_tag">月售1万＋</span>
            <span class="nearby_content_tag">月售1万＋</span>
          </div>
          <p class="nearby_content_heighlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="docker">
    <div class="docker_item docker_item--active">
      <svg-icon icon-class="home-fill" />
      <span>首页</span>
    </div>
    <div class="docker_item">
      <svg-icon icon-class="cart" />
      <span>购物车</span>
    </div>
    <div class="docker_item">
      <svg-icon icon-class="order" />
      <span>订单</span>
    </div>
    <div class="docker_item">
      <svg-icon icon-class="my" />
      <span>我的</span>
    </div>
  </div>
</template>
<script>
import banner from "@/assets/banner.jpg";
import nearby from "@/assets/near.png";
import imgList from "@/utils/imgList";
import Position from "./component/Position.jsx";
export default {
  components: { Position },
  setup() {
    const iconList = [
      {
        name: "超市便利",
        img: imgList[0],
      },
      {
        name: "菜市场",
        img: imgList[1],
      },
      {
        name: "水果店",
        img: imgList[2],
      },
      {
        name: "鲜花绿植",
        img: imgList[3],
      },
      {
        name: "医药健康",
        img: imgList[4],
      },
      {
        name: "家居时尚",
        img: imgList[5],
      },
      {
        name: "烘焙蛋糕",
        img: imgList[6],
      },
      {
        name: "签到",
        img: imgList[7],
      },
      {
        name: "大牌免运",
        img: imgList[8],
      },
      {
        name: "红包套餐",
        img: imgList[9],
      },
    ];
    return { banner, iconList, nearby };
  },
};
</script>
<style lang="scss">
@import "@/style/variable.scss";
@import "@/style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.3rem 0.18rem;
  overflow-y: auto;
}
/* .position {
  color: $content-fontcolor;
  padding: 0.16rem 0.24rem 0.16rem 0;
  position: relative;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  svg {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
    &:nth-child(2) {
      position: absolute;
      right: 0;
      top: 0.17rem;
    }
  }
} */
.search {
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  margin-bottom: 0.12rem;
  svg {
    padding: 0 0.04rem 0 0.16rem;
    display: inline-block;
    font-size: 0.16rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  color: $content-fontcolor;
  .icons-item {
    width: 20%;
    img {
      width: 0.4rem;
      margin: 0 auto;
      display: block;
    }
    p {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
    }
  }
}
.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.18rem;
}
.nearby {
  .nearby_title {
    margin: 0.16rem 0 0.02rem 0;
    color: $content-fontcolor;
    font-size: 0.18rem;
    font-weight: normal;
  }
  .nearby_item {
    display: flex;
    padding-top: 0.12rem;
    img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
    .nearby_content {
      flex: 1;
      padding-bottom: 0.12rem;
      border-bottom: 1px solid $content-bgColor;

      .nearby_content_title {
        line-height: 0.22rem;
        font-size: 0.16rem;
      }
      .nearby_content_tags {
        line-height: 0.18rem;
        margin-top: 0.08rem;
        font-size: 0.13rem;
        color: $content-fontcolor;
        .nearby_content_tag {
          margin-right: 0.12rem;
        }
      }
      .nearby_content_heighlight {
        color: #e93b3b;
        line-height: 0.13rem;
        margin: 0.08rem 0 0 0;
      }
    }
  }
}
.docker {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid $content-bgColor;
  height: 0.49rem;
  padding: 0 18px;
  box-sizing: border-box;
  color: $content-fontcolor;
}
.docker_item {
  flex: 1;
  text-align: center;
  span {
    display: block;
    font-size: 0.2rem;
    transform: scale(50%);
    transform-origin: center top;
  }
  svg {
    font-size: 0.18rem;
    margin: 0.07rem 0 0.02rem 0;
  }
}
.docker_item--active {
  color: #1fa4fc;
}
</style>
