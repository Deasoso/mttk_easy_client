<template>
  <div class="thefooter">
    <mt-tabbar v-model="selected" :fixed="true" class="footerheight">
      <mt-tab-item id="home" @click.native="menuTab('/Home')">
        <div class="footersize">登录</div>
      </mt-tab-item>
      <mt-tab-item id="home" @click.native="menuTab('/User')">
        <div class="footersize">用户</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "NavigateTabBar",
  data(){
    return{
      selected: 0
    }
  },
  // watch: {
  //   $route: {
  //     handler: function(val, oldVal){
  //       // console.log(val);
  //       if(val.name == "Home"){
  //         this.selected = "home";
  //       }else if(val.name == "User"){
  //         this.selected = "user";
  //       }
  //     },
  //     // 深度观察监听
  //     deep: true
  //   }
  // },
  methods: {

  },
  mounted(){
    // console.log(this);
    const val = this.$route;
    if(val.name == "Home"){
      this.selected = "home";
    }else if(val.name == "User"){
      this.selected = "user";
    }
  }
};
</script>

<style>
.thefooter{
  margin-top: 60px;
}
.footerheight{
  height: 60px;
  border-top: solid #dbdbdb 1px;
}
.footersize{
  margin-top: 16px;
  font-size: 16px;
}
</style>
