import Image from "next/image"

export default function Meme() {
  return (
  	<div className="flex w-full justify-center">
	    <div className="relative flex gap-32	 items-center justify-between max-w-5xl w-full pt-12">
	    	<div className="flex flex-col gap-4 w-1/2">
	    		<p className="text-xl text-sky-900">Before...</p>
	    		<img className="w-full aspect-square" src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVrNTF5aGl4aGg0YWxsbmJ0YmE4cHgwZjNoa2Ntb3Ezdnp4Y3NhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3fmRTfVIKMRiM/giphy.gif"}/>
	    	</div>
	    	<div className="flex flex-col gap-4 w-1/2">
	    		<p className="text-xl text-sky-900">After...</p>
	    		<img className="w-full aspect-square" src={"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTd6ZzV0Z2FnbG9rNDFyMGd6NjgwZmNiMnZ0MTFiZXlxdTdrMjJ0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZkK3fwlMk8FFFow8Eq/giphy.gif"}/>
	    	</div>
	    </div>
	</div> 
  );
}
