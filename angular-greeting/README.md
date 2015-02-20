# Greeting with Angular

## Description
Clone this repository and change the greeting so that when your name is typed in you get a special message.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Get some more practice with git branching and merging.
* Get some exposure to watching models.
* Get some more practice dealing with merge conflicts.


### Performance Objectives

After completing this assignment, you be able to effectively use

* $scope.$watch
* git clone
* git branch
* git checkout
* git add
* git commit
* git push
* git merge

## Details

### Deliverables

* A repo containing at least:
  * `index.html`
  * `scripts/controllers.js`
  * `bower.json`

### Requirements

* No JSHint warnings or errors
* You must create and push a new branch where you do your dev work before merging it in to master!
* YOu must test your code locally before pushing it.
* You must not overwrite someone elses changes.
* There should be no merge syntax in any of the files after you commit them (ie. <<<<<<, =======, etc.)


## Normal Mode
Clone this repository and change the greeting so that when your name is typed in you get a special message. Create a new branch where you will make your changes. When you are finished (and have tested the change locally), push your changes to the new branch. Finally, merge the new branch into master.

## Notes

```
Aarons-MacBook-Pro-2:Projects alarner$ git clone git@github.com:TIY-Austin-Front-End-Engineering/angular-greeting.git
Cloning into 'angular-greeting'...
remote: Counting objects: 17, done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 17 (delta 1), reused 14 (delta 1)
Receiving objects: 100% (17/17), done.
Resolving deltas: 100% (1/1), done.
Checking connectivity... done.
Aarons-MacBook-Pro-2:Projects alarner$ git branch aaron
fatal: Not a git repository (or any of the parent directories): .git
Aarons-MacBook-Pro-2:Projects alarner$ cd angular-greeting/
Aarons-MacBook-Pro-2:angular-greeting alarner$ git branch aaron
Aarons-MacBook-Pro-2:angular-greeting alarner$ git checkout aaron
Switched to branch 'aaron'
Aarons-MacBook-Pro-2:angular-greeting alarner$ git status
On branch aaron
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   scripts/controllers.js

no changes added to commit (use "git add" and/or "git commit -a")
Aarons-MacBook-Pro-2:angular-greeting alarner$ git diff
diff --git a/scripts/controllers.js b/scripts/controllers.js
index c1ba8dd..bf268c6 100644
--- a/scripts/controllers.js
+++ b/scripts/controllers.js
@@ -3,7 +3,7 @@ angular.module('basic.controllers', ['basic.services'])

        $scope.$watch('name', function() {
                if($scope.name.toLowerCase() === 'aaron') {
-                       $scope.greeting = 'Nutella!';
+                       $scope.greeting = 'Nutella!!!!';
                }
                else {
                        $scope.greeting = '';
Aarons-MacBook-Pro-2:angular-greeting alarner$ git add .
Aarons-MacBook-Pro-2:angular-greeting alarner$ git commit -m "Updated message to better reflect me"
[aaron 9f4b87e] Updated message to better reflect me
 1 file changed, 1 insertion(+), 1 deletion(-)
Aarons-MacBook-Pro-2:angular-greeting alarner$ git push origin aaron
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 420 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
To git@github.com:TIY-Austin-Front-End-Engineering/angular-greeting.git
 * [new branch]      aaron -> aaron
Aarons-MacBook-Pro-2:angular-greeting alarner$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
Aarons-MacBook-Pro-2:angular-greeting alarner$ git merge origin/aaron
Updating 480c9bc..9f4b87e
Fast-forward
 scripts/controllers.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
Aarons-MacBook-Pro-2:angular-greeting alarner$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To git@github.com:TIY-Austin-Front-End-Engineering/angular-greeting.git
   480c9bc..9f4b87e  master -> master
```

Hints: Look at scripts/controllers.js for a starting point to add your own code.