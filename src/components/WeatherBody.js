import React from "react";
import FutureWeatherCard from "./FutureWeatherCard";

class WeatherBody extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {
        in6h: [],
        in12h: [],
        in18h: [],
        in24h: [],
      },
    };
  }

  componentDidMount() {
    this.setState({
      weather: {
        in6h: this.props.futureWeather[6],
        in12h: this.props.futureWeather[12],
        in18h: this.props.futureWeather[18],
        in24h: this.props.futureWeather[24],
      },
    });
  }

  render() {
    return (
      <div className="card-body">
        <div className="card-body-container">
          <FutureWeatherCard
            futureTime={6}
            futureWeather={this.state.weather.in6h}
          />
          <FutureWeatherCard
            futureTime={12}
            futureWeather={this.state.weather.in12h}
          />
          <FutureWeatherCard
            futureTime={18}
            futureWeather={this.state.weather.in18h}
          />
          <FutureWeatherCard
            futureTime={24}
            futureWeather={this.state.weather.in24h}
          />
        </div>
      </div>
    );
  }
}

export default WeatherBody;
