// 点击切换
<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" 
        class="tab-control-item" :class="{active: index === currentIndex}" 
        @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
      titles: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data(){
      return {
        // 当前选中的元素
          currentIndex: 0
      }
  },
  methods:{
      itemClick(index){
          this.currentIndex = index;
      }
  }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .tab-control-item{
        flex: 1;
    }
    .active{
        color: var(--color-high-text)
    }
    .active span{
        border-bottom: 3px solid var(--color-high-text);
        padding: 3px;
    }
</style>>