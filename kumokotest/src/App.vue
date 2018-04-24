<template>
  <div class="viewport" @touchstart="touchstartHandle" @touchmove="touchmoveHandle" @scroll="scrollHandle">
    <ul class="pages" :style="`transform: translateY(-${(this.page - 1) * 100}vh)`">
      <page :currentPage="page" imageSrc="/static/page1.jpg" :num="1">
        <h1 class="page_title">国内一流互联网在职工程师的前端技术服务</h1>
      </page>
      <page :currentPage="page" imageSrc="/static/page2.jpg" :num="2">
        <h1 class="page_title">与众不同的技术人</h1>
        <div class="details">
          <div class="detail">
            <div>可靠</div>
            <div>RELIABLE</div>
          </div>
          <div class="detail">
            <div>简单</div>
            <div>PURE</div>
          </div>
          <div class="detail">
            <div>平等</div>
            <div>EQUALITY</div>
          </div>
        </div>
      </page>
      <page :currentPage="page" imageSrc="/static/page3.jpg" :num="3">
        <h3 class="page_title">根据客户需求出具完整的项目原型设计与交互流程，在确认后将进一步出具UI设计稿，并与客户、开发双向沟通调整细节。如果已有完备的设计稿，可以跳过此环节。</h3>
      </page>
      <page :currentPage="page" imageSrc="/static/page4.gif" :num="4" :isFull="true">
        <h1 class="page_title">现在就开始试试看吧！</h1>
        <img class="foo" src="/static/foo.png" width="100" height="100">
      </page>
    </ul>
  </div>
</template>

<script>
import page from '@/components/page'

export default {
  name: 'App',
  components: { page },
  data () {
    return {
      page: 1,
      startPoint: 0,
      pageChangable: false
    }
  },
  methods: {
    touchstartHandle (e) {
      this.startPoint = e.targetTouches[0].clientY
      this.pageChangable = true
    },
    touchmoveHandle (e) {
      const endPoint = e.targetTouches[0].clientY
      if (endPoint - this.startPoint > 50) {
        this.changePage('prev')
        this.pageChangable = false
      } else if (endPoint - this.startPoint < -50){
        this.changePage('next')
        this.pageChangable = false
      }
      e.preventDefault()
    },
    scrollHandle (e) {
      e.preventDefault()
    },
    changePage (to) {
      if (!this.pageChangable) { return }
      if (to === 'next') {
        if (this.page + 1 > 4) { return }
        else {
          ++this.page;
        }
      } else {
        if (!(this.page - 1)) { return }
        else {
          --this.page;
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/pagestyle.scss';

.viewport {
  min-height: 100vh;
  overflow: hidden;
}
.pages {
  transition: transform .8s;
  .page {
    min-height: 100vh;
  }
}
.action-buttons {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

// page2
.details {
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  .detail {
    display: flex;
    width: 22vw;
    align-items: center;
    flex-direction: column;
    border: 1px solid #FFF;
    border-radius: 5px;
    filter: drop-shadow(0 0 5vw rgba(255, 255, 255, 1));

    div:first-of-type {
      margin-bottom: 2vw;
    }
  }
}
.foo {
  display: inline-block;
  margin: 0 auto;
  z-index: 10;
}
</style>
