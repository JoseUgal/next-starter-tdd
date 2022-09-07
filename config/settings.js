import pkg from 'package.json'

const settings = {
  app: {
    name: pkg.name,
    version: pkg.version
  },
  author: pkg.author
}

export default settings
