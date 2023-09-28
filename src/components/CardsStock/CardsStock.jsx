import styles from "@/components/CardsStock/CardsStock.module.css";
import IconDel from "../../../public/icons/Del.svg";
import IconItems from "../../../public/icons/Items.svg";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const CardsStock = () => {
  const [dataList, setDataList] = useState([]);
  const [dataListTotal, setDataListTotal] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("products")) || [];
    setDataList(savedData);

    const savedDataTotal =
      JSON.parse(localStorage.getItem("productsTotal")) || [];
    setDataListTotal(savedDataTotal);
  }, []);

  const itemsWebsite = dataList.length;
  const itemsTotal = dataListTotal.length;
  const itemsDel = itemsTotal - itemsWebsite;

  let totalItems = itemsWebsite >= 2 || itemsWebsite === 0 ? "Items" : "Item";
  let totalItemsDel = itemsDel >= 2 || itemsDel === 0 ? "Items" : "Item";

  return (
    <>
      <article className={styles.wrapperCards}>
        <section className={`${styles.card} ${styles.add}`}>
          <div className={styles.contentIcon}>
            <IconItems />
          </div>
          <div className={styles.contentBtn}>
            <Button variant="text">{`${itemsWebsite} ${totalItems}`}</Button>
          </div>
          <p>
            <small>Total de productos</small>
          </p>
        </section>
        <section className={`${styles.card} ${styles.remove}`}>
          <div className={styles.contentIcon}>
            <IconDel />
          </div>
          <div className={styles.contentBtn}>
            <Button variant="text" color="error">
              {`${itemsDel} ${totalItemsDel}`}
            </Button>
          </div>
          <p>
            <small>Productos eliminados</small>
          </p>
        </section>
      </article>
    </>
  );
};

export default CardsStock;
