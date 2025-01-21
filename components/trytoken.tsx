import Image from "next/image"
import Link from "next/link"

export default function TryToken() {
  return (
  	<div className="flex w-full justify-center">
	    <div className="relative flex flex-col gap-4 justify-between max-w-5xl w-full mt-24 py-24">
	    	<p className="text-sky-900 text-6xl font-bold mb-4">Popular Tokens</p>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p>0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p>0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p>0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p>0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    </div>
	</div> 
  );
}
