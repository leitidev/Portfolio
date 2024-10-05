import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql
} from "react-icons/di";

import { FaAws } from 'react-icons/fa'
import {
  SiCss3,
  SiDocker,
  SiFlask,
  SiHtml5,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiDotnet,
  SiCsharp,
  SiVite,
  SiSpringboot,
  SiOracle,
  SiMicrosoftsqlserver,
  SiAzuredevops,
  SiVisualstudiocode,
  SiVisualstudio,
  SiIntellijidea,
  SiPostman,
  SiInsomnia,
  SiGooglecolab,
  SiAndroidstudio,
  SiFigma
} from 'react-icons/si'
import { TbBrandGolang, TbBrandReactNative } from "react-icons/tb";
import '../../styles/About.css'

function Techstack() {
  const languages = [
    { text: 'JavaScript', icon: <DiJavascript1 /> },
    { text: 'TypeScript', icon: <SiTypescript /> },
    { text: 'Python', icon: <DiPython /> },
    { text: 'Java', icon: <DiJava /> },
    { text: 'C#', icon: <SiCsharp /> }
  ]

  const frontend = [
    { text: 'React.js', icon: <DiReact /> },
    { text: 'Next.js', icon: <SiNextdotjs /> },
    { text: 'Vite', icon: <SiVite /> },
    { text: 'React Native', icon: <TbBrandReactNative /> },
    { text: 'HTML', icon: <SiHtml5 /> },
    { text: 'CSS', icon: <SiCss3 /> },
    { text: '.NET', icon: <SiDotnet/>}
  ]

  const backend = [
    { text: 'Node.js', icon: <DiNodejs /> },
    { text: 'Flask', icon: <SiFlask /> },
    { text: 'SpringBoot', icon: <SiSpringboot/>}
  ]

  const databases = [
    { text: 'Oracle', icon: <SiOracle/>},
    { text: 'SQL Server', icon: <SiMicrosoftsqlserver/>},
    { text: 'PostgreSQL', icon: <SiPostgresql /> },
    { text: 'MySQL', icon: <DiMysql /> },
    { text: 'MongoDB', icon: <DiMongodb /> }
  ]

  const cloudTools = [
    { text: 'AWS', icon: <FaAws /> },
    { text: 'Docker', icon: <SiDocker /> },
    { text: 'Azure', icon: <SiAzuredevops /> },
  ]

  const developmentTools = [
    { text: 'Git', icon: <DiGit /> },
    { text: 'Visual Studio code', icon: <SiVisualstudiocode /> },
    { text: 'Visual Studio', icon: <SiVisualstudio /> },
    { text: 'IntelliJ', icon: <SiIntellijidea /> },
    { text: 'Postman', icon: <SiPostman /> },
    { text: 'Insomnia', icon: <SiInsomnia /> },
    { text: 'Google Colab', icon: <SiGooglecolab /> },
    { text: 'Android Studio', icon: <SiAndroidstudio /> },
    { text: 'Figma', icon: <SiFigma /> }
  ]

  // Array of tech stack icons.
  const techstack = {
    Languages: languages,
    Frontend: frontend,
    Backend: backend,
    Databases: databases,
    'Cloud Tools': cloudTools,
    'Development Tools': developmentTools
  }

  return (
    <div className='techstack-container'>
      {/* Component Title */}
      <h1 className='heading'>
        Professional <strong className='purple' children='Skillset' />
      </h1>

      {/* Techstack Subsections */}
      {Object.keys(techstack).map((tech, index) => (
        <Row className='tech-row' key={index} style={{ justifyContent: 'center' }}>
          {/* Techstack Title */}
          <h1 className='heading purple'>{tech}</h1>

          {/* Techstack Icons */}
          {techstack[tech].map((tech, index) => (
            <Col xs={4} md={2} className='tech-icons' key={index}>
              {tech.icon}
              <div className='tech-text purple' children={tech.text} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  )
}

export default Techstack