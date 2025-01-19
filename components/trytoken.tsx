import Image from "next/image"
import Link from "next/link"

export default function TryToken() {
  return (
  	<div className="flex w-full justify-center">
	    <div className="relative flex flex-col gap-4 items-center justify-between max-w-5xl w-full pt-12">
	    	<p className="text-sky-900 text-xl font-semibold">Don't know what token try? Try these ones!</p>
	    	<Link className="flex gap-2 items-center justify-center hover:text-pink-400" href="/analyse/0xdac17f958d2ee523a2206206994597c13d831ec7">
		    	<Image alt="tether" width={32} height={32} src="/tether.svg" />
		    	<p>Tether USD - 0xdac17f958d2ee523a2206206994597c13d831ec7</p>
		    </Link>
	    </div>
	</div> 
  );
}
