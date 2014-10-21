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
clustermap.app.IAppService = (function (){var obj53176 = {};return obj53176;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.init[(function (){var G__53180 = x__4273__auto__;return goog.typeOf(G__53180);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.init["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IAppService.init",this$);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.destroy[(function (){var G__53184 = x__4273__auto__;return goog.typeOf(G__53184);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.destroy["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IAppService.destroy",this$);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.handle_event[(function (){var G__53188 = x__4273__auto__;return goog.typeOf(G__53188);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.handle_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.IAppControl = (function (){var obj53190 = {};return obj53190;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.start[(function (){var G__53194 = x__4273__auto__;return goog.typeOf(G__53194);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.start["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IAppControl.start",this$);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.stop[(function (){var G__53198 = x__4273__auto__;return goog.typeOf(G__53198);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.stop["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj53200 = {};return obj53200;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_state[(function (){var G__53204 = x__4273__auto__;return goog.typeOf(G__53204);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.get_state["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IApp.get-state",this$);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_comm[(function (){var G__53208 = x__4273__auto__;return goog.typeOf(G__53208);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.get_comm["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IApp.get-comm",this$);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_history[(function (){var G__53212 = x__4273__auto__;return goog.typeOf(G__53212);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.app.get_history["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var state = (function (){var G__53263 = initial_state_value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53263) : cljs.core.atom.call(null,G__53263));
})();if(typeof clustermap.app.t53264 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t53264 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta53265){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta53265 = meta53265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t53264.cljs$lang$type = true;
clustermap.app.t53264.cljs$lang$ctorStr = "clustermap.app/t53264";
clustermap.app.t53264.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.app/t53264");
});})(comm,state))
;
clustermap.app.t53264.prototype.clustermap$app$IApp$ = true;
clustermap.app.t53264.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t53264.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t53264.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t53264.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t53264.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clustermap.app.init(self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1312,self__.comm], null)], 0));var G__53267_53313 = clustermap.app.history_STAR_;var G__53268_53314 = goog.history.EventType.NAVIGATE;var G__53269_53315 = ((function (G__53267_53313,G__53268_53314,shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_(token);
});})(G__53267_53313,G__53268_53314,shared,this$__$1,comm,state))
;goog.events.listen(G__53267_53313,G__53268_53314,G__53269_53315);
clustermap.app.history_STAR_.setEnabled(true);
var seq__53270_53316 = cljs.core.seq(self__.component_defs);var chunk__53271_53317 = null;var count__53272_53318 = (0);var i__53273_53319 = (0);while(true){
if((i__53273_53319 < count__53272_53318))
{var map__53274_53320 = chunk__53271_53317.cljs$core$IIndexed$_nth$arity$2(null,i__53273_53319);var map__53274_53321__$1 = ((cljs.core.seq_QMARK_(map__53274_53320))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53274_53320):map__53274_53320);var paths_53322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53321__$1,cljs.core.constant$keyword$1255);var path_53323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53321__$1,cljs.core.constant$keyword$1217);var target_53324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53321__$1,cljs.core.constant$keyword$1252);var f_53325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53321__$1,cljs.core.constant$keyword$1313);var name_53326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53274_53321__$1,cljs.core.constant$keyword$1274);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_53326,f_53325,target_53324,paths_53322], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_53326,f_53325,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1252,target_53324,cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1217,path_53323,cljs.core.constant$keyword$1255,paths_53322], 0));
{
var G__53327 = seq__53270_53316;
var G__53328 = chunk__53271_53317;
var G__53329 = count__53272_53318;
var G__53330 = (i__53273_53319 + (1));
seq__53270_53316 = G__53327;
chunk__53271_53317 = G__53328;
count__53272_53318 = G__53329;
i__53273_53319 = G__53330;
continue;
}
} else
{var temp__4126__auto___53331 = cljs.core.seq(seq__53270_53316);if(temp__4126__auto___53331)
{var seq__53270_53332__$1 = temp__4126__auto___53331;if(cljs.core.chunked_seq_QMARK_(seq__53270_53332__$1))
{var c__4406__auto___53333 = cljs.core.chunk_first(seq__53270_53332__$1);{
var G__53334 = cljs.core.chunk_rest(seq__53270_53332__$1);
var G__53335 = c__4406__auto___53333;
var G__53336 = cljs.core.count(c__4406__auto___53333);
var G__53337 = (0);
seq__53270_53316 = G__53334;
chunk__53271_53317 = G__53335;
count__53272_53318 = G__53336;
i__53273_53319 = G__53337;
continue;
}
} else
{var map__53275_53338 = cljs.core.first(seq__53270_53332__$1);var map__53275_53339__$1 = ((cljs.core.seq_QMARK_(map__53275_53338))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53275_53338):map__53275_53338);var paths_53340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53275_53339__$1,cljs.core.constant$keyword$1255);var path_53341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53275_53339__$1,cljs.core.constant$keyword$1217);var target_53342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53275_53339__$1,cljs.core.constant$keyword$1252);var f_53343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53275_53339__$1,cljs.core.constant$keyword$1313);var name_53344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53275_53339__$1,cljs.core.constant$keyword$1274);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_53344,f_53343,target_53342,paths_53340], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_53344,f_53343,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1252,target_53342,cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1217,path_53341,cljs.core.constant$keyword$1255,paths_53340], 0));
{
var G__53345 = cljs.core.next(seq__53270_53332__$1);
var G__53346 = null;
var G__53347 = (0);
var G__53348 = (0);
seq__53270_53316 = G__53345;
chunk__53271_53317 = G__53346;
count__53272_53318 = G__53347;
i__53273_53319 = G__53348;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,shared,this$__$1,comm,state){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,shared,this$__$1,comm,state){
return (function (state_53291){var state_val_53292 = (state_53291[(1)]);if((state_val_53292 === (7)))
{var inst_53280 = (state_53291[(2)]);var inst_53281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53280,(0),null);var inst_53282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53280,(1),null);var inst_53283 = clustermap.app.handle_event(self__.app_service,this$__$1,inst_53281,inst_53282);var state_53291__$1 = (function (){var statearr_53293 = state_53291;(statearr_53293[(7)] = inst_53283);
return statearr_53293;
})();var statearr_53294_53349 = state_53291__$1;(statearr_53294_53349[(2)] = null);
(statearr_53294_53349[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53292 === (6)))
{var inst_53287 = (state_53291[(2)]);var state_53291__$1 = state_53291;var statearr_53295_53350 = state_53291__$1;(statearr_53295_53350[(2)] = inst_53287);
(statearr_53295_53350[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53292 === (5)))
{var state_53291__$1 = state_53291;var statearr_53296_53351 = state_53291__$1;(statearr_53296_53351[(2)] = null);
(statearr_53296_53351[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53292 === (4)))
{var state_53291__$1 = state_53291;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53291__$1,(7),self__.comm);
} else
{if((state_val_53292 === (3)))
{var inst_53289 = (state_53291[(2)]);var state_53291__$1 = state_53291;return cljs.core.async.impl.ioc_helpers.return_chan(state_53291__$1,inst_53289);
} else
{if((state_val_53292 === (2)))
{var state_53291__$1 = state_53291;var statearr_53297_53352 = state_53291__$1;(statearr_53297_53352[(1)] = (4));

return cljs.core.constant$keyword$1120;
} else
{if((state_val_53292 === (1)))
{var state_53291__$1 = state_53291;var statearr_53299_53353 = state_53291__$1;(statearr_53299_53353[(2)] = null);
(statearr_53299_53353[(1)] = (2));
return cljs.core.constant$keyword$1120;
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
var state_machine__5805__auto____0 = (function (){var statearr_53303 = [null,null,null,null,null,null,null,null];(statearr_53303[(0)] = state_machine__5805__auto__);
(statearr_53303[(1)] = (1));
return statearr_53303;
});
var state_machine__5805__auto____1 = (function (state_53291){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_53291);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e53304){if((e53304 instanceof Object))
{var ex__5808__auto__ = e53304;var statearr_53305_53354 = state_53291;(statearr_53305_53354[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53291);
return cljs.core.constant$keyword$1120;
} else
{throw e53304;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__53355 = state_53291;
state_53291 = G__53355;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_53291){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_53291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state))
})();var state__5821__auto__ = (function (){var statearr_53306 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_53306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_53306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,shared,this$__$1,comm,state))
);
return c__5819__auto__;
});})(comm,state))
;
clustermap.app.t53264.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_();
var seq__53307 = cljs.core.seq(self__.component_defs);var chunk__53308 = null;var count__53309 = (0);var i__53310 = (0);while(true){
if((i__53310 < count__53309))
{var map__53311 = chunk__53308.cljs$core$IIndexed$_nth$arity$2(null,i__53310);var map__53311__$1 = ((cljs.core.seq_QMARK_(map__53311))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53311):map__53311);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53311__$1,cljs.core.constant$keyword$1252);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__53356 = seq__53307;
var G__53357 = chunk__53308;
var G__53358 = count__53309;
var G__53359 = (i__53310 + (1));
seq__53307 = G__53356;
chunk__53308 = G__53357;
count__53309 = G__53358;
i__53310 = G__53359;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__53307);if(temp__4126__auto__)
{var seq__53307__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__53307__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__53307__$1);{
var G__53360 = cljs.core.chunk_rest(seq__53307__$1);
var G__53361 = c__4406__auto__;
var G__53362 = cljs.core.count(c__4406__auto__);
var G__53363 = (0);
seq__53307 = G__53360;
chunk__53308 = G__53361;
count__53309 = G__53362;
i__53310 = G__53363;
continue;
}
} else
{var map__53312 = cljs.core.first(seq__53307__$1);var map__53312__$1 = ((cljs.core.seq_QMARK_(map__53312))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53312):map__53312);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53312__$1,cljs.core.constant$keyword$1252);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__53364 = cljs.core.next(seq__53307__$1);
var G__53365 = null;
var G__53366 = (0);
var G__53367 = (0);
seq__53307 = G__53364;
chunk__53308 = G__53365;
count__53309 = G__53366;
i__53310 = G__53367;
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
clustermap.app.t53264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_53266){var self__ = this;
var _53266__$1 = this;return self__.meta53265;
});})(comm,state))
;
clustermap.app.t53264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_53266,meta53265__$1){var self__ = this;
var _53266__$1 = this;return (new clustermap.app.t53264(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta53265__$1));
});})(comm,state))
;
clustermap.app.__GT_t53264 = ((function (comm,state){
return (function __GT_t53264(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta53265){return (new clustermap.app.t53264(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta53265));
});})(comm,state))
;
}
return (new clustermap.app.t53264(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop(a);
} else
{}
var new_app = clustermap.app.create_app_instance(initial_state__$1,components__$1,app_service__$1);new_app.clustermap$app$IAppControl$start$arity$1(null);
return new_app;
}),initial_state,components,cljs.core.array_seq([app_service], 0));
});
