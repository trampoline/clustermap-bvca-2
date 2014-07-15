// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$849,cljs.core.constant$keyword$901,cljs.core.constant$keyword$909,cljs.core.constant$keyword$833,cljs.core.constant$keyword$910,cljs.core.constant$keyword$911,cljs.core.constant$keyword$832,cljs.core.constant$keyword$912,cljs.core.constant$keyword$819,cljs.core.constant$keyword$913,cljs.core.constant$keyword$914,cljs.core.constant$keyword$852,cljs.core.constant$keyword$915,cljs.core.constant$keyword$856,cljs.core.constant$keyword$916,cljs.core.constant$keyword$828,cljs.core.constant$keyword$677,cljs.core.constant$keyword$851,cljs.core.constant$keyword$855],[null,null,null,null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$917,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$676,null,cljs.core.constant$keyword$678,null,cljs.core.constant$keyword$677,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$918,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$676,null,cljs.core.constant$keyword$678,null,cljs.core.constant$keyword$677,cljs.core.PersistentArrayMap.EMPTY], null)], null),null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$679,cljs.core.constant$keyword$916,cljs.core.constant$keyword$919,null,cljs.core.constant$keyword$920,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$866,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$679,cljs.core.constant$keyword$925,cljs.core.constant$keyword$923,"companies",cljs.core.constant$keyword$924,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$899,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$901,null,cljs.core.constant$keyword$898,null,cljs.core.constant$keyword$926,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$679,cljs.core.constant$keyword$802,cljs.core.constant$keyword$754,"boundaryline_id",cljs.core.constant$keyword$928,"!latest_employee_count",cljs.core.constant$keyword$929,"uk_boroughs"], null),cljs.core.constant$keyword$927,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$751,clustermap.data.colorchooser.brewer_green,cljs.core.constant$keyword$930,cljs.core.constant$keyword$867], null)], null),cljs.core.constant$keyword$794,null], null),cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$679,cljs.core.constant$keyword$931,cljs.core.constant$keyword$923,"company_accounts",cljs.core.constant$keyword$899,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$928,"accounts_date",cljs.core.constant$keyword$932,"2003-01-01",cljs.core.constant$keyword$933,"2012-01-01",cljs.core.constant$keyword$934,"year"], null),cljs.core.constant$keyword$794,null], null),cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$679,cljs.core.constant$keyword$922,cljs.core.constant$keyword$923,"companies",cljs.core.constant$keyword$899,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$671,null,cljs.core.constant$keyword$935,(0),cljs.core.constant$keyword$936,(50),cljs.core.constant$keyword$937,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$794,null], null)], null)], null),null,null,null,cljs.core.constant$keyword$866]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__34400){var vec__34401 = p__34400;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34401,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34401,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__34401,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__34401,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__34402){var map__34404 = p__34402;var map__34404__$1 = ((cljs.core.seq_QMARK_(map__34404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34404):map__34404);var path_values = map__34404__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__34402 = null;if (arguments.length > 0) {
  p__34402 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__34402);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__34405){
var p__34402 = cljs.core.seq(arglist__34405);
return set_state__delegate(p__34402);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$917,cljs.core.constant$keyword$918], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__34410 = cljs.core.seq(clustermap.app.bl_collections);var chunk__34411 = null;var count__34412 = (0);var i__34413 = (0);while(true){
if((i__34413 < count__34412))
{var blcoll = chunk__34411.cljs$core$IIndexed$_nth$arity$2(null,i__34413);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$911,blcoll);
{
var G__34414 = seq__34410;
var G__34415 = chunk__34411;
var G__34416 = count__34412;
var G__34417 = (i__34413 + (1));
seq__34410 = G__34414;
chunk__34411 = G__34415;
count__34412 = G__34416;
i__34413 = G__34417;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__34410);if(temp__4126__auto__)
{var seq__34410__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34410__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__34410__$1);{
var G__34418 = cljs.core.chunk_rest(seq__34410__$1);
var G__34419 = c__4299__auto__;
var G__34420 = cljs.core.count(c__4299__auto__);
var G__34421 = (0);
seq__34410 = G__34418;
chunk__34411 = G__34419;
count__34412 = G__34420;
i__34413 = G__34421;
continue;
}
} else
{var blcoll = cljs.core.first(seq__34410__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$911,blcoll);
{
var G__34422 = cljs.core.next(seq__34410__$1);
var G__34423 = null;
var G__34424 = (0);
var G__34425 = (0);
seq__34410 = G__34422;
chunk__34411 = G__34423;
count__34412 = G__34424;
i__34413 = G__34425;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34449){var state_val_34450 = (state_34449[(1)]);if((state_val_34450 === (2)))
{var inst_34444 = (state_34449[(2)]);var inst_34445 = [cljs.core.constant$keyword$916,cljs.core.constant$keyword$920,cljs.core.constant$keyword$866,cljs.core.constant$keyword$794];var inst_34446 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34445,null));var inst_34447 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34446,inst_34444], 0));var state_34449__$1 = state_34449;return cljs.core.async.impl.ioc_helpers.return_chan(state_34449__$1,inst_34447);
} else
{if((state_val_34450 === (1)))
{var inst_34442 = clustermap.api.boundaryline_aggregation("companies","company","uk_boroughs","!latest_employee_count");var state_34449__$1 = state_34449;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34449__$1,(2),inst_34442);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34454 = [null,null,null,null,null,null,null];(statearr_34454[(0)] = state_machine__5679__auto__);
(statearr_34454[(1)] = (1));
return statearr_34454;
});
var state_machine__5679__auto____1 = (function (state_34449){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34449);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object))
{var ex__5682__auto__ = e34455;var statearr_34456_34458 = state_34449;(statearr_34456_34458[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34449);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e34455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__34459 = state_34449;
state_34449 = G__34459;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34449){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34457 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34479){var state_val_34480 = (state_34479[(1)]);if((state_val_34480 === (2)))
{var inst_34476 = (state_34479[(2)]);var inst_34477 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$833,inst_34476], 0));var state_34479__$1 = state_34479;return cljs.core.async.impl.ioc_helpers.return_chan(state_34479__$1,inst_34477);
} else
{if((state_val_34480 === (1)))
{var inst_34474 = clustermap.api.investment_stats();var state_34479__$1 = state_34479;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34479__$1,(2),inst_34474);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34484 = [null,null,null,null,null,null,null];(statearr_34484[(0)] = state_machine__5679__auto__);
(statearr_34484[(1)] = (1));
return statearr_34484;
});
var state_machine__5679__auto____1 = (function (state_34479){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34479);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34485){if((e34485 instanceof Object))
{var ex__5682__auto__ = e34485;var statearr_34486_34488 = state_34479;(statearr_34486_34488[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34479);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e34485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__34489 = state_34479;
state_34479 = G__34489;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34479){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34487 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$856,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__34490,type){var vec__34492 = p__34490;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$679,type,cljs.core.constant$keyword$711,selection], null),cljs.core.constant$keyword$832,selection_investment_stats,cljs.core.constant$keyword$819,selection_investment_account_timelines,cljs.core.constant$keyword$852,selection_investment_aggs,cljs.core.constant$keyword$851,selection_investments,cljs.core.constant$keyword$912], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__34493){var vec__34498 = p__34493;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34498,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34498,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$849.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$849,selector], 0));
var pred__34499 = cljs.core._EQ_;var expr__34500 = type;if(cljs.core.truth_((pred__34499.cljs$core$IFn$_invoke$arity$2 ? pred__34499.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$766,expr__34500) : pred__34499.call(null,cljs.core.constant$keyword$766,expr__34500))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34499.cljs$core$IFn$_invoke$arity$2 ? pred__34499.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$767,expr__34500) : pred__34499.call(null,cljs.core.constant$keyword$767,expr__34500))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34499.cljs$core$IFn$_invoke$arity$2 ? pred__34499.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$769,expr__34500) : pred__34499.call(null,cljs.core.constant$keyword$769,expr__34500))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$855.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$855,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3531__auto__ = type;if(cljs.core.truth_(and__3531__auto__))
{return id;
} else
{return and__3531__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3543__auto__ = view;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__34505 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(3),null);var type__$1 = ((((function (){var G__34506 = type;var G__34506__$1 = (((G__34506 == null))?null:clojure.string.trim(G__34506));var G__34506__$2 = (((G__34506__$1 == null))?null:cljs.core.count(G__34506__$1));return G__34506__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__34507 = id;var G__34507__$1 = (((G__34507 == null))?null:clojure.string.trim(G__34507));var G__34507__$2 = (((G__34507__$1 == null))?null:cljs.core.count(G__34507__$1));return G__34507__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$855,view,cljs.core.constant$keyword$679,type__$1,cljs.core.constant$keyword$681,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__34508){var vec__34511 = p__34508;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34511,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34511,(1),null);var map__34512 = clustermap.app.parse_route();var map__34512__$1 = ((cljs.core.seq_QMARK_(map__34512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34512):map__34512);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34512__$1,cljs.core.constant$keyword$855);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__34514 = clustermap.app.parse_route();var map__34514__$1 = ((cljs.core.seq_QMARK_(map__34514))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34514):map__34514);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34514__$1,cljs.core.constant$keyword$681);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34514__$1,cljs.core.constant$keyword$679);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34547){var state_val_34548 = (state_34547[(1)]);if((state_val_34548 === (2)))
{var inst_34538 = (state_34547[(7)]);var inst_34544 = (state_34547[(2)]);var inst_34545 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$913,inst_34538,cljs.core.constant$keyword$852,inst_34544], 0));var state_34547__$1 = state_34547;return cljs.core.async.impl.ioc_helpers.return_chan(state_34547__$1,inst_34545);
} else
{if((state_val_34548 === (1)))
{var inst_34538 = (state_34547[(7)]);var inst_34536 = cljs.core.deref(clustermap.app.state);var inst_34537 = cljs.core.constant$keyword$913.cljs$core$IFn$_invoke$arity$1(inst_34536);var inst_34538__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34537,table_view], 0));var inst_34539 = cljs.core.deref(clustermap.app.state);var inst_34540 = cljs.core.constant$keyword$849.cljs$core$IFn$_invoke$arity$1(inst_34539);var inst_34541 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34540,inst_34538__$1], 0));var inst_34542 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34541], 0));var state_34547__$1 = (function (){var statearr_34549 = state_34547;(statearr_34549[(7)] = inst_34538__$1);
return statearr_34549;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34547__$1,(2),inst_34542);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34553 = [null,null,null,null,null,null,null,null];(statearr_34553[(0)] = state_machine__5679__auto__);
(statearr_34553[(1)] = (1));
return statearr_34553;
});
var state_machine__5679__auto____1 = (function (state_34547){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34547);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34554){if((e34554 instanceof Object))
{var ex__5682__auto__ = e34554;var statearr_34555_34557 = state_34547;(statearr_34555_34557[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34547);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e34554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__34558 = state_34547;
state_34547 = G__34558;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34547){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34556 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34591){var state_val_34592 = (state_34591[(1)]);if((state_val_34592 === (2)))
{var inst_34582 = (state_34591[(7)]);var inst_34588 = (state_34591[(2)]);var inst_34589 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$915,inst_34582,cljs.core.constant$keyword$851,inst_34588], 0));var state_34591__$1 = state_34591;return cljs.core.async.impl.ioc_helpers.return_chan(state_34591__$1,inst_34589);
} else
{if((state_val_34592 === (1)))
{var inst_34582 = (state_34591[(7)]);var inst_34580 = cljs.core.deref(clustermap.app.state);var inst_34581 = cljs.core.constant$keyword$915.cljs$core$IFn$_invoke$arity$1(inst_34580);var inst_34582__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34581,table_view], 0));var inst_34583 = cljs.core.deref(clustermap.app.state);var inst_34584 = cljs.core.constant$keyword$849.cljs$core$IFn$_invoke$arity$1(inst_34583);var inst_34585 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34584,inst_34582__$1], 0));var inst_34586 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34585], 0));var state_34591__$1 = (function (){var statearr_34593 = state_34591;(statearr_34593[(7)] = inst_34582__$1);
return statearr_34593;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34591__$1,(2),inst_34586);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34597 = [null,null,null,null,null,null,null,null];(statearr_34597[(0)] = state_machine__5679__auto__);
(statearr_34597[(1)] = (1));
return statearr_34597;
});
var state_machine__5679__auto____1 = (function (state_34591){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34591);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34598){if((e34598 instanceof Object))
{var ex__5682__auto__ = e34598;var statearr_34599_34601 = state_34591;(statearr_34599_34601[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34591);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e34598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__34602 = state_34591;
state_34591 = G__34602;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34591){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34600 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$857,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$718,clustermap.app.set_selection_route,cljs.core.constant$keyword$938,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$877,clustermap.app.set_view_route,cljs.core.constant$keyword$939,clustermap.app.change_view,cljs.core.constant$keyword$775,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$783,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9471__auto___34619 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34611 = params__9472__auto__;var map__34611__$1 = ((cljs.core.seq_QMARK_(map__34611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34611):map__34611);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34612 = params__9472__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9471__auto___34619);
var action__9471__auto___34620 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34613 = params__9472__auto__;var map__34613__$1 = ((cljs.core.seq_QMARK_(map__34613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34613):map__34613);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34614 = params__9472__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9471__auto___34620);
var action__9471__auto___34621 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34615 = params__9472__auto__;var map__34615__$1 = ((cljs.core.seq_QMARK_(map__34615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34615):map__34615);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615__$1,cljs.core.constant$keyword$855);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$939,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34616 = params__9472__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$939,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9471__auto___34621);
var action__9471__auto___34622 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34617 = params__9472__auto__;var map__34617__$1 = ((cljs.core.seq_QMARK_(map__34617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34617):map__34617);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34617__$1,cljs.core.constant$keyword$681);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34617__$1,cljs.core.constant$keyword$679);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34617__$1,cljs.core.constant$keyword$855);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$939,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34618 = params__9472__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34618,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34618,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34618,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$939,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9471__auto___34622);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$774,comm,cljs.core.constant$keyword$764,path_fn,cljs.core.constant$keyword$765,link_fn,cljs.core.constant$keyword$865,clustermap.app.change_view_path,cljs.core.constant$keyword$904,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.get_or_fetch_best_boundaryline,clustermap.app.state,cljs.core.constant$keyword$911,cljs.core.constant$keyword$917),cljs.core.constant$keyword$903,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$911,cljs.core.constant$keyword$917)], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.app.load_initial_aggregations();
return clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$916,cljs.core.constant$keyword$920,cljs.core.constant$keyword$866], null),"map-component",shared);
});
