import {
  FaGraduationCap,
  FaBriefcase,
  FaChalkboardTeacher,
  FaBook,
  FaTools,
} from "react-icons/fa";

function Curriculum() {
  return (
    <div className="curriculum-container p-6 max-w-4xl mx-auto font-sans">
      {/* Education Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaGraduationCap size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Bachelor in Industrial Engineering</strong> <br />
            Universidad de Concepción, Concepción, Chile <br />
            <span className="italic">2005 - 2010</span>
          </li>
          <li>
            <strong>Master in Financial Management</strong> <br />
            Universidad de Concepción, Concepción, Chile <br />
            <span className="italic">2011 - 2012</span>
          </li>
        </ul>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaBriefcase size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">Professional Experience</h2>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Data Analyst</h3>
          <p className="italic">December 2022 &ndash; Present</p>
          <p className="mt-2 font-medium">Universidad de Concepción</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>Data Analysis with Machine Learning.</li>
            <li>Data Engineering.</li>
          </ul>
          <p className="mt-2 font-medium">Evalueserve</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>
              Application and testing of Financial APIs for commercial use.
            </li>
          </ul>
          <p className="mt-2 font-medium">Telus International</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>Created input data for AI model training.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Project Organizer</h3>
          <p className="italic">December 2020 &ndash; November 2021</p>
          <p className="mt-2 font-medium">
            FIC Project Marketplace Región del Biobío
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>
              Second in command for the execution of a publicly funded project
              to create an online platform for a local commerce organization.
            </li>
          </ul>
        </div>
      </section>

      {/* Lecturer Experience Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaChalkboardTeacher size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">Lecturer Experience</h2>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Lecturer</h3>
          <p className="italic">February 2022 &ndash; Present</p>
          <p className="font-medium">
            Universidad Católica de la Santisima Concepción
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
            <li>Microeconomics II</li>
          </ul>

          <p className="font-medium">Universidad San Sebastián</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
            <li>Project Formulation and Evaluation</li>
            <li>Data Analysis for Decision Making</li>
          </ul>
          <p className="mt-3 font-medium">Universidad Nacional Andrés Bello</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
            <li>Macroeconomics I</li>
          </ul>
          <p className="mt-3 font-medium">Instituto Profesional Providencia</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
            <li>Economics and Management</li>
            <li>Management Control of Financial Statements</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Assistant Professor</h3>
          <p className="italic">August 2019 &ndash; December 2021</p>
          <p className="mt-2 font-medium">Universidad San Sebastián</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>Econometrics</li>
            <li>Macroeconomics I</li>
            <li>Macroeconomics II</li>
            <li>Finance I</li>
            <li>Advanced Topics in Economics</li>
            <li>Microeconomics I</li>
            <li>Microeconomics II</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Lecturer</h3>
          <p className="italic">August 2017 &ndash; August 2019</p>

          <p className="mt-2 font-medium">Universidad San Sebastián</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
            <li>Econometrics</li>
            <li>Finance II</li>
            <li>Advanced Topics in Economics</li>
          </ul>
          <p className="mt-3 font-medium">Universidad de Concepción</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
            <li>Economics</li>
          </ul>
        </div>
      </section>

      {/* Articles Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaBook size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">Articles</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            Lecuna, A., Barros, S., Mahn, D. &amp; Chávez, G. (2022). Drivers of
            growth expectations in Latin American rural contexts. Journal of
            Entrepreneurship in Emerging Economies, Vol. 15 No. 5 p. 1247-1276.{" "}
            <a
              href="https://doi.org/10.1108/JEEE-10-2021-0388"
              className="underline"
            >
              https://doi.org/10.1108/JEEE-10-2021-0388
            </a>
          </li>
          <li>
            Urzúa, Mauricio &amp; Chávez, Gonzalo. (2014). Determinantes del
            spread bancario en Chile. Industrial Data Nº 17: p. 24-30.{" "}
            <a
              href="https://doi.org/10.15381/idata.v17i1.12029"
              className="underline"
            >
              https://doi.org/10.15381/idata.v17i1.12029
            </a>
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center mb-4">
          <FaTools size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <strong>Languages:</strong> Native Spanish, Advanced English
          </li>
          <li>
            <strong>Software:</strong> Stata, Matlab, LaTeX, Excel, Word,
            PowerPoint
          </li>
          <li>
            <strong>Programming:</strong> Python, SQL (PostgreSQL in pgAdmin 4)
          </li>
          <li>Data Analysis with Pandas</li>
          <li>Web App Design with Dash &amp; React</li>
          <li>
            Forecasting: Time Series Model Estimation and Forecasting with
            Python
          </li>
          <li>
            Machine Learning: Model, Testing, and Deployment of Machine Learning
            Models with Python
          </li>
          <li>Web Scraping: Creating Databases from Web Pages with Python</li>
          <li>
            Neural Networks: Development and Deployment of Neural Network Models
            (Normal, Convolutional, Recurrent), NLP, AutoEncoders, Generative
            Adversarial with Python
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Curriculum;
