import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import "../../styles/PostCard.scss";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
export default function PostCard({ PostData }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "0 1rem  2rem 1rem",
        height: { xs: "500px", sm: "500px", md: "400px" },
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={PostData.image}
        title="green iguana"
      />
      <CardContent>
        <Typography className={"postDate"}>
          {format(new Date(PostData?.publishDate), "yyyy-MM-dd h:mm aaa")}
        </Typography>
        <Typography>
          {PostData?.owner?.firstName + " " + PostData?.owner?.lastName}
        </Typography>

        <Typography className={"posttext"}>{PostData.text}</Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
          className={"postTagContainer"}
        >
          {PostData.tags.map((e, i) => (
            <Typography key={i} className={"posttags"}>
              <p>{e}</p>
            </Typography>
          ))}
        </div>
      </CardContent>

      <div>
        <div className={"likesContainer"}>
          <div className={"likes"}>{PostData.likes}</div>
          <div>
            <ThumbUpAltIcon />
          </div>
        </div>
      </div>
    </Card>
  );
}
PostCard.propTypes = {
  PostData: PropTypes.object.isRequired,
};
