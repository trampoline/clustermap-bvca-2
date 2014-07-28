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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$974,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$958,cljs.core.constant$keyword$1100,cljs.core.constant$keyword$957,cljs.core.constant$keyword$1101,cljs.core.constant$keyword$944,cljs.core.constant$keyword$1102,cljs.core.constant$keyword$1103,cljs.core.constant$keyword$977,cljs.core.constant$keyword$1104,cljs.core.constant$keyword$981,cljs.core.constant$keyword$1078,cljs.core.constant$keyword$953,cljs.core.constant$keyword$804,cljs.core.constant$keyword$976,cljs.core.constant$keyword$980],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$806,cljs.core.constant$keyword$1078,cljs.core.constant$keyword$793,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1038,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1039,null], null),cljs.core.constant$keyword$1079,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$991,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$806,cljs.core.constant$keyword$1108,cljs.core.constant$keyword$1107,"companies",cljs.core.constant$keyword$1082,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1080,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1083,null,cljs.core.constant$keyword$792,null,cljs.core.constant$keyword$1084,null,cljs.core.constant$keyword$1086,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$806,cljs.core.constant$keyword$927,cljs.core.constant$keyword$803,"companies",cljs.core.constant$keyword$1094,"company",cljs.core.constant$keyword$879,"boundaryline_id",cljs.core.constant$keyword$1095,"!latest_employee_count"], null),cljs.core.constant$keyword$1085,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1096,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1019,cljs.core.constant$keyword$1033], null),cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1037,cljs.core.constant$keyword$1095,cljs.core.constant$keyword$1109], null)], null),cljs.core.constant$keyword$919,null], null),cljs.core.constant$keyword$1105,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$806,cljs.core.constant$keyword$1110,cljs.core.constant$keyword$1107,"company_accounts",cljs.core.constant$keyword$1080,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1095,"accounts_date",cljs.core.constant$keyword$1111,"2003-01-01",cljs.core.constant$keyword$1112,"2012-01-01",cljs.core.constant$keyword$1113,"year"], null),cljs.core.constant$keyword$919,null], null),cljs.core.constant$keyword$1106,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$806,cljs.core.constant$keyword$1106,cljs.core.constant$keyword$1107,"companies",cljs.core.constant$keyword$1080,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$797,null,cljs.core.constant$keyword$1114,(0),cljs.core.constant$keyword$1115,(50),cljs.core.constant$keyword$1116,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$919,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$802,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$803,null,cljs.core.constant$keyword$805,null,cljs.core.constant$keyword$804,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$803,null,cljs.core.constant$keyword$805,null,cljs.core.constant$keyword$804,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$803,null,cljs.core.constant$keyword$805,null,cljs.core.constant$keyword$804,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$804,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$991]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__37760){var vec__37761 = p__37760;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__37761,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__37761,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__37762){var map__37764 = p__37762;var map__37764__$1 = ((cljs.core.seq_QMARK_(map__37764))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37764):map__37764);var path_values = map__37764__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__37762 = null;if (arguments.length > 0) {
  p__37762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__37762);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__37765){
var p__37762 = cljs.core.seq(arglist__37765);
return set_state__delegate(p__37762);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__37770 = cljs.core.seq(clustermap.app.bl_collections);var chunk__37771 = null;var count__37772 = (0);var i__37773 = (0);while(true){
if((i__37773 < count__37772))
{var blcoll = chunk__37771.cljs$core$IIndexed$_nth$arity$2(null,i__37773);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$804,blcoll);
{
var G__37774 = seq__37770;
var G__37775 = chunk__37771;
var G__37776 = count__37772;
var G__37777 = (i__37773 + (1));
seq__37770 = G__37774;
chunk__37771 = G__37775;
count__37772 = G__37776;
i__37773 = G__37777;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37770);if(temp__4126__auto__)
{var seq__37770__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37770__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37770__$1);{
var G__37778 = cljs.core.chunk_rest(seq__37770__$1);
var G__37779 = c__4299__auto__;
var G__37780 = cljs.core.count(c__4299__auto__);
var G__37781 = (0);
seq__37770 = G__37778;
chunk__37771 = G__37779;
count__37772 = G__37780;
i__37773 = G__37781;
continue;
}
} else
{var blcoll = cljs.core.first(seq__37770__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$804,blcoll);
{
var G__37782 = cljs.core.next(seq__37770__$1);
var G__37783 = null;
var G__37784 = (0);
var G__37785 = (0);
seq__37770 = G__37782;
chunk__37771 = G__37783;
count__37772 = G__37784;
i__37773 = G__37785;
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
return (function (state_37809){var state_val_37810 = (state_37809[(1)]);if((state_val_37810 === (2)))
{var inst_37804 = (state_37809[(2)]);var inst_37805 = [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$991,cljs.core.constant$keyword$919];var inst_37806 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37805,null));var inst_37807 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37806,inst_37804], 0));var state_37809__$1 = state_37809;return cljs.core.async.impl.ioc_helpers.return_chan(state_37809__$1,inst_37807);
} else
{if((state_val_37810 === (1)))
{var inst_37802 = clustermap.api.boundaryline_aggregation("companies","company",blcoll,variable,null);var state_37809__$1 = state_37809;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37809__$1,(2),inst_37802);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37814 = [null,null,null,null,null,null,null];(statearr_37814[(0)] = state_machine__5679__auto__);
(statearr_37814[(1)] = (1));
return statearr_37814;
});
var state_machine__5679__auto____1 = (function (state_37809){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37809);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37815){if((e37815 instanceof Object))
{var ex__5682__auto__ = e37815;var statearr_37816_37818 = state_37809;(statearr_37816_37818[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37809);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37819 = state_37809;
state_37809 = G__37819;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37809){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37817 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37817;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation("uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37839){var state_val_37840 = (state_37839[(1)]);if((state_val_37840 === (2)))
{var inst_37836 = (state_37839[(2)]);var inst_37837 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$958,inst_37836], 0));var state_37839__$1 = state_37839;return cljs.core.async.impl.ioc_helpers.return_chan(state_37839__$1,inst_37837);
} else
{if((state_val_37840 === (1)))
{var inst_37834 = clustermap.api.investment_stats();var state_37839__$1 = state_37839;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37839__$1,(2),inst_37834);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37844 = [null,null,null,null,null,null,null];(statearr_37844[(0)] = state_machine__5679__auto__);
(statearr_37844[(1)] = (1));
return statearr_37844;
});
var state_machine__5679__auto____1 = (function (state_37839){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37839);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37845){if((e37845 instanceof Object))
{var ex__5682__auto__ = e37845;var statearr_37846_37848 = state_37839;(statearr_37846_37848[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37839);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37849 = state_37839;
state_37839 = G__37849;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37839){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37847 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$981,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__37850,type){var vec__37852 = p__37850;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$953,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$806,type,cljs.core.constant$keyword$837,selection], null),cljs.core.constant$keyword$957,selection_investment_stats,cljs.core.constant$keyword$944,selection_investment_account_timelines,cljs.core.constant$keyword$977,selection_investment_aggs,cljs.core.constant$keyword$976,selection_investments,cljs.core.constant$keyword$1101], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__37853){var vec__37858 = p__37853;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37858,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37858,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$974.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$974,selector], 0));
var pred__37859 = cljs.core._EQ_;var expr__37860 = type;if(cljs.core.truth_((pred__37859.cljs$core$IFn$_invoke$arity$2 ? pred__37859.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,expr__37860) : pred__37859.call(null,cljs.core.constant$keyword$891,expr__37860))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37859.cljs$core$IFn$_invoke$arity$2 ? pred__37859.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$892,expr__37860) : pred__37859.call(null,cljs.core.constant$keyword$892,expr__37860))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37859.cljs$core$IFn$_invoke$arity$2 ? pred__37859.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$894,expr__37860) : pred__37859.call(null,cljs.core.constant$keyword$894,expr__37860))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$980.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$980,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__37865 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37865,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37865,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37865,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37865,(3),null);var type__$1 = ((((function (){var G__37866 = type;var G__37866__$1 = (((G__37866 == null))?null:clojure.string.trim(G__37866));var G__37866__$2 = (((G__37866__$1 == null))?null:cljs.core.count(G__37866__$1));return G__37866__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__37867 = id;var G__37867__$1 = (((G__37867 == null))?null:clojure.string.trim(G__37867));var G__37867__$2 = (((G__37867__$1 == null))?null:cljs.core.count(G__37867__$1));return G__37867__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$980,view,cljs.core.constant$keyword$806,type__$1,cljs.core.constant$keyword$808,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__37868){var vec__37871 = p__37868;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(1),null);var map__37872 = clustermap.app.parse_route();var map__37872__$1 = ((cljs.core.seq_QMARK_(map__37872))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37872):map__37872);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37872__$1,cljs.core.constant$keyword$980);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__37874 = clustermap.app.parse_route();var map__37874__$1 = ((cljs.core.seq_QMARK_(map__37874))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37874):map__37874);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,cljs.core.constant$keyword$808);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,cljs.core.constant$keyword$806);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37907){var state_val_37908 = (state_37907[(1)]);if((state_val_37908 === (2)))
{var inst_37898 = (state_37907[(7)]);var inst_37904 = (state_37907[(2)]);var inst_37905 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1102,inst_37898,cljs.core.constant$keyword$977,inst_37904], 0));var state_37907__$1 = state_37907;return cljs.core.async.impl.ioc_helpers.return_chan(state_37907__$1,inst_37905);
} else
{if((state_val_37908 === (1)))
{var inst_37898 = (state_37907[(7)]);var inst_37896 = cljs.core.deref(clustermap.app.state);var inst_37897 = cljs.core.constant$keyword$1102.cljs$core$IFn$_invoke$arity$1(inst_37896);var inst_37898__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37897,table_view], 0));var inst_37899 = cljs.core.deref(clustermap.app.state);var inst_37900 = cljs.core.constant$keyword$974.cljs$core$IFn$_invoke$arity$1(inst_37899);var inst_37901 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37900,inst_37898__$1], 0));var inst_37902 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37901], 0));var state_37907__$1 = (function (){var statearr_37909 = state_37907;(statearr_37909[(7)] = inst_37898__$1);
return statearr_37909;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37907__$1,(2),inst_37902);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37913 = [null,null,null,null,null,null,null,null];(statearr_37913[(0)] = state_machine__5679__auto__);
(statearr_37913[(1)] = (1));
return statearr_37913;
});
var state_machine__5679__auto____1 = (function (state_37907){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37907);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37914){if((e37914 instanceof Object))
{var ex__5682__auto__ = e37914;var statearr_37915_37917 = state_37907;(statearr_37915_37917[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37907);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37918 = state_37907;
state_37907 = G__37918;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37907){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37916 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37951){var state_val_37952 = (state_37951[(1)]);if((state_val_37952 === (2)))
{var inst_37942 = (state_37951[(7)]);var inst_37948 = (state_37951[(2)]);var inst_37949 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1104,inst_37942,cljs.core.constant$keyword$976,inst_37948], 0));var state_37951__$1 = state_37951;return cljs.core.async.impl.ioc_helpers.return_chan(state_37951__$1,inst_37949);
} else
{if((state_val_37952 === (1)))
{var inst_37942 = (state_37951[(7)]);var inst_37940 = cljs.core.deref(clustermap.app.state);var inst_37941 = cljs.core.constant$keyword$1104.cljs$core$IFn$_invoke$arity$1(inst_37940);var inst_37942__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37941,table_view], 0));var inst_37943 = cljs.core.deref(clustermap.app.state);var inst_37944 = cljs.core.constant$keyword$974.cljs$core$IFn$_invoke$arity$1(inst_37943);var inst_37945 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37944,inst_37942__$1], 0));var inst_37946 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37945], 0));var state_37951__$1 = (function (){var statearr_37953 = state_37951;(statearr_37953[(7)] = inst_37942__$1);
return statearr_37953;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37951__$1,(2),inst_37946);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37957 = [null,null,null,null,null,null,null,null];(statearr_37957[(0)] = state_machine__5679__auto__);
(statearr_37957[(1)] = (1));
return statearr_37957;
});
var state_machine__5679__auto____1 = (function (state_37951){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37951);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37958){if((e37958 instanceof Object))
{var ex__5682__auto__ = e37958;var statearr_37959_37961 = state_37951;(statearr_37959_37961[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37951);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e37958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__37962 = state_37951;
state_37951 = G__37962;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37951){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37960 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$982,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$844,clustermap.app.set_selection_route,cljs.core.constant$keyword$1117,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1057,clustermap.app.set_view_route,cljs.core.constant$keyword$1118,clustermap.app.change_view,cljs.core.constant$keyword$900,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$908,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9520__auto___37979 = (function (params__9521__auto__){if(cljs.core.map_QMARK_(params__9521__auto__))
{var map__37971 = params__9521__auto__;var map__37971__$1 = ((cljs.core.seq_QMARK_(map__37971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37971):map__37971);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9521__auto__))
{var vec__37972 = params__9521__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9520__auto___37979);
var action__9520__auto___37980 = (function (params__9521__auto__){if(cljs.core.map_QMARK_(params__9521__auto__))
{var map__37973 = params__9521__auto__;var map__37973__$1 = ((cljs.core.seq_QMARK_(map__37973))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37973):map__37973);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9521__auto__))
{var vec__37974 = params__9521__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9520__auto___37980);
var action__9520__auto___37981 = (function (params__9521__auto__){if(cljs.core.map_QMARK_(params__9521__auto__))
{var map__37975 = params__9521__auto__;var map__37975__$1 = ((cljs.core.seq_QMARK_(map__37975))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37975):map__37975);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,cljs.core.constant$keyword$980);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9521__auto__))
{var vec__37976 = params__9521__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37976,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9520__auto___37981);
var action__9520__auto___37982 = (function (params__9521__auto__){if(cljs.core.map_QMARK_(params__9521__auto__))
{var map__37977 = params__9521__auto__;var map__37977__$1 = ((cljs.core.seq_QMARK_(map__37977))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37977):map__37977);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$808);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$806);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$980);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9521__auto__))
{var vec__37978 = params__9521__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37978,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37978,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37978,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1118,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9520__auto___37982);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$899,comm,cljs.core.constant$keyword$889,path_fn,cljs.core.constant$keyword$890,link_fn,cljs.core.constant$keyword$990,clustermap.app.change_view_path,cljs.core.constant$keyword$1092,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$804),cljs.core.constant$keyword$1091,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$804,cljs.core.constant$keyword$1119),cljs.core.constant$keyword$1090,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$991], null),"map-component",shared);
clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078], null),"search-component",shared);
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$991,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1086], null),"variable-selection-component",shared,"Variable",cljs.core.constant$keyword$1095,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$991,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1085], null),"stat-selection-component",shared,"Statistic",cljs.core.constant$keyword$1095,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$991,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1085], null),"scale-selection-component",shared,"Scale",cljs.core.constant$keyword$1097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
return clustermap.components.color_scale.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$991,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1087], null),"color-scale-component",shared);
});
