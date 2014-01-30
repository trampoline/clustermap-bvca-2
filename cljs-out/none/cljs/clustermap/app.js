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
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587)],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__21187){var vec__21188 = p__21187;var key_or_path = cljs.core.nth.call(null,vec__21188,0,null);var value_or_fn = cljs.core.nth.call(null,vec__21188,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21189){var map__21191 = p__21189;var map__21191__$1 = ((cljs.core.seq_QMARK_.call(null,map__21191))?cljs.core.apply.call(null,cljs.core.hash_map,map__21191):map__21191);var path_values = map__21191__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21189 = null;if (arguments.length > 0) {
  p__21189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21189);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21192){
var p__21189 = cljs.core.seq(arglist__21192);
return set_state__delegate(p__21189);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21212){var state_val_21213 = (state_21212[1]);if((state_val_21213 === 2))
{var inst_21209 = (state_21212[2]);var inst_21210 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_21209);var state_21212__$1 = state_21212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21212__$1,inst_21210);
} else
{if((state_val_21213 === 1))
{var inst_21207 = clustermap.api.portfolio_company_stats.call(null);var state_21212__$1 = state_21212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21212__$1,2,inst_21207);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21217 = [null,null,null,null,null,null,null];(statearr_21217[0] = state_machine__5507__auto__);
(statearr_21217[1] = 1);
return statearr_21217;
});
var state_machine__5507__auto____1 = (function (state_21212){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_21212);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21218){if((e21218 instanceof Object))
{var ex__5510__auto__ = e21218;var statearr_21219_21221 = state_21212;(statearr_21219_21221[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21222 = state_21212;
state_21212 = G__21222;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21212){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21220 = f__5522__auto__.call(null);(statearr_21220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21242){var state_val_21243 = (state_21242[1]);if((state_val_21243 === 2))
{var inst_21239 = (state_21242[2]);var inst_21240 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_21239);var state_21242__$1 = state_21242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21242__$1,inst_21240);
} else
{if((state_val_21243 === 1))
{var inst_21237 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_21242__$1 = state_21242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21242__$1,2,inst_21237);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21247 = [null,null,null,null,null,null,null];(statearr_21247[0] = state_machine__5507__auto__);
(statearr_21247[1] = 1);
return statearr_21247;
});
var state_machine__5507__auto____1 = (function (state_21242){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_21242);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21248){if((e21248 instanceof Object))
{var ex__5510__auto__ = e21248;var statearr_21249_21251 = state_21242;(statearr_21249_21251[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21252 = state_21242;
state_21242 = G__21252;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21242){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21250 = f__5522__auto__.call(null);(statearr_21250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__21253,type){var vec__21255 = p__21253;var selection = cljs.core.nth.call(null,vec__21255,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__21255,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.call(null,vec__21255,2,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__21255,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.call(null,vec__21255,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__21255,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081),selection_portfolio_company_site_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052),selection_portfolio_company_site_account_timelines,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__21259 = cljs.core._EQ_;var expr__21260 = type;if(cljs.core.truth_(pred__21259.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__21260)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__21259.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__21260)))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__21259.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__21260)))
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
clustermap.app.make_selection = (function make_selection(p__21262){var vec__21267 = p__21262;var type = cljs.core.nth.call(null,vec__21267,0,null);var id = cljs.core.nth.call(null,vec__21267,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__21268 = cljs.core._EQ_;var expr__21269 = type;if(cljs.core.truth_(pred__21268.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__21269)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__21268.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__21269)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__21268.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__21269)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_site_account_timelines.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_site_stats.call(null,selector),null,clustermap.api.portfolio_company_site_account_timelines.call(null,selector),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view));
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3394__auto__ = view;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = type;if(cljs.core.truth_(and__3394__auto____$1))
{return id;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,view)),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id))].join(''));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21272 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__21272,0,null);var view = cljs.core.nth.call(null,vec__21272,1,null);var type = cljs.core.nth.call(null,vec__21272,2,null);var id = cljs.core.nth.call(null,vec__21272,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21273){var vec__21276 = p__21273;var type = cljs.core.nth.call(null,vec__21276,0,null);var val = cljs.core.nth.call(null,vec__21276,1,null);var map__21277 = clustermap.app.parse_route.call(null);var map__21277__$1 = ((cljs.core.seq_QMARK_.call(null,map__21277))?cljs.core.apply.call(null,cljs.core.hash_map,map__21277):map__21277);var view = cljs.core.get.call(null,map__21277__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,clustermap.app.extract_id.call(null,type,val));
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21279 = clustermap.app.parse_route.call(null);var map__21279__$1 = ((cljs.core.seq_QMARK_.call(null,map__21279))?cljs.core.apply.call(null,cljs.core.hash_map,map__21279):map__21279);var id = cljs.core.get.call(null,map__21279__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__21279__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.put_route_commands = (function put_route_commands(comm,new_view,new_type,new_id){if(cljs.core.truth_(new_view))
{cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),new_view], null));
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = new_type;if(cljs.core.truth_(and__3394__auto__))
{return new_id;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new_type),new_id], null)], null));
} else
{return null;
}
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9246__auto__){var map__21283 = params__9246__auto__;var map__21283__$1 = ((cljs.core.seq_QMARK_.call(null,map__21283))?cljs.core.apply.call(null,cljs.core.hash_map,map__21283):map__21283);return clustermap.app.put_route_commands.call(null,comm,null,null,null);
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9246__auto__){var map__21284 = params__9246__auto__;var map__21284__$1 = ((cljs.core.seq_QMARK_.call(null,map__21284))?cljs.core.apply.call(null,cljs.core.hash_map,map__21284):map__21284);var view = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.put_route_commands.call(null,comm,view,null,null);
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9246__auto__){var map__21285 = params__9246__auto__;var map__21285__$1 = ((cljs.core.seq_QMARK_.call(null,map__21285))?cljs.core.apply.call(null,cljs.core.hash_map,map__21285):map__21285);var id = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.put_route_commands.call(null,comm,view,type,id);
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_all_portfolio_company_stats.call(null);
clustermap.app.load_uk_constituencies.call(null);
clustermap.app.handle_event.call(null,new cljs.core.Keyword(null,"select","select",4402849902),null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",comm);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21332){var state_val_21333 = (state_21332[1]);if((state_val_21333 === 7))
{var inst_21321 = (state_21332[2]);var inst_21322 = cljs.core.nth.call(null,inst_21321,0,null);var inst_21323 = cljs.core.nth.call(null,inst_21321,1,null);var inst_21324 = clustermap.app.handle_event.call(null,inst_21322,inst_21323);var state_21332__$1 = (function (){var statearr_21334 = state_21332;(statearr_21334[7] = inst_21324);
return statearr_21334;
})();var statearr_21335_21348 = state_21332__$1;(statearr_21335_21348[2] = null);
(statearr_21335_21348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21333 === 6))
{var inst_21328 = (state_21332[2]);var state_21332__$1 = state_21332;var statearr_21336_21349 = state_21332__$1;(statearr_21336_21349[2] = inst_21328);
(statearr_21336_21349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21333 === 5))
{var state_21332__$1 = state_21332;var statearr_21337_21350 = state_21332__$1;(statearr_21337_21350[2] = null);
(statearr_21337_21350[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21333 === 4))
{var state_21332__$1 = state_21332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21332__$1,7,comm);
} else
{if((state_val_21333 === 3))
{var inst_21330 = (state_21332[2]);var state_21332__$1 = state_21332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21332__$1,inst_21330);
} else
{if((state_val_21333 === 2))
{var state_21332__$1 = state_21332;if(true)
{var statearr_21338_21351 = state_21332__$1;(statearr_21338_21351[1] = 4);
} else
{var statearr_21339_21352 = state_21332__$1;(statearr_21339_21352[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21333 === 1))
{var state_21332__$1 = state_21332;var statearr_21340_21353 = state_21332__$1;(statearr_21340_21353[2] = null);
(statearr_21340_21353[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_21344 = [null,null,null,null,null,null,null,null];(statearr_21344[0] = state_machine__5507__auto__);
(statearr_21344[1] = 1);
return statearr_21344;
});
var state_machine__5507__auto____1 = (function (state_21332){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_21332);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21345){if((e21345 instanceof Object))
{var ex__5510__auto__ = e21345;var statearr_21346_21354 = state_21332;(statearr_21346_21354[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21355 = state_21332;
state_21332 = G__21355;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21332){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21347 = f__5522__auto__.call(null);(statearr_21347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});

//# sourceMappingURL=app.js.map