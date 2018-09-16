import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAction} from './actions/SimpleAction'
import Forecast from './components/forecast'
import Day from './components/day'
import './App.css';
import Route from "react-router-dom/es/Route";
import {Switch, withRouter} from "react-router-dom";


class App extends Component {

    getWeather = (event) => {
        this.props.fetchAction();
    };

    componentDidMount() {
        this.getWeather();
    }

    render() {

        const {error, loading, forecasts} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={'https://cdn.dribbble.com/users/28455/screenshots/1389791/weather.gif'} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">What's the Weather</h1>
                </header>
                {forecasts.length ?
                    <Switch>
                        <Route  exact path="/" render={(props) => <Forecast {...props} data={forecasts}/>}/>
                        <Route  exact path="/:lng" render={(props) => <Forecast {...props} data={forecasts}/>}/>
                        <Route exact  path="/:d/:m/:y" render={(props) => <Day {...props} data={forecasts}/>}/>
                        <Route exact  path="/:d/:m/:y/:lng" render={(props) => <Day {...props} data={forecasts}/>}/>
                        {/* <Route exact path="/:day" component={Forecast} data={forecasts}/>*/}
                    </Switch>
                    : ''}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        forecasts: state.simpleReducer.items,
        loading: state.simpleReducer.loading,
        error: state.simpleReducer.error,
    });
};

const mapDispatchToProps = dispatch => ({
    fetchAction: () => dispatch(fetchAction())
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App));