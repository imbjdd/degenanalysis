import Image from "next/image"
import Link from "next/link"

export default async function Degen() {
  const fetchDegens = async () => {
    const response = await fetch("https://api.github.com/repos/imbjdd/degenanalysis/stargazers");
    if (!response.ok) throw new Error("Error");
    const data = await response.json();
    return data || [];
  }

  const degens = await fetchDegens()

  return (
  	<div className="flex w-full justify-center">
	    <div className="px-4 lg:px-0 relative flex flex-col gap-4 justify-between max-w-5xl w-full lg:my-24 py-12 lg:py-24">
	    	<p className="text-sky-900 dark:text-pink-300 text-4xl lg:text-6xl font-bold mb-4">Approved by Degens</p>
			  <Link className="hover:text-pink-300" href="https://github.com/imbjdd/degenanalysis" target="_blank">
			  	<p className="text-lg font-light mb-4">Star the repo to support the project!</p>
			  </Link>
	    	<div className="flex flex-col lg:flex-row gap-8 flex-wrap">
			    {degens.map((degen:any, i:number) => (
			    	<div key={i} className="border grow w-fit overflow-hidden rounded-2xl hover:text-pink-400">
			    		<img className="w-full lg:w-44 lg:h-44" alt="tether" src={degen.avatar_url} />
				    </div>
				   ))}
			    {Array.from({ length: 5-degens.length%5 }, (_, i) => (
			    	<div key={i} className="grow w-44 h-44 hidden lg:block"></div>
			    ))}

			  </div>
	    </div>
	</div> 
  );
}
