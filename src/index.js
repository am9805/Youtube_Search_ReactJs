import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'


<<<<<<< HEAD
const API_KEY = 'AIzaSyC_XgR2Rb_ji392bYiI5qwp97yuvA07Hgg';

=======
const API_KEY = '';
YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
    console.log(data)
});
>>>>>>> 40f1e80216ff442ccd2a10d6fd0f49158729759a
// Create a new component, 
//this component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] }

        YTSearch({ key: API_KEY, term: 'surfboards' },  (videos) => {

            // this.setState({videos= videos}); Pero ES6 nos permite ser mas compactos, como
            //el state videos tiene el mismo nombre que el response (the key and the value are the same variable name), podemos hacer esto:
            this.setState({videos});
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList/>
            </div>
        )
    }
};



//Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
