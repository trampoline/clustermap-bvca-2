// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
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
goog.require('clustermap.components.mount');
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
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"turnover_timeline","turnover_timeline",-2042271101),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1602114424),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),new cljs.core.Keyword(null,"view","view",1247994814)],[null,null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"company_accounts",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variable","variable",-281346492),"accounts_date",new cljs.core.Keyword(null,"after","after",594996914),"2003-01-01",new cljs.core.Keyword(null,"before","before",-1633692388),"2012-01-01",new cljs.core.Keyword(null,"interval","interval",1708495417),"year"], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(50),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),null,null,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null),new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255),false], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),null,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"compiled","compiled",850043082),null], null),null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Oranges","Oranges",1752319702),new cljs.core.Keyword(null,"9","9",1664767314)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"sum","sum",136986814)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),null,new cljs.core.Keyword(null,"map","map",1371690461)]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__24891){var vec__24892 = p__24891;var key_or_path = cljs.core.nth.call(null,vec__24892,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__24892,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__24892,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__24892,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__24893){var map__24895 = p__24893;var map__24895__$1 = ((cljs.core.seq_QMARK_.call(null,map__24895))?cljs.core.apply.call(null,cljs.core.hash_map,map__24895):map__24895);var path_values = map__24895__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__24893 = null;if (arguments.length > 0) {
  p__24893 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__24893);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__24896){
var p__24893 = cljs.core.seq(arglist__24896);
return set_state__delegate(p__24893);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
/**
* @param {...*} var_args
*/
clustermap.app.get_state = (function() { 
var get_state__delegate = function (path){return cljs.core.get_in.call(null,cljs.core.deref.call(null,clustermap.app.state),cljs.core.flatten.call(null,path));
};
var get_state = function (var_args){
var path = null;if (arguments.length > 0) {
  path = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return get_state__delegate.call(this,path);};
get_state.cljs$lang$maxFixedArity = 0;
get_state.cljs$lang$applyTo = (function (arglist__24897){
var path = cljs.core.seq(arglist__24897);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__24902 = cljs.core.seq.call(null,clustermap.app.bl_collections);var chunk__24903 = null;var count__24904 = (0);var i__24905 = (0);while(true){
if((i__24905 < count__24904))
{var blcoll = cljs.core._nth.call(null,chunk__24903,i__24905);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__24906 = seq__24902;
var G__24907 = chunk__24903;
var G__24908 = count__24904;
var G__24909 = (i__24905 + (1));
seq__24902 = G__24906;
chunk__24903 = G__24907;
count__24904 = G__24908;
i__24905 = G__24909;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24902);if(temp__4126__auto__)
{var seq__24902__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24902__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__24902__$1);{
var G__24910 = cljs.core.chunk_rest.call(null,seq__24902__$1);
var G__24911 = c__4314__auto__;
var G__24912 = cljs.core.count.call(null,c__4314__auto__);
var G__24913 = (0);
seq__24902 = G__24910;
chunk__24903 = G__24911;
count__24904 = G__24912;
i__24905 = G__24913;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__24902__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__24914 = cljs.core.next.call(null,seq__24902__$1);
var G__24915 = null;
var G__24916 = (0);
var G__24917 = (0);
seq__24902 = G__24914;
chunk__24903 = G__24915;
count__24904 = G__24916;
i__24905 = G__24917;
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
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_24937){var state_val_24938 = (state_24937[(1)]);if((state_val_24938 === (2)))
{var inst_24934 = (state_24937[(2)]);var inst_24935 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),inst_24934);var state_24937__$1 = state_24937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24937__$1,inst_24935);
} else
{if((state_val_24938 === (1)))
{var inst_24932 = clustermap.api.investment_stats.call(null);var state_24937__$1 = state_24937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24937__$1,(2),inst_24932);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_24942 = [null,null,null,null,null,null,null];(statearr_24942[(0)] = state_machine__5694__auto__);
(statearr_24942[(1)] = (1));
return statearr_24942;
});
var state_machine__5694__auto____1 = (function (state_24937){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_24937);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e24943){if((e24943 instanceof Object))
{var ex__5697__auto__ = e24943;var statearr_24944_24946 = state_24937;(statearr_24944_24946[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24943;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24947 = state_24937;
state_24937 = G__24947;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_24937){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_24937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_24945 = f__5709__auto__.call(null);(statearr_24945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_24945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__24948,type){var vec__24950 = p__24948;var selection = cljs.core.nth.call(null,vec__24950,(0),null);var selection_investment_stats = cljs.core.nth.call(null,vec__24950,(1),null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__24950,(2),null);var selection_investment_aggs = cljs.core.nth.call(null,vec__24950,(3),null);var selection_investments = cljs.core.nth.call(null,vec__24950,(4),null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__24950,(5),null);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__24951){var vec__24956 = p__24951;var type = cljs.core.nth.call(null,vec__24956,(0),null);var id = cljs.core.nth.call(null,vec__24956,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),selector);
var pred__24957 = cljs.core._EQ_;var expr__24958 = type;if(cljs.core.truth_(pred__24957.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__24958)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__24957.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__24958)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__24957.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__24958)))
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
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3546__auto__ = type;if(cljs.core.truth_(and__3546__auto__))
{return id;
} else
{return and__3546__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3558__auto__ = view;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view))));
} else
{return clustermap.app.history.setToken((""));

}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__24963 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__24963,(0),null);var view = cljs.core.nth.call(null,vec__24963,(1),null);var type = cljs.core.nth.call(null,vec__24963,(2),null);var id = cljs.core.nth.call(null,vec__24963,(3),null);var type__$1 = ((((function (){var G__24964 = type;var G__24964__$1 = (((G__24964 == null))?null:clojure.string.trim.call(null,G__24964));var G__24964__$2 = (((G__24964__$1 == null))?null:cljs.core.count.call(null,G__24964__$1));return G__24964__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__24965 = id;var G__24965__$1 = (((G__24965 == null))?null:clojure.string.trim.call(null,G__24965));var G__24965__$2 = (((G__24965__$1 == null))?null:cljs.core.count.call(null,G__24965__$1));return G__24965__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__24966){var vec__24969 = p__24966;var type = cljs.core.nth.call(null,vec__24969,(0),null);var id = cljs.core.nth.call(null,vec__24969,(1),null);var map__24970 = clustermap.app.parse_route.call(null);var map__24970__$1 = ((cljs.core.seq_QMARK_.call(null,map__24970))?cljs.core.apply.call(null,cljs.core.hash_map,map__24970):map__24970);var view = cljs.core.get.call(null,map__24970__$1,new cljs.core.Keyword(null,"view","view",1247994814));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__24972 = clustermap.app.parse_route.call(null);var map__24972__$1 = ((cljs.core.seq_QMARK_.call(null,map__24972))?cljs.core.apply.call(null,cljs.core.hash_map,map__24972):map__24972);var id = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_25005){var state_val_25006 = (state_25005[(1)]);if((state_val_25006 === (2)))
{var inst_24996 = (state_25005[(7)]);var inst_25002 = (state_25005[(2)]);var inst_25003 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),inst_24996,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),inst_25002);var state_25005__$1 = state_25005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25005__$1,inst_25003);
} else
{if((state_val_25006 === (1)))
{var inst_24996 = (state_25005[(7)]);var inst_24994 = cljs.core.deref.call(null,clustermap.app.state);var inst_24995 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048).cljs$core$IFn$_invoke$arity$1(inst_24994);var inst_24996__$1 = cljs.core.merge.call(null,inst_24995,table_view);var inst_24997 = cljs.core.deref.call(null,clustermap.app.state);var inst_24998 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_24997);var inst_24999 = cljs.core.merge.call(null,inst_24998,inst_24996__$1);var inst_25000 = clustermap.api.investment_aggs.call(null,inst_24999);var state_25005__$1 = (function (){var statearr_25007 = state_25005;(statearr_25007[(7)] = inst_24996__$1);
return statearr_25007;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25005__$1,(2),inst_25000);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_25011 = [null,null,null,null,null,null,null,null];(statearr_25011[(0)] = state_machine__5694__auto__);
(statearr_25011[(1)] = (1));
return statearr_25011;
});
var state_machine__5694__auto____1 = (function (state_25005){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25012){if((e25012 instanceof Object))
{var ex__5697__auto__ = e25012;var statearr_25013_25015 = state_25005;(statearr_25013_25015[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25012;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25016 = state_25005;
state_25005 = G__25016;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25005){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_25014 = f__5709__auto__.call(null);(statearr_25014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_25014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_25049){var state_val_25050 = (state_25049[(1)]);if((state_val_25050 === (2)))
{var inst_25040 = (state_25049[(7)]);var inst_25046 = (state_25049[(2)]);var inst_25047 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),inst_25040,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),inst_25046);var state_25049__$1 = state_25049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25049__$1,inst_25047);
} else
{if((state_val_25050 === (1)))
{var inst_25040 = (state_25049[(7)]);var inst_25038 = cljs.core.deref.call(null,clustermap.app.state);var inst_25039 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362).cljs$core$IFn$_invoke$arity$1(inst_25038);var inst_25040__$1 = cljs.core.merge.call(null,inst_25039,table_view);var inst_25041 = cljs.core.deref.call(null,clustermap.app.state);var inst_25042 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_25041);var inst_25043 = cljs.core.merge.call(null,inst_25042,inst_25040__$1);var inst_25044 = clustermap.api.investments.call(null,inst_25043);var state_25049__$1 = (function (){var statearr_25051 = state_25049;(statearr_25051[(7)] = inst_25040__$1);
return statearr_25051;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25049__$1,(2),inst_25044);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_25055 = [null,null,null,null,null,null,null,null];(statearr_25055[(0)] = state_machine__5694__auto__);
(statearr_25055[(1)] = (1));
return statearr_25055;
});
var state_machine__5694__auto____1 = (function (state_25049){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25049);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25056){if((e25056 instanceof Object))
{var ex__5697__auto__ = e25056;var statearr_25057_25059 = state_25049;(statearr_25057_25059[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25049);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25060 = state_25049;
state_25049 = G__25060;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25049){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_25058 = f__5709__auto__.call(null);(statearr_25058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_25058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",1564939822),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",1147833503),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",1501475360),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__9563__auto___25077 = (function (params__9564__auto__){if(cljs.core.map_QMARK_.call(null,params__9564__auto__))
{var map__25069 = params__9564__auto__;var map__25069__$1 = ((cljs.core.seq_QMARK_.call(null,map__25069))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069):map__25069);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9564__auto__))
{var vec__25070 = params__9564__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9563__auto___25077);
var action__9563__auto___25078 = (function (params__9564__auto__){if(cljs.core.map_QMARK_.call(null,params__9564__auto__))
{var map__25071 = params__9564__auto__;var map__25071__$1 = ((cljs.core.seq_QMARK_.call(null,map__25071))?cljs.core.apply.call(null,cljs.core.hash_map,map__25071):map__25071);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9564__auto__))
{var vec__25072 = params__9564__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9563__auto___25078);
var action__9563__auto___25079 = (function (params__9564__auto__){if(cljs.core.map_QMARK_.call(null,params__9564__auto__))
{var map__25073 = params__9564__auto__;var map__25073__$1 = ((cljs.core.seq_QMARK_.call(null,map__25073))?cljs.core.apply.call(null,cljs.core.hash_map,map__25073):map__25073);var view = cljs.core.get.call(null,map__25073__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9564__auto__))
{var vec__25074 = params__9564__auto__;var view = cljs.core.nth.call(null,vec__25074,(0),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9563__auto___25079);
var action__9563__auto___25080 = (function (params__9564__auto__){if(cljs.core.map_QMARK_.call(null,params__9564__auto__))
{var map__25075 = params__9564__auto__;var map__25075__$1 = ((cljs.core.seq_QMARK_.call(null,map__25075))?cljs.core.apply.call(null,cljs.core.hash_map,map__25075):map__25075);var id = cljs.core.get.call(null,map__25075__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__25075__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__25075__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9564__auto__))
{var vec__25076 = params__9564__auto__;var view = cljs.core.nth.call(null,vec__25076,(0),null);var type = cljs.core.nth.call(null,vec__25076,(1),null);var id = cljs.core.nth.call(null,vec__25076,(2),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9563__auto___25080);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"comm","comm",-1689770614),comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),clustermap.app.change_view_path,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440))], null);clustermap.nav.init.call(null,comm);
clustermap.app.load_boundaryline_collection_indexes.call(null);
clustermap.components.mount.mount.call(null,clustermap.components.map.map_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"map-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"compiled","compiled",850043082)], null)], null));
clustermap.components.mount.mount.call(null,clustermap.components.map_report.map_report_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"map-report-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"compiled","compiled",850043082)], null),new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452)], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-report","map-report",-254073588)], null)], null));
clustermap.components.mount.mount.call(null,clustermap.components.filter.filter_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"search-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
clustermap.components.mount.mount.call(null,cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"variable-selection-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775)], null));
clustermap.components.mount.mount.call(null,cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Statistic",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"stat-selection-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null));
clustermap.components.mount.mount.call(null,cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Scale",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"scale-selection-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null));
return clustermap.components.mount.mount.call(null,clustermap.components.color_scale.color_scale_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"color-scale-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null));
});
