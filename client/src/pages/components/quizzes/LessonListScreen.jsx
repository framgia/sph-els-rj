import AppLayout from "../../../Layouts/AppLayout";
import { Grid, Paper, Typography } from "@mui/material";

import QuizItem from "./LessonItems";

import useSWR from "swr";

const QuizListScreen = () => {
  const { data: quizzes } = useSWR("/category");

  return (
    <AppLayout>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          {quizzes?.map((quiz) => (
            <QuizItem key={quiz.id} {...quiz} />
          ))}
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default QuizListScreen;
