import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, pink600, pink500} from 'material-ui/styles/colors';
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, YAxis, CartesianGrid} from 'recharts';
import GlobalStyles from '../../styles';

const MonthlySales = (props) => {

  const styles = {
    paper: {
      backgroundColor: pink600,
      height: 280
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 205
    },
    header: {
      color: white,
      backgroundColor: pink500,
      padding: 10
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...GlobalStyles.title, ...styles.header}}>Peak Hours</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data} >
            <Bar dataKey="uv" fill={"#8f8f8f"}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: white}}/>
            <Tooltip />
            <YAxis  tick={{fill: white}}/>
            <CartesianGrid strokeDasharray="3 3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

MonthlySales.propTypes = {
  data: PropTypes.array
};

export default MonthlySales;
