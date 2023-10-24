"use client";
import Team from "@/app/_components/Teams/Team";
import RichText from "../UI/ContentfulRichText";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, AvatarGroup, Divider, Typography } from "@mui/material";
import { ITeam } from "@/domain/User";
import { useState } from "react";

interface TeamsListProps {
  items: ITeam[];
}

export default function TeamsList({ items }: TeamsListProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handlePanelChange = (panelId: string) => {
    setExpanded(prevId => (prevId !== panelId ? panelId : false));
  };
  return (
    <>
      {items.map((team, idx) => {
        const id = `panel${idx}`;
        return <Team team={team} id={id} key={idx} onPanelSelected={handlePanelChange} expanded={expanded} />;
      })}
    </>
  );
}
