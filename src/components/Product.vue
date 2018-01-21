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
    
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: ['product'],
  computed: {
    priceDisplay () {
      return ('$' + (this.product.price / 100).toFixed(2))
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