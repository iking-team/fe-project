<template>
  <div>
    <div class="hello">
      <img alt="fep logo" src="../assets/logo.png">
      <h1>欢迎来到FEProject</h1>
      <p>
        该项目为前端开发工程，可以配合iking-ui组件库使用<br>
        相关开发文档请参见
        <a href="http://10.88.3.20/ikingUi" target="_blank" rel="noopener">iking-ui 开发文档</a>.
      </p>
      <h3>安装 iking-ui 组件库</h3>
      <p>建议用yarn命令进行安装，执行命令 yarn add iking-ui 即可安装完成</p>
      <h3>相关链接</h3>
      <ul>
        <li><a href="https://www.kingsoft.com/" target="_blank" rel="noopener">金山软件</a></li>
      </ul>
      <br/><a  @click="goTarget">路由跳转案例</a>
      
    </div>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'Introduce',
  props: {
    
  },
  methods:{
    goTarget(){
      debugger;
      this.$router.push({name:'navPage'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.hello{
  text-align: center;
  align-content: center;
  margin-top: 60px;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
