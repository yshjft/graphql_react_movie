import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    // GraphQL API의 접속 정보를 설정
    uri: "https://movieql.now.sh" // qraphql yoga 강의로 변경할 것
})

export default client;