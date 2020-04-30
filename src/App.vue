<script  type="text/ecmascript-6">
    import request from './utils/request'
    export default {
        mounted(){
            wx.login({
                success: async(msg)=>{
                    // console.log(msg)
                    let code=msg.code
                    let result=await request('/getOpenId',{code})
                    wx.setStorageSync("token", result);
               }
            });
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    page
        width 100%
        height 100%
 
</style>
