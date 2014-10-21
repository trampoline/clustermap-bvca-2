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
clustermap.app.IAppService = (function (){var obj76702 = {};return obj76702;
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
clustermap.app.IAppControl = (function (){var obj76704 = {};return obj76704;
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
clustermap.app.IApp = (function (){var obj76706 = {};return obj76706;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t76753 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t76753 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta76754){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta76754 = meta76754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t76753.cljs$lang$type = true;
clustermap.app.t76753.cljs$lang$ctorStr = "clustermap.app/t76753";
clustermap.app.t76753.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.app/t76753");
});})(comm,state))
;
clustermap.app.t76753.prototype.clustermap$app$IApp$ = true;
clustermap.app.t76753.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t76753.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t76753.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t76753.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t76753.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__76756_76799 = cljs.core.seq.call(null,self__.component_defs);var chunk__76757_76800 = null;var count__76758_76801 = (0);var i__76759_76802 = (0);while(true){
if((i__76759_76802 < count__76758_76801))
{var map__76760_76803 = cljs.core._nth.call(null,chunk__76757_76800,i__76759_76802);var map__76760_76804__$1 = ((cljs.core.seq_QMARK_.call(null,map__76760_76803))?cljs.core.apply.call(null,cljs.core.hash_map,map__76760_76803):map__76760_76803);var paths_76805 = cljs.core.get.call(null,map__76760_76804__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_76806 = cljs.core.get.call(null,map__76760_76804__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_76807 = cljs.core.get.call(null,map__76760_76804__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_76808 = cljs.core.get.call(null,map__76760_76804__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_76809 = cljs.core.get.call(null,map__76760_76804__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_76809,f_76808,target_76807,paths_76805], null)));
clustermap.components.mount.mount.call(null,name_76809,f_76808,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_76807,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_76806,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_76805);
{
var G__76810 = seq__76756_76799;
var G__76811 = chunk__76757_76800;
var G__76812 = count__76758_76801;
var G__76813 = (i__76759_76802 + (1));
seq__76756_76799 = G__76810;
chunk__76757_76800 = G__76811;
count__76758_76801 = G__76812;
i__76759_76802 = G__76813;
continue;
}
} else
{var temp__4126__auto___76814 = cljs.core.seq.call(null,seq__76756_76799);if(temp__4126__auto___76814)
{var seq__76756_76815__$1 = temp__4126__auto___76814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76756_76815__$1))
{var c__4406__auto___76816 = cljs.core.chunk_first.call(null,seq__76756_76815__$1);{
var G__76817 = cljs.core.chunk_rest.call(null,seq__76756_76815__$1);
var G__76818 = c__4406__auto___76816;
var G__76819 = cljs.core.count.call(null,c__4406__auto___76816);
var G__76820 = (0);
seq__76756_76799 = G__76817;
chunk__76757_76800 = G__76818;
count__76758_76801 = G__76819;
i__76759_76802 = G__76820;
continue;
}
} else
{var map__76761_76821 = cljs.core.first.call(null,seq__76756_76815__$1);var map__76761_76822__$1 = ((cljs.core.seq_QMARK_.call(null,map__76761_76821))?cljs.core.apply.call(null,cljs.core.hash_map,map__76761_76821):map__76761_76821);var paths_76823 = cljs.core.get.call(null,map__76761_76822__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_76824 = cljs.core.get.call(null,map__76761_76822__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_76825 = cljs.core.get.call(null,map__76761_76822__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_76826 = cljs.core.get.call(null,map__76761_76822__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_76827 = cljs.core.get.call(null,map__76761_76822__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_76827,f_76826,target_76825,paths_76823], null)));
clustermap.components.mount.mount.call(null,name_76827,f_76826,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_76825,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_76824,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_76823);
{
var G__76828 = cljs.core.next.call(null,seq__76756_76815__$1);
var G__76829 = null;
var G__76830 = (0);
var G__76831 = (0);
seq__76756_76799 = G__76828;
chunk__76757_76800 = G__76829;
count__76758_76801 = G__76830;
i__76759_76802 = G__76831;
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
return (function (state_76777){var state_val_76778 = (state_76777[(1)]);if((state_val_76778 === (7)))
{var inst_76766 = (state_76777[(2)]);var inst_76767 = cljs.core.nth.call(null,inst_76766,(0),null);var inst_76768 = cljs.core.nth.call(null,inst_76766,(1),null);var inst_76769 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_76767,inst_76768);var state_76777__$1 = (function (){var statearr_76779 = state_76777;(statearr_76779[(7)] = inst_76769);
return statearr_76779;
})();var statearr_76780_76832 = state_76777__$1;(statearr_76780_76832[(2)] = null);
(statearr_76780_76832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76778 === (6)))
{var inst_76773 = (state_76777[(2)]);var state_76777__$1 = state_76777;var statearr_76781_76833 = state_76777__$1;(statearr_76781_76833[(2)] = inst_76773);
(statearr_76781_76833[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76778 === (5)))
{var state_76777__$1 = state_76777;var statearr_76782_76834 = state_76777__$1;(statearr_76782_76834[(2)] = null);
(statearr_76782_76834[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76778 === (4)))
{var state_76777__$1 = state_76777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76777__$1,(7),self__.comm);
} else
{if((state_val_76778 === (3)))
{var inst_76775 = (state_76777[(2)]);var state_76777__$1 = state_76777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76777__$1,inst_76775);
} else
{if((state_val_76778 === (2)))
{var state_76777__$1 = state_76777;var statearr_76783_76835 = state_76777__$1;(statearr_76783_76835[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76778 === (1)))
{var state_76777__$1 = state_76777;var statearr_76785_76836 = state_76777__$1;(statearr_76785_76836[(2)] = null);
(statearr_76785_76836[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_76789 = [null,null,null,null,null,null,null,null];(statearr_76789[(0)] = state_machine__5805__auto__);
(statearr_76789[(1)] = (1));
return statearr_76789;
});
var state_machine__5805__auto____1 = (function (state_76777){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_76777);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e76790){if((e76790 instanceof Object))
{var ex__5808__auto__ = e76790;var statearr_76791_76837 = state_76777;(statearr_76791_76837[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76777);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76790;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76838 = state_76777;
state_76777 = G__76838;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_76777){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_76777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state))
})();var state__5821__auto__ = (function (){var statearr_76792 = f__5820__auto__.call(null);(statearr_76792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_76792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,shared,this$__$1,comm,state))
);
return c__5819__auto__;
});})(comm,state))
;
clustermap.app.t76753.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__76793 = cljs.core.seq.call(null,self__.component_defs);var chunk__76794 = null;var count__76795 = (0);var i__76796 = (0);while(true){
if((i__76796 < count__76795))
{var map__76797 = cljs.core._nth.call(null,chunk__76794,i__76796);var map__76797__$1 = ((cljs.core.seq_QMARK_.call(null,map__76797))?cljs.core.apply.call(null,cljs.core.hash_map,map__76797):map__76797);var target = cljs.core.get.call(null,map__76797__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__76839 = seq__76793;
var G__76840 = chunk__76794;
var G__76841 = count__76795;
var G__76842 = (i__76796 + (1));
seq__76793 = G__76839;
chunk__76794 = G__76840;
count__76795 = G__76841;
i__76796 = G__76842;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__76793);if(temp__4126__auto__)
{var seq__76793__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76793__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__76793__$1);{
var G__76843 = cljs.core.chunk_rest.call(null,seq__76793__$1);
var G__76844 = c__4406__auto__;
var G__76845 = cljs.core.count.call(null,c__4406__auto__);
var G__76846 = (0);
seq__76793 = G__76843;
chunk__76794 = G__76844;
count__76795 = G__76845;
i__76796 = G__76846;
continue;
}
} else
{var map__76798 = cljs.core.first.call(null,seq__76793__$1);var map__76798__$1 = ((cljs.core.seq_QMARK_.call(null,map__76798))?cljs.core.apply.call(null,cljs.core.hash_map,map__76798):map__76798);var target = cljs.core.get.call(null,map__76798__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__76847 = cljs.core.next.call(null,seq__76793__$1);
var G__76848 = null;
var G__76849 = (0);
var G__76850 = (0);
seq__76793 = G__76847;
chunk__76794 = G__76848;
count__76795 = G__76849;
i__76796 = G__76850;
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
clustermap.app.t76753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_76755){var self__ = this;
var _76755__$1 = this;return self__.meta76754;
});})(comm,state))
;
clustermap.app.t76753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_76755,meta76754__$1){var self__ = this;
var _76755__$1 = this;return (new clustermap.app.t76753(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta76754__$1));
});})(comm,state))
;
clustermap.app.__GT_t76753 = ((function (comm,state){
return (function __GT_t76753(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta76754){return (new clustermap.app.t76753(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta76754));
});})(comm,state))
;
}
return (new clustermap.app.t76753(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
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