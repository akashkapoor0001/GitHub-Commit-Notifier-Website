import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="developer" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="w-full md:mb-6 mb-4"> {/* Added div to wrap the heading */}
        <h2 className={`${styles.heading2} mt-4`}>
          Meet the {" "} 
          <span className="text-gradient">Developer</span>{" "}
        </h2>
      </div>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Crafted with passion and precision by a coding enthusiast who loves turning ideas into reality. Dive into the seamless functionality and elegant design brought to you by the creative mind behind this project. This project {''}
        <span className="text-gradient">GitHub Commit Notifier</span>{" "} is designed to make it easier to keep track of your collaborators' commits in real-time. {" "}
        <span className="flex-1 font-poppins font-semibold ss:text-[25px] text-[15px] text-gradient">~Akash Kapoor</span>
        </p>
      </div>
    </div>



    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
