import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
    query MyQuery {
        productsList {
        items {
            productName
            price
        }
        }
    }
`;

export {
    GET_PRODUCTS
}