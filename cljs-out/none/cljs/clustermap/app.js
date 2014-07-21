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
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1602114424),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),new cljs.core.Keyword(null,"view","view",1247994814)],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"compiled","compiled",850043082),null], null),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Oranges","Oranges",1752319702),new cljs.core.Keyword(null,"9","9",1664767314)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"sum","sum",136986814)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"turnover_timeline","turnover_timeline",-2042271101),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"company_accounts",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variable","variable",-281346492),"accounts_date",new cljs.core.Keyword(null,"after","after",594996914),"2003-01-01",new cljs.core.Keyword(null,"before","before",-1633692388),"2012-01-01",new cljs.core.Keyword(null,"interval","interval",1708495417),"year"], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(50),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),null,new cljs.core.Keyword(null,"map","map",1371690461)]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__50361){var vec__50362 = p__50361;var key_or_path = cljs.core.nth.call(null,vec__50362,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__50362,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__50362,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__50362,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__50363){var map__50365 = p__50363;var map__50365__$1 = ((cljs.core.seq_QMARK_.call(null,map__50365))?cljs.core.apply.call(null,cljs.core.hash_map,map__50365):map__50365);var path_values = map__50365__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__50363 = null;if (arguments.length > 0) {
  p__50363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__50363);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__50366){
var p__50363 = cljs.core.seq(arglist__50366);
return set_state__delegate(p__50363);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__50371 = cljs.core.seq.call(null,clustermap.app.bl_collections);var chunk__50372 = null;var count__50373 = (0);var i__50374 = (0);while(true){
if((i__50374 < count__50373))
{var blcoll = cljs.core._nth.call(null,chunk__50372,i__50374);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__50375 = seq__50371;
var G__50376 = chunk__50372;
var G__50377 = count__50373;
var G__50378 = (i__50374 + (1));
seq__50371 = G__50375;
chunk__50372 = G__50376;
count__50373 = G__50377;
i__50374 = G__50378;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50371);if(temp__4126__auto__)
{var seq__50371__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50371__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__50371__$1);{
var G__50379 = cljs.core.chunk_rest.call(null,seq__50371__$1);
var G__50380 = c__4299__auto__;
var G__50381 = cljs.core.count.call(null,c__4299__auto__);
var G__50382 = (0);
seq__50371 = G__50379;
chunk__50372 = G__50380;
count__50373 = G__50381;
i__50374 = G__50382;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__50371__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__50383 = cljs.core.next.call(null,seq__50371__$1);
var G__50384 = null;
var G__50385 = (0);
var G__50386 = (0);
seq__50371 = G__50383;
chunk__50372 = G__50384;
count__50373 = G__50385;
i__50374 = G__50386;
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
clustermap.app.load_aggregation = (function load_aggregation(blcoll,variable){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_50410){var state_val_50411 = (state_50410[(1)]);if((state_val_50411 === (2)))
{var inst_50405 = (state_50410[(2)]);var inst_50406 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377)];var inst_50407 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50406,null));var inst_50408 = clustermap.app.set_state.call(null,inst_50407,inst_50405);var state_50410__$1 = state_50410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50410__$1,inst_50408);
} else
{if((state_val_50411 === (1)))
{var inst_50403 = clustermap.api.boundaryline_aggregation.call(null,"companies","company",blcoll,variable,null);var state_50410__$1 = state_50410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50410__$1,(2),inst_50403);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50415 = [null,null,null,null,null,null,null];(statearr_50415[(0)] = state_machine__5679__auto__);
(statearr_50415[(1)] = (1));
return statearr_50415;
});
var state_machine__5679__auto____1 = (function (state_50410){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50410);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50416){if((e50416 instanceof Object))
{var ex__5682__auto__ = e50416;var statearr_50417_50419 = state_50410;(statearr_50417_50419[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50410);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50420 = state_50410;
state_50410 = G__50420;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50410){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_50418 = f__5694__auto__.call(null);(statearr_50418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_50418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation.call(null,"uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_50440){var state_val_50441 = (state_50440[(1)]);if((state_val_50441 === (2)))
{var inst_50437 = (state_50440[(2)]);var inst_50438 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),inst_50437);var state_50440__$1 = state_50440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50440__$1,inst_50438);
} else
{if((state_val_50441 === (1)))
{var inst_50435 = clustermap.api.investment_stats.call(null);var state_50440__$1 = state_50440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50440__$1,(2),inst_50435);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50445 = [null,null,null,null,null,null,null];(statearr_50445[(0)] = state_machine__5679__auto__);
(statearr_50445[(1)] = (1));
return statearr_50445;
});
var state_machine__5679__auto____1 = (function (state_50440){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50440);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50446){if((e50446 instanceof Object))
{var ex__5682__auto__ = e50446;var statearr_50447_50449 = state_50440;(statearr_50447_50449[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50450 = state_50440;
state_50440 = G__50450;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50440){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_50448 = f__5694__auto__.call(null);(statearr_50448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_50448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__50451,type){var vec__50453 = p__50451;var selection = cljs.core.nth.call(null,vec__50453,(0),null);var selection_investment_stats = cljs.core.nth.call(null,vec__50453,(1),null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__50453,(2),null);var selection_investment_aggs = cljs.core.nth.call(null,vec__50453,(3),null);var selection_investments = cljs.core.nth.call(null,vec__50453,(4),null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__50453,(5),null);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__50454){var vec__50459 = p__50454;var type = cljs.core.nth.call(null,vec__50459,(0),null);var id = cljs.core.nth.call(null,vec__50459,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),selector);
var pred__50460 = cljs.core._EQ_;var expr__50461 = type;if(cljs.core.truth_(pred__50460.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__50461)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__50460.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__50461)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__50460.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__50461)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state))))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"view","view",1247994814),view__$1);
return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
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
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3543__auto__ = view;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view))));
} else
{if(true)
{return clustermap.app.history.setToken((""));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__50466 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__50466,(0),null);var view = cljs.core.nth.call(null,vec__50466,(1),null);var type = cljs.core.nth.call(null,vec__50466,(2),null);var id = cljs.core.nth.call(null,vec__50466,(3),null);var type__$1 = ((((function (){var G__50467 = type;var G__50467__$1 = (((G__50467 == null))?null:clojure.string.trim.call(null,G__50467));var G__50467__$2 = (((G__50467__$1 == null))?null:cljs.core.count.call(null,G__50467__$1));return G__50467__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__50468 = id;var G__50468__$1 = (((G__50468 == null))?null:clojure.string.trim.call(null,G__50468));var G__50468__$2 = (((G__50468__$1 == null))?null:cljs.core.count.call(null,G__50468__$1));return G__50468__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__50469){var vec__50472 = p__50469;var type = cljs.core.nth.call(null,vec__50472,(0),null);var id = cljs.core.nth.call(null,vec__50472,(1),null);var map__50473 = clustermap.app.parse_route.call(null);var map__50473__$1 = ((cljs.core.seq_QMARK_.call(null,map__50473))?cljs.core.apply.call(null,cljs.core.hash_map,map__50473):map__50473);var view = cljs.core.get.call(null,map__50473__$1,new cljs.core.Keyword(null,"view","view",1247994814));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__50475 = clustermap.app.parse_route.call(null);var map__50475__$1 = ((cljs.core.seq_QMARK_.call(null,map__50475))?cljs.core.apply.call(null,cljs.core.hash_map,map__50475):map__50475);var id = cljs.core.get.call(null,map__50475__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__50475__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_50508){var state_val_50509 = (state_50508[(1)]);if((state_val_50509 === (2)))
{var inst_50499 = (state_50508[(7)]);var inst_50505 = (state_50508[(2)]);var inst_50506 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),inst_50499,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),inst_50505);var state_50508__$1 = state_50508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50508__$1,inst_50506);
} else
{if((state_val_50509 === (1)))
{var inst_50499 = (state_50508[(7)]);var inst_50497 = cljs.core.deref.call(null,clustermap.app.state);var inst_50498 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048).cljs$core$IFn$_invoke$arity$1(inst_50497);var inst_50499__$1 = cljs.core.merge.call(null,inst_50498,table_view);var inst_50500 = cljs.core.deref.call(null,clustermap.app.state);var inst_50501 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_50500);var inst_50502 = cljs.core.merge.call(null,inst_50501,inst_50499__$1);var inst_50503 = clustermap.api.investment_aggs.call(null,inst_50502);var state_50508__$1 = (function (){var statearr_50510 = state_50508;(statearr_50510[(7)] = inst_50499__$1);
return statearr_50510;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50508__$1,(2),inst_50503);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50514 = [null,null,null,null,null,null,null,null];(statearr_50514[(0)] = state_machine__5679__auto__);
(statearr_50514[(1)] = (1));
return statearr_50514;
});
var state_machine__5679__auto____1 = (function (state_50508){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50515){if((e50515 instanceof Object))
{var ex__5682__auto__ = e50515;var statearr_50516_50518 = state_50508;(statearr_50516_50518[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50519 = state_50508;
state_50508 = G__50519;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50508){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_50517 = f__5694__auto__.call(null);(statearr_50517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_50517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_50552){var state_val_50553 = (state_50552[(1)]);if((state_val_50553 === (2)))
{var inst_50543 = (state_50552[(7)]);var inst_50549 = (state_50552[(2)]);var inst_50550 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),inst_50543,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),inst_50549);var state_50552__$1 = state_50552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50552__$1,inst_50550);
} else
{if((state_val_50553 === (1)))
{var inst_50543 = (state_50552[(7)]);var inst_50541 = cljs.core.deref.call(null,clustermap.app.state);var inst_50542 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362).cljs$core$IFn$_invoke$arity$1(inst_50541);var inst_50543__$1 = cljs.core.merge.call(null,inst_50542,table_view);var inst_50544 = cljs.core.deref.call(null,clustermap.app.state);var inst_50545 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_50544);var inst_50546 = cljs.core.merge.call(null,inst_50545,inst_50543__$1);var inst_50547 = clustermap.api.investments.call(null,inst_50546);var state_50552__$1 = (function (){var statearr_50554 = state_50552;(statearr_50554[(7)] = inst_50543__$1);
return statearr_50554;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50552__$1,(2),inst_50547);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50558 = [null,null,null,null,null,null,null,null];(statearr_50558[(0)] = state_machine__5679__auto__);
(statearr_50558[(1)] = (1));
return statearr_50558;
});
var state_machine__5679__auto____1 = (function (state_50552){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50552);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50559){if((e50559 instanceof Object))
{var ex__5682__auto__ = e50559;var statearr_50560_50562 = state_50552;(statearr_50560_50562[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50563 = state_50552;
state_50552 = G__50563;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50552){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_50561 = f__5694__auto__.call(null);(statearr_50561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_50561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",1564939822),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",1147833503),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",1501475360),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__9519__auto___50580 = (function (params__9520__auto__){if(cljs.core.map_QMARK_.call(null,params__9520__auto__))
{var map__50572 = params__9520__auto__;var map__50572__$1 = ((cljs.core.seq_QMARK_.call(null,map__50572))?cljs.core.apply.call(null,cljs.core.hash_map,map__50572):map__50572);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9520__auto__))
{var vec__50573 = params__9520__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9519__auto___50580);
var action__9519__auto___50581 = (function (params__9520__auto__){if(cljs.core.map_QMARK_.call(null,params__9520__auto__))
{var map__50574 = params__9520__auto__;var map__50574__$1 = ((cljs.core.seq_QMARK_.call(null,map__50574))?cljs.core.apply.call(null,cljs.core.hash_map,map__50574):map__50574);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9520__auto__))
{var vec__50575 = params__9520__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9519__auto___50581);
var action__9519__auto___50582 = (function (params__9520__auto__){if(cljs.core.map_QMARK_.call(null,params__9520__auto__))
{var map__50576 = params__9520__auto__;var map__50576__$1 = ((cljs.core.seq_QMARK_.call(null,map__50576))?cljs.core.apply.call(null,cljs.core.hash_map,map__50576):map__50576);var view = cljs.core.get.call(null,map__50576__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9520__auto__))
{var vec__50577 = params__9520__auto__;var view = cljs.core.nth.call(null,vec__50577,(0),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9519__auto___50582);
var action__9519__auto___50583 = (function (params__9520__auto__){if(cljs.core.map_QMARK_.call(null,params__9520__auto__))
{var map__50578 = params__9520__auto__;var map__50578__$1 = ((cljs.core.seq_QMARK_.call(null,map__50578))?cljs.core.apply.call(null,cljs.core.hash_map,map__50578):map__50578);var id = cljs.core.get.call(null,map__50578__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__50578__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__50578__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9520__auto__))
{var vec__50579 = params__9520__auto__;var view = cljs.core.nth.call(null,vec__50579,(0),null);var type = cljs.core.nth.call(null,vec__50579,(1),null);var id = cljs.core.nth.call(null,vec__50579,(2),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9519__auto___50583);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"comm","comm",-1689770614),comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),clustermap.app.change_view_path,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440)),new cljs.core.Keyword(null,"set-app-state-fn","set-app-state-fn",-1158769652),clustermap.app.set_state], null);clustermap.nav.init.call(null,comm);
clustermap.app.load_boundaryline_collection_indexes.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461)], null),"map-component",shared);
clustermap.components.multiview.mount.call(null,clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiview","multiview",194694555)], null),"search-component",shared);
clustermap.components.select_chooser.mount.call(null,clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775)], null),"variable-selection-component",shared,"Variable",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount.call(null,clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null),"stat-selection-component",shared,"Statistic",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
clustermap.components.select_chooser.mount.call(null,clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null),"scale-selection-component",shared,"Scale",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
return clustermap.components.color_scale.mount.call(null,clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),"color-scale-component",shared);
});

//# sourceMappingURL=app.js.map