import { gql, useQuery } from "@apollo/client";
import { createContext, useState } from "react";
import {
  BIG_LOGO_DARK_THEME,
  BIG_LOGO_LIGHT_THEME,
} from "../constants/Constants";
import { MyProfileQuery } from "../gql/graphql";

const MY_PROFILE = gql`
  query MyProfile {
    myProfile {
      id
      email
      role
      poles {
        id
        name
      }
      restaurant {
        id
        name
      }
    }
  }
`;

type UserContextType = {
  userData: any;
  userSVGColorScheme: string;
  isAuthenticated: boolean;
  loading: boolean;
  refetch: () => {};
};

export const UserContext = createContext<UserContextType | null>(null);

export function ContextProvider({ children }: any) {
  const [isAuthenticated, setIsUserAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});
  const userSVGColorScheme = window.matchMedia("(prefers-color-scheme: light)")
    .matches
    ? BIG_LOGO_LIGHT_THEME
    : BIG_LOGO_DARK_THEME;

  const { loading, refetch } = useQuery<MyProfileQuery>(MY_PROFILE, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.myProfile) {
        setIsUserAuthenticated(true);
        setUserData(data.myProfile);
      }
    },
    onError: () => {
      setIsUserAuthenticated(false);
    },
  });

  return (
    <UserContext.Provider
      value={{
        userData,
        userSVGColorScheme,
        isAuthenticated,
        loading,
        refetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
