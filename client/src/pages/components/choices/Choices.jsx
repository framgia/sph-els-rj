import React, { useState } from "react";
import {
  Paper,
  TextField,
  Box,
  Button,
  Chip,
  Typography,
  Stack,
  Modal,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import apiClient from "../../../utils/axios";
import ChoiceApi from "./index";

const Choices = () => {
  const { word_id } = useParams();

  const [name, setName] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [cid, setCid] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const { data: choices } = useSWR(`/words/${word_id}/choices`);

  const handleDelete = (id) => {
    ChoiceApi.delete(id).then(() => {
      mutate(`/words/${word_id}/choices`);
      alert("deleted");
    });
  };

  const choiceDetails = (id) => {
    ChoiceApi.show(id).then(({ data }) => {
      setCid(data.id);
      setName(data.choice_name);
      setIsCorrect(data.is_correct);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    ChoiceApi.update(name, isCorrect, cid).then(() => {
      mutate(`/words/${word_id}/choices`);
      setOpen(false);
      alert("updated");
    });
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

  console.log(choices);
  return (
    <Paper sx={{ m: 1, p: 3, boxShadow: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {choices && choices.length > 0 ? (
          choices?.map((choice) => (
            <Button
              value={name}
              onClick={() => {
                handleOpen();
                choiceDetails(choice.id);
              }}
            >
              <Chip
                label={choice.choice_name}
                value={choice.choice_name}
                color="primary"
                onClick={() => handleOpen()}
                onDelete={() => handleDelete(choice.id)}
                // deleteIcon={<DeleteIcon />}
              />
            </Button>
          ))
        ) : (
          <Typography>No Choices</Typography>
        )}
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choice Information
          </Typography>

          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="choice"
                  label="Choice Name"
                  name="choice_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="is_correct"
                  label="Is Correct"
                  name="is_correct"
                  value={isCorrect}
                  onChange={(e) => setIsCorrect(e.target.value)}
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
    </Paper>
  );
};

export default Choices;
