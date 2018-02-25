// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/user/register',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    models.Login.find({account: req.body.account}, (err,data) => {
        if (err) {
            console.log(err)
            // res.send(err);
            let newAccount = new models.Login({
                account : req.body.account,
                password : req.body.password
            });
            // 保存数据newAccount数据进mongoDB
            newAccount.save((err,data) => {
                if (err) {
                    res.send({'status': 1001, 'message': 'Fail to register!', 'data': err});
                } else {
                    res.send({'status': 1000, 'message': 'Register successfully!'});
                }
            });
        } else {
            console.log(data)
            if (data.length > 0) {
                res.send({'status': 1001, 'message': 'The account is already registered!'});
            } else {
                let newAccount = new models.Login({
                    account : req.body.account,
                    password : req.body.password
                });
                // 保存数据newAccount数据进mongoDB
                newAccount.save((err,data) => {
                    if (err) {
                        res.send({'status': 1001, 'message': 'Fail to register!', 'data': err});
                    } else {
                        res.send({'status': 1000, 'message': 'Register successfully!'});
                    }
                });
            }
        }
    });

    // let newAccount = new models.Login({
    //     account : req.body.account,
    //     password : req.body.password
    // });
    // // 保存数据newAccount数据进mongoDB
    // newAccount.save((err,data) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send({'status': 1000, 'message': 'Register successfully!'});
    //     }
    // });
});
// 获取已有账号接口
router.post('/api/user/login',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find({account: req.body.account, password: req.body.password}, (err,data) => {
        if (err) {
            // res.send(err);
            res.send({'status': 1001, 'message': 'The account is not existed!', 'data': err});
        } else {
            console.log(data)
            if (data.length > 0) {
                res.send({'status': 1000, 'message': 'Login successfully!', 'data': data});
            } else {
                res.send({'status': 1001, 'message': 'The account is not existed!', 'data': err});
            }
        }
    });
});
// 获取所有账号接口
router.get('/api/user/all',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;