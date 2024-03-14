import { createBrowserRouter } from "react-router-dom"
import TodoList from "../components/todo/todo-list";
import App from "../App";
import ShopForMan from "../components/shop/shop-for-man";
import Users from "../components/users/users";
import User from "../components/users/user";
import CurrencyHome from "../components/currencies/currency-home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>404</h1>,
        children: [
            {
                path: '/todo',
                element: <TodoList />
            },
            {
                path: '/shopForMen',
                element: <ShopForMan />
            },
            {
                path: '/users',
                element: <Users />,
                children: [
                    {
                        path: ':id',
                        element: <User />,
                    }
                ]
            },
            {
                path: '/currency',
                element: <CurrencyHome />
            }

        ]
    },
    // {
    //     path: '/todo',
    //     element: <TodoList />
    // },
    // {

    // }
]);