import React, { Component } from 'react';
import Customer from './components/Customer';

const customers = [
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
  },
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return ( 
              <Customer 
                key={c.id}
                id={c.id}
                name={c.name}
                image={c.image}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />          
            );
          })
        }
      </div>      
    );
  }
}

export default App;