<template>
  <div>orders</div>
  <!-- <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filter.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filter.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDel(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table> -->
</template>
<script>
export default {
  data() {
    return {
      orders: [],
      isLoading: false
    }
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          console.log(res.data)
          this.orders = res.data.orders
          // this.pagination = res.data.pagination
        }
      })
    }
  },
  created() {
    this.getOrder()
  }
}
</script>
