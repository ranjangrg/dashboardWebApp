# dashboard Web-app (using React JS)
## Instructions
### 1. Create React App
Bootstrap a React app project using `create-react-app`.
```bash
npm install -g npx	# global installation
npx create-react-app <projectName> # use npx to install create-react-app locally
```

### 2. Copy the files to the new project directory
### 3. Run npm install before anything else
Using our `package.json` file install the required node modules and put them in `node_modules`.
```bash
npm install
```
### 4. Start test development server to Test
```bash
npm start
```

## Troubleshoot
In case `npm install` fails, following ***may*** work. (Provided we are in the project directory)
1. `rm -rf ./node_modules`
2. `rm package-lock.json`
3. `npm install`
> Clearing cache may help `npm cache clean --force` but use at your own risk.

