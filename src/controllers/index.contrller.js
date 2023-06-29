const indexCtrl = {}

indexCtrl.renderIndex = (_req, res) => {
    res.render('index')   
}

indexCtrl.renderAbout = (_req, res) => {
    res.render('about')   
}

module.exports = indexCtrl;