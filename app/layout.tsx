import "../app/styles/reset.css";
import "../app/styles/global.css";
import styles from "../app/styles/Layout.module.css";
import { Metadata } from "next";
// import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | 억만장자들",
    default: "억만장자들",
  },
  description: "억만장자들을 간단히 소개해 드립니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Navigation /> */}
        <div className={styles.allcontainer}>{children}</div>
      </body>
    </html>
  );
}
