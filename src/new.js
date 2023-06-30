
var newJobsLink = document.getElementById("newJobsLink");
newJobsLink.addEventListener("click", function(event) {
  event.preventDefault();
  openJobListingsPage();
});

function openJobListingsPage() {
  var newWindow = window.open("", "_blank");
  fetch("https://remotive.io/api/remote-jobs?limit=15")
    .then(response => response.json())
    .then(data => {
      var jobList = data.jobs;

      var jobListHtml = "";
      var companyNameStyle = "font-weight: bold; color: #333;";

      jobList.forEach(job => {
        jobListHtml += "<div class='jobItem'>";
        jobListHtml += "<p class='companyName' style='" + companyNameStyle + "'>" + job.company_name + "</p>";
        jobListHtml += "<div class='jobDetails' style='display: none;'>" + job.description + "</div>";
        jobListHtml += "</div>";
      });

      var htmlContent = "<html>" +
        "<head>" +
        "<style>" +
        ".jobItem {" +
        "padding: 20px;" +
        "margin: 10px;" +
        "border-radius: 5px;" +
        "background-color: #FFFDD0;" +
        "box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);" +
        "transition: transform 0.3s ease;" +
        "position: relative;" +
        "}" +
        ".companyName {" +
        "cursor: pointer;" +
        companyNameStyle +
        "}" +
        ".jobDetails {" +
        "margin-top: 10px;" +
        "}" +
        "</style>" +
        "<script>" +
        "var companyNames = document.getElementsByClassName('companyName');" +
        "Array.from(companyNames).forEach(function(companyName) {" +
        "companyName.addEventListener('click', function() {" +
        "var jobDetails = this.nextElementSibling;" +
        "if (jobDetails.style.display === 'none') {" +
        "jobDetails.style.display = 'block';" +
        "} else {" +
        "jobDetails.style.display = 'none';" +
        "}" +
        "});" +
        "});" +
        "</script>" +
        "</head>" +
        "<body>" +
        "<div id='jobList'>" +
        jobListHtml +
        "</div>" +
        "</body>" +
        "</html>";

      newWindow.document.open();
      newWindow.document.write(htmlContent);
      newWindow.document.close();
    })
    .catch(error => {
      console.error("Error fetching job listings:", error);
    });
}

var container = document.getElementById("photoContainer");
fetch("https://remotive.io/api/remote-jobs?limit=13")
  .then(response => response.json())
  .then(data => {
    const jobs = data.jobs;
    jobs.forEach(function(job) {
      var div = document.createElement("div");
      var img = document.createElement("img");
      var paragraph = document.createElement("p");
      div.classList.add("photoItem");
      paragraph.classList.add("companyName");
      div.appendChild(img);
      div.appendChild(paragraph);
    
      img.src = job.company_logo;
      img.width = 300;
      img.height = 250;

      paragraph.textContent = job.title;
    
      img.classList.add("photo");
    
      container.appendChild(div);
      img.addEventListener("click", function() {
        openJobInformationPage(job);
      });

    
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
photos.forEach(function(photo) {
  var img = document.createElement("img");

  img.src = photo.url;
  img.width = photo.width;
  img.height = photo.height;

  img.classList.add("photo");

  container.appendChild(img);
});

ainer.appendChild(paragraph);

page = 3
pagesize = 10
start = pagesize*page-pagesize
end = pagesize*page

var newLink = document.getElementById("newLink");
var newSection = document.getElementById("newSection");

newLink.addEventListener("click", function(event) {
  event.preventDefault();

  fetch("https://remotive.io/api/remote-jobs?limit=13")
    .then(response => response.json())
    .then(data => {
      newSection.innerHTML = "";

      data.forEach(job => {
        var jobElement = document.createElement("div");
        jobElement.textContent = job.title; 
        newSection.appendChild(jobElement);
      });
    })
    .catch(error => {
      console.error("Error fetching jobs:", error);
    });

  newSection.scrollIntoView({ behavior: "smooth" });
});
function openJobInformationPage(job) {
  var newWindow = window.open("", "_blank");

  var htmlContent = `
    <html>
      <head>
        <title>${job.title}</title>
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
      
      </head>
      <body>
        <h1>${job.title}</h1>
        <img src="${job.company_logo}" width="300" height="250" alt="Company Logo">
        <p>${job.description}</p>
      </body>
    </html>
  `;

  newWindow.document.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
}




