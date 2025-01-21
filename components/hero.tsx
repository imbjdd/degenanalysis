import { createClient } from "@/utils/supabase/server";
import SearchBar from '@/components/searchbar'

export default async function Header() {
  const supabase = await createClient();

  const { count } = await supabase
    .from('smart_contract_audits')
    .select('*', { count: 'exact', head: true })

  const { data, error } = await supabase
    .from('page_views')
    .select('views')
    .eq('page', '/analyse')
    .single()

  const number_of_audits = count || 0

  return (
    <div className="relative flex flex-col items-center mb-12">
      <div className="flex flex-col gap-16 bg-pink-300 w-full items-center bg-[length:64px_64px] bg-[linear-gradient(to_right,_#FBCFE8_1px,_transparent_1px),_linear-gradient(to_bottom,_#FBCFE8_1px,_transparent_1px)]">
        <div className="max-w-5xl w-full flex flex-col justify-center gap-8 py-40">
          <p className="text-7xl font-black text-sky-900">
            Is it safe? Find Out Now
          </p>
          <p className="text-xl font-bold text-sky-900">
            Free, Open Source, and <span className="bg-yellow-400">Degen-Approved</span> Analysis
          </p>
          <SearchBar />
        </div>
      </div>
      <div className="absolute bg-white w-full p-12 border max-w-5xl rounded-2xl translate-y-1/2 bottom-0 flex items-center">
        <div className="flex-grow">
          <p className="text-sky-900 text-xl font-semibold">{number_of_audits} Audits Saved</p>
        </div>
        <div className="flex-grow">
          <p className="text-sky-900 text-xl font-semibold">+{data?.views||0} Contracts Searched</p>
        </div>
      </div>
    </div>
  );
}
