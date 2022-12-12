import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontSize: 20,
    background: '#ebecf0',
    boxShadow: '-5px -5px 20px #fff, 5px 5px 20px #babecc',
    '& th': {
      fontWeight: 'bold',
    },
    '& th, & td': {
      fontSize: 14,
    },
  },
});

export default function BasicTable({ students }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">CGPA</TableCell>
            <TableCell align="center">Batch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(( profile ) => (
            <TableRow key={profile.name}>
              <TableCell align="center">{profile.id}</TableCell>
              <TableCell component="th" scope="row">{profile.name}</TableCell>
              <TableCell align="center">{profile.email}</TableCell>
              <TableCell align="center">{profile.cgpa}</TableCell>
              <TableCell align="center">{profile.batch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
