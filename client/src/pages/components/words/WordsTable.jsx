import React, { useState, useEffect } from "react";

import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Button,
  Table,
} from "@mui/material";

import useSWR from "swr";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function WordsTable() {
  const { data: words } = useSWR("/words");

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 3, marginBottom: 2, p: 2 }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Category Id
            </TableCell>
            <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>
              Word
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "medium", fontSize: "17px" }}
            >
              Choices
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "medium", fontSize: "17px" }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words?.map((word) => (
            <TableRow
              key={word.category_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {word.category_id}
              </TableCell>
              <TableCell>{word.word}</TableCell>
              <TableCell align="center">wala pa</TableCell>
              <TableCell align="center">
                <Button
                  //   onClick={() => {
                  //     handleOpen(item.id);
                  //     categoryDetails(item.id);
                  //   }}
                  endIcon={<EditIcon />}
                ></Button>
                <Button
                  //   onClick={(e) => handleDelete(item.id)}
                  endIcon={<DeleteIcon />}
                ></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
