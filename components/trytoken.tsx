import Image from "next/image"
import Link from "next/link"

export default function TryToken() {
  return (
  	<div className="flex w-full justify-center">
	    <div className="px-4 lg:px-0 relative flex flex-col gap-4 justify-between max-w-5xl w-full lg:mt-24 py-24">
	    	<p className="text-sky-900 dark:text-pink-300 text-4xl lg:text-6xl font-bold mb-4">Popular Tokens</p>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white dark:bg-sky-900 rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex lg:flex-row flex-col gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p className="break-all">0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white dark:bg-sky-900 rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex lg:flex-row flex-col gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p className="break-all">0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white dark:bg-sky-900 rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex lg:flex-row flex-col gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p className="break-all">0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    	<Link className="flex-col gap-2 justify-center border p-12 bg-white dark:bg-sky-900 rounded-2xl hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<div className="flex lg:flex-row flex-col gap-2"><Image alt="tether" width={32} height={32} src="/tether.svg" /><p className="font-bold text-base">Tether USD</p><p className="break-all">0xdac17f958d2ee523a2206206994597c13d831ec7</p></div>
		    </Link>
	    </div>
	</div> 
  );
}
