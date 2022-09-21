import React, { useState, useEffect } from "react";
import axios from "axios";
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
import moment from "moment";
import "./Species.css";

export default function Species(props) {
  const [loaderTwo, setLoaderTwo] = useState(false);
  const [species, setSpecies] = useState([]);

  const getSpecies = async () => {
    setLoaderTwo(true);
    let response = await axios.get("species");
    setSpecies(response.data.results);
    setLoaderTwo(false);
  };

  useEffect(() => {
    getSpecies();
  }, []);

  const speciesDetailsLink = "species";
  return (
    <>
      <div className="films">Species</div>
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
                  <TableCell style={{ color: "#A4A7B7" }}>Classification</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Eye colors</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Hair Color</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Height</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {species.map(
                  (
                    { name, classification, eye_colors, hair_colors, height, created },
                    index
                  ) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className="overview-pointer table-row"
                    >
                      <Link
                        to={`/overview-details/${speciesDetailsLink}`}
                        className="links"
                      >
                        <TableCell style={{ color: "#A4A7B7" }}>
                          <Checkbox />
                        </TableCell>
                      </Link>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell>{classification}</TableCell>
                      <TableCell>{eye_colors}</TableCell>
                      <TableCell>{hair_colors}</TableCell>
                      <TableCell>{height}cm</TableCell>
                      <TableCell>
                        {" "}
                        {moment(created).format("D/MM/YYYY")}
                      </TableCell>
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
