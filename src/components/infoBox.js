import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const InfoBox = (props) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {props.title}
        </Typography>
      </CardContent>
      <h2 className="infoBox__cases">{props.cases}</h2>
      <Typography className="infoBox__total" color="textSecondary">
        {props.total} Total
      </Typography>
    </Card>
  );
};

export default InfoBox;
