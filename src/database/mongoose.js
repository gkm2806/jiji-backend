import mongoose from "mongoose"

mongoose.connect("mongodb+srv://deploy:deploy@cluster0-ljd0z.mongodb.net/startup?retryWrites=true",{ useNewUrlParser: true } )
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
mongoose.set('find', false)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {console.log("Connected to DB")});

export default db;