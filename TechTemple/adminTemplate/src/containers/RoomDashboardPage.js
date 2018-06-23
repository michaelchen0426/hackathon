import React, { Component } from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/roomDashboard/InfoBox';
import NewOrders from '../components/roomDashboard/NewOrders';
import MonthlySales from '../components/roomDashboard/MonthlySales';
import BrowserUsage from '../components/roomDashboard/BrowserUsage';
import RecentlyProducts from '../components/roomDashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import { graphql, compose } from 'react-apollo';
import CircularProgress from 'material-ui/CircularProgress';

import {
  GET_ROOM_DATA,
  SUBSCRIBE_TO_ROOM_DATA_LINE,
  SUBSCRIBE_TO_ROOM_DATA_BAR,
  SUBSCRIBE_TO_ROOM_DATA_ACTIVITY,
  SUBSCRIBE_TO_ROOM_DATA_PIE
} from '../apollo/queries';

class DashboardPage extends Component {
  constructor() {
    super();
    console.log('--constructor-')
  }

  componentDidMount() {
    this.props.subscribeToLineChartChange();
    this.props.subscribeToBarChartChange();
    this.props.subscribeToActivityChange();
    this.props.subscribeToPieChartChange();
  }

  render() {
    const {
      RoomData
    } = this.props;

    const {
      networkStatus,
      getLineDataSet,
      getBarDataSet,
      getActivityDataSet,
      getPieDataSet,
      // getCountDataSet
    } = RoomData;
    console.log('--render--');
    console.log(this.props);

    const usageData = [
      {
        date: '6-12',
        v: 5
      },
      {
        date: '6-13',
        v: 7
      },
      {
        date: '6-14',
        v: 4
      },
      {
        date: '6-15',
        v: 9
      },
      {
        date: '6-16',
        v: 4
      },
      {
        date: '6-17',
        v: 5
      },
      {
        date: '6-18',
        v: 5
      },
      {
        date: '6-19',
        v: 8
      },
    ];

    const barData = [
      {
        name: '9am',
        uv: 10
      },
      {
        name: '10am',
        uv: 15
      },
      {
        name: '11am',
        uv: 18
      },
      {
        name: '12pm',
        uv: 6
      },
      {
        name: '13pm',
        uv: 5
      },
      {
        name: '14pm',
        uv: 10
      },
      {
        name: '15pm',
        uv: 19
      },
      {
        name: '16pm',
        uv: 22
      },
      {
        name: '17pm',
        uv: 24
      },
      {
        name: '18pm',
        uv: 16
      }
    ];

    const pieData = [
      {
        label: 'Air Conditioner',
        value: 200,
        color: '#000'
      },
      {
        label: 'Phone',
        value: 600,
        color: '#8f8f8f'
      },
      {
        label: 'Light',
        value: 100,
        color: '#CC0000'
      }
    ];

    if (networkStatus === 7) {
      let existingActivityData = getActivityDataSet.slice(0);

      existingActivityData.reverse();
      existingActivityData = existingActivityData.slice(0, 5);

      return (
        <div>
          <h3 style={globalStyles.navigation}>Rooms Dashboard</h3>

          <div className="row">

            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={ShoppingCart}
                color={pink600}
                title="Total Profit"
                value="1500k"
              />
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={ThumbUp}
                color={cyan600}
                title="Likes"
                value="4231"
              />
            </div> */}

            {/* <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={purple600}
                   title="Sales"
                   value="460"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Face}
                   color={orange600}
                   title="New Members"
                   value="248"
          />
        </div> */}
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
              <NewOrders data={usageData} />
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
              <MonthlySales data={barData} />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyProducts data={existingActivityData} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <BrowserUsage data={pieData} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{
        height: 'calc(100vh - 150px)',
        width: 'calc(100vw - 30px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress size={60} thickness={7} />
      </div>
    );
  }
}

export default compose(
  graphql(GET_ROOM_DATA, {
    name: 'RoomData',
    props: (props) => {
      return {
        ...props,
        subscribeToLineChartChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA_LINE,
            name: "subscribeLineChartChange",
            updateQuery: (prev, { subscriptionData }) => {
              console.log('--subscribeToLineChartChange--')
              console.log(subscriptionData)
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.lineDataSetUpdated;

              let previousValue = prev.getLineDataSet.slice(0);

              previousValue[previousValue.length - 1] = newDocumentState;

              return Object.assign({}, prev, {
                getLineDataSet: previousValue
              });
            }
          });
        },
        subscribeToBarChartChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA_BAR,
            name: "subscribeBarChartChange",
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.barDataSetUpdated;

              let previousValue = prev.getBarDataSet.slice(0);

              previousValue[previousValue.length - 1] = newDocumentState;

              return Object.assign({}, prev, {
                getBarDataSet: previousValue
              });
            }
          });
        },
        subscribeToActivityChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA_ACTIVITY,
            name: "subscribeActivityChange",
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.activityDataSetUpdated;
              let previousValue = prev.getActivityDataSet.slice(0);

              previousValue.push(newDocumentState);

              return Object.assign({}, prev, {
                getActivityDataSet: previousValue
              });
            }
          });
        },
        subscribeToPieChartChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA_PIE,
            name: "subscribePieChartChange",
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.pieDataSetUpdated;
              let previousValue = prev.getPieDataSet.slice(0);

              previousValue[previousValue.length - 1] = newDocumentState;

              return Object.assign({}, prev, {
                getPieDataSet: previousValue
              });
            }
          });
        },
      };
    }
  })
)(DashboardPage);
