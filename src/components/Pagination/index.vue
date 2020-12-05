<template>
  <div class="pagination">
    <button :disabled="myCurrentPage <= 1" @click="setCurrentPage(myCurrentPage - 1)" :class="{btn:myCurrentPage <= 1}">上一页</button>
    <button :class="{ active:myCurrentPage === 1 }" @click="setCurrentPage(1)">1</button>
    <!-- 当start 大于 2 的时候 -->
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnsCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{active:myCurrentPage === startEnd.start + item - 1}"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <!-- ...什么时候应该有，当end小于总页数减1的时候 -->
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button v-show="totalPages > 1" :class="{active:myCurrentPage === totalPages}" @click="setCurrentPage(totalPages)">{{ totalPages }}</button>
    <button @click="setCurrentPage(myCurrentPage + 1)" :disabled="myCurrentPage >= totalPages" :class="{btn:myCurrentPage >= totalPages}">下一页</button>
    <button>总数：{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 显示按钮数量
    pagerCount: {
      type: Number,
      validator(val) {
        // 验证，验证通过才会有用
        // 大于等于 5 且小于等于 21 的奇数
        // 返回true验证成功
        // 返回false验证失败
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 总数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // 为了方便修改myCurrentPage，定义data数据
      // 原因：props数据只读不能修改
      myCurrentPage: this.currentPage,
    };
  },
  watch:{
      // 监视myCurrentPage的变化,一旦发生变化，就把当前currentPage(页码)的值传进去，触发current-change函数，发送请求
      myCurrentPage(currentPage) {
          this.$emit("current-change",currentPage)
      }
  },
  computed: {
    // 总页数
    totalPages() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算中间按钮的开始和结束的按钮值
    startEnd() {
      // 收集所有参与计算的参数
      const { myCurrentPage, pagerCount, totalPages } = this;

      // 中间start-end总计的按钮数量（不包含开头和结尾）
      const count = pagerCount - 2;
      // 中间的一半
      const halfCount = Math.floor(count / 2);

      let start, end;
      // 开始计算

      /* 
            start
                1.start = myCurrentPage - halfCount
                    1...3 4 [5] 6 7 ...10
                    3   =       5   -   2
                问题：
                    1 [2] 3 4 5 6 ...10
                    0   =       2   -   2
                解决：修正start的值，不能小于1

                问题：
                    1 ...5 6 7 8 [9] 10
                    7   =       9   -   2

            end
                2.end = start + count - 1
                    1...3 4 [5] 6 7...10
                    7   =   3   +   5 - 1 
          */

      // 1 [2] 3 4 5 6 ...10
      // 1...3 4 [5] 6 7 ...10
      // 1 ...5 6 7 8 [9] 10
      // 1 [2] 3

      // 9  >= 8             10     -      2
      if (myCurrentPage >= totalPages - halfCount) {
        // 1... 5 6 7 8 [9] 10
        start = totalPages - count;
      } else {
        // 正常情况
        start = myCurrentPage - halfCount;
      }

      if (start <= 1) {
        // 1 [2] 3 4 5 6 ...10
        start = 2;
      }

      // 正常情况
      end = start + count - 1;

      if (end >= totalPages) {
        // 1 [2] 3
        end = totalPages - 1;
      }

      // 返回计算结果
      return {
        start,
        end,
      };
    },

    // 需要遍历的按钮数量
    mapBtnsCount() {
      const { start, end } = this.startEnd;
      // 如果当前页码是5，就是7-3+1，遍历5个，页码是7，就是9-5+1，遍历5个
      const count = end - start + 1;
      // 如果count是0的话，就不遍历
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    // 接受每次点击的页码
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-size: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4;
    color: #606266;
    border-radius: 2px;
    cursor: pointer;
  }
  button.active{
      background-color: pink;
      color: #fff;
  }
  button.btn{
      background-color: #ddd;
  }
}
</style>
