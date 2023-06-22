import { gql } from "@apollo/client";

/**
 * **************** APPUSER QUERIES **********************
 */
export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!, $rememberMe: Boolean!) {
    signIn(email: $email, password: $password, rememberMe: $rememberMe) {
      id
      email
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut($signOutId: String!) {
    signOut(id: $signOutId) {
      id
    }
  }
`;

export const SEND_RESET_PASSWORD_EMAIL = gql`
  mutation SendResetPasswordEmail($email: String!) {
    sendResetPasswordEmail(email: $email)
  }
`;

export const UPDATE_USER_PASSWORD_WITH_TOKEN = gql`
  mutation updateUserPasswordWithToken($token: String!, $password: String!) {
    updateUserPasswordWithToken(token: $token, password: $password)
  }
`;

export const UPDATE_USER_PASSWORD = gql`
  mutation UpdateUserPassword(
    $updateUserPasswordId: ID!
    $password: String!
    $newUserPassword: String!
  ) {
    updateUserPassword(
      id: $updateUserPasswordId
      password: $password
      newUserPassword: $newUserPassword
    ) {
      id
    }
  }
`;

export const MY_PROFILE = gql`
  query MyProfile {
    myProfile {
      id
      email
      role
      restaurant {
        id
        name
        picture
        ticketWaitingLimit
        notComingTicketDisapearDelay
        openAt
        closeAt
      }
    }
  }
`;

/**
 * **************** TICKET QUERIES ***********************
 */
export const GET_TICKETS_BY_RESTAURANT = gql`
  query TicketsByRestaurant($restaurantId: ID!, $seats: Float) {
    TicketsByRestaurant(restaurantId: $restaurantId, seats: $seats) {
      id
      number
      name
      seats
      email
      phoneNumber
      createdAt
      deliveredAt
      placedAt
      closedAt
      table {
        id
        number
      }
    }
  }
`;

export const GET_WAITING_TICKETS_BY_RESTAURANT = gql`
  query WaitingTicketsByRestaurant($restaurantId: ID!, $seats: Float) {
    WaitingTicketsByRestaurant(restaurantId: $restaurantId, seats: $seats) {
      id
      number
      name
      seats
      email
      phoneNumber
      createdAt
      deliveredAt
      placedAt
      closedAt
      table {
        id
        number
      }
    }
  }
`;

export const GET_PLACED_TICKETS_BY_RESTAURANT = gql`
  query PlacedTicketsByRestaurant($restaurantId: ID!, $seats: Float) {
    PlacedTicketsByRestaurant(restaurantId: $restaurantId, seats: $seats) {
      id
      number
      name
      seats
      email
      phoneNumber
      createdAt
      deliveredAt
      placedAt
      closedAt
      table {
        id
        number
      }
    }
  }
`;

export const GET_PAGINATED_AND_SORTED_TICKETS_BY_RESTAURANT = gql`
  query PaginatedAndSortedTickets(
    $restaurantId: ID!
    $globalFilter: String!
    $pageSize: Float!
    $pageNumber: Float!
    $sort: [String!]!
    $order: [Float!]!
  ) {
    PaginatedAndSortedTickets(
      restaurantId: $restaurantId
      globalFilter: $globalFilter
      pageSize: $pageSize
      pageNumber: $pageNumber
      sort: $sort
      order: $order
    ) {
      totalCount
      tickets {
        number
        name
        seats
        createdAt
        deliveredAt
        placedAt
        closedAt
      }
    }
  }
`;

export const EXPORT_TICKETS_BY_RESTAURANT = gql`
  query ExportTicketsByRestaurant(
    $restaurantId: ID!
    $dateMin: DateTime
    $dateMax: DateTime
  ) {
    ExportTicketsByRestaurant(
      restaurantId: $restaurantId
      dateMin: $dateMin
      dateMax: $dateMax
    ) {
      number
      name
      email
      phoneNumber
      seats
      createdAt
      deliveredAt
      placedAt
      closedAt
    }
  }
`;

export const UPDATE_DELIVERED_AT = gql`
  mutation UpdateDeliveredAt($updateDeliveredAtId: ID!, $table: String!) {
    updateDeliveredAt(id: $updateDeliveredAtId, table: $table) {
      id
    }
  }
`;

export const UPDATE_PLACED_AT = gql`
  mutation UpdatePlacedAt($updatePlacedAtId: String!) {
    updatePlacedAt(id: $updatePlacedAtId) {
      id
      deliveredAt
      placedAt
      closedAt
    }
  }
`;

export const UPDATE_CLOSED_AT = gql`
  mutation UpdateClosedAt($updateClosedAtId: String!) {
    updateClosedAt(id: $updateClosedAtId) {
      id
      closedAt
    }
  }
`;

/**
 * *************** TABLE QUERIES **********************
 */
export const GET_TABLES_BY_RESTAURANT = gql`
  query TablesByRestaurant($restaurantId: ID!, $capacity: Float) {
    TablesByRestaurant(restaurantId: $restaurantId, capacity: $capacity) {
      id
      number
      capacity
    }
  }
`;

/**
 * *************** POLE QUERIES **********************
 */
export const GET_POLES = gql`
  query Poles {
    poles {
      id
      name
      address
      zipCode
      city
      email
      restaurant {
        id
        name
      }
    }
  }
`;

export const CREATE_POLE = gql`
  mutation CreatePole(
    $name: String!
    $address: String!
    $zipCode: String!
    $city: String!
    $email: String!
  ) {
    createPole(
      name: $name
      address: $address
      zipCode: $zipCode
      city: $city
      email: $email
    ) {
      id
    }
  }
`;

export const UPDATE_POLE = gql`
  mutation UpdatePole(
    $name: String!
    $address: String!
    $zipCode: String!
    $city: String!
    $email: String!
    $updatePoleId: ID!
  ) {
    updatePole(
      name: $name
      address: $address
      zipCode: $zipCode
      city: $city
      email: $email
      id: $updatePoleId
    ) {
      id
    }
  }
`;

export const DELETE_POLE = gql`
  mutation DeletePole($deletePoleId: String!) {
    deletePole(id: $deletePoleId) {
      id
    }
  }
`;

/**
 * *************** STATS QUERIES **********************
 */
export const GET_STATS_BY_RESTAURANT = gql`
  query StatsByRestaurant($restaurantId: String!) {
    StatsByRestaurant(restaurantId: $restaurantId) {
      tableCapacity
      daysOfWeek
      lastThirtyDays
      countTicketsBySeat
      countActualWeekTickets
      countLastThirtyDaysTickets
    }
  }
`;

/**
 * *************** RESTAURANT QUERIES **********************
 */
export const GET_RESTAURANTS = gql`
  query GetRestaurants {
    getRestaurants {
      id
      name
      picture
      pole {
        id
        name
        address
        zipCode
        city
        email
      }
    }
  }
`;

export const UPDATE_RESTAURANT = gql`
  mutation UpdateRestaurant(
    $updateRestaurantId: ID!
    $ticketWaitingLimit: Float!
    $notComingTicketDisapearDelay: Float!
    $name: String!
    $picture: String
  ) {
    updateRestaurant(
      id: $updateRestaurantId
      ticketWaitingLimit: $ticketWaitingLimit
      notComingTicketDisapearDelay: $notComingTicketDisapearDelay
      name: $name
      picture: $picture
    ) {
      id
      name
      picture
      ticketWaitingLimit
      notComingTicketDisapearDelay
      openAt
      closeAt
    }
  }
`;

export const UPDATE_RESTAURANTS_TIME = gql`
  mutation UpdateRestaurantOpeningTime(
    $updateRestaurantOpeningTimeId: ID!
    $hourOpenAt: Float!
    $minutesOpenAt: Float!
    $hourCloseAt: Float!
    $minutesCloseAt: Float!
  ) {
    updateRestaurantOpeningTime(
      id: $updateRestaurantOpeningTimeId
      hourOpenAt: $hourOpenAt
      minutesOpenAt: $minutesOpenAt
      hourCloseAt: $hourCloseAt
      minutesCloseAt: $minutesCloseAt
    ) {
      closeAt
      openAt
    }
  }
`;

export const CREATE_RESTAURANT = gql`
  mutation CreateRestaurant($name: String!, $notComingTicketDisapearDelay: Float!, $pole: ID!, $ticketWaitingLimit: Float!, $picture: String) {
  createRestaurant(name: $name, notComingTicketDisapearDelay: $notComingTicketDisapearDelay, pole: $pole, ticketWaitingLimit: $ticketWaitingLimit, picture: $picture) {
    id
  }
}
`;
