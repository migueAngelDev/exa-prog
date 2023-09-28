const { default: Inventary } = require("@/views/Inventary/Inventary");
const { default: Head } = require("next/head");

const ViewInventary = () => {
  return (
    <>
      <Head>
        <title>Inventario | Vercel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Inventary />
    </>
  );
};

export default ViewInventary;