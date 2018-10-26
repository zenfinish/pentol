const {Warehouse, UserTransaction, DetailUserTransaction} = require('../models/index.js');

class CustomerController {

    static showMain(req, res) {
        Warehouse.findAll()
            .then(function(resolve) {
                res.render('template_customer/customer.ejs', {resolve});
            })
            .catch(function(reject) {
                res.send(reject);
            }); 
    }

    static pesan(req, res) {
        Warehouse.findOne({
            where : {
                id: req.params.WarehouseId
            }
        })
            .then(function(resolve) {
                res.render('template_customer/pesan.ejs', {resolve});
                // res.send(resolve)
            })
            .catch(function(reject) {
                res.send(reject);
            }); 
    }

    static savePesan(req, res) {
        UserTransaction.create({
            UserId: req.session.user.UserId,
            WarehouseId: req.params.WarehouseId
        })
            .then(function(resolve) {
                let start = new Date();
                let finish = new Date();
                let UserTransactionId = resolve.id;

                let data = [];
                for(let i = 0; i < req.body.qty; i++) {
                    data.push({
                        start: start,
                        finish: finish,
                        UserTransactionId: UserTransactionId
                    });
                }
                DetailUserTransaction.bulkCreate(data)
                    .then(function(resolve) {
                        let stock = 
                        Warehouse.update(
                            {
                                where: {
                                    id: req.params.WarehouseId
                                }
                            }
                        )
                            .then(function(resolve) {
                                res.redirect('/customers');
                            })
                            .catch(function(reject) {
                                res.send(reject);
                            });         
                                        
                    })
                    .catch(function(reject) {
                        res.send(reject);
                    }); 
            })
            .catch(function(reject) {
                res.send(reject);
            }); 
    }

}

module.exports = CustomerController;