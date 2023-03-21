import { Grid, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import "../styles/input.scss";
import { handlePost } from "../component/FunctionHandler/FunctionHandler";
import Layout from "../component/Layout/Layout";
function PostPage() {
  const [state, setState] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const sendThePost = () => {
    const body = {
      title: "mr",
      firstName: state?.firstName,
      lastName: state?.lastName,
      email: state?.email,
    };
    console.log(body);
    handlePost(body);
  };
  return (
    <Layout>
      <Paper elevation={3} className="inputContainer">
        <div className="pageTag">
          <h2>Post the User</h2>
        </div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} className="">
            <input
              placeholder="Enter Title"
              onChange={handleChange}
              name="title"
              value="mr"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <input
              type="text"
              placeholder="Enter a First Name"
              onChange={handleChange}
              name="firstName"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <input
              placeholder="Enter a Last Name"
              onChange={handleChange}
              name="lastName"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <input onChange={handleChange} placeholder="email" name="email" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <button onClick={sendThePost}>Save</button>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
}

export default PostPage;
