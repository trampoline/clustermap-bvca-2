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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__11183){var vec__11184 = p__11183;var key_or_path = cljs.core.nth.call(null,vec__11184,0,null);var value_or_fn = cljs.core.nth.call(null,vec__11184,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__11185){var map__11187 = p__11185;var map__11187__$1 = ((cljs.core.seq_QMARK_.call(null,map__11187))?cljs.core.apply.call(null,cljs.core.hash_map,map__11187):map__11187);var path_values = map__11187__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__11185 = null;if (arguments.length > 0) {
  p__11185 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__11185);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__11188){
var p__11185 = cljs.core.seq(arglist__11188);
return set_state__delegate(p__11185);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11208){var state_val_11209 = (state_11208[1]);if((state_val_11209 === 2))
{var inst_11205 = (state_11208[2]);var inst_11206 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_11205);var state_11208__$1 = state_11208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11208__$1,inst_11206);
} else
{if((state_val_11209 === 1))
{var inst_11203 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_11208__$1 = state_11208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11208__$1,2,inst_11203);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11213 = [null,null,null,null,null,null,null];(statearr_11213[0] = state_machine__5507__auto__);
(statearr_11213[1] = 1);
return statearr_11213;
});
var state_machine__5507__auto____1 = (function (state_11208){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11208);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11214){if((e11214 instanceof Object))
{var ex__5510__auto__ = e11214;var statearr_11215_11217 = state_11208;(statearr_11215_11217[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11218 = state_11208;
state_11208 = G__11218;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11208){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11216 = f__5522__auto__.call(null);(statearr_11216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__11219,type){var vec__11221 = p__11219;var selection = cljs.core.nth.call(null,vec__11221,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__11221,1,null);var selection_portfolio_companies = cljs.core.nth.call(null,vec__11221,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.call(null,vec__11221,3,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__11221,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.call(null,vec__11221,5,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__11221,6,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-companies","selection-portfolio-companies",4038960455),selection_portfolio_companies,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),selection_portfolio_company_site_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),selection_portfolio_company_site_account_timelines,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__11225 = cljs.core._EQ_;var expr__11226 = type;if(cljs.core.truth_(pred__11225.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11226)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__11225.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11226)))
{return new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__11225.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11226)))
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
clustermap.app.make_selection = (function make_selection(p__11228){var vec__11233 = p__11228;var type = cljs.core.nth.call(null,vec__11233,0,null);var id = cljs.core.nth.call(null,vec__11233,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__11234 = cljs.core._EQ_;var expr__11235 = type;if(cljs.core.truth_(pred__11234.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11235)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11234.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11235)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_companies.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__11234.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11235)))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__11238 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__11238,0,null);var view = cljs.core.nth.call(null,vec__11238,1,null);var type = cljs.core.nth.call(null,vec__11238,2,null);var id = cljs.core.nth.call(null,vec__11238,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__11239){var vec__11242 = p__11239;var type = cljs.core.nth.call(null,vec__11242,0,null);var val = cljs.core.nth.call(null,vec__11242,1,null);var map__11243 = clustermap.app.parse_route.call(null);var map__11243__$1 = ((cljs.core.seq_QMARK_.call(null,map__11243))?cljs.core.apply.call(null,cljs.core.hash_map,map__11243):map__11243);var view = cljs.core.get.call(null,map__11243__$1,new cljs.core.Keyword(null,"view","view",1017523735));var id = clustermap.app.extract_id.call(null,type,val);return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__11245 = clustermap.app.parse_route.call(null);var map__11245__$1 = ((cljs.core.seq_QMARK_.call(null,map__11245))?cljs.core.apply.call(null,cljs.core.hash_map,map__11245):map__11245);var id = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9258__auto__){var map__11249 = params__9258__auto__;var map__11249__$1 = ((cljs.core.seq_QMARK_.call(null,map__11249))?cljs.core.apply.call(null,cljs.core.hash_map,map__11249):map__11249);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9258__auto__){var map__11250 = params__9258__auto__;var map__11250__$1 = ((cljs.core.seq_QMARK_.call(null,map__11250))?cljs.core.apply.call(null,cljs.core.hash_map,map__11250):map__11250);var view = cljs.core.get.call(null,map__11250__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9258__auto__){var map__11251 = params__9258__auto__;var map__11251__$1 = ((cljs.core.seq_QMARK_.call(null,map__11251))?cljs.core.apply.call(null,cljs.core.hash_map,map__11251):map__11251);var id = cljs.core.get.call(null,map__11251__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__11251__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__11251__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11298){var state_val_11299 = (state_11298[1]);if((state_val_11299 === 7))
{var inst_11287 = (state_11298[2]);var inst_11288 = cljs.core.nth.call(null,inst_11287,0,null);var inst_11289 = cljs.core.nth.call(null,inst_11287,1,null);var inst_11290 = clustermap.app.handle_event.call(null,inst_11288,inst_11289);var state_11298__$1 = (function (){var statearr_11300 = state_11298;(statearr_11300[7] = inst_11290);
return statearr_11300;
})();var statearr_11301_11314 = state_11298__$1;(statearr_11301_11314[2] = null);
(statearr_11301_11314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11299 === 6))
{var inst_11294 = (state_11298[2]);var state_11298__$1 = state_11298;var statearr_11302_11315 = state_11298__$1;(statearr_11302_11315[2] = inst_11294);
(statearr_11302_11315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11299 === 5))
{var state_11298__$1 = state_11298;var statearr_11303_11316 = state_11298__$1;(statearr_11303_11316[2] = null);
(statearr_11303_11316[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11299 === 4))
{var state_11298__$1 = state_11298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11298__$1,7,comm);
} else
{if((state_val_11299 === 3))
{var inst_11296 = (state_11298[2]);var state_11298__$1 = state_11298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11298__$1,inst_11296);
} else
{if((state_val_11299 === 2))
{var state_11298__$1 = state_11298;if(true)
{var statearr_11304_11317 = state_11298__$1;(statearr_11304_11317[1] = 4);
} else
{var statearr_11305_11318 = state_11298__$1;(statearr_11305_11318[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11299 === 1))
{var state_11298__$1 = state_11298;var statearr_11306_11319 = state_11298__$1;(statearr_11306_11319[2] = null);
(statearr_11306_11319[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_11310 = [null,null,null,null,null,null,null,null];(statearr_11310[0] = state_machine__5507__auto__);
(statearr_11310[1] = 1);
return statearr_11310;
});
var state_machine__5507__auto____1 = (function (state_11298){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11298);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11311){if((e11311 instanceof Object))
{var ex__5510__auto__ = e11311;var statearr_11312_11320 = state_11298;(statearr_11312_11320[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11298);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11321 = state_11298;
state_11298 = G__11321;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11298){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11313 = f__5522__auto__.call(null);(statearr_11313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});

//# sourceMappingURL=app.js.map