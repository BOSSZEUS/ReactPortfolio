
// connection to mongo db if needed
module.export = require('mongoose').connect('mongodb:localhost/tododb', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true

})