<template>
  <div>
    
  </div>
</template>

<script>
import request from '@/network/http' 
export default {
  name: 'axiosDemo',
  data () {
    return {

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