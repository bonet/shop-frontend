<template>
  <div class="grid-content">
    <div class="product-image">
      <!-- This is just placeholder image //-->
      <img src="/static/product_placeholder_image.jpeg" />
    </div>
    <div class="product-info">
      <div class="product-info"> {{product.name}} </div>
      <div class="product-price"> {{priceDisplay}} </div>
    </div>
    <br />
    <el-button @click="goToProductsList" type="primary" round>Back to Products List</el-button>
    
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'ProductPage',
  mounted () {
    this.retrieveProduct()
  },
  data () {
    return {
      product: {}
    }
  },
  computed: {
    priceDisplay () {
      return ('$' + (this.product.price / 100).toFixed(2))
    }
  },
  methods: {
    retrieveProduct () {
      axios.get(`http://localhost:3000/products/${this.$route.params.id}`)
      .then(response => {
        this.product = response.data
      })
    },
    goToProductsList () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.grid-content {
  min-height: 100px;
  min-width: 60px;
  margin: 20px;
}

.wishlisted {
  
}
.hover {
  
}
.oos {
  
}
</style>