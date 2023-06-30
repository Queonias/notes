const { Router } = require('express');
const router = Router();
const { 
    logout, 
    renderSingUpForm, 
    renderSinginForm, 
    signin, 
    signup 
} = require('../controllers/users.contrller');

router.get('/users/signup', renderSingUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSinginForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router;