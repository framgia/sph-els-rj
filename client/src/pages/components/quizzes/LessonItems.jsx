import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import InfoIcon from "@mui/icons-material/Info";
import { useParams, useNavigate } from "react-router-dom";
const QuizItem = ({ description, name, id }) => {
  const navigate = useNavigate();

  const startQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <Paper sx={{ m: 1, p: 2, boxShadow: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle">{description}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          size="medium"
          endIcon={<ArrowCircleRightIcon sx={{ fontSize: "20px" }} />}
          onClick={() => startQuiz(id)}
        >
          Start Lesson
        </Button>
      </Box>
    </Paper>
  );
};

export default QuizItem;
