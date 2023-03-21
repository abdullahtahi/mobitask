import { getAllPosts } from "../component/FunctionHandler/FunctionHandler";
import Layout from "../component/Layout/Layout";
import PostCard from "../component/PostCard/PostCard";
import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "../styles/globals.css";
import "../styles/globals.scss";
import style from "../styles/Home.module.scss";
export default function Home() {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.Post);

  useEffect(() => {
    getAllPosts(dispatch);
  }, []);
  return (
    <Layout>
      <Grid container className={style.myStyle}>
        {post.length > 0 ? (
          post.map((e, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <PostCard PostData={e} />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Layout>
  );
}
