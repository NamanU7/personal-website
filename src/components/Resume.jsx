import React from 'react';
import Title from './Title';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';

function Resume() {
    return (
        <div className="flex flex-col justify-center items-center my-20">
            <Title>Resume</Title>

            <Document file="/assets/resume.pdf">
                <Page size="A4" pageIndex={0} />
            </Document>

            <button>Download</button>

        </div>
    );
}

export default Resume;