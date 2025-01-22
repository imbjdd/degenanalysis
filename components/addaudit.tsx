'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WagmiProvider, Connector, useConnect } from 'wagmi'
import { config } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { signMessage } from '@wagmi/core'
import { useEffect, useState } from 'react';
import { createClient } from "@/utils/supabase/client";
import { Calendar } from "@/components/ui/calendar"
import { PartyPopper } from 'lucide-react';

const queryClient = new QueryClient()

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button className="bg-sky-900 hover:bg-sky-800 text-white py-4 rounded-lg" key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

export function Logged() {
  const { disconnect } = useDisconnect()
  const { address, isConnected } = useAccount()
  const [securityAuditProvider, setsAcurityAuditProvider] = useState('')
  const [smartContractAddress, setSmartContractAddress] = useState('')
  const [auditUrl, setAuditUrl] = useState('')
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [done, setDone] = useState(false)

  async function submit() {
  	const result = await signMessage(config, { message: JSON.stringify({
	        smart_contract_address: smartContractAddress,
	        user_address: address,
	        security_audit_provider: securityAuditProvider,
	        audit_report_url: auditUrl,
	        audit_date: date?.toISOString()}) })

	  const supabase = createClient();

	  const { data, error } = await supabase
	    .from("smart_contract_audits_with_user")
	    .insert([
	      {
	        smart_contract_address: smartContractAddress,
	        user_address: address,
	        security_audit_provider: securityAuditProvider,
	        audit_report_url: auditUrl,
	        audit_date: date?.toISOString(),
	        signature: result
	      },
	    ]);

	  if (error) {
	    console.error("Error", error.message);
	  } else {
	    setDone(true)
	  } 
  }

	return (
		<>
		{!done && (
	    <div className="grid gap-4 py-4">
	      <div className="grid grid-cols-4 items-center gap-4">
	        <Label htmlFor="name" className="text-right">
	          Your Address <span className="text-sm text-muted-foreground cursor-pointer" onClick={() => disconnect()}>Disconnect</span>
	        </Label>
	        <Input id="name" className="col-span-3" value={address} disabled readOnly />
	      </div>
	      <div className="grid grid-cols-4 items-center gap-4">
	        <Label htmlFor="username" className="text-right">
	          Smart Contract Address
	        </Label>
	        <Input id="smart_contract_address" className="col-span-3" value={smartContractAddress} onChange={(e) => setSmartContractAddress(e.target.value)}/>
	      </div>
	      <div className="grid grid-cols-4 items-center gap-4">
	        <Label htmlFor="username" className="text-right">
	          Audit Provider
	        </Label>
	        <Input id="audit_provider" className="col-span-3" value={securityAuditProvider} onChange={(e) => setsAcurityAuditProvider(e.target.value)}/>
	      </div>
	      <div className="grid grid-cols-4 items-center gap-4">
	        <Label htmlFor="username" className="text-right">
	          Audit Url
	        </Label>
	        <Input id="audit_url" className="col-span-3"  value={auditUrl} onChange={(e) => setAuditUrl(e.target.value)}/>
	      </div>
	      <div className="grid grid-cols-4 items-center gap-4">
	        <Label htmlFor="date" className="text-right">
	          Audit Date
	        </Label>
	        <Calendar
			      mode="single"
			      selected={date}
			      onSelect={setDate}
			      id="date"
			      className="rounded-md border shadow col-span-3"
			    />
	      </div>
	      <Button onClick={() => submit()}>Submit</Button>
	    </div>
    )}
    {done && (
    	<div className="py-4 flex flex-col gap-4 items-center">
    		<p className="font-base">Thank you for collaboration! The request of adding that smart contract has been sent.</p>
    		<PartyPopper className="w-20 h-20 text-pink-400" />
    	</div>
    )}
    </>
	)
}

export function NotLogin() {
	return (
    <div className="grid gap-4 py-4">
    	<p className="text-sm text-muted-foreground">Please connect to a wallet.</p>
    	<WalletOptions />
    </div>
  )
}

export function Handler() {
  const { isConnected } = useAccount()

  return (
    <div>
    	<div className="flex gap-2">
    		<div className={"grow h-1 rounded "+(isConnected?'bg-black/10':'bg-black')}></div>
    		<div className={"grow h-1 rounded "+(!isConnected?'bg-black/10':'bg-black')}></div>
    	</div>
      {!isConnected && <NotLogin />}
      {isConnected && <Logged />}
    </div>
  )
}

export default function DialogDemo() {
  return (
    <WagmiProvider config={config}>
     <QueryClientProvider client={queryClient}> 
		    <Dialog>
		      <DialogTrigger className="w-fit" asChild>
		        <Button className="bg-black hover:bg-black/80 py-6 px-6">Add Audit</Button>
		      </DialogTrigger>
		      <DialogContent className="sm:max-w-[425px]">
		        <DialogHeader>
		          <DialogTitle>Add Audit</DialogTitle>
		        </DialogHeader>
		        <Handler />
		      </DialogContent>
		    </Dialog>
		  </QueryClientProvider>
    </WagmiProvider>
  )
}