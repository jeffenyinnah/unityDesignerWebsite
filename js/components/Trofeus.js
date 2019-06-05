'use strict';
// import React from 'react';
// import ReactDOM from 'react-dom';

const e = React.createElement;

class Trofeus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trofeus:[],
      color:''
    };
  }

    componentWillMount(){
        const lo = this;
          fetch('gallery.json')
            .then((resp) => resp.json())
            .then(function(data) {
              const trofeus = data.trofeus;
              lo.setState({ trofeus });
            })
            .catch(function(error) {
              console.log(error);
            });
    }

  render(){
    return(

        <div class="container">
            <div class="row isotope-grid">
                {this.state.trofeus.map(item => (
                <div key={item.ip} class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                  <div class="block2">
                    <div class="block2-pic hov-img0">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

    );
  }

}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Trofeus), domContainer);
