# eslint9-examples

```
npm init @eslint/config@latest
```

## Troubleshooting

Hit error, [logged issue](https://github.com/eslint/eslint/issues/18487): 

```
eslint@9.x, globals, @eslint/js, typescript-eslint
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
☕️Installing...
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: js-common@1.0.0
npm ERR! Found: eslint@9.3.0
npm ERR! node_modules/eslint
npm ERR!   dev eslint@"9.x" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@"^8.56.0" from typescript-eslint@7.10.0
npm ERR! node_modules/typescript-eslint
npm ERR!   dev typescript-eslint@"*" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! 
npm ERR! For a full report see:
npm ERR! /home/node/.npm/_logs/2024-05-22T19_00_53_111Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: /home/node/.npm/_logs/2024-05-22T19_00_53_111Z-debug-0.log
A config file was generated, but the config file itself may not follow your linting rules.
```