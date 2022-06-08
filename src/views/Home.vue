<template>
  <div>
    <button @click="submit">提交</button>
    <button @click="getitem">获取</button>
  </div>
</template>

<script>
import request from '@/network/http' 
import { setStore,getStore } from '@/utils/storage'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    submit() {
      setStore('name','hello world')
    },
    getitem() {
      const value = getStore('name');
      console.log(value)
      console.log(typeof value)
    }
  },
  created () {
    request.get('/food').then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>