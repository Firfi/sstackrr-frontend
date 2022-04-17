import { gql } from '@apollo/client';

const GAME_STATE_FIELDS_PARTIAL = '{ id, state, isStalemate, winner, nextPlayer }' as const;

export const GET_GAME_QUERY = gql`
    query GetGame($gameToken: String!) { game(gameToken: $gameToken) ${GAME_STATE_FIELDS_PARTIAL} }
`;
export const GET_ME_QUERY = gql`
    subscription GetMe($playerToken: String!) { me(playerToken: $playerToken) }
`;
export const GAME_SUBSCRIPTION = gql`
    subscription GameSubscription($gameToken: String!) { game(gameToken: $gameToken) ${GAME_STATE_FIELDS_PARTIAL} }
`;

export const CLAIM_PLAYER = gql`
    # Increments a back-end counter and gets its resulting value
    mutation ClaimPlayer($gameToken: String!, $player: Player!) {
        claimPlayer(gameToken: $gameToken, player: $player) {
            playerToken
        }
    }
`;

export const INIT_GAME = gql`
    mutation InitGame {
        initGame {
            id,
            state
        }
    }
`;