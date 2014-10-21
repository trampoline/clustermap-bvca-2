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
clustermap.app.IAppService = (function (){var obj30039 = {};return obj30039;
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
clustermap.app.IAppControl = (function (){var obj30041 = {};return obj30041;
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
clustermap.app.IApp = (function (){var obj30043 = {};return obj30043;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t30090 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t30090 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta30091){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta30091 = meta30091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t30090.cljs$lang$type = true;
clustermap.app.t30090.cljs$lang$ctorStr = "clustermap.app/t30090";
clustermap.app.t30090.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.app/t30090");
});})(comm,state))
;
clustermap.app.t30090.prototype.clustermap$app$IApp$ = true;
clustermap.app.t30090.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t30090.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t30090.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t30090.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t30090.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__30093_30136 = cljs.core.seq.call(null,self__.component_defs);var chunk__30094_30137 = null;var count__30095_30138 = (0);var i__30096_30139 = (0);while(true){
if((i__30096_30139 < count__30095_30138))
{var map__30097_30140 = cljs.core._nth.call(null,chunk__30094_30137,i__30096_30139);var map__30097_30141__$1 = ((cljs.core.seq_QMARK_.call(null,map__30097_30140))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097_30140):map__30097_30140);var paths_30142 = cljs.core.get.call(null,map__30097_30141__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_30143 = cljs.core.get.call(null,map__30097_30141__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_30144 = cljs.core.get.call(null,map__30097_30141__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_30145 = cljs.core.get.call(null,map__30097_30141__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_30146 = cljs.core.get.call(null,map__30097_30141__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_30146,f_30145,target_30144,paths_30142], null)));
clustermap.components.mount.mount.call(null,name_30146,f_30145,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_30144,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_30143,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_30142);
{
var G__30147 = seq__30093_30136;
var G__30148 = chunk__30094_30137;
var G__30149 = count__30095_30138;
var G__30150 = (i__30096_30139 + (1));
seq__30093_30136 = G__30147;
chunk__30094_30137 = G__30148;
count__30095_30138 = G__30149;
i__30096_30139 = G__30150;
continue;
}
} else
{var temp__4126__auto___30151 = cljs.core.seq.call(null,seq__30093_30136);if(temp__4126__auto___30151)
{var seq__30093_30152__$1 = temp__4126__auto___30151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30093_30152__$1))
{var c__4406__auto___30153 = cljs.core.chunk_first.call(null,seq__30093_30152__$1);{
var G__30154 = cljs.core.chunk_rest.call(null,seq__30093_30152__$1);
var G__30155 = c__4406__auto___30153;
var G__30156 = cljs.core.count.call(null,c__4406__auto___30153);
var G__30157 = (0);
seq__30093_30136 = G__30154;
chunk__30094_30137 = G__30155;
count__30095_30138 = G__30156;
i__30096_30139 = G__30157;
continue;
}
} else
{var map__30098_30158 = cljs.core.first.call(null,seq__30093_30152__$1);var map__30098_30159__$1 = ((cljs.core.seq_QMARK_.call(null,map__30098_30158))?cljs.core.apply.call(null,cljs.core.hash_map,map__30098_30158):map__30098_30158);var paths_30160 = cljs.core.get.call(null,map__30098_30159__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_30161 = cljs.core.get.call(null,map__30098_30159__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_30162 = cljs.core.get.call(null,map__30098_30159__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_30163 = cljs.core.get.call(null,map__30098_30159__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_30164 = cljs.core.get.call(null,map__30098_30159__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_30164,f_30163,target_30162,paths_30160], null)));
clustermap.components.mount.mount.call(null,name_30164,f_30163,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_30162,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_30161,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_30160);
{
var G__30165 = cljs.core.next.call(null,seq__30093_30152__$1);
var G__30166 = null;
var G__30167 = (0);
var G__30168 = (0);
seq__30093_30136 = G__30165;
chunk__30094_30137 = G__30166;
count__30095_30138 = G__30167;
i__30096_30139 = G__30168;
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
return (function (state_30114){var state_val_30115 = (state_30114[(1)]);if((state_val_30115 === (7)))
{var inst_30103 = (state_30114[(2)]);var inst_30104 = cljs.core.nth.call(null,inst_30103,(0),null);var inst_30105 = cljs.core.nth.call(null,inst_30103,(1),null);var inst_30106 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_30104,inst_30105);var state_30114__$1 = (function (){var statearr_30116 = state_30114;(statearr_30116[(7)] = inst_30106);
return statearr_30116;
})();var statearr_30117_30169 = state_30114__$1;(statearr_30117_30169[(2)] = null);
(statearr_30117_30169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (6)))
{var inst_30110 = (state_30114[(2)]);var state_30114__$1 = state_30114;var statearr_30118_30170 = state_30114__$1;(statearr_30118_30170[(2)] = inst_30110);
(statearr_30118_30170[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (5)))
{var state_30114__$1 = state_30114;var statearr_30119_30171 = state_30114__$1;(statearr_30119_30171[(2)] = null);
(statearr_30119_30171[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (4)))
{var state_30114__$1 = state_30114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30114__$1,(7),self__.comm);
} else
{if((state_val_30115 === (3)))
{var inst_30112 = (state_30114[(2)]);var state_30114__$1 = state_30114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30114__$1,inst_30112);
} else
{if((state_val_30115 === (2)))
{var state_30114__$1 = state_30114;var statearr_30120_30172 = state_30114__$1;(statearr_30120_30172[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (1)))
{var state_30114__$1 = state_30114;var statearr_30122_30173 = state_30114__$1;(statearr_30122_30173[(2)] = null);
(statearr_30122_30173[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_30126 = [null,null,null,null,null,null,null,null];(statearr_30126[(0)] = state_machine__5805__auto__);
(statearr_30126[(1)] = (1));
return statearr_30126;
});
var state_machine__5805__auto____1 = (function (state_30114){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_30114);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e30127){if((e30127 instanceof Object))
{var ex__5808__auto__ = e30127;var statearr_30128_30174 = state_30114;(statearr_30128_30174[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30127;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30175 = state_30114;
state_30114 = G__30175;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_30114){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_30114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state))
})();var state__5821__auto__ = (function (){var statearr_30129 = f__5820__auto__.call(null);(statearr_30129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_30129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,shared,this$__$1,comm,state))
);
return c__5819__auto__;
});})(comm,state))
;
clustermap.app.t30090.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__30130 = cljs.core.seq.call(null,self__.component_defs);var chunk__30131 = null;var count__30132 = (0);var i__30133 = (0);while(true){
if((i__30133 < count__30132))
{var map__30134 = cljs.core._nth.call(null,chunk__30131,i__30133);var map__30134__$1 = ((cljs.core.seq_QMARK_.call(null,map__30134))?cljs.core.apply.call(null,cljs.core.hash_map,map__30134):map__30134);var target = cljs.core.get.call(null,map__30134__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__30176 = seq__30130;
var G__30177 = chunk__30131;
var G__30178 = count__30132;
var G__30179 = (i__30133 + (1));
seq__30130 = G__30176;
chunk__30131 = G__30177;
count__30132 = G__30178;
i__30133 = G__30179;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30130);if(temp__4126__auto__)
{var seq__30130__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30130__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__30130__$1);{
var G__30180 = cljs.core.chunk_rest.call(null,seq__30130__$1);
var G__30181 = c__4406__auto__;
var G__30182 = cljs.core.count.call(null,c__4406__auto__);
var G__30183 = (0);
seq__30130 = G__30180;
chunk__30131 = G__30181;
count__30132 = G__30182;
i__30133 = G__30183;
continue;
}
} else
{var map__30135 = cljs.core.first.call(null,seq__30130__$1);var map__30135__$1 = ((cljs.core.seq_QMARK_.call(null,map__30135))?cljs.core.apply.call(null,cljs.core.hash_map,map__30135):map__30135);var target = cljs.core.get.call(null,map__30135__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__30184 = cljs.core.next.call(null,seq__30130__$1);
var G__30185 = null;
var G__30186 = (0);
var G__30187 = (0);
seq__30130 = G__30184;
chunk__30131 = G__30185;
count__30132 = G__30186;
i__30133 = G__30187;
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
clustermap.app.t30090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_30092){var self__ = this;
var _30092__$1 = this;return self__.meta30091;
});})(comm,state))
;
clustermap.app.t30090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_30092,meta30091__$1){var self__ = this;
var _30092__$1 = this;return (new clustermap.app.t30090(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta30091__$1));
});})(comm,state))
;
clustermap.app.__GT_t30090 = ((function (comm,state){
return (function __GT_t30090(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta30091){return (new clustermap.app.t30090(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta30091));
});})(comm,state))
;
}
return (new clustermap.app.t30090(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
