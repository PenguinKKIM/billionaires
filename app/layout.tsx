import "../app/styles/reset.css";
import "../app/styles/global.css";
import styles from "../app/styles/Layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Billionaire",
    default: "Billionaire",
  },
  description: "Introduce Billionaire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.allcontainer}>{children}</div>
      </body>
    </html>
  );
}
