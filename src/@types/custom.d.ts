// index.d.ts
declare module "*.gql" {
    const content: any;
    export default content;
}

declare module 'cookie-parse' {
    const content: any;
    export default content;
}

declare module 'graphql-ws/use/ws' {
    export * from 'graphql-ws/dist/use/ws';
}