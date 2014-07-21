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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$973,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$957,cljs.core.constant$keyword$1100,cljs.core.constant$keyword$956,cljs.core.constant$keyword$1101,cljs.core.constant$keyword$943,cljs.core.constant$keyword$1102,cljs.core.constant$keyword$1103,cljs.core.constant$keyword$976,cljs.core.constant$keyword$1104,cljs.core.constant$keyword$980,cljs.core.constant$keyword$1078,cljs.core.constant$keyword$952,cljs.core.constant$keyword$803,cljs.core.constant$keyword$975,cljs.core.constant$keyword$979],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$805,cljs.core.constant$keyword$1078,cljs.core.constant$keyword$792,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1037,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1038,null], null),cljs.core.constant$keyword$1079,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$990,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$805,cljs.core.constant$keyword$1108,cljs.core.constant$keyword$1107,"companies",cljs.core.constant$keyword$1082,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1080,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1083,null,cljs.core.constant$keyword$1077,null,cljs.core.constant$keyword$1084,null,cljs.core.constant$keyword$1086,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$805,cljs.core.constant$keyword$926,cljs.core.constant$keyword$802,"companies",cljs.core.constant$keyword$1094,"company",cljs.core.constant$keyword$878,"boundaryline_id",cljs.core.constant$keyword$1095,"!latest_employee_count"], null),cljs.core.constant$keyword$1085,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1096,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1018,cljs.core.constant$keyword$1032], null),cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1036,cljs.core.constant$keyword$1095,cljs.core.constant$keyword$1109], null)], null),cljs.core.constant$keyword$918,null], null),cljs.core.constant$keyword$1105,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$805,cljs.core.constant$keyword$1110,cljs.core.constant$keyword$1107,"company_accounts",cljs.core.constant$keyword$1080,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1095,"accounts_date",cljs.core.constant$keyword$1111,"2003-01-01",cljs.core.constant$keyword$1112,"2012-01-01",cljs.core.constant$keyword$1113,"year"], null),cljs.core.constant$keyword$918,null], null),cljs.core.constant$keyword$1106,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$805,cljs.core.constant$keyword$1106,cljs.core.constant$keyword$1107,"companies",cljs.core.constant$keyword$1080,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$796,null,cljs.core.constant$keyword$1114,(0),cljs.core.constant$keyword$1115,(50),cljs.core.constant$keyword$1116,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$918,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$802,null,cljs.core.constant$keyword$804,null,cljs.core.constant$keyword$803,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$802,null,cljs.core.constant$keyword$804,null,cljs.core.constant$keyword$803,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$802,null,cljs.core.constant$keyword$804,null,cljs.core.constant$keyword$803,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$803,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$990]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__37747){var vec__37748 = p__37747;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__37748,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__37748,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__37749){var map__37751 = p__37749;var map__37751__$1 = ((cljs.core.seq_QMARK_(map__37751))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37751):map__37751);var path_values = map__37751__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__37749 = null;if (arguments.length > 0) {
  p__37749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__37749);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__37752){
var p__37749 = cljs.core.seq(arglist__37752);
return set_state__delegate(p__37749);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__37757 = cljs.core.seq(clustermap.app.bl_collections);var chunk__37758 = null;var count__37759 = (0);var i__37760 = (0);while(true){
if((i__37760 < count__37759))
{var blcoll = chunk__37758.cljs$core$IIndexed$_nth$arity$2(null,i__37760);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$803,blcoll);
{
var G__37761 = seq__37757;
var G__37762 = chunk__37758;
var G__37763 = count__37759;
var G__37764 = (i__37760 + (1));
seq__37757 = G__37761;
chunk__37758 = G__37762;
count__37759 = G__37763;
i__37760 = G__37764;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37757);if(temp__4126__auto__)
{var seq__37757__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37757__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37757__$1);{
var G__37765 = cljs.core.chunk_rest(seq__37757__$1);
var G__37766 = c__4299__auto__;
var G__37767 = cljs.core.count(c__4299__auto__);
var G__37768 = (0);
seq__37757 = G__37765;
chunk__37758 = G__37766;
count__37759 = G__37767;
i__37760 = G__37768;
continue;
}
} else
{var blcoll = cljs.core.first(seq__37757__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$803,blcoll);
{
var G__37769 = cljs.core.next(seq__37757__$1);
var G__37770 = null;
var G__37771 = (0);
var G__37772 = (0);
seq__37757 = G__37769;
chunk__37758 = G__37770;
count__37759 = G__37771;
i__37760 = G__37772;
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
clustermap.app.load_aggregation = (function load_aggregation(blcoll,variable){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37796){var state_val_37797 = (state_37796[(1)]);if((state_val_37797 === (2)))
{var inst_37791 = (state_37796[(2)]);var inst_37792 = [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$990,cljs.core.constant$keyword$918];var inst_37793 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37792,null));var inst_37794 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37793,inst_37791], 0));var state_37796__$1 = state_37796;return cljs.core.async.impl.ioc_helpers.return_chan(state_37796__$1,inst_37794);
} else
{if((state_val_37797 === (1)))
{var inst_37789 = clustermap.api.boundaryline_aggregation("companies","company",blcoll,variable,null);var state_37796__$1 = state_37796;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37796__$1,(2),inst_37789);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37801 = [null,null,null,null,null,null,null];(statearr_37801[(0)] = state_machine__5679__auto__);
(statearr_37801[(1)] = (1));
return statearr_37801;
});
var state_machine__5679__auto____1 = (function (state_37796){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37796);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37802){if((e37802 instanceof Object))
{var ex__5682__auto__ = e37802;var statearr_37803_37805 = state_37796;(statearr_37803_37805[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37796);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37806 = state_37796;
state_37796 = G__37806;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37796){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37804 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation("uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37826){var state_val_37827 = (state_37826[(1)]);if((state_val_37827 === (2)))
{var inst_37823 = (state_37826[(2)]);var inst_37824 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$957,inst_37823], 0));var state_37826__$1 = state_37826;return cljs.core.async.impl.ioc_helpers.return_chan(state_37826__$1,inst_37824);
} else
{if((state_val_37827 === (1)))
{var inst_37821 = clustermap.api.investment_stats();var state_37826__$1 = state_37826;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37826__$1,(2),inst_37821);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37831 = [null,null,null,null,null,null,null];(statearr_37831[(0)] = state_machine__5679__auto__);
(statearr_37831[(1)] = (1));
return statearr_37831;
});
var state_machine__5679__auto____1 = (function (state_37826){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37826);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37832){if((e37832 instanceof Object))
{var ex__5682__auto__ = e37832;var statearr_37833_37835 = state_37826;(statearr_37833_37835[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37826);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37836 = state_37826;
state_37826 = G__37836;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37826){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37834 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$980,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__37837,type){var vec__37839 = p__37837;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$952,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,type,cljs.core.constant$keyword$836,selection], null),cljs.core.constant$keyword$956,selection_investment_stats,cljs.core.constant$keyword$943,selection_investment_account_timelines,cljs.core.constant$keyword$976,selection_investment_aggs,cljs.core.constant$keyword$975,selection_investments,cljs.core.constant$keyword$1101], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__37840){var vec__37845 = p__37840;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37845,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37845,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$973.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$973,selector], 0));
var pred__37846 = cljs.core._EQ_;var expr__37847 = type;if(cljs.core.truth_((pred__37846.cljs$core$IFn$_invoke$arity$2 ? pred__37846.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$890,expr__37847) : pred__37846.call(null,cljs.core.constant$keyword$890,expr__37847))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37846.cljs$core$IFn$_invoke$arity$2 ? pred__37846.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,expr__37847) : pred__37846.call(null,cljs.core.constant$keyword$891,expr__37847))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37846.cljs$core$IFn$_invoke$arity$2 ? pred__37846.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$893,expr__37847) : pred__37846.call(null,cljs.core.constant$keyword$893,expr__37847))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$979.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$979,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__37852 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(3),null);var type__$1 = ((((function (){var G__37853 = type;var G__37853__$1 = (((G__37853 == null))?null:clojure.string.trim(G__37853));var G__37853__$2 = (((G__37853__$1 == null))?null:cljs.core.count(G__37853__$1));return G__37853__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__37854 = id;var G__37854__$1 = (((G__37854 == null))?null:clojure.string.trim(G__37854));var G__37854__$2 = (((G__37854__$1 == null))?null:cljs.core.count(G__37854__$1));return G__37854__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$979,view,cljs.core.constant$keyword$805,type__$1,cljs.core.constant$keyword$807,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__37855){var vec__37858 = p__37855;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37858,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37858,(1),null);var map__37859 = clustermap.app.parse_route();var map__37859__$1 = ((cljs.core.seq_QMARK_(map__37859))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37859):map__37859);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859__$1,cljs.core.constant$keyword$979);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__37861 = clustermap.app.parse_route();var map__37861__$1 = ((cljs.core.seq_QMARK_(map__37861))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37861):map__37861);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861__$1,cljs.core.constant$keyword$807);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861__$1,cljs.core.constant$keyword$805);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37894){var state_val_37895 = (state_37894[(1)]);if((state_val_37895 === (2)))
{var inst_37885 = (state_37894[(7)]);var inst_37891 = (state_37894[(2)]);var inst_37892 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1102,inst_37885,cljs.core.constant$keyword$976,inst_37891], 0));var state_37894__$1 = state_37894;return cljs.core.async.impl.ioc_helpers.return_chan(state_37894__$1,inst_37892);
} else
{if((state_val_37895 === (1)))
{var inst_37885 = (state_37894[(7)]);var inst_37883 = cljs.core.deref(clustermap.app.state);var inst_37884 = cljs.core.constant$keyword$1102.cljs$core$IFn$_invoke$arity$1(inst_37883);var inst_37885__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37884,table_view], 0));var inst_37886 = cljs.core.deref(clustermap.app.state);var inst_37887 = cljs.core.constant$keyword$973.cljs$core$IFn$_invoke$arity$1(inst_37886);var inst_37888 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37887,inst_37885__$1], 0));var inst_37889 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37888], 0));var state_37894__$1 = (function (){var statearr_37896 = state_37894;(statearr_37896[(7)] = inst_37885__$1);
return statearr_37896;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37894__$1,(2),inst_37889);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37900 = [null,null,null,null,null,null,null,null];(statearr_37900[(0)] = state_machine__5679__auto__);
(statearr_37900[(1)] = (1));
return statearr_37900;
});
var state_machine__5679__auto____1 = (function (state_37894){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37894);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37901){if((e37901 instanceof Object))
{var ex__5682__auto__ = e37901;var statearr_37902_37904 = state_37894;(statearr_37902_37904[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37894);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37905 = state_37894;
state_37894 = G__37905;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37894){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37903 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37938){var state_val_37939 = (state_37938[(1)]);if((state_val_37939 === (2)))
{var inst_37929 = (state_37938[(7)]);var inst_37935 = (state_37938[(2)]);var inst_37936 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1104,inst_37929,cljs.core.constant$keyword$975,inst_37935], 0));var state_37938__$1 = state_37938;return cljs.core.async.impl.ioc_helpers.return_chan(state_37938__$1,inst_37936);
} else
{if((state_val_37939 === (1)))
{var inst_37929 = (state_37938[(7)]);var inst_37927 = cljs.core.deref(clustermap.app.state);var inst_37928 = cljs.core.constant$keyword$1104.cljs$core$IFn$_invoke$arity$1(inst_37927);var inst_37929__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37928,table_view], 0));var inst_37930 = cljs.core.deref(clustermap.app.state);var inst_37931 = cljs.core.constant$keyword$973.cljs$core$IFn$_invoke$arity$1(inst_37930);var inst_37932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37931,inst_37929__$1], 0));var inst_37933 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37932], 0));var state_37938__$1 = (function (){var statearr_37940 = state_37938;(statearr_37940[(7)] = inst_37929__$1);
return statearr_37940;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37938__$1,(2),inst_37933);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37944 = [null,null,null,null,null,null,null,null];(statearr_37944[(0)] = state_machine__5679__auto__);
(statearr_37944[(1)] = (1));
return statearr_37944;
});
var state_machine__5679__auto____1 = (function (state_37938){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37938);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37945){if((e37945 instanceof Object))
{var ex__5682__auto__ = e37945;var statearr_37946_37948 = state_37938;(statearr_37946_37948[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37938);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37949 = state_37938;
state_37938 = G__37949;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37938){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37947 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$981,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$843,clustermap.app.set_selection_route,cljs.core.constant$keyword$1117,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1056,clustermap.app.set_view_route,cljs.core.constant$keyword$1118,clustermap.app.change_view,cljs.core.constant$keyword$899,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$907,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9519__auto___37966 = (function (params__9520__auto__){if(cljs.core.map_QMARK_(params__9520__auto__))
{var map__37958 = params__9520__auto__;var map__37958__$1 = ((cljs.core.seq_QMARK_(map__37958))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37958):map__37958);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9520__auto__))
{var vec__37959 = params__9520__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9519__auto___37966);
var action__9519__auto___37967 = (function (params__9520__auto__){if(cljs.core.map_QMARK_(params__9520__auto__))
{var map__37960 = params__9520__auto__;var map__37960__$1 = ((cljs.core.seq_QMARK_(map__37960))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37960):map__37960);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9520__auto__))
{var vec__37961 = params__9520__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9519__auto___37967);
var action__9519__auto___37968 = (function (params__9520__auto__){if(cljs.core.map_QMARK_(params__9520__auto__))
{var map__37962 = params__9520__auto__;var map__37962__$1 = ((cljs.core.seq_QMARK_(map__37962))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37962):map__37962);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37962__$1,cljs.core.constant$keyword$979);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9520__auto__))
{var vec__37963 = params__9520__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37963,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9519__auto___37968);
var action__9519__auto___37969 = (function (params__9520__auto__){if(cljs.core.map_QMARK_(params__9520__auto__))
{var map__37964 = params__9520__auto__;var map__37964__$1 = ((cljs.core.seq_QMARK_(map__37964))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37964):map__37964);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37964__$1,cljs.core.constant$keyword$807);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37964__$1,cljs.core.constant$keyword$805);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37964__$1,cljs.core.constant$keyword$979);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9520__auto__))
{var vec__37965 = params__9520__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9519__auto___37969);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$898,comm,cljs.core.constant$keyword$888,path_fn,cljs.core.constant$keyword$889,link_fn,cljs.core.constant$keyword$989,clustermap.app.change_view_path,cljs.core.constant$keyword$1092,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$803),cljs.core.constant$keyword$1091,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$803,cljs.core.constant$keyword$1119),cljs.core.constant$keyword$1090,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$990], null),"map-component",shared);
clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078], null),"search-component",shared);
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$990,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1086], null),"variable-selection-component",shared,"Variable",cljs.core.constant$keyword$1095,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$990,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1085], null),"stat-selection-component",shared,"Statistic",cljs.core.constant$keyword$1095,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$990,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1085], null),"scale-selection-component",shared,"Scale",cljs.core.constant$keyword$1097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
return clustermap.components.color_scale.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$990,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1087], null),"color-scale-component",shared);
});
