module.exports = {
  pip: {
    path: [`${process.env.HOME}/.cache/pip`],
    hashFiles: ['requirements*.txt'],
    keyPrefix: 'pip-',
    restoreKeys: 'pip-',
  },
  npm: {
    path: [`${HOME}/.npm`],
    hashFiles: [
      `package-lock.json`,
      `*/*/package-lock.json`,
      `!node_modules/*/package-lock.json`,
    ],
  },
  yarn: {
    path: [`${HOME}/.npm`],
   // */* is for supporting lerna monorepo with depth=2
    hashFiles: [`yarn.lock`, `*/*/yarn.lock`, `!node_modules/*/yarn.lock`],
  },
}