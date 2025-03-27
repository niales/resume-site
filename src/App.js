import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const [expandedJob, setExpandedJob] = useState('noontide');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const resumeData = {
    basics: {
      name: "Benjamin Rude",
      title: "Experienced SQL, C#, and Javascript Developer",
      tagline: "Solutions Architect with a proven track record delivering high quality software",
      contact: {
        address: "1240 India St #2004, San Diego CA, 92101",
        phone: "(715) 808-4230",
        email: "MrBenRude@gmail.com"
      }
    },
    experience: [
      {
        id: "noontide",
        company: "Noontide Services",
        location: "Remote",
        title: "Solutions Architect",
        period: "Oct 2021 - January 2025",
        website: "https://www.noontideservice.com",
        highlights: [
          "Engineered cloud-native solutions on AWS, incorporating Docker containerization and optimizing Redis caching strategies, achieving a 75% reduction in first page load time",
          "Implemented AI based order system using OpenAI APIs to automatically generate work orders saving 4+ hours of manual work per day",
          "Facilitated collaborative technical design sessions; crafted system diagrams for enterprise applications, resulting in zero critical system outages and a 99.99% application uptime",
          "Established DevOps processes and service templates, reducing new service deployment time by 75%"
        ]
      },
      {
        id: "emergent",
        company: "Emergent Software",
        location: "Edina MN",
        title: "Senior Software Engineer",
        period: "Oct 2018 - October 2021",
        website: "https://www.emergentsoftware.net",
        highlights: [
          "Managed deliverables across 4 concurrent projects while maintaining quality standards and deadlines",
          "Engineered a Sitecore CMS-based e-commerce platform for Tileshop.com, implementing features that cut content update times by 40%",
          "Created REST API integration between QuickBase and QuickBooks that automated financial processes, saving 25+ hours weekly",
          "Designed a resilient data synchronization architecture with automated failover capabilities, minimizing data loss during system outages and maintaining data availability for critical business operations"
        ]
      },
      {
        id: "chrobinson3",
        company: "C.H. Robinson",
        location: "Eden Prairie MN",
        title: "Senior Software Engineer/Tech Lead",
        period: "January 2017 - Oct 2018",
        website: "https://www.chrobinson.com",
        highlights: [
          "Mentored junior developers on financials domain, C#, object oriented design, and T-SQL performance tuning reducing response times from minutes to seconds",
          "Fostered a positive environment leading team to reach top 5% in employee satisfaction",
          "Orchestrated project workflow using Zenhub. Collaborated with product owners to deliver features on time, increasing team velocity by 20",
          "Spearheaded the development of efficient T-SQL queries and Oracle Cloud Service integrations, slashing financial reporting processing time by 60%",
          "Optimized T-SQL database queries resulting in 60% reduction in processing time for financial reporting",
          "Presented software architecture and design principles to junior engineers through bi-weekly whiteboard sessions, reducing code defects by 15%",
          "Cultivated a collaborative environment for resolving technical conflicts, resulting in 100% alignment on technology choices and maintaining green project statuses across all assigned initiatives"
        ]
      },
      {
        id: "chrobinson2",
        company: "C.H. Robinson",
        location: "Eden Prairie MN",
        title: "Programmer Analyst 2",
        period: "July 2013 - December 2016",
        highlights: [
          "Primary developer for high volume and mission critical financial order software",
          "Planned upcoming work by performing gap analysis, architectural discussions, and requirements gathering improving team velocity over 25%",
          "Shared domain knowledge and programming techniques through paired programming for VB.NET, C#, and T-SQL projects reducing bugs by 20%",
          "Optimized database queries using database best practices, reducing execution time by 75%"
        ]
      },
      {
        id: "chrobinson1",
        company: "C.H. Robinson",
        location: "Eden Prairie MN",
        title: "Programmer Analyst 1",
        period: "March 2011 - June 2013",
        highlights: [
          "Primary developer for profit recognition service, payment disbursements, and recording of payments received",
          "Fixed underlying software issues, resolving an average of 65 tickets weekly, and created 20+ SQL scripts to automate resolutions, improving first-call resolution rates by 25%",
          "Streamlined support processes by creating SQL scripts and protocols for resolving recurring issues increasing ticket resolution by 30%"
        ]
      }
    ],
    education: [
      {
        school: "University of Minnesota",
        location: "Twin Cities",
        degree: "M.S. Software Engineering",
        gpa: "4.0 Cumulative GPA",
        period: "September 2016 - May 2018",
        website: "https://www.umn.edu",
        courses: [
          "Big Data Services",
          "Software Architecture",
          "Project Management",
          "Software Design",
          "Software Process Q&A",
          "Software Testing and Verification",
          "User Interface Design"
        ]
      },
      {
        school: "UDemy",
        location: "Online",
        degree: "LLM Engineering: Master AI, Large Language Models & Agents",
        period: "March 2025",
        website: "https://www.udemy.com"
      },
      {
        school: "UDemy",
        location: "Online",
        degree: "Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT",
        period: "March 2025",
        website: "https://www.udemy.com"
      }
    ],
    certifications: [
      {
        title: "Sitecore Certified Platform Associate Developer",
        issuer: "Sitecore",
        period: "January 2019 - Present",
        website: "https://www.sitecore.com"
      }
    ],
    skills: [
      {
        category: "Programming Languages",
        items: ["C#", "VB.Net", "SQL", "Javascript", "Html 5/CSS", "Python"]
      },
      {
        category: "Tools",
        items: ["Visual Studio", "Visual Studio Code", "SQL Management Studio", "MySQL Workbench", "Azure DevOps", "Git", "Github Actions", "Docker", "Jetbrains"]
      },
      {
        category: "Frameworks & Technologies",
        items: ["React", "Redux", "Jasmine", "ServiceStack", "Moq", "OAuth", "Zenhub", "Elasticsearch", "Sitecore", "MVC", "AWS Cognito", "OpenAI", "Anthropic"]
      },
      {
        category: "Cloud & DevOps",
        items: ["AWS (Cognito, Lambda, SQS)", "Azure Cloud", "Oracle Cloud", "Docker", "CI/CD", "Git", "GitHub Actions"]
      },
      {
        category: "Databases & Caching",
        items: ["SQL Server", "MySQL", "Redis", "Elasticsearch", "MongoDB"]
      },
      {
        category: "Methodologies",
        items: ["Agile", "SCRUM", "Kanban", "Microservices Architecture", "SOLID Principles", "TDD"]
      },
      {
        category: "Platforms & Tools",
        items: ["OpenAI ChatGPT", "Sitecore CMS", "Azure DevOps", "AWS", "Linux"]
      }
    ],
    projects: [
      {
        name: "facilityhawk.com",
        description: "Software Architect for 400 user work order system. React spa with .NET core C# backend. AWS Cognito is used for user authentication. Redis caching and MySQL database.",
        website: "https://www.facilityhawk.com"
      },
      {
        name: "Tileshop.com",
        description: "Senior developer on C# Sitecore website for a $200+ million dollar company. Integrates with SAP for E-Commerce.",
        website: "https://www.tileshop.com"
      },
      {
        name: "RiceLake.com",
        description: "Senior Developer on marketing website in Umbraco with integrated online orders for a company with that exceeds 500.",
        website: "https://www.ricelake.com"
      },
      {
        name: "Oracle Cloud Financial Integration",
        description: "Tech Lead on High volume data transfer to cloud ledger software reducing Accountings workload by 30%."
      },
      {
        name: "Financials Profit Service",
        description: "Maintained high volume VB.Net asmx web service that creates invoices, vouchers, and branch profit."
      }
    ]
  };

  const skillColors = [
    "bg-gradient-to-r from-vibrant-blue to-vibrant-indigo",
    "bg-gradient-to-r from-vibrant-purple to-vibrant-pink",
    "bg-gradient-to-r from-vibrant-teal to-vibrant-emerald",
    "bg-gradient-to-r from-vibrant-amber to-vibrant-pink",
    "bg-gradient-to-r from-vibrant-indigo to-vibrant-purple",
    "bg-gradient-to-r from-vibrant-emerald to-vibrant-teal"
  ];

  const toggleJob = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  return (
    <div className="min-h-screen bg-dark-800 text-dark-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-dark-700 via-dark-900 to-dark-700 text-white p-6 shadow-lg border-b border-dark-600 animate-gradient-x relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-600/20 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-200 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {resumeData.basics.name}
          </h1>
          <p className={`text-xl mt-2 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {resumeData.basics.title}
          </p>
          <p className={`text-lg opacity-80 mt-1 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-80' : 'translate-y-4 opacity-0'}`}>
            {resumeData.basics.tagline}
          </p>

          <div className={`mt-6 flex flex-wrap items-center gap-4 text-sm transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center bg-dark-700/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-glow transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {resumeData.basics.contact.address}
            </div>
            <div className="flex items-center bg-dark-700/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-glow transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {resumeData.basics.contact.phone}
            </div>
            <div className="flex items-center bg-dark-700/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-glow transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {resumeData.basics.contact.email}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-dark-700 shadow-md border-b border-dark-600 sticky top-0 z-20 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <ul className="flex space-x-8 justify-center md:justify-start">
            <li>
              <button
                onClick={() => setActiveSection('experience')}
                className={`pb-2 font-medium transition-all duration-300 relative ${activeSection === 'experience' ? 'text-white' : 'text-dark-200 hover:text-accent-300'}`}
              >
                Experience
                {activeSection === 'experience' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-300 to-vibrant-indigo rounded-full"></span>
                )}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('skills')}
                className={`pb-2 font-medium transition-all duration-300 relative ${activeSection === 'skills' ? 'text-white' : 'text-dark-200 hover:text-accent-300'}`}
              >
                Skills
                {activeSection === 'skills' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-300 to-vibrant-indigo rounded-full"></span>
                )}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('education')}
                className={`pb-2 font-medium transition-all duration-300 relative ${activeSection === 'education' ? 'text-white' : 'text-dark-200 hover:text-accent-300'}`}
              >
                Education
                {activeSection === 'education' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-300 to-vibrant-indigo rounded-full"></span>
                )}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('projects')}
                className={`pb-2 font-medium transition-all duration-300 relative ${activeSection === 'projects' ? 'text-white' : 'text-dark-200 hover:text-accent-300'}`}
              >
                Projects
                {activeSection === 'projects' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-300 to-vibrant-indigo rounded-full"></span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-8 w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-700/10 via-transparent to-transparent"></div>
        
        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-dark-600 pb-2 inline-block">
              Professional Experience
              <div className="h-1 w-1/3 bg-gradient-to-r from-accent-400 to-vibrant-indigo rounded-full mt-1"></div>
            </h2>
            <div className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div 
                  key={job.id} 
                  className={`bg-dark-700/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-dark-600 transition-all duration-500 hover:shadow-glow ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className="p-5 cursor-pointer flex justify-between items-center group"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-300 transition-colors duration-300">{job.title}</h3>
                      <p className="text-dark-200">
                        {job.website ? (
                          <a 
                            href={job.website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-accent-300 transition-colors duration-300"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}, {job.location}
                      </p>
                      <p className="text-sm text-dark-300">{job.period}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-dark-600 group-hover:bg-accent-600 transition-all duration-300 ${expandedJob === job.id ? 'rotate-180' : ''}`}>
                      <svg
                        className="w-5 h-5 text-dark-300 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <div className="px-5 pb-5 border-t border-dark-600 pt-4 animate-fade-in">
                      <ul className="space-y-3 list-none">
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-dark-200 flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent-400 mt-2 mr-3 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-dark-600 pb-2 inline-block">
              Skills
              <div className="h-1 w-1/3 bg-gradient-to-r from-accent-400 to-vibrant-indigo rounded-full mt-1"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.map((skillGroup, groupIndex) => (
                <div 
                  key={groupIndex} 
                  className={`bg-dark-700/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-dark-600 transition-all duration-500 hover:shadow-glow ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${groupIndex * 150}ms` }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`${skillColors[groupIndex % skillColors.length]} text-white px-4 py-1.5 rounded-full text-sm shadow-md hover:shadow-glow transition-shadow duration-300 hover:scale-105 transform`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-dark-600 pb-2 inline-block">
              Education & Certifications
              <div className="h-1 w-1/3 bg-gradient-to-r from-accent-400 to-vibrant-indigo rounded-full mt-1"></div>
            </h2>

            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`bg-dark-700/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-dark-600 transition-all duration-500 hover:shadow-glow ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-dark-200">
                    {edu.website ? (
                      <a 
                        href={edu.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-accent-300 transition-colors duration-300"
                      >
                        {edu.school}
                      </a>
                    ) : (
                      edu.school
                    )}, {edu.location}
                  </p>
                  <p className="text-sm text-dark-300 mb-2">{edu.period}</p>

                  {edu.gpa && (
                    <p className="text-sm font-medium text-accent-300 mb-3 bg-dark-600 inline-block px-3 py-1 rounded-full">
                      {edu.gpa}
                    </p>
                  )}

                  {edu.courses && (
                    <div className="mt-4">
                      <h4 className="text-md font-medium text-dark-200 mb-3">Graduate Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-dark-600 text-accent-300 px-3 py-1 rounded-full text-sm hover:bg-dark-500 transition-colors duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {resumeData.certifications.length > 0 && (
                <div 
                  className={`bg-dark-700/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-dark-600 transition-all duration-500 hover:shadow-glow ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${resumeData.education.length * 150}ms` }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                  {resumeData.certifications.map((cert, index) => (
                    <div key={index} className="mb-4 last:mb-0 flex items-center">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-white">{cert.title}</p>
                        <p className="text-sm text-dark-300">
                          {cert.website ? (
                            <a 
                              href={cert.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-accent-300 transition-colors duration-300"
                            >
                              {cert.issuer}
                            </a>
                          ) : (
                            cert.issuer
                          )} • {cert.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-dark-600 pb-2 inline-block">
              Projects
              <div className="h-1 w-1/3 bg-gradient-to-r from-accent-400 to-vibrant-indigo rounded-full mt-1"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group bg-dark-700/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-dark-600 transition-all duration-500 hover:shadow-glow ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-vibrant-indigo transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-300 transition-colors duration-300">
                      {project.website ? (
                        <a 
                          href={project.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-accent-300 transition-colors duration-300"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <p className="text-dark-200">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-dark-900 text-dark-200 py-6 border-t border-dark-700 mt-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p>Benjamin Rude • Interactive Resume • {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;