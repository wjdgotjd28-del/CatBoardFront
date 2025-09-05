import { Box } from "@mui/material";
import bannerImg from "../assets/banner.jpg";

export default function MainPage() {
  return (
    
    <Box display="flex" justifyContent="center" height={300}>
      <img
        src={bannerImg}
        alt="배너"
        style={{ maxWidth: "100%", height: 400, width: 1000 }}
      />
    </Box>
  );
}
