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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__12562){var vec__12563 = p__12562;var key_or_path = cljs.core.nth.call(null,vec__12563,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__12563,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__12563,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__12563,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__12564){var map__12566 = p__12564;var map__12566__$1 = ((cljs.core.seq_QMARK_.call(null,map__12566))?cljs.core.apply.call(null,cljs.core.hash_map,map__12566):map__12566);var path_values = map__12566__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__12564 = null;if (arguments.length > 0) {
  p__12564 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__12564);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__12567){
var p__12564 = cljs.core.seq(arglist__12567);
return set_state__delegate(p__12564);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12589){var state_val_12590 = (state_12589[(1)]);if((state_val_12590 === (2)))
{var inst_12585 = (state_12589[(2)]);var inst_12586 = clustermap.rtree.rtree_index.call(null,inst_12585);var inst_12587 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855),inst_12585,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402),inst_12586);var state_12589__$1 = state_12589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12589__$1,inst_12587);
} else
{if((state_val_12590 === (1)))
{var inst_12583 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12589__$1 = state_12589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12589__$1,(2),inst_12583);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12594 = [null,null,null,null,null,null,null];(statearr_12594[(0)] = state_machine__5807__auto__);
(statearr_12594[(1)] = (1));
return statearr_12594;
});
var state_machine__5807__auto____1 = (function (state_12589){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12589);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12595){if((e12595 instanceof Object))
{var ex__5810__auto__ = e12595;var statearr_12596_12598 = state_12589;(statearr_12596_12598[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12595;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12599 = state_12589;
state_12589 = G__12599;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12589){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12597 = f__5822__auto__.call(null);(statearr_12597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12619){var state_val_12620 = (state_12619[(1)]);if((state_val_12620 === (2)))
{var inst_12616 = (state_12619[(2)]);var inst_12617 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),inst_12616);var state_12619__$1 = state_12619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12619__$1,inst_12617);
} else
{if((state_val_12620 === (1)))
{var inst_12614 = clustermap.api.investment_stats.call(null);var state_12619__$1 = state_12619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12619__$1,(2),inst_12614);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12624 = [null,null,null,null,null,null,null];(statearr_12624[(0)] = state_machine__5807__auto__);
(statearr_12624[(1)] = (1));
return statearr_12624;
});
var state_machine__5807__auto____1 = (function (state_12619){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12619);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12625){if((e12625 instanceof Object))
{var ex__5810__auto__ = e12625;var statearr_12626_12628 = state_12619;(statearr_12626_12628[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12619);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12625;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12629 = state_12619;
state_12619 = G__12629;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12619){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12627 = f__5822__auto__.call(null);(statearr_12627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__12630,type){var vec__12632 = p__12630;var selection = cljs.core.nth.call(null,vec__12632,(0),null);var selection_investment_stats = cljs.core.nth.call(null,vec__12632,(1),null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__12632,(2),null);var selection_investment_aggs = cljs.core.nth.call(null,vec__12632,(3),null);var selection_investments = cljs.core.nth.call(null,vec__12632,(4),null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__12632,(5),null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__12633){var vec__12638 = p__12633;var type = cljs.core.nth.call(null,vec__12638,(0),null);var id = cljs.core.nth.call(null,vec__12638,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),selector);
var pred__12639 = cljs.core._EQ_;var expr__12640 = type;if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__12640)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__12640)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__12640)))
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
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3627__auto__ = type;if(cljs.core.truth_(and__3627__auto__))
{return id;
} else
{return and__3627__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3639__auto__ = view;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__12645 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__12645,(0),null);var view = cljs.core.nth.call(null,vec__12645,(1),null);var type = cljs.core.nth.call(null,vec__12645,(2),null);var id = cljs.core.nth.call(null,vec__12645,(3),null);var type__$1 = ((((function (){var G__12646 = type;var G__12646__$1 = (((G__12646 == null))?null:clojure.string.trim.call(null,G__12646));var G__12646__$2 = (((G__12646__$1 == null))?null:cljs.core.count.call(null,G__12646__$1));return G__12646__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__12647 = id;var G__12647__$1 = (((G__12647 == null))?null:clojure.string.trim.call(null,G__12647));var G__12647__$2 = (((G__12647__$1 == null))?null:cljs.core.count.call(null,G__12647__$1));return G__12647__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__12648){var vec__12651 = p__12648;var type = cljs.core.nth.call(null,vec__12651,(0),null);var id = cljs.core.nth.call(null,vec__12651,(1),null);var map__12652 = clustermap.app.parse_route.call(null);var map__12652__$1 = ((cljs.core.seq_QMARK_.call(null,map__12652))?cljs.core.apply.call(null,cljs.core.hash_map,map__12652):map__12652);var view = cljs.core.get.call(null,map__12652__$1,new cljs.core.Keyword(null,"view","view",1247994814));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__12654 = clustermap.app.parse_route.call(null);var map__12654__$1 = ((cljs.core.seq_QMARK_.call(null,map__12654))?cljs.core.apply.call(null,cljs.core.hash_map,map__12654):map__12654);var id = cljs.core.get.call(null,map__12654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__12654__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12687){var state_val_12688 = (state_12687[(1)]);if((state_val_12688 === (2)))
{var inst_12678 = (state_12687[(7)]);var inst_12684 = (state_12687[(2)]);var inst_12685 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),inst_12678,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),inst_12684);var state_12687__$1 = state_12687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12687__$1,inst_12685);
} else
{if((state_val_12688 === (1)))
{var inst_12678 = (state_12687[(7)]);var inst_12676 = cljs.core.deref.call(null,clustermap.app.state);var inst_12677 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048).cljs$core$IFn$_invoke$arity$1(inst_12676);var inst_12678__$1 = cljs.core.merge.call(null,inst_12677,table_view);var inst_12679 = cljs.core.deref.call(null,clustermap.app.state);var inst_12680 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_12679);var inst_12681 = cljs.core.merge.call(null,inst_12680,inst_12678__$1);var inst_12682 = clustermap.api.investment_aggs.call(null,inst_12681);var state_12687__$1 = (function (){var statearr_12689 = state_12687;(statearr_12689[(7)] = inst_12678__$1);
return statearr_12689;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12687__$1,(2),inst_12682);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12693 = [null,null,null,null,null,null,null,null];(statearr_12693[(0)] = state_machine__5807__auto__);
(statearr_12693[(1)] = (1));
return statearr_12693;
});
var state_machine__5807__auto____1 = (function (state_12687){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12694){if((e12694 instanceof Object))
{var ex__5810__auto__ = e12694;var statearr_12695_12697 = state_12687;(statearr_12695_12697[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12694;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12698 = state_12687;
state_12687 = G__12698;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12696 = f__5822__auto__.call(null);(statearr_12696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12731){var state_val_12732 = (state_12731[(1)]);if((state_val_12732 === (2)))
{var inst_12722 = (state_12731[(7)]);var inst_12728 = (state_12731[(2)]);var inst_12729 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),inst_12722,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),inst_12728);var state_12731__$1 = state_12731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12731__$1,inst_12729);
} else
{if((state_val_12732 === (1)))
{var inst_12722 = (state_12731[(7)]);var inst_12720 = cljs.core.deref.call(null,clustermap.app.state);var inst_12721 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362).cljs$core$IFn$_invoke$arity$1(inst_12720);var inst_12722__$1 = cljs.core.merge.call(null,inst_12721,table_view);var inst_12723 = cljs.core.deref.call(null,clustermap.app.state);var inst_12724 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_12723);var inst_12725 = cljs.core.merge.call(null,inst_12724,inst_12722__$1);var inst_12726 = clustermap.api.investments.call(null,inst_12725);var state_12731__$1 = (function (){var statearr_12733 = state_12731;(statearr_12733[(7)] = inst_12722__$1);
return statearr_12733;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12731__$1,(2),inst_12726);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12737 = [null,null,null,null,null,null,null,null];(statearr_12737[(0)] = state_machine__5807__auto__);
(statearr_12737[(1)] = (1));
return statearr_12737;
});
var state_machine__5807__auto____1 = (function (state_12731){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12738){if((e12738 instanceof Object))
{var ex__5810__auto__ = e12738;var statearr_12739_12741 = state_12731;(statearr_12739_12741[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12738;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12742 = state_12731;
state_12731 = G__12742;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12731){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12740 = f__5822__auto__.call(null);(statearr_12740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",1564939822),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",1147833503),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",1501475360),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__10060__auto___12759 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12751 = params__10061__auto__;var map__12751__$1 = ((cljs.core.seq_QMARK_.call(null,map__12751))?cljs.core.apply.call(null,cljs.core.hash_map,map__12751):map__12751);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12752 = params__10061__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__10060__auto___12759);
var action__10060__auto___12760 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12753 = params__10061__auto__;var map__12753__$1 = ((cljs.core.seq_QMARK_.call(null,map__12753))?cljs.core.apply.call(null,cljs.core.hash_map,map__12753):map__12753);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12754 = params__10061__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10060__auto___12760);
var action__10060__auto___12761 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12755 = params__10061__auto__;var map__12755__$1 = ((cljs.core.seq_QMARK_.call(null,map__12755))?cljs.core.apply.call(null,cljs.core.hash_map,map__12755):map__12755);var view = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12756 = params__10061__auto__;var view = cljs.core.nth.call(null,vec__12756,(0),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__10060__auto___12761);
var action__10060__auto___12762 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12757 = params__10061__auto__;var map__12757__$1 = ((cljs.core.seq_QMARK_.call(null,map__12757))?cljs.core.apply.call(null,cljs.core.hash_map,map__12757):map__12757);var id = cljs.core.get.call(null,map__12757__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__12757__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__12757__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12758 = params__10061__auto__;var view = cljs.core.nth.call(null,vec__12758,(0),null);var type = cljs.core.nth.call(null,vec__12758,(1),null);var id = cljs.core.nth.call(null,vec__12758,(2),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__10060__auto___12762);
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
var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__,comm,path_fn,link_fn,shared){
return (function (state_12809){var state_val_12810 = (state_12809[(1)]);if((state_val_12810 === (7)))
{var inst_12798 = (state_12809[(2)]);var inst_12799 = cljs.core.nth.call(null,inst_12798,(0),null);var inst_12800 = cljs.core.nth.call(null,inst_12798,(1),null);var inst_12801 = clustermap.app.handle_event.call(null,inst_12799,inst_12800);var state_12809__$1 = (function (){var statearr_12811 = state_12809;(statearr_12811[(7)] = inst_12801);
return statearr_12811;
})();var statearr_12812_12825 = state_12809__$1;(statearr_12812_12825[(2)] = null);
(statearr_12812_12825[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12810 === (6)))
{var inst_12805 = (state_12809[(2)]);var state_12809__$1 = state_12809;var statearr_12813_12826 = state_12809__$1;(statearr_12813_12826[(2)] = inst_12805);
(statearr_12813_12826[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12810 === (5)))
{var state_12809__$1 = state_12809;var statearr_12814_12827 = state_12809__$1;(statearr_12814_12827[(2)] = null);
(statearr_12814_12827[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12810 === (4)))
{var state_12809__$1 = state_12809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12809__$1,(7),comm);
} else
{if((state_val_12810 === (3)))
{var inst_12807 = (state_12809[(2)]);var state_12809__$1 = state_12809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12809__$1,inst_12807);
} else
{if((state_val_12810 === (2)))
{var state_12809__$1 = state_12809;var statearr_12815_12828 = state_12809__$1;(statearr_12815_12828[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12810 === (1)))
{var state_12809__$1 = state_12809;var statearr_12817_12829 = state_12809__$1;(statearr_12817_12829[(2)] = null);
(statearr_12817_12829[(1)] = (2));
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
});})(c__5821__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5806__auto__,c__5821__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12821 = [null,null,null,null,null,null,null,null];(statearr_12821[(0)] = state_machine__5807__auto__);
(statearr_12821[(1)] = (1));
return statearr_12821;
});
var state_machine__5807__auto____1 = (function (state_12809){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12809);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12822){if((e12822 instanceof Object))
{var ex__5810__auto__ = e12822;var statearr_12823_12830 = state_12809;(statearr_12823_12830[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12809);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12822;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12831 = state_12809;
state_12809 = G__12831;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12809){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__,comm,path_fn,link_fn,shared))
})();var state__5823__auto__ = (function (){var statearr_12824 = f__5822__auto__.call(null);(statearr_12824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__,comm,path_fn,link_fn,shared))
);
return c__5821__auto__;
});
