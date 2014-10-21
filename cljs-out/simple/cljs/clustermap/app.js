// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.api');
clustermap.app.history_STAR_ = (new goog.History());
clustermap.app.IAppService = (function (){var obj30910 = {};return obj30910;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.init[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.init["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.init",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.destroy = (function destroy(this$,app){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppService$destroy$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppService$destroy$arity$2(this$,app);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.destroy[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.destroy["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.destroy",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.handle_event = (function handle_event(this$,app,type,val){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppService$handle_event$arity$4;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppService$handle_event$arity$4(this$,app,type,val);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.handle_event[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.handle_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.IAppControl = (function (){var obj30912 = {};return obj30912;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.start[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.start["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppControl$stop$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppControl$stop$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.stop[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.stop["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj30914 = {};return obj30914;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_state[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.get_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-state",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_comm = (function get_comm(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IApp$get_comm$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IApp$get_comm$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_comm[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.get_comm["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-comm",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_history = (function get_history(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IApp$get_history$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IApp$get_history$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_history[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.get_history["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t30961 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t30961 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta30962){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta30962 = meta30962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t30961.cljs$lang$type = true;
clustermap.app.t30961.cljs$lang$ctorStr = "clustermap.app/t30961";
clustermap.app.t30961.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.app/t30961");
});})(comm,state))
;
clustermap.app.t30961.prototype.clustermap$app$IApp$ = true;
clustermap.app.t30961.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t30961.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t30961.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t30961.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t30961.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__30964_31007 = cljs.core.seq.call(null,self__.component_defs);var chunk__30965_31008 = null;var count__30966_31009 = (0);var i__30967_31010 = (0);while(true){
if((i__30967_31010 < count__30966_31009))
{var map__30968_31011 = cljs.core._nth.call(null,chunk__30965_31008,i__30967_31010);var map__30968_31012__$1 = ((cljs.core.seq_QMARK_.call(null,map__30968_31011))?cljs.core.apply.call(null,cljs.core.hash_map,map__30968_31011):map__30968_31011);var paths_31013 = cljs.core.get.call(null,map__30968_31012__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_31014 = cljs.core.get.call(null,map__30968_31012__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_31015 = cljs.core.get.call(null,map__30968_31012__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_31016 = cljs.core.get.call(null,map__30968_31012__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_31017 = cljs.core.get.call(null,map__30968_31012__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_31017,f_31016,target_31015,paths_31013], null)));
clustermap.components.mount.mount.call(null,name_31017,f_31016,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_31015,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_31014,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_31013);
{
var G__31018 = seq__30964_31007;
var G__31019 = chunk__30965_31008;
var G__31020 = count__30966_31009;
var G__31021 = (i__30967_31010 + (1));
seq__30964_31007 = G__31018;
chunk__30965_31008 = G__31019;
count__30966_31009 = G__31020;
i__30967_31010 = G__31021;
continue;
}
} else
{var temp__4126__auto___31022 = cljs.core.seq.call(null,seq__30964_31007);if(temp__4126__auto___31022)
{var seq__30964_31023__$1 = temp__4126__auto___31022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30964_31023__$1))
{var c__4406__auto___31024 = cljs.core.chunk_first.call(null,seq__30964_31023__$1);{
var G__31025 = cljs.core.chunk_rest.call(null,seq__30964_31023__$1);
var G__31026 = c__4406__auto___31024;
var G__31027 = cljs.core.count.call(null,c__4406__auto___31024);
var G__31028 = (0);
seq__30964_31007 = G__31025;
chunk__30965_31008 = G__31026;
count__30966_31009 = G__31027;
i__30967_31010 = G__31028;
continue;
}
} else
{var map__30969_31029 = cljs.core.first.call(null,seq__30964_31023__$1);var map__30969_31030__$1 = ((cljs.core.seq_QMARK_.call(null,map__30969_31029))?cljs.core.apply.call(null,cljs.core.hash_map,map__30969_31029):map__30969_31029);var paths_31031 = cljs.core.get.call(null,map__30969_31030__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_31032 = cljs.core.get.call(null,map__30969_31030__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_31033 = cljs.core.get.call(null,map__30969_31030__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_31034 = cljs.core.get.call(null,map__30969_31030__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_31035 = cljs.core.get.call(null,map__30969_31030__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_31035,f_31034,target_31033,paths_31031], null)));
clustermap.components.mount.mount.call(null,name_31035,f_31034,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_31033,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_31032,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_31031);
{
var G__31036 = cljs.core.next.call(null,seq__30964_31023__$1);
var G__31037 = null;
var G__31038 = (0);
var G__31039 = (0);
seq__30964_31007 = G__31036;
chunk__30965_31008 = G__31037;
count__30966_31009 = G__31038;
i__30967_31010 = G__31039;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,shared,this$__$1,comm,state){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,shared,this$__$1,comm,state){
return (function (state_30985){var state_val_30986 = (state_30985[(1)]);if((state_val_30986 === (7)))
{var inst_30974 = (state_30985[(2)]);var inst_30975 = cljs.core.nth.call(null,inst_30974,(0),null);var inst_30976 = cljs.core.nth.call(null,inst_30974,(1),null);var inst_30977 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_30975,inst_30976);var state_30985__$1 = (function (){var statearr_30987 = state_30985;(statearr_30987[(7)] = inst_30977);
return statearr_30987;
})();var statearr_30988_31040 = state_30985__$1;(statearr_30988_31040[(2)] = null);
(statearr_30988_31040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30986 === (6)))
{var inst_30981 = (state_30985[(2)]);var state_30985__$1 = state_30985;var statearr_30989_31041 = state_30985__$1;(statearr_30989_31041[(2)] = inst_30981);
(statearr_30989_31041[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30986 === (5)))
{var state_30985__$1 = state_30985;var statearr_30990_31042 = state_30985__$1;(statearr_30990_31042[(2)] = null);
(statearr_30990_31042[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30986 === (4)))
{var state_30985__$1 = state_30985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30985__$1,(7),self__.comm);
} else
{if((state_val_30986 === (3)))
{var inst_30983 = (state_30985[(2)]);var state_30985__$1 = state_30985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30985__$1,inst_30983);
} else
{if((state_val_30986 === (2)))
{var state_30985__$1 = state_30985;var statearr_30991_31043 = state_30985__$1;(statearr_30991_31043[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30986 === (1)))
{var state_30985__$1 = state_30985;var statearr_30993_31044 = state_30985__$1;(statearr_30993_31044[(2)] = null);
(statearr_30993_31044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5819__auto__,shared,this$__$1,comm,state))
;return ((function (switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_30997 = [null,null,null,null,null,null,null,null];(statearr_30997[(0)] = state_machine__5805__auto__);
(statearr_30997[(1)] = (1));
return statearr_30997;
});
var state_machine__5805__auto____1 = (function (state_30985){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_30985);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e30998){if((e30998 instanceof Object))
{var ex__5808__auto__ = e30998;var statearr_30999_31045 = state_30985;(statearr_30999_31045[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30985);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30998;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31046 = state_30985;
state_30985 = G__31046;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state))
})();var state__5821__auto__ = (function (){var statearr_31000 = f__5820__auto__.call(null);(statearr_31000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_31000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,shared,this$__$1,comm,state))
);
return c__5819__auto__;
});})(comm,state))
;
clustermap.app.t30961.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__31001 = cljs.core.seq.call(null,self__.component_defs);var chunk__31002 = null;var count__31003 = (0);var i__31004 = (0);while(true){
if((i__31004 < count__31003))
{var map__31005 = cljs.core._nth.call(null,chunk__31002,i__31004);var map__31005__$1 = ((cljs.core.seq_QMARK_.call(null,map__31005))?cljs.core.apply.call(null,cljs.core.hash_map,map__31005):map__31005);var target = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__31047 = seq__31001;
var G__31048 = chunk__31002;
var G__31049 = count__31003;
var G__31050 = (i__31004 + (1));
seq__31001 = G__31047;
chunk__31002 = G__31048;
count__31003 = G__31049;
i__31004 = G__31050;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31001);if(temp__4126__auto__)
{var seq__31001__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31001__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__31001__$1);{
var G__31051 = cljs.core.chunk_rest.call(null,seq__31001__$1);
var G__31052 = c__4406__auto__;
var G__31053 = cljs.core.count.call(null,c__4406__auto__);
var G__31054 = (0);
seq__31001 = G__31051;
chunk__31002 = G__31052;
count__31003 = G__31053;
i__31004 = G__31054;
continue;
}
} else
{var map__31006 = cljs.core.first.call(null,seq__31001__$1);var map__31006__$1 = ((cljs.core.seq_QMARK_.call(null,map__31006))?cljs.core.apply.call(null,cljs.core.hash_map,map__31006):map__31006);var target = cljs.core.get.call(null,map__31006__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__31055 = cljs.core.next.call(null,seq__31001__$1);
var G__31056 = null;
var G__31057 = (0);
var G__31058 = (0);
seq__31001 = G__31055;
chunk__31002 = G__31056;
count__31003 = G__31057;
i__31004 = G__31058;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(comm,state))
;
clustermap.app.t30961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_30963){var self__ = this;
var _30963__$1 = this;return self__.meta30962;
});})(comm,state))
;
clustermap.app.t30961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_30963,meta30962__$1){var self__ = this;
var _30963__$1 = this;return (new clustermap.app.t30961(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta30962__$1));
});})(comm,state))
;
clustermap.app.__GT_t30961 = ((function (comm,state){
return (function __GT_t30961(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta30962){return (new clustermap.app.t30961(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta30962));
});})(comm,state))
;
}
return (new clustermap.app.t30961(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
