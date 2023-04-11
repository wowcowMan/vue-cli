<template>
  <Loading :active="isLoading"></Loading>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DEMO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link active" aria-current="page">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/order" class="nav-link active" aria-current="page">Order</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupon" class="nav-link active" aria-current="page">Coupon</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">LogOut</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    logout() {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
