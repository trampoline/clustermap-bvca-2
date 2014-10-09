// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('clustermap.components.timeline_chart');
goog.require('goog.history.EventType');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.routes');
goog.require('clustermap.components.table');
goog.require('om.dom');
goog.require('clustermap.components.table');
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
goog.require('clustermap.formats.time');
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
goog.require('clustermap.formats.time');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255),false,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"compiled","compiled",850043082),null], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Oranges","Oranges",1752319702),new cljs.core.Keyword(null,"9","9",1664767314)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"sum","sum",136986814)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!name","!name",1164538490),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!postcode","!postcode",1728852280),"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),"Formation date",(function (p1__15869_SHARP_){return clustermap.formats.time.format_date.call(null,p1__15869_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_accounts_date","!latest_accounts_date",-259857093),"Filing date",(function (p1__15870_SHARP_){return clustermap.formats.time.format_date.call(null,p1__15870_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),"Employees",(function (p1__15871_SHARP_){return clustermap.formats.number.readable.call(null,p1__15871_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"Turnover",(function (p1__15872_SHARP_){return clustermap.formats.money.readable.call(null,p1__15872_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null)], null),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"company_accounts",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"measure-variables","measure-variables",893431199),"!turnover",new cljs.core.Keyword(null,"interval","interval",1708495417),"year"], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"map","map",1371690461)], null));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__15875){var vec__15876 = p__15875;var key_or_path = cljs.core.nth.call(null,vec__15876,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__15876,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__15876,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__15876,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__15877){var map__15879 = p__15877;var map__15879__$1 = ((cljs.core.seq_QMARK_.call(null,map__15879))?cljs.core.apply.call(null,cljs.core.hash_map,map__15879):map__15879);var path_values = map__15879__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__15877 = null;if (arguments.length > 0) {
  p__15877 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__15877);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__15880){
var p__15877 = cljs.core.seq(arglist__15880);
return set_state__delegate(p__15877);
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
get_state.cljs$lang$applyTo = (function (arglist__15881){
var path = cljs.core.seq(arglist__15881);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__15886 = cljs.core.seq.call(null,clustermap.app.bl_collections);var chunk__15887 = null;var count__15888 = (0);var i__15889 = (0);while(true){
if((i__15889 < count__15888))
{var blcoll = cljs.core._nth.call(null,chunk__15887,i__15889);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__15890 = seq__15886;
var G__15891 = chunk__15887;
var G__15892 = count__15888;
var G__15893 = (i__15889 + (1));
seq__15886 = G__15890;
chunk__15887 = G__15891;
count__15888 = G__15892;
i__15889 = G__15893;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15886);if(temp__4126__auto__)
{var seq__15886__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15886__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__15886__$1);{
var G__15894 = cljs.core.chunk_rest.call(null,seq__15886__$1);
var G__15895 = c__4314__auto__;
var G__15896 = cljs.core.count.call(null,c__4314__auto__);
var G__15897 = (0);
seq__15886 = G__15894;
chunk__15887 = G__15895;
count__15888 = G__15896;
i__15889 = G__15897;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__15886__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__15898 = cljs.core.next.call(null,seq__15886__$1);
var G__15899 = null;
var G__15900 = (0);
var G__15901 = (0);
seq__15886 = G__15898;
chunk__15887 = G__15899;
count__15888 = G__15900;
i__15889 = G__15901;
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
return (function (state_15921){var state_val_15922 = (state_15921[(1)]);if((state_val_15922 === (2)))
{var inst_15918 = (state_15921[(2)]);var inst_15919 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),inst_15918);var state_15921__$1 = state_15921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15921__$1,inst_15919);
} else
{if((state_val_15922 === (1)))
{var inst_15916 = clustermap.api.investment_stats.call(null);var state_15921__$1 = state_15921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15921__$1,(2),inst_15916);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15926 = [null,null,null,null,null,null,null];(statearr_15926[(0)] = state_machine__5694__auto__);
(statearr_15926[(1)] = (1));
return statearr_15926;
});
var state_machine__5694__auto____1 = (function (state_15921){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15921);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15927){if((e15927 instanceof Object))
{var ex__5697__auto__ = e15927;var statearr_15928_15930 = state_15921;(statearr_15928_15930[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15921);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15927;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15931 = state_15921;
state_15921 = G__15931;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15921){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_15929 = f__5709__auto__.call(null);(statearr_15929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_15929;
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
clustermap.app.process_selection = (function process_selection(p__15932,type){var vec__15934 = p__15932;var selection = cljs.core.nth.call(null,vec__15934,(0),null);var selection_investment_stats = cljs.core.nth.call(null,vec__15934,(1),null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__15934,(2),null);var selection_investment_aggs = cljs.core.nth.call(null,vec__15934,(3),null);var selection_investments = cljs.core.nth.call(null,vec__15934,(4),null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__15934,(5),null);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__15935){var vec__15940 = p__15935;var type = cljs.core.nth.call(null,vec__15940,(0),null);var id = cljs.core.nth.call(null,vec__15940,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),selector);
var pred__15941 = cljs.core._EQ_;var expr__15942 = type;if(cljs.core.truth_(pred__15941.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__15942)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__15941.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__15942)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__15941.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__15942)))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__15947 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__15947,(0),null);var view = cljs.core.nth.call(null,vec__15947,(1),null);var type = cljs.core.nth.call(null,vec__15947,(2),null);var id = cljs.core.nth.call(null,vec__15947,(3),null);var type__$1 = ((((function (){var G__15948 = type;var G__15948__$1 = (((G__15948 == null))?null:clojure.string.trim.call(null,G__15948));var G__15948__$2 = (((G__15948__$1 == null))?null:cljs.core.count.call(null,G__15948__$1));return G__15948__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__15949 = id;var G__15949__$1 = (((G__15949 == null))?null:clojure.string.trim.call(null,G__15949));var G__15949__$2 = (((G__15949__$1 == null))?null:cljs.core.count.call(null,G__15949__$1));return G__15949__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__15950){var vec__15953 = p__15950;var type = cljs.core.nth.call(null,vec__15953,(0),null);var id = cljs.core.nth.call(null,vec__15953,(1),null);var map__15954 = clustermap.app.parse_route.call(null);var map__15954__$1 = ((cljs.core.seq_QMARK_.call(null,map__15954))?cljs.core.apply.call(null,cljs.core.hash_map,map__15954):map__15954);var view = cljs.core.get.call(null,map__15954__$1,new cljs.core.Keyword(null,"view","view",1247994814));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__15956 = clustermap.app.parse_route.call(null);var map__15956__$1 = ((cljs.core.seq_QMARK_.call(null,map__15956))?cljs.core.apply.call(null,cljs.core.hash_map,map__15956):map__15956);var id = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_15989){var state_val_15990 = (state_15989[(1)]);if((state_val_15990 === (2)))
{var inst_15980 = (state_15989[(7)]);var inst_15986 = (state_15989[(2)]);var inst_15987 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),inst_15980,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),inst_15986);var state_15989__$1 = state_15989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15989__$1,inst_15987);
} else
{if((state_val_15990 === (1)))
{var inst_15980 = (state_15989[(7)]);var inst_15978 = cljs.core.deref.call(null,clustermap.app.state);var inst_15979 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048).cljs$core$IFn$_invoke$arity$1(inst_15978);var inst_15980__$1 = cljs.core.merge.call(null,inst_15979,table_view);var inst_15981 = cljs.core.deref.call(null,clustermap.app.state);var inst_15982 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_15981);var inst_15983 = cljs.core.merge.call(null,inst_15982,inst_15980__$1);var inst_15984 = clustermap.api.investment_aggs.call(null,inst_15983);var state_15989__$1 = (function (){var statearr_15991 = state_15989;(statearr_15991[(7)] = inst_15980__$1);
return statearr_15991;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15989__$1,(2),inst_15984);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15995 = [null,null,null,null,null,null,null,null];(statearr_15995[(0)] = state_machine__5694__auto__);
(statearr_15995[(1)] = (1));
return statearr_15995;
});
var state_machine__5694__auto____1 = (function (state_15989){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15989);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15996){if((e15996 instanceof Object))
{var ex__5697__auto__ = e15996;var statearr_15997_15999 = state_15989;(statearr_15997_15999[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15996;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16000 = state_15989;
state_15989 = G__16000;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15989){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_15998 = f__5709__auto__.call(null);(statearr_15998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_15998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_16033){var state_val_16034 = (state_16033[(1)]);if((state_val_16034 === (2)))
{var inst_16024 = (state_16033[(7)]);var inst_16030 = (state_16033[(2)]);var inst_16031 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),inst_16024,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),inst_16030);var state_16033__$1 = state_16033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16033__$1,inst_16031);
} else
{if((state_val_16034 === (1)))
{var inst_16024 = (state_16033[(7)]);var inst_16022 = cljs.core.deref.call(null,clustermap.app.state);var inst_16023 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362).cljs$core$IFn$_invoke$arity$1(inst_16022);var inst_16024__$1 = cljs.core.merge.call(null,inst_16023,table_view);var inst_16025 = cljs.core.deref.call(null,clustermap.app.state);var inst_16026 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_16025);var inst_16027 = cljs.core.merge.call(null,inst_16026,inst_16024__$1);var inst_16028 = clustermap.api.investments.call(null,inst_16027);var state_16033__$1 = (function (){var statearr_16035 = state_16033;(statearr_16035[(7)] = inst_16024__$1);
return statearr_16035;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16033__$1,(2),inst_16028);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16039 = [null,null,null,null,null,null,null,null];(statearr_16039[(0)] = state_machine__5694__auto__);
(statearr_16039[(1)] = (1));
return statearr_16039;
});
var state_machine__5694__auto____1 = (function (state_16033){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16033);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16040){if((e16040 instanceof Object))
{var ex__5697__auto__ = e16040;var statearr_16041_16043 = state_16033;(statearr_16041_16043[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16033);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16040;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16044 = state_16033;
state_16033 = G__16044;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16033){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16042 = f__5709__auto__.call(null);(statearr_16042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16042;
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
clustermap.app.init_routes = (function init_routes(comm){var action__9531__auto___16061 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__16053 = params__9532__auto__;var map__16053__$1 = ((cljs.core.seq_QMARK_.call(null,map__16053))?cljs.core.apply.call(null,cljs.core.hash_map,map__16053):map__16053);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__16054 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9531__auto___16061);
var action__9531__auto___16062 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__16055 = params__9532__auto__;var map__16055__$1 = ((cljs.core.seq_QMARK_.call(null,map__16055))?cljs.core.apply.call(null,cljs.core.hash_map,map__16055):map__16055);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__16056 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9531__auto___16062);
var action__9531__auto___16063 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__16057 = params__9532__auto__;var map__16057__$1 = ((cljs.core.seq_QMARK_.call(null,map__16057))?cljs.core.apply.call(null,cljs.core.hash_map,map__16057):map__16057);var view = cljs.core.get.call(null,map__16057__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__16058 = params__9532__auto__;var view = cljs.core.nth.call(null,vec__16058,(0),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9531__auto___16063);
var action__9531__auto___16064 = (function (params__9532__auto__){if(cljs.core.map_QMARK_.call(null,params__9532__auto__))
{var map__16059 = params__9532__auto__;var map__16059__$1 = ((cljs.core.seq_QMARK_.call(null,map__16059))?cljs.core.apply.call(null,cljs.core.hash_map,map__16059):map__16059);var id = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__16059__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9532__auto__))
{var vec__16060 = params__9532__auto__;var view = cljs.core.nth.call(null,vec__16060,(0),null);var type = cljs.core.nth.call(null,vec__16060,(1),null);var id = cljs.core.nth.call(null,vec__16060,(2),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9531__auto___16064);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"comm","comm",-1689770614),comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),clustermap.app.change_view_path,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440))], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_boundaryline_collection_indexes.call(null);
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"map","map",1371690461),clustermap.components.map.map_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"map-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"compiled","compiled",850043082)], null)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"map-report","map-report",-254073588),clustermap.components.map_report.map_report_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"map-report-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452)], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-report","map-report",-254073588)], null)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.filter.filter_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"search-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"var-select","var-select",-284006595),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"variable-selection-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"stat-select","stat-select",587769134),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Statistic",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"stat-selection-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"scale-select","scale-select",1690031490),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Scale",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"scale-selection-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"color-scale","color-scale",-2117745622),clustermap.components.color_scale.color_scale_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"color-scale-component",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"table","table",-564943036),clustermap.components.table.table_component,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"full-report-table",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null));
clustermap.components.mount.mount.call(null,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),clustermap.components.timeline_chart.timeline_chart,clustermap.app.state,new cljs.core.Keyword(null,"target","target",253001721),"turnover-timeline",new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null));
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (state_16111){var state_val_16112 = (state_16111[(1)]);if((state_val_16112 === (7)))
{var inst_16100 = (state_16111[(2)]);var inst_16101 = cljs.core.nth.call(null,inst_16100,(0),null);var inst_16102 = cljs.core.nth.call(null,inst_16100,(1),null);var inst_16103 = clustermap.app.handle_event.call(null,inst_16101,inst_16102);var state_16111__$1 = (function (){var statearr_16113 = state_16111;(statearr_16113[(7)] = inst_16103);
return statearr_16113;
})();var statearr_16114_16127 = state_16111__$1;(statearr_16114_16127[(2)] = null);
(statearr_16114_16127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16112 === (6)))
{var inst_16107 = (state_16111[(2)]);var state_16111__$1 = state_16111;var statearr_16115_16128 = state_16111__$1;(statearr_16115_16128[(2)] = inst_16107);
(statearr_16115_16128[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16112 === (5)))
{var state_16111__$1 = state_16111;var statearr_16116_16129 = state_16111__$1;(statearr_16116_16129[(2)] = null);
(statearr_16116_16129[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16112 === (4)))
{var state_16111__$1 = state_16111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16111__$1,(7),comm);
} else
{if((state_val_16112 === (3)))
{var inst_16109 = (state_16111[(2)]);var state_16111__$1 = state_16111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16111__$1,inst_16109);
} else
{if((state_val_16112 === (2)))
{var state_16111__$1 = state_16111;var statearr_16117_16130 = state_16111__$1;(statearr_16117_16130[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16112 === (1)))
{var state_16111__$1 = state_16111;var statearr_16119_16131 = state_16111__$1;(statearr_16119_16131[(2)] = null);
(statearr_16119_16131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16123 = [null,null,null,null,null,null,null,null];(statearr_16123[(0)] = state_machine__5694__auto__);
(statearr_16123[(1)] = (1));
return statearr_16123;
});
var state_machine__5694__auto____1 = (function (state_16111){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16124){if((e16124 instanceof Object))
{var ex__5697__auto__ = e16124;var statearr_16125_16132 = state_16111;(statearr_16125_16132[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16124;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16133 = state_16111;
state_16111 = G__16133;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16111){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared))
})();var state__5710__auto__ = (function (){var statearr_16126 = f__5709__auto__.call(null);(statearr_16126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
);
return c__5708__auto__;
});
