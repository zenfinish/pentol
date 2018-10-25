function statusLogin(req, res, next) {
    //res.send(req.session)
    if(req.session.user) {
        next();
    }else{
        res.redirect('/');
    }
}

module.exports = statusLogin;