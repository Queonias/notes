const User = require('../models/User');
const usersCtrl = {};
const passport = require('passport');

usersCtrl.renderSingUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password} = req.body;
    if (password !== confirm_password) {
        errors.push({ text: 'Passwords do not match'});
    }
    if (password.length < 4) {
        errors.push({ text: 'Passwords must be at least 4 characters long.'});
    }
    if (errors.length > 0) {
        res.render('users/signup', { 
            errors,
            name,
            email,
            password,
            confirm_password
        });
    } else {
       const emailUser = await User.findOne({email: email});
       if (emailUser) {
        req.flash('error_msg', 'The email you entered is already in use.');
        res.redirect('/users/signup');
    } else {
        const newUser = new User({ name, email, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'You are registered');
        res.redirect('/users/signin');
       }
    }
};

usersCtrl.renderSinginForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
})

usersCtrl.logout = (req, res, next) => {
    req.logout(err => {
        if (err) {
            return next(err);
        }
        req.flash('success_msg', 'You are now logged out');
        res.redirect('/users/signin');
    });
};



module.exports = usersCtrl;