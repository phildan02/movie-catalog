import { MovieCard } from './MovieCard';

function MoviesList(props) {
    return (
        <>
            <div className='movies'>
                {props.movies.map((item, index) => {
                    return <MovieCard key={index} movieData={item} />
                })}
            </div>
        </>
    );
}

export { MoviesList };