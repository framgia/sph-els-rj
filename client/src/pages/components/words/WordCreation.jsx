import React, { useState } from "react";
import AppLayout from "../../../Layouts/AppLayout";
import ChoiceCreation from "./ChoiceCreation";
import { Button, Paper, Box, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import apiClient from "../../../utils/axios";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useSnackbar } from "notistack";
import WordsTable from "./WordsTable";
import { mutate } from "swr";

const WordCreation = () => {
  const { category_id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [word, setWord] = useState("");

  const handleAddWordSubmit = (e) => {
    e.preventDefault();

    apiClient.post("/words", { category_id, word }).then((res) => {
      if (res.status === 200) {
        mutate("/words");
        enqueueSnackbar(`${res.data.message}`);
        setWord("");
      } else {
        enqueueSnackbar("The word has already been taken", {
          variant: "error",
        });
      }
    });
  };

  return (
    <AppLayout>
      <Paper sx={{ m: 1, p: 3, boxShadow: 5 }}>
        {" "}
        <Link to={"/lessons"} style={{ textDecoration: "none" }}>
          <Button startIcon={<ArrowBackIcon />}>Back</Button>
        </Link>
        <Box sx={{ marginTop: 2 }}>
          <form onSubmit={handleAddWordSubmit}>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              label="Add Word"
              variant="outlined"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" variant="outlined">
                Save
              </Button>
            </Box>
          </form>
        </Box>
        <WordsTable />
      </Paper>
      <ChoiceCreation />
    </AppLayout>
  );
};

export default WordCreation;
