import React, { PureComponent } from 'react';
import './validation.css';

export default class Validation extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            dayNum: '',
            monthNum: '',
            yearNum: '',
            errorText: '',
        }
    }

    onChange = (e) => {
        if(Number.isInteger(+e.target.value)){
            if(e.target.name === 'dayNum' && e.target.value <= 31 && !(e.target.value.length > 2)){
                this.setState({[e.target.name]: e.target.value});
            }
            else if(e.target.name === 'monthNum' && e.target.value <= 12 && !(e.target.value.length > 2)){
                this.setState({[e.target.name]: e.target.value});
            }
            else if(e.target.name === 'yearNum' && e.target.value <= new Date().getFullYear()){
                this.setState({[e.target.name]: e.target.value});
            }
        }
    }

    onValidate = () => {
        const {dayNum, monthNum, yearNum} = this.state,
        dateStr = `${dayNum}/${monthNum}/${yearNum}`,
        datePat = /^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/,
        matchArray = dateStr.match(datePat); 
            
        if(matchArray == null || (dayNum.length === 0 || monthNum.length === 0 || yearNum.length === 0)) {
            this.setState({dayNum, monthNum, yearNum, errorText: 'Please enter your date correctly!'})
            return false;
        } 
        else if((['04', '06', '09', '11'].includes(monthNum) && dayNum > 30) || (monthNum === '02' && dayNum > 29)){
            this.setState({dayNum, monthNum, yearNum, errorText: 'Please enter your date correctly!'})
            return false;
        }
        else {
            this.props.onValidate(yearNum);
        }
    }

    render() {
        let {dayNum, monthNum, yearNum, errorText} = this.state;

        return (
            <div className='validation'>
                <div className='validationText'>
                    <p className='text'>You must be of legal drinking age to get access to kamarwines.am</p>
                </div>
                <div className='inputs'>
                    <input className='day' name='dayNum' placeholder='DD' type='text' value={dayNum} onChange={this.onChange}/>
                    <input className='month' name='monthNum' placeholder='MM' type='text' value={monthNum} onChange={this.onChange}/>
                    <input className='year' name='yearNum' placeholder='YYYY' type='text' value={yearNum} onChange={this.onChange}/>
                    <p>{errorText}</p>
                </div>
                <button className='enterBtn' onClick={this.onValidate}>ENTER</button>
            </div>
        )
    }
}

