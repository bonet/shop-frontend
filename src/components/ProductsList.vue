<template>
  <div class="products-list">
    <el-row>
      <el-col :span="8" v-for="product in products" :key="product.id">
        <div class="grid-content bg-purple">{{product.name}}</div>
      </el-col>
    </el-row>

    <el-button>Test</el-button>
    <el-button type="primary" :loading="true">Loading…</el-button>
    <el-pagination @current-change="handleCurrentChange" v-bind:current-page="currentPage" v-bind:page-size="pageSize" v-bind:total="totalProductCount" layout="prev, pager, next"></el-pagination>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductsList',
  data () {
    return {
      products: [],
      currentPage: 1,
      pageSize: 6,
      totalProductCount: 0
    }
  },
  mounted () {
    this.retrieveProducts()
  },
  computed: {
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
      this.retrieveProducts()
    },
    retrieveProducts () {
      axios.get(`http://localhost:3000/products?start_page=${this.currentPage}&page_length=${this.pageSize}&order_by=price&sort_direction=asc`)
      .then(response => {
        this.products = response.data.data
        this.totalProductCount = response.data.recordsFiltered
      })
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
