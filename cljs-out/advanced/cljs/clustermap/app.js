// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('purnam.cljs');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('purnam.cljs');
goog.require('purnam.cljs');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_sites = (function load_sites(){var c__5861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_30001){var state_val_30002 = (state_30001[1]);if((state_val_30002 === 2))
{var inst_29993 = (state_30001[2]);var inst_29994 = clustermap.app.set_state(cljs.core.constant$keyword$106,inst_29993);var inst_29995 = cljs.core.deref(clustermap.app.state);var inst_29996 = cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(inst_29995);var inst_29997 = cljs.core.deref(clustermap.app.state);var inst_29998 = cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(inst_29997);var inst_29999 = clustermap.map.display_sites(inst_29996,inst_29998);var state_30001__$1 = (function (){var statearr_30003 = state_30001;(statearr_30003[7] = inst_29994);
return statearr_30003;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_30001__$1,inst_29999);
} else
{if((state_val_30002 === 1))
{var inst_29991 = clustermap.api.portfolio_company_sites();var state_30001__$1 = state_30001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30001__$1,2,inst_29991);
} else
{return null;
}
}
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_30007 = (new Array(8));(statearr_30007[0] = state_machine__5792__auto__);
(statearr_30007[1] = 1);
return statearr_30007;
});
var state_machine__5792__auto____1 = (function (state_30001){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_30001);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e30008){if((e30008 instanceof Object))
{var ex__5795__auto__ = e30008;var statearr_30009_30011 = state_30001;(statearr_30009_30011[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_30001);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e30008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$77))
{{
var G__30012 = state_30001;
state_30001 = G__30012;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_30001){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_30001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_30010 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_30010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_30010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return c__5861__auto__;
});
clustermap.app.init = (function init(){clustermap.app.set_state(cljs.core.constant$keyword$107,clustermap.map.create_map());
return clustermap.app.load_sites();
});
