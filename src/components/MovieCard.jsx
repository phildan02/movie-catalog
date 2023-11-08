function MovieCard(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props.movieData;
    return (
        <div className="movie">
            <div className="card">
                <div className="card-image">
                    {Poster === 'N/A' ?
                        <img src={'https://placehold.co/250x250?text=Постер отсутствует'} /> :
                        <img src={Poster}/>
                    }
                </div>
                <div className="card-content">
                    <span className="card-title">{Title}</span>
                    <div className='movieCardDetails'>
                        <span>{Type}</span>
                        <span>{Year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { MovieCard };