import { HiUser } from "react-icons/hi";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaComment,
} from "react-icons/fa";

function Contact() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Contact Information
      </h1>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <HiUser size={24} style={{ marginRight: "0.75rem" }} />
          <span>Gonzalo Chávez Cerda</span>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FaPhone size={24} style={{ marginRight: "0.75rem" }} />
          <a href="tel:+56987689330" style={{ textDecoration: "none" }}>
            +56 9 8768 9330
          </a>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FaEnvelope size={24} style={{ marginRight: "0.75rem" }} />
          <a
            href="mailto:gchavez@fen.uchile.cl"
            style={{ textDecoration: "none" }}
          >
            gchavez@fen.uchile.cl
          </a>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FaMapMarkerAlt size={24} style={{ marginRight: "0.75rem" }} />
          <span>Concepción, Biobío, Chile</span>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FaGithub size={24} style={{ marginRight: "0.75rem" }} />
          <a
            href="https://github.com/NChavezC?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            NChavezC
          </a>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <FaLinkedin size={24} style={{ marginRight: "0.75rem" }} />
          <a
            href="https://www.linkedin.com/in/gonzalo-ch%C3%A1vez-cerda-a04726114/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Gonzalo Chávez Cerda
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
