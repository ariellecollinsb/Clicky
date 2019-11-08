import React from "react";
import "./Container.css";

//stateless component
const Container = props => 
<>
<div className="container">
{props.children}
</div>;
<div className="clear"></div>
</>

export default Container;