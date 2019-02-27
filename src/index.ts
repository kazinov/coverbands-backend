import { app } from './api/app';

const port = process.env.PORT || 3000;

console.error('env', process.env.NODE_ENV)
app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
});