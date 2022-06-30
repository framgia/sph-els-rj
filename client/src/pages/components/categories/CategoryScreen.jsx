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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CategoryValidation } from "../../../utils/validations/Category";

const CategoryScreen = ({ children }) => {
  const [name, setName] = useState("");
  const [description, setDesription] = useState("");

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppLayout>
      <Paper sx={{ m: 1, p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
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

          <Box component="form" sx={{ mt: 3 }}>
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
