import Head from 'next/head';
import OxfordMedicareWebsite from '../components/OxfordMedicareWebsite';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oxford Medicare</title>
      </Head>
      <OxfordMedicareWebsite />
    </>
  );
}
