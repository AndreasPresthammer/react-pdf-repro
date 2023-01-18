import React, {useEffect, useState} from 'react';
import './App.css';
import {Document, Page, pdfjs} from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
    const url = "images/default/sample.pdf";
    const [objectUrl, setObjectUrl] = useState<string>();

    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const blob = await response.blob();
            setObjectUrl(window.URL.createObjectURL(blob));
        })();
    }, []);

    return (
        <div className="App">
            <a href={`https://www.africau.edu/${url}`}>Actual pdf</a>
            {objectUrl && (
                <Document file={objectUrl} onLoadError={console.error}>
                    <Page pageNumber={1}/>
                </Document>
            )}
        </div>
    );
}

export default App;
