import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import AddImage from './Component/AddImage/AddImage';
import Carousel from './Component/Carousel/Carousel';
import ImageUpload from './Component/ImageUpload/ImageUpload';
import Layout from './Component/Layout/Layout';


class App extends Component {
  state = {
    images: [
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ],
   
    imageToBeAdded: '',
    hasError: null
  };

  getUrl = (event) => {
    const val = event.target.value;

    if (val) {
      const imageUrl = event.target.value;

      this.setState((prevState, props) => {
        return {
          imageToBeAdded: imageUrl,
          hasError: null
        }
      })
    } else {
      this.setState({
        hasError: true
      })
    }
  };

  addImage = () => {
    const imageUrl = this.state.imageToBeAdded;
    const imagesArray = this.state.images.slice();

    if (imageUrl !== "") {
      imagesArray.push(imageUrl);

      this.setState({
        hasError: null
      });
    } else {
      this.setState({
        hasError: true
      })
    }

    this.setState((prevState, props) => {
      return {
        images: imagesArray
      }
    })
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header />
         <AddImage getUrl={ this.getUrl }
                    add={ this.addImage }
                    error={ this.state.hasError } />
          <Carousel images={ this.state.images } />
          <br>
          </br>
          <br>
          </br>
          <ImageUpload/>
          <br>
          </br>
          <br>
          </br>
          <Layout/>
       
        </div>
      </div>
     
    );
  }
}

export default App;
