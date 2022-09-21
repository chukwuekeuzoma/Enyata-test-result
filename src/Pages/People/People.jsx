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
import "./People.css";

function People(props) {
  const [loaderTwo, setLoaderTwo] = useState(false);
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    setLoaderTwo(true);
    let response = await axios.get("people");
    setPeople(response.data.results);
    setLoaderTwo(false);
  };

  useEffect(() => {
    getPeople();
  }, []);

  const peopleDetailsLink = "people";

  return (
    <>
      <div className="films">People</div>
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
                  <TableCell style={{ color: "#A4A7B7" }}>Birth year</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Gender</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Hair Color</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Height</TableCell>
                  <TableCell style={{ color: "#A4A7B7" }}>Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {people.map(
                  (
                    { name, birth_year, gender, hair_color, height, created },
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
                        to={`/overview-details/${peopleDetailsLink}`}
                        className="links"
                      >
                        <TableCell style={{ color: "#A4A7B7" }}>
                          <Checkbox />
                        </TableCell>
                      </Link>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell>{birth_year}</TableCell>
                      <TableCell>{gender}</TableCell>
                      <TableCell>{ hair_color}</TableCell>
                      <TableCell>{height}cm</TableCell>
                      <TableCell> {moment(created).format("D/MM/YYYY")}</TableCell>
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

export default People;
