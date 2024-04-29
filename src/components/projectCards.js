import projects from "../resources/projects.json";

function openLink(url) {
  window.open(url, "_blank");
}

function createCardDescription(project) {
  const descContainer = document.createElement("div");
  descContainer.classList.add("project-desc");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");

  const title = document.createElement("p");
  title.textContent = project.projectName;

  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons");

  const githubIcon = document.createElement("a");
  githubIcon.setAttribute("href", project.github);
  githubIcon.setAttribute("target", "_blank");

  const githubImg = document.createElement("img");
  githubImg.src = "./assets/github-icon.png";

  githubIcon.appendChild(githubImg);
  iconsContainer.appendChild(githubIcon);

  if (project.demo != "") {
    const demoIcon = document.createElement("a");
    demoIcon.setAttribute("href", project.demo);
    demoIcon.setAttribute("target", "_blank");

    const demoImg = document.createElement("img");
    demoImg.src = "./assets/demo-icon.png";

    demoIcon.appendChild(demoImg);

    iconsContainer.appendChild(demoIcon);
  }

  headerContainer.appendChild(title);
  headerContainer.appendChild(iconsContainer);

  const description = document.createElement("div");
  description.classList.add("description");
  const descriptionText = document.createElement("p");
  descriptionText.textContent = project.projectDesc;

  description.appendChild(descriptionText);

  descContainer.appendChild(headerContainer);
  descContainer.appendChild(description);

  return descContainer;
}

function createCard(project) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("project-image");

  const image = document.createElement("img");
  image.src = project.imgLink;
  image.alt = project.imgAlt;

  imageContainer.appendChild(image);

  const descContainer = createCardDescription(project);

  const container = document.createElement("div");
  container.classList.add("card");

  container.appendChild(imageContainer);
  container.appendChild(descContainer);

  return container;
}

function renderProjectCard() {
  const cardContainer = document.querySelector(".card-container");
  projects.forEach((project) => {
    const card = createCard(project);
    cardContainer.appendChild(card);
  });
}

export default renderProjectCard;
