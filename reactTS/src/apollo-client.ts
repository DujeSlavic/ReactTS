import { ApolloClient, InMemoryCache } from "@apollo/client";
// Error handler const errorHandler = (err, req, res, next) => { 
//     if (res.headersSent) { 
//         return next(err); 
//     } 
//     const { status } = err; 
//     res.status(status).json(err); 
// }; 
// app.use(errorHandler);
const client = new ApolloClient({
    uri: "https://graphql.contentful.com/content/v1/spaces/ojpqlra32uom",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer wO9AhZ3Ig3-aFGAJ3SEj1vtKJ6DuYhvnwDHTJfsQX5w` 
    }
  });

export default client;