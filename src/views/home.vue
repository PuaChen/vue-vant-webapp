<template>
  <div>
    <lg-header :leftArrow="false" :titleType="1" title="首页"></lg-header>

    <div class="list">
        移动端页面

    </div>

    <lg-footer :index="0"></lg-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [
        { id: "1", title: "标题1" },
        { id: "2", title: "标题2" },
        { id: "3", title: "标题3" },
        { id: "4", title: "标题4" },
        { id: "4", title: "标题5" }
      ],
      num: 20
    };
  },
  methods: {
    tabChange(index, title) {
      this.num = (index + 1) * 20;
    },
    onRefresh(done) {
      setTimeout(() => {
        done();
      }, 1500);
    },
    onInfinite(done) {
      setTimeout(() => {
        this.num += 50;
        done();
      }, 1500);
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  height: 100%;
  padding-top: 46px;
}
</style>