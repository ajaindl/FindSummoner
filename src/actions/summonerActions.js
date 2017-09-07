"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var SummonerTypes = require('../constants/summonerActionTypes');

var SummonerActions = {
    FindSummoner: function(summoner) {
        var mySummoner = AuthorApi.getSummoner(summoner);
        
        Dispatcher.dispatch({
            actionType: SummonerTypes.FIND_SUMMONER,
            summoner: mySummoner
        });
    }
    
};

module.exports = SummonerActions;