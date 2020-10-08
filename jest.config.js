module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  transform: {
    '\\.(ts|tsx)?$': 'ts-jest'
  },
  testRegex: '/test/.*.spec.ts[x]?$'
};
