module.exports = {
  server: {
    port: 5000,
    urlEncodedExtension: false
  },
  db: {
    engine: "mongo",
    sequelize: {
      logging: false,
      database: "credible",
      username: "dbuser",
      dialect: "mariadb",
      timeout: 1000,
      timezone: "Etc/GMT0"
    },
    mongo: {
      url: "mongodb://localhost/credible",
      mongooseCfg: {
        useNewUrlParser: true,
        useCreateIndex: true
      }
    }
  }
};
