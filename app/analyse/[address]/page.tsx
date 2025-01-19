"use server"
import { createClient } from "@/utils/supabase/server";
import AuditCard from '@/components/AuditCard'
import FeatureCard from '@/components/FeatureCard'
import { check } from '@/utils/contract/check';
import { Check, X } from 'lucide-react';

export default async function Analyse({params}) {
  const supabase = await createClient();
  const { address } = await params

  const { data, error } = await supabase
    .from('smart_contract_audits')
    .select()
    .eq('smart_contract_address', address)
  const list_of_audits = data

  console.log(list_of_audits)

  const result = await check(address)
  console.log(result)

  return (
    <div>
      <div className="relative flex flex-col items-center mb-24">
      <div className="flex flex-col gap-16 bg-pink-300 w-full items-center bg-[length:64px_64px] bg-[linear-gradient(to_right,_#FCE7F3_1px,_transparent_1px),_linear-gradient(to_bottom,_#FCE7F3_1px,_transparent_1px)]">
          <div className="max-w-5xl w-full flex flex-col justify-center gap-8 py-16">
            <p className="text-5xl font-bold text-sky-900">
              Token Analysis
            </p>
            <p className="text-base font-normal text-sky-900">
              {address}
            </p>
          </div>
        </div>
        <div className="absolute bg-white w-full py-8 border max-w-5xl rounded-2xl translate-y-1/2 bottom-0 flex items-center px-8">
          <p className="text-sky-900 text-xl font-semibold">Seems pretty safe <span className="font-light">(This is information – not financial advice or recommendation)</span></p>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col w-full items-center">
          <div className="max-w-5xl w-full flex flex-col justify-center">
            <p className="text-sky-900 text-3xl font-semibold">Audits</p>
            <div className="flex flex-col gap-4 py-4">
              {list_of_audits.map((audit, i) => (
                <AuditCard audit={audit} n={i} key={'audit'+i}/>
              ))}
            </div>
          </div>
          <div className="max-w-5xl w-full flex flex-col justify-center">
            <p className="text-sky-900 text-3xl font-semibold">Analyse</p>
            <div className="flex flex-col gap-4 py-4">
              <FeatureCard success={result.code !== 'no_code'} content={'Is there code?'} />
              <FeatureCard success={result.isToken} content={'Is it a token?'} />
              <FeatureCard success={result.isCodeSourcePublished} content={'Is code source published?'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
