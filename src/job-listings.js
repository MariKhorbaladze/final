

// // var newSection = document.getElementById("newSection");
// // var prevButton = document.getElementById("prevButton");
// // var nextButton = document.getElementById("nextButton");
// // var pagination = document.getElementById("pagination");

// //  var currentPage = 1;
// //  var jobsPerPage = 10;
// // var totalJobs = 50;
// //  var totalPages = Math.ceil(totalJobs / jobsPerPage);

// // // Fetch and display the job listings for the current page
// // function displayJobListings(page) {
// //   // Calculate the starting index and ending index for the current page
// //   var startIndex = (page - 1) * jobsPerPage;
// //   var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);

// //   // Fetch job data from the API
// //   fetch("https://remotive.io/api/remote-jobs")
// //     .then(response => response.json())
// //     .then(data => {
// //       // Clear existing job listings
// //       newSection.innerHTML = "";

// //       // Display the job information for the current page
// //       for (var i = startIndex; i < endIndex; i++) {
// //         var job = data.jobs[i];
// //         var jobElement = document.createElement("div");
// //         jobElement.classList.add("job-listing");
// //         jobElement.innerHTML = `
// //           <h3>${job.title}</h3>
// //           <p class="company">${job.company_name}</p>
// //           <p class="location">${job.location}</p>
// //         `;
// //         newSection.appendChild(jobElement);
// //       }

// //       // Generate pagination buttons
// //       generatePaginationButtons(page);
// //     })
// //     .catch(error => {
// //       console.error("Error fetching jobs:", error);
// //     });
// // }

// // // Generate pagination buttons
// // function generatePaginationButtons(currentPage) {
// //   pagination.innerHTML = "";

// //   // Create previous button
// //   var prevButton = document.createElement("button");
// //   prevButton.textContent = "Previous";
// //   prevButton.addEventListener("click", function() {
// //     if (currentPage > 1) {
// //       currentPage--;
// //       displayJobListings(currentPage);
// //     }
// //   });
// //   pagination.appendChild(prevButton);

// //   // Create page buttons
// //   for (var i = 1; i <= totalPages; i++) {
// //     var pageButton = document.createElement("button");
// //     pageButton.textContent = i;
// //     pageButton.addEventListener("click", function() {
// //       var selectedPage = parseInt(this.textContent);
// //       displayJobListings(selectedPage);
// //     });
// //     pagination.appendChild(pageButton);
// //   }

// //   // Create next button
// //   var nextButton = document.createElement("button");
// //   nextButton.textContent = "Next";
// //   nextButton.addEventListener("click", function() {
// //     if (currentPage < totalPages) {
// //       currentPage++;
// //       displayJobListings(currentPage);
// //     }
// //   });
// //   pagination.appendChild(nextButton);
// // }

// // // Initial display of job listings
// // displayJobListings(currentPage);

// // // Add event listener to newSection container
// // newSection.addEventListener("click", function(event) {
// //   // Check if a job listing is clicked
// //   if (event.target.classList.contains("job-listing")) {
// //     // Get the job data associated with the clicked job listing
// //     var jobData = data.jobs[event.target.dataset.index];
    
// //     // Display the job information
// //     console.log("Job Title:", jobData.title);
// //     console.log("Company:", jobData.company_name);
// //     console.log("Location:", jobData.location);
// //     // Add more properties as needed

// //     // You can also update the UI to show the expanded job information in a modal, for example
// //     // Create a modal element and populate it with the job information
// //     // Show the modal to display the expanded job details
// //   }
// // });
// // /////asd

// // // Display the job information for the current page
// // for (var i = startIndex; i < endIndex; i++) {
// //   var job = data.jobs[i];
// //   var jobElement = document.createElement("div");
// //   jobElement.classList.add("job-listing");
// //   jobElement.innerHTML = `
// //     <h3>${job.title}</h3>
// //     <p class="company">${job.company_name}</p>
// //     <p class="location">${job.location}</p>
// //   `;

// //   // Set the data-index attribute to the current index (i)
// //   jobElement.dataset.index = i;

// //   newSection.appendChild(jobElement);
// // }



// var newSection = document.getElementById("newSection");
// var prevButton = document.getElementById("prevButton");
// var nextButton = document.getElementById("nextButton");
// var pagination = document.getElementById("pagination");

// var currentPage = 1;
// var jobsPerPage = 10;
// var totalJobs = 50;
// var totalPages = Math.ceil(totalJobs / jobsPerPage);

// // Store the job data fetched from the API
// var jobData = [];

// // Fetch job data from the API
// fetch("https://remotive.io/api/remote-jobs")
//   .then(response => response.json())
//   .then(data => {
//     // Store the job data
//     jobData = data.jobs;

//     // Initial display of job listings
//     displayJobListings(currentPage);
//   })
//   .catch(error => {
//     console.error("Error fetching jobs:", error);
//   });

// // Fetch and display the job listings for the current page
// function displayJobListings(page) {
//   // Calculate the starting index and ending index for the current page
//   var startIndex = (page - 1) * jobsPerPage;
//   var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);

//   // Clear existing job listings
//   newSection.innerHTML = "";

//   // Display the job information for the current page
//   for (var i = startIndex; i < endIndex; i++) {
//     var job = jobData[i];
//     var jobElement = document.createElement("div");
//     jobElement.classList.add("job-listing");
//     jobElement.innerHTML = `
//       <h3>${job.title}</h3>
//       <p class="company">${job.company_name}</p>
//       <p class="location">${job.location}</p>
//     `;

//     // Set the data-index attribute to the current index (i)
//     jobElement.dataset.index = i;

//     newSection.appendChild(jobElement);
//   }

//   // Generate pagination buttons
//   generatePaginationButtons(page);
// }

// // Generate pagination buttons
// function generatePaginationButtons(currentPage) {
//   pagination.innerHTML = "";

//   // Create previous button
//   var prevButton = document.createElement("button");
//   prevButton.textContent = "Previous";
//   prevButton.addEventListener("click", function() {
//     if (currentPage > 1) {
//       currentPage--;
//       displayJobListings(currentPage);
//     }
//   });
//   pagination.appendChild(prevButton);

  

    

// // Display the job information for the current page
// for (var i = startIndex; i < endIndex; i++) {
//   var job = jobData[i];
//   var jobElement = document.createElement("div");
//   jobElement.classList.add("job-listing");
//   jobElement.innerHTML = `
//     <h3>${job.title}</h3>
//     <p class="company">${job.company_name}</p>
//     <p class="location">${job.location}</p>
//   `;

//   // Set the data-index attribute to the current index (i)
//   jobElement.dataset.index = i;

//   // Add event listener to the job listing
//   jobElement.addEventListener("click", function() {
//     var index = parseInt(this.dataset.index);
//     var job = jobData[index];
//     // Display the job information
//     console.log("Job Title:", job.title);
//     console.log("Company:", job.company_name);
//     console.log("Location:", job.location);
//     // Add more properties as needed
//   });

//   newSection.appendChild(jobElement);
// }};


// var newSection = document.getElementById("newSection");
// var prevButton = document.getElementById("prevButton");
// var nextButton = document.getElementById("nextButton");
// var pagination = document.getElementById("pagination");

// var currentPage = 1;
// var jobsPerPage = 10;
// var totalJobs = 50;
// var totalPages = Math.ceil(totalJobs / jobsPerPage);
// var jobData = ["https://remotive.io/api/remote-jobs"];

// // Fetch job data from the API
// fetch("https://remotive.io/api/remote-jobs")
//   .then(response => response.json())
//   .then(data => {
//     // Store the job data
//     jobData = data.jobs;

//     // Initial display of job listings
//     displayJobListings(currentPage);
//   })
//   .catch(error => {
//     console.error("Error fetching jobs:", error);
//   });

// // Fetch and display the job listings for the current page
// function displayJobListings(page) {
//   // Calculate the starting index and ending index for the current page
//   var startIndex = (page - 1) * jobsPerPage;
//   var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);

//   // Clear existing job listings
//   newSection.innerHTML = "";

//   // Display the job information for the current page
//   for (var i = startIndex; i < endIndex; i++) {
//     var job = jobData[i];
//     var jobElement = document.createElement("div");
//     jobElement.classList.add("job-listing");
//     jobElement.innerHTML = `
//       <h3>${job.title}</h3>
//       <p class="company">${job.company_name}</p>
//       <p class="location">${job.location}</p>
//     `;

//     // Set the data-index attribute to the current index (i)
//     jobElement.dataset.index = i;

//     // Add event listener to the job listing
//     jobElement.addEventListener("click", function() {
//       var index = parseInt(this.dataset.index);
//       var job = jobData[index];
//       // Display the job information
//       console.log("Job Title:", job.title);
//       console.log("Company:", job.company_name);
//       console.log("Location:", job.location);
//       // Add more properties as needed
//     });

//     newSection.appendChild(jobElement);
//   }

//   // Generate pagination buttons
//   generatePaginationButtons(page);
// }

// // Generate pagination buttons
// function generatePaginationButtons(currentPage) {
//   pagination.innerHTML = "";

//   // Create previous button
//   var prevButton = document.createElement("button");
//   prevButton.textContent = "Previous";
//   prevButton.addEventListener("click", function() {
//     if (currentPage > 1) {
//       currentPage--;
//       displayJobListings(currentPage);
//     }
//   });
//   pagination.appendChild(prevButton);

//   // Create page buttons
//   for (var i = 1; i <= totalPages; i++) {
//     var pageButton = document.createElement("button");
//     pageButton.textContent = i;
//     pageButton.addEventListener("click", function() {
//       var selectedPage = parseInt(this.textContent);
//       displayJobListings(selectedPage);
//     });
//     pagination.appendChild(pageButton);
//   }

//   // Create next button
//   var nextButton = document.createElement("button");
//   nextButton.textContent = "Next";
//   nextButton.addEventListener("click", function() {
//     if (currentPage < totalPages) {
//       currentPage++;
//       displayJobListings(currentPage);
//     }
//   });
//   pagination.appendChild(nextButton);
// }

// Initial display of job listings will be handled by the fetch callback



var newSection = document.getElementById("newSection");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
var pagination = document.getElementById("pagination");

var currentPage = 1;
var jobsPerPage = 10;
var totalJobs = 50;
var totalPages = Math.ceil(totalJobs / jobsPerPage);
var jobData = []; // Store the job data fetched from the API

// Fetch job data from the API
fetch("https://remotive.io/api/remote-jobs")
  .then(response => response.json())
  .then(data => {
    // Store the job data
    jobData = data.jobs;

    // Initial display of job listings
    displayJobListings(currentPage);
  })
  .catch(error => {
    console.error("Error fetching jobs:", error);
  });

// Fetch and display the job listings for the current page
function displayJobListings(page) {
  // Calculate the starting index and ending index for the current page
  var startIndex = (page - 1) * jobsPerPage;
  var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);

  // Clear existing job listings
  newSection.innerHTML = "";

  // Display the job information for the current page
  for (var i = startIndex; i < endIndex; i++) {
    var job = jobData[i];
    var jobElement = document.createElement("div");
    jobElement.classList.add("job-listing");
    jobElement.innerHTML = `
      <h3>${job.title}</h3>
      <p class="company">${job.company_name}</p>
      <p class="location">${job.location}</p>
    `;

    // Set the data-index attribute to the current index (i)
    jobElement.dataset.index = i;

// Add event listener to the job listing
jobElement.addEventListener("click", function() {
  var index = parseInt(this.dataset.index);
  var job = jobData[index];
  
  // Open a new window or tab with the job details
  var newWindow = window.open("", "_blank");
  
  // Write the job information to the new window
  newWindow.document.write(`
    <html>
    <head>
      <title>Job Details</title>
    </head>
    <body>
      <h2>${job.title}</h2>
      <h4>Company: ${job.company_name}</h4>
      <p>Location: ${job.location}</p>
      <p>Description: ${job.description}</p>
      <!-- Add more properties as needed -->
    </body>
    </html>
  `);
});



    newSection.appendChild(jobElement);
  }

  // Generate pagination buttons
  generatePaginationButtons(page);
}

// Generate pagination buttons
function generatePaginationButtons(currentPage) {
  pagination.innerHTML = "";

  // Create previous button
  var prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.addEventListener("click", function() {
    if (currentPage > 1) {
      currentPage--;
      displayJobListings(currentPage);
    }
  });
  pagination.appendChild(prevButton);

  // Create page buttons
  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", function() {
      var selectedPage = parseInt(this.textContent);
      displayJobListings(selectedPage);
    });
    pagination.appendChild(pageButton);
  }

  // Create next button
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


