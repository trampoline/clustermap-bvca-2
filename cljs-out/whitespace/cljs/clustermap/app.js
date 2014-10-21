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
clustermap.app.IAppService = (function (){var obj11025 = {};return obj11025;
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
clustermap.app.IAppControl = (function (){var obj11027 = {};return obj11027;
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
clustermap.app.IApp = (function (){var obj11029 = {};return obj11029;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t11076 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t11076 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta11077){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta11077 = meta11077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t11076.cljs$lang$type = true;
clustermap.app.t11076.cljs$lang$ctorStr = "clustermap.app/t11076";
clustermap.app.t11076.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.app/t11076");
});})(comm,state))
;
clustermap.app.t11076.prototype.clustermap$app$IApp$ = true;
clustermap.app.t11076.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t11076.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t11076.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t11076.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t11076.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__11079_11122 = cljs.core.seq.call(null,self__.component_defs);var chunk__11080_11123 = null;var count__11081_11124 = (0);var i__11082_11125 = (0);while(true){
if((i__11082_11125 < count__11081_11124))
{var map__11083_11126 = cljs.core._nth.call(null,chunk__11080_11123,i__11082_11125);var map__11083_11127__$1 = ((cljs.core.seq_QMARK_.call(null,map__11083_11126))?cljs.core.apply.call(null,cljs.core.hash_map,map__11083_11126):map__11083_11126);var paths_11128 = cljs.core.get.call(null,map__11083_11127__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_11129 = cljs.core.get.call(null,map__11083_11127__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_11130 = cljs.core.get.call(null,map__11083_11127__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_11131 = cljs.core.get.call(null,map__11083_11127__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_11132 = cljs.core.get.call(null,map__11083_11127__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_11132,f_11131,target_11130,paths_11128], null)));
clustermap.components.mount.mount.call(null,name_11132,f_11131,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_11130,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_11129,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_11128);
{
var G__11133 = seq__11079_11122;
var G__11134 = chunk__11080_11123;
var G__11135 = count__11081_11124;
var G__11136 = (i__11082_11125 + (1));
seq__11079_11122 = G__11133;
chunk__11080_11123 = G__11134;
count__11081_11124 = G__11135;
i__11082_11125 = G__11136;
continue;
}
} else
{var temp__4126__auto___11137 = cljs.core.seq.call(null,seq__11079_11122);if(temp__4126__auto___11137)
{var seq__11079_11138__$1 = temp__4126__auto___11137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11079_11138__$1))
{var c__4314__auto___11139 = cljs.core.chunk_first.call(null,seq__11079_11138__$1);{
var G__11140 = cljs.core.chunk_rest.call(null,seq__11079_11138__$1);
var G__11141 = c__4314__auto___11139;
var G__11142 = cljs.core.count.call(null,c__4314__auto___11139);
var G__11143 = (0);
seq__11079_11122 = G__11140;
chunk__11080_11123 = G__11141;
count__11081_11124 = G__11142;
i__11082_11125 = G__11143;
continue;
}
} else
{var map__11084_11144 = cljs.core.first.call(null,seq__11079_11138__$1);var map__11084_11145__$1 = ((cljs.core.seq_QMARK_.call(null,map__11084_11144))?cljs.core.apply.call(null,cljs.core.hash_map,map__11084_11144):map__11084_11144);var paths_11146 = cljs.core.get.call(null,map__11084_11145__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_11147 = cljs.core.get.call(null,map__11084_11145__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_11148 = cljs.core.get.call(null,map__11084_11145__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_11149 = cljs.core.get.call(null,map__11084_11145__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_11150 = cljs.core.get.call(null,map__11084_11145__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_11150,f_11149,target_11148,paths_11146], null)));
clustermap.components.mount.mount.call(null,name_11150,f_11149,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_11148,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_11147,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_11146);
{
var G__11151 = cljs.core.next.call(null,seq__11079_11138__$1);
var G__11152 = null;
var G__11153 = (0);
var G__11154 = (0);
seq__11079_11122 = G__11151;
chunk__11080_11123 = G__11152;
count__11081_11124 = G__11153;
i__11082_11125 = G__11154;
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
return (function (state_11100){var state_val_11101 = (state_11100[(1)]);if((state_val_11101 === (7)))
{var inst_11089 = (state_11100[(2)]);var inst_11090 = cljs.core.nth.call(null,inst_11089,(0),null);var inst_11091 = cljs.core.nth.call(null,inst_11089,(1),null);var inst_11092 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_11090,inst_11091);var state_11100__$1 = (function (){var statearr_11102 = state_11100;(statearr_11102[(7)] = inst_11092);
return statearr_11102;
})();var statearr_11103_11155 = state_11100__$1;(statearr_11103_11155[(2)] = null);
(statearr_11103_11155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (6)))
{var inst_11096 = (state_11100[(2)]);var state_11100__$1 = state_11100;var statearr_11104_11156 = state_11100__$1;(statearr_11104_11156[(2)] = inst_11096);
(statearr_11104_11156[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (5)))
{var state_11100__$1 = state_11100;var statearr_11105_11157 = state_11100__$1;(statearr_11105_11157[(2)] = null);
(statearr_11105_11157[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (4)))
{var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11100__$1,(7),self__.comm);
} else
{if((state_val_11101 === (3)))
{var inst_11098 = (state_11100[(2)]);var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11100__$1,inst_11098);
} else
{if((state_val_11101 === (2)))
{var state_11100__$1 = state_11100;var statearr_11106_11158 = state_11100__$1;(statearr_11106_11158[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (1)))
{var state_11100__$1 = state_11100;var statearr_11108_11159 = state_11100__$1;(statearr_11108_11159[(2)] = null);
(statearr_11108_11159[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_11112 = [null,null,null,null,null,null,null,null];(statearr_11112[(0)] = state_machine__5694__auto__);
(statearr_11112[(1)] = (1));
return statearr_11112;
});
var state_machine__5694__auto____1 = (function (state_11100){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_11100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11113){if((e11113 instanceof Object))
{var ex__5697__auto__ = e11113;var statearr_11114_11160 = state_11100;(statearr_11114_11160[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11161 = state_11100;
state_11100 = G__11161;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11100){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,shared,this$__$1,comm,state))
})();var state__5710__auto__ = (function (){var statearr_11115 = f__5709__auto__.call(null);(statearr_11115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_11115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,shared,this$__$1,comm,state))
);
return c__5708__auto__;
});})(comm,state))
;
clustermap.app.t11076.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__11116 = cljs.core.seq.call(null,self__.component_defs);var chunk__11117 = null;var count__11118 = (0);var i__11119 = (0);while(true){
if((i__11119 < count__11118))
{var map__11120 = cljs.core._nth.call(null,chunk__11117,i__11119);var map__11120__$1 = ((cljs.core.seq_QMARK_.call(null,map__11120))?cljs.core.apply.call(null,cljs.core.hash_map,map__11120):map__11120);var target = cljs.core.get.call(null,map__11120__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__11162 = seq__11116;
var G__11163 = chunk__11117;
var G__11164 = count__11118;
var G__11165 = (i__11119 + (1));
seq__11116 = G__11162;
chunk__11117 = G__11163;
count__11118 = G__11164;
i__11119 = G__11165;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11116);if(temp__4126__auto__)
{var seq__11116__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11116__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__11116__$1);{
var G__11166 = cljs.core.chunk_rest.call(null,seq__11116__$1);
var G__11167 = c__4314__auto__;
var G__11168 = cljs.core.count.call(null,c__4314__auto__);
var G__11169 = (0);
seq__11116 = G__11166;
chunk__11117 = G__11167;
count__11118 = G__11168;
i__11119 = G__11169;
continue;
}
} else
{var map__11121 = cljs.core.first.call(null,seq__11116__$1);var map__11121__$1 = ((cljs.core.seq_QMARK_.call(null,map__11121))?cljs.core.apply.call(null,cljs.core.hash_map,map__11121):map__11121);var target = cljs.core.get.call(null,map__11121__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__11170 = cljs.core.next.call(null,seq__11116__$1);
var G__11171 = null;
var G__11172 = (0);
var G__11173 = (0);
seq__11116 = G__11170;
chunk__11117 = G__11171;
count__11118 = G__11172;
i__11119 = G__11173;
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
clustermap.app.t11076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_11078){var self__ = this;
var _11078__$1 = this;return self__.meta11077;
});})(comm,state))
;
clustermap.app.t11076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_11078,meta11077__$1){var self__ = this;
var _11078__$1 = this;return (new clustermap.app.t11076(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta11077__$1));
});})(comm,state))
;
clustermap.app.__GT_t11076 = ((function (comm,state){
return (function __GT_t11076(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta11077){return (new clustermap.app.t11076(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta11077));
});})(comm,state))
;
}
return (new clustermap.app.t11076(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
