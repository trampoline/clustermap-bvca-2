// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('clustermap.rtree');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.rtree');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$784,cljs.core.constant$keyword$838,cljs.core.constant$keyword$837,cljs.core.constant$keyword$768,cljs.core.constant$keyword$836,cljs.core.constant$keyword$767,cljs.core.constant$keyword$835,cljs.core.constant$keyword$754,cljs.core.constant$keyword$845,cljs.core.constant$keyword$846,cljs.core.constant$keyword$787,cljs.core.constant$keyword$847,cljs.core.constant$keyword$791,cljs.core.constant$keyword$763,cljs.core.constant$keyword$704,cljs.core.constant$keyword$786,cljs.core.constant$keyword$790],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,cljs.core.constant$keyword$801]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__34048){var vec__34049 = p__34048;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34049,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34049,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__34049,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__34049,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__34050){var map__34052 = p__34050;var map__34052__$1 = ((cljs.core.seq_QMARK_(map__34052))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34052):map__34052);var path_values = map__34052__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__34050 = null;if (arguments.length > 0) {
  p__34050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__34050);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__34053){
var p__34050 = cljs.core.seq(arglist__34053);
return set_state__delegate(p__34050);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_34075){var state_val_34076 = (state_34075[1]);if((state_val_34076 === 2))
{var inst_34071 = (state_34075[2]);var inst_34072 = clustermap.rtree.rtree_index(inst_34071);var inst_34073 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$836,inst_34071,cljs.core.constant$keyword$837,inst_34072], 0));var state_34075__$1 = state_34075;return cljs.core.async.impl.ioc_helpers.return_chan(state_34075__$1,inst_34073);
} else
{if((state_val_34076 === 1))
{var inst_34069 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$605,true], 0));var state_34075__$1 = state_34075;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34075__$1,2,inst_34069);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34080 = [null,null,null,null,null,null,null];(statearr_34080[0] = state_machine__5677__auto__);
(statearr_34080[1] = 1);
return statearr_34080;
});
var state_machine__5677__auto____1 = (function (state_34075){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34075);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34081){if((e34081 instanceof Object))
{var ex__5680__auto__ = e34081;var statearr_34082_34084 = state_34075;(statearr_34082_34084[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34075);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__34085 = state_34075;
state_34075 = G__34085;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34075){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_34083 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_34083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_34105){var state_val_34106 = (state_34105[1]);if((state_val_34106 === 2))
{var inst_34102 = (state_34105[2]);var inst_34103 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$768,inst_34102], 0));var state_34105__$1 = state_34105;return cljs.core.async.impl.ioc_helpers.return_chan(state_34105__$1,inst_34103);
} else
{if((state_val_34106 === 1))
{var inst_34100 = clustermap.api.investment_stats();var state_34105__$1 = state_34105;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34105__$1,2,inst_34100);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34110 = [null,null,null,null,null,null,null];(statearr_34110[0] = state_machine__5677__auto__);
(statearr_34110[1] = 1);
return statearr_34110;
});
var state_machine__5677__auto____1 = (function (state_34105){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34105);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34111){if((e34111 instanceof Object))
{var ex__5680__auto__ = e34111;var statearr_34112_34114 = state_34105;(statearr_34112_34114[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34105);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__34115 = state_34105;
state_34105 = G__34115;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34105){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_34113 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_34113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$791,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__34116,type){var vec__34118 = p__34116;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$763,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,type,cljs.core.constant$keyword$585,selection], null),cljs.core.constant$keyword$767,selection_investment_stats,cljs.core.constant$keyword$754,selection_investment_account_timelines,cljs.core.constant$keyword$787,selection_investment_aggs,cljs.core.constant$keyword$786,selection_investments,cljs.core.constant$keyword$835,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__34119){var vec__34124 = p__34119;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34124,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34124,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$784.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$784,selector], 0));
var pred__34125 = cljs.core._EQ_;var expr__34126 = type;if(cljs.core.truth_((pred__34125.cljs$core$IFn$_invoke$arity$2 ? pred__34125.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,expr__34126) : pred__34125.call(null,cljs.core.constant$keyword$700,expr__34126))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34125.cljs$core$IFn$_invoke$arity$2 ? pred__34125.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__34126) : pred__34125.call(null,cljs.core.constant$keyword$701,expr__34126))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34125.cljs$core$IFn$_invoke$arity$2 ? pred__34125.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$703,expr__34126) : pred__34125.call(null,cljs.core.constant$keyword$703,expr__34126))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$790,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3529__auto__ = type;if(cljs.core.truth_(and__3529__auto__))
{return id;
} else
{return and__3529__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3541__auto__ = view;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view))));
} else
{if(true)
{return clustermap.app.history.setToken((""));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__34131 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131,3,null);var type__$1 = ((((function (){var G__34132 = type;var G__34132__$1 = (((G__34132 == null))?null:clojure.string.trim(G__34132));var G__34132__$2 = (((G__34132__$1 == null))?null:cljs.core.count(G__34132__$1));return G__34132__$2;
})() > 0))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__34133 = id;var G__34133__$1 = (((G__34133 == null))?null:clojure.string.trim(G__34133));var G__34133__$2 = (((G__34133__$1 == null))?null:cljs.core.count(G__34133__$1));return G__34133__$2;
})() > 0))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$790,view,cljs.core.constant$keyword$614,type__$1,cljs.core.constant$keyword$616,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__34134){var vec__34137 = p__34134;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34137,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34137,1,null);var map__34138 = clustermap.app.parse_route();var map__34138__$1 = ((cljs.core.seq_QMARK_(map__34138))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34138):map__34138);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34138__$1,cljs.core.constant$keyword$790);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__34140 = clustermap.app.parse_route();var map__34140__$1 = ((cljs.core.seq_QMARK_(map__34140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34140):map__34140);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,cljs.core.constant$keyword$616);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,cljs.core.constant$keyword$614);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_34173){var state_val_34174 = (state_34173[1]);if((state_val_34174 === 2))
{var inst_34164 = (state_34173[7]);var inst_34170 = (state_34173[2]);var inst_34171 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$845,inst_34164,cljs.core.constant$keyword$787,inst_34170], 0));var state_34173__$1 = state_34173;return cljs.core.async.impl.ioc_helpers.return_chan(state_34173__$1,inst_34171);
} else
{if((state_val_34174 === 1))
{var inst_34164 = (state_34173[7]);var inst_34162 = cljs.core.deref(clustermap.app.state);var inst_34163 = cljs.core.constant$keyword$845.cljs$core$IFn$_invoke$arity$1(inst_34162);var inst_34164__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34163,table_view], 0));var inst_34165 = cljs.core.deref(clustermap.app.state);var inst_34166 = cljs.core.constant$keyword$784.cljs$core$IFn$_invoke$arity$1(inst_34165);var inst_34167 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34166,inst_34164__$1], 0));var inst_34168 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34167], 0));var state_34173__$1 = (function (){var statearr_34175 = state_34173;(statearr_34175[7] = inst_34164__$1);
return statearr_34175;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34173__$1,2,inst_34168);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34179 = [null,null,null,null,null,null,null,null];(statearr_34179[0] = state_machine__5677__auto__);
(statearr_34179[1] = 1);
return statearr_34179;
});
var state_machine__5677__auto____1 = (function (state_34173){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34173);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34180){if((e34180 instanceof Object))
{var ex__5680__auto__ = e34180;var statearr_34181_34183 = state_34173;(statearr_34181_34183[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34173);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__34184 = state_34173;
state_34173 = G__34184;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34173){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_34182 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_34182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_34217){var state_val_34218 = (state_34217[1]);if((state_val_34218 === 2))
{var inst_34208 = (state_34217[7]);var inst_34214 = (state_34217[2]);var inst_34215 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$847,inst_34208,cljs.core.constant$keyword$786,inst_34214], 0));var state_34217__$1 = state_34217;return cljs.core.async.impl.ioc_helpers.return_chan(state_34217__$1,inst_34215);
} else
{if((state_val_34218 === 1))
{var inst_34208 = (state_34217[7]);var inst_34206 = cljs.core.deref(clustermap.app.state);var inst_34207 = cljs.core.constant$keyword$847.cljs$core$IFn$_invoke$arity$1(inst_34206);var inst_34208__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34207,table_view], 0));var inst_34209 = cljs.core.deref(clustermap.app.state);var inst_34210 = cljs.core.constant$keyword$784.cljs$core$IFn$_invoke$arity$1(inst_34209);var inst_34211 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34210,inst_34208__$1], 0));var inst_34212 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34211], 0));var state_34217__$1 = (function (){var statearr_34219 = state_34217;(statearr_34219[7] = inst_34208__$1);
return statearr_34219;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34217__$1,2,inst_34212);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34223 = [null,null,null,null,null,null,null,null];(statearr_34223[0] = state_machine__5677__auto__);
(statearr_34223[1] = 1);
return statearr_34223;
});
var state_machine__5677__auto____1 = (function (state_34217){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34217);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34224){if((e34224 instanceof Object))
{var ex__5680__auto__ = e34224;var statearr_34225_34227 = state_34217;(statearr_34225_34227[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34217);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__34228 = state_34217;
state_34217 = G__34228;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34217){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_34226 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_34226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$792,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$652,clustermap.app.set_selection_route,cljs.core.constant$keyword$848,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$811,clustermap.app.set_view_route,cljs.core.constant$keyword$849,clustermap.app.change_view,cljs.core.constant$keyword$710,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$718,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9445__auto___34245 = (function (params__9446__auto__){if(cljs.core.map_QMARK_(params__9446__auto__))
{var map__34237 = params__9446__auto__;var map__34237__$1 = ((cljs.core.seq_QMARK_(map__34237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34237):map__34237);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9446__auto__))
{var vec__34238 = params__9446__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9445__auto___34245);
var action__9445__auto___34246 = (function (params__9446__auto__){if(cljs.core.map_QMARK_(params__9446__auto__))
{var map__34239 = params__9446__auto__;var map__34239__$1 = ((cljs.core.seq_QMARK_(map__34239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34239):map__34239);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9446__auto__))
{var vec__34240 = params__9446__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9445__auto___34246);
var action__9445__auto___34247 = (function (params__9446__auto__){if(cljs.core.map_QMARK_(params__9446__auto__))
{var map__34241 = params__9446__auto__;var map__34241__$1 = ((cljs.core.seq_QMARK_(map__34241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34241):map__34241);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34241__$1,cljs.core.constant$keyword$790);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9446__auto__))
{var vec__34242 = params__9446__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9445__auto___34247);
var action__9445__auto___34248 = (function (params__9446__auto__){if(cljs.core.map_QMARK_(params__9446__auto__))
{var map__34243 = params__9446__auto__;var map__34243__$1 = ((cljs.core.seq_QMARK_(map__34243))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34243):map__34243);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,cljs.core.constant$keyword$616);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,cljs.core.constant$keyword$614);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,cljs.core.constant$keyword$790);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9446__auto__))
{var vec__34244 = params__9446__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34244,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34244,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34244,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9445__auto___34248);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$709,comm,cljs.core.constant$keyword$698,path_fn,cljs.core.constant$keyword$699,link_fn,cljs.core.constant$keyword$800,clustermap.app.change_view_path], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,comm,path_fn,link_fn,shared){
return (function (state_34295){var state_val_34296 = (state_34295[1]);if((state_val_34296 === 7))
{var inst_34284 = (state_34295[2]);var inst_34285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34284,0,null);var inst_34286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34284,1,null);var inst_34287 = clustermap.app.handle_event(inst_34285,inst_34286);var state_34295__$1 = (function (){var statearr_34297 = state_34295;(statearr_34297[7] = inst_34287);
return statearr_34297;
})();var statearr_34298_34311 = state_34295__$1;(statearr_34298_34311[2] = null);
(statearr_34298_34311[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34296 === 6))
{var inst_34291 = (state_34295[2]);var state_34295__$1 = state_34295;var statearr_34299_34312 = state_34295__$1;(statearr_34299_34312[2] = inst_34291);
(statearr_34299_34312[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34296 === 5))
{var state_34295__$1 = state_34295;var statearr_34300_34313 = state_34295__$1;(statearr_34300_34313[2] = null);
(statearr_34300_34313[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34296 === 4))
{var state_34295__$1 = state_34295;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34295__$1,7,comm);
} else
{if((state_val_34296 === 3))
{var inst_34293 = (state_34295[2]);var state_34295__$1 = state_34295;return cljs.core.async.impl.ioc_helpers.return_chan(state_34295__$1,inst_34293);
} else
{if((state_val_34296 === 2))
{var state_34295__$1 = state_34295;if(true)
{var statearr_34301_34314 = state_34295__$1;(statearr_34301_34314[1] = 4);
} else
{var statearr_34302_34315 = state_34295__$1;(statearr_34302_34315[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34296 === 1))
{var state_34295__$1 = state_34295;var statearr_34303_34316 = state_34295__$1;(statearr_34303_34316[2] = null);
(statearr_34303_34316[1] = 2);
return cljs.core.constant$keyword$591;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5691__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5676__auto__,c__5691__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34307 = [null,null,null,null,null,null,null,null];(statearr_34307[0] = state_machine__5677__auto__);
(statearr_34307[1] = 1);
return statearr_34307;
});
var state_machine__5677__auto____1 = (function (state_34295){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34295);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34308){if((e34308 instanceof Object))
{var ex__5680__auto__ = e34308;var statearr_34309_34317 = state_34295;(statearr_34309_34317[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34295);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__34318 = state_34295;
state_34295 = G__34318;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34295){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,comm,path_fn,link_fn,shared))
})();var state__5693__auto__ = (function (){var statearr_34310 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_34310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__,comm,path_fn,link_fn,shared))
);
return c__5691__auto__;
});
