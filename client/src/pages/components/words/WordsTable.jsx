import React, { useState, useEffect } from "react";

import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TextField,
  Grid,
  Box,
  TableCell,
  TableBody,
  Button,
  Modal,
  Table,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import WordsApi from "./index";
import useSWR, { mutate } from "swr";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import apiClient from "../../../utils/axios";
import { useSnackbar } from "notistack";

export default function WordsTable() {
  const { category_id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [rowId, setRowId] = useState("");
  const [word, setWord] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const wordDetails = (id) => {
    apiClient.get(`/words/${id}`).then((res) => {
      setRowId(id);
      setWord(res.data.word);
    });
  };

  console.log(rowId);
  console.log(word);

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

  const { data: words } = useSWR(`/category/${category_id}/words`);

  const handleDeleteWord = (id) => {
    WordsApi.delete(id).then(() => {
      mutate(`/category/${category_id}/words`);
      enqueueSnackbar("Word Deleted Successfully");
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    WordsApi.update(word, rowId).then(() => {
      mutate(`/category/${category_id}/words`);
      enqueueSnackbar("Word Updated Successfully");
      setOpen(false);
    });
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 3, marginBottom: 2, p: 2 }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Category Id
            </TableCell>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Word
            </TableCell>

            <TableCell
              align="center"
              sx={{ fontWeight: "medium", fontSize: "17px" }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words?.map((word) => (
            <TableRow
              key={word.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {word.category_id}
              </TableCell>
              <TableCell>{word.word}</TableCell>

              <TableCell align="center">
                <Button
                  onClick={() => {
                    handleOpen(word.id);
                    wordDetails(word.id);
                  }}
                  endIcon={<EditIcon />}
                ></Button>
                <Button
                  onClick={(e) => handleDeleteWord(word.id)}
                  endIcon={<DeleteIcon />}
                ></Button>
                <Link
                  to={`/category/${word.category_id}/word/${word.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button>Add Choices</Button>
                </Link>
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
            Word Information
          </Typography>

          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="word"
                  label="Word Name"
                  name="word"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
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
