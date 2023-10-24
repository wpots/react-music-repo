import { ITeam } from "@/domain/User";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, AvatarGroup, Divider, Typography } from "@mui/material";
import RichText from "../UI/ContentfulRichText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface TeamProps {
  team: ITeam;
  id: string;
  onPanelSelected: any;
  expanded: string | false;
}
export default function Team({ team, id, onPanelSelected, expanded }: TeamProps) {
  const handlePanelSelected = (id: string) => {
    onPanelSelected(id);
  };

  return (
    <Accordion expanded={expanded === id} key={id} onChange={() => handlePanelSelected(id)}>
      <AccordionSummary aria-controls={`${id}t-content`} id={`${id}t-header`}>
        <Typography component="h4" variant="h6">
          {team.name}
        </Typography>
        <AvatarGroup sx={{ marginLeft: "auto" }}>
          {team.members.map((m, idx) => (
            <Avatar alt={m.firstName} title={m.firstName} key={idx}>
              {Array.from(m.firstName)[0]}
            </Avatar>
          ))}
        </AvatarGroup>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        <RichText content={team.responsibilities} />
        {team.email && (
          <>
            <Divider />
            <Typography paragraph sx={{ marginTop: "1rem" }}>
              <a href={`mailto:${team.email}`}>{team.email}</a>
            </Typography>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
