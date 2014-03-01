// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('clustermap.nav');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('goog.events');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$445,cljs.core.constant$keyword$396,cljs.core.constant$keyword$487,cljs.core.constant$keyword$376,cljs.core.constant$keyword$495,cljs.core.constant$keyword$496,cljs.core.constant$keyword$442,cljs.core.constant$keyword$444,cljs.core.constant$keyword$348,cljs.core.constant$keyword$486,cljs.core.constant$keyword$488,cljs.core.constant$keyword$432,cljs.core.constant$keyword$443,cljs.core.constant$keyword$377,cljs.core.constant$keyword$456,cljs.core.constant$keyword$497,cljs.core.constant$keyword$489],[cljs.core.constant$keyword$492,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__22344){var vec__22345 = p__22344;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22345,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22345,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22346){var map__22348 = p__22346;var map__22348__$1 = ((cljs.core.seq_QMARK_(map__22348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22348):map__22348);var path_values = map__22348__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22346 = null;if (arguments.length > 0) {
  p__22346 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22346);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22349){
var p__22346 = cljs.core.seq(arglist__22349);
return set_state__delegate(p__22346);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22371){var state_val_22372 = (state_22371[1]);if((state_val_22372 === 2))
{var inst_22367 = (state_22371[2]);var inst_22368 = clustermap.rtree.rtree_index(inst_22367);var inst_22369 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$487,inst_22367,cljs.core.constant$keyword$488,inst_22368], 0));var state_22371__$1 = state_22371;return cljs.core.async.impl.ioc_helpers.return_chan(state_22371__$1,inst_22369);
} else
{if((state_val_22372 === 1))
{var inst_22365 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$286,true], 0));var state_22371__$1 = state_22371;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22371__$1,2,inst_22365);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22376 = [null,null,null,null,null,null,null];(statearr_22376[0] = state_machine__5507__auto__);
(statearr_22376[1] = 1);
return statearr_22376;
});
var state_machine__5507__auto____1 = (function (state_22371){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22371);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22377){if((e22377 instanceof Object))
{var ex__5510__auto__ = e22377;var statearr_22378_22380 = state_22371;(statearr_22378_22380[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22371);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e22377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__22381 = state_22371;
state_22371 = G__22381;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22371){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22379 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22401){var state_val_22402 = (state_22401[1]);if((state_val_22402 === 2))
{var inst_22398 = (state_22401[2]);var inst_22399 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$377,inst_22398], 0));var state_22401__$1 = state_22401;return cljs.core.async.impl.ioc_helpers.return_chan(state_22401__$1,inst_22399);
} else
{if((state_val_22402 === 1))
{var inst_22396 = clustermap.api.investment_stats();var state_22401__$1 = state_22401;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22401__$1,2,inst_22396);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22406 = [null,null,null,null,null,null,null];(statearr_22406[0] = state_machine__5507__auto__);
(statearr_22406[1] = 1);
return statearr_22406;
});
var state_machine__5507__auto____1 = (function (state_22401){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22401);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22407){if((e22407 instanceof Object))
{var ex__5510__auto__ = e22407;var statearr_22408_22410 = state_22401;(statearr_22408_22410[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22401);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e22407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__22411 = state_22401;
state_22401 = G__22411;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22401){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22409 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$456,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22412,type){var vec__22414 = p__22412;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22414,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22414,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22414,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22414,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22414,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22414,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$348,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,type,cljs.core.constant$keyword$266,selection], null),cljs.core.constant$keyword$376,selection_investment_stats,cljs.core.constant$keyword$432,selection_investment_account_timelines,cljs.core.constant$keyword$444,selection_investment_aggs,cljs.core.constant$keyword$443,selection_investments,cljs.core.constant$keyword$486,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22415){var vec__22420 = p__22415;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22420,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22420,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$442.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$442,selector], 0));
var pred__22421 = cljs.core._EQ_;var expr__22422 = type;if(cljs.core.truth_((pred__22421.cljs$core$IFn$_invoke$arity$2 ? pred__22421.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,expr__22422) : pred__22421.call(null,cljs.core.constant$keyword$338,expr__22422))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22421.cljs$core$IFn$_invoke$arity$2 ? pred__22421.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$339,expr__22422) : pred__22421.call(null,cljs.core.constant$keyword$339,expr__22422))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22421.cljs$core$IFn$_invoke$arity$2 ? pred__22421.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$340,expr__22422) : pred__22421.call(null,cljs.core.constant$keyword$340,expr__22422))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$445.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$445,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3394__auto__ = type;if(cljs.core.truth_(and__3394__auto__))
{return id;
} else
{return and__3394__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name((function (){var or__3406__auto__ = view;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22425 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22425,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22425,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22425,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22425,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$445,view,cljs.core.constant$keyword$305,type,cljs.core.constant$keyword$301,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22426){var vec__22429 = p__22426;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22429,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22429,1,null);var map__22430 = clustermap.app.parse_route();var map__22430__$1 = ((cljs.core.seq_QMARK_(map__22430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22430):map__22430);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22430__$1,cljs.core.constant$keyword$445);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22432 = clustermap.app.parse_route();var map__22432__$1 = ((cljs.core.seq_QMARK_(map__22432))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22432):map__22432);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22432__$1,cljs.core.constant$keyword$301);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22432__$1,cljs.core.constant$keyword$305);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22465){var state_val_22466 = (state_22465[1]);if((state_val_22466 === 2))
{var inst_22456 = (state_22465[7]);var inst_22462 = (state_22465[2]);var inst_22463 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$495,inst_22456,cljs.core.constant$keyword$444,inst_22462], 0));var state_22465__$1 = state_22465;return cljs.core.async.impl.ioc_helpers.return_chan(state_22465__$1,inst_22463);
} else
{if((state_val_22466 === 1))
{var inst_22456 = (state_22465[7]);var inst_22454 = cljs.core.deref(clustermap.app.state);var inst_22455 = cljs.core.constant$keyword$495.cljs$core$IFn$_invoke$arity$1(inst_22454);var inst_22456__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22455,table_view], 0));var inst_22457 = cljs.core.deref(clustermap.app.state);var inst_22458 = cljs.core.constant$keyword$442.cljs$core$IFn$_invoke$arity$1(inst_22457);var inst_22459 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22458,inst_22456__$1], 0));var inst_22460 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22459], 0));var state_22465__$1 = (function (){var statearr_22467 = state_22465;(statearr_22467[7] = inst_22456__$1);
return statearr_22467;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22465__$1,2,inst_22460);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22471 = [null,null,null,null,null,null,null,null];(statearr_22471[0] = state_machine__5507__auto__);
(statearr_22471[1] = 1);
return statearr_22471;
});
var state_machine__5507__auto____1 = (function (state_22465){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22465);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22472){if((e22472 instanceof Object))
{var ex__5510__auto__ = e22472;var statearr_22473_22475 = state_22465;(statearr_22473_22475[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22465);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e22472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__22476 = state_22465;
state_22465 = G__22476;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22465){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22474 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22509){var state_val_22510 = (state_22509[1]);if((state_val_22510 === 2))
{var inst_22500 = (state_22509[7]);var inst_22506 = (state_22509[2]);var inst_22507 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$496,inst_22500,cljs.core.constant$keyword$443,inst_22506], 0));var state_22509__$1 = state_22509;return cljs.core.async.impl.ioc_helpers.return_chan(state_22509__$1,inst_22507);
} else
{if((state_val_22510 === 1))
{var inst_22500 = (state_22509[7]);var inst_22498 = cljs.core.deref(clustermap.app.state);var inst_22499 = cljs.core.constant$keyword$496.cljs$core$IFn$_invoke$arity$1(inst_22498);var inst_22500__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22499,table_view], 0));var inst_22501 = cljs.core.deref(clustermap.app.state);var inst_22502 = cljs.core.constant$keyword$442.cljs$core$IFn$_invoke$arity$1(inst_22501);var inst_22503 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22502,inst_22500__$1], 0));var inst_22504 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22503], 0));var state_22509__$1 = (function (){var statearr_22511 = state_22509;(statearr_22511[7] = inst_22500__$1);
return statearr_22511;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22509__$1,2,inst_22504);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22515 = [null,null,null,null,null,null,null,null];(statearr_22515[0] = state_machine__5507__auto__);
(statearr_22515[1] = 1);
return statearr_22515;
});
var state_machine__5507__auto____1 = (function (state_22509){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22509);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22516){if((e22516 instanceof Object))
{var ex__5510__auto__ = e22516;var statearr_22517_22519 = state_22509;(statearr_22517_22519[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22509);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e22516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__22520 = state_22509;
state_22509 = G__22520;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22509){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22518 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$457,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$321,clustermap.app.set_selection_route,cljs.core.constant$keyword$498,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$344,clustermap.app.set_view_route,cljs.core.constant$keyword$499,clustermap.app.change_view,cljs.core.constant$keyword$402,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$368,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__22524 = params__9259__auto__;var map__22524__$1 = ((cljs.core.seq_QMARK_(map__22524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22524):map__22524);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$498,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__22525 = params__9259__auto__;var map__22525__$1 = ((cljs.core.seq_QMARK_(map__22525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22525):map__22525);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.constant$keyword$445);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$499,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$498,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__22526 = params__9259__auto__;var map__22526__$1 = ((cljs.core.seq_QMARK_(map__22526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22526):map__22526);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.constant$keyword$301);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.constant$keyword$305);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.constant$keyword$445);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$499,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$342,comm,cljs.core.constant$keyword$341,path_fn,cljs.core.constant$keyword$358,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22573){var state_val_22574 = (state_22573[1]);if((state_val_22574 === 7))
{var inst_22562 = (state_22573[2]);var inst_22563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22562,0,null);var inst_22564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22562,1,null);var inst_22565 = clustermap.app.handle_event(inst_22563,inst_22564);var state_22573__$1 = (function (){var statearr_22575 = state_22573;(statearr_22575[7] = inst_22565);
return statearr_22575;
})();var statearr_22576_22589 = state_22573__$1;(statearr_22576_22589[2] = null);
(statearr_22576_22589[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22574 === 6))
{var inst_22569 = (state_22573[2]);var state_22573__$1 = state_22573;var statearr_22577_22590 = state_22573__$1;(statearr_22577_22590[2] = inst_22569);
(statearr_22577_22590[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22574 === 5))
{var state_22573__$1 = state_22573;var statearr_22578_22591 = state_22573__$1;(statearr_22578_22591[2] = null);
(statearr_22578_22591[1] = 6);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22574 === 4))
{var state_22573__$1 = state_22573;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22573__$1,7,comm);
} else
{if((state_val_22574 === 3))
{var inst_22571 = (state_22573[2]);var state_22573__$1 = state_22573;return cljs.core.async.impl.ioc_helpers.return_chan(state_22573__$1,inst_22571);
} else
{if((state_val_22574 === 2))
{var state_22573__$1 = state_22573;if(true)
{var statearr_22579_22592 = state_22573__$1;(statearr_22579_22592[1] = 4);
} else
{var statearr_22580_22593 = state_22573__$1;(statearr_22580_22593[1] = 5);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_22574 === 1))
{var state_22573__$1 = state_22573;var statearr_22581_22594 = state_22573__$1;(statearr_22581_22594[2] = null);
(statearr_22581_22594[1] = 2);
return cljs.core.constant$keyword$272;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22585 = [null,null,null,null,null,null,null,null];(statearr_22585[0] = state_machine__5507__auto__);
(statearr_22585[1] = 1);
return statearr_22585;
});
var state_machine__5507__auto____1 = (function (state_22573){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22573);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22586){if((e22586 instanceof Object))
{var ex__5510__auto__ = e22586;var statearr_22587_22595 = state_22573;(statearr_22587_22595[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22573);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e22586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__22596 = state_22573;
state_22573 = G__22596;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22573){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22588 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
