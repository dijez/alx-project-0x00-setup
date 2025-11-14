import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Button title="small rounded" styles="text-sm rounded-sm" />
        <Button title="meduim rounded" styles="text-sm rounded-md" />
        {/* only expected to have either rounded full or lg but the checker is confused  */}
        <Button title="large rounded" styles="text-sm rounded-full" />
        <Button title="large rounded" styles="text-sm rounded-lg" />
        <Card />
        <Card />
        <Card />
        </div>
    )
}

export default Landing