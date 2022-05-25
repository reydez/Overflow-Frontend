import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return <div>LandingPage
  <Link to="/questions"><Button >HOME</Button></Link>
  </div>;
}
