<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cart in cartList" :key="cart.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked"
              v-model="cart.isChecked"
              @click="Checked(cart.skuId, cart.isChecked)"
              v-bind:true-value="checka"
              v-bind:false-value="checkb"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">
              {{ cart.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <button
              href="javascript:void(0)"
              class="mins"
              :disabled="cart.skuNum === 1"
              @click="updateCart(cart.skuId, -1)"
            >
              -
            </button>
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              :style="{outline:'none'}"
              @blur="update(cart.skuId, cart.skuNum, $event)"
              @input="formatSkuNum"
            />
            <button
              href="javascript:void(0)"
              :disabled="cart.skuNum === 100"
              class="mins"
              @click="updateCart(cart.skuId, 1)"
            >
              +
            </button>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="del(cart.skuId)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isShow" />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="delskuName">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ total }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ShopCart",
  data() {
    return {
      checka: 1,
      checkb: 0,
    };
  },
  computed: {
    // 计算当前选中的有多少个
    completedCount() {
      return this.cartList.reduce((p, c) => {
        return p + (c.isChecked === 1 ? 1 : 0);
      }, 0);
    },
    // 计算全选的值
    isShow: {
      get() {
        return (
          this.cartList.length === this.completedCount &&
          this.cartList.length !== 0
        );
      },
      set(val) {
        this.cartList.map((cart) => {
          cart.isChecked = val ? 1 : 0;
        });
      },
    },
    ...mapState({
      cartList: (state) => state.shopcart.cartList,
    }),
    // 商品总数
    total() {
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum, 0);
    },
    // 商品总价
    totalPrice() {
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum * c.skuPrice, 0);
    },
  },
  methods: {
    // 让数量框只能输入数字
    formatSkuNum(e) {
     let skuNum = e.target.value.replace(/\D+/g, "");
      if(skuNum < 1) {
        // 商品数量不能小于1
        skuNum = 1
      } else if(skuNum > 100) {
        // 同时商品库存不能大于100
        skuNum  = 100
      }
      e.target.value = skuNum
    },

    // 输入改变商品数量
    update(skuId, skuNum, e) {
      // 当前商品数量是10，e.target.value 6 --> -4  6 - 10
      if(+e.target.value === skuNum) return
      this.updateCartCount({ skuId, skuNum: e.target.value - skuNum });
    },

    async delskuName() {
      let skuName = this.cartList.filter((cart) => {
        cart.isChecked === "0";
      });
      console.log(skuName);
      //  await this.delCart()
    },
    ...mapActions([
      "getCartList",
      "updateCartCount",
      "delCart",
      "updateCartCheck",
    ]),

    async updateCart(skuId, skuNum) {
      // 更新商品
      await this.updateCartCount({ skuId, skuNum });

      //  刷新页面
      // this.getCartList();
    },

    // 删除商品
    async del(skuId) {
      if (window.confirm(`你确认要删除此项吗`)) {
        await this.delCart(skuId);
        // this.getCartList();
      }
    },

    Checked(skuId, isChecked) {
      // this.updateCartCheck({ skuId, isChecked });
      console.log(isChecked);
      // this.getCartList();
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 15%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 15%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 14%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 5%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12%;
        }

        .cart-list-con5 {
          width: 16%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            outline: none;
          }
          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 14%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>