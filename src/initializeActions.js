"use strict";

var Dispatcher = require('./dispatcher/appDispatcher');
var ActionTypes = require('./constants/actionTypes');
var AuthorApi = require('./api/authorApi');
var summoners= require('./api/summonerData');

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors(),
                summoners: {}
                }
        });
    }
};

module.exports = InitializeActions;