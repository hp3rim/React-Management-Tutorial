const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/customers', (req, res) => {
    res.send([
            {
              'id' : 1,
              'image' : 'https://placeimg.com/64/64/any/1',
              'name' : '이동준',
              'birthday' : '891225',
              'gender' : '남자',
              'job' : '웹개발자',
            },
            {
              'id' : 2,
              'image' : 'https://placeimg.com/64/64/any/2',
              'name' : '홍길동',
              'birthday' : '190123',
              'gender' : '남자',
              'job' : '의적',
            },
            {
              'id' : 3,
              'image' : 'https://placeimg.com/64/64/any/3',
              'name' : '하니',
              'birthday' : '911015',
              'gender' : '여자',
              'job' : '마라토너',
            }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));