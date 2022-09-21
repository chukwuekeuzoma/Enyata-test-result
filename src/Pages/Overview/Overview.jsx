import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Overview.css";
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
import moment from "moment";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";

export default function Overview(props) {
  const [loaderTwo, setLoaderTwo] = useState(false);
  const [films, setFlims] = useState([]);

  const getFilms = async () => {
    setLoaderTwo(true);
    let response = await axios.get("films");
    setFlims(response.data.results);
    setLoaderTwo(false);
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <div>
        <div className="overview-main-container">
          <div className="overview-cards">
            <div className="overview-cards-inner">
              <div>Films</div>
              <div className="cards-colors-box"></div>
            </div>
            <div className="overview-texts-container">
              <div>
                <div style={{ fontSize: "16px", fontWeight: "700" }}>200</div>
                <div
                  style={{
                    color: "#00992B",
                    fontSize: "9px",
                    fontWeight: "400",
                  }}
                >
                  20 More than than yesterday
                </div>
              </div>
            </div>
          </div>
          <div className="overview-cards">
            <div className="overview-cards-inner">
              <div>Starship</div>
              <div className="cards-colors-box-starship"></div>
            </div>
            <div className="overview-texts-container">
              <div>
                <div style={{ fontSize: "16px", fontWeight: "700" }}>200</div>
                <div
                  style={{
                    color: "#00992B",
                    fontSize: "9px",
                    fontWeight: "400",
                  }}
                >
                  20 More than than yesterday
                </div>
              </div>
            </div>
          </div>
          <div className="overview-cards">
            <div className="overview-cards-inner">
              <div>People</div>
              <div className="cards-colors-box-people"></div>
            </div>
            <div className="overview-texts-container">
              <div>
                <div style={{ fontSize: "16px", fontWeight: "700" }}>200</div>
                <div
                  style={{
                    color: "#00992B",
                    fontSize: "9px",
                    fontWeight: "400",
                  }}
                >
                  20 More than than yesterday
                </div>
              </div>
            </div>
          </div>
          <div className="overview-cards">
            <div className="overview-cards-inner">
              <div>Species</div>
              <div className="cards-colors-box-species"></div>
            </div>
            <div className="overview-texts-container">
              <div>
                <div style={{ fontSize: "16px", fontWeight: "700" }}>200</div>
                <div
                  style={{
                    color: "#00992B",
                    fontSize: "9px",
                    fontWeight: "400",
                  }}
                >
                  20 More than than yesterday
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="films">Films</div>
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
                    <TableCell style={{ color: "#A4A7B7" }}>
                      Film Title
                    </TableCell>
                    <TableCell style={{ color: "#A4A7B7" }}>
                      Release Date
                    </TableCell>
                    <TableCell style={{ color: "#A4A7B7" }}>Director</TableCell>
                    <TableCell style={{ color: "#A4A7B7" }}>Producer</TableCell>
                    <TableCell style={{ color: "#A4A7B7" }}>
                      Episode ID
                    </TableCell>
                    <TableCell style={{ color: "#A4A7B7" }}>
                      Character
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {films.map(
                    (
                      {
                        title,
                        release_date,
                        director,
                        producer,
                        episode_id,
                        url,
                      },
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
                            {title}
                          </TableCell>
                          <TableCell>
                            {moment(release_date).format("D/MM/YYYY")}
                          </TableCell>
                          <TableCell>{director}</TableCell>
                          <TableCell>{producer}</TableCell>
                          <TableCell>{episode_id}</TableCell>
                          <TableCell>
                            {url}
                          </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </>
  );
}
