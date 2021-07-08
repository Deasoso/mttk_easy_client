<template>
  <div class="demo-page">
    <div class="selecttext">用户名</div>
    <b-input v-model="user" />
    <div class="selecttext">密码</div>
    <b-input v-model="pw" type="password"/>
    <b-button @click="login" type="is-primary">登录</b-button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: "",
      pw: ""
    }
  },
  methods:{
    async login(){
      const result = await axios.post(
        'http://localhost:5001/login',
        {
          user: this.user,
          pw: this.pw
        }
      )
      console.log(result);
    }
  }
};
</script>

<style scoped>
.demo-page {
  background-color: #ffffff;
  padding-bottom: 32px;
}
</style>
