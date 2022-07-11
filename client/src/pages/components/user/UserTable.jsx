import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

import useSWR from "swr";

export default function DenseTable() {
  const { data: users } = useSWR("/users");

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 3, marginBottom: 2, p: 2 }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              First Name
            </TableCell>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Last Name
            </TableCell>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Email
            </TableCell>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Is Admin
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.first_name}
              </TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.is_admin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
