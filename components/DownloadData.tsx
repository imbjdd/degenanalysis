'use client'

import { Button } from "@/components/ui/button"

export default function DownloadData() {
  const downloadCsv = async () => {
    const response = await fetch('/data/audits');
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'audits.csv';
    link.click();
  };

  return <Button className="w-fit bg-black hover:bg-black/80 py-6 px-6 dark:bg-white dark:text-black hover:bg-white/80" onClick={downloadCsv}>Download CSV</Button>;
}