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

export const SUBSCRIBE_TO_PRINTER_DATA_LINE = gql`
    subscription {
        lineDataSetUpdated {
          v,
          date
        }
    }
`;

export const SUBSCRIBE_TO_PRINTER_DATA_BAR = gql`
  subscription {
    barDataSetUpdated {
      name,
      uv
    }
  }
`;

export const SUBSCRIBE_TO_PRINTER_DATA_ACTIVITY = gql`
subscription {
  activityDataSetUpdated {
    id
    title
    text
  }
}
`;

export const SUBSCRIBE_TO_PRINTER_DATA_PIE = gql`
subscription {
  pieDataSetUpdated {
    label,
    value,
    color
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

export const GET_ROOM_DATA = gql`
    {
      getLineDataSet(name: "room") {
        date
        v
      }

      getBarDataSet(name: "room") {
        name
        uv
      }

      getActivityDataSet(name: "room") {
        id
        title
        text
      }

      getPieDataSet(name: "room") {
        label,
        value,
        color
      }
    }
`;

export const SUBSCRIBE_TO_ROOM_DATA_LINE = gql`
    subscription {
        lineDataSetUpdatedRoom {
          v,
          date
        }
    }
`;

export const SUBSCRIBE_TO_ROOM_DATA_BAR = gql`
  subscription {
    barDataSetUpdatedoom {
      name,
      uv
    }
  }
`;

export const SUBSCRIBE_TO_ROOM_DATA_ACTIVITY = gql`
subscription {
  activityDataSetUpdatedoom {
    id
    title
    text
  }
}
`;

export const SUBSCRIBE_TO_ROOM_DATA_PIE = gql`
subscription {
  pieDataSetUpdatedoom {
    label,
    value,
    color
  }
}
`;

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
