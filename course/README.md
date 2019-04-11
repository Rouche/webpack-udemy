# UpStarMusic
Starter Repo for a Webpack course on Udemy

You can download this repository by using the green `Clone or Download` button on the right hand side of this page.  This will present you with the option to either clone the repository using Git, or to download it as a zip file.

If you want to download it using git, copy paste the link that is presented to you, then run the following at your terminal:

https://rallycoding.com/


# Webpack Reminders
Doc: https://webpack.js.org/guides/getting-started/

Webpack bundle analyser : 


# Web server deployments

```
git clone https://github.com/StephenGrider/WebpackProject.git
cd WebpackProject
npm install
```

GitHub
```
git subtree push --prefix dist origin gh-pages
```

Surge
```
npm install -g surge
surge -p dist
```

Firebase for services
```
```

AWS
```
npm install -g s3-website
s3-website create udemy-webpack
s3-website deploy dist
```

AWS Elastic Beanstalk
```
npm install python 3.6+ with 64bit installer
pip install --upgrade --user awsebcli
Upgrade: pip install --user --upgrade awsebcli
eb init
Crendentials : inside AWS ->Profile->Security Credentials->NEw Access key
eb create
eb open
eb setenv NODE_ENV=production
eb terminate
```


Heroku
```
heroku create
heroku login
Retrieve token with : heroku auth:token
git push heroku master (cancel git window)
Username for 'https://git.heroku.rouche@gmail.com => Type in "blank"
Password for 'https://git.heroku.rouche@gmail.com => Retrieved token
heroku log
heroku open
```

Express
```
npm install --save express
```

PowerShell Tips
```
Get-ChildItem Env:
$env:NODE_ENV = "production"
Remove-Item Env:\NODE_ENV
[Environment]::SetEnvironmentVariable("TestVariable", "Test value.", "User")
[Environment]::GetEnvironmentVariable("TestVariable", "User")
```
“TestVariable”, the name to be given to our new environment variable.
“Test value.”, the value to be assigned to the new environment variable.
“User” , which makes TestVariable a user-level environment variable. Alternatively, we could have set this to “Machine” (machine-level) or “Process” (process-level).