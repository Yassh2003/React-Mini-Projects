export const SeriesCard = (props) => {

    const { data } = props;

    return ( 
        <li>
            <div>
                <img src={data.img_url} alt={data.name} width="40%" height="40%"/>
            </div>
            <h2>Name: {data.name}</h2>
            <h3>Rating: {data.rating} </h3>
            <p>Summary : {data.description} </p>
            <p>Genre: {data.genre} </p>
            <p>Cast: {data.cast}</p>
            <a href={data.watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    );
}