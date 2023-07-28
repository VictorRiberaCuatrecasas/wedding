import MainNavigation from "../navbar/MainNavigation";
import { LayoutProps } from "../types";
import styles from "./Layout.module.scss"


export default function Layout(props: LayoutProps) {


  return (
    <>
      <div className={styles.layoutWrapper}>
        <MainNavigation />
        <main>{props.children}</main>
      </div>
      <div className={styles.noiseContainer}></div>
    </>
  );
}
