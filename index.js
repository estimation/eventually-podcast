const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';
const host = '0.0.0.0';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(
      'index', {
      title: 'Comming Soon!',
      mainText: 'Eventually Podcast',
      subText: `Drop your email address below and we will let you know \
          when we launch the Eventually Podcast. <br>Brought to you by \
          amazing people`
      }
  );
});

app.listen(port, host, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
})
