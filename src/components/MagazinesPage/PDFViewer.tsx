import React, { useEffect, useState } from 'react';
import { SpecialZoomLevel, Viewer, ViewMode, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import es_ES from '@react-pdf-viewer/locales/lib/es_ES.json';
import './PDFViewer.css';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DualPageWithCover);
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setViewMode(ViewMode.SinglePage);
    } else {
      setViewMode(ViewMode.DualPageWithCover);
    }
  }, []); // Solo al montar

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div className="h-screen rounded-2xl border-2 border-gray-300 overflow-hidden bg-white">
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
          enableSmoothScroll={false}
          viewMode={viewMode}
          defaultScale={SpecialZoomLevel.PageFit}
          localization={es_ES}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
