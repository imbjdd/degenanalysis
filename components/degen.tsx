import Image from "next/image"
import Link from "next/link"

export default function Degen() {
  return (
  	<div className="flex w-full justify-center">
	    <div className="px-4 lg:px-0 relative flex flex-col gap-4 justify-between max-w-5xl w-full lg:my-24 py-12 lg:py-24">
	    	<p className="text-sky-900 text-4xl lg:text-6xl font-bold mb-4">Approved by Degens</p>
	    	<div className="flex flex-col lg:flex-row gap-8 flex-wrap">
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
		    	<div className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
		    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src="https://github.com/imbjdd.png" />
			    </div>
			    {Array.from({ length: 3 }, (_, i) => (
			    	<div key={i} className="grow w-44 h-44 hidden lg:block"></div>
			    ))}

			  </div>
	    </div>
	</div> 
  );
}
