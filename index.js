const app = require('./src/app');
require('./src/database')

app.listen(app.get('port'), () => {
    console.log('Server listening on', app.get('port'));
});