'use strict';
// import React from 'react';
// import ReactDOM from 'react-dom';

const e = React.createElement;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agendas:[],
      bandeiras:[],
      bebdouros:[],
      canetas:[],
      casaLazer:[],
      chaveiros:[],
      desporto:[],
      lancheiras:[],
      mouses:[],
      pastas:[],
      sacolas:[],
      umbrellas:[],
      usb:[],
      click1:true,
      click2:false,
      click3:false,
      click4:false,
      click5:false,
      click6:false,
      click7:false,
      click8:false,
      click9:false,
      click10:false,
      click11:false,
      click12:false,
      color:''
    };
  }

    componentWillMount(){
        const lo = this;
        fetch('gallery.json')
          .then((resp) => resp.json())
          .then(function(data) {
            console.log(data);
            const desporto = data.desporto;
            const mouses = data.mouses;
            const umbrellas = data.umbrellas;
            const usb = data.usb;
            const sacolas = data.sacolas;
            const lancheiras = data.lancheiras;
            lo.setState({ desporto, mouses, umbrellas, usb, sacolas, lancheiras });
          })
          .catch(function(error) {
            console.log(error);
          });

          fetch('gallery2.json')
            .then((resp) => resp.json())
            .then(function(data) {
              const agendas = data.agendas;
              const bandeiras = data.bandeiras;
              const bebdouros = data.bebdouros;
              const canetas = data.canetas;
              const casaLazer = data.casaLazer;
              const chaveiros = data.chaveiros;
              const pastas = data.pastas;
              lo.setState({ agendas, bandeiras, bebdouros, canetas, casaLazer, chaveiros, pastas });
            })
            .catch(function(error) {
              console.log(error);
            });
    }

    handleClick1() {
      this.setState({ click1: true, click2:false, color:'#797979'});
    }
    handleClick2() {
      this.setState({ click2: true, click1: false,color:'#797979'});
    }
    handleClick3() {
      this.setState({ click3:true, click2: false, click1: false,color:'#797979'});
    }
    handleClick4() {
      this.setState({ click4:true, click3:false, click2: false, click1: false,color:'#797979'});
    }
    handleClick5() {
      this.setState({ click5 : true,
        click4:false, click3:false, click2: false, click1: false,color:'#797979'
      });
    }
    handleClick6() {
      this.setState({ click6:true, click5 : false,color:'#797979',
        click4:false, click3:false, click2: false, click1: false});
    }
    handleClick7() {
      this.setState({ click7 : true, click6:false, click5 : false,
        click4:false, click3:false, click2: false, click1: false,color:'#797979'});
    }
    handleClick8() {
      this.setState({ click8 : true,
        click7 : false, click6:false, click5 : false,
        click4:false, click3:false, click2: false, click1: false,color:'#797979'
      });
    }
    handleClick9() {
      this.setState({ click9 : true, click8 : false,
        click7 : false, click6:false, click5 : false,
        click4:false, click3:false, click2: false, click1: false,color:'#797979'});
    }
    handleClick10() {
      this.setState({ click10 : true, click9 : false, click8 : false,
        click7 : false, click6:false, click5 : false,color:'#797979',
        click4:false, click3:false, click2: false, click1: false });
    }
    handleClick11() {
      this.setState({ click11 : true,
        click10 : false, click9 : false, click8 : false,
          click7 : false, click6:false, click5 : false,
          click4:false, click3:false, click2: false, click1: false,color:'#797979'
      });
    }
    handleClick12() {
      this.setState({ click12 : true, click11 : false,
        click10 : false, click9 : false, click8 : false,
          click7 : false, click6:false, click5 : false,
          click4:false, click3:false, click2: false, click1: false,color:'#797979' });
    }


  render(){
    return React.createElement("div", {
    class: "bg0 m-t-23 p-b-140"
  }, React.createElement("div", {
    class: "container"
  }, React.createElement("div", {
    class: "flex-w flex-sb-m p-b-52"
  }, React.createElement("div", {
    class: "flex-w flex-l-m filter-tope-group m-tb-10"
  }, this.state.click1 ? React.createElement("button", {
    onClick: this.handleClick1.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": "*"
  }, "Agendas") : React.createElement("button", {
    onClick: this.handleClick1.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": "*"
  }, "Agendas"), this.state.click2 ? React.createElement("button", {
    onClick: this.handleClick2.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".women"
  }, "Bandeiras e Publicidade") : React.createElement("button", {
    onClick: this.handleClick2.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".women"
  }, "Bandeiras"), this.state.click3 ? React.createElement("button", {
    onClick: this.handleClick3.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5 ",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".men"
  }, "Pasta") : React.createElement("button", {
    onClick: this.handleClick3.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".men"
  }, "Pasta"), this.state.click4 ? React.createElement("button", {
    onClick: this.handleClick4.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".bag"
  }, "Canetas") : React.createElement("button", {
    onClick: this.handleClick4.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".bag"
  }, "Canetas"), this.state.click5 ? React.createElement("button", {
    onClick: this.handleClick5.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".shoes"
  }, "Casa E Lazer") : React.createElement("button", {
    onClick: this.handleClick5.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".shoes"
  }, "Casa E Lazer"), this.state.click6 ? React.createElement("button", {
    onClick: this.handleClick6.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".watches"
  }, "Chaveiros") : React.createElement("button", {
    onClick: this.handleClick6.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".watches"
  }, "Chaveiros"), this.state.click7 ? React.createElement("button", {
    onClick: this.handleClick7.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".watches"
  }, "Bebedouros") : React.createElement("button", {
    onClick: this.handleClick7.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".watches"
  }, "Bebedouros"), this.state.click8 ? React.createElement("button", {
    onClick: this.handleClick8.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".watches"
  }, "Lancheiras") : React.createElement("button", {
    onClick: this.handleClick8.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".watches"
  }, "Lancheiras"), this.state.click9 ? React.createElement("button", {
    onClick: this.handleClick9.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".watches"
  }, "Eletr\xF4nicos") : React.createElement("button", {
    onClick: this.handleClick9.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".watches"
  }, "Eletr\xF4nicos"), this.state.click10 ? React.createElement("button", {
    onClick: this.handleClick10.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".watches"
  }, "Sacolas") : React.createElement("button", {
    onClick: this.handleClick10.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".watches"
  }, "Sacolas"), this.state.click11 ? React.createElement("button", {
    onClick: this.handleClick11.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".watches"
  }, "Umbrellas") : React.createElement("button", {
    onClick: this.handleClick11.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".watches"
  }, "Umbrellas"), this.state.click12 ? React.createElement("button", {
    onClick: this.handleClick12.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    style: {
      borderColor: this.state.color
    },
    "data-filter": ".watches"
  }, "Usb") : React.createElement("button", {
    onClick: this.handleClick12.bind(this),
    class: "stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5",
    "data-filter": ".watches"
  }, "Usb"))), this.state.click1 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.agendas.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click2 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.bandeiras.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click3 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.pastas.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click4 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.canetas.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click5 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.casaLazer.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click6 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.chaveiros.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click7 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.bebdouros.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click8 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.lancheiras.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click9 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.mouses.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click10 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.sacolas.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click11 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.umbrellas.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : this.state.click12 ? React.createElement("div", {
    class: "row isotope-grid"
  }, this.state.usb.map(item => React.createElement("div", {
    key: item.ip,
    class: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
  }, React.createElement("div", {
    class: "block2"
  }, React.createElement("div", {
    class: "block2-pic hov-img0"
  }, React.createElement("img", {
    src: item.image
  })))))) : React.createElement("h2", null, "Nothing to Display")));
  }

}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Gallery), domContainer);
