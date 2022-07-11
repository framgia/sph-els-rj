import AppLayout from "../../../Layouts/AppLayout";
import { Paper, Box, Typography } from "@mui/material";

import UserTable from "./UserTable";

const CategoryScreen = () => {
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
            Users
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: 2 }}></Box>
        <UserTable />
      </Paper>
    </AppLayout>
  );
};

export default CategoryScreen;
