import app from './app'
import './database'


app.listen(app.get('port'))
console.log('servidor ejecutandose en el puerto', app.get('port'));