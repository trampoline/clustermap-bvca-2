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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__34046){var vec__34047 = p__34046;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34047,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34047,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__34047,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__34047,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__34048){var map__34050 = p__34048;var map__34050__$1 = ((cljs.core.seq_QMARK_(map__34050))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34050):map__34050);var path_values = map__34050__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__34048 = null;if (arguments.length > 0) {
  p__34048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__34048);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__34051){
var p__34048 = cljs.core.seq(arglist__34051);
return set_state__delegate(p__34048);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34073){var state_val_34074 = (state_34073[1]);if((state_val_34074 === 2))
{var inst_34069 = (state_34073[2]);var inst_34070 = clustermap.rtree.rtree_index(inst_34069);var inst_34071 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$836,inst_34069,cljs.core.constant$keyword$837,inst_34070], 0));var state_34073__$1 = state_34073;return cljs.core.async.impl.ioc_helpers.return_chan(state_34073__$1,inst_34071);
} else
{if((state_val_34074 === 1))
{var inst_34067 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$605,true], 0));var state_34073__$1 = state_34073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34073__$1,2,inst_34067);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34078 = [null,null,null,null,null,null,null];(statearr_34078[0] = state_machine__5675__auto__);
(statearr_34078[1] = 1);
return statearr_34078;
});
var state_machine__5675__auto____1 = (function (state_34073){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34073);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34079){if((e34079 instanceof Object))
{var ex__5678__auto__ = e34079;var statearr_34080_34082 = state_34073;(statearr_34080_34082[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34073);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__34083 = state_34073;
state_34073 = G__34083;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34073){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34081 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34103){var state_val_34104 = (state_34103[1]);if((state_val_34104 === 2))
{var inst_34100 = (state_34103[2]);var inst_34101 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$768,inst_34100], 0));var state_34103__$1 = state_34103;return cljs.core.async.impl.ioc_helpers.return_chan(state_34103__$1,inst_34101);
} else
{if((state_val_34104 === 1))
{var inst_34098 = clustermap.api.investment_stats();var state_34103__$1 = state_34103;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34103__$1,2,inst_34098);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34108 = [null,null,null,null,null,null,null];(statearr_34108[0] = state_machine__5675__auto__);
(statearr_34108[1] = 1);
return statearr_34108;
});
var state_machine__5675__auto____1 = (function (state_34103){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34103);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34109){if((e34109 instanceof Object))
{var ex__5678__auto__ = e34109;var statearr_34110_34112 = state_34103;(statearr_34110_34112[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34103);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__34113 = state_34103;
state_34103 = G__34113;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34103){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34111 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$791,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__34114,type){var vec__34116 = p__34114;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$763,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,type,cljs.core.constant$keyword$585,selection], null),cljs.core.constant$keyword$767,selection_investment_stats,cljs.core.constant$keyword$754,selection_investment_account_timelines,cljs.core.constant$keyword$787,selection_investment_aggs,cljs.core.constant$keyword$786,selection_investments,cljs.core.constant$keyword$835,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__34117){var vec__34122 = p__34117;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34122,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34122,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$784.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$784,selector], 0));
var pred__34123 = cljs.core._EQ_;var expr__34124 = type;if(cljs.core.truth_((pred__34123.cljs$core$IFn$_invoke$arity$2 ? pred__34123.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,expr__34124) : pred__34123.call(null,cljs.core.constant$keyword$700,expr__34124))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34123.cljs$core$IFn$_invoke$arity$2 ? pred__34123.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__34124) : pred__34123.call(null,cljs.core.constant$keyword$701,expr__34124))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34123.cljs$core$IFn$_invoke$arity$2 ? pred__34123.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$703,expr__34124) : pred__34123.call(null,cljs.core.constant$keyword$703,expr__34124))))
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
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3527__auto__ = type;if(cljs.core.truth_(and__3527__auto__))
{return id;
} else
{return and__3527__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3539__auto__ = view;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__34129 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34129,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34129,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34129,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34129,3,null);var type__$1 = ((((function (){var G__34130 = type;var G__34130__$1 = (((G__34130 == null))?null:clojure.string.trim(G__34130));var G__34130__$2 = (((G__34130__$1 == null))?null:cljs.core.count(G__34130__$1));return G__34130__$2;
})() > 0))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__34131 = id;var G__34131__$1 = (((G__34131 == null))?null:clojure.string.trim(G__34131));var G__34131__$2 = (((G__34131__$1 == null))?null:cljs.core.count(G__34131__$1));return G__34131__$2;
})() > 0))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$790,view,cljs.core.constant$keyword$614,type__$1,cljs.core.constant$keyword$616,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__34132){var vec__34135 = p__34132;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34135,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34135,1,null);var map__34136 = clustermap.app.parse_route();var map__34136__$1 = ((cljs.core.seq_QMARK_(map__34136))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34136):map__34136);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34136__$1,cljs.core.constant$keyword$790);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__34138 = clustermap.app.parse_route();var map__34138__$1 = ((cljs.core.seq_QMARK_(map__34138))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34138):map__34138);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34138__$1,cljs.core.constant$keyword$616);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34138__$1,cljs.core.constant$keyword$614);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34171){var state_val_34172 = (state_34171[1]);if((state_val_34172 === 2))
{var inst_34162 = (state_34171[7]);var inst_34168 = (state_34171[2]);var inst_34169 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$845,inst_34162,cljs.core.constant$keyword$787,inst_34168], 0));var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.return_chan(state_34171__$1,inst_34169);
} else
{if((state_val_34172 === 1))
{var inst_34162 = (state_34171[7]);var inst_34160 = cljs.core.deref(clustermap.app.state);var inst_34161 = cljs.core.constant$keyword$845.cljs$core$IFn$_invoke$arity$1(inst_34160);var inst_34162__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34161,table_view], 0));var inst_34163 = cljs.core.deref(clustermap.app.state);var inst_34164 = cljs.core.constant$keyword$784.cljs$core$IFn$_invoke$arity$1(inst_34163);var inst_34165 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34164,inst_34162__$1], 0));var inst_34166 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34165], 0));var state_34171__$1 = (function (){var statearr_34173 = state_34171;(statearr_34173[7] = inst_34162__$1);
return statearr_34173;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34171__$1,2,inst_34166);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34177 = [null,null,null,null,null,null,null,null];(statearr_34177[0] = state_machine__5675__auto__);
(statearr_34177[1] = 1);
return statearr_34177;
});
var state_machine__5675__auto____1 = (function (state_34171){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34171);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34178){if((e34178 instanceof Object))
{var ex__5678__auto__ = e34178;var statearr_34179_34181 = state_34171;(statearr_34179_34181[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34171);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__34182 = state_34171;
state_34171 = G__34182;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34171){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34180 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34215){var state_val_34216 = (state_34215[1]);if((state_val_34216 === 2))
{var inst_34206 = (state_34215[7]);var inst_34212 = (state_34215[2]);var inst_34213 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$847,inst_34206,cljs.core.constant$keyword$786,inst_34212], 0));var state_34215__$1 = state_34215;return cljs.core.async.impl.ioc_helpers.return_chan(state_34215__$1,inst_34213);
} else
{if((state_val_34216 === 1))
{var inst_34206 = (state_34215[7]);var inst_34204 = cljs.core.deref(clustermap.app.state);var inst_34205 = cljs.core.constant$keyword$847.cljs$core$IFn$_invoke$arity$1(inst_34204);var inst_34206__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34205,table_view], 0));var inst_34207 = cljs.core.deref(clustermap.app.state);var inst_34208 = cljs.core.constant$keyword$784.cljs$core$IFn$_invoke$arity$1(inst_34207);var inst_34209 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34208,inst_34206__$1], 0));var inst_34210 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34209], 0));var state_34215__$1 = (function (){var statearr_34217 = state_34215;(statearr_34217[7] = inst_34206__$1);
return statearr_34217;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34215__$1,2,inst_34210);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34221 = [null,null,null,null,null,null,null,null];(statearr_34221[0] = state_machine__5675__auto__);
(statearr_34221[1] = 1);
return statearr_34221;
});
var state_machine__5675__auto____1 = (function (state_34215){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34215);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34222){if((e34222 instanceof Object))
{var ex__5678__auto__ = e34222;var statearr_34223_34225 = state_34215;(statearr_34223_34225[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34215);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__34226 = state_34215;
state_34215 = G__34226;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34215){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34224 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$792,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$652,clustermap.app.set_selection_route,cljs.core.constant$keyword$848,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$811,clustermap.app.set_view_route,cljs.core.constant$keyword$849,clustermap.app.change_view,cljs.core.constant$keyword$710,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$718,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9443__auto___34243 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34235 = params__9444__auto__;var map__34235__$1 = ((cljs.core.seq_QMARK_(map__34235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34235):map__34235);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34236 = params__9444__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9443__auto___34243);
var action__9443__auto___34244 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34237 = params__9444__auto__;var map__34237__$1 = ((cljs.core.seq_QMARK_(map__34237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34237):map__34237);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34238 = params__9444__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9443__auto___34244);
var action__9443__auto___34245 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34239 = params__9444__auto__;var map__34239__$1 = ((cljs.core.seq_QMARK_(map__34239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34239):map__34239);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34239__$1,cljs.core.constant$keyword$790);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34240 = params__9444__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34240,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9443__auto___34245);
var action__9443__auto___34246 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34241 = params__9444__auto__;var map__34241__$1 = ((cljs.core.seq_QMARK_(map__34241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34241):map__34241);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34241__$1,cljs.core.constant$keyword$616);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34241__$1,cljs.core.constant$keyword$614);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34241__$1,cljs.core.constant$keyword$790);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34242 = params__9444__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34242,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9443__auto___34246);
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
var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (state_34293){var state_val_34294 = (state_34293[1]);if((state_val_34294 === 7))
{var inst_34282 = (state_34293[2]);var inst_34283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34282,0,null);var inst_34284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34282,1,null);var inst_34285 = clustermap.app.handle_event(inst_34283,inst_34284);var state_34293__$1 = (function (){var statearr_34295 = state_34293;(statearr_34295[7] = inst_34285);
return statearr_34295;
})();var statearr_34296_34309 = state_34293__$1;(statearr_34296_34309[2] = null);
(statearr_34296_34309[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34294 === 6))
{var inst_34289 = (state_34293[2]);var state_34293__$1 = state_34293;var statearr_34297_34310 = state_34293__$1;(statearr_34297_34310[2] = inst_34289);
(statearr_34297_34310[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34294 === 5))
{var state_34293__$1 = state_34293;var statearr_34298_34311 = state_34293__$1;(statearr_34298_34311[2] = null);
(statearr_34298_34311[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34294 === 4))
{var state_34293__$1 = state_34293;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34293__$1,7,comm);
} else
{if((state_val_34294 === 3))
{var inst_34291 = (state_34293[2]);var state_34293__$1 = state_34293;return cljs.core.async.impl.ioc_helpers.return_chan(state_34293__$1,inst_34291);
} else
{if((state_val_34294 === 2))
{var state_34293__$1 = state_34293;if(true)
{var statearr_34299_34312 = state_34293__$1;(statearr_34299_34312[1] = 4);
} else
{var statearr_34300_34313 = state_34293__$1;(statearr_34300_34313[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34294 === 1))
{var state_34293__$1 = state_34293;var statearr_34301_34314 = state_34293__$1;(statearr_34301_34314[2] = null);
(statearr_34301_34314[1] = 2);
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
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34305 = [null,null,null,null,null,null,null,null];(statearr_34305[0] = state_machine__5675__auto__);
(statearr_34305[1] = 1);
return statearr_34305;
});
var state_machine__5675__auto____1 = (function (state_34293){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34293);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34306){if((e34306 instanceof Object))
{var ex__5678__auto__ = e34306;var statearr_34307_34315 = state_34293;(statearr_34307_34315[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34293);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__34316 = state_34293;
state_34293 = G__34316;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34293){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared))
})();var state__5691__auto__ = (function (){var statearr_34308 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
);
return c__5689__auto__;
});
