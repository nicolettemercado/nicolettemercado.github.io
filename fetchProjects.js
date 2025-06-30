const projects = [
  {
    name: "Resume Page",
    description: "Created a resume page using a special GitHub repository using HTML and CSS to showcase my skills and experience.",
    url: "https://github.com/nicolettemercado/nicolettemercado.github.io"
  },
  {
    name: "With love, Nicolette",
    description: "Used HTML and CSS to code a responsive personal blog that I update to showcase and practice my continuous growth in web development.",
    url: "https://github.com/nicolettemercado/build-something-of-your-choice/tree/main"
  }
];

const container = document.getElementById("projectsContainer");

projects.forEach(project => {
  const div = document.createElement("div");
  div.classList.add("project-box");

  div.innerHTML = `
    <h2>${project.name}</h2>
    <p>${project.description}</p>
    <a href="${project.url}" target="_blank">View on GitHub</a>
  `;

  container.appendChild(div);
});
