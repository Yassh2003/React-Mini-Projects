import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
    return (
        <ul>
            {
                seriesData.map((currElement) => {
                return ( <li>
                    <div>
                        <img src={currElement.img_url} alt="qot.jpg" width="40%" height="40%"/>
                    </div>
                    <h2>Name: {currElement.name}</h2>
                    <h3>Rating: {currElement.rating} </h3>
                    <p>Summary : {currElement.description} </p>
                    <p>Genre: {currElement.genre} </p>
                    <p>Cast: {currElement.cast}</p>
                    <a href={currElement.watch_url} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </li>
                );
                })
            }
        </ul>
    );
};

export default NetflixSeries;