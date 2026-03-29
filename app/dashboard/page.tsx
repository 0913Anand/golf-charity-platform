import ScoreForm from "@/components/ScoreForm"

export default function Dashboard(){

return(

<div className="p-10">

<h1 className="text-3xl mb-6">
Dashboard
</h1>

<ScoreForm userId="demo-user-id"/>

</div>

)

}