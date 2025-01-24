import { createClient } from "@/utils/supabase/client";

export async function GET(req: any) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('smart_contract_audits')
    .select()
    .csv()

  if (error) {
    return new Response(JSON.stringify({ message: 'Error when fetching data' }), { status: 500 });
  }

  try {
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=audits.csv',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Error when making CSV' }), { status: 500 });
  }
}
