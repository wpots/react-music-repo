import { Typography } from "@mui/material";
import MusicItem from "./MusicItem";

export default function MusicList({ items, listTitle, listShort }) {
  return (
    <>
      <Typography component="h2">{listTitle}</Typography>
      <Typography paragraph>{listShort}</Typography>
      {items.map((i, idx) => (
        <MusicItem item={i} key={idx} />
      ))}
    </>
  );
}
