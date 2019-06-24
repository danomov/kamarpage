import React, { PureComponent } from 'react';
import Validation from '../AgeValidation/AgeAsking/validation';
import Restriction from '../AgeValidation/Restriction/restriction';
import './mainPage.css';

export default class MainPage extends PureComponent {
    constructor(){
        super();
        this.state = {
            restriction: true,
        }
    }

    validation = (year) => {
        if(year < new Date().getFullYear() - 150){
            alert('Ohhh! You are too old.');
        }
        else if(year < new Date().getFullYear() - 17){
            alert('You smell wine aromat? Welcome you are in.');
        }
        else {
            this.setState({restriction: false});
        }
    }

    onRedirect = () => {
        this.setState({restriction: true});
    }

    render() {
        return (
            <div className='main'>
                <img className='kamarLogo' alt=''/>
                {this.state.restriction ? 
                <Validation onValidate={(year) => this.validation(year)}/>
                : <Restriction onRedirect={this.onRedirect}/>}
            </div>
        )
    }
}
