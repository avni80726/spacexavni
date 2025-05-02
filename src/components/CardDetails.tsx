import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { ILaunch } from './type';

const CardDetails = () => {
    const {id} = useParams();
    const {launches : launch,pending,error} = useFetch('https://api.spacexdata.com/v4/launches/${id}' + id);
    return (
        <div className="card-details">
            <h2>CARD DETAILS - { id}</h2>
            {pending && <div>loading...</div>}
            {error && <div>{error}</div>}
        </div>
      );
}
 
export default CardDetails;