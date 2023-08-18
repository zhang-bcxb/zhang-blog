<template>
  <el-row :gutter="30">
    <h1>自定义组件测试</h1>
  </el-row>
</template>


<script>
export default {
  // 组件名称【需要保持与文件名一致】
  name: "DemoVue",
  // 注册组件
  components: {},
  // 接收父组件传递的数据
  props: {},
  // 组件数据
  data() {
    return {}
  },
  // 组件方法
  methods: {
    getDemo() {
      console.log("自定义组件")
    },
  },
}
</script>


<style>
.main-demo{

}

</style>
