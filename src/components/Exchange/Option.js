import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onChange({[this.props.title]: event.target.value});
    }
    render() {
        const { title, optionList } = this.props;
        return(
            <div>
                <select name={title} onChange={this.handleChange}>
                    <option selected disabled>{`${title}을 선택하세요.`}</option>
                    {optionList.map((value, idx) => 
                        <option key={idx} value={value}>{value}</option> 
                    )}
                </select>
            </div>
        )
    }
    
}

export default Option;