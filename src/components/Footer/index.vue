<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-button">
        <div>
          <h4>购物指南</h4>
          <ul>
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div>
          <h4>配送方式</h4>
          <ul>
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div>
          <h4>支付方式</h4>
          <ul>
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div>
          <h4>售后服务</h4>
          <ul>
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div>
          <h4>特色服务</h4>
          <ul>
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div>
          <h4>帮助中心</h4>
          <img src="./images/wx_cz.jpg" alt="" />
        </div>
      </div>
      <div class="footer-list">
        <ul class="footer-ul">
          <li>
            关于我们
            <span></span>
          </li>
          <li>
            联系我们
            <span></span>
          </li>
          <li>
            关于我们
            <span></span>
          </li>
          <li>
            商家入驻
            <span></span>
          </li>
          <li>
            营销中心
            <span></span>
          </li>
          <li>
            友情链接
            <span></span>
          </li>
          <li>
            关于我们
            <span></span>
          </li>
          <li>
            营销中心
            <span></span>
          </li>
          <li>
            友情链接
            <span></span>
          </li>
          <li>关于我们</li>
        </ul>
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
}
.footer-button {
  padding: 20px;
  padding-left: 40px;
  display:flex;
  justify-content:space-between;
  border-bottom: 1px solid #e4e1e1;
  height: 166px;
  width: 1200px;
}
.footer-button div {
  width: 16.666%;
}
.footer-button div h4{
  font-size: 14px;
}
.footer-content {
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.footer-list {
  padding: 20px;
}
.footer-ul {
  text-align: center;
  display:flex;
  justify-content:center;
}
.footer-ul li span {
  border-left: 1px solid #666;
  width: 1px;
  height: 13px;
  margin: 8px 10px;
  background-color: #666;
}
.footer-list p {
  margin: 10px 0;
  text-align: center;
}
</style>