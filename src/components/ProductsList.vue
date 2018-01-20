<template>
  <div class="products-list">
    <el-row>
      <el-col :span="8" v-for="product in pagedProducts" :key="product.id">
        <div class="grid-content bg-purple">{{product.name}}</div>
      </el-col>
    </el-row>

    <el-button>Test</el-button>
    <el-button type="primary" :loading="true">Loading…</el-button>
    <el-pagination @current-change="handleCurrentChange" v-bind:current-page="currentPage" v-bind:page-size="pageSize" v-bind:total="totalProductCount" layout="prev, pager, next"></el-pagination>

  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  data () {
    return {
      products: [
        {id: 1, name: 'book 1'},
        {id: 2, name: 'book 2'},
        {id: 3, name: 'book 3'},
        {id: 4, name: 'book 4'},
        {id: 5, name: 'book 5'},
        {id: 6, name: 'book 6'},
        {id: 7, name: 'book 7'},
        {id: 8, name: 'book 8'},
        {id: 9, name: 'book 9'},
        {id: 10, name: 'book 10'},
        {id: 11, name: 'book 11'}
      ],
      currentPage: 1,
      pageSize: 6
    }
  },
  computed: {
    totalProductCount: function () {
      console.log(this.products.length)
      return this.products.length
    },
    indexStart: function () {
      return (this.pageSize * (this.currentPage - 1))
    },
    indexEnd: function () {
      return (this.pageSize * this.currentPage)
    },
    pagedProducts: function () {
      return this.products.slice(this.indexStart, this.indexEnd)
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
