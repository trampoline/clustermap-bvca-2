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
clustermap.app.IAppService = (function (){var obj51434 = {};return obj51434;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.init[(function (){var G__51438 = x__4273__auto__;return goog.typeOf(G__51438);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.destroy[(function (){var G__51442 = x__4273__auto__;return goog.typeOf(G__51442);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.handle_event[(function (){var G__51446 = x__4273__auto__;return goog.typeOf(G__51446);
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
clustermap.app.IAppControl = (function (){var obj51448 = {};return obj51448;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.start[(function (){var G__51452 = x__4273__auto__;return goog.typeOf(G__51452);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.stop[(function (){var G__51456 = x__4273__auto__;return goog.typeOf(G__51456);
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
clustermap.app.IApp = (function (){var obj51458 = {};return obj51458;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_state[(function (){var G__51462 = x__4273__auto__;return goog.typeOf(G__51462);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_comm[(function (){var G__51466 = x__4273__auto__;return goog.typeOf(G__51466);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.app.get_history[(function (){var G__51470 = x__4273__auto__;return goog.typeOf(G__51470);
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var state = (function (){var G__51521 = initial_state_value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51521) : cljs.core.atom.call(null,G__51521));
})();if(typeof clustermap.app.t51522 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t51522 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta51523){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta51523 = meta51523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t51522.cljs$lang$type = true;
clustermap.app.t51522.cljs$lang$ctorStr = "clustermap.app/t51522";
clustermap.app.t51522.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.app/t51522");
});})(comm,state))
;
clustermap.app.t51522.prototype.clustermap$app$IApp$ = true;
clustermap.app.t51522.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t51522.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t51522.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t51522.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t51522.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clustermap.app.init(self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1312,self__.comm], null)], 0));var G__51525_51571 = clustermap.app.history_STAR_;var G__51526_51572 = goog.history.EventType.NAVIGATE;var G__51527_51573 = ((function (G__51525_51571,G__51526_51572,shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_(token);
});})(G__51525_51571,G__51526_51572,shared,this$__$1,comm,state))
;goog.events.listen(G__51525_51571,G__51526_51572,G__51527_51573);
clustermap.app.history_STAR_.setEnabled(true);
var seq__51528_51574 = cljs.core.seq(self__.component_defs);var chunk__51529_51575 = null;var count__51530_51576 = (0);var i__51531_51577 = (0);while(true){
if((i__51531_51577 < count__51530_51576))
{var map__51532_51578 = chunk__51529_51575.cljs$core$IIndexed$_nth$arity$2(null,i__51531_51577);var map__51532_51579__$1 = ((cljs.core.seq_QMARK_(map__51532_51578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51532_51578):map__51532_51578);var paths_51580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532_51579__$1,cljs.core.constant$keyword$1255);var path_51581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532_51579__$1,cljs.core.constant$keyword$1217);var target_51582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532_51579__$1,cljs.core.constant$keyword$1252);var f_51583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532_51579__$1,cljs.core.constant$keyword$1313);var name_51584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532_51579__$1,cljs.core.constant$keyword$1274);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_51584,f_51583,target_51582,paths_51580], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_51584,f_51583,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1252,target_51582,cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1217,path_51581,cljs.core.constant$keyword$1255,paths_51580], 0));
{
var G__51585 = seq__51528_51574;
var G__51586 = chunk__51529_51575;
var G__51587 = count__51530_51576;
var G__51588 = (i__51531_51577 + (1));
seq__51528_51574 = G__51585;
chunk__51529_51575 = G__51586;
count__51530_51576 = G__51587;
i__51531_51577 = G__51588;
continue;
}
} else
{var temp__4126__auto___51589 = cljs.core.seq(seq__51528_51574);if(temp__4126__auto___51589)
{var seq__51528_51590__$1 = temp__4126__auto___51589;if(cljs.core.chunked_seq_QMARK_(seq__51528_51590__$1))
{var c__4406__auto___51591 = cljs.core.chunk_first(seq__51528_51590__$1);{
var G__51592 = cljs.core.chunk_rest(seq__51528_51590__$1);
var G__51593 = c__4406__auto___51591;
var G__51594 = cljs.core.count(c__4406__auto___51591);
var G__51595 = (0);
seq__51528_51574 = G__51592;
chunk__51529_51575 = G__51593;
count__51530_51576 = G__51594;
i__51531_51577 = G__51595;
continue;
}
} else
{var map__51533_51596 = cljs.core.first(seq__51528_51590__$1);var map__51533_51597__$1 = ((cljs.core.seq_QMARK_(map__51533_51596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51533_51596):map__51533_51596);var paths_51598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51533_51597__$1,cljs.core.constant$keyword$1255);var path_51599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51533_51597__$1,cljs.core.constant$keyword$1217);var target_51600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51533_51597__$1,cljs.core.constant$keyword$1252);var f_51601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51533_51597__$1,cljs.core.constant$keyword$1313);var name_51602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51533_51597__$1,cljs.core.constant$keyword$1274);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_51602,f_51601,target_51600,paths_51598], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_51602,f_51601,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1252,target_51600,cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1217,path_51599,cljs.core.constant$keyword$1255,paths_51598], 0));
{
var G__51603 = cljs.core.next(seq__51528_51590__$1);
var G__51604 = null;
var G__51605 = (0);
var G__51606 = (0);
seq__51528_51574 = G__51603;
chunk__51529_51575 = G__51604;
count__51530_51576 = G__51605;
i__51531_51577 = G__51606;
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
return (function (state_51549){var state_val_51550 = (state_51549[(1)]);if((state_val_51550 === (7)))
{var inst_51538 = (state_51549[(2)]);var inst_51539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51538,(0),null);var inst_51540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51538,(1),null);var inst_51541 = clustermap.app.handle_event(self__.app_service,this$__$1,inst_51539,inst_51540);var state_51549__$1 = (function (){var statearr_51551 = state_51549;(statearr_51551[(7)] = inst_51541);
return statearr_51551;
})();var statearr_51552_51607 = state_51549__$1;(statearr_51552_51607[(2)] = null);
(statearr_51552_51607[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51550 === (6)))
{var inst_51545 = (state_51549[(2)]);var state_51549__$1 = state_51549;var statearr_51553_51608 = state_51549__$1;(statearr_51553_51608[(2)] = inst_51545);
(statearr_51553_51608[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51550 === (5)))
{var state_51549__$1 = state_51549;var statearr_51554_51609 = state_51549__$1;(statearr_51554_51609[(2)] = null);
(statearr_51554_51609[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_51550 === (4)))
{var state_51549__$1 = state_51549;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51549__$1,(7),self__.comm);
} else
{if((state_val_51550 === (3)))
{var inst_51547 = (state_51549[(2)]);var state_51549__$1 = state_51549;return cljs.core.async.impl.ioc_helpers.return_chan(state_51549__$1,inst_51547);
} else
{if((state_val_51550 === (2)))
{var state_51549__$1 = state_51549;var statearr_51555_51610 = state_51549__$1;(statearr_51555_51610[(1)] = (4));

return cljs.core.constant$keyword$1120;
} else
{if((state_val_51550 === (1)))
{var state_51549__$1 = state_51549;var statearr_51557_51611 = state_51549__$1;(statearr_51557_51611[(2)] = null);
(statearr_51557_51611[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_51561 = [null,null,null,null,null,null,null,null];(statearr_51561[(0)] = state_machine__5805__auto__);
(statearr_51561[(1)] = (1));
return statearr_51561;
});
var state_machine__5805__auto____1 = (function (state_51549){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_51549);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e51562){if((e51562 instanceof Object))
{var ex__5808__auto__ = e51562;var statearr_51563_51612 = state_51549;(statearr_51563_51612[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51549);
return cljs.core.constant$keyword$1120;
} else
{throw e51562;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__51613 = state_51549;
state_51549 = G__51613;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_51549){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_51549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state))
})();var state__5821__auto__ = (function (){var statearr_51564 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_51564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_51564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,shared,this$__$1,comm,state))
);
return c__5819__auto__;
});})(comm,state))
;
clustermap.app.t51522.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_();
var seq__51565 = cljs.core.seq(self__.component_defs);var chunk__51566 = null;var count__51567 = (0);var i__51568 = (0);while(true){
if((i__51568 < count__51567))
{var map__51569 = chunk__51566.cljs$core$IIndexed$_nth$arity$2(null,i__51568);var map__51569__$1 = ((cljs.core.seq_QMARK_(map__51569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51569):map__51569);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51569__$1,cljs.core.constant$keyword$1252);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__51614 = seq__51565;
var G__51615 = chunk__51566;
var G__51616 = count__51567;
var G__51617 = (i__51568 + (1));
seq__51565 = G__51614;
chunk__51566 = G__51615;
count__51567 = G__51616;
i__51568 = G__51617;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__51565);if(temp__4126__auto__)
{var seq__51565__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__51565__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__51565__$1);{
var G__51618 = cljs.core.chunk_rest(seq__51565__$1);
var G__51619 = c__4406__auto__;
var G__51620 = cljs.core.count(c__4406__auto__);
var G__51621 = (0);
seq__51565 = G__51618;
chunk__51566 = G__51619;
count__51567 = G__51620;
i__51568 = G__51621;
continue;
}
} else
{var map__51570 = cljs.core.first(seq__51565__$1);var map__51570__$1 = ((cljs.core.seq_QMARK_(map__51570))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51570):map__51570);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,cljs.core.constant$keyword$1252);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__51622 = cljs.core.next(seq__51565__$1);
var G__51623 = null;
var G__51624 = (0);
var G__51625 = (0);
seq__51565 = G__51622;
chunk__51566 = G__51623;
count__51567 = G__51624;
i__51568 = G__51625;
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
clustermap.app.t51522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_51524){var self__ = this;
var _51524__$1 = this;return self__.meta51523;
});})(comm,state))
;
clustermap.app.t51522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_51524,meta51523__$1){var self__ = this;
var _51524__$1 = this;return (new clustermap.app.t51522(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta51523__$1));
});})(comm,state))
;
clustermap.app.__GT_t51522 = ((function (comm,state){
return (function __GT_t51522(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta51523){return (new clustermap.app.t51522(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta51523));
});})(comm,state))
;
}
return (new clustermap.app.t51522(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop(a);
} else
{}
var new_app = clustermap.app.create_app_instance(initial_state__$1,components__$1,app_service__$1);new_app.clustermap$app$IAppControl$start$arity$1(null);
return new_app;
}),initial_state,components,cljs.core.array_seq([app_service], 0));
});
