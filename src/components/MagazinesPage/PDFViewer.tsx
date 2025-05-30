import React from 'react';
import { SpecialZoomLevel, Viewer, ViewMode, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import es_ES from '@react-pdf-viewer/locales/lib/es_ES.json';
import './PDFViewer.css';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div className="rounded-2xl overflow-hidden bg-[#ece9e9] h-screen p-3">
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
          enableSmoothScroll={false}
          viewMode={ViewMode.SinglePage}
          defaultScale={SpecialZoomLevel.PageFit}
          localization={es_ES}
          renderError={() => (
            <div className="flex items-center justify-center text-center select-none">
              <div className="bg-gray-400 text-white p-3 rounded-xl shadow-md">
                <p className="text-sm font-semibold">No se pudo cargar la revista</p>
              </div>
            </div>
          )}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
