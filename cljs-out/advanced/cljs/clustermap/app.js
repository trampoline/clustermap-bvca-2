// Compiled by ClojureScript 0.0-2173
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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$734,cljs.core.constant$keyword$687,cljs.core.constant$keyword$776,cljs.core.constant$keyword$667,cljs.core.constant$keyword$785,cljs.core.constant$keyword$786,cljs.core.constant$keyword$731,cljs.core.constant$keyword$733,cljs.core.constant$keyword$639,cljs.core.constant$keyword$775,cljs.core.constant$keyword$777,cljs.core.constant$keyword$722,cljs.core.constant$keyword$732,cljs.core.constant$keyword$668,cljs.core.constant$keyword$746,cljs.core.constant$keyword$787,cljs.core.constant$keyword$778],[cljs.core.constant$keyword$781,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__33541){var vec__33542 = p__33541;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33542,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33542,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__33543){var map__33545 = p__33543;var map__33545__$1 = ((cljs.core.seq_QMARK_(map__33545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33545):map__33545);var path_values = map__33545__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__33543 = null;if (arguments.length > 0) {
  p__33543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__33543);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__33546){
var p__33543 = cljs.core.seq(arglist__33546);
return set_state__delegate(p__33543);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33568){var state_val_33569 = (state_33568[1]);if((state_val_33569 === 2))
{var inst_33564 = (state_33568[2]);var inst_33565 = clustermap.rtree.rtree_index(inst_33564);var inst_33566 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$776,inst_33564,cljs.core.constant$keyword$777,inst_33565], 0));var state_33568__$1 = state_33568;return cljs.core.async.impl.ioc_helpers.return_chan(state_33568__$1,inst_33566);
} else
{if((state_val_33569 === 1))
{var inst_33562 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$565,true], 0));var state_33568__$1 = state_33568;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33568__$1,2,inst_33562);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33573 = [null,null,null,null,null,null,null];(statearr_33573[0] = state_machine__5548__auto__);
(statearr_33573[1] = 1);
return statearr_33573;
});
var state_machine__5548__auto____1 = (function (state_33568){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33568);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33574){if((e33574 instanceof Object))
{var ex__5551__auto__ = e33574;var statearr_33575_33577 = state_33568;(statearr_33575_33577[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33568);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33578 = state_33568;
state_33568 = G__33578;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33568){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33576 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33598){var state_val_33599 = (state_33598[1]);if((state_val_33599 === 2))
{var inst_33595 = (state_33598[2]);var inst_33596 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$668,inst_33595], 0));var state_33598__$1 = state_33598;return cljs.core.async.impl.ioc_helpers.return_chan(state_33598__$1,inst_33596);
} else
{if((state_val_33599 === 1))
{var inst_33593 = clustermap.api.investment_stats();var state_33598__$1 = state_33598;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33598__$1,2,inst_33593);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33603 = [null,null,null,null,null,null,null];(statearr_33603[0] = state_machine__5548__auto__);
(statearr_33603[1] = 1);
return statearr_33603;
});
var state_machine__5548__auto____1 = (function (state_33598){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33598);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33604){if((e33604 instanceof Object))
{var ex__5551__auto__ = e33604;var statearr_33605_33607 = state_33598;(statearr_33605_33607[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33598);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33608 = state_33598;
state_33598 = G__33608;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33598){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33606 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$746,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__33609,type){var vec__33611 = p__33609;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,type,cljs.core.constant$keyword$545,selection], null),cljs.core.constant$keyword$667,selection_investment_stats,cljs.core.constant$keyword$722,selection_investment_account_timelines,cljs.core.constant$keyword$733,selection_investment_aggs,cljs.core.constant$keyword$732,selection_investments,cljs.core.constant$keyword$775,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__33612){var vec__33617 = p__33612;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$731,selector], 0));
var pred__33618 = cljs.core._EQ_;var expr__33619 = type;if(cljs.core.truth_((pred__33618.cljs$core$IFn$_invoke$arity$2 ? pred__33618.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__33619) : pred__33618.call(null,cljs.core.constant$keyword$629,expr__33619))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33618.cljs$core$IFn$_invoke$arity$2 ? pred__33618.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__33619) : pred__33618.call(null,cljs.core.constant$keyword$630,expr__33619))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33618.cljs$core$IFn$_invoke$arity$2 ? pred__33618.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__33619) : pred__33618.call(null,cljs.core.constant$keyword$631,expr__33619))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$734.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$734,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__33622 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33622,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33622,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33622,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33622,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$734,view,cljs.core.constant$keyword$584,type,cljs.core.constant$keyword$580,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__33623){var vec__33626 = p__33623;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33626,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33626,1,null);var map__33627 = clustermap.app.parse_route();var map__33627__$1 = ((cljs.core.seq_QMARK_(map__33627))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33627):map__33627);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33627__$1,cljs.core.constant$keyword$734);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__33629 = clustermap.app.parse_route();var map__33629__$1 = ((cljs.core.seq_QMARK_(map__33629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33629):map__33629);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33629__$1,cljs.core.constant$keyword$580);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33629__$1,cljs.core.constant$keyword$584);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33662){var state_val_33663 = (state_33662[1]);if((state_val_33663 === 2))
{var inst_33653 = (state_33662[7]);var inst_33659 = (state_33662[2]);var inst_33660 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$785,inst_33653,cljs.core.constant$keyword$733,inst_33659], 0));var state_33662__$1 = state_33662;return cljs.core.async.impl.ioc_helpers.return_chan(state_33662__$1,inst_33660);
} else
{if((state_val_33663 === 1))
{var inst_33653 = (state_33662[7]);var inst_33651 = cljs.core.deref(clustermap.app.state);var inst_33652 = cljs.core.constant$keyword$785.cljs$core$IFn$_invoke$arity$1(inst_33651);var inst_33653__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33652,table_view], 0));var inst_33654 = cljs.core.deref(clustermap.app.state);var inst_33655 = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(inst_33654);var inst_33656 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33655,inst_33653__$1], 0));var inst_33657 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33656], 0));var state_33662__$1 = (function (){var statearr_33664 = state_33662;(statearr_33664[7] = inst_33653__$1);
return statearr_33664;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33662__$1,2,inst_33657);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33668 = [null,null,null,null,null,null,null,null];(statearr_33668[0] = state_machine__5548__auto__);
(statearr_33668[1] = 1);
return statearr_33668;
});
var state_machine__5548__auto____1 = (function (state_33662){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33662);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33669){if((e33669 instanceof Object))
{var ex__5551__auto__ = e33669;var statearr_33670_33672 = state_33662;(statearr_33670_33672[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33662);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33673 = state_33662;
state_33662 = G__33673;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33662){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33671 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33706){var state_val_33707 = (state_33706[1]);if((state_val_33707 === 2))
{var inst_33697 = (state_33706[7]);var inst_33703 = (state_33706[2]);var inst_33704 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$786,inst_33697,cljs.core.constant$keyword$732,inst_33703], 0));var state_33706__$1 = state_33706;return cljs.core.async.impl.ioc_helpers.return_chan(state_33706__$1,inst_33704);
} else
{if((state_val_33707 === 1))
{var inst_33697 = (state_33706[7]);var inst_33695 = cljs.core.deref(clustermap.app.state);var inst_33696 = cljs.core.constant$keyword$786.cljs$core$IFn$_invoke$arity$1(inst_33695);var inst_33697__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33696,table_view], 0));var inst_33698 = cljs.core.deref(clustermap.app.state);var inst_33699 = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(inst_33698);var inst_33700 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33699,inst_33697__$1], 0));var inst_33701 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33700], 0));var state_33706__$1 = (function (){var statearr_33708 = state_33706;(statearr_33708[7] = inst_33697__$1);
return statearr_33708;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33706__$1,2,inst_33701);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33712 = [null,null,null,null,null,null,null,null];(statearr_33712[0] = state_machine__5548__auto__);
(statearr_33712[1] = 1);
return statearr_33712;
});
var state_machine__5548__auto____1 = (function (state_33706){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33706);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33713){if((e33713 instanceof Object))
{var ex__5551__auto__ = e33713;var statearr_33714_33716 = state_33706;(statearr_33714_33716[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33706);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33717 = state_33706;
state_33706 = G__33717;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33706){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33715 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$747,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$600,clustermap.app.set_selection_route,cljs.core.constant$keyword$788,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$635,clustermap.app.set_view_route,cljs.core.constant$keyword$789,clustermap.app.change_view,cljs.core.constant$keyword$692,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$659,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___33734 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33726 = params__9285__auto__;var map__33726__$1 = ((cljs.core.seq_QMARK_(map__33726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33726):map__33726);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33727 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___33734);
var action__9284__auto___33735 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33728 = params__9285__auto__;var map__33728__$1 = ((cljs.core.seq_QMARK_(map__33728))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33728):map__33728);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33729 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___33735);
var action__9284__auto___33736 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33730 = params__9285__auto__;var map__33730__$1 = ((cljs.core.seq_QMARK_(map__33730))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33730):map__33730);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33730__$1,cljs.core.constant$keyword$734);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33731 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33731,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___33736);
var action__9284__auto___33737 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33732 = params__9285__auto__;var map__33732__$1 = ((cljs.core.seq_QMARK_(map__33732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33732):map__33732);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33732__$1,cljs.core.constant$keyword$580);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33732__$1,cljs.core.constant$keyword$584);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33732__$1,cljs.core.constant$keyword$734);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33733 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33733,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33733,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33733,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___33737);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$633,comm,cljs.core.constant$keyword$632,path_fn,cljs.core.constant$keyword$649,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33784){var state_val_33785 = (state_33784[1]);if((state_val_33785 === 7))
{var inst_33773 = (state_33784[2]);var inst_33774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33773,0,null);var inst_33775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33773,1,null);var inst_33776 = clustermap.app.handle_event(inst_33774,inst_33775);var state_33784__$1 = (function (){var statearr_33786 = state_33784;(statearr_33786[7] = inst_33776);
return statearr_33786;
})();var statearr_33787_33800 = state_33784__$1;(statearr_33787_33800[2] = null);
(statearr_33787_33800[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33785 === 6))
{var inst_33780 = (state_33784[2]);var state_33784__$1 = state_33784;var statearr_33788_33801 = state_33784__$1;(statearr_33788_33801[2] = inst_33780);
(statearr_33788_33801[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33785 === 5))
{var state_33784__$1 = state_33784;var statearr_33789_33802 = state_33784__$1;(statearr_33789_33802[2] = null);
(statearr_33789_33802[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33785 === 4))
{var state_33784__$1 = state_33784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33784__$1,7,comm);
} else
{if((state_val_33785 === 3))
{var inst_33782 = (state_33784[2]);var state_33784__$1 = state_33784;return cljs.core.async.impl.ioc_helpers.return_chan(state_33784__$1,inst_33782);
} else
{if((state_val_33785 === 2))
{var state_33784__$1 = state_33784;if(true)
{var statearr_33790_33803 = state_33784__$1;(statearr_33790_33803[1] = 4);
} else
{var statearr_33791_33804 = state_33784__$1;(statearr_33791_33804[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33785 === 1))
{var state_33784__$1 = state_33784;var statearr_33792_33805 = state_33784__$1;(statearr_33792_33805[2] = null);
(statearr_33792_33805[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_33796 = [null,null,null,null,null,null,null,null];(statearr_33796[0] = state_machine__5548__auto__);
(statearr_33796[1] = 1);
return statearr_33796;
});
var state_machine__5548__auto____1 = (function (state_33784){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33784);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33797){if((e33797 instanceof Object))
{var ex__5551__auto__ = e33797;var statearr_33798_33806 = state_33784;(statearr_33798_33806[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33784);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33807 = state_33784;
state_33784 = G__33807;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33784){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33799 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
