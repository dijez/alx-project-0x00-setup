import { PillProps } from "@/interfaces/";
import { title } from "process";

const Pill: React.FC<PillProps> = ({ title }) => {
    return(
        <div className="flex justify-center items-center bg-[#F9F9F9F] 
        px-3 w-auto h-[27px] rounded-full">
            <p className="text-sm ">{title}</p>
        </div>
    )
}

export default Pill;