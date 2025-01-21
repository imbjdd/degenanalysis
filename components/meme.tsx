import Image from "next/image"

export default function Meme() {
  return (
  	<div className="flex w-full justify-center">
	    <div className="relative flex flex-col-reverse lg:flex-row gap-12 lg:gap-32	 items-center justify-between max-w-5xl w-full lg:py-24">
	    	<div className="flex flex-col lg:w-1/2">
	    		<div className="border-b dark:border-sky-900 py-12">
	    			<p className="text-4xl dark:text-pink-300 lg:text-6xl font-bold text-sky-900">Degen-based</p>
	    		</div>
	    		<div className="border-b dark:border-sky-900 py-12">
	    			<p className="text-4xl dark:text-pink-300 lg:text-6xl font-bold text-sky-900">Open-Source</p>
	    		</div>
	    		<div className="py-12">
	    			<p className="text-4xl dark:text-pink-300 lg:text-6xl font-bold text-sky-900">Open-Data</p>
	    		</div>
	    		{/*<img className="w-full aspect-square" src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVrNTF5aGl4aGg0YWxsbmJ0YmE4cHgwZjNoa2Ntb3Ezdnp4Y3NhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3fmRTfVIKMRiM/giphy.gif"}/>
	    		*/}
	    	</div>
	    	<div className="flex flex-col gap-4 lg:w-1/2 px-4">
	    		<img className="w-full aspect-square rounded-2xl" src={"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTd6ZzV0Z2FnbG9rNDFyMGd6NjgwZmNiMnZ0MTFiZXlxdTdrMjJ0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZkK3fwlMk8FFFow8Eq/giphy.gif"}/>
	    	</div>
	    </div>
	</div> 
  );
}
