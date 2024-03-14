import { RouteObject } from "react-router";
import Layout from "../layout";
import Home from "../pages/Home";
import SingleRep from "../pages/SingleRep";

const routes:RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                    {
                        path: "/reps/:repId",
                        element: <SingleRep />
                    }
                ]

            }
        ]
    }
];

export default routes;
