"use client";
import dynamic from "next/dynamic";

// import ResumeViewer from "@/components/resume_viewer/resumeViewer";

const ResumeViewer = dynamic(
  () => import("../../components/resume_viewer/resumeViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-white">Loading Resume...</p>
      </div>
    ),
  },
);

export default function ResumeView() {
  const pdfURL = "/docs/RafaelBocsa_2026.pdf";

  return (
    <div style={{ height: "100vh" }}>
      <ResumeViewer file="/docs/RafaelBocsa_2026.pdf" />
    </div>
  );
}
