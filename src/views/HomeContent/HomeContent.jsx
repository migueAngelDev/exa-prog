import Header from "@/components/Header/Header";
import IconVercel from "../../../public/icons/Vercel.svg";
import styles from "@/views/HomeContent/HomeContent.module.css";
import Image from "next/image";
import gifViewHome from "../../../public/gifs/gdb.gif";
import gifViewTech from "../../../public/gifs/R.gif";
import gifViewInven from "../../../public/gifs/tab.gif";
import gifViewWork from "../../../public/gifs/wrk.gif";
import gifViewLoad from "../../../public/gifs/vr.gif";
import gifViewCallMe from "../../../public/gifs/callme.gif";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const [formError, setFormError] = useState({
    fieldName: false,
    fieldEmail: false,
    fieldTel: false,
  });

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("subscribers")) || [];
    setDataList(savedData);
  }, []);

  console.log(dataList);

  const handleOnChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const cards = [
    {
      gif: gifViewInven,
      title: "Almacena de manera rápida",
      body: "Almacena, administra, manipula y elimina datos en un solo lugar",
    },
    {
      gif: gifViewLoad,
      title: "Carga datos a gran velocidad",
      body: "Almacena y accede a tus datos en un abrir y cerrar de ojos",
    },
    {
      gif: gifViewWork,
      title: "Trabaja sin límites",
      body: "Mantén tus datos seguros y accesibles en todo momento",
    },
    {
      gif: gifViewTech,
      title: "Con la base de datos más eficaz",
      body: "Administra tus datos con facilidad y precisión",
    },
  ];

  const rederingCards = cards.map(({ gif, title, body }) => {
    return (
      <>
        <Link href="/inventary" className={styles.linkCard}>
          <Card
            sx={{ maxWidth: 450, maxHeight: 290 }}
            className={styles.cardHome}
          >
            <CardActionArea>
              <figure className={styles.cardImg}>
                <Image
                  src={gif}
                  width={100}
                  height={100}
                  priority
                  alt={title}
                />
              </figure>
              <CardContent>
                <Typography component="div" variant="h5" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </>
    );
  });

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    try {
      if (!formData.name) {
        setFormError({
          ...formError,
          fieldName: true,
        });
        return;
      }
      if (!formData.email) {
        setFormError({
          ...formError,
          fieldEmail: true,
        });
        return;
      }
      if (!formData.tel) {
        setFormError({
          ...formError,
          fieldTel: true,
        });
        return;
      }
      const data = {
        name: formData.name,
        email: formData.email,
        tel: formData.tel,
      };
      const updateDataList = [...dataList, data];
      setDataList(updateDataList);
      localStorage.setItem("subscribers", JSON.stringify(updateDataList));
      setFormData({
        name: "",
        email: "",
        tel: "",
      });
      setFormError({
        fieldName: false,
        fieldEmail: false,
        fieldTel: false,
      });
      handleCloseModal();
    } catch (error) {
      console.log(error);
      console.log(error.code);
    }
  };

  return (
    <>
      <section className={styles.wrapperContent}>
        <Header />
        <section className={styles.sectionInfoGen}>
          <section className={styles.sectionInit}>
            <header>
              <IconVercel />
              <p>Controla tu inventario con facilidad y precisión</p>
            </header>
            <section className={styles.wrapperCardHome}>
              <section className={styles.contentInfoImg}>
                <div className={styles.contentFigure}>
                  <Image
                    src={gifViewHome}
                    width={480}
                    height={270}
                    alt="img1"
                    priority
                  />
                </div>
                <div className={styles.txtDescImg}>
                  <p>
                    El inventario más eficaz para tu negocio y espacio de
                    trabajo
                  </p>
                </div>
                <div className={styles.contentBtnStart}>
                  <Button
                    variant="outlined"
                    href="#secTw"
                    className={styles.btn}
                  >
                    Comenzar
                    <IconVercel />
                  </Button>
                </div>
              </section>
            </section>
          </section>
          <section id="secTw" className={styles.sectionSec}>
            <Modal open={openModal} onClose={handleCloseModal}>
              <Box className={styles.boxModal}>
                <form className={styles.boxModalForm} onSubmit={handleOnSubmit}>
                  <TextField
                    fullWidth
                    error={formError.fieldName}
                    label="Nombre"
                    variant="outlined"
                    id="name"
                    helperText="Agrega tu nombre completo"
                    type="text"
                    onChange={(e) => handleOnChange("name", e.target.value)}
                    value={formData.name}
                  />
                  <TextField
                    fullWidth
                    label="Correo electrónico"
                    error={formError.fieldEmail}
                    variant="outlined"
                    id="email"
                    helperText="Agrega tu correo electrónico"
                    type="text"
                    onChange={(e) => handleOnChange("email", e.target.value)}
                    value={formData.email}
                  />
                  <TextField
                    fullWidth
                    label="Número de telefóno"
                    variant="outlined"
                    id="tel"
                    error={formError.fieldTel}
                    helperText="Agrega tu número de telefóno"
                    type="tel"
                    onChange={(e) => handleOnChange("tel", e.target.value)}
                    value={formData.tel}
                  />

                  <TextField
                    fullWidth
                    variant="outlined"
                    type="submit"
                    value="Enviar"
                  />
                </form>
              </Box>
            </Modal>

            <Card
              sx={{ maxWidth: 450, maxHeight: 290 }}
              className={styles.cardHome}
              onClick={handleOpenModal}
            >
              <CardActionArea>
                <figure className={styles.cardImg}>
                  <Image
                    src={gifViewCallMe}
                    width={100}
                    height={100}
                    priority
                    alt="img2"
                  />
                </figure>
                <CardContent>
                  <Typography component="div" variant="h5" gutterBottom>
                    Suscríbete con nosotros
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Empieza tu periodo de prueba con 30 días gratis, regístrate
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <section className={styles.wrapperCards}>{rederingCards}</section>
          </section>
        </section>
      </section>
    </>
  );
};

export default HomeContent;
