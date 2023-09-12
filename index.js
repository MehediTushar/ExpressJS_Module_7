// const app=require('./app');

// app.listen(5500,function(){
//     console.log('Listening on port 5500');
// });
const app = require('./app');

const port = process.env.RUNNING_PORT || 5500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});