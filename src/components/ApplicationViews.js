import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

import { RestaurantProvider } from "./restaurant/RestaurantProvider"
import { RestaurantForm } from "./restaurant/RestaurantForm"
import { RestaurantList } from "./restaurant/RestaurantList"

import { EateryOutingProvider } from "./matches/EateryOutingProvider"
import { SingleMatchesProvider } from "./matches/SingleMatchProvider"

export const ApplicationViews = () => {
    return (
        <>
             {/* Renders when http://localhost:3000/ */}
             <Route exact path="/">
                <Home />
            </Route>

            {/* Render the user list when http://localhost:3000/users */}
            <UserProvider>
                <Route path="/users">
                    <UserList/>
                </Route>
            </UserProvider>

            {/* Render the restaurant form when http://localhost:3000/restaurantOuting */}
            {/* can only have one eateryOutingProvider because of state errors */}
            <SingleMatchesProvider>
                <EateryOutingProvider>
                    <UserProvider>
                        <RestaurantProvider>
                            <Route path ="/restaurantOuting">
                                <RestaurantForm />
                            </Route>
                            <Route path ="/restaurantSelection">
                                <RestaurantList/>
                            </Route>
                        </RestaurantProvider>
                    </UserProvider>
                </EateryOutingProvider>
            </SingleMatchesProvider>
        </>
    )
}