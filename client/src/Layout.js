import { Outlet } from "react-router-dom";
import Header from "./Header";

/* eslint-disable react/jsx-no-undef */
export default function Layout() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}