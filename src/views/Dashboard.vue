<template>
  <Navbar></Navbar>
    <div class="container-fluid mt-3 position-relative">
      <ToastMessage></ToastMessage>
      <router-view />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ToastMessage from '../components/ToastMessage.vue'
import emitter from '../methods/emitter'
export default {
  components: {
    Navbar,
    ToastMessage
  },
  provide() {
    return {
      emitter
    }
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // console.log(token)
    this.$http.defaults.headers.common.Authorization = token

    const api = `${process.env.VUE_APP_API}api/user/check`
    // console.log(api)
    this.$http.post(api, this.user)
      .then((res) => {
        console.log(res)
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
