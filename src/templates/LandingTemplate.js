import React from "react";

const Content = () => <div>No Content</div>;

function LandingTemplate(props) {
  const { content } = props;
  return <div>{!content && <Content />}</div>;
}

export default LandingTemplate;
