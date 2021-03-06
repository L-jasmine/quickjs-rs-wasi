import {GET,POST,PUT,PATCH,DELETE} from 'http'
import {require} from 'require'
const add = require('./example_js/add.js')
print("add:",add(1,2))

if(true){
    print('get-test')
    let r = GET("http://18.235.124.214/get?a=123",{"a":"b","c":[1,2,3]})
    print(r.status)
    let headers = r.headers
    print(JSON.stringify(headers))
    let body = r.body;
    let body_str = new Uint8Array(body)
    print(String.fromCharCode.apply(null,body_str))
}

if(false){
    print('post-test')
    let r1 = POST("http://18.235.124.214/post?a=123","haha=1",{"a":"b","c":[1,2,3]})
    print(r1.status)
    let headers1 = r1.headers
    print(JSON.stringify(headers1))
    let body1 = r1.body
    let body_str1 = new Uint8Array(body1)
    print(String.fromCharCode.apply(null,body_str1))
}

if(false){
    print('put-test')
    let r = PUT("http://18.235.124.214/put?a=123","haha=1",{"a":"b","c":[1,2,3]})
    print(r.status)
    let headers = r.headers
    print(JSON.stringify(headers))
    let body = r.body
    let body_str = new Uint8Array(body)
    print(String.fromCharCode.apply(null,body_str))
}

if(false){
    print('patch-test')
    let r = PATCH("http://18.235.124.214/patch?a=123","haha=1",{"a":"b","c":[1,2,3]})
    print(r.status)
    let headers = r.headers
    print(JSON.stringify(headers))
    let body = r.body
    let body_str = new Uint8Array(body)
    print(String.fromCharCode.apply(null,body_str))
}

if(true){
    print('delete-test')
    let r = DELETE("http://18.235.124.214/delete?a=123","haha=1");
    print(r.status)
    let headers = r.headers
    print(JSON.stringify(headers))
    let body = r.body;
    let body_str = new Uint8Array(body)
    print(String.fromCharCode.apply(null,body_str))
}