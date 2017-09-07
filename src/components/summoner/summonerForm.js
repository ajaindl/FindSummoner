"use strict";

var React = require('react');
var Input = require('../common/textinput');

var SummonerForm = React.createClass({
    render: function () {
        debugger;
        return (
        <form>
            <h1>Manage Summoner</h1>
               <Input
                    name= "summoner"
                    label="Summoner Name"
                    value={this.props.summoner}
                    onChange={this.props.onChange}
                    error={this.props.errors} />
            
            <input type= "submit" value="Find Summoner" className="btn btn-default" onClick={this.props.onSave}/>
        </form>
        );
    }
});

module.exports=SummonerForm;