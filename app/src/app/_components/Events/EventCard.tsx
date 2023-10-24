"use client";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Collapse, Button } from "@mui/material";
import { EventItemProps } from "./EventItem";
import ExpandIcon from "@mui/icons-material/ExpandMore";
import { useState, useMemo } from "react";
import { IEvent } from "@/domain/Event";

export interface EventCardProps extends EventItemProps {
  imageHeight?: number;
}

export default function EventCard({ item, imageHeight }: EventCardProps) {
  // const [date, setDate] = useState(item.date);
  const _date = new Date(item.date);
  const date = _date.toLocaleDateString("nl-NL", { year: "numeric", month: "long", day: "numeric" });

  const handleCardExpand = () => {
    console.log("here");
  };
  return (
    <Card>
      <CardHeader title={date} subheader={`locatie: ${item.venue ?? "n.t.b."}`} />
      {item.repertoireList?.length > 0 && (
        <>
          <CardMedia component="img" src="https://placekitten.com/400/300" height={imageHeight ?? "140"} />
          <CardContent>
            {/* Todo: media either first albumart of homework or lon/lat google maps for location */}
            <Typography paragraph>{item.description}</Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ marginLeft: "auto" }} onClick={handleCardExpand} endIcon={<ExpandIcon />}>
              Huiswerk
            </Button>
          </CardActions>
        </>
      )}

      <Collapse>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
