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
clustermap.app.IAppService = (function (){var obj42006 = {};return obj42006;
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
{throw cljs.core.missing_protocol("IAppService.init",this$);
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
{throw cljs.core.missing_protocol("IAppService.destroy",this$);
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
{throw cljs.core.missing_protocol("IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.IAppControl = (function (){var obj42008 = {};return obj42008;
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
{throw cljs.core.missing_protocol("IAppControl.start",this$);
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
{throw cljs.core.missing_protocol("IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj42010 = {};return obj42010;
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
{throw cljs.core.missing_protocol("IApp.get-state",this$);
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
{throw cljs.core.missing_protocol("IApp.get-comm",this$);
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
{throw cljs.core.missing_protocol("IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state_value) : cljs.core.atom.call(null,initial_state_value));if(typeof clustermap.app.t42057 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t42057 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta42058){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta42058 = meta42058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t42057.cljs$lang$type = true;
clustermap.app.t42057.cljs$lang$ctorStr = "clustermap.app/t42057";
clustermap.app.t42057.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.app/t42057");
});})(comm,state))
;
clustermap.app.t42057.prototype.clustermap$app$IApp$ = true;
clustermap.app.t42057.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t42057.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t42057.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t42057.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t42057.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clustermap.app.init(self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1282,self__.comm], null)], 0));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_(token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__42060_42103 = cljs.core.seq(self__.component_defs);var chunk__42061_42104 = null;var count__42062_42105 = (0);var i__42063_42106 = (0);while(true){
if((i__42063_42106 < count__42062_42105))
{var map__42064_42107 = chunk__42061_42104.cljs$core$IIndexed$_nth$arity$2(null,i__42063_42106);var map__42064_42108__$1 = ((cljs.core.seq_QMARK_(map__42064_42107))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42064_42107):map__42064_42107);var paths_42109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42108__$1,cljs.core.constant$keyword$1225);var path_42110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42108__$1,cljs.core.constant$keyword$1195);var target_42111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42108__$1,cljs.core.constant$keyword$1224);var f_42112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42108__$1,cljs.core.constant$keyword$1283);var name_42113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42108__$1,cljs.core.constant$keyword$1244);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_42113,f_42112,target_42111,paths_42109], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_42113,f_42112,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1224,target_42111,cljs.core.constant$keyword$1221,shared,cljs.core.constant$keyword$1195,path_42110,cljs.core.constant$keyword$1225,paths_42109], 0));
{
var G__42114 = seq__42060_42103;
var G__42115 = chunk__42061_42104;
var G__42116 = count__42062_42105;
var G__42117 = (i__42063_42106 + (1));
seq__42060_42103 = G__42114;
chunk__42061_42104 = G__42115;
count__42062_42105 = G__42116;
i__42063_42106 = G__42117;
continue;
}
} else
{var temp__4126__auto___42118 = cljs.core.seq(seq__42060_42103);if(temp__4126__auto___42118)
{var seq__42060_42119__$1 = temp__4126__auto___42118;if(cljs.core.chunked_seq_QMARK_(seq__42060_42119__$1))
{var c__4314__auto___42120 = cljs.core.chunk_first(seq__42060_42119__$1);{
var G__42121 = cljs.core.chunk_rest(seq__42060_42119__$1);
var G__42122 = c__4314__auto___42120;
var G__42123 = cljs.core.count(c__4314__auto___42120);
var G__42124 = (0);
seq__42060_42103 = G__42121;
chunk__42061_42104 = G__42122;
count__42062_42105 = G__42123;
i__42063_42106 = G__42124;
continue;
}
} else
{var map__42065_42125 = cljs.core.first(seq__42060_42119__$1);var map__42065_42126__$1 = ((cljs.core.seq_QMARK_(map__42065_42125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42065_42125):map__42065_42125);var paths_42127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42065_42126__$1,cljs.core.constant$keyword$1225);var path_42128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42065_42126__$1,cljs.core.constant$keyword$1195);var target_42129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42065_42126__$1,cljs.core.constant$keyword$1224);var f_42130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42065_42126__$1,cljs.core.constant$keyword$1283);var name_42131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42065_42126__$1,cljs.core.constant$keyword$1244);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_42131,f_42130,target_42129,paths_42127], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_42131,f_42130,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1224,target_42129,cljs.core.constant$keyword$1221,shared,cljs.core.constant$keyword$1195,path_42128,cljs.core.constant$keyword$1225,paths_42127], 0));
{
var G__42132 = cljs.core.next(seq__42060_42119__$1);
var G__42133 = null;
var G__42134 = (0);
var G__42135 = (0);
seq__42060_42103 = G__42132;
chunk__42061_42104 = G__42133;
count__42062_42105 = G__42134;
i__42063_42106 = G__42135;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,shared,this$__$1,comm,state){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,shared,this$__$1,comm,state){
return (function (state_42081){var state_val_42082 = (state_42081[(1)]);if((state_val_42082 === (7)))
{var inst_42070 = (state_42081[(2)]);var inst_42071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42070,(0),null);var inst_42072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42070,(1),null);var inst_42073 = clustermap.app.handle_event(self__.app_service,this$__$1,inst_42071,inst_42072);var state_42081__$1 = (function (){var statearr_42083 = state_42081;(statearr_42083[(7)] = inst_42073);
return statearr_42083;
})();var statearr_42084_42136 = state_42081__$1;(statearr_42084_42136[(2)] = null);
(statearr_42084_42136[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42082 === (6)))
{var inst_42077 = (state_42081[(2)]);var state_42081__$1 = state_42081;var statearr_42085_42137 = state_42081__$1;(statearr_42085_42137[(2)] = inst_42077);
(statearr_42085_42137[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42082 === (5)))
{var state_42081__$1 = state_42081;var statearr_42086_42138 = state_42081__$1;(statearr_42086_42138[(2)] = null);
(statearr_42086_42138[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42082 === (4)))
{var state_42081__$1 = state_42081;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42081__$1,(7),self__.comm);
} else
{if((state_val_42082 === (3)))
{var inst_42079 = (state_42081[(2)]);var state_42081__$1 = state_42081;return cljs.core.async.impl.ioc_helpers.return_chan(state_42081__$1,inst_42079);
} else
{if((state_val_42082 === (2)))
{var state_42081__$1 = state_42081;var statearr_42087_42139 = state_42081__$1;(statearr_42087_42139[(1)] = (4));

return cljs.core.constant$keyword$1100;
} else
{if((state_val_42082 === (1)))
{var state_42081__$1 = state_42081;var statearr_42089_42140 = state_42081__$1;(statearr_42089_42140[(2)] = null);
(statearr_42089_42140[(1)] = (2));
return cljs.core.constant$keyword$1100;
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
var state_machine__5694__auto____0 = (function (){var statearr_42093 = [null,null,null,null,null,null,null,null];(statearr_42093[(0)] = state_machine__5694__auto__);
(statearr_42093[(1)] = (1));
return statearr_42093;
});
var state_machine__5694__auto____1 = (function (state_42081){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42081);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42094){if((e42094 instanceof Object))
{var ex__5697__auto__ = e42094;var statearr_42095_42141 = state_42081;(statearr_42095_42141[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42081);
return cljs.core.constant$keyword$1100;
} else
{throw e42094;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__42142 = state_42081;
state_42081 = G__42142;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42081){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,shared,this$__$1,comm,state))
})();var state__5710__auto__ = (function (){var statearr_42096 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,shared,this$__$1,comm,state))
);
return c__5708__auto__;
});})(comm,state))
;
clustermap.app.t42057.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_();
var seq__42097 = cljs.core.seq(self__.component_defs);var chunk__42098 = null;var count__42099 = (0);var i__42100 = (0);while(true){
if((i__42100 < count__42099))
{var map__42101 = chunk__42098.cljs$core$IIndexed$_nth$arity$2(null,i__42100);var map__42101__$1 = ((cljs.core.seq_QMARK_(map__42101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42101):map__42101);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42101__$1,cljs.core.constant$keyword$1224);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__42143 = seq__42097;
var G__42144 = chunk__42098;
var G__42145 = count__42099;
var G__42146 = (i__42100 + (1));
seq__42097 = G__42143;
chunk__42098 = G__42144;
count__42099 = G__42145;
i__42100 = G__42146;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42097);if(temp__4126__auto__)
{var seq__42097__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42097__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__42097__$1);{
var G__42147 = cljs.core.chunk_rest(seq__42097__$1);
var G__42148 = c__4314__auto__;
var G__42149 = cljs.core.count(c__4314__auto__);
var G__42150 = (0);
seq__42097 = G__42147;
chunk__42098 = G__42148;
count__42099 = G__42149;
i__42100 = G__42150;
continue;
}
} else
{var map__42102 = cljs.core.first(seq__42097__$1);var map__42102__$1 = ((cljs.core.seq_QMARK_(map__42102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42102):map__42102);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42102__$1,cljs.core.constant$keyword$1224);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__42151 = cljs.core.next(seq__42097__$1);
var G__42152 = null;
var G__42153 = (0);
var G__42154 = (0);
seq__42097 = G__42151;
chunk__42098 = G__42152;
count__42099 = G__42153;
i__42100 = G__42154;
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
clustermap.app.t42057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_42059){var self__ = this;
var _42059__$1 = this;return self__.meta42058;
});})(comm,state))
;
clustermap.app.t42057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_42059,meta42058__$1){var self__ = this;
var _42059__$1 = this;return (new clustermap.app.t42057(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta42058__$1));
});})(comm,state))
;
clustermap.app.__GT_t42057 = ((function (comm,state){
return (function __GT_t42057(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta42058){return (new clustermap.app.t42057(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta42058));
});})(comm,state))
;
}
return (new clustermap.app.t42057(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop(a);
} else
{}
var new_app = clustermap.app.create_app_instance(initial_state__$1,components__$1,app_service__$1);new_app.clustermap$app$IAppControl$start$arity$1(null);
return new_app;
}),initial_state,components,cljs.core.array_seq([app_service], 0));
});
