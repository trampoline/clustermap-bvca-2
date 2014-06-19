// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('clustermap.rtree');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.rtree');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.nav');
goog.require('clustermap.components.page_title');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"zoom","zoom",1017648965),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847),new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),new cljs.core.Keyword(null,"view","view",1017523735)],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,new cljs.core.Keyword(null,"map","map",1014012110)]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__22934){var vec__22935 = p__22934;var key_or_path = cljs.core.nth.call(null,vec__22935,0,null);var value_or_fn = cljs.core.nth.call(null,vec__22935,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__22935,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__22935,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22936){var map__22938 = p__22936;var map__22938__$1 = ((cljs.core.seq_QMARK_.call(null,map__22938))?cljs.core.apply.call(null,cljs.core.hash_map,map__22938):map__22938);var path_values = map__22938__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22936 = null;if (arguments.length > 0) {
  p__22936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22936);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22939){
var p__22936 = cljs.core.seq(arglist__22939);
return set_state__delegate(p__22936);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_22961){var state_val_22962 = (state_22961[1]);if((state_val_22962 === 2))
{var inst_22957 = (state_22961[2]);var inst_22958 = clustermap.rtree.rtree_index.call(null,inst_22957);var inst_22959 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_22957,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_22958);var state_22961__$1 = state_22961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22961__$1,inst_22959);
} else
{if((state_val_22962 === 1))
{var inst_22955 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_22961__$1 = state_22961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22961__$1,2,inst_22955);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_22966 = [null,null,null,null,null,null,null];(statearr_22966[0] = state_machine__5675__auto__);
(statearr_22966[1] = 1);
return statearr_22966;
});
var state_machine__5675__auto____1 = (function (state_22961){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_22961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e22967){if((e22967 instanceof Object))
{var ex__5678__auto__ = e22967;var statearr_22968_22970 = state_22961;(statearr_22968_22970[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22971 = state_22961;
state_22961 = G__22971;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_22961){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_22961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_22969 = f__5690__auto__.call(null);(statearr_22969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_22969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_22991){var state_val_22992 = (state_22991[1]);if((state_val_22992 === 2))
{var inst_22988 = (state_22991[2]);var inst_22989 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_22988);var state_22991__$1 = state_22991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22991__$1,inst_22989);
} else
{if((state_val_22992 === 1))
{var inst_22986 = clustermap.api.investment_stats.call(null);var state_22991__$1 = state_22991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22991__$1,2,inst_22986);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_22996 = [null,null,null,null,null,null,null];(statearr_22996[0] = state_machine__5675__auto__);
(statearr_22996[1] = 1);
return statearr_22996;
});
var state_machine__5675__auto____1 = (function (state_22991){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_22991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e22997){if((e22997 instanceof Object))
{var ex__5678__auto__ = e22997;var statearr_22998_23000 = state_22991;(statearr_22998_23000[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23001 = state_22991;
state_22991 = G__23001;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_22991){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_22991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_22999 = f__5690__auto__.call(null);(statearr_22999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_22999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__23002,type){var vec__23004 = p__23002;var selection = cljs.core.nth.call(null,vec__23004,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__23004,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__23004,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__23004,3,null);var selection_investments = cljs.core.nth.call(null,vec__23004,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__23004,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__23005){var vec__23010 = p__23005;var type = cljs.core.nth.call(null,vec__23010,0,null);var id = cljs.core.nth.call(null,vec__23010,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__23011 = cljs.core._EQ_;var expr__23012 = type;if(cljs.core.truth_(pred__23011.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23012)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__23011.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23012)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__23011.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23012)))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state))))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"view","view",1017523735),view__$1);
return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3527__auto__ = type;if(cljs.core.truth_(and__3527__auto__))
{return id;
} else
{return and__3527__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3539__auto__ = view;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__23015 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__23015,0,null);var view = cljs.core.nth.call(null,vec__23015,1,null);var type = cljs.core.nth.call(null,vec__23015,2,null);var id = cljs.core.nth.call(null,vec__23015,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__23016){var vec__23019 = p__23016;var type = cljs.core.nth.call(null,vec__23019,0,null);var id = cljs.core.nth.call(null,vec__23019,1,null);var map__23020 = clustermap.app.parse_route.call(null);var map__23020__$1 = ((cljs.core.seq_QMARK_.call(null,map__23020))?cljs.core.apply.call(null,cljs.core.hash_map,map__23020):map__23020);var view = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__23022 = clustermap.app.parse_route.call(null);var map__23022__$1 = ((cljs.core.seq_QMARK_.call(null,map__23022))?cljs.core.apply.call(null,cljs.core.hash_map,map__23022):map__23022);var id = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_23055){var state_val_23056 = (state_23055[1]);if((state_val_23056 === 2))
{var inst_23046 = (state_23055[7]);var inst_23052 = (state_23055[2]);var inst_23053 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_23046,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_23052);var state_23055__$1 = state_23055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23055__$1,inst_23053);
} else
{if((state_val_23056 === 1))
{var inst_23046 = (state_23055[7]);var inst_23044 = cljs.core.deref.call(null,clustermap.app.state);var inst_23045 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_23044);var inst_23046__$1 = cljs.core.merge.call(null,inst_23045,table_view);var inst_23047 = cljs.core.deref.call(null,clustermap.app.state);var inst_23048 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_23047);var inst_23049 = cljs.core.merge.call(null,inst_23048,inst_23046__$1);var inst_23050 = clustermap.api.investment_aggs.call(null,inst_23049);var state_23055__$1 = (function (){var statearr_23057 = state_23055;(statearr_23057[7] = inst_23046__$1);
return statearr_23057;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23055__$1,2,inst_23050);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_23061 = [null,null,null,null,null,null,null,null];(statearr_23061[0] = state_machine__5675__auto__);
(statearr_23061[1] = 1);
return statearr_23061;
});
var state_machine__5675__auto____1 = (function (state_23055){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_23055);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e23062){if((e23062 instanceof Object))
{var ex__5678__auto__ = e23062;var statearr_23063_23065 = state_23055;(statearr_23063_23065[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23066 = state_23055;
state_23055 = G__23066;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_23055){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_23055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_23064 = f__5690__auto__.call(null);(statearr_23064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_23064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_23099){var state_val_23100 = (state_23099[1]);if((state_val_23100 === 2))
{var inst_23090 = (state_23099[7]);var inst_23096 = (state_23099[2]);var inst_23097 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_23090,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_23096);var state_23099__$1 = state_23099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23099__$1,inst_23097);
} else
{if((state_val_23100 === 1))
{var inst_23090 = (state_23099[7]);var inst_23088 = cljs.core.deref.call(null,clustermap.app.state);var inst_23089 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_23088);var inst_23090__$1 = cljs.core.merge.call(null,inst_23089,table_view);var inst_23091 = cljs.core.deref.call(null,clustermap.app.state);var inst_23092 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_23091);var inst_23093 = cljs.core.merge.call(null,inst_23092,inst_23090__$1);var inst_23094 = clustermap.api.investments.call(null,inst_23093);var state_23099__$1 = (function (){var statearr_23101 = state_23099;(statearr_23101[7] = inst_23090__$1);
return statearr_23101;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23099__$1,2,inst_23094);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_23105 = [null,null,null,null,null,null,null,null];(statearr_23105[0] = state_machine__5675__auto__);
(statearr_23105[1] = 1);
return statearr_23105;
});
var state_machine__5675__auto____1 = (function (state_23099){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_23099);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e23106){if((e23106 instanceof Object))
{var ex__5678__auto__ = e23106;var statearr_23107_23109 = state_23099;(statearr_23107_23109[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23099);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23110 = state_23099;
state_23099 = G__23110;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_23099){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_23099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_23108 = f__5690__auto__.call(null);(statearr_23108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_23108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__9443__auto___23127 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__23119 = params__9444__auto__;var map__23119__$1 = ((cljs.core.seq_QMARK_.call(null,map__23119))?cljs.core.apply.call(null,cljs.core.hash_map,map__23119):map__23119);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__23120 = params__9444__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9443__auto___23127);
var action__9443__auto___23128 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__23121 = params__9444__auto__;var map__23121__$1 = ((cljs.core.seq_QMARK_.call(null,map__23121))?cljs.core.apply.call(null,cljs.core.hash_map,map__23121):map__23121);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__23122 = params__9444__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9443__auto___23128);
var action__9443__auto___23129 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__23123 = params__9444__auto__;var map__23123__$1 = ((cljs.core.seq_QMARK_.call(null,map__23123))?cljs.core.apply.call(null,cljs.core.hash_map,map__23123):map__23123);var view = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__23124 = params__9444__auto__;var view = cljs.core.nth.call(null,vec__23124,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9443__auto___23129);
var action__9443__auto___23130 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__23125 = params__9444__auto__;var map__23125__$1 = ((cljs.core.seq_QMARK_.call(null,map__23125))?cljs.core.apply.call(null,cljs.core.hash_map,map__23125):map__23125);var id = cljs.core.get.call(null,map__23125__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__23125__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__23125__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__23126 = params__9444__auto__;var view = cljs.core.nth.call(null,vec__23126,0,null);var type = cljs.core.nth.call(null,vec__23126,1,null);var id = cljs.core.nth.call(null,vec__23126,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9443__auto___23130);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),link_fn], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.app.load_all_investment_stats.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",shared);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",shared);
var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (state_23177){var state_val_23178 = (state_23177[1]);if((state_val_23178 === 7))
{var inst_23166 = (state_23177[2]);var inst_23167 = cljs.core.nth.call(null,inst_23166,0,null);var inst_23168 = cljs.core.nth.call(null,inst_23166,1,null);var inst_23169 = clustermap.app.handle_event.call(null,inst_23167,inst_23168);var state_23177__$1 = (function (){var statearr_23179 = state_23177;(statearr_23179[7] = inst_23169);
return statearr_23179;
})();var statearr_23180_23193 = state_23177__$1;(statearr_23180_23193[2] = null);
(statearr_23180_23193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23178 === 6))
{var inst_23173 = (state_23177[2]);var state_23177__$1 = state_23177;var statearr_23181_23194 = state_23177__$1;(statearr_23181_23194[2] = inst_23173);
(statearr_23181_23194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23178 === 5))
{var state_23177__$1 = state_23177;var statearr_23182_23195 = state_23177__$1;(statearr_23182_23195[2] = null);
(statearr_23182_23195[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23178 === 4))
{var state_23177__$1 = state_23177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23177__$1,7,comm);
} else
{if((state_val_23178 === 3))
{var inst_23175 = (state_23177[2]);var state_23177__$1 = state_23177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23177__$1,inst_23175);
} else
{if((state_val_23178 === 2))
{var state_23177__$1 = state_23177;if(true)
{var statearr_23183_23196 = state_23177__$1;(statearr_23183_23196[1] = 4);
} else
{var statearr_23184_23197 = state_23177__$1;(statearr_23184_23197[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23178 === 1))
{var state_23177__$1 = state_23177;var statearr_23185_23198 = state_23177__$1;(statearr_23185_23198[2] = null);
(statearr_23185_23198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_23189 = [null,null,null,null,null,null,null,null];(statearr_23189[0] = state_machine__5675__auto__);
(statearr_23189[1] = 1);
return statearr_23189;
});
var state_machine__5675__auto____1 = (function (state_23177){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_23177);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object))
{var ex__5678__auto__ = e23190;var statearr_23191_23199 = state_23177;(statearr_23191_23199[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23200 = state_23177;
state_23177 = G__23200;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_23177){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_23177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared))
})();var state__5691__auto__ = (function (){var statearr_23192 = f__5690__auto__.call(null);(statearr_23192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_23192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
);
return c__5689__auto__;
});

//# sourceMappingURL=app.js.map