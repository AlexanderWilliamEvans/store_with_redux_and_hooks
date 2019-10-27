import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { fetchMerchandise } from '../../api/api';
import { Messages } from '../Messages/Messages';
import * as types from '../../api/api';

const useStyles = makeStyles(theme =>({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));


 /*const getRows = async() => {
    const data = await fetchMerchandise();
    const table =[];
    let key;
    try{
        debugger;
        for(key in data){
            if (data.hasOwnProperty(key)) {
                table.push(
                    {
                     id: data[key].id,
                     name: data[key].name,
                     username: data[key].username,
                     email:data[key].email
                    }
                );
              }
        }
    }
    catch(e){
        console.error('Failed to get table: ' + e.toString());
    }
    debugger;
    return table;
};*/



export function Merchandise() {


    const classes = useStyles();

    const  rows  = useSelector(state => (state.merchandise));
    const dispatch = useDispatch();


    const getRows = () => {
      debugger;
      dispatch({ type: 'LIST_MERCHANDISE'})
    }

    const search = (e) => {
      dispatch({type:'SEARCH_IN_MERCHANDISE', payload: e.target.value.toString()});
    }

    const filter = (e) => {
      dispatch({type:'FILTER_MERCHANDISE', payload: e.target.value.toString()});
    }

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
         // await getRows();
         const r = await getRows();
         debugger;
          if(!ignore){
          
             
          }
        }
        debugger;
       fetchData();
        return () => { ignore = true; }
      }, []);



    if(rows === null || rows === undefined || rows.length > 0){
        return(
            <Container fixed>
             <Messages/>
            </Container>
   
    );
}
    else{
        return(
            <Container fixed style={{marginTop:'5em'}}>
             <TextField id="outlined-full-width" label="Label" style={{ margin: 8 }} placeholder="Sök efter en specifik person..." fullWidth margin="normal" variant="outlined" InputLabelProps={{shrink: true,}}/>
             <br/>
             <br/>
             <Paper className={classes.root}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">Namn</TableCell>
                            <TableCell align="right">Användarnamn</TableCell>
                            <TableCell align="right">e-mail</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>  
            </Container>
        );
       
    }
} 