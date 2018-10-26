const {User , Warehouse, UserTransaction} = require('../models')
const nodemailer = require('../helpers/nodemailer')
class AdminController {
    static list(req, res){
        let dataUser = ''
        User.findAll({
            where:{
                role: 1
            }
        })
        .then((data)=>{
            dataUser = data
            return Warehouse.findAll()
        })
        .then((dataWarehouse)=>{
            //res.send(dataWarehouse)
            res.render("template_admin/list" , {dataUser: dataUser, wh: dataWarehouse})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static detail(req, res){
        User.findAll({
            include:[
                {model:Warehouse}
            ],
            where:{id:req.body.customerId}
        })
        .then((data)=>{
            res.render('template_admin/detail-customer', {data})
            // res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static space(req, res){
        
        Warehouse.findAll()
        .then((data)=>{
            res.render('template_customer/space', {data})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
       
}

module.exports = AdminController