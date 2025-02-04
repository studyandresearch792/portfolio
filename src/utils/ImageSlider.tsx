import { useState, useEffect } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

import remittance from "../assets/projectAssets/Remittance.png";
import merodoctor from "../assets/projectAssets/MeroDoctor.png";
import eclass from "../assets/projectAssets/EClass.png";

const images = [
  merodoctor,
  eclass,
  remittance,
  // Add more image paths here
];

const remittanceInfo: string =
  " Mandiri Remittance is a service-oriented application which provides digital financial transaction payment and remittance service to the people.";

const meroDoctorInfo: string =
  "Mero Doctor is a health service-oriented application which works as a tool that provides appointments and consultation online with top doctors of nepal.";

const eClassInfo: string =
  "Midas E-Class is an online learning application that provides online video classes that tend to cover every base intended for school and high school .";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          margin: "100px 0px 0px 0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "50px",
            height: "300px",
            width: "300px",
            flexWrap: "wrap",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundImage: `url(${images[currentIndex]})`,
            justifyContent: "flex-end",
            alignItems: "center",
            transition: "background-image 0.5s ease-in-out",
            "&:hover": {
              cursor: "pointer",
              "&::after": {
                content: `"PlayStore :${
                  currentIndex === 0
                    ? "https://play.google.com/store/search?q=mero+doctor+app&c=apps"
                    : currentIndex === 1
                    ? "https://play.google.com/store/search?q=midas+eclass+-+the+learning+app&c=apps"
                    : "https://play.google.com/store/search?q=mandiri+remittance&c=apps"
                }"`,
                position: "absolute",
                bottom: "170px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                whiteSpace: "nowrap",
                fontSize: "12px",
              },
            },
          }}
          onClick={() => {
            let url = "";
            if (currentIndex === 0) {
              url =
                "https://play.google.com/store/search?q=mero+doctor+app&c=apps";
            } else if (currentIndex === 1) {
              url =
                "https://play.google.com/store/search?q=midas+eclass+-+the+learning+app&c=apps";
            } else if (currentIndex === 2) {
              url =
                "https://play.google.com/store/search?q=mandiri+remittance&c=apps";
            }

            window.open(url, "_blank");
          }}
        />

        <Card
          sx={{
            position: "fixed",
            bottom: 20,
            backgroundColor: "goldenrod",
            elevation: 10,
            borderRadius: "40px 40px 0px 0px",
            border: "2px solid black",
            marginBottom: "20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                transition: "5s ease-in-out",
              }}
            >
              {currentIndex === 0
                ? meroDoctorInfo
                : currentIndex === 1
                ? eClassInfo
                : remittanceInfo}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
export default ImageSlider;
