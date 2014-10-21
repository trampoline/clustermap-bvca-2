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
clustermap.app.IAppService = (function (){var obj11723 = {};return obj11723;
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
clustermap.app.IAppControl = (function (){var obj11725 = {};return obj11725;
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
clustermap.app.IApp = (function (){var obj11727 = {};return obj11727;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t11774 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t11774 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta11775){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta11775 = meta11775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t11774.cljs$lang$type = true;
clustermap.app.t11774.cljs$lang$ctorStr = "clustermap.app/t11774";
clustermap.app.t11774.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.app/t11774");
});})(comm,state))
;
clustermap.app.t11774.prototype.clustermap$app$IApp$ = true;
clustermap.app.t11774.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t11774.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t11774.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t11774.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t11774.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__11777_11820 = cljs.core.seq.call(null,self__.component_defs);var chunk__11778_11821 = null;var count__11779_11822 = (0);var i__11780_11823 = (0);while(true){
if((i__11780_11823 < count__11779_11822))
{var map__11781_11824 = cljs.core._nth.call(null,chunk__11778_11821,i__11780_11823);var map__11781_11825__$1 = ((cljs.core.seq_QMARK_.call(null,map__11781_11824))?cljs.core.apply.call(null,cljs.core.hash_map,map__11781_11824):map__11781_11824);var paths_11826 = cljs.core.get.call(null,map__11781_11825__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_11827 = cljs.core.get.call(null,map__11781_11825__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_11828 = cljs.core.get.call(null,map__11781_11825__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_11829 = cljs.core.get.call(null,map__11781_11825__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_11830 = cljs.core.get.call(null,map__11781_11825__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_11830,f_11829,target_11828,paths_11826], null)));
clustermap.components.mount.mount.call(null,name_11830,f_11829,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_11828,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_11827,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_11826);
{
var G__11831 = seq__11777_11820;
var G__11832 = chunk__11778_11821;
var G__11833 = count__11779_11822;
var G__11834 = (i__11780_11823 + (1));
seq__11777_11820 = G__11831;
chunk__11778_11821 = G__11832;
count__11779_11822 = G__11833;
i__11780_11823 = G__11834;
continue;
}
} else
{var temp__4126__auto___11835 = cljs.core.seq.call(null,seq__11777_11820);if(temp__4126__auto___11835)
{var seq__11777_11836__$1 = temp__4126__auto___11835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11777_11836__$1))
{var c__4406__auto___11837 = cljs.core.chunk_first.call(null,seq__11777_11836__$1);{
var G__11838 = cljs.core.chunk_rest.call(null,seq__11777_11836__$1);
var G__11839 = c__4406__auto___11837;
var G__11840 = cljs.core.count.call(null,c__4406__auto___11837);
var G__11841 = (0);
seq__11777_11820 = G__11838;
chunk__11778_11821 = G__11839;
count__11779_11822 = G__11840;
i__11780_11823 = G__11841;
continue;
}
} else
{var map__11782_11842 = cljs.core.first.call(null,seq__11777_11836__$1);var map__11782_11843__$1 = ((cljs.core.seq_QMARK_.call(null,map__11782_11842))?cljs.core.apply.call(null,cljs.core.hash_map,map__11782_11842):map__11782_11842);var paths_11844 = cljs.core.get.call(null,map__11782_11843__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_11845 = cljs.core.get.call(null,map__11782_11843__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_11846 = cljs.core.get.call(null,map__11782_11843__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_11847 = cljs.core.get.call(null,map__11782_11843__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_11848 = cljs.core.get.call(null,map__11782_11843__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_11848,f_11847,target_11846,paths_11844], null)));
clustermap.components.mount.mount.call(null,name_11848,f_11847,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_11846,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_11845,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_11844);
{
var G__11849 = cljs.core.next.call(null,seq__11777_11836__$1);
var G__11850 = null;
var G__11851 = (0);
var G__11852 = (0);
seq__11777_11820 = G__11849;
chunk__11778_11821 = G__11850;
count__11779_11822 = G__11851;
i__11780_11823 = G__11852;
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
return (function (state_11798){var state_val_11799 = (state_11798[(1)]);if((state_val_11799 === (7)))
{var inst_11787 = (state_11798[(2)]);var inst_11788 = cljs.core.nth.call(null,inst_11787,(0),null);var inst_11789 = cljs.core.nth.call(null,inst_11787,(1),null);var inst_11790 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_11788,inst_11789);var state_11798__$1 = (function (){var statearr_11800 = state_11798;(statearr_11800[(7)] = inst_11790);
return statearr_11800;
})();var statearr_11801_11853 = state_11798__$1;(statearr_11801_11853[(2)] = null);
(statearr_11801_11853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11799 === (6)))
{var inst_11794 = (state_11798[(2)]);var state_11798__$1 = state_11798;var statearr_11802_11854 = state_11798__$1;(statearr_11802_11854[(2)] = inst_11794);
(statearr_11802_11854[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11799 === (5)))
{var state_11798__$1 = state_11798;var statearr_11803_11855 = state_11798__$1;(statearr_11803_11855[(2)] = null);
(statearr_11803_11855[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11799 === (4)))
{var state_11798__$1 = state_11798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11798__$1,(7),self__.comm);
} else
{if((state_val_11799 === (3)))
{var inst_11796 = (state_11798[(2)]);var state_11798__$1 = state_11798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11798__$1,inst_11796);
} else
{if((state_val_11799 === (2)))
{var state_11798__$1 = state_11798;var statearr_11804_11856 = state_11798__$1;(statearr_11804_11856[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11799 === (1)))
{var state_11798__$1 = state_11798;var statearr_11806_11857 = state_11798__$1;(statearr_11806_11857[(2)] = null);
(statearr_11806_11857[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_11810 = [null,null,null,null,null,null,null,null];(statearr_11810[(0)] = state_machine__5805__auto__);
(statearr_11810[(1)] = (1));
return statearr_11810;
});
var state_machine__5805__auto____1 = (function (state_11798){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_11798);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e11811){if((e11811 instanceof Object))
{var ex__5808__auto__ = e11811;var statearr_11812_11858 = state_11798;(statearr_11812_11858[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11859 = state_11798;
state_11798 = G__11859;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_11798){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_11798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state))
})();var state__5821__auto__ = (function (){var statearr_11813 = f__5820__auto__.call(null);(statearr_11813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_11813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,shared,this$__$1,comm,state))
);
return c__5819__auto__;
});})(comm,state))
;
clustermap.app.t11774.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__11814 = cljs.core.seq.call(null,self__.component_defs);var chunk__11815 = null;var count__11816 = (0);var i__11817 = (0);while(true){
if((i__11817 < count__11816))
{var map__11818 = cljs.core._nth.call(null,chunk__11815,i__11817);var map__11818__$1 = ((cljs.core.seq_QMARK_.call(null,map__11818))?cljs.core.apply.call(null,cljs.core.hash_map,map__11818):map__11818);var target = cljs.core.get.call(null,map__11818__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__11860 = seq__11814;
var G__11861 = chunk__11815;
var G__11862 = count__11816;
var G__11863 = (i__11817 + (1));
seq__11814 = G__11860;
chunk__11815 = G__11861;
count__11816 = G__11862;
i__11817 = G__11863;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11814);if(temp__4126__auto__)
{var seq__11814__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11814__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__11814__$1);{
var G__11864 = cljs.core.chunk_rest.call(null,seq__11814__$1);
var G__11865 = c__4406__auto__;
var G__11866 = cljs.core.count.call(null,c__4406__auto__);
var G__11867 = (0);
seq__11814 = G__11864;
chunk__11815 = G__11865;
count__11816 = G__11866;
i__11817 = G__11867;
continue;
}
} else
{var map__11819 = cljs.core.first.call(null,seq__11814__$1);var map__11819__$1 = ((cljs.core.seq_QMARK_.call(null,map__11819))?cljs.core.apply.call(null,cljs.core.hash_map,map__11819):map__11819);var target = cljs.core.get.call(null,map__11819__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__11868 = cljs.core.next.call(null,seq__11814__$1);
var G__11869 = null;
var G__11870 = (0);
var G__11871 = (0);
seq__11814 = G__11868;
chunk__11815 = G__11869;
count__11816 = G__11870;
i__11817 = G__11871;
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
clustermap.app.t11774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_11776){var self__ = this;
var _11776__$1 = this;return self__.meta11775;
});})(comm,state))
;
clustermap.app.t11774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_11776,meta11775__$1){var self__ = this;
var _11776__$1 = this;return (new clustermap.app.t11774(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta11775__$1));
});})(comm,state))
;
clustermap.app.__GT_t11774 = ((function (comm,state){
return (function __GT_t11774(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta11775){return (new clustermap.app.t11774(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta11775));
});})(comm,state))
;
}
return (new clustermap.app.t11774(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
