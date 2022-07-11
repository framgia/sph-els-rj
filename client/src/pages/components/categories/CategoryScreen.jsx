import React, { useState } from "react";
import AppLayout from "../../../Layouts/AppLayout";
import {
  Button,
  Paper,
  Box,
  Modal,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryTable from "./CategoryTable";
import { style } from "../commons/modal/modalStyle";
import { mutate } from "swr";
import CategoryApi from "./index";

import { useSnackbar } from "notistack";

const CategoryScreen = ({ children }) => {
  const [name, setName] = useState("");
  const [description, setDesription] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitHandler = (e) => {
    e.preventDefault();
    CategoryApi.store(name, description).then((res) => {
      mutate("/category");
      enqueueSnackbar(`${res.data.message}`);
      handleClose();

      setDesription("");
      setName("");
    });
  };

  return (
    <AppLayout>
      <Paper sx={{ m: 1, p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ p: 1, fontWeight: "500" }}>
            Categories
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={handleOpen}
            endIcon={<AddBoxIcon />}
          >
            Create Category
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
          <CategoryTable />
        </Box>
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Category
          </Typography>

          <Box component="form" onSubmit={submitHandler} sx={{ mt: 3 }}>
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
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </AppLayout>
  );
};

export default CategoryScreen;
