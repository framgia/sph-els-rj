import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Box,
  Button,
  Checkbox,
  Chip,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AppLayout from "../../../Layouts/AppLayout";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useSWR, { mutate } from "swr";
import apiClient from "../../../utils/axios";
import Choices from "./Choices";
import ChoiceApi from "./index";

const ChoiceCreation = () => {
  const { category_id, word_id } = useParams();
  const [inputFields, setInputFields] = useState([
    { choiceName: "", isCorrect: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    const choice_name = inputFields.map((data) => data.choiceName);
    const is_correct = inputFields.map((data) => data.isCorrect);
    ChoiceApi.store(word_id, choice_name, is_correct).then(({ status }) => {
      if (status === 200) {
        // setInputFields(inputFields.choiceName === "");
        mutate(`/words/${word_id}/choices`);
        setInputFields([]);
      }
    });
  };

  const handleChangeInput = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { choiceName: "", isCorrect: "" }]);
  };

  const handleRemoveFields = (ndx) => {
    const values = [...inputFields];
    values.splice(ndx, 1);
    setInputFields(values);
  };

  const { data: word } = useSWR(`/words/${word_id}`);

  return (
    <AppLayout>
      <Paper sx={{ m: 1, p: 3, boxShadow: 5 }}>
        <Link
          to={`/category/${category_id}/word`}
          style={{ textDecoration: "none" }}
        >
          <Button startIcon={<ArrowBackIcon />}>Back</Button>
        </Link>
        <Box
          sx={{
            marginTop: 1,
          }}
        >
          <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
            {word?.word.toUpperCase()}
          </Typography>
          <Typography align="center" sx={{ fontSize: "15px" }}>
            Word
          </Typography>

          <hr />
        </Box>
      </Paper>
      <Choices />
      <Paper sx={{ m: 1, p: 3, boxShadow: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 3,
          }}
        >
          <Typography variant="h5" color="primary">
            Choices
          </Typography>
          <Button
            size="medium"
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={() => handleAddFields()}
          >
            ADD CHOICE
          </Button>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: 3,
          }}
        >
          {inputFields.map((inputFields, index) => (
            <div key={index} style={{ marginTop: 20 }}>
              <Checkbox
                size="medium"
                name="isCorrect"
                value="1"
                onChange={(event) => handleChangeInput(index, event)}
              />
              <TextField
                required
                sx={{ width: "92%" }}
                name="choiceName"
                label="Choice Name"
                value={inputFields.choiceName}
                onChange={(event) => handleChangeInput(index, event)}
              />

              <IconButton
                variant="contained"
                onClick={() => handleRemoveFields(index)}
              >
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button type="submit" variant="contained">
              SAVE
            </Button>
          </Box>
        </Box>
      </Paper>
    </AppLayout>
  );
};

export default ChoiceCreation;
