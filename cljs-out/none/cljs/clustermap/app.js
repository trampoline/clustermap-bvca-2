// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.ganalytics');
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
goog.require('clustermap.ganalytics');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('clustermap.nav');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('goog.events');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),new cljs.core.Keyword(null,"zoom","zoom",1017648965)],[new cljs.core.Keyword(null,"map","map",1014012110),null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__22432){var vec__22433 = p__22432;var key_or_path = cljs.core.nth.call(null,vec__22433,0,null);var value_or_fn = cljs.core.nth.call(null,vec__22433,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22434){var map__22436 = p__22434;var map__22436__$1 = ((cljs.core.seq_QMARK_.call(null,map__22436))?cljs.core.apply.call(null,cljs.core.hash_map,map__22436):map__22436);var path_values = map__22436__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22434 = null;if (arguments.length > 0) {
  p__22434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22434);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22437){
var p__22434 = cljs.core.seq(arglist__22437);
return set_state__delegate(p__22434);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22459){var state_val_22460 = (state_22459[1]);if((state_val_22460 === 2))
{var inst_22455 = (state_22459[2]);var inst_22456 = clustermap.rtree.rtree_index.call(null,inst_22455);var inst_22457 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_22455,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_22456);var state_22459__$1 = state_22459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22459__$1,inst_22457);
} else
{if((state_val_22460 === 1))
{var inst_22453 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_22459__$1 = state_22459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22459__$1,2,inst_22453);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22464 = [null,null,null,null,null,null,null];(statearr_22464[0] = state_machine__5548__auto__);
(statearr_22464[1] = 1);
return statearr_22464;
});
var state_machine__5548__auto____1 = (function (state_22459){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22459);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22465){if((e22465 instanceof Object))
{var ex__5551__auto__ = e22465;var statearr_22466_22468 = state_22459;(statearr_22466_22468[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22459);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22469 = state_22459;
state_22459 = G__22469;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22459){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22467 = f__5563__auto__.call(null);(statearr_22467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22489){var state_val_22490 = (state_22489[1]);if((state_val_22490 === 2))
{var inst_22486 = (state_22489[2]);var inst_22487 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_22486);var state_22489__$1 = state_22489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22489__$1,inst_22487);
} else
{if((state_val_22490 === 1))
{var inst_22484 = clustermap.api.investment_stats.call(null);var state_22489__$1 = state_22489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22489__$1,2,inst_22484);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22494 = [null,null,null,null,null,null,null];(statearr_22494[0] = state_machine__5548__auto__);
(statearr_22494[1] = 1);
return statearr_22494;
});
var state_machine__5548__auto____1 = (function (state_22489){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22489);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22495){if((e22495 instanceof Object))
{var ex__5551__auto__ = e22495;var statearr_22496_22498 = state_22489;(statearr_22496_22498[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22489);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22499 = state_22489;
state_22489 = G__22499;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22489){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22497 = f__5563__auto__.call(null);(statearr_22497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__22500,type){var vec__22502 = p__22500;var selection = cljs.core.nth.call(null,vec__22502,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__22502,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__22502,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__22502,3,null);var selection_investments = cljs.core.nth.call(null,vec__22502,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__22502,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22503){var vec__22508 = p__22503;var type = cljs.core.nth.call(null,vec__22508,0,null);var id = cljs.core.nth.call(null,vec__22508,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__22509 = cljs.core._EQ_;var expr__22510 = type;if(cljs.core.truth_(pred__22509.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__22510)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__22509.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__22510)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__22509.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__22510)))
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
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3429__auto__ = type;if(cljs.core.truth_(and__3429__auto__))
{return id;
} else
{return and__3429__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,(function (){var or__3441__auto__ = view;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "map";
}
})())),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id))].join(''));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,view))].join(''));
} else
{if(true)
{return clustermap.app.history.setToken([cljs.core.str("")].join(''));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22513 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__22513,0,null);var view = cljs.core.nth.call(null,vec__22513,1,null);var type = cljs.core.nth.call(null,vec__22513,2,null);var id = cljs.core.nth.call(null,vec__22513,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22514){var vec__22517 = p__22514;var type = cljs.core.nth.call(null,vec__22517,0,null);var id = cljs.core.nth.call(null,vec__22517,1,null);var map__22518 = clustermap.app.parse_route.call(null);var map__22518__$1 = ((cljs.core.seq_QMARK_.call(null,map__22518))?cljs.core.apply.call(null,cljs.core.hash_map,map__22518):map__22518);var view = cljs.core.get.call(null,map__22518__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22520 = clustermap.app.parse_route.call(null);var map__22520__$1 = ((cljs.core.seq_QMARK_.call(null,map__22520))?cljs.core.apply.call(null,cljs.core.hash_map,map__22520):map__22520);var id = cljs.core.get.call(null,map__22520__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__22520__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22553){var state_val_22554 = (state_22553[1]);if((state_val_22554 === 2))
{var inst_22544 = (state_22553[7]);var inst_22550 = (state_22553[2]);var inst_22551 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_22544,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_22550);var state_22553__$1 = state_22553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22553__$1,inst_22551);
} else
{if((state_val_22554 === 1))
{var inst_22544 = (state_22553[7]);var inst_22542 = cljs.core.deref.call(null,clustermap.app.state);var inst_22543 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_22542);var inst_22544__$1 = cljs.core.merge.call(null,inst_22543,table_view);var inst_22545 = cljs.core.deref.call(null,clustermap.app.state);var inst_22546 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_22545);var inst_22547 = cljs.core.merge.call(null,inst_22546,inst_22544__$1);var inst_22548 = clustermap.api.investment_aggs.call(null,inst_22547);var state_22553__$1 = (function (){var statearr_22555 = state_22553;(statearr_22555[7] = inst_22544__$1);
return statearr_22555;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22553__$1,2,inst_22548);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22559 = [null,null,null,null,null,null,null,null];(statearr_22559[0] = state_machine__5548__auto__);
(statearr_22559[1] = 1);
return statearr_22559;
});
var state_machine__5548__auto____1 = (function (state_22553){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22560){if((e22560 instanceof Object))
{var ex__5551__auto__ = e22560;var statearr_22561_22563 = state_22553;(statearr_22561_22563[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22564 = state_22553;
state_22553 = G__22564;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22553){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22562 = f__5563__auto__.call(null);(statearr_22562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22597){var state_val_22598 = (state_22597[1]);if((state_val_22598 === 2))
{var inst_22588 = (state_22597[7]);var inst_22594 = (state_22597[2]);var inst_22595 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_22588,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_22594);var state_22597__$1 = state_22597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22597__$1,inst_22595);
} else
{if((state_val_22598 === 1))
{var inst_22588 = (state_22597[7]);var inst_22586 = cljs.core.deref.call(null,clustermap.app.state);var inst_22587 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_22586);var inst_22588__$1 = cljs.core.merge.call(null,inst_22587,table_view);var inst_22589 = cljs.core.deref.call(null,clustermap.app.state);var inst_22590 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_22589);var inst_22591 = cljs.core.merge.call(null,inst_22590,inst_22588__$1);var inst_22592 = clustermap.api.investments.call(null,inst_22591);var state_22597__$1 = (function (){var statearr_22599 = state_22597;(statearr_22599[7] = inst_22588__$1);
return statearr_22599;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22597__$1,2,inst_22592);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22603 = [null,null,null,null,null,null,null,null];(statearr_22603[0] = state_machine__5548__auto__);
(statearr_22603[1] = 1);
return statearr_22603;
});
var state_machine__5548__auto____1 = (function (state_22597){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22597);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22604){if((e22604 instanceof Object))
{var ex__5551__auto__ = e22604;var statearr_22605_22607 = state_22597;(statearr_22605_22607[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22608 = state_22597;
state_22597 = G__22608;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22597){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22606 = f__5563__auto__.call(null);(statearr_22606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___22625 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22617 = params__9285__auto__;var map__22617__$1 = ((cljs.core.seq_QMARK_.call(null,map__22617))?cljs.core.apply.call(null,cljs.core.hash_map,map__22617):map__22617);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22618 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9284__auto___22625);
var action__9284__auto___22626 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22619 = params__9285__auto__;var map__22619__$1 = ((cljs.core.seq_QMARK_.call(null,map__22619))?cljs.core.apply.call(null,cljs.core.hash_map,map__22619):map__22619);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22620 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9284__auto___22626);
var action__9284__auto___22627 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22621 = params__9285__auto__;var map__22621__$1 = ((cljs.core.seq_QMARK_.call(null,map__22621))?cljs.core.apply.call(null,cljs.core.hash_map,map__22621):map__22621);var view = cljs.core.get.call(null,map__22621__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22622 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__22622,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9284__auto___22627);
var action__9284__auto___22628 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22623 = params__9285__auto__;var map__22623__$1 = ((cljs.core.seq_QMARK_.call(null,map__22623))?cljs.core.apply.call(null,cljs.core.hash_map,map__22623):map__22623);var id = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22624 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__22624,0,null);var type = cljs.core.nth.call(null,vec__22624,1,null);var id = cljs.core.nth.call(null,vec__22624,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9284__auto___22628);
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
var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22675){var state_val_22676 = (state_22675[1]);if((state_val_22676 === 7))
{var inst_22664 = (state_22675[2]);var inst_22665 = cljs.core.nth.call(null,inst_22664,0,null);var inst_22666 = cljs.core.nth.call(null,inst_22664,1,null);var inst_22667 = clustermap.app.handle_event.call(null,inst_22665,inst_22666);var state_22675__$1 = (function (){var statearr_22677 = state_22675;(statearr_22677[7] = inst_22667);
return statearr_22677;
})();var statearr_22678_22691 = state_22675__$1;(statearr_22678_22691[2] = null);
(statearr_22678_22691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22676 === 6))
{var inst_22671 = (state_22675[2]);var state_22675__$1 = state_22675;var statearr_22679_22692 = state_22675__$1;(statearr_22679_22692[2] = inst_22671);
(statearr_22679_22692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22676 === 5))
{var state_22675__$1 = state_22675;var statearr_22680_22693 = state_22675__$1;(statearr_22680_22693[2] = null);
(statearr_22680_22693[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22676 === 4))
{var state_22675__$1 = state_22675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,7,comm);
} else
{if((state_val_22676 === 3))
{var inst_22673 = (state_22675[2]);var state_22675__$1 = state_22675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22675__$1,inst_22673);
} else
{if((state_val_22676 === 2))
{var state_22675__$1 = state_22675;if(true)
{var statearr_22681_22694 = state_22675__$1;(statearr_22681_22694[1] = 4);
} else
{var statearr_22682_22695 = state_22675__$1;(statearr_22682_22695[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22676 === 1))
{var state_22675__$1 = state_22675;var statearr_22683_22696 = state_22675__$1;(statearr_22683_22696[2] = null);
(statearr_22683_22696[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22687 = [null,null,null,null,null,null,null,null];(statearr_22687[0] = state_machine__5548__auto__);
(statearr_22687[1] = 1);
return statearr_22687;
});
var state_machine__5548__auto____1 = (function (state_22675){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22675);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22688){if((e22688 instanceof Object))
{var ex__5551__auto__ = e22688;var statearr_22689_22697 = state_22675;(statearr_22689_22697[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22698 = state_22675;
state_22675 = G__22698;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22675){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22690 = f__5563__auto__.call(null);(statearr_22690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});

//# sourceMappingURL=app.js.map