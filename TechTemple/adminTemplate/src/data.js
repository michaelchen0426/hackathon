import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'Printer DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Room DashBoard', icon: <Assessment/>, link: '/roomDashboard' },
    // { text: 'Form Page', icon: <Web/>, link: '/form' },
    // { text: 'Table Page', icon: <GridOn/>, link: '/table' },
    // { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {date: "06-11", v: 3400},
      {date: "06-12", v: 1398},
      {date: "06-13", v: 1800},
      {date: "06-14", v: 3908},
      {date: "06-15", v: 4800},
      {date: "06-16", v: 3490},
      {date: "06-17", v: 4300}
    ],
    browserUsage: [
      {name: 'Printer A', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Printer B', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Printer C', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  },
  roomDashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 1700},
      {name: 'Feb', uv: 2000},
      {name: 'Mar', uv: 6000},
      {name: 'Apr', uv: 4780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 3800},
      {name: 'Jul', uv: 5600},
      {name: 'Aug', uv: 6900},
      {name: 'Sep', uv: 8500},
      {name: 'Oct', uv: 1000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 3780}
    ],
    newOrders: [
      {date: "06-11", v: 1400},
      {date: "06-12", v: 2398},
      {date: "06-13", v: 3800},
      {date: "06-14", v: 8908},
      {date: "06-15", v: 3800},
      {date: "06-16", v: 2490},
      {date: "06-17", v: 1300}
    ],
    browserUsage: [
      {name: 'Room A', value: 200, color: cyan600, icon: <ExpandMore/>},
      {name: 'Room B', value: 600, color: pink600, icon: <ChevronRight/>},
      {name: 'Room C', value: 100, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
