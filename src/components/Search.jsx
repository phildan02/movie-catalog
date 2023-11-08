import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchInput: '',
            searchCategory: 'all'
        };
        this.searchStart = this.searchStart.bind(this);
        this.handleCategorySelect = this.handleCategorySelect.bind(this);
    }

    searchStart(e) {
        if (this.state.searchInput) {
            if ((e.target.tagName === 'INPUT' && e.key === 'Enter') || e.target.tagName === 'BUTTON') {
                this.props.onSearchStart(this.state.searchInput, this.state.searchCategory);
            }
        }
    }

    handleCategorySelect(e) {
        this.setState( {searchCategory: e.target.value} );
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder='Search'
                            type="search"
                            value={this.state.searchInput}
                            onChange={(e) => this.setState({ searchInput: e.target.value })}
                            onFocus={() => window.addEventListener('keydown', this.searchStart)}
                            onBlur={() => window.removeEventListener('keydown', this.searchStart)}
                        />
                        <button
                            className='btn btn-search'
                            onClick={this.searchStart}
                        >Поиск</button>
                    </div>
                </div>
                <div className="col s12 category-select">
                    <p className='category-radio-button'>
                        <label>
                            <input
                                className="with-gap"
                                name="category"
                                type="radio"
                                value={'all'}
                                checked={this.state.searchCategory === 'all'}
                                onChange={this.handleCategorySelect}
                            />
                            <span>Все</span>
                        </label>
                    </p>
                    <p className='category-radio-button'>
                        <label>
                            <input
                                className="with-gap"
                                name="category"
                                type="radio"
                                value={'movie'}
                                checked={this.state.searchCategory === 'movie'}
                                onChange={this.handleCategorySelect}
                            />
                            <span>Фильмы</span>
                        </label>
                    </p>
                    <p className='category-radio-button'>
                        <label>
                            <input
                                className="with-gap"
                                name="category"
                                type="radio"
                                value={'series'}
                                checked={this.state.searchCategory === 'series'}
                                onChange={this.handleCategorySelect}
                            />
                            <span>Сериалы</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export { Search };