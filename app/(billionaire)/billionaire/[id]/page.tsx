



import { API_URL } from "../../../constants";
import styles from "../../../styles/BillionairePage.module.css";

interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
  exerciseOptionPrice?: number;
}

interface Data {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: FinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

const fetchDataById = async (id: string): Promise<Data> => {
  try {
    const response = await fetch(`${API_URL}/person/${id}`);
    const json = await response.json();
    return json as Data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

async function BillionairePage({ params: { id } }: { params: { id: string } }) {
  const data: Data = await fetchDataById(id);

  return (
    <>
      <main className={styles.mainContainer}>
        <h2 className={styles.title}>{data.name}</h2>
        <section className={styles.sectionContainer}>
          <img className={styles.squareImage} src={data?.squareImage} alt={data.id} />
          <h2 className={styles.subTitle}>Position : {data.position}</h2>
          <p>{!data.state ? <></> : <>{data.state}, </>} {data.city}, {data.country}</p>
          <ul className={styles.bioContainer}>
            {data.bio?.map((bio, index) => (
              <li className={styles.bio} key={index}>{bio}</li>
            ))}
          </ul>
        </section>
        <section className={styles.sectionContainer}>
          <h3 className={styles.subTitle}>Financial Assets</h3>
          <ul className={styles.cardContainer}>
            {!data.financialAssets ? (
              <p>Financial assets do not exist.</p>
            ) : (
              data.financialAssets.map((asset, index) => (
                <li key={index} className={styles.card}>
                  <p>Company: {asset.companyName}</p>
                  <p>Exchange: {asset.exchange}</p>
                  <p>Ticker: {asset.ticker}</p>
                  <p>Number of Shares: {asset.numberOfShares}</p>
                  <p>Share Price: {asset.sharePrice}</p>
                  <p>Current Price: {asset.currentPrice}</p>
                  {asset.exerciseOptionPrice && <p>Exercise Option Price: {asset.exerciseOptionPrice}</p>}
                  <p>Interactive: {asset.interactive ? "Yes" : "No"}</p>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </>
  );
}

export default BillionairePage;
