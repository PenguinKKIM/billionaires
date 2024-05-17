import Link from "next/link";
import styles from "../../app/styles/HomePage.module.css";
import { API_URL } from "../constants";

interface Datas {
  id: string;
  name: string;
  squareImage: string;
  netWorth: string;
  industries: string[];
}
const fetchData = async (): Promise<Datas[]> => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json as Datas[];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

async function HomePage() {
  const datas = await fetchData();
  return (
    <>
      <main className={styles.mainContainer}>
        <h2 className={styles.title}>Billionaires</h2>
        <h3 className={styles.subTitle}>{datas.length} People Registered</h3>
        <ul className={styles.cardConatiner}>
          {datas &&
            datas.slice(0, 60).map((data) => (
              <li className={styles.card} key={data.id}>
                <Link href={`billionaire/${data.id}`}>
                  {data.squareImage === "https:undefined" ? (
                    <div className={styles.imgUndefind}></div>
                  ) : (
                    <img className={styles.img} src={data.squareImage} alt={data.id} />
                  )}
                  <div>
                    <h3 className={styles.subTitle}>{data.name} </h3>
                    <p>{data.industries.join(", ")}</p>
                    <p>{Math.floor(parseFloat(data.netWorth) / 1000)} Billion</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
