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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__32618){var vec__32619 = p__32618;var key_or_path = cljs.core.nth.call(null,vec__32619,0,null);var value_or_fn = cljs.core.nth.call(null,vec__32619,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__32620){var map__32622 = p__32620;var map__32622__$1 = ((cljs.core.seq_QMARK_.call(null,map__32622))?cljs.core.apply.call(null,cljs.core.hash_map,map__32622):map__32622);var path_values = map__32622__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__32620 = null;if (arguments.length > 0) {
  p__32620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__32620);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__32623){
var p__32620 = cljs.core.seq(arglist__32623);
return set_state__delegate(p__32620);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32645){var state_val_32646 = (state_32645[1]);if((state_val_32646 === 2))
{var inst_32641 = (state_32645[2]);var inst_32642 = clustermap.rtree.rtree_index.call(null,inst_32641);var inst_32643 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_32641,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_32642);var state_32645__$1 = state_32645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32645__$1,inst_32643);
} else
{if((state_val_32646 === 1))
{var inst_32639 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_32645__$1 = state_32645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32645__$1,2,inst_32639);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_32650 = [null,null,null,null,null,null,null];(statearr_32650[0] = state_machine__5507__auto__);
(statearr_32650[1] = 1);
return statearr_32650;
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
}catch (e32651){if((e32651 instanceof Object))
{var ex__5510__auto__ = e32651;var statearr_32652_32654 = state_32645;(statearr_32652_32654[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32655 = state_32645;
state_32645 = G__32655;
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
})();var state__5523__auto__ = (function (){var statearr_32653 = f__5522__auto__.call(null);(statearr_32653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32675){var state_val_32676 = (state_32675[1]);if((state_val_32676 === 2))
{var inst_32672 = (state_32675[2]);var inst_32673 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),inst_32672);var state_32675__$1 = state_32675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32675__$1,inst_32673);
} else
{if((state_val_32676 === 1))
{var inst_32670 = clustermap.api.portfolio_company_site_stats.call(null);var state_32675__$1 = state_32675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32675__$1,2,inst_32670);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_32680 = [null,null,null,null,null,null,null];(statearr_32680[0] = state_machine__5507__auto__);
(statearr_32680[1] = 1);
return statearr_32680;
});
var state_machine__5507__auto____1 = (function (state_32675){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32675);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32681){if((e32681 instanceof Object))
{var ex__5510__auto__ = e32681;var statearr_32682_32684 = state_32675;(statearr_32682_32684[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32685 = state_32675;
state_32675 = G__32685;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32683 = f__5522__auto__.call(null);(statearr_32683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__32686,type){var vec__32688 = p__32686;var selection = cljs.core.nth.call(null,vec__32688,0,null);var selection_portfolio_company_site_stats = cljs.core.nth.call(null,vec__32688,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__32688,2,null);var selection_portfolio_company_sites_by_company = cljs.core.nth.call(null,vec__32688,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.call(null,vec__32688,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__32688,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),selection_portfolio_company_site_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-sites-by-company","selection-portfolio-company-sites-by-company",3506268912),selection_portfolio_company_sites_by_company,new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),selection_portfolio_company_site_account_timelines,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__32689){var vec__32694 = p__32689;var type = cljs.core.nth.call(null,vec__32694,0,null);var id = cljs.core.nth.call(null,vec__32694,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__32695 = cljs.core._EQ_;var expr__32696 = type;if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32696)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_sites_by_company.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32696)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_sites_by_company.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32696)))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__32699 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__32699,0,null);var view = cljs.core.nth.call(null,vec__32699,1,null);var type = cljs.core.nth.call(null,vec__32699,2,null);var id = cljs.core.nth.call(null,vec__32699,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__32700){var vec__32703 = p__32700;var type = cljs.core.nth.call(null,vec__32703,0,null);var id = cljs.core.nth.call(null,vec__32703,1,null);var map__32704 = clustermap.app.parse_route.call(null);var map__32704__$1 = ((cljs.core.seq_QMARK_.call(null,map__32704))?cljs.core.apply.call(null,cljs.core.hash_map,map__32704):map__32704);var view = cljs.core.get.call(null,map__32704__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__32706 = clustermap.app.parse_route.call(null);var map__32706__$1 = ((cljs.core.seq_QMARK_.call(null,map__32706))?cljs.core.apply.call(null,cljs.core.hash_map,map__32706):map__32706);var id = cljs.core.get.call(null,map__32706__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__32706__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9263__auto__){var map__32710 = params__9263__auto__;var map__32710__$1 = ((cljs.core.seq_QMARK_.call(null,map__32710))?cljs.core.apply.call(null,cljs.core.hash_map,map__32710):map__32710);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9263__auto__){var map__32711 = params__9263__auto__;var map__32711__$1 = ((cljs.core.seq_QMARK_.call(null,map__32711))?cljs.core.apply.call(null,cljs.core.hash_map,map__32711):map__32711);var view = cljs.core.get.call(null,map__32711__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9263__auto__){var map__32712 = params__9263__auto__;var map__32712__$1 = ((cljs.core.seq_QMARK_.call(null,map__32712))?cljs.core.apply.call(null,cljs.core.hash_map,map__32712):map__32712);var id = cljs.core.get.call(null,map__32712__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__32712__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__32712__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32759){var state_val_32760 = (state_32759[1]);if((state_val_32760 === 7))
{var inst_32748 = (state_32759[2]);var inst_32749 = cljs.core.nth.call(null,inst_32748,0,null);var inst_32750 = cljs.core.nth.call(null,inst_32748,1,null);var inst_32751 = clustermap.app.handle_event.call(null,inst_32749,inst_32750);var state_32759__$1 = (function (){var statearr_32761 = state_32759;(statearr_32761[7] = inst_32751);
return statearr_32761;
})();var statearr_32762_32775 = state_32759__$1;(statearr_32762_32775[2] = null);
(statearr_32762_32775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 6))
{var inst_32755 = (state_32759[2]);var state_32759__$1 = state_32759;var statearr_32763_32776 = state_32759__$1;(statearr_32763_32776[2] = inst_32755);
(statearr_32763_32776[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 5))
{var state_32759__$1 = state_32759;var statearr_32764_32777 = state_32759__$1;(statearr_32764_32777[2] = null);
(statearr_32764_32777[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 4))
{var state_32759__$1 = state_32759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32759__$1,7,comm);
} else
{if((state_val_32760 === 3))
{var inst_32757 = (state_32759[2]);var state_32759__$1 = state_32759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32759__$1,inst_32757);
} else
{if((state_val_32760 === 2))
{var state_32759__$1 = state_32759;if(true)
{var statearr_32765_32778 = state_32759__$1;(statearr_32765_32778[1] = 4);
} else
{var statearr_32766_32779 = state_32759__$1;(statearr_32766_32779[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32760 === 1))
{var state_32759__$1 = state_32759;var statearr_32767_32780 = state_32759__$1;(statearr_32767_32780[2] = null);
(statearr_32767_32780[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32771 = [null,null,null,null,null,null,null,null];(statearr_32771[0] = state_machine__5507__auto__);
(statearr_32771[1] = 1);
return statearr_32771;
});
var state_machine__5507__auto____1 = (function (state_32759){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32772){if((e32772 instanceof Object))
{var ex__5510__auto__ = e32772;var statearr_32773_32781 = state_32759;(statearr_32773_32781[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32782 = state_32759;
state_32759 = G__32782;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32759){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32774 = f__5522__auto__.call(null);(statearr_32774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
