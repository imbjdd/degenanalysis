import Image from "next/image"
import Link from "next/link"

export default function Degen() {
  return (
  	<div className="flex w-full justify-center">
	    <div className="relative flex flex-col gap-4 justify-between max-w-5xl w-full my-24 py-24">
	    	<p className="text-sky-900 text-6xl font-bold mb-4">Approved by Degens</p>
	    	<div className="flex gap-8 flex-wrap">
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-44 h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-44 h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-44 h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-44 h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-44 h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-44 h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-44 h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
			    {Array.from({ length: 3 }, (_, i) => (
			    	<div key={i} className="grow w-44 h-44"></div>
			    ))}

			  </div>
	    </div>
	</div> 
  );
}
