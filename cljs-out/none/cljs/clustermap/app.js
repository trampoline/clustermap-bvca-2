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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__22558){var vec__22559 = p__22558;var key_or_path = cljs.core.nth.call(null,vec__22559,0,null);var value_or_fn = cljs.core.nth.call(null,vec__22559,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22560){var map__22562 = p__22560;var map__22562__$1 = ((cljs.core.seq_QMARK_.call(null,map__22562))?cljs.core.apply.call(null,cljs.core.hash_map,map__22562):map__22562);var path_values = map__22562__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22560 = null;if (arguments.length > 0) {
  p__22560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22560);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22563){
var p__22560 = cljs.core.seq(arglist__22563);
return set_state__delegate(p__22560);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22585){var state_val_22586 = (state_22585[1]);if((state_val_22586 === 2))
{var inst_22581 = (state_22585[2]);var inst_22582 = clustermap.rtree.rtree_index.call(null,inst_22581);var inst_22583 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_22581,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_22582);var state_22585__$1 = state_22585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22585__$1,inst_22583);
} else
{if((state_val_22586 === 1))
{var inst_22579 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_22585__$1 = state_22585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22585__$1,2,inst_22579);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22590 = [null,null,null,null,null,null,null];(statearr_22590[0] = state_machine__5548__auto__);
(statearr_22590[1] = 1);
return statearr_22590;
});
var state_machine__5548__auto____1 = (function (state_22585){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22585);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22591){if((e22591 instanceof Object))
{var ex__5551__auto__ = e22591;var statearr_22592_22594 = state_22585;(statearr_22592_22594[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22585);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22591;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22595 = state_22585;
state_22585 = G__22595;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22585){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22593 = f__5563__auto__.call(null);(statearr_22593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22615){var state_val_22616 = (state_22615[1]);if((state_val_22616 === 2))
{var inst_22612 = (state_22615[2]);var inst_22613 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_22612);var state_22615__$1 = state_22615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22615__$1,inst_22613);
} else
{if((state_val_22616 === 1))
{var inst_22610 = clustermap.api.investment_stats.call(null);var state_22615__$1 = state_22615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22615__$1,2,inst_22610);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22620 = [null,null,null,null,null,null,null];(statearr_22620[0] = state_machine__5548__auto__);
(statearr_22620[1] = 1);
return statearr_22620;
});
var state_machine__5548__auto____1 = (function (state_22615){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22615);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22621){if((e22621 instanceof Object))
{var ex__5551__auto__ = e22621;var statearr_22622_22624 = state_22615;(statearr_22622_22624[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22625 = state_22615;
state_22615 = G__22625;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22615){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22623 = f__5563__auto__.call(null);(statearr_22623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__22626,type){var vec__22628 = p__22626;var selection = cljs.core.nth.call(null,vec__22628,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__22628,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__22628,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__22628,3,null);var selection_investments = cljs.core.nth.call(null,vec__22628,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__22628,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22629){var vec__22634 = p__22629;var type = cljs.core.nth.call(null,vec__22634,0,null);var id = cljs.core.nth.call(null,vec__22634,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__22635 = cljs.core._EQ_;var expr__22636 = type;if(cljs.core.truth_(pred__22635.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__22636)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__22635.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__22636)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__22635.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__22636)))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22639 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__22639,0,null);var view = cljs.core.nth.call(null,vec__22639,1,null);var type = cljs.core.nth.call(null,vec__22639,2,null);var id = cljs.core.nth.call(null,vec__22639,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22640){var vec__22643 = p__22640;var type = cljs.core.nth.call(null,vec__22643,0,null);var id = cljs.core.nth.call(null,vec__22643,1,null);var map__22644 = clustermap.app.parse_route.call(null);var map__22644__$1 = ((cljs.core.seq_QMARK_.call(null,map__22644))?cljs.core.apply.call(null,cljs.core.hash_map,map__22644):map__22644);var view = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22646 = clustermap.app.parse_route.call(null);var map__22646__$1 = ((cljs.core.seq_QMARK_.call(null,map__22646))?cljs.core.apply.call(null,cljs.core.hash_map,map__22646):map__22646);var id = cljs.core.get.call(null,map__22646__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__22646__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22679){var state_val_22680 = (state_22679[1]);if((state_val_22680 === 2))
{var inst_22670 = (state_22679[7]);var inst_22676 = (state_22679[2]);var inst_22677 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_22670,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_22676);var state_22679__$1 = state_22679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22679__$1,inst_22677);
} else
{if((state_val_22680 === 1))
{var inst_22670 = (state_22679[7]);var inst_22668 = cljs.core.deref.call(null,clustermap.app.state);var inst_22669 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_22668);var inst_22670__$1 = cljs.core.merge.call(null,inst_22669,table_view);var inst_22671 = cljs.core.deref.call(null,clustermap.app.state);var inst_22672 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_22671);var inst_22673 = cljs.core.merge.call(null,inst_22672,inst_22670__$1);var inst_22674 = clustermap.api.investment_aggs.call(null,inst_22673);var state_22679__$1 = (function (){var statearr_22681 = state_22679;(statearr_22681[7] = inst_22670__$1);
return statearr_22681;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22679__$1,2,inst_22674);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22685 = [null,null,null,null,null,null,null,null];(statearr_22685[0] = state_machine__5548__auto__);
(statearr_22685[1] = 1);
return statearr_22685;
});
var state_machine__5548__auto____1 = (function (state_22679){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22686){if((e22686 instanceof Object))
{var ex__5551__auto__ = e22686;var statearr_22687_22689 = state_22679;(statearr_22687_22689[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22686;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22690 = state_22679;
state_22679 = G__22690;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22679){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22688 = f__5563__auto__.call(null);(statearr_22688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22723){var state_val_22724 = (state_22723[1]);if((state_val_22724 === 2))
{var inst_22714 = (state_22723[7]);var inst_22720 = (state_22723[2]);var inst_22721 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_22714,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_22720);var state_22723__$1 = state_22723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22723__$1,inst_22721);
} else
{if((state_val_22724 === 1))
{var inst_22714 = (state_22723[7]);var inst_22712 = cljs.core.deref.call(null,clustermap.app.state);var inst_22713 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_22712);var inst_22714__$1 = cljs.core.merge.call(null,inst_22713,table_view);var inst_22715 = cljs.core.deref.call(null,clustermap.app.state);var inst_22716 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_22715);var inst_22717 = cljs.core.merge.call(null,inst_22716,inst_22714__$1);var inst_22718 = clustermap.api.investments.call(null,inst_22717);var state_22723__$1 = (function (){var statearr_22725 = state_22723;(statearr_22725[7] = inst_22714__$1);
return statearr_22725;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22723__$1,2,inst_22718);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22729 = [null,null,null,null,null,null,null,null];(statearr_22729[0] = state_machine__5548__auto__);
(statearr_22729[1] = 1);
return statearr_22729;
});
var state_machine__5548__auto____1 = (function (state_22723){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22723);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22730){if((e22730 instanceof Object))
{var ex__5551__auto__ = e22730;var statearr_22731_22733 = state_22723;(statearr_22731_22733[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22734 = state_22723;
state_22723 = G__22734;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22723){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22732 = f__5563__auto__.call(null);(statearr_22732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22732;
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
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___22751 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22743 = params__9285__auto__;var map__22743__$1 = ((cljs.core.seq_QMARK_.call(null,map__22743))?cljs.core.apply.call(null,cljs.core.hash_map,map__22743):map__22743);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22744 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9284__auto___22751);
var action__9284__auto___22752 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22745 = params__9285__auto__;var map__22745__$1 = ((cljs.core.seq_QMARK_.call(null,map__22745))?cljs.core.apply.call(null,cljs.core.hash_map,map__22745):map__22745);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22746 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9284__auto___22752);
var action__9284__auto___22753 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22747 = params__9285__auto__;var map__22747__$1 = ((cljs.core.seq_QMARK_.call(null,map__22747))?cljs.core.apply.call(null,cljs.core.hash_map,map__22747):map__22747);var view = cljs.core.get.call(null,map__22747__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22748 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__22748,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9284__auto___22753);
var action__9284__auto___22754 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__22749 = params__9285__auto__;var map__22749__$1 = ((cljs.core.seq_QMARK_.call(null,map__22749))?cljs.core.apply.call(null,cljs.core.hash_map,map__22749):map__22749);var id = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__22750 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__22750,0,null);var type = cljs.core.nth.call(null,vec__22750,1,null);var id = cljs.core.nth.call(null,vec__22750,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9284__auto___22754);
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
var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22801){var state_val_22802 = (state_22801[1]);if((state_val_22802 === 7))
{var inst_22790 = (state_22801[2]);var inst_22791 = cljs.core.nth.call(null,inst_22790,0,null);var inst_22792 = cljs.core.nth.call(null,inst_22790,1,null);var inst_22793 = clustermap.app.handle_event.call(null,inst_22791,inst_22792);var state_22801__$1 = (function (){var statearr_22803 = state_22801;(statearr_22803[7] = inst_22793);
return statearr_22803;
})();var statearr_22804_22817 = state_22801__$1;(statearr_22804_22817[2] = null);
(statearr_22804_22817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22802 === 6))
{var inst_22797 = (state_22801[2]);var state_22801__$1 = state_22801;var statearr_22805_22818 = state_22801__$1;(statearr_22805_22818[2] = inst_22797);
(statearr_22805_22818[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22802 === 5))
{var state_22801__$1 = state_22801;var statearr_22806_22819 = state_22801__$1;(statearr_22806_22819[2] = null);
(statearr_22806_22819[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22802 === 4))
{var state_22801__$1 = state_22801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22801__$1,7,comm);
} else
{if((state_val_22802 === 3))
{var inst_22799 = (state_22801[2]);var state_22801__$1 = state_22801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22801__$1,inst_22799);
} else
{if((state_val_22802 === 2))
{var state_22801__$1 = state_22801;if(true)
{var statearr_22807_22820 = state_22801__$1;(statearr_22807_22820[1] = 4);
} else
{var statearr_22808_22821 = state_22801__$1;(statearr_22808_22821[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22802 === 1))
{var state_22801__$1 = state_22801;var statearr_22809_22822 = state_22801__$1;(statearr_22809_22822[2] = null);
(statearr_22809_22822[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_22813 = [null,null,null,null,null,null,null,null];(statearr_22813[0] = state_machine__5548__auto__);
(statearr_22813[1] = 1);
return statearr_22813;
});
var state_machine__5548__auto____1 = (function (state_22801){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22801);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22814){if((e22814 instanceof Object))
{var ex__5551__auto__ = e22814;var statearr_22815_22823 = state_22801;(statearr_22815_22823[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22824 = state_22801;
state_22801 = G__22824;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22801){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22816 = f__5563__auto__.call(null);(statearr_22816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});

//# sourceMappingURL=app.js.map