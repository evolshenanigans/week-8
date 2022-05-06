import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls} from '../../api';
import { useGetData } from '../../custom-hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from'@mui/material';
import { CarForm } from '../../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'model',
    headerName: 'model',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'description',
    width: 200,
    editable: true,
  },
  {
    field: 'year',
    headerName: 'year',
    width: 150,
    editable: true,
  },
  {
    field: 'engine',
    headerName: 'engine',
    width: 110,
    editable: true,
  },
  {
    field: 'max_speed',
    headerName: 'max_speed',
    width: 110,
    editable: true,
  },
  {
    field: 'owners',
    headerName: 'owners',
    width: 110,
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'weight',
    width: 110,
    editable: true,
  },
  {
    field: 'spec_version',
    headerName: 'spec_version',
    editable: true,
    width: 160,

  },
  {
    field: 'series',
    headerName: 'series',
    editable: true,
    width: 160,

  },
];

interface gridData{
  data:{
    id?:string;
  }
}
export const DataTable = () => {
  let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true);
  }
  let handleClose = () => {
    setOpen(false);
  }
  let deleteData = async () => {
    await serverCalls.delete(`${gridData[0]}`)
    getData();
  }

  console.log(gridData)
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Project D Inventory</h2>
        <DataGrid
          rows={carData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={newSelectionModel => {setData(newSelectionModel)}}
          {...carData}
        />
        <Button onClick={handleOpen} color="primary">Update</Button>
        <Button onClick={deleteData} color='warning'>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title ">
          <DialogTitle id='form-dialog-title'>Update a car</DialogTitle>
          <DialogContent>
            <DialogContentText> Updating Car ID: {gridData[0]}</DialogContentText>
            <CarForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }