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
clustermap.app.IAppService = (function (){var obj80668 = {};return obj80668;
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
clustermap.app.IAppControl = (function (){var obj80670 = {};return obj80670;
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
clustermap.app.IApp = (function (){var obj80672 = {};return obj80672;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var state = cljs.core.atom.call(null,initial_state_value);if(typeof clustermap.app.t80719 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t80719 = (function (state,comm,app_service,component_defs,initial_state_value,create_app_instance,meta80720){
this.state = state;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta80720 = meta80720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t80719.cljs$lang$type = true;
clustermap.app.t80719.cljs$lang$ctorStr = "clustermap.app/t80719";
clustermap.app.t80719.cljs$lang$ctorPrWriter = ((function (comm,state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.app/t80719");
});})(comm,state))
;
clustermap.app.t80719.prototype.clustermap$app$IApp$ = true;
clustermap.app.t80719.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,state))
;
clustermap.app.t80719.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,state))
;
clustermap.app.t80719.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,state))
;
clustermap.app.t80719.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t80719.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,state){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null));goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,this$__$1,comm,state){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,this$__$1,comm,state))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__80722_80765 = cljs.core.seq.call(null,self__.component_defs);var chunk__80723_80766 = null;var count__80724_80767 = (0);var i__80725_80768 = (0);while(true){
if((i__80725_80768 < count__80724_80767))
{var map__80726_80769 = cljs.core._nth.call(null,chunk__80723_80766,i__80725_80768);var map__80726_80770__$1 = ((cljs.core.seq_QMARK_.call(null,map__80726_80769))?cljs.core.apply.call(null,cljs.core.hash_map,map__80726_80769):map__80726_80769);var paths_80771 = cljs.core.get.call(null,map__80726_80770__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_80772 = cljs.core.get.call(null,map__80726_80770__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_80773 = cljs.core.get.call(null,map__80726_80770__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_80774 = cljs.core.get.call(null,map__80726_80770__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_80775 = cljs.core.get.call(null,map__80726_80770__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_80775,f_80774,target_80773,paths_80771], null)));
clustermap.components.mount.mount.call(null,name_80775,f_80774,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_80773,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_80772,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_80771);
{
var G__80776 = seq__80722_80765;
var G__80777 = chunk__80723_80766;
var G__80778 = count__80724_80767;
var G__80779 = (i__80725_80768 + (1));
seq__80722_80765 = G__80776;
chunk__80723_80766 = G__80777;
count__80724_80767 = G__80778;
i__80725_80768 = G__80779;
continue;
}
} else
{var temp__4126__auto___80780 = cljs.core.seq.call(null,seq__80722_80765);if(temp__4126__auto___80780)
{var seq__80722_80781__$1 = temp__4126__auto___80780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80722_80781__$1))
{var c__4406__auto___80782 = cljs.core.chunk_first.call(null,seq__80722_80781__$1);{
var G__80783 = cljs.core.chunk_rest.call(null,seq__80722_80781__$1);
var G__80784 = c__4406__auto___80782;
var G__80785 = cljs.core.count.call(null,c__4406__auto___80782);
var G__80786 = (0);
seq__80722_80765 = G__80783;
chunk__80723_80766 = G__80784;
count__80724_80767 = G__80785;
i__80725_80768 = G__80786;
continue;
}
} else
{var map__80727_80787 = cljs.core.first.call(null,seq__80722_80781__$1);var map__80727_80788__$1 = ((cljs.core.seq_QMARK_.call(null,map__80727_80787))?cljs.core.apply.call(null,cljs.core.hash_map,map__80727_80787):map__80727_80787);var paths_80789 = cljs.core.get.call(null,map__80727_80788__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_80790 = cljs.core.get.call(null,map__80727_80788__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_80791 = cljs.core.get.call(null,map__80727_80788__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_80792 = cljs.core.get.call(null,map__80727_80788__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_80793 = cljs.core.get.call(null,map__80727_80788__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_80793,f_80792,target_80791,paths_80789], null)));
clustermap.components.mount.mount.call(null,name_80793,f_80792,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_80791,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_80790,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_80789);
{
var G__80794 = cljs.core.next.call(null,seq__80722_80781__$1);
var G__80795 = null;
var G__80796 = (0);
var G__80797 = (0);
seq__80722_80765 = G__80794;
chunk__80723_80766 = G__80795;
count__80724_80767 = G__80796;
i__80725_80768 = G__80797;
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
return (function (state_80743){var state_val_80744 = (state_80743[(1)]);if((state_val_80744 === (7)))
{var inst_80732 = (state_80743[(2)]);var inst_80733 = cljs.core.nth.call(null,inst_80732,(0),null);var inst_80734 = cljs.core.nth.call(null,inst_80732,(1),null);var inst_80735 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_80733,inst_80734);var state_80743__$1 = (function (){var statearr_80745 = state_80743;(statearr_80745[(7)] = inst_80735);
return statearr_80745;
})();var statearr_80746_80798 = state_80743__$1;(statearr_80746_80798[(2)] = null);
(statearr_80746_80798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80744 === (6)))
{var inst_80739 = (state_80743[(2)]);var state_80743__$1 = state_80743;var statearr_80747_80799 = state_80743__$1;(statearr_80747_80799[(2)] = inst_80739);
(statearr_80747_80799[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80744 === (5)))
{var state_80743__$1 = state_80743;var statearr_80748_80800 = state_80743__$1;(statearr_80748_80800[(2)] = null);
(statearr_80748_80800[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80744 === (4)))
{var state_80743__$1 = state_80743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80743__$1,(7),self__.comm);
} else
{if((state_val_80744 === (3)))
{var inst_80741 = (state_80743[(2)]);var state_80743__$1 = state_80743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80743__$1,inst_80741);
} else
{if((state_val_80744 === (2)))
{var state_80743__$1 = state_80743;var statearr_80749_80801 = state_80743__$1;(statearr_80749_80801[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80744 === (1)))
{var state_80743__$1 = state_80743;var statearr_80751_80802 = state_80743__$1;(statearr_80751_80802[(2)] = null);
(statearr_80751_80802[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_80755 = [null,null,null,null,null,null,null,null];(statearr_80755[(0)] = state_machine__5805__auto__);
(statearr_80755[(1)] = (1));
return statearr_80755;
});
var state_machine__5805__auto____1 = (function (state_80743){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_80743);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e80756){if((e80756 instanceof Object))
{var ex__5808__auto__ = e80756;var statearr_80757_80803 = state_80743;(statearr_80757_80803[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e80756;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__80804 = state_80743;
state_80743 = G__80804;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_80743){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_80743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,shared,this$__$1,comm,state))
})();var state__5821__auto__ = (function (){var statearr_80758 = f__5820__auto__.call(null);(statearr_80758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_80758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,shared,this$__$1,comm,state))
);
return c__5819__auto__;
});})(comm,state))
;
clustermap.app.t80719.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,state){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_.call(null);
var seq__80759 = cljs.core.seq.call(null,self__.component_defs);var chunk__80760 = null;var count__80761 = (0);var i__80762 = (0);while(true){
if((i__80762 < count__80761))
{var map__80763 = cljs.core._nth.call(null,chunk__80760,i__80762);var map__80763__$1 = ((cljs.core.seq_QMARK_.call(null,map__80763))?cljs.core.apply.call(null,cljs.core.hash_map,map__80763):map__80763);var target = cljs.core.get.call(null,map__80763__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__80805 = seq__80759;
var G__80806 = chunk__80760;
var G__80807 = count__80761;
var G__80808 = (i__80762 + (1));
seq__80759 = G__80805;
chunk__80760 = G__80806;
count__80761 = G__80807;
i__80762 = G__80808;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__80759);if(temp__4126__auto__)
{var seq__80759__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80759__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__80759__$1);{
var G__80809 = cljs.core.chunk_rest.call(null,seq__80759__$1);
var G__80810 = c__4406__auto__;
var G__80811 = cljs.core.count.call(null,c__4406__auto__);
var G__80812 = (0);
seq__80759 = G__80809;
chunk__80760 = G__80810;
count__80761 = G__80811;
i__80762 = G__80812;
continue;
}
} else
{var map__80764 = cljs.core.first.call(null,seq__80759__$1);var map__80764__$1 = ((cljs.core.seq_QMARK_.call(null,map__80764))?cljs.core.apply.call(null,cljs.core.hash_map,map__80764):map__80764);var target = cljs.core.get.call(null,map__80764__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target);
{
var G__80813 = cljs.core.next.call(null,seq__80759__$1);
var G__80814 = null;
var G__80815 = (0);
var G__80816 = (0);
seq__80759 = G__80813;
chunk__80760 = G__80814;
count__80761 = G__80815;
i__80762 = G__80816;
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
clustermap.app.t80719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state){
return (function (_80721){var self__ = this;
var _80721__$1 = this;return self__.meta80720;
});})(comm,state))
;
clustermap.app.t80719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state){
return (function (_80721,meta80720__$1){var self__ = this;
var _80721__$1 = this;return (new clustermap.app.t80719(self__.state,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta80720__$1));
});})(comm,state))
;
clustermap.app.__GT_t80719 = ((function (comm,state){
return (function __GT_t80719(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta80720){return (new clustermap.app.t80719(state__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta80720));
});})(comm,state))
;
}
return (new clustermap.app.t80719(state,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
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