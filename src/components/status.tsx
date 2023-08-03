import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import './status.scss'
import React, {useEffect, useState} from "react";
type StatusProps = {
    name: string,
    test: () => Promise<boolean>
}
export const Status: React.FC<StatusProps> = (props) => {
    const [result, setResult] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const testResult = await props.test();
            console.log(testResult)
            setResult(testResult)
        },10000)
        return () => clearInterval(intervalId);
    }, [])
    return(
        <div className={"status"}>
            { result ?
                <CheckCircleIcon color={"success"}/> :
                <ErrorIcon color={"error"}/>
            }
            {props.name}
        </div>
    );
}
export default Status;
