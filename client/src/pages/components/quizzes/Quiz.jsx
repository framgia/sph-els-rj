import React, { useState } from "react";
import AppLayout from "../../../Layouts/AppLayout";
import { answerChoice } from "../../../actions/answerActions";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  CircularProgress,
  Container,
  Button,
  Box,
  MobileStepper,
  Typography,
} from "@mui/material";

import useSWR from "swr";
import { useParams } from "react-router-dom";
import answersApi from "./index";

const Quiz = () => {
  const dispatch = useDispatch();

  const userAnswers = useSelector((state) => state.answers);

  const { answers } = userAnswers;

  const { category_id } = useParams();

  const [activeStep, setActiveStep] = useState(0);

  const { data: questions } = useSWR(`/quiz/${category_id}`);

  const words = questions?.words.map((word) => ({
    word: word.word,
    id: word.id,
  }));

  const choices = questions?.words[activeStep].choices;

  const maxSteps = words?.length;

  const handleNext = () => {
    if (activeStep !== maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      console.log("submitted");
      answersApi.store(userAnswers, category_id);
    }
  };

  const storeAnswer = (id, word_id) => {
    dispatch(answerChoice(id, word_id));
  };

  console.log(userAnswers);

  if (!choices) return <CircularProgress />;

  return (
    <AppLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
          gap: 2,
        }}
      >
        <Paper sx={{ p: 1, width: "100%", boxShadow: 3 }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                m: 1,
                border: 1,
                borderColor: "rgba(0, 0, 0, 0.38)",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  p: 1.5,
                  bgcolor: "#1976d2",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {`Question ${activeStep + 1}`}
              </Typography>

              <Box sx={{ width: "100%", p: 2 }}>
                <Typography align="center">{words[activeStep].word}</Typography>
              </Box>

              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: 1,
                  marginBottom: 3,
                  p: 2,
                }}
              >
                {choices.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      m: 1,
                      p: 1,
                      border: 1,
                      borderRadius: 1,
                      // bgcolor: selected ? "#1976d2" : "",
                      ":hover": { bgcolor: "#1976d2" },
                    }}
                  >
                    <input
                      type="checkbox"
                      required
                      // value={selected}
                      // onChange={() => setIsSelected(item.id)}
                      onClick={() => {
                        storeAnswer(item.id, words[activeStep].id);
                      }}
                    />
                    {item.choice_name}
                    {/* <IconButton
                      disableRipple
                      size="small"
                     
                      sx={{ color: "black" }}
                    >
                    
                    </IconButton> */}
                  </Box>
                ))}
              </Box>
            </Box>

            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="medium"
                  type="submit"
                  onClick={handleNext}
                  variant="contained"
                >
                  {activeStep === maxSteps - 1 ? "Submit Quiz" : "Next"}
                </Button>
              }
              // backButton={
              //   <Button size="medium" onClick={handleBack} variant="contained">
              //     Back
              //   </Button>
              // }
            />
          </Container>
        </Paper>
      </Box>
    </AppLayout>
  );
};

export default Quiz;
