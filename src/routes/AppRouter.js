import React from "react";
import {
    BrowserRouter as Router, Route,
    Routes,
} from "react-router-dom";
import Root from "./Root/Root";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Root/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
