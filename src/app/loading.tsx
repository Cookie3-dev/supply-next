import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-2xl font-bold">Loading...</p>
        <Loader className="animate-spin text-3xl" />
      </div>
    </div>
  )
}