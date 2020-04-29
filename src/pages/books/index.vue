<template>
    <div id="booksContainer">
        <swiper indicator-dots indicator-color="green" indicator-active-color="skyblue">
            <swiper-item v-for="(book, index) in newBooksList" :key="index">
                <img :src="book.image"/>
            </swiper-item>
        </swiper>
        <div class="listContainer">
            <div class="nav">
                <span>全部商品</span>
                <span @click="toBooksList" class="more"> > </span>
            </div>
            <ul class="list">
                <li class="listItem" v-for="(bookItem,index) in booksList" :key="index">
                    <img :src="bookItem.image" alt=""/>
                    <p>{{bookItem.title}}</p>
                    <p>{{bookItem.author}}</p>
                </li>               
            </ul>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import booksList from './datas/data.json'
    export default {
        data(){
            return {
                booksList:[]
            }
        },
        mounted(){
            this.booksList=booksList
        },
        computed:{
            newBooksList(){
                return [...this.booksList].splice(0,4)
            }
        },
        methods:{
            toBooksList(){
                wx.navigateTo({
                    url: '/pages/booksList/main?booksList='+JSON.stringify(this.booksList)
                });
            }
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
