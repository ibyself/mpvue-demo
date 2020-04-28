<template>
    <div id="firstViewContainer">
        <swiper @change="handleChange" :indicator-dots="index!==3" indicator-color="green" indicator-active-color="skyblue">
            <swiper-item>
                <img src="/static/imgs/firstView/2.jpg"/>
            </swiper-item>
            <swiper-item>
                <img src="/static/imgs/firstView/nvsheng.jpg"/>
            </swiper-item>
            <swiper-item>
                <img src="/static/imgs/firstView/3.jpg"/>
            </swiper-item>
            <swiper-item>
                <img src="/static/imgs/firstView/1.jpg"/>
            </swiper-item> 
        </swiper>
        <button @click="toBooks" class="btn" v-show="index===3">开始体验</button>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return {
                index:0
            }
        },
        methods:{
            handleChange(event){
                console.log(event)
                this.index=event.mp.detail.current
            },
            toBooks(){
                wx.switchTab({
                    url:"/pages/books/main"
                })
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #firstViewContainer
        width 100%
        height 100%
        swiper
            width 100%
            height 100%
            img
                width 100%
                height 100%
        .btn
            width 300rpx
            height 80rpx
            line-height 80rpx
            text-align center
            position absolute
            left 50%
            bottom 20rpx
            margin-left -150rpx
            background rgba(255,255,255,.6)
</style>

