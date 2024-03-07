import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";

const ComponentThree = () => {
  const items = [
    "https://fastly.picsum.photos/id/319/200/300.jpg?hmac=-xZWQr-2igun1QhUD5zoRCQKvRl7bjB_gIbQuv26oj0",
    "https://fastly.picsum.photos/id/905/200/300.jpg?hmac=uLUlIwyKcu9AtTY3uOL04O0gbesMVu-yNVRvCsF1xD8",
    "https://fastly.picsum.photos/id/280/200/300.jpg?hmac=M5LGtIQZPTGPTTmFXFcgUUV0zXG6sy-bGJ6zDZHedA0",
    "https://fastly.picsum.photos/id/828/200/300.jpg?hmac=YwDXceJcHQbinJfsIHJgrD8NakhtHzBMH-vD4aNcPo4",
    "https://fastly.picsum.photos/id/991/200/300.jpg?hmac=BdTxfK2wHhsGppraQzb5puxPKb5mPVzDaZPz8IiC44Q",
    "https://fastly.picsum.photos/id/154/200/300.jpg?hmac=9yMwkzYXuJYDbG15-lORLjtqCiAQiBd6wDIKPBiJBM8",
    "https://fastly.picsum.photos/id/30/200/300.jpg?hmac=qOyV_daSIK2KgaEj7CZYTR3n4xgqMNwskTxH7QMVGfg",
    "https://fastly.picsum.photos/id/134/200/300.jpg?hmac=KN18cCDft4FPM0XJpr7EhZLtUP6Z4cZqtF8KThtTvsI",
  ];
  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexWrap: "wrap",
          gap: 3,
          backgroundColor: "transparent",
        }}
      >
        {items?.map((e, i) => (
          <Card elevation={3}>
            <img src={e} />
          </Card>
        ))}
      </Paper>
    </Box>
  );
};

export default ComponentThree;
