import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import one8 from "../../Assets/Projects/one8.gif";
import tse from "../../Assets/Projects/tse.gif";
import leads  from "../../Assets/Projects/leads.gif";
import blackjack from "../../Assets/Projects/blackjack.gif";
import empower from "../../Assets/Projects/empower.gif";
import Tictactoe from "../../Assets/Projects/Tictactoe.gif";
import pix from "../../Assets/Projects/pix.png";
import pragati from "../../Assets/Projects/pragati.png";
import resource from "../../Assets/Projects/resource.png";
import inter from "../../Assets/Projects/inter.png";
import food from "../../Assets/Projects/food.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resource}
              isBlog={false}
              title="Resource Sharing Platform"
              description="Developed a Resource Station web app for public resource sharing and secured private storage of tasks, deadlines, and 
              documents. Built with React, Redux, and Firebase, it ensures real-time updates, authentication, and seamless data management. 
              Integrated an AI Chatbot (Rogue Rose 103B v0.2) 
              for assistance and a Canva Whiteboard for collaboration, showcasing expertise in full-stack development and AI-driven user engagement."
              ghLink="https://github.com/Nishka30/ResourceSharingApp"
              demoLink="https://nishka-notes-app.vercel.app/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inter}
              isBlog={false}
              title="AI-Powered Mock Interview Platform"
              description="Developed an AI-powered interview platform using the MERN stack, where Rogue Rose 103B v0.2 generates job-specific questions, conducts mock interviews, and evaluates responses. Integrated speech-to-text analysis, AI-driven coding challenges, and structured feedback, along with performance tracking and personalized recommendations, showcasing expertise in AI integration and full-stack development."
              ghLink="https://github.com/Nishka30/PrepVault"
              demoLink="https://nishka-prep-vault.vercel.app/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="FoodFire App" 
              description="Developed a food ordering app using React.js and the Swiggy API, featuring restaurant listings, menu display, real-time search, cart functionality, and lazy loading for optimized performance. Built with Redux and Tailwind CSS for state management and responsive UI."
              ghLink="https://github.com/Nishka30/FoodApp-in-ReactJS"
              demoLink="https://foodfire-app.vercel.app/"
              
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pix}
              isBlog={false}
              title="Pix Mender"
              description="Created a web application for users to upload IDs, photos, and signatures in one go, with automatic sorting and storage in dedicated database folders. The system features secure data handling and an intuitive interface. This project showcases my expertise in web development, database management, and security."
              ghLink="https://github.com/Nishka30/PixMender"
              
              
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tse}
              isBlog={false}
              title="T-Series Redefined"
              description="
              Revitalized T-Series website with a modern, user-friendly design, boasting a dynamic slider, direct links to songs and videos, concert booking, featured albums, news updates, global subscriber count, and upcoming movie releases for an immersive experience."
              ghLink="https://github.com/Nishka30/T-Series-2.0"
              demoLink="https://nishka-t-series.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pragati}
              isBlog={false}
              title="Pragati 2024"
              description="Developed and launched Pragati 2024 website for our annual technical tech fest, enabling seamless event 
              exploration and registration for students. Implemented a user-friendly design, comprehensive event information, and 
              interactive features for an enhanced user experience."
              ghLink="https://github.com/Nishka30/Pragati-2024"
              demoLink="https://www.pragati2024.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={one8}
              isBlog={false}
              title="One8Commune"
              description="
              Seamless platform for hassle-free restaurant table bookings and discovery of various locations. Elevate your dining experience with our user-friendly interface and real-time chatbot, ensuring not just efficiency but also a touch of personalized and friendly customer service."
              ghLink="https://github.com/Nishka30/One8Commune"
              demoLink="https://one8commune.netlify.app/"
              
            />
          </Col>

         


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empower}
              isBlog={false}
              title="FemME Power"
              description="
              Your go-to women's empowerment hub, offering personalized job matching, a supportive chatbot, safety measures, employer partnerships, training, and a vibrant community. Redefining opportunities for rural women, fostering independence, and creating positive change."
              ghLink="https://github.com/Nishka30/FemMe-Power"
              demoLink="https://femmepower.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leads}
              isBlog={false}
              title="Leads Tracker"
              description="A Chrome extension designed for flawless lead management, seamlessly blending local storage prowess with optimized performance. Exciting news—it's now deployed and ready for seamless practical use, revolutionizing your workflow with unparalleled efficiency and precision!"
              ghLink="https://github.com/Nishka30/LeadsTracker"
              demoLink="https://nishka-leads-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tictactoe}
              isBlog={false}
              title="TicTacToe"
              description="              
              Check out my Tic Tac Toe game, crafted using JavaScript! Play against a friend or challenge the AI on the 3x3 board. Aim for three in a row to win, and when the game concludes, a message reveals the result. Enjoy this engaging and challenging game suitable for players of all skill levels!"
              ghLink="https://github.com/Nishka30/Tic-Tac-Toe"
              demoLink="https://nishka-tictactoe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackjack}
              isBlog={false}
              title="BlackJack"
              description="Explore the exciting world of Blackjack on my website, crafted with passion and powered by JavaScript! Immerse yourself in the classic card game where luck meets strategy. From game setup to playing tactics, I've woven it all together to create an engaging Blackjack experience."
              ghLink="https://github.com/Nishka30/Black-Jack"
              demoLink="https://nishka-blackjack.netlify.app/"
            />
          </Col>

         

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
