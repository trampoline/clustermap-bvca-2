// Compiled by ClojureScript 0.0-2322
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
clustermap.app.IAppService = (function (){var obj27941 = {};return obj27941;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.init[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.init["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.init",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.destroy = (function destroy(this$,app){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IAppService$destroy$arity$2;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IAppService$destroy$arity$2(this$,app);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.destroy[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.destroy["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.destroy",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.handle_event = (function handle_event(this$,app,type,val){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IAppService$handle_event$arity$4;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IAppService$handle_event$arity$4(this$,app,type,val);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.handle_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.handle_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.IAppControl = (function (){var obj27943 = {};return obj27943;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.start[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.start["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IAppControl$stop$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IAppControl$stop$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.stop[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.stop["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj27945 = {};return obj27945;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.get_state[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.get_state["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-state",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_comm = (function get_comm(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IApp$get_comm$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IApp$get_comm$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.get_comm[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.get_comm["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-comm",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_history = (function get_history(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IApp$get_history$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IApp$get_history$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.get_history[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.get_history["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t27992 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t27992 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta27993){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta27993 = meta27993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t27992.cljs$lang$type = true;
clustermap.app.t27992.cljs$lang$ctorStr = "clustermap.app/t27992";
clustermap.app.t27992.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.app/t27992");
});})(comm,state))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$ = true;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t27992.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t27992.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t27992.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__27995_28038 = cljs.core.seq.call(null,self__.component_defs);var chunk__27996_28039 = null;var count__27997_28040 = (0);var i__27998_28041 = (0);while(true){
if((i__27998_28041 < count__27997_28040))
{var map__27999_28042 = cljs.core._nth.call(null,chunk__27996_28039,i__27998_28041);var map__27999_28043__$1 = ((cljs.core.seq_QMARK_.call(null,map__27999_28042))?cljs.core.apply.call(null,cljs.core.hash_map,map__27999_28042):map__27999_28042);var paths_28044 = cljs.core.get.call(null,map__27999_28043__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28045 = cljs.core.get.call(null,map__27999_28043__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28046 = cljs.core.get.call(null,map__27999_28043__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28047 = cljs.core.get.call(null,map__27999_28043__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28048 = cljs.core.get.call(null,map__27999_28043__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28048,f_28047,target_28046,paths_28044], null)));
clustermap.components.mount.mount.call(null,name_28048,f_28047,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28046,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28045,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28044);
{
var G__28049 = seq__27995_28038;
var G__28050 = chunk__27996_28039;
var G__28051 = count__27997_28040;
var G__28052 = (i__27998_28041 + (1));
seq__27995_28038 = G__28049;
chunk__27996_28039 = G__28050;
count__27997_28040 = G__28051;
i__27998_28041 = G__28052;
continue;
}
} else
{var temp__4126__auto___28053 = cljs.core.seq.call(null,seq__27995_28038);if(temp__4126__auto___28053)
{var seq__27995_28054__$1 = temp__4126__auto___28053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27995_28054__$1))
{var c__4314__auto___28055 = cljs.core.chunk_first.call(null,seq__27995_28054__$1);{
var G__28056 = cljs.core.chunk_rest.call(null,seq__27995_28054__$1);
var G__28057 = c__4314__auto___28055;
var G__28058 = cljs.core.count.call(null,c__4314__auto___28055);
var G__28059 = (0);
seq__27995_28038 = G__28056;
chunk__27996_28039 = G__28057;
count__27997_28040 = G__28058;
i__27998_28041 = G__28059;
continue;
}
} else
{var map__28000_28060 = cljs.core.first.call(null,seq__27995_28054__$1);var map__28000_28061__$1 = ((cljs.core.seq_QMARK_.call(null,map__28000_28060))?cljs.core.apply.call(null,cljs.core.hash_map,map__28000_28060):map__28000_28060);var paths_28062 = cljs.core.get.call(null,map__28000_28061__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_28063 = cljs.core.get.call(null,map__28000_28061__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_28064 = cljs.core.get.call(null,map__28000_28061__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_28065 = cljs.core.get.call(null,map__28000_28061__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_28066 = cljs.core.get.call(null,map__28000_28061__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_28066,f_28065,target_28064,paths_28062], null)));
clustermap.components.mount.mount.call(null,name_28066,f_28065,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_28064,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_28063,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_28062);
{
var G__28067 = cljs.core.next.call(null,seq__27995_28054__$1);
var G__28068 = null;
var G__28069 = (0);
var G__28070 = (0);
seq__27995_28038 = G__28067;
chunk__27996_28039 = G__28068;
count__27997_28040 = G__28069;
i__27998_28041 = G__28070;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,shared,this$__$1,comm,state){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,shared,this$__$1,comm,state){
return (function (state_28016){var state_val_28017 = (state_28016[(1)]);if((state_val_28017 === (7)))
{var inst_28005 = (state_28016[(2)]);var inst_28006 = cljs.core.nth.call(null,inst_28005,(0),null);var inst_28007 = cljs.core.nth.call(null,inst_28005,(1),null);var inst_28008 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_28006,inst_28007);var state_28016__$1 = (function (){var statearr_28018 = state_28016;(statearr_28018[(7)] = inst_28008);
return statearr_28018;
})();var statearr_28019_28071 = state_28016__$1;(statearr_28019_28071[(2)] = null);
(statearr_28019_28071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28017 === (6)))
{var inst_28012 = (state_28016[(2)]);var state_28016__$1 = state_28016;var statearr_28020_28072 = state_28016__$1;(statearr_28020_28072[(2)] = inst_28012);
(statearr_28020_28072[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28017 === (5)))
{var state_28016__$1 = state_28016;var statearr_28021_28073 = state_28016__$1;(statearr_28021_28073[(2)] = null);
(statearr_28021_28073[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28017 === (4)))
{var state_28016__$1 = state_28016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28016__$1,(7),self__.comm);
} else
{if((state_val_28017 === (3)))
{var inst_28014 = (state_28016[(2)]);var state_28016__$1 = state_28016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28016__$1,inst_28014);
} else
{if((state_val_28017 === (2)))
{var state_28016__$1 = state_28016;var statearr_28022_28074 = state_28016__$1;(statearr_28022_28074[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28017 === (1)))
{var state_28016__$1 = state_28016;var statearr_28024_28075 = state_28016__$1;(statearr_28024_28075[(2)] = null);
(statearr_28024_28075[(1)] = (2));
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
});})(c__5708__auto__,shared,this$__$1,comm,state))
;return ((function (switch__5693__auto__,c__5708__auto__,shared,this$__$1,comm,state){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28028 = [null,null,null,null,null,null,null,null];(statearr_28028[(0)] = state_machine__5694__auto__);
(statearr_28028[(1)] = (1));
return statearr_28028;
});
var state_machine__5694__auto____1 = (function (state_28016){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28029){if((e28029 instanceof Object))
{var ex__5697__auto__ = e28029;var statearr_28030_28076 = state_28016;(statearr_28030_28076[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28077 = state_28016;
state_28016 = G__28077;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28016){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,shared,this$__$1,comm,state))
})();var state__5710__auto__ = (function (){var statearr_28031 = f__5709__auto__.call(null);(statearr_28031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,shared,this$__$1,comm,state))
);
return c__5708__auto__;
});})(comm,state))
;
clustermap.app.t27992.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__28032 = cljs.core.seq.call(null,self__.component_defs);var chunk__28033 = null;var count__28034 = (0);var i__28035 = (0);while(true){
if((i__28035 < count__28034))
{var map__28036 = cljs.core._nth.call(null,chunk__28033,i__28035);var map__28036__$1 = ((cljs.core.seq_QMARK_.call(null,map__28036))?cljs.core.apply.call(null,cljs.core.hash_map,map__28036):map__28036);var target = cljs.core.get.call(null,map__28036__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__28078 = seq__28032;
var G__28079 = chunk__28033;
var G__28080 = count__28034;
var G__28081 = (i__28035 + (1));
seq__28032 = G__28078;
chunk__28033 = G__28079;
count__28034 = G__28080;
i__28035 = G__28081;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28032);if(temp__4126__auto__)
{var seq__28032__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28032__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__28032__$1);{
var G__28082 = cljs.core.chunk_rest.call(null,seq__28032__$1);
var G__28083 = c__4314__auto__;
var G__28084 = cljs.core.count.call(null,c__4314__auto__);
var G__28085 = (0);
seq__28032 = G__28082;
chunk__28033 = G__28083;
count__28034 = G__28084;
i__28035 = G__28085;
continue;
}
} else
{var map__28037 = cljs.core.first.call(null,seq__28032__$1);var map__28037__$1 = ((cljs.core.seq_QMARK_.call(null,map__28037))?cljs.core.apply.call(null,cljs.core.hash_map,map__28037):map__28037);var target = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__28086 = cljs.core.next.call(null,seq__28032__$1);
var G__28087 = null;
var G__28088 = (0);
var G__28089 = (0);
seq__28032 = G__28086;
chunk__28033 = G__28087;
count__28034 = G__28088;
i__28035 = G__28089;
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
clustermap.app.t27992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_27994){var self__ = this;
var _27994__$1 = this;return self__.meta27993;
});})(comm,state))
;
clustermap.app.t27992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_27994,meta27993__$1){var self__ = this;
var _27994__$1 = this;return (new clustermap.app.t27992(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta27993__$1));
});})(comm,state))
;
clustermap.app.__GT_t27992 = ((function (comm,state){
return (function __GT_t27992(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27993){return (new clustermap.app.t27992(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta27993));
});})(comm,state))
;
}
return (new clustermap.app.t27992(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
