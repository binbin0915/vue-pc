<template>
  <div>
    
    <!-- <el-tooltip class="item" effect="dark" content="./1111" placement="right">
      <el-button><img src="./二维码.jpg" alt=""  /></el-button>
    </el-tooltip> -->
    <el-popover
            placement="right"
            width="170"
            trigger="hover">
            <img src="./滴滴.png" class="img1"/>
            <img slot="reference" src="./二维码.jpg" class="img2">
        </el-popover>
  </div>
</template>

<script>
export default {
  name: "B",
};
</script>

<style lang="less" scoped>
div {
  margin-top: 50px;
//   display:flex;
//   justify-content:center;
position: relative;
top: 0px;
}
.img1{
    width: 170px;
    height: 200px;
}
.img2:hover{
    position: relative;
    right:100px
}
</style>
