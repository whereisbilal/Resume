 const technologies = [
      { name: "HTML5", symbol: "5", color: "#E34F26" },
      { name: "CSS3", symbol: "3", color: "#1572B6" },
      { name: "JavaScript", symbol: "JS", color: "#D8B900" },
      { name: "TypeScript", symbol: "TS", color: "#3178C6" },
      { name: "React", symbol: "⚛", color: "#20BDEB" },
      { name: "Next.js", symbol: "N", color: "#111111" },
      { name: "Tailwind CSS", symbol: "≈", color: "#36BFC1" },
      { name: "Redux", symbol: "♧", color: "#764ABC" },
      { name: "Vite", symbol: "ϟ", color: "#8B5CF6" },
      { name: "Node.js", symbol: "⬡", color: "#83CD29" },
      { name: "Express.js", symbol: "ex", color: "#343434" },
      { name: "MongoDB", symbol: "♦", color: "#47A248" },
      { name: "Git", symbol: "⑂", color: "#F05032" },
      { name: "GitHub", symbol: "●", color: "#171717" },
      { name: "VS Code", symbol: "⟨/⟩", color: "#29B6F6" }
    ];

    const techGrid = document.getElementById("tech-grid");

    technologies.forEach(tech => {
      const card = document.createElement("div");
      card.className = "tech-card";
      card.title = tech.name;

      const icon = document.createElement("div");
      icon.className = "tech-icon";
      icon.style.color = tech.color;
      icon.textContent = tech.symbol;

      const name = document.createElement("span");
      name.textContent = tech.name;

      card.append(icon, name);
      techGrid.appendChild(card);
    });

    const projects = [
  {
    name: "LogoVines",
    description:
      "A modern logo gallery platform for uploading and showcasing logos.",
    // tech: "Next.js • TypeScript • Tailwind CSS • MongoDB • Mongoose • Cloudinary • Nodemailer • JWT • Gemini AI",
    image: "",
    demo: "https://logovines.vercel.app/",
    source: "https://github.com/whereisbilal/LogoVines",
  },
  {
    name: "JSProjectForge",
    description:
      "A platform featuring beginner-to-advanced web development projects.",
    // tech: "Next.js • TypeScript • Tailwind CSS • Firebase • Framer Motion",
    image: "",
    demo: "https://jsprojectforge.vercel.app/",
    source: "https://github.com/whereisbilal/JSProjectForge",
  },
  {
    name: "DumData",
    description:
      "A fake data generator that helps developers create realistic mock data for apps and APIs.",
    // tech: "Next.js • TypeScript • Tailwind CSS • MongoDB • API",
    image: "",
    demo: "https://dumdata.vercel.app/",
    source: "https://github.com/whereisbilal/DumData",
  },
  {
    name: "MailVines",
    description: "Free temporary & disposable email.",
    // tech: "Node.js • TypeScript • Tailwind CSS • GitHub • MongoDB",
    image: "",
    demo: "https://mailvines.vercel.app/",
    source: "https://github.com/whereisbilal/MailVines",
  },
//   {
//     name: "E-Commerce App",
//     description:
//       "A modern e-commerce application for premium hoodies.",
//     tech: "Next.js • React • TypeScript • Tailwind CSS • Responsive Design",
//     image: "/Projects_Img/bg5.png",
//     demo: "https://hoodanix.vercel.app/",
//     source: "https://github.com/whereisbilal/HoodAnix",
//   },
//   {
//     name: "Amna's Mehndi Studio",
//     description:
//       "A responsive mehndi services website built with Next.js.",
//     tech: "Next.js • React • TypeScript • Tailwind CSS • Framer Motion",
//     image: "/Projects_Img/bg6.png",
//     demo: "https://amna-s-mehndi-studio.vercel.app/",
//     source: "https://github.com/whereisbilal/AmnaS",
//   },
//   {
//     name: "Villa Website",
//     description:
//       "A modern villa booking website built with React and Tailwind CSS.",
//     tech: "React • Tailwind CSS • React Router • Resend • Booking Website",
//     image: "/Projects_Img/bg2.png",
//     demo: "https://villaaa.vercel.app/",
//     source: "https://github.com/whereisbilal/Villa",
//   },
];

    const projectsGrid = document.getElementById("projects-grid");

    projects.forEach(project => {
      const card = document.createElement("article");
      card.className = "project";

      const visual = project.image
        ? `<img class="project-image"
                src="${project.image}"
                alt="${project.name} project preview"
                loading="lazy">`
        : `<div class="project-placeholder">
             ${project.name}
             <small>PROJECT PREVIEW</small>
           </div>`;

      card.innerHTML = `
        <div>${visual}</div>
        <div class="project-info">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a class="small-btn"
               href="${project.demo}"
               target="_blank"
               rel="noopener noreferrer">Live Demo</a>
            <a class="small-btn"
               href="${project.source}"
               target="_blank"
               rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // CONTRIBUTION GRID DEMO
    // This is illustrative data, NOT your real GitHub contribution data.
    // The actual GitHub graph needs GitHub's contribution data or API.

    const activityGrid = document.getElementById("activity-grid");
    let seed = 2026;

    function random() {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    }

    let activeDays = 0;

    for (let i = 0; i < 371; i++) {
      const day = document.createElement("div");
      const level = random() > 0.68
        ? Math.ceil(random() * 4)
        : 0;

      day.className = "day";
      day.dataset.level = level;
      day.title = "Illustrative activity preview";

      if (level > 0) activeDays++;

      activityGrid.appendChild(day);
    }

    document.getElementById("activity-caption").textContent =
      "Illustrative activity preview — not live GitHub data.";