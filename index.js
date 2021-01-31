const { promisify } = require('util');
const path = require('path');
const fs = require('fs-extra');
const makeDir = require('make-dir');
const replaceString = require('replace-string');
const slugify = require('slugify');
const execa = require('execa');
const { Listr } = require('listr2');
const cpy = require('cpy');
const shell = require('shelljs');
const chalk = require('chalk');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const copyWithTemplate = async (from, to, variables) => {
  const dirname = path.dirname(to);
  await makeDir(dirname);

  const source = await readFile(from, 'utf8');
  let generatedSource = source;

  if (typeof variables === 'object') {
    generatedSource = replaceString(source, '%NAME%', variables.name);
  }

  await writeFile(to, generatedSource);
};

const useTypeScript = process.argv.includes('--typescript');
const appName = process.argv[2];
let templatePath = 'templates/react-javascript';

if (useTypeScript) {
  templatePath = 'templates/react-typescript';
}

const fromPath = (file) => path.join(__dirname, templatePath, file);
const toPath = (file) => path.join(process.cwd(), file);

const copyTasks = (variables) => {
  if (fs.existsSync(fromPath(''))) {
    fs.copySync(fromPath(''), toPath(''));
  } else {
    cosole.error(
      `Could not locate supplied template: ${chalk.green(fromPath(''))}`,
    );
  }
};

module.exports = async () => {
  const pkgName = slugify(appName);

  const tasks = new Listr([
    {
      title: 'Create project directory',
      task: async () => {
        if (fs.existsSync(path.join(`${process.cwd()}/${appName}`))) {
          console.error(
            'The directory already exists, please try another appName',
          );
          process.exit(1);
        }

        await fs.mkdirSync(path.join(`${process.cwd()}/${appName}`));
        shell.cd(appName);
      },
    },
    {
      title: 'Copy files',
      task: async () => {
        const variables = {
          name: pkgName,
        };

        return copyTasks(variables);
      },
    },
    {
      title: 'Install dependencies',
      task: async () => {
        return execa('npm', ['install']);
      },
    },
  ]);

  await tasks.run();
  console.log('Happy hacking :)');
};
