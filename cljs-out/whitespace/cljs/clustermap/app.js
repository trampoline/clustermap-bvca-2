// Compiled by ClojureScript 0.0-2138
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
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),new cljs.core.Keyword(null,"zoom","zoom",1017648965),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587)],[new cljs.core.Keyword(null,"map","map",1014012110),null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__32504){var vec__32505 = p__32504;var key_or_path = cljs.core.nth.call(null,vec__32505,0,null);var value_or_fn = cljs.core.nth.call(null,vec__32505,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__32506){var map__32508 = p__32506;var map__32508__$1 = ((cljs.core.seq_QMARK_.call(null,map__32508))?cljs.core.apply.call(null,cljs.core.hash_map,map__32508):map__32508);var path_values = map__32508__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__32506 = null;if (arguments.length > 0) {
  p__32506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__32506);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__32509){
var p__32506 = cljs.core.seq(arglist__32509);
return set_state__delegate(p__32506);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32531){var state_val_32532 = (state_32531[1]);if((state_val_32532 === 2))
{var inst_32527 = (state_32531[2]);var inst_32528 = clustermap.rtree.rtree_index.call(null,inst_32527);var inst_32529 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_32527,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_32528);var state_32531__$1 = state_32531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32531__$1,inst_32529);
} else
{if((state_val_32532 === 1))
{var inst_32525 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_32531__$1 = state_32531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,2,inst_32525);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_32536 = [null,null,null,null,null,null,null];(statearr_32536[0] = state_machine__5507__auto__);
(statearr_32536[1] = 1);
return statearr_32536;
});
var state_machine__5507__auto____1 = (function (state_32531){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32531);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32537){if((e32537 instanceof Object))
{var ex__5510__auto__ = e32537;var statearr_32538_32540 = state_32531;(statearr_32538_32540[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32541 = state_32531;
state_32531 = G__32541;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32531){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32539 = f__5522__auto__.call(null);(statearr_32539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32561){var state_val_32562 = (state_32561[1]);if((state_val_32562 === 2))
{var inst_32558 = (state_32561[2]);var inst_32559 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),inst_32558);var state_32561__$1 = state_32561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32561__$1,inst_32559);
} else
{if((state_val_32562 === 1))
{var inst_32556 = clustermap.api.portfolio_company_site_stats.call(null);var state_32561__$1 = state_32561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32561__$1,2,inst_32556);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_32566 = [null,null,null,null,null,null,null];(statearr_32566[0] = state_machine__5507__auto__);
(statearr_32566[1] = 1);
return statearr_32566;
});
var state_machine__5507__auto____1 = (function (state_32561){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32567){if((e32567 instanceof Object))
{var ex__5510__auto__ = e32567;var statearr_32568_32570 = state_32561;(statearr_32568_32570[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32571 = state_32561;
state_32561 = G__32571;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32561){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32569 = f__5522__auto__.call(null);(statearr_32569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__32572,type){var vec__32574 = p__32572;var selection = cljs.core.nth.call(null,vec__32574,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__32574,1,null);var selection_portfolio_companies = cljs.core.nth.call(null,vec__32574,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.call(null,vec__32574,3,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__32574,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.call(null,vec__32574,5,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__32574,6,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455),selection_portfolio_companies,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),selection_portfolio_company_site_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),selection_portfolio_company_site_account_timelines,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__32575){var vec__32580 = p__32575;var type = cljs.core.nth.call(null,vec__32580,0,null);var id = cljs.core.nth.call(null,vec__32580,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__32581 = cljs.core._EQ_;var expr__32582 = type;if(cljs.core.truth_(pred__32581.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32582)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__32581.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32582)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__32581.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32582)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state))))
{clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"view","view",1017523735),view__$1);
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3394__auto__ = type;if(cljs.core.truth_(and__3394__auto__))
{return id;
} else
{return and__3394__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,(function (){var or__3406__auto__ = view;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__32585 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__32585,0,null);var view = cljs.core.nth.call(null,vec__32585,1,null);var type = cljs.core.nth.call(null,vec__32585,2,null);var id = cljs.core.nth.call(null,vec__32585,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__32586){var vec__32589 = p__32586;var type = cljs.core.nth.call(null,vec__32589,0,null);var id = cljs.core.nth.call(null,vec__32589,1,null);var map__32590 = clustermap.app.parse_route.call(null);var map__32590__$1 = ((cljs.core.seq_QMARK_.call(null,map__32590))?cljs.core.apply.call(null,cljs.core.hash_map,map__32590):map__32590);var view = cljs.core.get.call(null,map__32590__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__32592 = clustermap.app.parse_route.call(null);var map__32592__$1 = ((cljs.core.seq_QMARK_.call(null,map__32592))?cljs.core.apply.call(null,cljs.core.hash_map,map__32592):map__32592);var id = cljs.core.get.call(null,map__32592__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__32592__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__32596 = params__9259__auto__;var map__32596__$1 = ((cljs.core.seq_QMARK_.call(null,map__32596))?cljs.core.apply.call(null,cljs.core.hash_map,map__32596):map__32596);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__32597 = params__9259__auto__;var map__32597__$1 = ((cljs.core.seq_QMARK_.call(null,map__32597))?cljs.core.apply.call(null,cljs.core.hash_map,map__32597):map__32597);var view = cljs.core.get.call(null,map__32597__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__32598 = params__9259__auto__;var map__32598__$1 = ((cljs.core.seq_QMARK_.call(null,map__32598))?cljs.core.apply.call(null,cljs.core.hash_map,map__32598):map__32598);var id = cljs.core.get.call(null,map__32598__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__32598__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__32598__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = cljs.core.partial.call(null,clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.call(null,clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),link_fn], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.app.load_all_portfolio_company_site_stats.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",shared);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32645){var state_val_32646 = (state_32645[1]);if((state_val_32646 === 7))
{var inst_32634 = (state_32645[2]);var inst_32635 = cljs.core.nth.call(null,inst_32634,0,null);var inst_32636 = cljs.core.nth.call(null,inst_32634,1,null);var inst_32637 = clustermap.app.handle_event.call(null,inst_32635,inst_32636);var state_32645__$1 = (function (){var statearr_32647 = state_32645;(statearr_32647[7] = inst_32637);
return statearr_32647;
})();var statearr_32648_32661 = state_32645__$1;(statearr_32648_32661[2] = null);
(statearr_32648_32661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32646 === 6))
{var inst_32641 = (state_32645[2]);var state_32645__$1 = state_32645;var statearr_32649_32662 = state_32645__$1;(statearr_32649_32662[2] = inst_32641);
(statearr_32649_32662[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32646 === 5))
{var state_32645__$1 = state_32645;var statearr_32650_32663 = state_32645__$1;(statearr_32650_32663[2] = null);
(statearr_32650_32663[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32646 === 4))
{var state_32645__$1 = state_32645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32645__$1,7,comm);
} else
{if((state_val_32646 === 3))
{var inst_32643 = (state_32645[2]);var state_32645__$1 = state_32645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32645__$1,inst_32643);
} else
{if((state_val_32646 === 2))
{var state_32645__$1 = state_32645;if(true)
{var statearr_32651_32664 = state_32645__$1;(statearr_32651_32664[1] = 4);
} else
{var statearr_32652_32665 = state_32645__$1;(statearr_32652_32665[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32646 === 1))
{var state_32645__$1 = state_32645;var statearr_32653_32666 = state_32645__$1;(statearr_32653_32666[2] = null);
(statearr_32653_32666[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_32657 = [null,null,null,null,null,null,null,null];(statearr_32657[0] = state_machine__5507__auto__);
(statearr_32657[1] = 1);
return statearr_32657;
});
var state_machine__5507__auto____1 = (function (state_32645){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32645);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32658){if((e32658 instanceof Object))
{var ex__5510__auto__ = e32658;var statearr_32659_32667 = state_32645;(statearr_32659_32667[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32668 = state_32645;
state_32645 = G__32668;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32645){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32660 = f__5522__auto__.call(null);(statearr_32660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
