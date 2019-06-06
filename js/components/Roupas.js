'use strict';
// import React from 'react';
// import ReactDOM from 'react-dom';

const e = React.createElement;

class Roupas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bones:[],
      camisas:[],
      camisetes:[],
      desporto:[],
      inverno:[],
      trabalho:[],
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
        fetch('gallery3.json')
          .then((resp) => resp.json())
          .then(function(data) {
            const bones = data.bones;
            const camisas = data.camisas;
            const camisetes = data.camisetes;
            const desporto = data.desporto;
            const inverno = data.inverno;
            const trabalho = data.trabalho;
            lo.setState({ bones, camisas, camisetes, desporto, inverno, trabalho });
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



  render(){
    return(

        <div class="container">
          <div class="flex-w flex-sb-m p-b-52">
            <div class="flex-w flex-l-m filter-tope-group m-tb-10">
            {this.state.click1 ?
              <button onClick={this.handleClick1.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" style={{borderColor:this.state.color}} data-filter="*">
                Bones
              </button> : <button onClick={this.handleClick1.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" data-filter="*">
                Bones
              </button>}

              {this.state.click2 ?
              <button onClick={this.handleClick2.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" style={{borderColor:this.state.color}} data-filter=".bag">
                Camisas
              </button> : <button onClick={this.handleClick2.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" data-filter=".bag">
                Camisas
              </button>}

              {this.state.click3 ?
              <button onClick={this.handleClick3.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" style={{borderColor:this.state.color}} data-filter=".shoes">
                Camisetes
              </button> : <button onClick={this.handleClick3.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" data-filter=".shoes">
                Camisetes
              </button>}

              {this.state.click4 ?
              <button onClick={this.handleClick4.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" style={{borderColor:this.state.color}} data-filter=".watches">
                Desporto
              </button> : <button onClick={this.handleClick4.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" data-filter=".watches">
                Desporto
              </button>}

              {this.state.click5 ?
              <button onClick={this.handleClick5.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" style={{borderColor:this.state.color}} data-filter=".watches">
                Inverno
              </button> : <button onClick={this.handleClick5.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" data-filter=".watches">
                Inverno
              </button>}

              {this.state.click6 ?
              <button onClick={this.handleClick6.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" style={{borderColor:this.state.color}} data-filter=".watches">
                Trabalho
              </button>:<button onClick={this.handleClick6.bind(this)} class="stext-106 cl6 hov1 bor3 trans-04 m-r-20 m-tb-5" data-filter=".watches">
                Trabalho
              </button>}
            </div>
          </div>

              {this.state.click1 ? (<div class="row isotope-grid">
                {this.state.bones.map(item => (
                <div key={item.ip} class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                  <div class="block2">
                    <div class="block2-pic hov-img0">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              ))}
              </div>)
              : this.state.click2 ? (<div class="row isotope-grid">
                {this.state.camisas.map(item => (
                <div key={item.ip} class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                  <div class="block2">
                    <div class="block2-pic hov-img0">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              ))}
              </div>)
              : this.state.click3 ? (<div class="row isotope-grid">
                {this.state.camisetes.map(item => (
                <div key={item.ip} class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                  <div class="block2">
                    <div class="block2-pic hov-img0">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              ))}
              </div>)
              : this.state.click4 ? (<div class="row isotope-grid">
                {this.state.desporto.map(item => (
                <div key={item.ip} class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                  <div class="block2">
                    <div class="block2-pic hov-img0">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              ))}
              </div>)
              : this.state.click5 ? (<div class="row isotope-grid">
                {this.state.inverno.map(item => (
                <div key={item.ip} class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                  <div class="block2">
                    <div class="block2-pic hov-img0">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              ))}
              </div>)
              : this.state.click6 ? (<div class="row isotope-grid">
                {this.state.trabalho.map(item => (
                <div key={item.ip} class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                  <div class="block2">
                    <div class="block2-pic hov-img0">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              ))}
              </div>)
              : (<h2>Nothing to Display</h2>)}

        </div>

    );
  }

}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Roupas), domContainer);
