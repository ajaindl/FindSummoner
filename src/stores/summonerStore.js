"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var SummonerTypes = require('../constants/summonerActionTypes');
var EventEmitter = require('events').EventEmitter;
var assign= require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _summoners = new Array();

var SummonerStore= assign({}, EventEmitter.prototype, {
   addChangeListener: function (callback) {
       this.on(CHANGE_EVENT, callback);
   },
    
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    
    getSummoners: function(){
        return _summoners;
    }
    
});


Dispatcher.register(function(action) {
   switch(action.actionType){
         case SummonerTypes.INITIALIZE:
                _summoners = action.initialData.summoners;
                SummonerStore.emitChange();
                break;
         case SummonerTypes.FIND_SUMMONER:
           console.log(_summoners);
           console.log(action.summoner[0]);
                _summoners=action.summoner[0];
                SummonerStore.emitChange();
                break;


         default:
               //no op
   }
});

module.exports = SummonerStore;