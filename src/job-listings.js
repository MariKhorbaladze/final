var newSection = document.getElementById("newSection");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
var pagination = document.getElementById("pagination");

var currentPage = 1;
var jobsPerPage = 10;
var totalJobs = 50;
var totalPages = Math.ceil(totalJobs / jobsPerPage);
var jobData = []; 

fetch("https://remotive.io/api/remote-jobs?limit="+totalJobs)
  .then(response => response.json())
  .then(data => {
    jobData = data.jobs;

    displayJobListings(currentPage);
  })
  .catch(error => {
    console.error("Error fetching jobs:", error);
  });

function displayJobListings(page) {
  var startIndex = (page - 1) * jobsPerPage;
  var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);

  newSection.innerHTML = "";

  for (var i = startIndex; i < endIndex; i++) {
    var job = jobData[i];
    var jobElement = document.createElement("div");
    jobElement.classList.add("job-listing");
    jobElement.innerHTML = `
      <h3>${job.title}</h3>
      <p class="company">${job.company_name}</p>
      <p class="location">${job.location}</p>
    `;

    jobElement.dataset.index = i;

jobElement.addEventListener("click", function() {
  var index = parseInt(this.dataset.index);
  var job = jobData[index];
  
  var newWindow = window.open("", "_blank");

  
  newWindow.document.write(`
    <html>
    <head>
      <title>Job Details</title>
    </head>
    <body>
    <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
    }
  
    h1 {
      margin-bottom: 10px;
      text-align: center;
      color: #333;
    }
  
    p {
      margin-bottom: 20px;
      text-align: center;
      color: #666;
    }
  
    .photoItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      position: relative;
    }
  
    .photoItem:hover {
      transform: translateY(-5px);
    }
  
    .companyName {
      font-weight: bold;
      color: #333;
    }
  
    .photo {
      cursor: pointer;
      border-radius: 5px;
      max-width: 100%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }
  
    .photo:hover {
      transform: scale(1.05);
    }
  
    .background-color {
      background-color: #e6e6e6;
    }
  
    .frame {
      position: relative;
      width: fit-content;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
    }
  
  
    body {
      background: linear-gradient(to right, #e6e6e6, #f5f5f5);
    }
  
    h1 {
      font-size: 24px;
      color: #333;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
  
    p {
      font-size: 16px;
      color: #666;
    }
  
    .companyName {
      font-weight: bold;
      color: #333;
      margin-top: 10px;
    }
  
    .photoItem {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .photo {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .photo:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  
    .photoItem:nth-child(odd) {
      background-color: #f9f9f9;
    }
  
    .frame {
      position: relative;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  </style>
      <h2>${job.title}</h2>
      <h4>Company: ${job.company_name}</h4>
      <p>Location: ${job.location}</p>
      <p>Description: ${job.description}</p>
    </body>
    </html>
  `);
});



    newSection.appendChild(jobElement);
  }

  generatePaginationButtons(page);
}

function generatePaginationButtons(currentPage) {
  pagination.innerHTML = "";

  var prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.addEventListener("click", function() {
    if (currentPage > 1) {
      currentPage--;
      displayJobListings(currentPage);
    }
  });
  pagination.appendChild(prevButton);

  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", function() {
      var selectedPage = parseInt(this.textContent);
      displayJobListings(selectedPage);
    });
    pagination.appendChild(pageButton);
  }

  var nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", function() {
    if (currentPage < totalPages) {
      currentPage++;
      displayJobListings(currentPage);
    }
  });
  pagination.appendChild(nextButton);
}


jobElement.addEventListener("click", function() {
  var index = parseInt(this.dataset.index);
  var job = jobData[index];

  var jobDetailsContainer = document.getElementById("jobDetailsContainer");

  jobDetailsContainer.innerHTML = `
    <h2>${job.title}</h2>
    <h4>Company: ${job.company_name}</h4>
    <p>Location: ${job.location}</p>
    <p>Description: ${job.description}</p>
  `;
});


