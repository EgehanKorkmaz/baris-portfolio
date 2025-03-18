import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Engineering",
      skills: [
        { name: "Aircraft Design", level: 90 },
        { name: "Aerodynamics", level: 85 },
        { name: "Structural Analysis", level: 80 },
        { name: "CAD/CAM", level: 85 },
        { name: "Fluid Mechanics", level: 75 },
      ],
    },
    {
      title: "Softwares",
      skills: [
        { name: "Simens NX", level: 95 },
        { name: "AutoCAD", level: 70 },
        { name: "Python", level: 50 },
        { name: "MATLAB", level: 65 },
        { name: "C", level: 40 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Technical Writing", level: 80 },
        { name: "Project Management", level: 75 },
        { name: "Communication", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-divider"></div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

