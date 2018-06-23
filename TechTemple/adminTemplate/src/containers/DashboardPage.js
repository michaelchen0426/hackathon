import React, { Component, PropTypes } from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import { graphql, compose } from 'react-apollo';
import CircularProgress from 'material-ui/CircularProgress';

import {
  GET_PRINTER_DATA,
  SUBSCRIBE_TO_PRINTER_DATA
} from '../apollo/queries';


class DashboardPage extends Component {
  constructor() {
    super();
    console.log('--constructor-')
  }

  componentDidMount() {
    this.props.subscribeToLineChartChange();
  }

  componentWillReceiveProps(nextProps) {
    console.log('--componentWillReceiveProps---')
    console.log(nextProps)
  }

  render() {
    const {
      PrinterData
    } = this.props;

    const {
      networkStatus,
      getLineDataSet,
      getBarDataSet,
      getActivityDataSet,
      getPieDataSet,
      // getCountDataSet
    } = PrinterData;
    console.log('--render--');
    console.log(this.props);

    if (networkStatus === 7) {

      return (
        <div>
          <h3 style={globalStyles.navigation}>Printer Dashboard</h3>

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

            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
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
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
              <NewOrders data={getLineDataSet} />
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
              <MonthlySales data={getBarDataSet} />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyProducts data={getActivityDataSet} />
            </div>

            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <BrowserUsage data={Data.dashBoardPage.browserUsage} />
            </div> */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <BrowserUsage data={getPieDataSet} />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyProducts data={Data.dashBoardPage.recentProducts} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <BrowserUsage data={Data.dashBoardPage.browserUsage} />
            </div>
          </div> */}
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

    // return (
    //   <div>
    //     <h3 style={globalStyles.navigation}>Printer Dashboard</h3>

    //     <div className="row">

    //       <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
    //         <InfoBox Icon={ShoppingCart}
    //           color={pink600}
    //           title="Total Profit"
    //           value="1500k"
    //         />
    //       </div>


    //       <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
    //         <InfoBox Icon={ThumbUp}
    //           color={cyan600}
    //           title="Likes"
    //           value="4231"
    //         />
    //       </div>

    //       <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
    //         <InfoBox Icon={Assessment}
    //           color={purple600}
    //           title="Sales"
    //           value="460"
    //         />
    //       </div>

    //       <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
    //         <InfoBox Icon={Face}
    //           color={orange600}
    //           title="New Members"
    //           value="248"
    //         />
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
    //         <NewOrders data={Data.dashBoardPage.newOrders} />
    //       </div>

    //       <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
    //         <MonthlySales data={Data.dashBoardPage.monthlySales} />
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
    //         <RecentlyProducts data={Data.dashBoardPage.recentProducts} />
    //       </div>

    //       <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
    //         <BrowserUsage data={Data.dashBoardPage.browserUsage} />
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

DashboardPage.propTypes = {
  PrinterData: PropTypes.object.isRequired,
  subscribeToLineChartChange: PropTypes.func
};


export default compose(
  graphql(GET_PRINTER_DATA, {
    name: 'PrinterData',
    options: () => {
      return {
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true
      };
    },
    props: (props) => {
      return {
        ...props,
        subscribeToLineChartChange: () => {
          return props.PrinterData.subscribeToMore({
            document: SUBSCRIBE_TO_PRINTER_DATA,
            updateQuery: (prev, { subscriptionData }) => {
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
          return props.PrinterData.subscribeToMore({
            document: SUBSCRIBE_TO_PRINTER_DATA,
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
          return props.PrinterData.subscribeToMore({
            document: SUBSCRIBE_TO_PRINTER_DATA,
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
          return props.PrinterData.subscribeToMore({
            document: SUBSCRIBE_TO_PRINTER_DATA,
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
      };
    }
  })
)(DashboardPage);

/*

        subscribeToCountChange: () => {
          return props.PrinterData.subscribeToMore({
            document: SUBSCRIBE_TO_PRINTER_DATA,
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
*/
