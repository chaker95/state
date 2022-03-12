import React from "react";  
import Divcomponement from './componement/div'

class Porfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            show: false,
            ImageSrc: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEHEEyMLM7NwLf6GRRi0kqc85pl-Baq58DQ&usqp=CAU"/>,
            fullname: "Chaker Amri",
            bio: "i'm astudent at Gomycode",
            Profession: " My profesion full stack Js",
        };
    }
    handleShow = () => {
        this.setState({ ...this.state, show: !this.state.show });
         setInterval (()=>{this.setState(prevState => ({  counter : prevState.counter + 1  })); } ,3000 )  ; 
   };
    render() {
        return (
            <div>
                <center>

                    <button style={{marginTop:'80px'}} onClick={this.handleShow}>{!this.state.show ? 'show' : 'hide'} </button>
                    {this.state.show ? (
                      <Divcomponement/>
                    ) : null}
                </center>
            </div>
        );
    }
}
export default Porfolio;
