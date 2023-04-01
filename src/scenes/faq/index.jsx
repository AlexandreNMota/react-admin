import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Dúvidas frequentes"></Header>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {" "}
            Pergunta importante 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.grey[500]}>Resposta Importante</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {" "}
            Pergunta importante 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.grey[500]}>Resposta Importante</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {" "}
            Pergunta importante 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.grey[500]}>Resposta Importante</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {" "}
            Pergunta importante 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.grey[500]}>Resposta Importante</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
