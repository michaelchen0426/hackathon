import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { white, purple600, purple500 } from 'material-ui/styles/colors';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { typography } from 'material-ui/styles';

const NewOrders = (props) => {

  const styles = {
    paper: {
      backgroundColor: purple500,
      height: 280
    },
    div: {
      height: 205,
      padding: '15px 15px 0 0px'
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: purple600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{ ...styles.header }}>Usage Per Day</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={props.data}>
            <Line type="monotone" dataKey="v" stroke="#8884d8" strokeWidth={2} />
            <Tooltip />
            <XAxis dataKey="date" stroke="#8f8f8f" />
            <YAxis stroke="#8f8f8f" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

NewOrders.propTypes = {
  data: PropTypes.array
};

export default NewOrders;
