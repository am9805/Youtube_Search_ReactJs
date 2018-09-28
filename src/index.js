import React, { Component } from 'react';
import _ from 'lodash'
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyC_XgR2Rb_ji392bYiI5qwp97yuvA07Hgg';

// Create a new component, 
//this component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null 
        }

       this.videoSearch('oh gg!')
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term },  (videos) => {

            // this.setState({videos= videos}); Pero ES6 nos permite ser mas compactos, como
            //el state videos tiene el mismo nombre que el response (the key and the value are the same variable name), podemos hacer esto:
            this.setState({
                videos:videos, 
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        /** Lo que hace debounce es tomar la arrow function y solo la vamos a poder llamar cada
         * 300 milisegundos**/
        const videoSearch = _.debounce((term => {this.videoSearch(term)}, 300));

        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect ={selectedVideo=>this.setState({selectedVideo})}
                videos = {this.state.videos}/>
            </div>
        )
    }
};



//Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));