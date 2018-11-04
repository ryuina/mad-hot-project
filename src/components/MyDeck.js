import React, { Component } from 'react';
import Option from './Option';
import { OPTIONS, versionList, typeList, memberList } from '../const';

class MyDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: null,
            type: null,
            member: null,
        }
        this.onChangeOption = this.onChangeOption.bind(this);
        this.onSendResult = this.onSendResult.bind(this);
    }

    onChangeOption = (selected) => {
        this.setState(selected);
    }

    onSendResult = () => {
        this.props.onSendResult(this.state);
    }

    render() {
        const { version, type, member } = this.state;
        const isSelectedAll = version && type && member;
        return (
            <div className="myDeck" >
                <div className="options">
                    <Option 
                        title={OPTIONS.VERSION} 
                        optionList={versionList} 
                        selected={version}
                        onChange={this.onChangeOption}/>
                    {version && 
                    <Option title={OPTIONS.TYPE} optionList={typeList} selected={type}
                        onChange={this.onChangeOption}/>
                    }
                    {type && 
                    <Option title={OPTIONS.MEMBER} optionList={memberList} slected={member}
                        onChange={this.onChangeOption}/>}
                </div>
                <div className="selectedResult">
                    {`내가 갖고 있는 것 : ${version || ""} ${type || ""} ${member || ""}`}
                </div>
                {isSelectedAll && 
                <div className="sendResult">
                    <button onClick={this.onSendResult}>선택 완료</button>
                </div>}
            </div>
        )
    }
}

export default MyDeck