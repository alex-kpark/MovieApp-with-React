import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis'
import './Movie.css'; //Movie 컴포넌트를 위한 css

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>

            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LineEllipsis 
                    text = {synopsis}
                    maxLine = '3'
                    ellipsis = '...'
                    trimRight
                    basedOn = 'letters'
                />
                </div>
            </div>
        </div>
    )
}

/*
class Movie extends Component{

    //proptype으로 props로 넘겨주는 데이터가 어떤 것이 나와야 하는지 datatype을 체크하는 기능 => 디버깅 용도로 사용
    static propType = {
        //isRequired : 필수 데이터라는 것을 설정
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
*/

//아래의 Stateless class를 functional하게 변경할 수 있음
//stateless(functional) comp에서는 굳이 this.props 해줄필요 없음 (props로 받는게 아니므로)
function MoviePoster({poster, alt}){

    return (
        <img src={poster} alt='Movieposter' className="Movie_Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.proptypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.proptypes = {
    genre: PropTypes.string.isRequired
}

/*
class MoviePoster extends Component{
    static Proptypes = {
        poster: PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt='test' />
        )
    }
}
*/
export default Movie;
 