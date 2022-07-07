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
import WordSelect from "./WordSelect";

const ChoiceCreation = () => {
  const [inputFields, setInputFields] = useState([
    { choiceName: "", isCorrect: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
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

  return (
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

      <Box>
        <WordSelect />
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
  );
};

export default ChoiceCreation;
