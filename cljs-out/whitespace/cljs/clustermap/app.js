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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__44544){var vec__44545 = p__44544;var key_or_path = cljs.core.nth.call(null,vec__44545,0,null);var value_or_fn = cljs.core.nth.call(null,vec__44545,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__44546){var map__44548 = p__44546;var map__44548__$1 = ((cljs.core.seq_QMARK_.call(null,map__44548))?cljs.core.apply.call(null,cljs.core.hash_map,map__44548):map__44548);var path_values = map__44548__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__44546 = null;if (arguments.length > 0) {
  p__44546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__44546);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__44549){
var p__44546 = cljs.core.seq(arglist__44549);
return set_state__delegate(p__44546);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44571){var state_val_44572 = (state_44571[1]);if((state_val_44572 === 2))
{var inst_44567 = (state_44571[2]);var inst_44568 = clustermap.rtree.rtree_index.call(null,inst_44567);var inst_44569 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_44567,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_44568);var state_44571__$1 = state_44571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44571__$1,inst_44569);
} else
{if((state_val_44572 === 1))
{var inst_44565 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_44571__$1 = state_44571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44571__$1,2,inst_44565);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_44576 = [null,null,null,null,null,null,null];(statearr_44576[0] = state_machine__5548__auto__);
(statearr_44576[1] = 1);
return statearr_44576;
});
var state_machine__5548__auto____1 = (function (state_44571){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44571);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44577){if((e44577 instanceof Object))
{var ex__5551__auto__ = e44577;var statearr_44578_44580 = state_44571;(statearr_44578_44580[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44581 = state_44571;
state_44571 = G__44581;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44571){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44579 = f__5563__auto__.call(null);(statearr_44579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_44579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44601){var state_val_44602 = (state_44601[1]);if((state_val_44602 === 2))
{var inst_44598 = (state_44601[2]);var inst_44599 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_44598);var state_44601__$1 = state_44601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44601__$1,inst_44599);
} else
{if((state_val_44602 === 1))
{var inst_44596 = clustermap.api.investment_stats.call(null);var state_44601__$1 = state_44601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44601__$1,2,inst_44596);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_44606 = [null,null,null,null,null,null,null];(statearr_44606[0] = state_machine__5548__auto__);
(statearr_44606[1] = 1);
return statearr_44606;
});
var state_machine__5548__auto____1 = (function (state_44601){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44601);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44607){if((e44607 instanceof Object))
{var ex__5551__auto__ = e44607;var statearr_44608_44610 = state_44601;(statearr_44608_44610[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44611 = state_44601;
state_44601 = G__44611;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44601){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44609 = f__5563__auto__.call(null);(statearr_44609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_44609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__44612,type){var vec__44614 = p__44612;var selection = cljs.core.nth.call(null,vec__44614,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__44614,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__44614,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__44614,3,null);var selection_investments = cljs.core.nth.call(null,vec__44614,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__44614,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__44615){var vec__44620 = p__44615;var type = cljs.core.nth.call(null,vec__44620,0,null);var id = cljs.core.nth.call(null,vec__44620,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__44621 = cljs.core._EQ_;var expr__44622 = type;if(cljs.core.truth_(pred__44621.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__44622)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__44621.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__44622)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__44621.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__44622)))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__44625 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__44625,0,null);var view = cljs.core.nth.call(null,vec__44625,1,null);var type = cljs.core.nth.call(null,vec__44625,2,null);var id = cljs.core.nth.call(null,vec__44625,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__44626){var vec__44629 = p__44626;var type = cljs.core.nth.call(null,vec__44629,0,null);var id = cljs.core.nth.call(null,vec__44629,1,null);var map__44630 = clustermap.app.parse_route.call(null);var map__44630__$1 = ((cljs.core.seq_QMARK_.call(null,map__44630))?cljs.core.apply.call(null,cljs.core.hash_map,map__44630):map__44630);var view = cljs.core.get.call(null,map__44630__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__44632 = clustermap.app.parse_route.call(null);var map__44632__$1 = ((cljs.core.seq_QMARK_.call(null,map__44632))?cljs.core.apply.call(null,cljs.core.hash_map,map__44632):map__44632);var id = cljs.core.get.call(null,map__44632__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__44632__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44665){var state_val_44666 = (state_44665[1]);if((state_val_44666 === 2))
{var inst_44656 = (state_44665[7]);var inst_44662 = (state_44665[2]);var inst_44663 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_44656,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_44662);var state_44665__$1 = state_44665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44665__$1,inst_44663);
} else
{if((state_val_44666 === 1))
{var inst_44656 = (state_44665[7]);var inst_44654 = cljs.core.deref.call(null,clustermap.app.state);var inst_44655 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_44654);var inst_44656__$1 = cljs.core.merge.call(null,inst_44655,table_view);var inst_44657 = cljs.core.deref.call(null,clustermap.app.state);var inst_44658 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_44657);var inst_44659 = cljs.core.merge.call(null,inst_44658,inst_44656__$1);var inst_44660 = clustermap.api.investment_aggs.call(null,inst_44659);var state_44665__$1 = (function (){var statearr_44667 = state_44665;(statearr_44667[7] = inst_44656__$1);
return statearr_44667;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44665__$1,2,inst_44660);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_44671 = [null,null,null,null,null,null,null,null];(statearr_44671[0] = state_machine__5548__auto__);
(statearr_44671[1] = 1);
return statearr_44671;
});
var state_machine__5548__auto____1 = (function (state_44665){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44665);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44672){if((e44672 instanceof Object))
{var ex__5551__auto__ = e44672;var statearr_44673_44675 = state_44665;(statearr_44673_44675[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44676 = state_44665;
state_44665 = G__44676;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44665){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44674 = f__5563__auto__.call(null);(statearr_44674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_44674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44709){var state_val_44710 = (state_44709[1]);if((state_val_44710 === 2))
{var inst_44700 = (state_44709[7]);var inst_44706 = (state_44709[2]);var inst_44707 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_44700,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_44706);var state_44709__$1 = state_44709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44709__$1,inst_44707);
} else
{if((state_val_44710 === 1))
{var inst_44700 = (state_44709[7]);var inst_44698 = cljs.core.deref.call(null,clustermap.app.state);var inst_44699 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_44698);var inst_44700__$1 = cljs.core.merge.call(null,inst_44699,table_view);var inst_44701 = cljs.core.deref.call(null,clustermap.app.state);var inst_44702 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_44701);var inst_44703 = cljs.core.merge.call(null,inst_44702,inst_44700__$1);var inst_44704 = clustermap.api.investments.call(null,inst_44703);var state_44709__$1 = (function (){var statearr_44711 = state_44709;(statearr_44711[7] = inst_44700__$1);
return statearr_44711;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44709__$1,2,inst_44704);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_44715 = [null,null,null,null,null,null,null,null];(statearr_44715[0] = state_machine__5548__auto__);
(statearr_44715[1] = 1);
return statearr_44715;
});
var state_machine__5548__auto____1 = (function (state_44709){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44716){if((e44716 instanceof Object))
{var ex__5551__auto__ = e44716;var statearr_44717_44719 = state_44709;(statearr_44717_44719[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44720 = state_44709;
state_44709 = G__44720;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44709){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44718 = f__5563__auto__.call(null);(statearr_44718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_44718;
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
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___44737 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__44729 = params__9285__auto__;var map__44729__$1 = ((cljs.core.seq_QMARK_.call(null,map__44729))?cljs.core.apply.call(null,cljs.core.hash_map,map__44729):map__44729);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__44730 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9284__auto___44737);
var action__9284__auto___44738 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__44731 = params__9285__auto__;var map__44731__$1 = ((cljs.core.seq_QMARK_.call(null,map__44731))?cljs.core.apply.call(null,cljs.core.hash_map,map__44731):map__44731);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__44732 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9284__auto___44738);
var action__9284__auto___44739 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__44733 = params__9285__auto__;var map__44733__$1 = ((cljs.core.seq_QMARK_.call(null,map__44733))?cljs.core.apply.call(null,cljs.core.hash_map,map__44733):map__44733);var view = cljs.core.get.call(null,map__44733__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__44734 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__44734,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9284__auto___44739);
var action__9284__auto___44740 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__44735 = params__9285__auto__;var map__44735__$1 = ((cljs.core.seq_QMARK_.call(null,map__44735))?cljs.core.apply.call(null,cljs.core.hash_map,map__44735):map__44735);var id = cljs.core.get.call(null,map__44735__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__44735__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__44735__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__44736 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__44736,0,null);var type = cljs.core.nth.call(null,vec__44736,1,null);var id = cljs.core.nth.call(null,vec__44736,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9284__auto___44740);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = cljs.core.partial.call(null,clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.call(null,clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),link_fn], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.app.load_all_investment_stats.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",shared);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",shared);
var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44787){var state_val_44788 = (state_44787[1]);if((state_val_44788 === 7))
{var inst_44776 = (state_44787[2]);var inst_44777 = cljs.core.nth.call(null,inst_44776,0,null);var inst_44778 = cljs.core.nth.call(null,inst_44776,1,null);var inst_44779 = clustermap.app.handle_event.call(null,inst_44777,inst_44778);var state_44787__$1 = (function (){var statearr_44789 = state_44787;(statearr_44789[7] = inst_44779);
return statearr_44789;
})();var statearr_44790_44803 = state_44787__$1;(statearr_44790_44803[2] = null);
(statearr_44790_44803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44788 === 6))
{var inst_44783 = (state_44787[2]);var state_44787__$1 = state_44787;var statearr_44791_44804 = state_44787__$1;(statearr_44791_44804[2] = inst_44783);
(statearr_44791_44804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44788 === 5))
{var state_44787__$1 = state_44787;var statearr_44792_44805 = state_44787__$1;(statearr_44792_44805[2] = null);
(statearr_44792_44805[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44788 === 4))
{var state_44787__$1 = state_44787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44787__$1,7,comm);
} else
{if((state_val_44788 === 3))
{var inst_44785 = (state_44787[2]);var state_44787__$1 = state_44787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44787__$1,inst_44785);
} else
{if((state_val_44788 === 2))
{var state_44787__$1 = state_44787;if(true)
{var statearr_44793_44806 = state_44787__$1;(statearr_44793_44806[1] = 4);
} else
{var statearr_44794_44807 = state_44787__$1;(statearr_44794_44807[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44788 === 1))
{var state_44787__$1 = state_44787;var statearr_44795_44808 = state_44787__$1;(statearr_44795_44808[2] = null);
(statearr_44795_44808[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_44799 = [null,null,null,null,null,null,null,null];(statearr_44799[0] = state_machine__5548__auto__);
(statearr_44799[1] = 1);
return statearr_44799;
});
var state_machine__5548__auto____1 = (function (state_44787){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44800){if((e44800 instanceof Object))
{var ex__5551__auto__ = e44800;var statearr_44801_44809 = state_44787;(statearr_44801_44809[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44810 = state_44787;
state_44787 = G__44810;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44787){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44802 = f__5563__auto__.call(null);(statearr_44802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_44802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
