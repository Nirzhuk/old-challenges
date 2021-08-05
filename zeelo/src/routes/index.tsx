
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from "pages/MainPage";
import CreatePage from "pages/CreatePage";


const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/create">
                        <CreatePage />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
