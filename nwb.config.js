module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactBodymovin',
      externals: {
        react: 'React'
      }
    }
  }
}
