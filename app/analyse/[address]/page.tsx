"use server"

import { createClient } from "@/utils/supabase/server";
import AuditCard from '@/components/AuditCard'
import AddAudit from '@/components/addaudit'
import FeatureCard from '@/components/FeatureCard'
import { check } from '@/utils/contract/check';
import { Check, X } from 'lucide-react';

interface Result {
  code: string;
  isToken?: boolean;
  isCodeSourcePublished?: boolean;
}

export default async function Analyse({params}: any) {
  const supabase = await createClient();
  const { address } = await params

  await supabase.rpc('increment_view', { input_page: '/analyse' });

  const { data, error } = await supabase
    .from('smart_contract_audits')
    .select()
    .eq('smart_contract_address', address)
  const list_of_audits = data

  const result: Result = await check(address)

  return (
    <div className="mb-24">
      <div className="relative flex flex-col items-center mb-24">
      <div className="flex px-4 pb-4 lg:pb-0 lg:px-0 flex-col gap-16 bg-pink-300 dark:bg-sky-900 w-full items-center bg-[length:64px_64px] bg-[linear-gradient(to_right,_#FBCFE8_1px,_transparent_1px),_linear-gradient(to_bottom,_#FBCFE8_1px,_transparent_1px)] dark:bg-[linear-gradient(to_right,_#075985_1px,_transparent_1px),_linear-gradient(to_bottom,_#075985_1px,_transparent_1px)]">
          <div className="max-w-5xl w-full flex flex-col justify-center gap-8 py-16">
            <p className="text-5xl font-bold text-sky-900 dark:text-pink-300">
              Token Analysis
            </p>
              {result.code === 'no_code' && (
                <div className="flex gap-2 items-center">
                  <X className="text-red-400 w-16 h-16"/>
                  <p className="text-lg font-semibold text-sky-900 dark:text-pink-300">
                    It seems to not be a token.
                  </p>
                </div>
              )}
              {result.code !== 'no_code' && (
                <p className="text-lg font-base text-black dark:text-pink-300">
                  {address}
                </p>
              )}
          </div>
        </div>
        <div className="absolute bg-white dark:bg-sky-800 w-full py-8 border max-w-5xl rounded-2xl translate-y-1/2 bottom-0 flex items-center px-8">
          <p className="text-sky-900 dark:text-pink-300 text-xl font-semibold">Seems pretty safe <span className="font-light text-black">(This is information – not financial advice or recommendation)</span></p>
        </div>
      </div>
      <div className="relative flex flex-col items-center px-4 lg:px-0">
        <div className="flex flex-col w-full items-center">
          <div className="max-w-5xl w-full flex flex-col justify-center">
            <p className="text-sky-900 dark:text-pink-300 text-3xl font-semibold">Audits</p>
            <div className="flex flex-col gap-4 py-4">
              <AddAudit />
              {!list_of_audits?.length && (
                <p className="text-lg font-base text-black">
                  No audit found.
                </p>
              )}
              {(list_of_audits||[]).map((audit, i) => (
                <AuditCard audit={audit} n={i} key={'audit'+i}/>
              ))}
            </div>
          </div>
          <div className="max-w-5xl w-full flex flex-col justify-center">
            <p className="text-sky-900 dark:text-pink-300 text-3xl font-semibold">Analysis</p>
            <div className="flex flex-col gap-4 py-4">
              <FeatureCard success={result.code !== 'no_code'} content={'Is there code?'} />
              <FeatureCard success={result.isToken?true:false} content={'Is it a token?'} />
              <FeatureCard success={result.isCodeSourcePublished?true:false} content={'Is code source published?'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
