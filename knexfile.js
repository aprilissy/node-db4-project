// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // our DBMS driver
    connection: {
      filename: './data/recipes.db3' // the location of our db
    },
    useNullAsDefault: true, // this prevents crashes when working with sqlite3
    migrations: {
      directory: './data/migrations' // not required
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
  },

  production: {
  }

};
