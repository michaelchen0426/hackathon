import gql from 'graphql-tag';

export const GET_PRINTER_DATA = gql`
  query {
    getLineDataSet(name: "printer") {
      date
      v
    }

    getBarDataSet(name: "printer") {
      name
      uv
    }

    getActivityDataSet(name: "printer") {
      id
      title
      text
      type
    }

    getPieDataSet(name: "printer") {
      label,
      value,
      color
    }
  }
`;

/*



        getCountDataSet(name: "printer") {

        }
*/

export const SUBSCRIBE_TO_PRINTER_DATA = gql`
    subscription {
        lineDataSetUpdated {
          v,
          date
        }
    }
`;

/*

        barDataSetUpdated(name: "printer") {
          pv
        }

        activityDataSetUpdated(name: "printer") {
          pv
        }

        pieDataSetUpdated(name: "printer") {
          pv
        }

        countDataSetUpdated(name: "printer") {
          pv
        }
*/

// export const GET_ROOM_DATA = gql`
//     {
//       getLineDataSet(name: "room") {
//         pv
//       }

//       getBarDataSet(name: "room") {

//       }

//       getActivityDataSet(name: "room") {

//       }

//       getPieDataSet(name: "room") {

//       }

//       getCountDataSet(name: "room") {

//       }
//     }
// `;

// export const SUBSCRIBE_TO_ROOM_DATA = gql`
//     subscription {
//       lineDataSetUpdated(name: "room") {
//         pv
//       }

//       barDataSetUpdated(name: "room") {
//         pv
//       }

//       activityDataSetUpdated(name: "room") {
//         pv
//       }

//       pieDataSetUpdated(name: "room") {
//         pv
//       }

//       countDataSetUpdated(name: "room") {
//         pv
//       }
//     }
// `;
