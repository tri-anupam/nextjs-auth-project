
export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
            <h1 className="text-4xl">Profile Page<br/>
            <span className="p-2font-bold text-gray-100">{params.id}</span>
            </h1>
        </div>
    )
}
