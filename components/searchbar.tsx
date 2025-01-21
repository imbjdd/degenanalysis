'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  return (
    <div className="flex bg-sky-900 rounded-2xl">
      <Input
        className="py-8 overflow-hidden bg-sky-900 border-none rounded-2xl text-white/80 placeholder:text-white/80"
        type="text" placeholder="Search by Address / Token name"
        value={search}
        onChange={event => setSearch(event.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && router.push('/analyse/'+search)}
      />
      <button onClick={() => router.push('/analyse/'+search)} className="rounded-full text-white flex items-center justify-center px-6" >meow</button>
    </div>
  );
}