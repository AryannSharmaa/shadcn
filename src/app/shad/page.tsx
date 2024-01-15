import { Button } from "@/components/ui/button"

function ShadPage(){
    return (
        <main className="h-full flex justify-center items-center flex-col">

        <div>ShadPage 🧭</div>
        <button className="px-6 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">Test</button>
        <Button variant='destructive'>Shadcn Button</Button>
        </main>
    )
}

export default ShadPage