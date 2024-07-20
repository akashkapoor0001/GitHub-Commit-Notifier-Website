import { circle } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { quotes } from "../assets";

const FirstEver = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      <img src={quotes} alt="double_quotes" className="w-[30.6px] h-[25.6px] object-contain" />
      Discover the best {" "}
      <span className="text-gradient">GitHub Commit Notifier </span> {" "}
      effortlessly with our first ever extension for real-time notifications.
      <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Get started in just a few simple steps!
      </p>
      

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={circle} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default FirstEver;

