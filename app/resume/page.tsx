import React from "react";

const ResumeView = () => {
  const pdfURL = "/docs/RafaelBocsa_2026.pdf";

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <embed
        src={pdfURL}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default ResumeView;
