import { Routes, BrowserRouter, Route } from "react-router-dom";
import SignUpScreen from "./components/registration/SignUpScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import LoginScreen from "./components/auth/LoginScreen";
import UserScreeen from "./components/user/UserScreen";
import WordCreation from "./components/words/WordCreation";
import CategoryScreen from "./components/categories/CategoryScreen";
import ChoiceCreation from "./components/choices/ChoiceCreation";
import LessonListScreen from "./components/quizzes/LessonListScreen";
import Quiz from "./components/quizzes/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DashboardScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/lessons" element={<CategoryScreen />} />
        <Route path="/users" element={<UserScreeen />} />
        <Route path="/category/:category_id/word" element={<WordCreation />} />
        <Route
          path="/category/:category_id/word/:word_id"
          element={<ChoiceCreation />}
        />
        <Route path="/quizzes" element={<LessonListScreen />} />
        <Route path="/quiz/:category_id" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
