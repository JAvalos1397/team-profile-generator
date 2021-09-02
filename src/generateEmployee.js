

const generateEngineer = (employee) => {

   return `<div class ='class'><header class="p-3 mb-2 bg-primary text-white"><h2>${employee.name}</h2></header>
   <div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Title:${employee.getRole()}</h5>
       <h6 class="card-subtitle mb-2 text-muted">ID:${employee.id}</h6>
       <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
       <a href="https://www.github.com/${employee.getGithub()}" class="card-link">${employee.getGithub()}</a>

     </div>
   </div>
   </div>`
};

const generateIntern = (employee) => {
  return `<header class="p-3 mb-2 bg-primary text-white"><h2>${employee.name}</h2></header>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Title:${employee.getRole()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">ID:${employee.id}</h6>
      <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
      <p class="card-text">Graduated from ${employee.getGithub()}</p>
    </div>
  </div>`
};

const generateManager = (employee) => {
  return `<div class='co-md'><header class="p-3 mb-2 bg-primary text-white"><h2>${employee.name}</h2></header>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Title:${employee.getRole()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">ID:${employee.id}</h6>
      <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
      <p class="card-text">Office Phone#: ${employee.getGithub()}</p>
    </div>
  </div>
  </div>`
};

const htmlMarkup = (data) => {
  // console.log(engineers.engineers)
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
      <title>Document</title>
  </head>
  <body>
  <header class="p-3 mb-2 bg-primary text-white"><h1>Team Summary</h1></header>

     <div class='container'> 
      <div class ='row'>
     <h2 class='role'>Manager</h2>
      ${data.managers}
      </div>

      <div class ='row'>
     <h2 class='role'>Engineer</h2>
      ${data.engineers}
      </div>

      <div class ='row'>
     <h2 class='role'>Intern</h2>
      ${data.interns}

      </div>
     </div>
  
      
  </body>
  </html>`
}
exports.generateEngineer = generateEngineer;

exports.generateIntern = generateIntern;

exports.generateManager = generateManager;

exports.htmlMarkup = htmlMarkup;
