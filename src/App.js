import React from "react";
import Divcomponement from "./componement/div";

class Porfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            show: false,
            ImageSrc: <img src="https://t.ly/fXMM" />,
            fullname: "Chaker Amri",
            bio: "i'm a student at Gomycode",
            Profession: " My profesion full stack Js",
        };
    }
    handleShow = () => {
        this.setState({ ...this.state, show: !this.state.show });
    };

    componentDidMount = () => {
        setInterval(() => {
            this.setState({ ...this.state, counter: this.state.counter + 1 });
        }, 1000);
    };

    render() {
        return (
            <div>
                <center>
                    <button
                        style={{ marginTop: "80px" }}
                        onClick={this.handleShow}
                    >
                        {!this.state.show ? "show" : "hide"}{" "}
                    </button>
                    {this.state.show ? <Divcomponement state={this.state} /> : null}
                </center>
            </div>
        );
    }
}
export default Porfolio;
