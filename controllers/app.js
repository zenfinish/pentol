const {User} = require('../models/index.js');
const helpers = require('../helpers/index.js');

class AppController {

    static showIndex(req, res) {
        res.render('index.ejs');
    }

    static showMain(req, res) {
        res.render('main.ejs');
    }
    
    static cekLogin(req, res) {
        req.body.password = helpers.encryptpassword(req.body.password);
        User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
            .then(function(resolve) {
                // res.send(resolve)
                req.session.user = {
                    isLogin: true,
                    UserId: resolve.id,
                    email: resolve.email,
                    role: resolve.role
                }
                if(resolve.role === 0) {
                    res.redirect('/admin')
                }else if(resolve.role === 1) {
                    res.redirect('/customers')
                    // res.send('ini halaman customer')
                }
            })
            .catch(function(reject) {
                res.send(reject);
            });
    }

    static logout(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/');
        })
    }

    static register(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then((result) => {
            res.redirect('/customers')
        }).catch((err) => {
            res.send(err)
        });
    }

}

module.exports = AppController;