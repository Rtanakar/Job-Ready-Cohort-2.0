const users = [
  {
    fullName: "Ethan Miller",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    profession: "Software Engineer",
    description:
      "Builds scalable web applications with a strong focus on performance.",
    tags: ["JavaScript", "Node.js", "Cloud"],
  },
  {
    fullName: "Sophia Johnson",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    profession: "Product Designer",
    description: "Creates intuitive and elegant product experiences for users.",
    tags: ["UI/UX", "Figma", "Design Systems"],
  },
  {
    fullName: "Liam Anderson",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    profession: "Data Scientist",
    description: "Analyzes complex datasets to drive business decisions.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    fullName: "Olivia Brown",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    profession: "Digital Marketer",
    description:
      "Helps brands grow online through data-driven marketing strategies.",
    tags: ["SEO", "Content Marketing", "Analytics"],
  },
  {
    fullName: "Noah Wilson",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    profession: "DevOps Engineer",
    description:
      "Automates deployments and maintains reliable cloud infrastructure.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    fullName: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    description:
      "Passionate about building responsive and accessible web interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    fullName: "Neha Verma",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    profession: "UI/UX Designer",
    description:
      "Designs user-friendly and visually appealing digital experiences.",
    tags: ["Figma", "Adobe XD", "UX Research"],
  },
  {
    fullName: "Rohit Singh",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    profession: "Backend Developer",
    description: "Specializes in scalable server-side applications and APIs.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    fullName: "Priya Patel",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Full Stack Developer",
    description:
      "Enjoys working across the stack to deliver complete solutions.",
    tags: ["MERN", "Next.js", "TypeScript"],
  },
  {
    fullName: "Karan Mehta",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    profession: "Software Tester",
    description:
      "Ensures product quality through manual and automated testing.",
    tags: ["Testing", "Jest", "Cypress"],
  },
];

const main = document.querySelector("main");
let data = "";
users.forEach((elem) => {
  return (data =
    data +
    `
<div class="card">
      <img
        src=${elem.image}
        alt="panther-img">

      <div class="inner-card">
        <h2><i class="ri-heart-3-line"><span></span></i></h2>
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <h5>${elem.description}</h5>
        <h6>${elem.tags}</h6>
      </div>
    </div>`);
});

main.innerHTML = data;
