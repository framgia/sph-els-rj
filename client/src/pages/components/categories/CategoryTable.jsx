import React, { useState, useEffect } from "react";

import {
  Paper,
  Button,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Typography,
  Modal,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import useSWR, { mutate } from "swr";
import apiClient from "../../../utils/axios";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import CategoryApi from ".";

export default function DenseTable() {
  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [rowId, setRowId] = useState("");
  const [description, setDesription] = useState("");

  const categoryDetails = (id) => {
    CategoryApi.show(id).then(({ data }) => {
      setRowId(id);
      setName(data.name);
      setDesription(data.description);
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { data: categories } = useSWR(`/category`);

  const handleDelete = (id) => {
    CategoryApi.delete(id).then((res) => {
      mutate("/category");
      enqueueSnackbar("Category Deleted Successfully");
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    CategoryApi.update(name, description, rowId).then(() => {
      mutate("/category");
      enqueueSnackbar("Category Updated Successfully");
      setOpen(false);
    });
  };

  console.log(rowId);

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 3, marginBottom: 2, p: 2 }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Description
            </TableCell>
            <TableCell
              sx={{ fontWeight: "medium", fontSize: "17px" }}
              align="center"
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell align="center">
                <Link
                  to={`/category/${item.id}/word`}
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="outlined" startIcon={<AddIcon />}>
                    Add Word
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    handleOpen(item.id);
                    categoryDetails(item.id);
                  }}
                  endIcon={<EditIcon />}
                ></Button>
                <Button
                  onClick={(e) => handleDelete(item.id)}
                  endIcon={<DeleteIcon />}
                ></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Category Information
          </Typography>

          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Category Name"
                  name="category_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  value={description}
                  onChange={(e) => setDesription(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Changes
            </Button>
          </Box>
        </Box>
      </Modal>
    </TableContainer>
  );
}
