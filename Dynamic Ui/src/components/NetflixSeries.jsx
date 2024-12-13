import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
    return (
        <ul className="grid grid-three--cols">
            {
                seriesData.map((currElement) => {
                    return ( <SeriesCard key={currElement.id} data={currElement}/> );
                })
            }
        </ul>
    );
};

export default NetflixSeries;