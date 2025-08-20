import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "2 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "30+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "5.0 Rating",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              H.P.G Lahiru Prasad
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a final-year undergraduate pursuing a BICT (Hons) degree at the
            University of Ruhuna, passionate about software development and eager
            to gain hands-on experience in a dynamic and collaborative
            environment.
            <br />
            Over the past two years, I've developed 30+ real-world applications
            using React, Node.js, Java, Python, C#, and .NET. My projects include
            a billing system (C# & MSSQL), a polythene factory management
            platform (MERN stack), and a Flutter-based Sinhala-English AI
            translator app powered by Gemini AI.
            <br />
            I have also worked with freelance clients on Fiverr, delivering
            full-stack solutions with a 5.0 client rating. My certifications in
            Azure, AWS, React, and GitHub Foundations have expanded my knowledge
            in cloud computing, version control, and modern development workflows.
          </p>
          <div className="flex flex-wrap gap-2 my-2 text-xs xxs:text-sm">
            <span>Email: lahiruprasad20000321@gmail.com</span>
            <span>Phone: +94 767171262</span>
            <a
              href="https://www.linkedin.com/in/lahiruprasad"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/lahiruprasad"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://lahiruprasad.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </div>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:lahiruprasad20000321@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
