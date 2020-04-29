<template>
    <ul class="booksList">
        <li class="booksItem" v-for="(books,index) in booksList" :key="index">
            <img :src="books.image" alt="">
            <div class="booksInfo">
                <p class="title">{{books.title}}</p>
                <p class="author">作者：{{books.author}}</p>
                <p class="publisher">出版社：{{books.publisher}}</p>
            </div>
            <div class="booksPrice">{{books.price}}</div>
        </li>
    </ul>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return {
                booksList:[]
            }
        },
        mounted(){
            if(this.$mp){
                this.booksList=JSON.parse(this.$mp.query.booksList)
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .booksList
        .booksItem
            display flex
            padding 10rpx
            img
                width 140rpx
                height 140rpx
            .booksInfo
                margin-left 20rpx
                width 70%
                p
                    font-size 28rpx
                    line-height 50rpx
            .booksPrice
                font-size 30rpx
                font-weight bold
                color red
</style>
