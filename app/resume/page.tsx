import React from "react";

const ResumeView = () => {
  const pdfURL = "/docs/RafaelBocsa_2026.pdf";

  return (
    <div className="w-screen h-screen overflow-auto bg-none z-10">
      <embed src={pdfURL} type="application/pdf" className="w-full h-full" />
    </div>
  );
};

export default ResumeView;
