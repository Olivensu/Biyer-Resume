'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/store/hooks';
import { ResumeDocument } from './PDFDocument';

const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => <Button disabled>Loading PDF...</Button>,
    }
);

export default function PDFDownloadButton() {
    const resumeData = useAppSelector((state) => state.resume);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <Button disabled>Prepare Download</Button>;
    }

    return (
        <PDFDownloadLink
            key={resumeData.selectedDesign}
            document={<ResumeDocument data={resumeData} />}
            fileName="resume.pdf"
        >
            {({ blob, url, loading, error }) => (
                <Button disabled={loading}>
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                </Button>
            )}
        </PDFDownloadLink>
    );
}
