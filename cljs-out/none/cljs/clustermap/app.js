// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
goog.require('secretary.core');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.map');
goog.require('om.core');
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
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"zoom","zoom",1017648965),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587)],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__11173){var vec__11174 = p__11173;var key_or_path = cljs.core.nth.call(null,vec__11174,0,null);var value_or_fn = cljs.core.nth.call(null,vec__11174,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__11175){var map__11177 = p__11175;var map__11177__$1 = ((cljs.core.seq_QMARK_.call(null,map__11177))?cljs.core.apply.call(null,cljs.core.hash_map,map__11177):map__11177);var path_values = map__11177__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__11175 = null;if (arguments.length > 0) {
  p__11175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__11175);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__11178){
var p__11175 = cljs.core.seq(arglist__11178);
return set_state__delegate(p__11175);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11198){var state_val_11199 = (state_11198[1]);if((state_val_11199 === 2))
{var inst_11195 = (state_11198[2]);var inst_11196 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_11195);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11198__$1,inst_11196);
} else
{if((state_val_11199 === 1))
{var inst_11193 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11198__$1,2,inst_11193);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11203 = [null,null,null,null,null,null,null];(statearr_11203[0] = state_machine__5507__auto__);
(statearr_11203[1] = 1);
return statearr_11203;
});
var state_machine__5507__auto____1 = (function (state_11198){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11198);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11204){if((e11204 instanceof Object))
{var ex__5510__auto__ = e11204;var statearr_11205_11207 = state_11198;(statearr_11205_11207[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11208 = state_11198;
state_11198 = G__11208;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11198){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11206 = f__5522__auto__.call(null);(statearr_11206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__11209,type){var vec__11211 = p__11209;var selection = cljs.core.nth.call(null,vec__11211,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__11211,1,null);var selection_portfolio_companies = cljs.core.nth.call(null,vec__11211,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.call(null,vec__11211,3,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__11211,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.call(null,vec__11211,5,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__11211,6,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455),selection_portfolio_companies,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),selection_portfolio_company_site_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),selection_portfolio_company_site_account_timelines,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__11215 = cljs.core._EQ_;var expr__11216 = type;if(cljs.core.truth_(pred__11215.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11216)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__11215.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11216)))
{return new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__11215.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11216)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(obj);
} else
{return null;
}
}
}
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__11218){var vec__11223 = p__11218;var type = cljs.core.nth.call(null,vec__11223,0,null);var id = cljs.core.nth.call(null,vec__11223,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__11224 = cljs.core._EQ_;var expr__11225 = type;if(cljs.core.truth_(pred__11224.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11225)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11224.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11225)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11224.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11225)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),null,clustermap.api.portfolio_company_site_account_timelines.call(null,selector),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__11228 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__11228,0,null);var view = cljs.core.nth.call(null,vec__11228,1,null);var type = cljs.core.nth.call(null,vec__11228,2,null);var id = cljs.core.nth.call(null,vec__11228,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__11229){var vec__11232 = p__11229;var type = cljs.core.nth.call(null,vec__11232,0,null);var val = cljs.core.nth.call(null,vec__11232,1,null);var map__11233 = clustermap.app.parse_route.call(null);var map__11233__$1 = ((cljs.core.seq_QMARK_.call(null,map__11233))?cljs.core.apply.call(null,cljs.core.hash_map,map__11233):map__11233);var view = cljs.core.get.call(null,map__11233__$1,new cljs.core.Keyword(null,"view","view",1017523735));var id = clustermap.app.extract_id.call(null,type,val);return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__11235 = clustermap.app.parse_route.call(null);var map__11235__$1 = ((cljs.core.seq_QMARK_.call(null,map__11235))?cljs.core.apply.call(null,cljs.core.hash_map,map__11235):map__11235);var id = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9258__auto__){var map__11239 = params__9258__auto__;var map__11239__$1 = ((cljs.core.seq_QMARK_.call(null,map__11239))?cljs.core.apply.call(null,cljs.core.hash_map,map__11239):map__11239);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9258__auto__){var map__11240 = params__9258__auto__;var map__11240__$1 = ((cljs.core.seq_QMARK_.call(null,map__11240))?cljs.core.apply.call(null,cljs.core.hash_map,map__11240):map__11240);var view = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9258__auto__){var map__11241 = params__9258__auto__;var map__11241__$1 = ((cljs.core.seq_QMARK_.call(null,map__11241))?cljs.core.apply.call(null,cljs.core.hash_map,map__11241):map__11241);var id = cljs.core.get.call(null,map__11241__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11241__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__11241__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",comm);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11288){var state_val_11289 = (state_11288[1]);if((state_val_11289 === 7))
{var inst_11277 = (state_11288[2]);var inst_11278 = cljs.core.nth.call(null,inst_11277,0,null);var inst_11279 = cljs.core.nth.call(null,inst_11277,1,null);var inst_11280 = clustermap.app.handle_event.call(null,inst_11278,inst_11279);var state_11288__$1 = (function (){var statearr_11290 = state_11288;(statearr_11290[7] = inst_11280);
return statearr_11290;
})();var statearr_11291_11304 = state_11288__$1;(statearr_11291_11304[2] = null);
(statearr_11291_11304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11289 === 6))
{var inst_11284 = (state_11288[2]);var state_11288__$1 = state_11288;var statearr_11292_11305 = state_11288__$1;(statearr_11292_11305[2] = inst_11284);
(statearr_11292_11305[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11289 === 5))
{var state_11288__$1 = state_11288;var statearr_11293_11306 = state_11288__$1;(statearr_11293_11306[2] = null);
(statearr_11293_11306[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11289 === 4))
{var state_11288__$1 = state_11288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11288__$1,7,comm);
} else
{if((state_val_11289 === 3))
{var inst_11286 = (state_11288[2]);var state_11288__$1 = state_11288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11288__$1,inst_11286);
} else
{if((state_val_11289 === 2))
{var state_11288__$1 = state_11288;if(true)
{var statearr_11294_11307 = state_11288__$1;(statearr_11294_11307[1] = 4);
} else
{var statearr_11295_11308 = state_11288__$1;(statearr_11295_11308[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11289 === 1))
{var state_11288__$1 = state_11288;var statearr_11296_11309 = state_11288__$1;(statearr_11296_11309[2] = null);
(statearr_11296_11309[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_11300 = [null,null,null,null,null,null,null,null];(statearr_11300[0] = state_machine__5507__auto__);
(statearr_11300[1] = 1);
return statearr_11300;
});
var state_machine__5507__auto____1 = (function (state_11288){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11288);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11301){if((e11301 instanceof Object))
{var ex__5510__auto__ = e11301;var statearr_11302_11310 = state_11288;(statearr_11302_11310[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11311 = state_11288;
state_11288 = G__11311;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11288){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11303 = f__5522__auto__.call(null);(statearr_11303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});

//# sourceMappingURL=app.js.map