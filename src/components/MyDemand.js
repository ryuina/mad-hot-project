import React, { Component } from 'react';
import { memberList } from '../const';

class MyDemand extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idList: [0],
            myDemand: null,
        }
        this.onAddSelect = this.onAddSelect.bind(this);
    }
    handleChange(event, id) {
        console.log(event.target.value, id);
        this.setState({
            myDemand: {...this.state.myDemand, 
                [id]: event.target.value},
          })
    }

    onSendResult = () => {
        this.props.onSendResult(this.state.myDemand); 
    }

    renderSelectDemand = (id) => {
        return (
            <select key={id} name={id} onChange={e => this.handleChange(e, id)}>
                <option selected disabled>{`멤버를 선택하세요.`}</option>
                {memberList.map((value, idx) => 
                    <option key={idx} value={value}>{value}</option> 
                )}
            </select>
        )
    }

    onAddSelect = () => {
        const idList = this.state.idList;
        const maxId = idList[idList.length - 1] + 1;
        this.setState({
            idList: [...idList, maxId],
        })
    }

    render() {
        const idList = this.state.idList;
        return(
            <div>
                {idList.map(id => 
                    this.renderSelectDemand(id)
                )}
                <div className="addBtn">
                    <button onClick={this.onAddSelect}>선택 추가</button>
                </div>
                <div className="sendResult">
                    <button onClick={this.onSendResult}>선택 완료</button>
                </div>
            </div>
        )
    }
}

export default MyDemand;