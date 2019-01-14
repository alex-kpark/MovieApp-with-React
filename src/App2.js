import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

//List of Movies (props와 관련)
const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Old Boys",
  "Star Wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg"

]

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

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
  return movies
  }
  
  render() { //<Movie title={movies[0] poster={movies[0]}}> 했어야 하는 것을 간단하게 정리
  //key값을 보여주지는 않더라도 생성해야 하기 때문에, 값을 넣어두어야 함
    return (
      //? : ask js True면 _renderMovies 실행, False면 Loading
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

  //Third to operate
  //안정적으로 데이터를 잘 받았다 라는 것을 알 수 있음
  componentDidMount(){
    //setTimeout(() => { //Mount되면 5초 기다렸다가 greeting을 업데이트 해줌
      //this.setState({
        //greeting : 'Hello again!'
      //}), 3000})

    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster :  "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster:   "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
          },
          {
            title: "old boys",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg"
          },
          {
            title: "star wars",
            poster:  "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg"
        
          }
        ]
          //...this.state.movies, //이전의 movies들을 불러오는 기능, 없으면 이전의 state는 불러오지 않음
          //{
          //title: 'Transaformers',
          //url : "https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg"
          //} //새로운 movie 정보를 추가해주고
        //]
      })
    }, 5000)
  }


  //FOR UPDATE : WillReceive -> should -> componentWillupdate -> render -> componentDidUpdate
  //componentWillReceiveProps(){}

  //Update를 해야하면(값이 다르면) update => true, 아니면 update => false
  //"업데이트 필요 여부를 체크하고 있습니다" 등의 메시지를 삽입할 수 있음
  //shouldComponentUpdate(){}

}

export default App;
