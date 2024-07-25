import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set workerSrc to avoid "Missing PDF" error
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }:{numPages:any}) {
    setNumPages(numPages);
  }

  return (
    <div id="resume" className="min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Resume</h2>
      <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <Document
          file="/RESUMEUPDATE.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (_el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default Resume;
