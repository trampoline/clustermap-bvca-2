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
clustermap.app.IAppService = (function (){var obj56072 = {};return obj56072;
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
clustermap.app.IAppControl = (function (){var obj56074 = {};return obj56074;
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
clustermap.app.IApp = (function (){var obj56076 = {};return obj56076;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t56123 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t56123 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta56124){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta56124 = meta56124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t56123.cljs$lang$type = true;
clustermap.app.t56123.cljs$lang$ctorStr = "clustermap.app/t56123";
clustermap.app.t56123.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.app/t56123");
});})(comm,state))
;
clustermap.app.t56123.prototype.clustermap$app$IApp$ = true;
clustermap.app.t56123.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t56123.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t56123.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t56123.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t56123.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__56126_56169 = cljs.core.seq.call(null,self__.component_defs);var chunk__56127_56170 = null;var count__56128_56171 = (0);var i__56129_56172 = (0);while(true){
if((i__56129_56172 < count__56128_56171))
{var map__56130_56173 = cljs.core._nth.call(null,chunk__56127_56170,i__56129_56172);var map__56130_56174__$1 = ((cljs.core.seq_QMARK_.call(null,map__56130_56173))?cljs.core.apply.call(null,cljs.core.hash_map,map__56130_56173):map__56130_56173);var paths_56175 = cljs.core.get.call(null,map__56130_56174__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_56176 = cljs.core.get.call(null,map__56130_56174__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_56177 = cljs.core.get.call(null,map__56130_56174__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_56178 = cljs.core.get.call(null,map__56130_56174__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_56179 = cljs.core.get.call(null,map__56130_56174__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_56179,f_56178,target_56177,paths_56175], null)));
clustermap.components.mount.mount.call(null,name_56179,f_56178,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_56177,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_56176,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_56175);
{
var G__56180 = seq__56126_56169;
var G__56181 = chunk__56127_56170;
var G__56182 = count__56128_56171;
var G__56183 = (i__56129_56172 + (1));
seq__56126_56169 = G__56180;
chunk__56127_56170 = G__56181;
count__56128_56171 = G__56182;
i__56129_56172 = G__56183;
continue;
}
} else
{var temp__4126__auto___56184 = cljs.core.seq.call(null,seq__56126_56169);if(temp__4126__auto___56184)
{var seq__56126_56185__$1 = temp__4126__auto___56184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56126_56185__$1))
{var c__4314__auto___56186 = cljs.core.chunk_first.call(null,seq__56126_56185__$1);{
var G__56187 = cljs.core.chunk_rest.call(null,seq__56126_56185__$1);
var G__56188 = c__4314__auto___56186;
var G__56189 = cljs.core.count.call(null,c__4314__auto___56186);
var G__56190 = (0);
seq__56126_56169 = G__56187;
chunk__56127_56170 = G__56188;
count__56128_56171 = G__56189;
i__56129_56172 = G__56190;
continue;
}
} else
{var map__56131_56191 = cljs.core.first.call(null,seq__56126_56185__$1);var map__56131_56192__$1 = ((cljs.core.seq_QMARK_.call(null,map__56131_56191))?cljs.core.apply.call(null,cljs.core.hash_map,map__56131_56191):map__56131_56191);var paths_56193 = cljs.core.get.call(null,map__56131_56192__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_56194 = cljs.core.get.call(null,map__56131_56192__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_56195 = cljs.core.get.call(null,map__56131_56192__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_56196 = cljs.core.get.call(null,map__56131_56192__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_56197 = cljs.core.get.call(null,map__56131_56192__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_56197,f_56196,target_56195,paths_56193], null)));
clustermap.components.mount.mount.call(null,name_56197,f_56196,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_56195,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_56194,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_56193);
{
var G__56198 = cljs.core.next.call(null,seq__56126_56185__$1);
var G__56199 = null;
var G__56200 = (0);
var G__56201 = (0);
seq__56126_56169 = G__56198;
chunk__56127_56170 = G__56199;
count__56128_56171 = G__56200;
i__56129_56172 = G__56201;
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
return (function (state_56147){var state_val_56148 = (state_56147[(1)]);if((state_val_56148 === (7)))
{var inst_56136 = (state_56147[(2)]);var inst_56137 = cljs.core.nth.call(null,inst_56136,(0),null);var inst_56138 = cljs.core.nth.call(null,inst_56136,(1),null);var inst_56139 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_56137,inst_56138);var state_56147__$1 = (function (){var statearr_56149 = state_56147;(statearr_56149[(7)] = inst_56139);
return statearr_56149;
})();var statearr_56150_56202 = state_56147__$1;(statearr_56150_56202[(2)] = null);
(statearr_56150_56202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (6)))
{var inst_56143 = (state_56147[(2)]);var state_56147__$1 = state_56147;var statearr_56151_56203 = state_56147__$1;(statearr_56151_56203[(2)] = inst_56143);
(statearr_56151_56203[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (5)))
{var state_56147__$1 = state_56147;var statearr_56152_56204 = state_56147__$1;(statearr_56152_56204[(2)] = null);
(statearr_56152_56204[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (4)))
{var state_56147__$1 = state_56147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56147__$1,(7),self__.comm);
} else
{if((state_val_56148 === (3)))
{var inst_56145 = (state_56147[(2)]);var state_56147__$1 = state_56147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56147__$1,inst_56145);
} else
{if((state_val_56148 === (2)))
{var state_56147__$1 = state_56147;var statearr_56153_56205 = state_56147__$1;(statearr_56153_56205[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56148 === (1)))
{var state_56147__$1 = state_56147;var statearr_56155_56206 = state_56147__$1;(statearr_56155_56206[(2)] = null);
(statearr_56155_56206[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_56159 = [null,null,null,null,null,null,null,null];(statearr_56159[(0)] = state_machine__5694__auto__);
(statearr_56159[(1)] = (1));
return statearr_56159;
});
var state_machine__5694__auto____1 = (function (state_56147){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56147);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56160){if((e56160 instanceof Object))
{var ex__5697__auto__ = e56160;var statearr_56161_56207 = state_56147;(statearr_56161_56207[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56160;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56208 = state_56147;
state_56147 = G__56208;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56147){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,shared,this$__$1,comm,state))
})();var state__5710__auto__ = (function (){var statearr_56162 = f__5709__auto__.call(null);(statearr_56162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,shared,this$__$1,comm,state))
);
return c__5708__auto__;
});})(comm,state))
;
clustermap.app.t56123.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__56163 = cljs.core.seq.call(null,self__.component_defs);var chunk__56164 = null;var count__56165 = (0);var i__56166 = (0);while(true){
if((i__56166 < count__56165))
{var map__56167 = cljs.core._nth.call(null,chunk__56164,i__56166);var map__56167__$1 = ((cljs.core.seq_QMARK_.call(null,map__56167))?cljs.core.apply.call(null,cljs.core.hash_map,map__56167):map__56167);var target = cljs.core.get.call(null,map__56167__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__56209 = seq__56163;
var G__56210 = chunk__56164;
var G__56211 = count__56165;
var G__56212 = (i__56166 + (1));
seq__56163 = G__56209;
chunk__56164 = G__56210;
count__56165 = G__56211;
i__56166 = G__56212;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__56163);if(temp__4126__auto__)
{var seq__56163__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56163__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__56163__$1);{
var G__56213 = cljs.core.chunk_rest.call(null,seq__56163__$1);
var G__56214 = c__4314__auto__;
var G__56215 = cljs.core.count.call(null,c__4314__auto__);
var G__56216 = (0);
seq__56163 = G__56213;
chunk__56164 = G__56214;
count__56165 = G__56215;
i__56166 = G__56216;
continue;
}
} else
{var map__56168 = cljs.core.first.call(null,seq__56163__$1);var map__56168__$1 = ((cljs.core.seq_QMARK_.call(null,map__56168))?cljs.core.apply.call(null,cljs.core.hash_map,map__56168):map__56168);var target = cljs.core.get.call(null,map__56168__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__56217 = cljs.core.next.call(null,seq__56163__$1);
var G__56218 = null;
var G__56219 = (0);
var G__56220 = (0);
seq__56163 = G__56217;
chunk__56164 = G__56218;
count__56165 = G__56219;
i__56166 = G__56220;
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
clustermap.app.t56123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_56125){var self__ = this;
var _56125__$1 = this;return self__.meta56124;
});})(comm,state))
;
clustermap.app.t56123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_56125,meta56124__$1){var self__ = this;
var _56125__$1 = this;return (new clustermap.app.t56123(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta56124__$1));
});})(comm,state))
;
clustermap.app.__GT_t56123 = ((function (comm,state){
return (function __GT_t56123(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta56124){return (new clustermap.app.t56123(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta56124));
});})(comm,state))
;
}
return (new clustermap.app.t56123(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});

//# sourceMappingURL=app.js.map