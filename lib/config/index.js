module.exports = {
  server: {
    port: 4000,
    urlEncodedExtension: false
  },
  db: {
    engine: 'mongo',
    sequelize: {
      logging: false,
      database: 'boilerplate',
      username: 'dbuser',
      dialect: 'mariadb',
      timeout: 1000,
      timezone: 'Etc/GMT0'
    },
    mongo: {
      url: 'mongodb://localhost/boilerplate',
      mongooseCfg: {
        useNewUrlParser: true,
        useCreateIndex: true
      }
    }
  }
}
;
