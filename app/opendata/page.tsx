'use server'

import AuditCard from '@/components/AuditCard'
import AddAudit from '@/components/addaudit'
import FeatureCard from '@/components/FeatureCard'
import { check } from '@/utils/contract/check';
import { Check, X } from 'lucide-react';
import DownloadData from '@/components/DownloadData'
import { Code } from '@/components/Code'

export default async function OpenDataIndex() {
  const code = `\`\`\`sh
curl -o audits.csv https://degenanalysis.vercel.app/data/audits
  \`\`\`
  `
  return (
    <div className="mb-24 w-full">
      <div className="relative flex flex-col items-center px-4 lg:px-0">
        <div className="flex flex-col w-full items-begin lg:pl-12">
          <div className="max-w-5xl w-full flex flex-col gap-4 justify-center">
            <p className="text-5xl lg:text-7xl font-black text-sky-900 dark:text-pink-300">
              Open Data
            </p>
            <p>This project is all about transparency. The goal is to make all the data publicly available, so everyone can see what’s behind the platform. Here, you can access the raw data, and it’s available for download in CSV format.</p>
            <p>The data is updated regularly to ensure it’s always up to date, and anyone can explore or use it as needed.</p>
            <p className="text-sky-900 dark:text-pink-300 text-3xl font-semibold">Smart Contracts Audits</p>
            <p>The CSV file contains important details about the audits performed on various smart contracts. Here’s a breakdown of the columns:</p>
            <ul>
              <li><span className="font-semibold">smart_contract_address:</span> The address of the smart contract that was audited.</li>
              <li><span className="font-semibold">security_audit_provider:</span> The name of the audit provider who carried out the security audit (these audits are conducted by third-party providers, not the project team).</li>
              <li><span className="font-semibold">audit_report_url:</span> A link to the full audit report, where you can read more about the findings.</li>
              <li><span className="font-semibold">audit_date:</span> The date when the audit was completed.</li>
            </ul>
            <p>Feel free to download the data below and take a deeper look.</p>
            <DownloadData />
            <p className="text-sky-900 dark:text-pink-300 text-3xl font-semibold">Download CSV using Code</p>
            <p>To download the data, simply use the following cURL command in your terminal:</p>
            <Code code={code} />
          </div>
        </div>
      </div>
    </div>
  );
}
