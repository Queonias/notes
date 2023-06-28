const app = require('./app');
require('./database')

app.listen(app.get('port'), () => {
    console.log('Server listening on', app.get('port'));
});