## Template NodeJS

This Node JS based base project template will help you get started faster. 
Just modify the structure according your necessity.

The architecture is:
```bash
app.js
|    routes
|    |   handlers
|    controllers
|    services
|    |    persistences
|    |    |    repositories
```

The dependencies are:
```bash
app.js < routes < controllers < repositories (depend of your db choice) < services < persistences (dbrepository.js)
```

