import styles from "./style";
import { Hero, Navbar } from "./components";
import Stats from "./components/main/Stats";
import Business from "./components/main/Business";
import Billing from "./components/main/Billing";
import CardDeal from "./components/main/CardDeal";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      </div>
    </div>
  </div>
);

export default App;
