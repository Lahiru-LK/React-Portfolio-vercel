import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Have a project or internship opportunity? Let's connect!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I'm open to internships, freelance projects, and collaborations. Reach
          out to discuss how I can contribute to your team or idea.
        </p>
        <a
          href="mailto:lahiruprasad20000321@gmail.com"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Contact Me
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
