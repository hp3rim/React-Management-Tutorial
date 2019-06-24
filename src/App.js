import React, { Component } from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing(3),
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(t => {
              return ( 
                <Customer 
                  key={t.id}
                  id={t.id}
                  name={t.name}
                  image={t.image}
                  birthday={t.birthday}
                  gender={t.gender}
                  job={t.job}
                />          
              );
            })
          }
          </TableBody>
        </Table> 
      </Paper>      
    );
  }
}

export default withStyles(styles)(App);