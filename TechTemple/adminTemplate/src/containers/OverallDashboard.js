import React, { Component } from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/roomDashboard/InfoBox';
import NewOrders from '../components/roomDashboard/NewOrders';
import MonthlySales from '../components/roomDashboard/MonthlySales';
import BrowserUsage from '../components/overallDashboard/BrowserUsage';
import RecentlyProducts from '../components/roomDashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import { graphql, compose } from 'react-apollo';
import CircularProgress from 'material-ui/CircularProgress';

class DashboardPage extends Component {
  constructor() {
    super();
    console.log('--constructor-')
  }

  render() {
    console.log('--render--');
    console.log(this.props);

    const pieData = [
      {
        label: 'Vacancy',
        value: 30,
        color: '#CC0000'
      },
      {
        label: 'Occupancy',
        value: 70,
        color: '#8f8f8f'
      }
    ];

    const pieData2 = [
      {
        label: 'Vacancy',
        value: 20,
        color: '#CC0000'
      },
      {
        label: 'Occupancy',
        value: 80,
        color: '#8f8f8f'
      }
    ];

    const pieData3 = [
      {
        label: 'Vacancy',
        value: 60,
        color: '#CC0000'
      },
      {
        label: 'Occupancy',
        value: 40,
        color: '#8f8f8f'
      }
    ];

    return (
      <div>
        <h3 style={globalStyles.navigation}>Overall Rooms Dashboard</h3>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <BrowserUsage data={pieData} title={"Room A Usage (%)"} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <BrowserUsage data={pieData2} title={"Room B Usage (%)"} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <BrowserUsage data={pieData3} title={"Room C Usage (%)"} />
          </div>
        </div>
      </div>
    );
  }
}


export default DashboardPage;
