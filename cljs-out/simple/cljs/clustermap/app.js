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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__11565){var vec__11566 = p__11565;var key_or_path = cljs.core.nth.call(null,vec__11566,0,null);var value_or_fn = cljs.core.nth.call(null,vec__11566,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__11567){var map__11569 = p__11567;var map__11569__$1 = ((cljs.core.seq_QMARK_.call(null,map__11569))?cljs.core.apply.call(null,cljs.core.hash_map,map__11569):map__11569);var path_values = map__11569__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__11567 = null;if (arguments.length > 0) {
  p__11567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__11567);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__11570){
var p__11567 = cljs.core.seq(arglist__11570);
return set_state__delegate(p__11567);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11592){var state_val_11593 = (state_11592[1]);if((state_val_11593 === 2))
{var inst_11588 = (state_11592[2]);var inst_11589 = clustermap.rtree.rtree_index.call(null,inst_11588);var inst_11590 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_11588,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_11589);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11592__$1,inst_11590);
} else
{if((state_val_11593 === 1))
{var inst_11586 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11592__$1,2,inst_11586);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_11597 = [null,null,null,null,null,null,null];(statearr_11597[0] = state_machine__5548__auto__);
(statearr_11597[1] = 1);
return statearr_11597;
});
var state_machine__5548__auto____1 = (function (state_11592){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11598){if((e11598 instanceof Object))
{var ex__5551__auto__ = e11598;var statearr_11599_11601 = state_11592;(statearr_11599_11601[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11592);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11602 = state_11592;
state_11592 = G__11602;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11592){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11600 = f__5563__auto__.call(null);(statearr_11600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_11600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11622){var state_val_11623 = (state_11622[1]);if((state_val_11623 === 2))
{var inst_11619 = (state_11622[2]);var inst_11620 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_11619);var state_11622__$1 = state_11622;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11622__$1,inst_11620);
} else
{if((state_val_11623 === 1))
{var inst_11617 = clustermap.api.investment_stats.call(null);var state_11622__$1 = state_11622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11622__$1,2,inst_11617);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_11627 = [null,null,null,null,null,null,null];(statearr_11627[0] = state_machine__5548__auto__);
(statearr_11627[1] = 1);
return statearr_11627;
});
var state_machine__5548__auto____1 = (function (state_11622){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11622);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11628){if((e11628 instanceof Object))
{var ex__5551__auto__ = e11628;var statearr_11629_11631 = state_11622;(statearr_11629_11631[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11622);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11632 = state_11622;
state_11622 = G__11632;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11622){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11630 = f__5563__auto__.call(null);(statearr_11630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_11630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__11633,type){var vec__11635 = p__11633;var selection = cljs.core.nth.call(null,vec__11635,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__11635,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__11635,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__11635,3,null);var selection_investments = cljs.core.nth.call(null,vec__11635,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__11635,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__11636){var vec__11641 = p__11636;var type = cljs.core.nth.call(null,vec__11641,0,null);var id = cljs.core.nth.call(null,vec__11641,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__11642 = cljs.core._EQ_;var expr__11643 = type;if(cljs.core.truth_(pred__11642.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11643)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11642.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11643)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11642.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11643)))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__11646 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__11646,0,null);var view = cljs.core.nth.call(null,vec__11646,1,null);var type = cljs.core.nth.call(null,vec__11646,2,null);var id = cljs.core.nth.call(null,vec__11646,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__11647){var vec__11650 = p__11647;var type = cljs.core.nth.call(null,vec__11650,0,null);var id = cljs.core.nth.call(null,vec__11650,1,null);var map__11651 = clustermap.app.parse_route.call(null);var map__11651__$1 = ((cljs.core.seq_QMARK_.call(null,map__11651))?cljs.core.apply.call(null,cljs.core.hash_map,map__11651):map__11651);var view = cljs.core.get.call(null,map__11651__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__11653 = clustermap.app.parse_route.call(null);var map__11653__$1 = ((cljs.core.seq_QMARK_.call(null,map__11653))?cljs.core.apply.call(null,cljs.core.hash_map,map__11653):map__11653);var id = cljs.core.get.call(null,map__11653__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11653__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11686){var state_val_11687 = (state_11686[1]);if((state_val_11687 === 2))
{var inst_11677 = (state_11686[7]);var inst_11683 = (state_11686[2]);var inst_11684 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_11677,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_11683);var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11686__$1,inst_11684);
} else
{if((state_val_11687 === 1))
{var inst_11677 = (state_11686[7]);var inst_11675 = cljs.core.deref.call(null,clustermap.app.state);var inst_11676 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_11675);var inst_11677__$1 = cljs.core.merge.call(null,inst_11676,table_view);var inst_11678 = cljs.core.deref.call(null,clustermap.app.state);var inst_11679 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_11678);var inst_11680 = cljs.core.merge.call(null,inst_11679,inst_11677__$1);var inst_11681 = clustermap.api.investment_aggs.call(null,inst_11680);var state_11686__$1 = (function (){var statearr_11688 = state_11686;(statearr_11688[7] = inst_11677__$1);
return statearr_11688;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11686__$1,2,inst_11681);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_11692 = [null,null,null,null,null,null,null,null];(statearr_11692[0] = state_machine__5548__auto__);
(statearr_11692[1] = 1);
return statearr_11692;
});
var state_machine__5548__auto____1 = (function (state_11686){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11686);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11693){if((e11693 instanceof Object))
{var ex__5551__auto__ = e11693;var statearr_11694_11696 = state_11686;(statearr_11694_11696[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11697 = state_11686;
state_11686 = G__11697;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11686){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11695 = f__5563__auto__.call(null);(statearr_11695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_11695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11730){var state_val_11731 = (state_11730[1]);if((state_val_11731 === 2))
{var inst_11721 = (state_11730[7]);var inst_11727 = (state_11730[2]);var inst_11728 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_11721,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_11727);var state_11730__$1 = state_11730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11730__$1,inst_11728);
} else
{if((state_val_11731 === 1))
{var inst_11721 = (state_11730[7]);var inst_11719 = cljs.core.deref.call(null,clustermap.app.state);var inst_11720 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_11719);var inst_11721__$1 = cljs.core.merge.call(null,inst_11720,table_view);var inst_11722 = cljs.core.deref.call(null,clustermap.app.state);var inst_11723 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_11722);var inst_11724 = cljs.core.merge.call(null,inst_11723,inst_11721__$1);var inst_11725 = clustermap.api.investments.call(null,inst_11724);var state_11730__$1 = (function (){var statearr_11732 = state_11730;(statearr_11732[7] = inst_11721__$1);
return statearr_11732;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11730__$1,2,inst_11725);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_11736 = [null,null,null,null,null,null,null,null];(statearr_11736[0] = state_machine__5548__auto__);
(statearr_11736[1] = 1);
return statearr_11736;
});
var state_machine__5548__auto____1 = (function (state_11730){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11730);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11737){if((e11737 instanceof Object))
{var ex__5551__auto__ = e11737;var statearr_11738_11740 = state_11730;(statearr_11738_11740[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11730);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11741 = state_11730;
state_11730 = G__11741;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11730){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11739 = f__5563__auto__.call(null);(statearr_11739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_11739;
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
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___11758 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__11750 = params__9285__auto__;var map__11750__$1 = ((cljs.core.seq_QMARK_.call(null,map__11750))?cljs.core.apply.call(null,cljs.core.hash_map,map__11750):map__11750);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__11751 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9284__auto___11758);
var action__9284__auto___11759 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__11752 = params__9285__auto__;var map__11752__$1 = ((cljs.core.seq_QMARK_.call(null,map__11752))?cljs.core.apply.call(null,cljs.core.hash_map,map__11752):map__11752);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__11753 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9284__auto___11759);
var action__9284__auto___11760 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__11754 = params__9285__auto__;var map__11754__$1 = ((cljs.core.seq_QMARK_.call(null,map__11754))?cljs.core.apply.call(null,cljs.core.hash_map,map__11754):map__11754);var view = cljs.core.get.call(null,map__11754__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__11755 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__11755,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9284__auto___11760);
var action__9284__auto___11761 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__11756 = params__9285__auto__;var map__11756__$1 = ((cljs.core.seq_QMARK_.call(null,map__11756))?cljs.core.apply.call(null,cljs.core.hash_map,map__11756):map__11756);var id = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__11757 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__11757,0,null);var type = cljs.core.nth.call(null,vec__11757,1,null);var id = cljs.core.nth.call(null,vec__11757,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9284__auto___11761);
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
var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_11808){var state_val_11809 = (state_11808[1]);if((state_val_11809 === 7))
{var inst_11797 = (state_11808[2]);var inst_11798 = cljs.core.nth.call(null,inst_11797,0,null);var inst_11799 = cljs.core.nth.call(null,inst_11797,1,null);var inst_11800 = clustermap.app.handle_event.call(null,inst_11798,inst_11799);var state_11808__$1 = (function (){var statearr_11810 = state_11808;(statearr_11810[7] = inst_11800);
return statearr_11810;
})();var statearr_11811_11824 = state_11808__$1;(statearr_11811_11824[2] = null);
(statearr_11811_11824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 6))
{var inst_11804 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11812_11825 = state_11808__$1;(statearr_11812_11825[2] = inst_11804);
(statearr_11812_11825[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 5))
{var state_11808__$1 = state_11808;var statearr_11813_11826 = state_11808__$1;(statearr_11813_11826[2] = null);
(statearr_11813_11826[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 4))
{var state_11808__$1 = state_11808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11808__$1,7,comm);
} else
{if((state_val_11809 === 3))
{var inst_11806 = (state_11808[2]);var state_11808__$1 = state_11808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11808__$1,inst_11806);
} else
{if((state_val_11809 === 2))
{var state_11808__$1 = state_11808;if(true)
{var statearr_11814_11827 = state_11808__$1;(statearr_11814_11827[1] = 4);
} else
{var statearr_11815_11828 = state_11808__$1;(statearr_11815_11828[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 1))
{var state_11808__$1 = state_11808;var statearr_11816_11829 = state_11808__$1;(statearr_11816_11829[2] = null);
(statearr_11816_11829[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_11820 = [null,null,null,null,null,null,null,null];(statearr_11820[0] = state_machine__5548__auto__);
(statearr_11820[1] = 1);
return statearr_11820;
});
var state_machine__5548__auto____1 = (function (state_11808){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_11808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e11821){if((e11821 instanceof Object))
{var ex__5551__auto__ = e11821;var statearr_11822_11830 = state_11808;(statearr_11822_11830[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11831 = state_11808;
state_11808 = G__11831;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_11808){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_11808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_11823 = f__5563__auto__.call(null);(statearr_11823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_11823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
