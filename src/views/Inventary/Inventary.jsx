import styles from "@/views/Inventary/Inventary.module.css";
import CardsStock from "@/components/CardsStock/CardsStock";
import Header from "@/components/Header/Header";
import WelcomeUser from "@/components/WelcomeUser/WelcomeUser";
import IconAdd from "../../../public/icons/Add.svg";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";

//TODO: eliminar por id

//TODO: Hacer responsive el sidebar
//TODO: Desplegar el sitio web en vercel

const Inventary = () => {
  const [formDataAddProduct, setFormDataAddProduct] = useState({
    id: 1,
    nameProduct: "",
    providerProduct: "",
    stockProduct: "",
    price: "",
  });

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("products")) || [];
    setDataList(savedData);
  }, []);

  const handleOnChange = (field, value) => {
    setFormDataAddProduct({
      ...formDataAddProduct,
      [field]: value,
    });
  };

  const headerTable = [
    {
      head: "ID",
    },
    {
      head: "Nombre del producto",
    },
    {
      head: "Stock",
    },
    {
      head: "Proveedor",
    },
    {
      head: "Precio",
    },
  ];

  const listHeader = headerTable.map(({ head }) => (
    <>
      <li key={head}>{head}</li>
    </>
  ));

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [formError, setFormError] = useState({
    fieldName: false,
    fieldProvider: false,
    fieldStock: false,
    fieldPrice: false,
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formDataAddProduct.nameProduct) {
        setFormError({
          ...formError,
          fieldName: true,
        });
        return;
      }
      if (!formDataAddProduct.providerProduct) {
        setFormError({
          ...formError,
          fieldProvider: true,
        });
        return;
      }
      if (!formDataAddProduct.stockProduct) {
        setFormError({
          ...formError,
          fieldStock: true,
        });
        return;
      }
      if (!formDataAddProduct.price) {
        setFormError({
          ...formError,
          fieldPrice: true,
        });
        return;
      }

      const idLatest = () => {
        if (dataList.length > 0) {
          const newId = dataList.map(({ id }) => id);

          const id = newId.sort((a, b) => b - a);

          return id[0] + 1;
        }
      };

      const data = {
        id: idLatest() || formDataAddProduct.id,
        product: formDataAddProduct.nameProduct,
        providerProduct: formDataAddProduct.providerProduct,
        stockProduct: formDataAddProduct.stockProduct,
        price: formDataAddProduct.price,
      };
      const updateDataList = [...dataList, data];
      setDataList(updateDataList);
      localStorage.setItem("products", JSON.stringify(updateDataList));

      setFormDataAddProduct({
        id: idLatest() || formDataAddProduct.id,
        nameProduct: "",
        providerProduct: "",
        stockProduct: "",
        price: "",
      });

      setFormError({
        fieldName: false,
        fieldProvider: false,
        fieldStock: false,
        fieldPrice: false,
      });
      handleCloseModal();
    } catch (error) {
      console.log(error);
      console.log(error.code);
    }
  };

  const mapData = dataList.map(
    ({ id, product, stockProduct, providerProduct, price }) => {
      return (
        <>
          <li key={id}>
            <span>{id}</span>
            <span>{product}</span>
            <span>{stockProduct}</span>
            <span>{providerProduct}</span>
            <span>{price}</span>
          </li>
        </>
      );
    }
  );

  return (
    <>
      <section className={styles.wrapperContent}>
        <Header />
        <article className={styles.sectionContainerData}>
          <WelcomeUser />
          <CardsStock />
          <div className={styles.titleTable}>
            <p>Registros de productos</p>
          </div>
          <section className={styles.tableData}>
            <div className={styles.contentBtnOpenModal}>
              <Button variant="contained" onClick={handleOpenModal}>
                <IconAdd />
                Agregar
              </Button>
            </div>
            <Modal open={openModal} onClose={handleCloseModal}>
              <Box className={styles.boxModal}>
                <p className={styles.titleFormAddProduct}>
                  Añade productos a tu inventario
                </p>
                <form
                  onSubmit={handleOnSubmit}
                  className={styles.boxModalFormAddProduct}
                >
                  {/* <TextField fullWidth type="hidden" /> */}
                  <TextField
                    fullWidth
                    error={formError.fieldName}
                    label="Nombre del producto"
                    variant="outlined"
                    id="nameProduct"
                    helperText="Agrega el nombre del producto"
                    type="text"
                    onChange={(e) =>
                      handleOnChange("nameProduct", e.target.value)
                    }
                    value={formDataAddProduct.nameProduct}
                  />
                  <TextField
                    fullWidth
                    label="Proveedor o marca"
                    error={formError.fieldProvider}
                    variant="outlined"
                    id="nameProvider"
                    helperText="Agrega el proveedor o marca del producto"
                    type="text"
                    onChange={(e) =>
                      handleOnChange("providerProduct", e.target.value)
                    }
                    value={formDataAddProduct.providerProduct}
                  />
                  <TextField
                    fullWidth
                    label="Stock"
                    variant="outlined"
                    id="stokcProduct"
                    error={formError.fieldStock}
                    helperText="Agrega la cantidad del producto"
                    type="tel"
                    onChange={(e) =>
                      handleOnChange("stockProduct", e.target.value)
                    }
                    value={formDataAddProduct.stockProduct}
                  />
                  <TextField
                    error={formError.fieldPrice}
                    fullWidth
                    label="precio"
                    variant="outlined"
                    id="nameProduct"
                    helperText="Agrega el precio del producto"
                    type="tel"
                    onChange={(e) => handleOnChange("price", e.target.value)}
                    value={formDataAddProduct.price}
                  />

                  <TextField
                    type="submit"
                    value="Agregar"
                    variant="outlined"
                    className={styles.inputSub}
                  />
                </form>
              </Box>
            </Modal>
            <ul className={styles.listHeader}>{listHeader}</ul>
            <ul className={styles.data}>{mapData}</ul>
            {/* <ul className={styles.data}></ul> */}
          </section>
        </article>
      </section>
    </>
  );
};

export default Inventary;
