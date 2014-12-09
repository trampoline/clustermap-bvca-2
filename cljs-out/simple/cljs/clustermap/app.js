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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__12563){var vec__12564 = p__12563;var key_or_path = cljs.core.nth.call(null,vec__12564,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__12564,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__12564,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__12564,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__12565){var map__12567 = p__12565;var map__12567__$1 = ((cljs.core.seq_QMARK_.call(null,map__12567))?cljs.core.apply.call(null,cljs.core.hash_map,map__12567):map__12567);var path_values = map__12567__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__12565 = null;if (arguments.length > 0) {
  p__12565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__12565);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__12568){
var p__12565 = cljs.core.seq(arglist__12568);
return set_state__delegate(p__12565);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12590){var state_val_12591 = (state_12590[(1)]);if((state_val_12591 === (2)))
{var inst_12586 = (state_12590[(2)]);var inst_12587 = clustermap.rtree.rtree_index.call(null,inst_12586);var inst_12588 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855),inst_12586,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402),inst_12587);var state_12590__$1 = state_12590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12590__$1,inst_12588);
} else
{if((state_val_12591 === (1)))
{var inst_12584 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12590__$1 = state_12590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12590__$1,(2),inst_12584);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12595 = [null,null,null,null,null,null,null];(statearr_12595[(0)] = state_machine__5807__auto__);
(statearr_12595[(1)] = (1));
return statearr_12595;
});
var state_machine__5807__auto____1 = (function (state_12590){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12596){if((e12596 instanceof Object))
{var ex__5810__auto__ = e12596;var statearr_12597_12599 = state_12590;(statearr_12597_12599[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12596;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12600 = state_12590;
state_12590 = G__12600;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12590){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12598 = f__5822__auto__.call(null);(statearr_12598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12620){var state_val_12621 = (state_12620[(1)]);if((state_val_12621 === (2)))
{var inst_12617 = (state_12620[(2)]);var inst_12618 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),inst_12617);var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12620__$1,inst_12618);
} else
{if((state_val_12621 === (1)))
{var inst_12615 = clustermap.api.investment_stats.call(null);var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12620__$1,(2),inst_12615);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12625 = [null,null,null,null,null,null,null];(statearr_12625[(0)] = state_machine__5807__auto__);
(statearr_12625[(1)] = (1));
return statearr_12625;
});
var state_machine__5807__auto____1 = (function (state_12620){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12626){if((e12626 instanceof Object))
{var ex__5810__auto__ = e12626;var statearr_12627_12629 = state_12620;(statearr_12627_12629[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12620);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12630 = state_12620;
state_12620 = G__12630;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12620){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12628 = f__5822__auto__.call(null);(statearr_12628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12628;
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
clustermap.app.process_selection = (function process_selection(p__12631,type){var vec__12633 = p__12631;var selection = cljs.core.nth.call(null,vec__12633,(0),null);var selection_investment_stats = cljs.core.nth.call(null,vec__12633,(1),null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__12633,(2),null);var selection_investment_aggs = cljs.core.nth.call(null,vec__12633,(3),null);var selection_investments = cljs.core.nth.call(null,vec__12633,(4),null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__12633,(5),null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__12634){var vec__12639 = p__12634;var type = cljs.core.nth.call(null,vec__12639,(0),null);var id = cljs.core.nth.call(null,vec__12639,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),selector);
var pred__12640 = cljs.core._EQ_;var expr__12641 = type;if(cljs.core.truth_(pred__12640.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__12641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__12640.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__12641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__12640.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__12641)))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__12646 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__12646,(0),null);var view = cljs.core.nth.call(null,vec__12646,(1),null);var type = cljs.core.nth.call(null,vec__12646,(2),null);var id = cljs.core.nth.call(null,vec__12646,(3),null);var type__$1 = ((((function (){var G__12647 = type;var G__12647__$1 = (((G__12647 == null))?null:clojure.string.trim.call(null,G__12647));var G__12647__$2 = (((G__12647__$1 == null))?null:cljs.core.count.call(null,G__12647__$1));return G__12647__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__12648 = id;var G__12648__$1 = (((G__12648 == null))?null:clojure.string.trim.call(null,G__12648));var G__12648__$2 = (((G__12648__$1 == null))?null:cljs.core.count.call(null,G__12648__$1));return G__12648__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__12649){var vec__12652 = p__12649;var type = cljs.core.nth.call(null,vec__12652,(0),null);var id = cljs.core.nth.call(null,vec__12652,(1),null);var map__12653 = clustermap.app.parse_route.call(null);var map__12653__$1 = ((cljs.core.seq_QMARK_.call(null,map__12653))?cljs.core.apply.call(null,cljs.core.hash_map,map__12653):map__12653);var view = cljs.core.get.call(null,map__12653__$1,new cljs.core.Keyword(null,"view","view",1247994814));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__12655 = clustermap.app.parse_route.call(null);var map__12655__$1 = ((cljs.core.seq_QMARK_.call(null,map__12655))?cljs.core.apply.call(null,cljs.core.hash_map,map__12655):map__12655);var id = cljs.core.get.call(null,map__12655__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__12655__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12688){var state_val_12689 = (state_12688[(1)]);if((state_val_12689 === (2)))
{var inst_12679 = (state_12688[(7)]);var inst_12685 = (state_12688[(2)]);var inst_12686 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),inst_12679,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),inst_12685);var state_12688__$1 = state_12688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12688__$1,inst_12686);
} else
{if((state_val_12689 === (1)))
{var inst_12679 = (state_12688[(7)]);var inst_12677 = cljs.core.deref.call(null,clustermap.app.state);var inst_12678 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048).cljs$core$IFn$_invoke$arity$1(inst_12677);var inst_12679__$1 = cljs.core.merge.call(null,inst_12678,table_view);var inst_12680 = cljs.core.deref.call(null,clustermap.app.state);var inst_12681 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_12680);var inst_12682 = cljs.core.merge.call(null,inst_12681,inst_12679__$1);var inst_12683 = clustermap.api.investment_aggs.call(null,inst_12682);var state_12688__$1 = (function (){var statearr_12690 = state_12688;(statearr_12690[(7)] = inst_12679__$1);
return statearr_12690;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12688__$1,(2),inst_12683);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12694 = [null,null,null,null,null,null,null,null];(statearr_12694[(0)] = state_machine__5807__auto__);
(statearr_12694[(1)] = (1));
return statearr_12694;
});
var state_machine__5807__auto____1 = (function (state_12688){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12688);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12695){if((e12695 instanceof Object))
{var ex__5810__auto__ = e12695;var statearr_12696_12698 = state_12688;(statearr_12696_12698[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12695;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12699 = state_12688;
state_12688 = G__12699;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12688){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12697 = f__5822__auto__.call(null);(statearr_12697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_12732){var state_val_12733 = (state_12732[(1)]);if((state_val_12733 === (2)))
{var inst_12723 = (state_12732[(7)]);var inst_12729 = (state_12732[(2)]);var inst_12730 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),inst_12723,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),inst_12729);var state_12732__$1 = state_12732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12732__$1,inst_12730);
} else
{if((state_val_12733 === (1)))
{var inst_12723 = (state_12732[(7)]);var inst_12721 = cljs.core.deref.call(null,clustermap.app.state);var inst_12722 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362).cljs$core$IFn$_invoke$arity$1(inst_12721);var inst_12723__$1 = cljs.core.merge.call(null,inst_12722,table_view);var inst_12724 = cljs.core.deref.call(null,clustermap.app.state);var inst_12725 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_12724);var inst_12726 = cljs.core.merge.call(null,inst_12725,inst_12723__$1);var inst_12727 = clustermap.api.investments.call(null,inst_12726);var state_12732__$1 = (function (){var statearr_12734 = state_12732;(statearr_12734[(7)] = inst_12723__$1);
return statearr_12734;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12732__$1,(2),inst_12727);
} else
{return null;
}
}
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12738 = [null,null,null,null,null,null,null,null];(statearr_12738[(0)] = state_machine__5807__auto__);
(statearr_12738[(1)] = (1));
return statearr_12738;
});
var state_machine__5807__auto____1 = (function (state_12732){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12732);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12739){if((e12739 instanceof Object))
{var ex__5810__auto__ = e12739;var statearr_12740_12742 = state_12732;(statearr_12740_12742[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12739;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12743 = state_12732;
state_12732 = G__12743;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12732){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_12741 = f__5822__auto__.call(null);(statearr_12741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12741;
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
clustermap.app.init_routes = (function init_routes(comm){var action__10060__auto___12760 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12752 = params__10061__auto__;var map__12752__$1 = ((cljs.core.seq_QMARK_.call(null,map__12752))?cljs.core.apply.call(null,cljs.core.hash_map,map__12752):map__12752);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12753 = params__10061__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__10060__auto___12760);
var action__10060__auto___12761 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12754 = params__10061__auto__;var map__12754__$1 = ((cljs.core.seq_QMARK_.call(null,map__12754))?cljs.core.apply.call(null,cljs.core.hash_map,map__12754):map__12754);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12755 = params__10061__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10060__auto___12761);
var action__10060__auto___12762 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12756 = params__10061__auto__;var map__12756__$1 = ((cljs.core.seq_QMARK_.call(null,map__12756))?cljs.core.apply.call(null,cljs.core.hash_map,map__12756):map__12756);var view = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12757 = params__10061__auto__;var view = cljs.core.nth.call(null,vec__12757,(0),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__10060__auto___12762);
var action__10060__auto___12763 = (function (params__10061__auto__){if(cljs.core.map_QMARK_.call(null,params__10061__auto__))
{var map__12758 = params__10061__auto__;var map__12758__$1 = ((cljs.core.seq_QMARK_.call(null,map__12758))?cljs.core.apply.call(null,cljs.core.hash_map,map__12758):map__12758);var id = cljs.core.get.call(null,map__12758__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__12758__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__12758__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10061__auto__))
{var vec__12759 = params__10061__auto__;var view = cljs.core.nth.call(null,vec__12759,(0),null);var type = cljs.core.nth.call(null,vec__12759,(1),null);var id = cljs.core.nth.call(null,vec__12759,(2),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__10060__auto___12763);
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
return (function (state_12810){var state_val_12811 = (state_12810[(1)]);if((state_val_12811 === (7)))
{var inst_12799 = (state_12810[(2)]);var inst_12800 = cljs.core.nth.call(null,inst_12799,(0),null);var inst_12801 = cljs.core.nth.call(null,inst_12799,(1),null);var inst_12802 = clustermap.app.handle_event.call(null,inst_12800,inst_12801);var state_12810__$1 = (function (){var statearr_12812 = state_12810;(statearr_12812[(7)] = inst_12802);
return statearr_12812;
})();var statearr_12813_12826 = state_12810__$1;(statearr_12813_12826[(2)] = null);
(statearr_12813_12826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (6)))
{var inst_12806 = (state_12810[(2)]);var state_12810__$1 = state_12810;var statearr_12814_12827 = state_12810__$1;(statearr_12814_12827[(2)] = inst_12806);
(statearr_12814_12827[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (5)))
{var state_12810__$1 = state_12810;var statearr_12815_12828 = state_12810__$1;(statearr_12815_12828[(2)] = null);
(statearr_12815_12828[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (4)))
{var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12810__$1,(7),comm);
} else
{if((state_val_12811 === (3)))
{var inst_12808 = (state_12810[(2)]);var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12810__$1,inst_12808);
} else
{if((state_val_12811 === (2)))
{var state_12810__$1 = state_12810;var statearr_12816_12829 = state_12810__$1;(statearr_12816_12829[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (1)))
{var state_12810__$1 = state_12810;var statearr_12818_12830 = state_12810__$1;(statearr_12818_12830[(2)] = null);
(statearr_12818_12830[(1)] = (2));
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
var state_machine__5807__auto____0 = (function (){var statearr_12822 = [null,null,null,null,null,null,null,null];(statearr_12822[(0)] = state_machine__5807__auto__);
(statearr_12822[(1)] = (1));
return statearr_12822;
});
var state_machine__5807__auto____1 = (function (state_12810){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12810);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12823){if((e12823 instanceof Object))
{var ex__5810__auto__ = e12823;var statearr_12824_12831 = state_12810;(statearr_12824_12831[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12823;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12832 = state_12810;
state_12810 = G__12832;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12810){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__,comm,path_fn,link_fn,shared))
})();var state__5823__auto__ = (function (){var statearr_12825 = f__5822__auto__.call(null);(statearr_12825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_12825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__,comm,path_fn,link_fn,shared))
);
return c__5821__auto__;
});
