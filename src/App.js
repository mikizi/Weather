import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from './actions/SimpleAction'
import Forecast from './components/forecast'
import logo from './logo.svg';
import './App.css';




class App extends Component {

    getWeather = (event) => {
        this.props.fetchAction();
    };

    componentDidMount(){
        this.getWeather();
    }

    render() {

        const { error, loading, forecasts  } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                   {/* <img src={'https://cdn.dribbble.com/users/28455/screenshots/1389791/weather.gif'} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">What's the Weather</h1>
                </header>
                <code className="prettyprint">
                    {
                        forecasts.length ?
                        <Forecast data={forecasts}/>
                            : ''
                    }
                </code>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        forecasts: state.simpleReducer.items,
        loading: state.simpleReducer.loading,
        error: state.simpleReducer.error
    });
};

const mapDispatchToProps = dispatch => ({
    fetchAction: () => dispatch(fetchAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);