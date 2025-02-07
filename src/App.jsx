import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Developer, Hero, StartTour, BackToTopButton } from "./components";

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
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <StartTour />
        <Business />
        <Billing />
        <CardDeal />
        <Developer />
        <CTA />
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  </div>
);

export default App;
