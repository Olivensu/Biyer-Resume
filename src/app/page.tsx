import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import ClearDataButton from '@/components/ClearDataButton';
import WelcomePopup from '@/components/WelcomePopup';

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 min-h-screen">
      <WelcomePopup />

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Resume Builder</h1>
        <div className="flex gap-4">
          <ClearDataButton />
          <PDFDownloadButton />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Edit Information</h2>
          <ResumeForm />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Live Preview</h2>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border">
            <ResumePreview />
          </div>
        </div>
      </div>
    </main>
  );
}
