// components/ui/IframeEmbed.js

import React from "react";

const IframeEmbed = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100%",
        overflow: "auto",
      }}
    >
      <iframe
        src="https://advanced.team/services"
        style={{
          margin: 0,
          padding: 0,
          height: "100%",
          width: "100%",
          display: "block",
          border: "none",
          overflowY: "auto",
          overflowX: "hidden",
        }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="auto"
        title="Embedded Services"
      ></iframe>
    </div>
  );
};

export default IframeEmbed;
