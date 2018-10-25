const {User , Warehouse, UserTransaction} = require('../models')

class AdminController {
    static list(req, res){
        let dataUser = ''
        User.findAll()
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
        UserTransaction.findAll({
            include:[{model:Warehouse}],
            where:{UserId:req.body.customerId}
        })
        .then((data)=>{
            res.render('detail-customer', {data})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = AdminController