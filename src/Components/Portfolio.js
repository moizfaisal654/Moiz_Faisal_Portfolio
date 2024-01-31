// import React from "react";
// import Paper from "@material-ui/core/Paper";
// import Tab from "@material-ui/core/Tab";
// import Tabs from "@material-ui/core/Tabs";

// const Portfolio = () => {
// 	const [value, setValue] = React.useState(2);

// 	return (

//     <section id="portfolio" className="section-portfolio">
// <div className="container-fluid px-lg-5">
//   <div className="d-flex text-center mb-5">
//     <h2 className="About">Portfolio</h2>
//     <p className="know">My Work</p>
//   </div>
// </div>
// 		<div
// 			style={{
// 				marginLeft: "40%",
// 			}}
// 		>
// 			<h2>How to Create Tabs in ReactJS?</h2>
// 			<Paper square>
// 				<Tabs
// 					value={value}
// 					textColor="primary"
// 					indicatorColor="primary"
// 					onChange={(event, newValue) => {
// 						setValue(newValue);
// 					}}
// 				>
// 					<Tab label="Active TAB One" />
// 					<Tab label="Active TAB Two" />
// 					<Tab label="Disabled TAB!" disabled />
// 					<Tab label="Active Tab Three" />
// 				</Tabs>
// 				<h3>TAB NO: {value} clicked!</h3>
// 			</Paper>
// 		</div>

//     </section>
// 	);
// };

// export default Portfolio;

import React from "react";
import { Tab,Tabs } from 'react-bootstrap';

function Portfolio() {
  return (
    <section id="portfolio" className="section-portfolio">
        <div className="container-fluid px-lg-5">
          <div className="d-flex text-center mb-5">
            <h2 className="About">Portfolio</h2>
            <p className="know">My Work</p>
          </div>
        </div>

        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-center"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
       </section>

  );
}
// Usage
export default Portfolio;
