# Scar-Quiz (Groupe 5)

An adaptative quiz which adapt it front to the handicap

Exigences:
- https://docs.google.com/spreadsheets/d/1TFk7NwtGBJa4qzxVvjB8CmRFRDX97YtDRcwa8hIC3ro/edit?invite=CKyVj8gE&ts=5e1c3561#gid=0

Developers:
- Sabri Habib
- Clement Guibourg
- Ridiana Ly
- Alexandre Armando

Development:
- Angular 8
- Typescript

Integration:
- Gitlab ci

Disabilities supported:
- Visual impairment
- Parkison

Project installation: 
- git clone https://url
- Download and install Node.js (LTS)
- Open a new git bash
- In the project folder -> npm install
- npm install -g @angular/cli -> install angular command line
- Open a new git bash
- ng serve --open -> launch the project

Good practicies:
// Git
- when we start a new task :
    * git checkout develop -> to place our origin in develop
    * git pull -> to update our local branch
    * git flow feature start nameOfTheBranch -> to create a new branch based on develop, our origin is now 'nameOfTheBranch'

- when we want to push the code to the server :
    * git commit -am "my text" -> to add and commit your changes
    * git push

- when we have a good version in our feature :
    * git flow feature finish -> will merge our branch in develop

// Angular
Use "ng generate unTruc" to generate a new component, a new page etc.
https://angular.io/cli/generate

Check here for the rooting between pages
https://angular.io/start/routing