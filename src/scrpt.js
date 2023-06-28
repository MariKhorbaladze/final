
var photos = [
  {
    url: "https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000010127200.jpg",
    width: 300,
    height: 250
  },
  
  {
    url: "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609347443412-BY6YPT4NB3RHTLCNZ7O7/image-asset.jpeg?format=2500w",
    width: 300,
    height: 250
  },
  {
    url: "https://www.investopedia.com/thmb/diMRGUPbZ4-I2a4VMyeTx5-TMLs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1349988090-cd961ecf897c4c3ba0502c9db09c59af.jpg",
    width: 300,
    height: 250
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375996518-DZU53FYNB3FMBYB1JHG6/HP-logo+2021.jpg?format=2500w",
    width: 300,
    height: 250
  },
   {
    url: "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375769634-EG1WOTIN7Y4MB01N8AV1/Domino%E2%80%99s-logo-2021.jpg?format=2500w",
    width: 300,
    height: 250
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609354030550-9ZOL45B4SJTEL9DLA12J/KFC-Logo-2021.jpg?format=2500w",
    width: 300,
    height: 250
  },
];


var container = document.getElementById("photoContainer");

photos.forEach(function(photo) {
  var img = document.createElement("img");

  img.src = photo.url;

  img.width = photo.width;
  img.height = photo.height;

  img.classList.add("photo");

  container.appendChild(img);
});




// // // Get the link element
// ainer.appendChild(paragraph);
// //
// // });

// 3
// // Get the link element
// var newLink = document.getElementById("newLink");

// // Get the section element where you want to navigate
// var newSection = document.getElementById("newSection");

// // Add a click event listener to the link
// newLink.addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the default behavior of the link

//   // Scroll to the section
//   newSection.scrollIntoView({ behavior: "smooth" });
// });


// 50vacancies
// page = 3
// pagesize = 10
// start = pagesize*page-pagesize
// end = pagesize*page

// var newLink = document.getElementById("newLink");
// var newSection = document.getElementById("newSection");

// newLink.addEventListener("click", function(event) {
//   event.preventDefault();

//   // Fetch job data from the API
//   fetch("https://remotive.io/api/remote-jobs?limit=50")
//     .then(response => response.json())
//     .then(data => {
//       // Clear existing job listings
//       newSection.innerHTML = "";

//       // Display the job information
//       data.forEach(job => {
//         var jobElement = document.createElement("div");
//         jobElement.textContent = job.title; // Customize this according to your job data structure
//         newSection.appendChild(jobElement);
//       });
//     })
//     .catch(error => {
//       console.error("Error fetching jobs:", error);
//     });

//   // Scroll to the section
//   newSection.scrollIntoView({ behavior: "smooth" });
// });

////asd/

// var newLink = document.getElementById("newLink");
// var newSection = document.getElementById("newSection");

// var currentPage = 1;
// var jobsPerPage = 10;
// var totalJobs = 50;
// var totalPages = Math.ceil(totalJobs / jobsPerPage);

// newLink.addEventListener("click", function(event) {
//   event.preventDefault();

//   // Calculate the starting index and ending index for the current page
//   var startIndex = (currentPage - 1) * jobsPerPage;
//   var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);

//   // Fetch job data from the API
//   fetch("https://remotive.io/api/remote-jobs")
//     .then(response => response.json())
//     .then(data => {
//       // Clear existing job listings
//       newSection.innerHTML = "";

//       // Display the job information for the current page
//       for (var i = startIndex; i < endIndex; i++) {
//         var job = data[i];
//         var jobElement = document.createElement("div");
//         jobElement.textContent = job.title; 
//         newSection.appendChild(jobElement);
//       }
//     })
//     .catch(error => {
//       console.error("Error fetching jobs:", error);
//     });

//   // Scroll to the section
//   newSection.scrollIntoView({ behavior: "smooth" });
// });

// // Next page button click event
// document.getElementById("nextButton").addEventListener("click", function(event) {
//   event.preventDefault();
//   if (currentPage < totalPages) {
//     currentPage++;
//     newLink.click(); // Trigger the click event of the "All jobs" link
//   }
// });

// // Previous page button click event
// document.getElementById("prevButton").addEventListener("click", function(event) {
//   event.preventDefault();
//   if (currentPage > 1) {
//     currentPage--;
//     newLink.click(); // Trigger the click event of the "All jobs" link
//   }
// });

// var newLinks = document.getElementsByClassName("newLink");
// var newSection = document.getElementById("newSection");

// var currentPage = 1;
// var jobsPerPage = 10;
// var totalJobs = 50;
// var totalPages = Math.ceil(totalJobs / jobsPerPage);

// // Loop through each newLink element and add the click event listener
// for (var i = 0; i < newLinks.length; i++) {
//   newLinks[i].addEventListener("click", function(event) {
//     event.preventDefault();

//     // Calculate the starting index and ending index for the current page
//     var startIndex = (currentPage - 1) * jobsPerPage;
//     var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);

//     // Fetch job data from the API
//     fetch("https://remotive.io/api/remote-jobs")
//       .then(response => response.json())
//       .then(data => {
//         // Clear existing job listings
//         newSection.innerHTML = "";

//         // Display the job information for the current page
//         for (var i = startIndex; i < endIndex; i++) {
//           var job = data.jobs[i];
//           var jobElement = document.createElement("div");
//           jobElement.textContent = job.title;
//           newSection.appendChild(jobElement);
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching jobs:", error);
//       });

//     // Scroll to the section
//     newSection.scrollIntoView({ behavior: "smooth" });
//   });
// }

// // Trigger the click event of the "All jobs" link initially
// newLinks[1].click();
