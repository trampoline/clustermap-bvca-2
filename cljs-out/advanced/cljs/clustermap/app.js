// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.ganalytics');
goog.require('clustermap.routes');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('goog.History');
goog.require('clustermap.nav');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('goog.events');
goog.require('clustermap.routes');
goog.require('secretary.core');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.map');
goog.require('clustermap.rtree');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('clustermap.ganalytics');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('clustermap.nav');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('goog.events');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$745,cljs.core.constant$keyword$686,cljs.core.constant$keyword$777,cljs.core.constant$keyword$666,cljs.core.constant$keyword$785,cljs.core.constant$keyword$786,cljs.core.constant$keyword$731,cljs.core.constant$keyword$733,cljs.core.constant$keyword$640,cljs.core.constant$keyword$776,cljs.core.constant$keyword$778,cljs.core.constant$keyword$722,cljs.core.constant$keyword$732,cljs.core.constant$keyword$667,cljs.core.constant$keyword$746,cljs.core.constant$keyword$787,cljs.core.constant$keyword$779],[cljs.core.constant$keyword$754,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__33451){var vec__33452 = p__33451;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33452,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33452,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__33453){var map__33455 = p__33453;var map__33455__$1 = ((cljs.core.seq_QMARK_(map__33455))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33455):map__33455);var path_values = map__33455__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__33453 = null;if (arguments.length > 0) {
  p__33453 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__33453);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__33456){
var p__33453 = cljs.core.seq(arglist__33456);
return set_state__delegate(p__33453);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33478){var state_val_33479 = (state_33478[1]);if((state_val_33479 === 2))
{var inst_33474 = (state_33478[2]);var inst_33475 = clustermap.rtree.rtree_index(inst_33474);var inst_33476 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$777,inst_33474,cljs.core.constant$keyword$778,inst_33475], 0));var state_33478__$1 = state_33478;return cljs.core.async.impl.ioc_helpers.return_chan(state_33478__$1,inst_33476);
} else
{if((state_val_33479 === 1))
{var inst_33472 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$565,true], 0));var state_33478__$1 = state_33478;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33478__$1,2,inst_33472);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33483 = [null,null,null,null,null,null,null];(statearr_33483[0] = state_machine__5548__auto__);
(statearr_33483[1] = 1);
return statearr_33483;
});
var state_machine__5548__auto____1 = (function (state_33478){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33478);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33484){if((e33484 instanceof Object))
{var ex__5551__auto__ = e33484;var statearr_33485_33487 = state_33478;(statearr_33485_33487[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33478);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33488 = state_33478;
state_33478 = G__33488;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33478){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33486 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33508){var state_val_33509 = (state_33508[1]);if((state_val_33509 === 2))
{var inst_33505 = (state_33508[2]);var inst_33506 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$667,inst_33505], 0));var state_33508__$1 = state_33508;return cljs.core.async.impl.ioc_helpers.return_chan(state_33508__$1,inst_33506);
} else
{if((state_val_33509 === 1))
{var inst_33503 = clustermap.api.investment_stats();var state_33508__$1 = state_33508;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33508__$1,2,inst_33503);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33513 = [null,null,null,null,null,null,null];(statearr_33513[0] = state_machine__5548__auto__);
(statearr_33513[1] = 1);
return statearr_33513;
});
var state_machine__5548__auto____1 = (function (state_33508){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33508);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33514){if((e33514 instanceof Object))
{var ex__5551__auto__ = e33514;var statearr_33515_33517 = state_33508;(statearr_33515_33517[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33508);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33518 = state_33508;
state_33508 = G__33518;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33508){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33516 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$746,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__33519,type){var vec__33521 = p__33519;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,type,cljs.core.constant$keyword$545,selection], null),cljs.core.constant$keyword$666,selection_investment_stats,cljs.core.constant$keyword$722,selection_investment_account_timelines,cljs.core.constant$keyword$733,selection_investment_aggs,cljs.core.constant$keyword$732,selection_investments,cljs.core.constant$keyword$776,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__33522){var vec__33527 = p__33522;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$731,selector], 0));
var pred__33528 = cljs.core._EQ_;var expr__33529 = type;if(cljs.core.truth_((pred__33528.cljs$core$IFn$_invoke$arity$2 ? pred__33528.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__33529) : pred__33528.call(null,cljs.core.constant$keyword$629,expr__33529))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33528.cljs$core$IFn$_invoke$arity$2 ? pred__33528.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__33529) : pred__33528.call(null,cljs.core.constant$keyword$630,expr__33529))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33528.cljs$core$IFn$_invoke$arity$2 ? pred__33528.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__33529) : pred__33528.call(null,cljs.core.constant$keyword$631,expr__33529))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$745.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$745,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3429__auto__ = type;if(cljs.core.truth_(and__3429__auto__))
{return id;
} else
{return and__3429__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name((function (){var or__3441__auto__ = view;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "map";
}
})())),cljs.core.str("/"),cljs.core.str(cljs.core.name(type)),cljs.core.str("/"),cljs.core.str(cljs.core.name(id))].join(''));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name(view))].join(''));
} else
{if(true)
{return clustermap.app.history.setToken([cljs.core.str("")].join(''));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__33532 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33532,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33532,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33532,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33532,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$745,view,cljs.core.constant$keyword$584,type,cljs.core.constant$keyword$580,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__33533){var vec__33536 = p__33533;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33536,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33536,1,null);var map__33537 = clustermap.app.parse_route();var map__33537__$1 = ((cljs.core.seq_QMARK_(map__33537))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33537):map__33537);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33537__$1,cljs.core.constant$keyword$745);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__33539 = clustermap.app.parse_route();var map__33539__$1 = ((cljs.core.seq_QMARK_(map__33539))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33539):map__33539);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,cljs.core.constant$keyword$580);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,cljs.core.constant$keyword$584);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33572){var state_val_33573 = (state_33572[1]);if((state_val_33573 === 2))
{var inst_33563 = (state_33572[7]);var inst_33569 = (state_33572[2]);var inst_33570 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$785,inst_33563,cljs.core.constant$keyword$733,inst_33569], 0));var state_33572__$1 = state_33572;return cljs.core.async.impl.ioc_helpers.return_chan(state_33572__$1,inst_33570);
} else
{if((state_val_33573 === 1))
{var inst_33563 = (state_33572[7]);var inst_33561 = cljs.core.deref(clustermap.app.state);var inst_33562 = cljs.core.constant$keyword$785.cljs$core$IFn$_invoke$arity$1(inst_33561);var inst_33563__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33562,table_view], 0));var inst_33564 = cljs.core.deref(clustermap.app.state);var inst_33565 = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(inst_33564);var inst_33566 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33565,inst_33563__$1], 0));var inst_33567 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33566], 0));var state_33572__$1 = (function (){var statearr_33574 = state_33572;(statearr_33574[7] = inst_33563__$1);
return statearr_33574;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33572__$1,2,inst_33567);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33578 = [null,null,null,null,null,null,null,null];(statearr_33578[0] = state_machine__5548__auto__);
(statearr_33578[1] = 1);
return statearr_33578;
});
var state_machine__5548__auto____1 = (function (state_33572){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33572);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33579){if((e33579 instanceof Object))
{var ex__5551__auto__ = e33579;var statearr_33580_33582 = state_33572;(statearr_33580_33582[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33572);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33583 = state_33572;
state_33572 = G__33583;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33572){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33581 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33616){var state_val_33617 = (state_33616[1]);if((state_val_33617 === 2))
{var inst_33607 = (state_33616[7]);var inst_33613 = (state_33616[2]);var inst_33614 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$786,inst_33607,cljs.core.constant$keyword$732,inst_33613], 0));var state_33616__$1 = state_33616;return cljs.core.async.impl.ioc_helpers.return_chan(state_33616__$1,inst_33614);
} else
{if((state_val_33617 === 1))
{var inst_33607 = (state_33616[7]);var inst_33605 = cljs.core.deref(clustermap.app.state);var inst_33606 = cljs.core.constant$keyword$786.cljs$core$IFn$_invoke$arity$1(inst_33605);var inst_33607__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33606,table_view], 0));var inst_33608 = cljs.core.deref(clustermap.app.state);var inst_33609 = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(inst_33608);var inst_33610 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33609,inst_33607__$1], 0));var inst_33611 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33610], 0));var state_33616__$1 = (function (){var statearr_33618 = state_33616;(statearr_33618[7] = inst_33607__$1);
return statearr_33618;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33616__$1,2,inst_33611);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33622 = [null,null,null,null,null,null,null,null];(statearr_33622[0] = state_machine__5548__auto__);
(statearr_33622[1] = 1);
return statearr_33622;
});
var state_machine__5548__auto____1 = (function (state_33616){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33616);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33623){if((e33623 instanceof Object))
{var ex__5551__auto__ = e33623;var statearr_33624_33626 = state_33616;(statearr_33624_33626[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33616);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33627 = state_33616;
state_33616 = G__33627;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33616){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33625 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$747,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$600,clustermap.app.set_selection_route,cljs.core.constant$keyword$788,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$636,clustermap.app.set_view_route,cljs.core.constant$keyword$789,clustermap.app.change_view,cljs.core.constant$keyword$691,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$658,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___33644 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33636 = params__9285__auto__;var map__33636__$1 = ((cljs.core.seq_QMARK_(map__33636))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33636):map__33636);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33637 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___33644);
var action__9284__auto___33645 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33638 = params__9285__auto__;var map__33638__$1 = ((cljs.core.seq_QMARK_(map__33638))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33638):map__33638);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33639 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___33645);
var action__9284__auto___33646 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33640 = params__9285__auto__;var map__33640__$1 = ((cljs.core.seq_QMARK_(map__33640))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33640):map__33640);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33640__$1,cljs.core.constant$keyword$745);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33641 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33641,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___33646);
var action__9284__auto___33647 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33642 = params__9285__auto__;var map__33642__$1 = ((cljs.core.seq_QMARK_(map__33642))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33642):map__33642);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33642__$1,cljs.core.constant$keyword$580);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33642__$1,cljs.core.constant$keyword$584);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33642__$1,cljs.core.constant$keyword$745);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33643 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___33647);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$633,comm,cljs.core.constant$keyword$632,path_fn,cljs.core.constant$keyword$650,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33694){var state_val_33695 = (state_33694[1]);if((state_val_33695 === 7))
{var inst_33683 = (state_33694[2]);var inst_33684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33683,0,null);var inst_33685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33683,1,null);var inst_33686 = clustermap.app.handle_event(inst_33684,inst_33685);var state_33694__$1 = (function (){var statearr_33696 = state_33694;(statearr_33696[7] = inst_33686);
return statearr_33696;
})();var statearr_33697_33710 = state_33694__$1;(statearr_33697_33710[2] = null);
(statearr_33697_33710[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33695 === 6))
{var inst_33690 = (state_33694[2]);var state_33694__$1 = state_33694;var statearr_33698_33711 = state_33694__$1;(statearr_33698_33711[2] = inst_33690);
(statearr_33698_33711[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33695 === 5))
{var state_33694__$1 = state_33694;var statearr_33699_33712 = state_33694__$1;(statearr_33699_33712[2] = null);
(statearr_33699_33712[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33695 === 4))
{var state_33694__$1 = state_33694;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33694__$1,7,comm);
} else
{if((state_val_33695 === 3))
{var inst_33692 = (state_33694[2]);var state_33694__$1 = state_33694;return cljs.core.async.impl.ioc_helpers.return_chan(state_33694__$1,inst_33692);
} else
{if((state_val_33695 === 2))
{var state_33694__$1 = state_33694;if(true)
{var statearr_33700_33713 = state_33694__$1;(statearr_33700_33713[1] = 4);
} else
{var statearr_33701_33714 = state_33694__$1;(statearr_33701_33714[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33695 === 1))
{var state_33694__$1 = state_33694;var statearr_33702_33715 = state_33694__$1;(statearr_33702_33715[2] = null);
(statearr_33702_33715[1] = 2);
return cljs.core.constant$keyword$551;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33706 = [null,null,null,null,null,null,null,null];(statearr_33706[0] = state_machine__5548__auto__);
(statearr_33706[1] = 1);
return statearr_33706;
});
var state_machine__5548__auto____1 = (function (state_33694){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33694);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33707){if((e33707 instanceof Object))
{var ex__5551__auto__ = e33707;var statearr_33708_33716 = state_33694;(statearr_33708_33716[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33694);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33717 = state_33694;
state_33694 = G__33717;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33694){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33709 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
