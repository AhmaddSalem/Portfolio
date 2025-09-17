document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    1: {
      title: "Project Title 1",
      img: "images/project1.jpg",
      desc: "This is Project 1 description. Technologies used, challenges, and outcomes.",
      link: "https://github.com/AhmaddSalem"
    },
    2: {
      title: "Project Title 2",
      img: "images/project2.jpg",
      desc: "This is Project 2 description. Showcasing unique features and results.",
      link: "https://github.com/AhmaddSalem"
    },
    3: {
      title: "Project Title 3",
      img: "images/project3.jpg",
      desc: "This is Project 3 description. Explain your role and what makes it special.",
      link: "https://github.com/AhmaddSalem"
    }
  };

  const projectCards = document.querySelectorAll(".project-card");
  const detailSection = document.getElementById("project-detail");
  const detailContainer = detailSection.querySelector("div");
  const detailTitle = document.getElementById("detail-title");
  const detailImg = document.getElementById("detail-img");
  const detailDesc = document.getElementById("detail-desc");
  const detailLink = document.getElementById("detail-link");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.project;
      const data = projects[id];

      detailTitle.textContent = data.title;
      detailImg.src = data.img;
      detailDesc.textContent = data.desc;
      detailLink.href = data.link;

      // Reveal detail section
      detailSection.classList.remove("hidden");
      setTimeout(() => {
        detailContainer.classList.add("opacity-100", "translate-y-0");
      }, 50);

      // Smooth scroll to detail section
      detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
