import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

// columns with a field of drinkId, drink name, quantity;
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Drink' },
  { id: 'quantity', label: 'Quantity' }
]

// function to create a row following column syntax
function createData(id, name, quantity) {
  return { id, name, quantity };
}

// example data for rendering rows
const rows = [
  createData(22, "Jack and coke", 5),
  createData(13, "redbull and vodka", 2),
  createData(40, "Jack Daniels Float", 10),
  createData(5, "hand grenade", 8),
  createData(62, "Shark Attack", 5),
  createData(37, "JaegarBombs", 11),
  createData(70, "Irish Car Bombs", 1)
]

const ShoppingList = () => {

  // hooks for TablePagination
  const [count, setCount] = useState(rows.length);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  // changes the current page
  // handles changing the page count
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  }
const handleChangeRowsCount = (event) => {
  setRowsPerPage(event.target.value);
  setPage(0);
}


  //Table Pagination Tag
  const pageSetup = (
    <TablePagination  
    rowsPerPageOptions={[5, 10, 15]}
    rowsPerPage={rowsPerPage}
    page={page}
    count={count}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsCount}
    />
  )

  // render on change
  // useEffect here

  return (
    <Paper >
      <TableContainer >
        <Table stickyHeader >
          <TableHead>
            <TableRow>

              {columns.map((column) => {
                return (
                  <TableCell
                    key={column.id} > {column.label} </TableCell>
                )
              })}

            </TableRow>
          </TableHead>
          <TableBody >
            {
              rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow key={row.id} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return <TableCell key={column.id} >
                        {value}
                      </TableCell>
                    })}
                  </TableRow>
                )
              })
            }
            <TableRow >
            {pageSetup}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    </Paper>

  )
}


export default ShoppingList;