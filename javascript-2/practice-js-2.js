/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = `Git is software that allows the user to save versions of their code as they progress through their projects.`

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = `GitHub is where every version of the user's code in their project is saved. GitHub also makes it easy to collaborate with multiple people on the same project.`

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
    description: 'This initializes a new git repository in your code editor.',
    code: 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
description: 'This clones code from another github repository',
code: 'git clone'

}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: 'This command shows you which files are in the staging area',
    code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
description: 'This git command adds changes that have been made in your working directory to the staging area',
code: 'git add . '

}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: 'This command saves the modified files to git',
    code: 'git commit -m "commit note goes here" '
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

const addRemote = {
    description: 'This adds a newly created github repository to the project file that has been started.',
    code: '$ git remote add origin https://github.com/user/repo.git'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: 'This command pushes the saved changes of your code to your Github repository',
    code: 'git push'
}
