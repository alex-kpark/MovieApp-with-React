import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

//모든 컴포넌트는 render()를 가지고있고
class App extends Component {

  //미리 파일 자체에 지정해두는 형태로 Data를 선언
  state = {}

  //Render : WillMount -> render() -> componentDidMount()
  //First to Operate : API에 작업을 요청하는 기능부분, 사이클 시작을 알고
  componentWillMount(){

  }

  //Second to Opearte : render()는 컴포넌트가 무엇을 보여줄지를 정하는 함수
  //데이터를 받아오는 것이 완성했으면, 무언가 operating을 하는 과정 (리액트로 넘어왔구나)

  //API에서 영화정보를 받아오는 부분
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      genres={movie.genres} key={movie.id}
      key={movie.id}
      genres = {movie.genres}
      synopsis = {movie.synopsis}/>
    })
    return movies
  }
  
  render() { //<Movie title={movies[0] poster={movies[0]}}> 했어야 하는 것을 간단하게 정리
  //key값을 보여주지는 않더라도 생성해야 하기 때문에, 값을 넣어두어야 함
    const {movies} = this.state; 
    return (
      //? : ask js True면 _renderMovies 실행, False면 Loading
      //App -> 실행완료 되었을 때 CSS 매칭시켜주고
      //App-loading -> 아직 로딩 중이면 로딩중인 화면에 맞게 CSS 매칭 가능
      <div className={movies   ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
 
  //Third to operate
  //안정적으로 데이터를 잘 받았다 라는 것을 알 수 있음
  componentDidMount(){
    this._getMovies()
  }

  _getMovies = async () => {
    //movies에 _callApi의 결과를 무조건 저장함
    const movies = await this._callApi()
    this.setState({ //await 작업이 완료되어야 실행됨
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating') //fetch가 끝나면
    .then(response => response.json()) //성공했을 때 결과값을 json으로 바꾸어줘
    .then(json => json.data.movies)
    .catch(err => console.log(err)) //에러를 잡아서 보내줘  }
  }

  //FOR UPDATE : WillReceive -> should -> componentWillupdate -> render -> componentDidUpdate
  //componentWillReceiveProps(){}

  //Update를 해야하면(값이 다르면) update => true, 아니면 update => false
  //"업데이트 필요 여부를 체크하고 있습니다" 등의 메시지를 삽입할 수 있음
  //shouldComponentUpdate(){}

}
export default App;
