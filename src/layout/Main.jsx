import React from 'react';
import { MoviesList } from '../components/MoviesList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: false
        };
        this.searchMovies = this.searchMovies.bind(this);
    }

    async searchMovies(searchInput, searchCategory) {
        this.setState({ movies: [], loading: true });
        let response = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}${ (searchCategory === 'all') ? '' : `&type=${searchCategory}` }`
            );
        if (response.ok) {
            const moviesDataJson = await response.json();
            if (moviesDataJson.Response === 'False') {
                this.setState({ movies: [], loading: false });
                alert('Фильмы не найдены');
            }
            else {
                this.setState({ movies: moviesDataJson.Search, loading: false });
            }
        }
        else {
            this.setState({ movies: [], loading: false });
            setTimeout(() => alert('Ошибка получения данных'), 10);
        }
    }

    render() {
        return (
            <main className="container content">
                <Search onSearchStart={this.searchMovies} />
                {this.state.loading && <Preloader />}
                {Boolean(this.state.movies.length) && <MoviesList movies={this.state.movies} />}
            </main >
        );
    }
}

export { Main };