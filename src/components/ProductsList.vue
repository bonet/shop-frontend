<template>
  <div class="container" justify="center">
    <el-select @change="retrieveProducts" v-model="category" placeholder="Select Category">
      <el-option
        v-for="cat in categories"
        :key="cat.value"
        :label="cat.label"
        :value="cat.value">
      </el-option>
    </el-select>
    <el-row>
      <el-col :span="8" v-for="product in products" :key="product.id">
        <product :product="product"></product>
      </el-col>
    </el-row>

    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :total="totalProductCount" layout="prev, pager, next"></el-pagination>

  </div>
</template>

<script>
import axios from 'axios'
import Product from './Product.vue'

export default {
  name: 'ProductsList',
  components: {
    'product': Product
  },
  data () {
    return {
      products: [],
      categories: [ // ideally this shouldn't be hardcoded
        {value: 'makeup', label: 'Makeup'},
        {value: 'tools', label: 'Tools'},
        {value: 'brushes', label: 'Brushed'},
        {value: 'lipstick', label: 'Lipstick'}
      ],
      category: '',
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
      var searchString = ''
      if (this.category) {
        searchString = `&search_category=category&search_term=${this.category}`
      }
      axios.get(`http://localhost:3000/products?start_page=${this.currentPage}&page_length=${this.pageSize}&order_by=price&sort_direction=asc${searchString}`)
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
.container {
  margin: 20px 100px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>
