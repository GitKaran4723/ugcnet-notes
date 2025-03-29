async function loadSyllabus() {
  const res = await fetch("data/syllabus.json");
  const data = await res.json();
  renderSyllabus(data.papers);
}

function renderSyllabus(papers) {
  const container = document.getElementById("syllabus-root");
  container.innerHTML = "";

  papers.forEach((paper) => {
    const paperDetails = document.createElement("details");
    paperDetails.innerHTML = `<summary>${paper.name}</summary>`;
    const unitList = document.createElement("div");

    paper.units.forEach((unit) => {
      const unitDetails = document.createElement("details");
      unitDetails.innerHTML = `<summary>${unit.name}</summary>`;
      const chapterList = document.createElement("div");

      unit.chapters.forEach((chap) => {
        const chapDetails = document.createElement("details");
        chapDetails.innerHTML = `<summary>${chap.name}</summary>`;
        const conceptList = document.createElement("ul");

        chap.concepts.forEach((con) => {
          const li = document.createElement("li");
          li.className = "ml-6 mb-1";
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = "🔹 " + con.name;
          a.className = "text-blue-700 hover:underline";
          a.addEventListener('click', (e) => {
            e.preventDefault(); // 👈 Prevent scrolling to top
            openConcept(con.markdown_url);
          });
          
          li.appendChild(a);
          conceptList.appendChild(li);
        });

        chapDetails.appendChild(conceptList);
        chapterList.appendChild(chapDetails);
      });

      unitDetails.appendChild(chapterList);
      unitList.appendChild(unitDetails);
    });

    paperDetails.appendChild(unitList);
    container.appendChild(paperDetails);
  });
}

async function openConcept(mdUrl) {
  console.log("URL Requested", mdUrl);

  // Navigate to rendernotes.html and pass mdUrl as a query parameter
  window.location.href = `rendernotes.html?mdUrl=${encodeURIComponent(mdUrl)}`;
}

function closeModal() {
  document.getElementById("markdownModal").classList.remove("active");
  document.body.classList.remove("no-scroll");
}

loadSyllabus();
