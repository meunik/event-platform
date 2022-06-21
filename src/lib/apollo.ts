import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oi4x3m0dqo01w70u688bj7/master',
    cache: new InMemoryCache()
})