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
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),new cljs.core.Keyword(null,"zoom","zoom",1017648965),new cljs.core.Keyword(null,"selection-portfolio-company-sites-by-company","selection-portfolio-company-sites-by-company",3506268912)],[new cljs.core.Keyword(null,"map","map",1014012110),null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__11412){var vec__11413 = p__11412;var key_or_path = cljs.core.nth.call(null,vec__11413,0,null);var value_or_fn = cljs.core.nth.call(null,vec__11413,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__11414){var map__11416 = p__11414;var map__11416__$1 = ((cljs.core.seq_QMARK_.call(null,map__11416))?cljs.core.apply.call(null,cljs.core.hash_map,map__11416):map__11416);var path_values = map__11416__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__11414 = null;if (arguments.length > 0) {
  p__11414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__11414);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__11417){
var p__11414 = cljs.core.seq(arglist__11417);
return set_state__delegate(p__11414);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11439){var state_val_11440 = (state_11439[1]);if((state_val_11440 === 2))
{var inst_11435 = (state_11439[2]);var inst_11436 = clustermap.rtree.rtree_index.call(null,inst_11435);var inst_11437 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_11435,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_11436);var state_11439__$1 = state_11439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11439__$1,inst_11437);
} else
{if((state_val_11440 === 1))
{var inst_11433 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_11439__$1 = state_11439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11439__$1,2,inst_11433);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11444 = [null,null,null,null,null,null,null];(statearr_11444[0] = state_machine__5507__auto__);
(statearr_11444[1] = 1);
return statearr_11444;
});
var state_machine__5507__auto____1 = (function (state_11439){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11439);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11445){if((e11445 instanceof Object))
{var ex__5510__auto__ = e11445;var statearr_11446_11448 = state_11439;(statearr_11446_11448[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11439);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11449 = state_11439;
state_11439 = G__11449;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11439){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11447 = f__5522__auto__.call(null);(statearr_11447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11469){var state_val_11470 = (state_11469[1]);if((state_val_11470 === 2))
{var inst_11466 = (state_11469[2]);var inst_11467 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),inst_11466);var state_11469__$1 = state_11469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11469__$1,inst_11467);
} else
{if((state_val_11470 === 1))
{var inst_11464 = clustermap.api.portfolio_company_site_stats.call(null);var state_11469__$1 = state_11469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11469__$1,2,inst_11464);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11474 = [null,null,null,null,null,null,null];(statearr_11474[0] = state_machine__5507__auto__);
(statearr_11474[1] = 1);
return statearr_11474;
});
var state_machine__5507__auto____1 = (function (state_11469){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11469);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11475){if((e11475 instanceof Object))
{var ex__5510__auto__ = e11475;var statearr_11476_11478 = state_11469;(statearr_11476_11478[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11479 = state_11469;
state_11469 = G__11479;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11469){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11477 = f__5522__auto__.call(null);(statearr_11477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__11480,type){var vec__11482 = p__11480;var selection = cljs.core.nth.call(null,vec__11482,0,null);var selection_portfolio_company_site_stats = cljs.core.nth.call(null,vec__11482,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__11482,2,null);var selection_portfolio_company_sites_by_company = cljs.core.nth.call(null,vec__11482,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.call(null,vec__11482,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__11482,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),selection_portfolio_company_site_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-sites-by-company","selection-portfolio-company-sites-by-company",3506268912),selection_portfolio_company_sites_by_company,new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),selection_portfolio_company_site_account_timelines,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__11483){var vec__11488 = p__11483;var type = cljs.core.nth.call(null,vec__11488,0,null);var id = cljs.core.nth.call(null,vec__11488,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__11489 = cljs.core._EQ_;var expr__11490 = type;if(cljs.core.truth_(pred__11489.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11490)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_sites_by_company.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11489.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11490)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_sites_by_company.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11489.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11490)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_sites_by_company.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_sites_by_company.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),null], null),type], null);
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__11493 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__11493,0,null);var view = cljs.core.nth.call(null,vec__11493,1,null);var type = cljs.core.nth.call(null,vec__11493,2,null);var id = cljs.core.nth.call(null,vec__11493,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__11494){var vec__11497 = p__11494;var type = cljs.core.nth.call(null,vec__11497,0,null);var id = cljs.core.nth.call(null,vec__11497,1,null);var map__11498 = clustermap.app.parse_route.call(null);var map__11498__$1 = ((cljs.core.seq_QMARK_.call(null,map__11498))?cljs.core.apply.call(null,cljs.core.hash_map,map__11498):map__11498);var view = cljs.core.get.call(null,map__11498__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__11500 = clustermap.app.parse_route.call(null);var map__11500__$1 = ((cljs.core.seq_QMARK_.call(null,map__11500))?cljs.core.apply.call(null,cljs.core.hash_map,map__11500):map__11500);var id = cljs.core.get.call(null,map__11500__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11500__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9263__auto__){var map__11504 = params__9263__auto__;var map__11504__$1 = ((cljs.core.seq_QMARK_.call(null,map__11504))?cljs.core.apply.call(null,cljs.core.hash_map,map__11504):map__11504);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9263__auto__){var map__11505 = params__9263__auto__;var map__11505__$1 = ((cljs.core.seq_QMARK_.call(null,map__11505))?cljs.core.apply.call(null,cljs.core.hash_map,map__11505):map__11505);var view = cljs.core.get.call(null,map__11505__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9263__auto__){var map__11506 = params__9263__auto__;var map__11506__$1 = ((cljs.core.seq_QMARK_.call(null,map__11506))?cljs.core.apply.call(null,cljs.core.hash_map,map__11506):map__11506);var id = cljs.core.get.call(null,map__11506__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11506__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__11506__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11553){var state_val_11554 = (state_11553[1]);if((state_val_11554 === 7))
{var inst_11542 = (state_11553[2]);var inst_11543 = cljs.core.nth.call(null,inst_11542,0,null);var inst_11544 = cljs.core.nth.call(null,inst_11542,1,null);var inst_11545 = clustermap.app.handle_event.call(null,inst_11543,inst_11544);var state_11553__$1 = (function (){var statearr_11555 = state_11553;(statearr_11555[7] = inst_11545);
return statearr_11555;
})();var statearr_11556_11569 = state_11553__$1;(statearr_11556_11569[2] = null);
(statearr_11556_11569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11554 === 6))
{var inst_11549 = (state_11553[2]);var state_11553__$1 = state_11553;var statearr_11557_11570 = state_11553__$1;(statearr_11557_11570[2] = inst_11549);
(statearr_11557_11570[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11554 === 5))
{var state_11553__$1 = state_11553;var statearr_11558_11571 = state_11553__$1;(statearr_11558_11571[2] = null);
(statearr_11558_11571[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11554 === 4))
{var state_11553__$1 = state_11553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11553__$1,7,comm);
} else
{if((state_val_11554 === 3))
{var inst_11551 = (state_11553[2]);var state_11553__$1 = state_11553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11553__$1,inst_11551);
} else
{if((state_val_11554 === 2))
{var state_11553__$1 = state_11553;if(true)
{var statearr_11559_11572 = state_11553__$1;(statearr_11559_11572[1] = 4);
} else
{var statearr_11560_11573 = state_11553__$1;(statearr_11560_11573[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11554 === 1))
{var state_11553__$1 = state_11553;var statearr_11561_11574 = state_11553__$1;(statearr_11561_11574[2] = null);
(statearr_11561_11574[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_11565 = [null,null,null,null,null,null,null,null];(statearr_11565[0] = state_machine__5507__auto__);
(statearr_11565[1] = 1);
return statearr_11565;
});
var state_machine__5507__auto____1 = (function (state_11553){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11566){if((e11566 instanceof Object))
{var ex__5510__auto__ = e11566;var statearr_11567_11575 = state_11553;(statearr_11567_11575[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11576 = state_11553;
state_11553 = G__11576;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11553){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11568 = f__5522__auto__.call(null);(statearr_11568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});

//# sourceMappingURL=app.js.map