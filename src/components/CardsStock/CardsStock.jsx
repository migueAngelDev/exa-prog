import styles from "@/components/CardsStock/CardsStock.module.css";
import IconDel from "../../../public/icons/Del.svg";
import IconItems from "../../../public/icons/Items.svg";
import { Button } from "@mui/material";

const CardsStock = () => {
  return (
    <>
      <article className={styles.wrapperCards}>
        <section className={`${styles.card} ${styles.add}`}>
          <div className={styles.contentIcon}>
            <IconItems />
          </div>
          {/* <p className={styles.info}>$ Items</p> */}
          <div className={styles.contentBtn}>
            <Button variant="text">$ Items</Button>
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
              $ Items
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
