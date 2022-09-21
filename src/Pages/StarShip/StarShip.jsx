import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StarShip.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";

export default function StarShip(props) {
  const [loaderTwo, setLoaderTwo] = useState(false);
  const [startship, setStartship] = useState([]);

  const getStarShip = async () => {
    setLoaderTwo(true);
    let response = await axios.get("starships");
    setStartship(response.data.results);
    setLoaderTwo(false);
  };

  useEffect(() => {
    getStarShip();
  }, []);
  return (
    <>
      <div className="films">Starships</div>
      {loaderTwo ? (
        <Loader />
      ) : (
        <div style={{ height: 400, marginLeft: "45px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#A4A7B7" }}>
                    <Checkbox />
                  </TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Name</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Model</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Class</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Passenger</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Length</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Character</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {startship.map(
                  (
                    { name, model, starship_class, passengers, length, url },
                    index
                  ) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className="overview-pointer table-row"
                    >
                      <Link to="/overview-details" className="links">
                        <TableCell style={{ color: "#A4A7B7" }}>
                          <Checkbox />
                        </TableCell>
                      </Link>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell>
                        {model}
                      </TableCell>
                      <TableCell>{starship_class}</TableCell>
                      <TableCell>{passengers}</TableCell>
                      <TableCell>{length}</TableCell>
                      <TableCell>{url}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
