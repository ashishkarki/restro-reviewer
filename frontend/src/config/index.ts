import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient: ApolloClient<any> | null = null;

export const intializeConfig = async (): Promise<ApolloClient<any>> => {
    // const response = await fetch('../../config.json');
    // const config = await response.json();

    apolloClient = new ApolloClient({
        link: new HttpLink({
            uri: `http://localhost:4001/graphql`,
            // config.API_URL,
        }),
        cache: new InMemoryCache(),
    });

    return apolloClient;
};

const getApolloClient = (): ApolloClient<any> | null => apolloClient;

export const getApolloClientOrLogError = () => {
    const client = getApolloClient();

    if (!client) {
        console.error('Apollo Client is not initialized');
        return null;
    }

    return client;
};
