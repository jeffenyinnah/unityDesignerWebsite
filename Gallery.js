'use strict';

const e = React.createElement;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      images:[]
    };
  }

  componentWillMount(){
    const lo = this;
    fetch('gallery.json')
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data.images);
    const images = data.images;
    lo.setState({ images })
  })
  .catch(function(error) {
    console.log(error);
  });
  }
  //
  //
  // renderData(){
  //   const { images } = this.state;
  //   return this.state.images.map(image => <img key={image.ip} src={image.image} />);
  // }
  render(){
 //    return React.createElement("div", {
 //   class: "bg0 m-t-23 p-b-140"
 // }, this.state.images.map(image => React.createElement("div", {
 //   class: "container"
 // }, React.createElement("div", {
 //   class: "row isotope-grid"
 // }, React.createElement("div", {
 //   class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches"
 // }, React.createElement("div", {
 //   class: "block2"
 // }, React.createElement("div", {
 //   class: "block2-pic hov-img0"
 // }, React.createElement("img", {
 //   src: image.image,
 //   key: image.ip
 // }))))))));
 return React.createElement("div", {
  class: "bg0 m-t-23 p-b-140"
}, React.createElement("div", {
  class: "container"
}, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, React.createElement("strong", null, "Consulta #")), React.createElement("th", null, React.createElement("strong", null, "M\xE9dico")), React.createElement("th", null, React.createElement("strong", null, "Data")))), React.createElement("tbody", null, this.state.images.map(image => React.createElement("tr", {
  key: image.ip
}, React.createElement("td", null, React.createElement("img", {
  src: image.image
})), React.createElement("td", null, React.createElement("img", {
  src: image.image
})), React.createElement("td", null, React.createElement("img", {
  src: image.image
}))))))));
  }

}

const domContainer = document.querySelector('#gallery');
ReactDOM.render(e(Gallery), domContainer);
