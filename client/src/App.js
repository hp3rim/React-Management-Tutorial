import React, { Component } from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing(3),
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  },
  progress : {
    margin : theme.spacing(2)
  }
})

class App extends Component {

  state = {
    customers : "",
    complited : 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers : res}))
        .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () =>{
    const { complited } = this.state;
    this.setState({complited : complited >= 100 ? 0 : complited + 1});
  }

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
            this.state.customers ? 
            this.state.customers.map(c => {
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
            :
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.complited}/>
              </TableCell>
            </TableRow>
          }
          </TableBody>
        </Table> 
      </Paper>      
    );
  }
}

export default withStyles(styles)(App);