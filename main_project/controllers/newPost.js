"use strict";

module.exports = (req, res) => {
    if(req.session.userId){
        return res.render('create', {
            createPost: true
        })
    }else {
        res.redirect('/auth/login')
    }
}