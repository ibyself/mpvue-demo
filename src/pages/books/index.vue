<template>
    <div id="booksContainer">
        <swiper indicator-dots indicator-color="green" indicator-active-color="skyblue">
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
        <div class="listContainer">
            <div class="nav">
                <span>全部商品</span>
                <span class="more"> > </span>
            </div>
            <ul class="list">
                <li class="listItem" v-for="(bookItem,index) in bookList" :key="index">
                    <img :src="bookItem.image" alt=""/>
                    <p>{{bookItem.title}}</p>
                    <p>{{bookItem.author}}</p>
                </li>               
            </ul>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import bookList from './datas/data.json'
    export default {
        data(){
            return {
                bookList:[]
            }
        },
        mounted(){
            this.bookList=bookList
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #booksContainer
        swiper 
            width 100%
            height 400rpx
            img 
                width 100%
                height 100%
        .listContainer
            padding 10rpx
            .nav
                .more
                    float right
            .list  
                display flex
                flex-wrap wrap
                .listItem
                    width 50%
                    display flex
                    align-items center
                    flex-direction column
                    border-bottom 1px solid #eee
                    &:nth-child(2n+1)
                        border-right 1px solid #eee
                        box-sizing border-box
                    img 
                        margin-top 20rpx
                        width 200rpx
                        height 200rpx
                    p
                        font-size 26rpx
                        line-height 60rpx

</style>
