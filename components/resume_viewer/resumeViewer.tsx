"use client";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function resumeViewer({ file }: { file: string }) {
  const [containerWidth, setContainerWidth] = useState<number>(800);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setContainerWidth(width);
      } else if (width < 1024) {
        setContainerWidth(Math.min(width - 64, 700));
      } else {
        setContainerWidth(850);
      }
    };

    updateWidth();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-none overflow-hidden">
        <Document
          file={file}
          loading={<></>}
          error={
            <div className="p-8 text-center text-red-500">
              Failed to load PDF.
            </div>
          }
        >
          <div className=" flex justify-center">
            <Page
              pageNumber={1}
              width={containerWidth}
              renderAnnotationLayer={true}
              renderTextLayer={true}
              className="shadow-md"
            />
          </div>
        </Document>
      </div>
    </div>
  );
}
