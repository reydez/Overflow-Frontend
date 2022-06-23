import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReports } from "../../../redux/actions/adminReports";
import { Link as RouterLink } from "react-router-dom";
import { Link, Button } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

export const AdminReports = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const [loading, setLoading] = useState(false);
  const userDetail = useSelector((state) => state.userReducer.userDetail);

  console.log(userDetail.reports);

  useEffect(() => {
    const loadReports = () => {
      setLoading(true);
      dispatch(getAllReports());
      setLoading(false);
    };
    loadReports();
  }, [dispatch]);

  return (
    <div>
      <h2>Panel de Admin - Reportes</h2>
      <hr />
      <div>Listado de reportes</div>
      <hr />
      <div>
        <Grid
          container
          sx={{
            width: "100%",
            backgroundColor: "#D81B60",
            height: "30px",
            alignItems: "center",
          }}
        >
          <Grid sx={{ fontSize: "12px", width: "65%", marginLeft: "5px" }}>
            <span>MENSAJE</span>
          </Grid>
          <Grid sx={{ fontSize: "12px", width: "15%", marginLeft: "20px" }}>
            <span>RAZÓN</span>
          </Grid>
          <Grid sx={{ fontSize: "12px", width: "10%", marginLeft: "20px" }}>
            <span>LINK</span>
          </Grid>
        </Grid>
        {userDetail.reports.map((everyReport) => {
          return (
            <>
              <Grid
                container
                sx={{
                  width: "100%",
                  backgroundColor: "#341d4c",
                  marginBottom: "3px",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    fontSize: "12px",
                    width: "65%",
                    marginLeft: "5px",
                    alignItems: "center",
                  }}
                >
                  <span>{everyReport.message}</span>
                </Grid>
                <Grid
                  sx={{
                    fontSize: "12px",
                    width: "15%",
                    marginLeft: "20px",
                    alignItems: "center",
                  }}
                >
                  <span style={{  alignItems: 'center' }}>{everyReport.reason}</span>
                </Grid>
                <Grid
                  sx={{
                    fontSize: "12px",
                    width: "10%",
                    marginLeft: "20px",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={`/visualize-question/${everyReport.postId}`}
                    component={RouterLink}
                    color="inherit"
                    underline="none"
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      color="success"
                      endIcon={<LinkIcon fontSize="12px" />}
                    >
                      {" "}
                      ir
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </>
          );
        })}
      </div>
    </div>
  );
};
