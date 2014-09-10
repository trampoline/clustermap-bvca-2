// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('secretary.core');
goog.require('clustermap.components.multiview');
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
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.select_chooser');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.components.multiview');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$990,cljs.core.constant$keyword$1104,cljs.core.constant$keyword$1120,cljs.core.constant$keyword$974,cljs.core.constant$keyword$1121,cljs.core.constant$keyword$973,cljs.core.constant$keyword$1122,cljs.core.constant$keyword$960,cljs.core.constant$keyword$1123,cljs.core.constant$keyword$1124,cljs.core.constant$keyword$993,cljs.core.constant$keyword$1125,cljs.core.constant$keyword$997,cljs.core.constant$keyword$1097,cljs.core.constant$keyword$969,cljs.core.constant$keyword$819,cljs.core.constant$keyword$992,cljs.core.constant$keyword$996],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$822,cljs.core.constant$keyword$1097,cljs.core.constant$keyword$808,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1054,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1055,null], null),cljs.core.constant$keyword$1098,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1007,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$822,cljs.core.constant$keyword$1129,cljs.core.constant$keyword$1128,"companies",cljs.core.constant$keyword$1103,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1099,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1104,null,cljs.core.constant$keyword$807,null,cljs.core.constant$keyword$1105,null,cljs.core.constant$keyword$1107,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$822,cljs.core.constant$keyword$943,cljs.core.constant$keyword$820,"companies",cljs.core.constant$keyword$1115,"company",cljs.core.constant$keyword$895,"boundaryline_id",cljs.core.constant$keyword$1116,"!latest_employee_count"], null),cljs.core.constant$keyword$1106,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1035,cljs.core.constant$keyword$1049], null),cljs.core.constant$keyword$1118,cljs.core.constant$keyword$1053,cljs.core.constant$keyword$1116,cljs.core.constant$keyword$1130], null)], null),cljs.core.constant$keyword$935,null], null),cljs.core.constant$keyword$1126,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$822,cljs.core.constant$keyword$1131,cljs.core.constant$keyword$1128,"company_accounts",cljs.core.constant$keyword$1099,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1116,"accounts_date",cljs.core.constant$keyword$1132,"2003-01-01",cljs.core.constant$keyword$1133,"2012-01-01",cljs.core.constant$keyword$1134,"year"], null),cljs.core.constant$keyword$935,null], null),cljs.core.constant$keyword$1127,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$822,cljs.core.constant$keyword$1127,cljs.core.constant$keyword$1128,"companies",cljs.core.constant$keyword$1099,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$814,null,cljs.core.constant$keyword$1135,(0),cljs.core.constant$keyword$1136,(50),cljs.core.constant$keyword$1137,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$935,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$818,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$820,null,cljs.core.constant$keyword$821,null,cljs.core.constant$keyword$819,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$820,null,cljs.core.constant$keyword$821,null,cljs.core.constant$keyword$819,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$820,null,cljs.core.constant$keyword$821,null,cljs.core.constant$keyword$819,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$819,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$1007]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__37046){var vec__37047 = p__37046;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__37047,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__37047,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__37048){var map__37050 = p__37048;var map__37050__$1 = ((cljs.core.seq_QMARK_(map__37050))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37050):map__37050);var path_values = map__37050__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__37048 = null;if (arguments.length > 0) {
  p__37048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__37048);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__37051){
var p__37048 = cljs.core.seq(arglist__37051);
return set_state__delegate(p__37048);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
/**
* @param {...*} var_args
*/
clustermap.app.get_state = (function() { 
var get_state__delegate = function (path){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clustermap.app.state),cljs.core.flatten(path));
};
var get_state = function (var_args){
var path = null;if (arguments.length > 0) {
  path = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return get_state__delegate.call(this,path);};
get_state.cljs$lang$maxFixedArity = 0;
get_state.cljs$lang$applyTo = (function (arglist__37052){
var path = cljs.core.seq(arglist__37052);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__37057 = cljs.core.seq(clustermap.app.bl_collections);var chunk__37058 = null;var count__37059 = (0);var i__37060 = (0);while(true){
if((i__37060 < count__37059))
{var blcoll = chunk__37058.cljs$core$IIndexed$_nth$arity$2(null,i__37060);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$819,blcoll);
{
var G__37061 = seq__37057;
var G__37062 = chunk__37058;
var G__37063 = count__37059;
var G__37064 = (i__37060 + (1));
seq__37057 = G__37061;
chunk__37058 = G__37062;
count__37059 = G__37063;
i__37060 = G__37064;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37057);if(temp__4126__auto__)
{var seq__37057__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37057__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__37057__$1);{
var G__37065 = cljs.core.chunk_rest(seq__37057__$1);
var G__37066 = c__4297__auto__;
var G__37067 = cljs.core.count(c__4297__auto__);
var G__37068 = (0);
seq__37057 = G__37065;
chunk__37058 = G__37066;
count__37059 = G__37067;
i__37060 = G__37068;
continue;
}
} else
{var blcoll = cljs.core.first(seq__37057__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$819,blcoll);
{
var G__37069 = cljs.core.next(seq__37057__$1);
var G__37070 = null;
var G__37071 = (0);
var G__37072 = (0);
seq__37057 = G__37069;
chunk__37058 = G__37070;
count__37059 = G__37071;
i__37060 = G__37072;
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
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_37092){var state_val_37093 = (state_37092[(1)]);if((state_val_37093 === (2)))
{var inst_37089 = (state_37092[(2)]);var inst_37090 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$974,inst_37089], 0));var state_37092__$1 = state_37092;return cljs.core.async.impl.ioc_helpers.return_chan(state_37092__$1,inst_37090);
} else
{if((state_val_37093 === (1)))
{var inst_37087 = clustermap.api.investment_stats();var state_37092__$1 = state_37092;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37092__$1,(2),inst_37087);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37097 = [null,null,null,null,null,null,null];(statearr_37097[(0)] = state_machine__5677__auto__);
(statearr_37097[(1)] = (1));
return statearr_37097;
});
var state_machine__5677__auto____1 = (function (state_37092){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37092);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37098){if((e37098 instanceof Object))
{var ex__5680__auto__ = e37098;var statearr_37099_37101 = state_37092;(statearr_37099_37101[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37092);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e37098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__37102 = state_37092;
state_37092 = G__37102;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37092){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_37100 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_37100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$997,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__37103,type){var vec__37105 = p__37103;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$822,type,cljs.core.constant$keyword$853,selection], null),cljs.core.constant$keyword$973,selection_investment_stats,cljs.core.constant$keyword$960,selection_investment_account_timelines,cljs.core.constant$keyword$993,selection_investment_aggs,cljs.core.constant$keyword$992,selection_investments,cljs.core.constant$keyword$1122], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__37106){var vec__37111 = p__37106;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$990.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$990,selector], 0));
var pred__37112 = cljs.core._EQ_;var expr__37113 = type;if(cljs.core.truth_((pred__37112.cljs$core$IFn$_invoke$arity$2 ? pred__37112.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$907,expr__37113) : pred__37112.call(null,cljs.core.constant$keyword$907,expr__37113))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37112.cljs$core$IFn$_invoke$arity$2 ? pred__37112.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$908,expr__37113) : pred__37112.call(null,cljs.core.constant$keyword$908,expr__37113))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37112.cljs$core$IFn$_invoke$arity$2 ? pred__37112.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$910,expr__37113) : pred__37112.call(null,cljs.core.constant$keyword$910,expr__37113))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$996,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__37118 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37118,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37118,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37118,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37118,(3),null);var type__$1 = ((((function (){var G__37119 = type;var G__37119__$1 = (((G__37119 == null))?null:clojure.string.trim(G__37119));var G__37119__$2 = (((G__37119__$1 == null))?null:cljs.core.count(G__37119__$1));return G__37119__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__37120 = id;var G__37120__$1 = (((G__37120 == null))?null:clojure.string.trim(G__37120));var G__37120__$2 = (((G__37120__$1 == null))?null:cljs.core.count(G__37120__$1));return G__37120__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$996,view,cljs.core.constant$keyword$822,type__$1,cljs.core.constant$keyword$824,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__37121){var vec__37124 = p__37121;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124,(1),null);var map__37125 = clustermap.app.parse_route();var map__37125__$1 = ((cljs.core.seq_QMARK_(map__37125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37125):map__37125);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37125__$1,cljs.core.constant$keyword$996);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__37127 = clustermap.app.parse_route();var map__37127__$1 = ((cljs.core.seq_QMARK_(map__37127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37127):map__37127);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127__$1,cljs.core.constant$keyword$824);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127__$1,cljs.core.constant$keyword$822);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_37160){var state_val_37161 = (state_37160[(1)]);if((state_val_37161 === (2)))
{var inst_37151 = (state_37160[(7)]);var inst_37157 = (state_37160[(2)]);var inst_37158 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1123,inst_37151,cljs.core.constant$keyword$993,inst_37157], 0));var state_37160__$1 = state_37160;return cljs.core.async.impl.ioc_helpers.return_chan(state_37160__$1,inst_37158);
} else
{if((state_val_37161 === (1)))
{var inst_37151 = (state_37160[(7)]);var inst_37149 = cljs.core.deref(clustermap.app.state);var inst_37150 = cljs.core.constant$keyword$1123.cljs$core$IFn$_invoke$arity$1(inst_37149);var inst_37151__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37150,table_view], 0));var inst_37152 = cljs.core.deref(clustermap.app.state);var inst_37153 = cljs.core.constant$keyword$990.cljs$core$IFn$_invoke$arity$1(inst_37152);var inst_37154 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37153,inst_37151__$1], 0));var inst_37155 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37154], 0));var state_37160__$1 = (function (){var statearr_37162 = state_37160;(statearr_37162[(7)] = inst_37151__$1);
return statearr_37162;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37160__$1,(2),inst_37155);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37166 = [null,null,null,null,null,null,null,null];(statearr_37166[(0)] = state_machine__5677__auto__);
(statearr_37166[(1)] = (1));
return statearr_37166;
});
var state_machine__5677__auto____1 = (function (state_37160){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37160);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37167){if((e37167 instanceof Object))
{var ex__5680__auto__ = e37167;var statearr_37168_37170 = state_37160;(statearr_37168_37170[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37160);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e37167;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__37171 = state_37160;
state_37160 = G__37171;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37160){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_37169 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_37169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_37204){var state_val_37205 = (state_37204[(1)]);if((state_val_37205 === (2)))
{var inst_37195 = (state_37204[(7)]);var inst_37201 = (state_37204[(2)]);var inst_37202 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1125,inst_37195,cljs.core.constant$keyword$992,inst_37201], 0));var state_37204__$1 = state_37204;return cljs.core.async.impl.ioc_helpers.return_chan(state_37204__$1,inst_37202);
} else
{if((state_val_37205 === (1)))
{var inst_37195 = (state_37204[(7)]);var inst_37193 = cljs.core.deref(clustermap.app.state);var inst_37194 = cljs.core.constant$keyword$1125.cljs$core$IFn$_invoke$arity$1(inst_37193);var inst_37195__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37194,table_view], 0));var inst_37196 = cljs.core.deref(clustermap.app.state);var inst_37197 = cljs.core.constant$keyword$990.cljs$core$IFn$_invoke$arity$1(inst_37196);var inst_37198 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37197,inst_37195__$1], 0));var inst_37199 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37198], 0));var state_37204__$1 = (function (){var statearr_37206 = state_37204;(statearr_37206[(7)] = inst_37195__$1);
return statearr_37206;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37204__$1,(2),inst_37199);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37210 = [null,null,null,null,null,null,null,null];(statearr_37210[(0)] = state_machine__5677__auto__);
(statearr_37210[(1)] = (1));
return statearr_37210;
});
var state_machine__5677__auto____1 = (function (state_37204){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37204);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37211){if((e37211 instanceof Object))
{var ex__5680__auto__ = e37211;var statearr_37212_37214 = state_37204;(statearr_37212_37214[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37204);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e37211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__37215 = state_37204;
state_37204 = G__37215;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37204){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_37213 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_37213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$998,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$860,clustermap.app.set_selection_route,cljs.core.constant$keyword$1138,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1073,clustermap.app.set_view_route,cljs.core.constant$keyword$1139,clustermap.app.change_view,cljs.core.constant$keyword$916,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$924,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9525__auto___37232 = (function (params__9526__auto__){if(cljs.core.map_QMARK_(params__9526__auto__))
{var map__37224 = params__9526__auto__;var map__37224__$1 = ((cljs.core.seq_QMARK_(map__37224))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37224):map__37224);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9526__auto__))
{var vec__37225 = params__9526__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9525__auto___37232);
var action__9525__auto___37233 = (function (params__9526__auto__){if(cljs.core.map_QMARK_(params__9526__auto__))
{var map__37226 = params__9526__auto__;var map__37226__$1 = ((cljs.core.seq_QMARK_(map__37226))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37226):map__37226);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9526__auto__))
{var vec__37227 = params__9526__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9525__auto___37233);
var action__9525__auto___37234 = (function (params__9526__auto__){if(cljs.core.map_QMARK_(params__9526__auto__))
{var map__37228 = params__9526__auto__;var map__37228__$1 = ((cljs.core.seq_QMARK_(map__37228))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37228):map__37228);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37228__$1,cljs.core.constant$keyword$996);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1139,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9526__auto__))
{var vec__37229 = params__9526__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37229,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1139,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9525__auto___37234);
var action__9525__auto___37235 = (function (params__9526__auto__){if(cljs.core.map_QMARK_(params__9526__auto__))
{var map__37230 = params__9526__auto__;var map__37230__$1 = ((cljs.core.seq_QMARK_(map__37230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37230):map__37230);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37230__$1,cljs.core.constant$keyword$824);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37230__$1,cljs.core.constant$keyword$822);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37230__$1,cljs.core.constant$keyword$996);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1139,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9526__auto__))
{var vec__37231 = params__9526__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1139,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9525__auto___37235);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$915,comm,cljs.core.constant$keyword$905,path_fn,cljs.core.constant$keyword$906,link_fn,cljs.core.constant$keyword$1006,clustermap.app.change_view_path,cljs.core.constant$keyword$1113,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$819),cljs.core.constant$keyword$1112,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$819,cljs.core.constant$keyword$1140),cljs.core.constant$keyword$1110,clustermap.app.get_state,cljs.core.constant$keyword$1111,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007], null),"map-component",shared);
clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1097], null),"search-component",shared);
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1107], null),"variable-selection-component",shared,"Variable",cljs.core.constant$keyword$1116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1106], null),"stat-selection-component",shared,"Statistic",cljs.core.constant$keyword$1116,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1106], null),"scale-selection-component",shared,"Scale",cljs.core.constant$keyword$1118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
return clustermap.components.color_scale.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1108], null),"color-scale-component",shared);
});
