import React from 'react';
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

import {
  GET_ROOM_DATA,
  SUBSCRIBE_TO_ROOM_DATA
} from '../apollo/queries';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Rooms Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
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
        </div>

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
          <NewOrders data={Data.roomDashBoardPage.newOrders} />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlySales data={Data.roomDashBoardPage.monthlySales} />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentlyProducts data={Data.roomDashBoardPage.recentProducts} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <BrowserUsage data={Data.roomDashBoardPage.browserUsage} />
        </div>
      </div>
    </div>
  );
};

export default compose(
  graphql(GET_ROOM_DATA, {
    name: 'RoomData',
    props: (props) => {
      return {
        ...props,
        subscribeToLineChartChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.lineDataSetUpdated;

              return Object.assign({}, prev, {
                getLineDataSet: { ...newDocumentState }
              });
            }
          });
        },
        subscribeToBarChartChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.barDataSetUpdated;

              return Object.assign({}, prev, {
                getBarDataSet: { ...newDocumentState }
              });
            }
          });
        },
        subscribeToActivityChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.activityDataSetUpdated;

              return Object.assign({}, prev, {
                getActivityDataSet: { ...newDocumentState }
              });
            }
          });
        },
        subscribeToPieChartChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.pieDataSetUpdated;

              return Object.assign({}, prev, {
                getPieDataSet: { ...newDocumentState }
              });
            }
          });
        },
        subscribeToCountChange: () => {
          return props.RoomData.subscribeToMore({
            document: SUBSCRIBE_TO_ROOM_DATA,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              const newDocumentState =
                subscriptionData.data.countDataSetUpdated;

              return Object.assign({}, prev, {
                getCountDataSet: { ...newDocumentState }
              });
            }
          });
        }
      };
    }
  })
)(DashboardPage);