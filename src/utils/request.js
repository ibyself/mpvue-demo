import config from './config'
export default (url,data={},method="GET")=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:config.host+url,
            data,
            method,
            success:(response)=>{
                resolve(response.data)
            },
            fail:(error)=>{
                reject(error)
            }
        })
    })
}