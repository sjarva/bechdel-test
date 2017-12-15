import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ErrorBoundary from '../../shared/ErrorBoundary/ErrorBoundary';
import FilmList from './FilmList/FilmList';
import getAllFilmData from '../../helper/getAllFilms';
import skeleton from '../../assets/styles/skeleton.css';
import './Films.scss';

class Films extends Component {
	constructor() {
		super();
		this.state = {
			films: [],
		};
	}

	componentDidMount() {
		getAllFilmData()
			.then((data) => {
				this.setState({
					films: data,
				});
			});
	}

	render() {
		return (
			<div className="films">
				<div className={skeleton.u_full_width}>
					<div className="row">
						<h1>Bechdel.io</h1>
						<p>
						The Bechdel.io was a collaborative project between a English
						Scholar and a Software Engineer. With the tool we’ve created, the
						process of determing whether a film passes the Beschdel Test is
						automated, which allows massive amounts of data to be generated
						with ease. Thus, data can be produced for large bodies of film,
						i.e. a certain director’s filmography, a certain actress’ body of
						work, or for the films released in a specific year.
						</p>
					</div>
				</div>
				<div className="films_Header">
					<h3>films</h3>
					<NavLink to="/film/new">
						<button>Add a Film</button>
					</NavLink>
				</div>
				<div className="row">
					<ErrorBoundary>
						<FilmList films={this.state.films} />
					</ErrorBoundary>
				</div>
				<p>
					If you have any suggestions for how to grow the application, we would
					love to hear from
					<a target="blank" href="https://www.callmejoe.net/contact/">
						{' '}you
					</a>.
				</p>
			</div>
		);
	}
}

Films.propTypes = {};

Films.defaultProps = {};

export default Films;
