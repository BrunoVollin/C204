export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: "./report",
      outputName: "junit.xml",
      } ]
    ]
  };