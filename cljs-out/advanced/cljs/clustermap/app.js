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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$740,cljs.core.constant$keyword$691,cljs.core.constant$keyword$782,cljs.core.constant$keyword$671,cljs.core.constant$keyword$791,cljs.core.constant$keyword$792,cljs.core.constant$keyword$737,cljs.core.constant$keyword$739,cljs.core.constant$keyword$643,cljs.core.constant$keyword$781,cljs.core.constant$keyword$783,cljs.core.constant$keyword$727,cljs.core.constant$keyword$738,cljs.core.constant$keyword$672,cljs.core.constant$keyword$752,cljs.core.constant$keyword$793,cljs.core.constant$keyword$784],[cljs.core.constant$keyword$787,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__33551){var vec__33552 = p__33551;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33552,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33552,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__33553){var map__33555 = p__33553;var map__33555__$1 = ((cljs.core.seq_QMARK_(map__33555))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33555):map__33555);var path_values = map__33555__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__33553 = null;if (arguments.length > 0) {
  p__33553 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__33553);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__33556){
var p__33553 = cljs.core.seq(arglist__33556);
return set_state__delegate(p__33553);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33578){var state_val_33579 = (state_33578[1]);if((state_val_33579 === 2))
{var inst_33574 = (state_33578[2]);var inst_33575 = clustermap.rtree.rtree_index(inst_33574);var inst_33576 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$782,inst_33574,cljs.core.constant$keyword$783,inst_33575], 0));var state_33578__$1 = state_33578;return cljs.core.async.impl.ioc_helpers.return_chan(state_33578__$1,inst_33576);
} else
{if((state_val_33579 === 1))
{var inst_33572 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$569,true], 0));var state_33578__$1 = state_33578;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33578__$1,2,inst_33572);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33583 = [null,null,null,null,null,null,null];(statearr_33583[0] = state_machine__5548__auto__);
(statearr_33583[1] = 1);
return statearr_33583;
});
var state_machine__5548__auto____1 = (function (state_33578){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33578);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33584){if((e33584 instanceof Object))
{var ex__5551__auto__ = e33584;var statearr_33585_33587 = state_33578;(statearr_33585_33587[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33578);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33588 = state_33578;
state_33578 = G__33588;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33578){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33586 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33608){var state_val_33609 = (state_33608[1]);if((state_val_33609 === 2))
{var inst_33605 = (state_33608[2]);var inst_33606 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$672,inst_33605], 0));var state_33608__$1 = state_33608;return cljs.core.async.impl.ioc_helpers.return_chan(state_33608__$1,inst_33606);
} else
{if((state_val_33609 === 1))
{var inst_33603 = clustermap.api.investment_stats();var state_33608__$1 = state_33608;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33608__$1,2,inst_33603);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33613 = [null,null,null,null,null,null,null];(statearr_33613[0] = state_machine__5548__auto__);
(statearr_33613[1] = 1);
return statearr_33613;
});
var state_machine__5548__auto____1 = (function (state_33608){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33608);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33614){if((e33614 instanceof Object))
{var ex__5551__auto__ = e33614;var statearr_33615_33617 = state_33608;(statearr_33615_33617[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33608);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33618 = state_33608;
state_33608 = G__33618;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33608){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33616 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$752,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__33619,type){var vec__33621 = p__33619;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$643,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$549,selection], null),cljs.core.constant$keyword$671,selection_investment_stats,cljs.core.constant$keyword$727,selection_investment_account_timelines,cljs.core.constant$keyword$739,selection_investment_aggs,cljs.core.constant$keyword$738,selection_investments,cljs.core.constant$keyword$781,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__33622){var vec__33627 = p__33622;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$737.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$737,selector], 0));
var pred__33628 = cljs.core._EQ_;var expr__33629 = type;if(cljs.core.truth_((pred__33628.cljs$core$IFn$_invoke$arity$2 ? pred__33628.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__33629) : pred__33628.call(null,cljs.core.constant$keyword$633,expr__33629))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33628.cljs$core$IFn$_invoke$arity$2 ? pred__33628.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$634,expr__33629) : pred__33628.call(null,cljs.core.constant$keyword$634,expr__33629))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33628.cljs$core$IFn$_invoke$arity$2 ? pred__33628.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$635,expr__33629) : pred__33628.call(null,cljs.core.constant$keyword$635,expr__33629))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$740,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__33632 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$740,view,cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$584,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__33633){var vec__33636 = p__33633;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33636,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33636,1,null);var map__33637 = clustermap.app.parse_route();var map__33637__$1 = ((cljs.core.seq_QMARK_(map__33637))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33637):map__33637);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33637__$1,cljs.core.constant$keyword$740);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__33639 = clustermap.app.parse_route();var map__33639__$1 = ((cljs.core.seq_QMARK_(map__33639))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33639):map__33639);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33639__$1,cljs.core.constant$keyword$584);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33639__$1,cljs.core.constant$keyword$588);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33672){var state_val_33673 = (state_33672[1]);if((state_val_33673 === 2))
{var inst_33663 = (state_33672[7]);var inst_33669 = (state_33672[2]);var inst_33670 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$791,inst_33663,cljs.core.constant$keyword$739,inst_33669], 0));var state_33672__$1 = state_33672;return cljs.core.async.impl.ioc_helpers.return_chan(state_33672__$1,inst_33670);
} else
{if((state_val_33673 === 1))
{var inst_33663 = (state_33672[7]);var inst_33661 = cljs.core.deref(clustermap.app.state);var inst_33662 = cljs.core.constant$keyword$791.cljs$core$IFn$_invoke$arity$1(inst_33661);var inst_33663__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33662,table_view], 0));var inst_33664 = cljs.core.deref(clustermap.app.state);var inst_33665 = cljs.core.constant$keyword$737.cljs$core$IFn$_invoke$arity$1(inst_33664);var inst_33666 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33665,inst_33663__$1], 0));var inst_33667 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33666], 0));var state_33672__$1 = (function (){var statearr_33674 = state_33672;(statearr_33674[7] = inst_33663__$1);
return statearr_33674;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33672__$1,2,inst_33667);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33678 = [null,null,null,null,null,null,null,null];(statearr_33678[0] = state_machine__5548__auto__);
(statearr_33678[1] = 1);
return statearr_33678;
});
var state_machine__5548__auto____1 = (function (state_33672){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33672);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33679){if((e33679 instanceof Object))
{var ex__5551__auto__ = e33679;var statearr_33680_33682 = state_33672;(statearr_33680_33682[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33672);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33683 = state_33672;
state_33672 = G__33683;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33672){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33681 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33716){var state_val_33717 = (state_33716[1]);if((state_val_33717 === 2))
{var inst_33707 = (state_33716[7]);var inst_33713 = (state_33716[2]);var inst_33714 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$792,inst_33707,cljs.core.constant$keyword$738,inst_33713], 0));var state_33716__$1 = state_33716;return cljs.core.async.impl.ioc_helpers.return_chan(state_33716__$1,inst_33714);
} else
{if((state_val_33717 === 1))
{var inst_33707 = (state_33716[7]);var inst_33705 = cljs.core.deref(clustermap.app.state);var inst_33706 = cljs.core.constant$keyword$792.cljs$core$IFn$_invoke$arity$1(inst_33705);var inst_33707__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33706,table_view], 0));var inst_33708 = cljs.core.deref(clustermap.app.state);var inst_33709 = cljs.core.constant$keyword$737.cljs$core$IFn$_invoke$arity$1(inst_33708);var inst_33710 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33709,inst_33707__$1], 0));var inst_33711 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33710], 0));var state_33716__$1 = (function (){var statearr_33718 = state_33716;(statearr_33718[7] = inst_33707__$1);
return statearr_33718;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33716__$1,2,inst_33711);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33722 = [null,null,null,null,null,null,null,null];(statearr_33722[0] = state_machine__5548__auto__);
(statearr_33722[1] = 1);
return statearr_33722;
});
var state_machine__5548__auto____1 = (function (state_33716){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33716);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33723){if((e33723 instanceof Object))
{var ex__5551__auto__ = e33723;var statearr_33724_33726 = state_33716;(statearr_33724_33726[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33716);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33727 = state_33716;
state_33716 = G__33727;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33716){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33725 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$753,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$604,clustermap.app.set_selection_route,cljs.core.constant$keyword$794,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$639,clustermap.app.set_view_route,cljs.core.constant$keyword$795,clustermap.app.change_view,cljs.core.constant$keyword$697,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$663,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___33744 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33736 = params__9285__auto__;var map__33736__$1 = ((cljs.core.seq_QMARK_(map__33736))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33736):map__33736);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33737 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___33744);
var action__9284__auto___33745 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33738 = params__9285__auto__;var map__33738__$1 = ((cljs.core.seq_QMARK_(map__33738))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33738):map__33738);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33739 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___33745);
var action__9284__auto___33746 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33740 = params__9285__auto__;var map__33740__$1 = ((cljs.core.seq_QMARK_(map__33740))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33740):map__33740);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33740__$1,cljs.core.constant$keyword$740);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33741 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___33746);
var action__9284__auto___33747 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33742 = params__9285__auto__;var map__33742__$1 = ((cljs.core.seq_QMARK_(map__33742))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33742):map__33742);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33742__$1,cljs.core.constant$keyword$584);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33742__$1,cljs.core.constant$keyword$588);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33742__$1,cljs.core.constant$keyword$740);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33743 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___33747);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$637,comm,cljs.core.constant$keyword$636,path_fn,cljs.core.constant$keyword$653,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33794){var state_val_33795 = (state_33794[1]);if((state_val_33795 === 7))
{var inst_33783 = (state_33794[2]);var inst_33784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33783,0,null);var inst_33785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33783,1,null);var inst_33786 = clustermap.app.handle_event(inst_33784,inst_33785);var state_33794__$1 = (function (){var statearr_33796 = state_33794;(statearr_33796[7] = inst_33786);
return statearr_33796;
})();var statearr_33797_33810 = state_33794__$1;(statearr_33797_33810[2] = null);
(statearr_33797_33810[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33795 === 6))
{var inst_33790 = (state_33794[2]);var state_33794__$1 = state_33794;var statearr_33798_33811 = state_33794__$1;(statearr_33798_33811[2] = inst_33790);
(statearr_33798_33811[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33795 === 5))
{var state_33794__$1 = state_33794;var statearr_33799_33812 = state_33794__$1;(statearr_33799_33812[2] = null);
(statearr_33799_33812[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33795 === 4))
{var state_33794__$1 = state_33794;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33794__$1,7,comm);
} else
{if((state_val_33795 === 3))
{var inst_33792 = (state_33794[2]);var state_33794__$1 = state_33794;return cljs.core.async.impl.ioc_helpers.return_chan(state_33794__$1,inst_33792);
} else
{if((state_val_33795 === 2))
{var state_33794__$1 = state_33794;if(true)
{var statearr_33800_33813 = state_33794__$1;(statearr_33800_33813[1] = 4);
} else
{var statearr_33801_33814 = state_33794__$1;(statearr_33801_33814[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33795 === 1))
{var state_33794__$1 = state_33794;var statearr_33802_33815 = state_33794__$1;(statearr_33802_33815[2] = null);
(statearr_33802_33815[1] = 2);
return cljs.core.constant$keyword$555;
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
var state_machine__5548__auto____0 = (function (){var statearr_33806 = [null,null,null,null,null,null,null,null];(statearr_33806[0] = state_machine__5548__auto__);
(statearr_33806[1] = 1);
return statearr_33806;
});
var state_machine__5548__auto____1 = (function (state_33794){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33794);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33807){if((e33807 instanceof Object))
{var ex__5551__auto__ = e33807;var statearr_33808_33816 = state_33794;(statearr_33808_33816[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33794);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33817 = state_33794;
state_33794 = G__33817;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33809 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
