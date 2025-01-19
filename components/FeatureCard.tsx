import { Check, X } from 'lucide-react';

export default function FeatureCard({success, content}: {success:boolean, content: string}) {
  return (
    <div className={"flex gap-4 items-center rounded-2xl border p-8 " + (success?'bg-green-200':'bg-red-200')}>
      {success && (
        <Check className="w-12 h-12 text-green-800" />
      )}
      {!success && (
        <X className="w-12 h-12 text-red-800" />
      )}
      <p className="font-base">{content}</p>
    </div>
  )
}
