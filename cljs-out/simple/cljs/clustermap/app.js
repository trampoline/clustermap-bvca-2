// Compiled by ClojureScript 0.0-2356
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
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1602114424),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),new cljs.core.Keyword(null,"view","view",1247994814)],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,new cljs.core.Keyword(null,"map","map",1371690461)]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__12558){var vec__12559 = p__12558;var key_or_path = cljs.core.nth.call(null,vec__12559,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__12559,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__12559,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__12559,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__12560){var map__12562 = p__12560;var map__12562__$1 = ((cljs.core.seq_QMARK_.call(null,map__12562))?cljs.core.apply.call(null,cljs.core.hash_map,map__12562):map__12562);var path_values = map__12562__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__12560 = null;if (arguments.length > 0) {
  p__12560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__12560);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__12563){
var p__12560 = cljs.core.seq(arglist__12563);
return set_state__delegate(p__12560);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_12585){var state_val_12586 = (state_12585[(1)]);if((state_val_12586 === (2)))
{var inst_12581 = (state_12585[(2)]);var inst_12582 = clustermap.rtree.rtree_index.call(null,inst_12581);var inst_12583 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855),inst_12581,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402),inst_12582);var state_12585__$1 = state_12585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12585__$1,inst_12583);
} else
{if((state_val_12586 === (1)))
{var inst_12579 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12585__$1 = state_12585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12585__$1,(2),inst_12579);
} else
{return null;
}
}
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_12590 = [null,null,null,null,null,null,null];(statearr_12590[(0)] = state_machine__5799__auto__);
(statearr_12590[(1)] = (1));
return statearr_12590;
});
var state_machine__5799__auto____1 = (function (state_12585){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_12585);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e12591){if((e12591 instanceof Object))
{var ex__5802__auto__ = e12591;var statearr_12592_12594 = state_12585;(statearr_12592_12594[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12591;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12595 = state_12585;
state_12585 = G__12595;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_12585){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_12585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_12593 = f__5814__auto__.call(null);(statearr_12593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_12593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_12615){var state_val_12616 = (state_12615[(1)]);if((state_val_12616 === (2)))
{var inst_12612 = (state_12615[(2)]);var inst_12613 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),inst_12612);var state_12615__$1 = state_12615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12615__$1,inst_12613);
} else
{if((state_val_12616 === (1)))
{var inst_12610 = clustermap.api.investment_stats.call(null);var state_12615__$1 = state_12615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12615__$1,(2),inst_12610);
} else
{return null;
}
}
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_12620 = [null,null,null,null,null,null,null];(statearr_12620[(0)] = state_machine__5799__auto__);
(statearr_12620[(1)] = (1));
return statearr_12620;
});
var state_machine__5799__auto____1 = (function (state_12615){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_12615);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e12621){if((e12621 instanceof Object))
{var ex__5802__auto__ = e12621;var statearr_12622_12624 = state_12615;(statearr_12622_12624[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12625 = state_12615;
state_12615 = G__12625;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_12615){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_12615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_12623 = f__5814__auto__.call(null);(statearr_12623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_12623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__12626,type){var vec__12628 = p__12626;var selection = cljs.core.nth.call(null,vec__12628,(0),null);var selection_investment_stats = cljs.core.nth.call(null,vec__12628,(1),null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__12628,(2),null);var selection_investment_aggs = cljs.core.nth.call(null,vec__12628,(3),null);var selection_investments = cljs.core.nth.call(null,vec__12628,(4),null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__12628,(5),null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__12629){var vec__12634 = p__12629;var type = cljs.core.nth.call(null,vec__12634,(0),null);var id = cljs.core.nth.call(null,vec__12634,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),selector);
var pred__12635 = cljs.core._EQ_;var expr__12636 = type;if(cljs.core.truth_(pred__12635.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__12636)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__12635.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__12636)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__12635.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__12636)))
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
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3619__auto__ = type;if(cljs.core.truth_(and__3619__auto__))
{return id;
} else
{return and__3619__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3631__auto__ = view;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__12641 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__12641,(0),null);var view = cljs.core.nth.call(null,vec__12641,(1),null);var type = cljs.core.nth.call(null,vec__12641,(2),null);var id = cljs.core.nth.call(null,vec__12641,(3),null);var type__$1 = ((((function (){var G__12642 = type;var G__12642__$1 = (((G__12642 == null))?null:clojure.string.trim.call(null,G__12642));var G__12642__$2 = (((G__12642__$1 == null))?null:cljs.core.count.call(null,G__12642__$1));return G__12642__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__12643 = id;var G__12643__$1 = (((G__12643 == null))?null:clojure.string.trim.call(null,G__12643));var G__12643__$2 = (((G__12643__$1 == null))?null:cljs.core.count.call(null,G__12643__$1));return G__12643__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__12644){var vec__12647 = p__12644;var type = cljs.core.nth.call(null,vec__12647,(0),null);var id = cljs.core.nth.call(null,vec__12647,(1),null);var map__12648 = clustermap.app.parse_route.call(null);var map__12648__$1 = ((cljs.core.seq_QMARK_.call(null,map__12648))?cljs.core.apply.call(null,cljs.core.hash_map,map__12648):map__12648);var view = cljs.core.get.call(null,map__12648__$1,new cljs.core.Keyword(null,"view","view",1247994814));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__12650 = clustermap.app.parse_route.call(null);var map__12650__$1 = ((cljs.core.seq_QMARK_.call(null,map__12650))?cljs.core.apply.call(null,cljs.core.hash_map,map__12650):map__12650);var id = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_12683){var state_val_12684 = (state_12683[(1)]);if((state_val_12684 === (2)))
{var inst_12674 = (state_12683[(7)]);var inst_12680 = (state_12683[(2)]);var inst_12681 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),inst_12674,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),inst_12680);var state_12683__$1 = state_12683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12683__$1,inst_12681);
} else
{if((state_val_12684 === (1)))
{var inst_12674 = (state_12683[(7)]);var inst_12672 = cljs.core.deref.call(null,clustermap.app.state);var inst_12673 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048).cljs$core$IFn$_invoke$arity$1(inst_12672);var inst_12674__$1 = cljs.core.merge.call(null,inst_12673,table_view);var inst_12675 = cljs.core.deref.call(null,clustermap.app.state);var inst_12676 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_12675);var inst_12677 = cljs.core.merge.call(null,inst_12676,inst_12674__$1);var inst_12678 = clustermap.api.investment_aggs.call(null,inst_12677);var state_12683__$1 = (function (){var statearr_12685 = state_12683;(statearr_12685[(7)] = inst_12674__$1);
return statearr_12685;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12683__$1,(2),inst_12678);
} else
{return null;
}
}
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_12689 = [null,null,null,null,null,null,null,null];(statearr_12689[(0)] = state_machine__5799__auto__);
(statearr_12689[(1)] = (1));
return statearr_12689;
});
var state_machine__5799__auto____1 = (function (state_12683){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_12683);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e12690){if((e12690 instanceof Object))
{var ex__5802__auto__ = e12690;var statearr_12691_12693 = state_12683;(statearr_12691_12693[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12683);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12690;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12694 = state_12683;
state_12683 = G__12694;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_12683){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_12683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_12692 = f__5814__auto__.call(null);(statearr_12692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_12692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_12727){var state_val_12728 = (state_12727[(1)]);if((state_val_12728 === (2)))
{var inst_12718 = (state_12727[(7)]);var inst_12724 = (state_12727[(2)]);var inst_12725 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),inst_12718,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),inst_12724);var state_12727__$1 = state_12727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12727__$1,inst_12725);
} else
{if((state_val_12728 === (1)))
{var inst_12718 = (state_12727[(7)]);var inst_12716 = cljs.core.deref.call(null,clustermap.app.state);var inst_12717 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362).cljs$core$IFn$_invoke$arity$1(inst_12716);var inst_12718__$1 = cljs.core.merge.call(null,inst_12717,table_view);var inst_12719 = cljs.core.deref.call(null,clustermap.app.state);var inst_12720 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_12719);var inst_12721 = cljs.core.merge.call(null,inst_12720,inst_12718__$1);var inst_12722 = clustermap.api.investments.call(null,inst_12721);var state_12727__$1 = (function (){var statearr_12729 = state_12727;(statearr_12729[(7)] = inst_12718__$1);
return statearr_12729;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12727__$1,(2),inst_12722);
} else
{return null;
}
}
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_12733 = [null,null,null,null,null,null,null,null];(statearr_12733[(0)] = state_machine__5799__auto__);
(statearr_12733[(1)] = (1));
return statearr_12733;
});
var state_machine__5799__auto____1 = (function (state_12727){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_12727);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e12734){if((e12734 instanceof Object))
{var ex__5802__auto__ = e12734;var statearr_12735_12737 = state_12727;(statearr_12735_12737[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12734;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12738 = state_12727;
state_12727 = G__12738;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_12727){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_12727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_12736 = f__5814__auto__.call(null);(statearr_12736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_12736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",1564939822),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",1147833503),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",1501475360),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__10052__auto___12755 = (function (params__10053__auto__){if(cljs.core.map_QMARK_.call(null,params__10053__auto__))
{var map__12747 = params__10053__auto__;var map__12747__$1 = ((cljs.core.seq_QMARK_.call(null,map__12747))?cljs.core.apply.call(null,cljs.core.hash_map,map__12747):map__12747);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10053__auto__))
{var vec__12748 = params__10053__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__10052__auto___12755);
var action__10052__auto___12756 = (function (params__10053__auto__){if(cljs.core.map_QMARK_.call(null,params__10053__auto__))
{var map__12749 = params__10053__auto__;var map__12749__$1 = ((cljs.core.seq_QMARK_.call(null,map__12749))?cljs.core.apply.call(null,cljs.core.hash_map,map__12749):map__12749);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10053__auto__))
{var vec__12750 = params__10053__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10052__auto___12756);
var action__10052__auto___12757 = (function (params__10053__auto__){if(cljs.core.map_QMARK_.call(null,params__10053__auto__))
{var map__12751 = params__10053__auto__;var map__12751__$1 = ((cljs.core.seq_QMARK_.call(null,map__12751))?cljs.core.apply.call(null,cljs.core.hash_map,map__12751):map__12751);var view = cljs.core.get.call(null,map__12751__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10053__auto__))
{var vec__12752 = params__10053__auto__;var view = cljs.core.nth.call(null,vec__12752,(0),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__10052__auto___12757);
var action__10052__auto___12758 = (function (params__10053__auto__){if(cljs.core.map_QMARK_.call(null,params__10053__auto__))
{var map__12753 = params__10053__auto__;var map__12753__$1 = ((cljs.core.seq_QMARK_.call(null,map__12753))?cljs.core.apply.call(null,cljs.core.hash_map,map__12753):map__12753);var id = cljs.core.get.call(null,map__12753__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__12753__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__12753__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10053__auto__))
{var vec__12754 = params__10053__auto__;var view = cljs.core.nth.call(null,vec__12754,(0),null);var type = cljs.core.nth.call(null,vec__12754,(1),null);var id = cljs.core.nth.call(null,vec__12754,(2),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__10052__auto___12758);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),clustermap.app.change_view_path], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.app.load_all_investment_stats.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",shared);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",shared);
var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__,comm,path_fn,link_fn,shared){
return (function (state_12805){var state_val_12806 = (state_12805[(1)]);if((state_val_12806 === (7)))
{var inst_12794 = (state_12805[(2)]);var inst_12795 = cljs.core.nth.call(null,inst_12794,(0),null);var inst_12796 = cljs.core.nth.call(null,inst_12794,(1),null);var inst_12797 = clustermap.app.handle_event.call(null,inst_12795,inst_12796);var state_12805__$1 = (function (){var statearr_12807 = state_12805;(statearr_12807[(7)] = inst_12797);
return statearr_12807;
})();var statearr_12808_12821 = state_12805__$1;(statearr_12808_12821[(2)] = null);
(statearr_12808_12821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (6)))
{var inst_12801 = (state_12805[(2)]);var state_12805__$1 = state_12805;var statearr_12809_12822 = state_12805__$1;(statearr_12809_12822[(2)] = inst_12801);
(statearr_12809_12822[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (5)))
{var state_12805__$1 = state_12805;var statearr_12810_12823 = state_12805__$1;(statearr_12810_12823[(2)] = null);
(statearr_12810_12823[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (4)))
{var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,(7),comm);
} else
{if((state_val_12806 === (3)))
{var inst_12803 = (state_12805[(2)]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else
{if((state_val_12806 === (2)))
{var state_12805__$1 = state_12805;var statearr_12811_12824 = state_12805__$1;(statearr_12811_12824[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (1)))
{var state_12805__$1 = state_12805;var statearr_12813_12825 = state_12805__$1;(statearr_12813_12825[(2)] = null);
(statearr_12813_12825[(1)] = (2));
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
});})(c__5813__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5798__auto__,c__5813__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_12817 = [null,null,null,null,null,null,null,null];(statearr_12817[(0)] = state_machine__5799__auto__);
(statearr_12817[(1)] = (1));
return statearr_12817;
});
var state_machine__5799__auto____1 = (function (state_12805){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_12805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e12818){if((e12818 instanceof Object))
{var ex__5802__auto__ = e12818;var statearr_12819_12826 = state_12805;(statearr_12819_12826[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12818;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12827 = state_12805;
state_12805 = G__12827;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__,comm,path_fn,link_fn,shared))
})();var state__5815__auto__ = (function (){var statearr_12820 = f__5814__auto__.call(null);(statearr_12820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_12820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__,comm,path_fn,link_fn,shared))
);
return c__5813__auto__;
});
