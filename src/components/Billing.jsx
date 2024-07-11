import { Chrome, Extension } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={Extension} alt="billing" className="w-[100%] h-[100%] relative z-[5] " />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}

      <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 translate-y-1/2 z-[10]">
      <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="298" height="50" rx="28" fill="white" stroke="#E0E0E0" stroke-width="2"/>
        <circle cx="30" cy="27" r="15" fill="#4CAF50"/>
        <path d="M23 28l4.5 4.5 9-9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="52" y="32" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Great! Committed successfully</text>
      </svg>
      <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="298" height="50" rx="28" fill="white" stroke="#E0E0E0" stroke-width="2"/>
  <circle cx="30" cy="27" r="15" fill="#3a6b98"/> 
  <path d="M23 28l4.5 4.5 9-9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="52" y="32" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Notified to the collaborators!</text>
</svg>

    </div>

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Effortlessly track your <br className="sm:block hidden" /> commits & updates
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
        Stay informed with seamless commit notifications and keep your projects on track with ease.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={Chrome} alt="google_play" className="w-[200px] h-[60px] object-contain mr-5 cursor-pointer " />
      </div>
    </div>
  </section>
);

export default Billing;
