'use server'

import { createAdminClient } from "@/utils/supabase/server";

export async function deleteAudit(id:number) {
    const supabase = await createAdminClient()

    const result = await supabase
        .from('smart_contract_audits_with_user')
        .delete()
        .eq('id', id)
}

export async function validateAuditAndDelete(dataToAdd:any, id:number) {
    const supabase = await createAdminClient()

    console.log('youpi')

    const { data, error } = await supabase
        .from('smart_contract_audits')
        .insert([dataToAdd])


    deleteAudit(id)

    console.log(error)
}