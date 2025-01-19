import { Input } from "@/components/ui/input"
import { createClient } from "@/utils/supabase/server";

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
      <div className="flex flex-col gap-16 bg-pink-300 w-full items-center bg-[length:64px_64px] bg-[linear-gradient(to_right,_#FCE7F3_1px,_transparent_1px),_linear-gradient(to_bottom,_#FCE7F3_1px,_transparent_1px)]">
        <div className="max-w-5xl w-full flex flex-col justify-center gap-8 pt-16 pb-16">
          <p className="text-5xl font-bold text-sky-900">
            Is it safe? Find Out Now
          </p>
          <p className="text-xl font-semibold text-sky-900">
            Free, Open Source, and <span className="bg-yellow-400">Degen-Approved</span> Analysis
          </p>
          <div className="flex bg-sky-900 rounded-2xl">
            <Input className="py-8 overflow-hidden bg-sky-900 border-none rounded-2xl text-white/80 placeholder:text-white/80" type="text" placeholder="Search by Address / Token name" />
            <a href="/analyse/0x1234567890abcdef1234567890abcdef12345678" className="rounded-full text-white flex items-center justify-center px-6" >meow</a>
          </div>
        </div>
      </div>
      <div className="absolute bg-white w-full py-8 border max-w-5xl rounded-2xl translate-y-1/2 bottom-0 flex items-center px-8">
        <div className="flex-grow">
          <p className="text-sky-900 text-xl font-semibold">{number_of_audits} Audits Saved</p>
        </div>
        <div className="flex-grow">
          <p className="text-sky-900 text-xl font-semibold">+{data.views} Contracts Searched</p>
        </div>
      </div>
    </div>
  );
}
