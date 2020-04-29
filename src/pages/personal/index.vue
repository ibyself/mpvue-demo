<template>
    <div id="personalContainer">
        <div class="header">
            <img :src="userInfo?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
            <button @getuserinfo="handleGetUserInfo" open-type="getUserInfo">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return {
                userInfo:{}
            }
        },
        mounted(){
            wx.getUserInfo({
                success: (result)=>{
                    // console.log(result)
                    this.userInfo=result.userInfo
                },
                fail: ()=>{
                    console.log('获取失败')
                },
            });
        },
        methods:{
            handleGetUserInfo(msg){
                // console.log(msg)
                if(msg.mp.detail.userInfo){
                    this.userInfo=msg.mp.detail.userInfo
                }
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' >
    #personalContainer
        .header
            background #02a774
            padding 40rpx 0
            img 
                width 100rpx
                height 100rpx
                border-radius 50px
                vertical-align middle
                margin 0 20rpx 0 40rpx
            button
                display inline-block
                height 60rpx
                line-height 60rpx
                vertical-align middle
                text-align center
                background rgba(0,0,0,.3)
                font-size 26rpx
                color white

 
</style>
