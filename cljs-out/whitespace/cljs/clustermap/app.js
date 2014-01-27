// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.map');
goog.require('om.core');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selector","selector",2205476689),null,new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),null,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),null], null));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__30354){var vec__30355 = p__30354;var key_or_path = cljs.core.nth.call(null,vec__30355,0,null);var value_or_fn = cljs.core.nth.call(null,vec__30355,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__30356){var map__30358 = p__30356;var map__30358__$1 = ((cljs.core.seq_QMARK_.call(null,map__30358))?cljs.core.apply.call(null,cljs.core.hash_map,map__30358):map__30358);var path_values = map__30358__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return clustermap.app.new_state.call(null,s,path_values);
}));
};
var set_state = function (var_args){
var p__30356 = null;if (arguments.length > 0) {
  p__30356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__30356);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__30359){
var p__30356 = cljs.core.seq(arglist__30359);
return set_state__delegate(p__30356);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30379){var state_val_30380 = (state_30379[1]);if((state_val_30380 === 2))
{var inst_30376 = (state_30379[2]);var inst_30377 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_30376);var state_30379__$1 = state_30379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30379__$1,inst_30377);
} else
{if((state_val_30380 === 1))
{var inst_30374 = clustermap.api.portfolio_company_stats.call(null);var state_30379__$1 = state_30379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30379__$1,2,inst_30374);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30384 = [null,null,null,null,null,null,null];(statearr_30384[0] = state_machine__5507__auto__);
(statearr_30384[1] = 1);
return statearr_30384;
});
var state_machine__5507__auto____1 = (function (state_30379){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30385){if((e30385 instanceof Object))
{var ex__5510__auto__ = e30385;var statearr_30386_30388 = state_30379;(statearr_30386_30388[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30389 = state_30379;
state_30379 = G__30389;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30379){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30387 = f__5522__auto__.call(null);(statearr_30387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30409){var state_val_30410 = (state_30409[1]);if((state_val_30410 === 2))
{var inst_30406 = (state_30409[2]);var inst_30407 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_30406);var state_30409__$1 = state_30409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30409__$1,inst_30407);
} else
{if((state_val_30410 === 1))
{var inst_30404 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_30409__$1 = state_30409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30409__$1,2,inst_30404);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30414 = [null,null,null,null,null,null,null];(statearr_30414[0] = state_machine__5507__auto__);
(statearr_30414[1] = 1);
return statearr_30414;
});
var state_machine__5507__auto____1 = (function (state_30409){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30409);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30415){if((e30415 instanceof Object))
{var ex__5510__auto__ = e30415;var statearr_30416_30418 = state_30409;(statearr_30416_30418[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30419 = state_30409;
state_30409 = G__30419;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30409){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30417 = f__5522__auto__.call(null);(statearr_30417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__30420,type){var vec__30422 = p__30420;var selection = cljs.core.nth.call(null,vec__30422,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__30422,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__30422,2,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__30422,3,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__30423){var vec__30431 = p__30423;var type = cljs.core.nth.call(null,vec__30431,0,null);var val = cljs.core.nth.call(null,vec__30431,1,null);var id = (function (){var pred__30432 = cljs.core._EQ_;var expr__30433 = type;if(cljs.core.truth_(pred__30432.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30433)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__30432.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30433)))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__30432.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30433)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30433)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__30435 = cljs.core._EQ_;var expr__30436 = type;if(cljs.core.truth_(pred__30435.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30436)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__30435.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30436)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__30435.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30436)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return handler.call(null,val);
});
clustermap.app.init = (function init(){clustermap.app.load_all_portfolio_company_stats.call(null);
clustermap.app.load_uk_constituencies.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",comm);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30484){var state_val_30485 = (state_30484[1]);if((state_val_30485 === 7))
{var inst_30473 = (state_30484[2]);var inst_30474 = cljs.core.nth.call(null,inst_30473,0,null);var inst_30475 = cljs.core.nth.call(null,inst_30473,1,null);var inst_30476 = clustermap.app.handle_event.call(null,inst_30474,inst_30475);var state_30484__$1 = (function (){var statearr_30486 = state_30484;(statearr_30486[7] = inst_30476);
return statearr_30486;
})();var statearr_30487_30500 = state_30484__$1;(statearr_30487_30500[2] = null);
(statearr_30487_30500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30485 === 6))
{var inst_30480 = (state_30484[2]);var state_30484__$1 = state_30484;var statearr_30488_30501 = state_30484__$1;(statearr_30488_30501[2] = inst_30480);
(statearr_30488_30501[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30485 === 5))
{var state_30484__$1 = state_30484;var statearr_30489_30502 = state_30484__$1;(statearr_30489_30502[2] = null);
(statearr_30489_30502[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30485 === 4))
{var state_30484__$1 = state_30484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30484__$1,7,comm);
} else
{if((state_val_30485 === 3))
{var inst_30482 = (state_30484[2]);var state_30484__$1 = state_30484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30484__$1,inst_30482);
} else
{if((state_val_30485 === 2))
{var state_30484__$1 = state_30484;if(true)
{var statearr_30490_30503 = state_30484__$1;(statearr_30490_30503[1] = 4);
} else
{var statearr_30491_30504 = state_30484__$1;(statearr_30491_30504[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30485 === 1))
{var state_30484__$1 = state_30484;var statearr_30492_30505 = state_30484__$1;(statearr_30492_30505[2] = null);
(statearr_30492_30505[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30496 = [null,null,null,null,null,null,null,null];(statearr_30496[0] = state_machine__5507__auto__);
(statearr_30496[1] = 1);
return statearr_30496;
});
var state_machine__5507__auto____1 = (function (state_30484){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30484);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30497){if((e30497 instanceof Object))
{var ex__5510__auto__ = e30497;var statearr_30498_30506 = state_30484;(statearr_30498_30506[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30507 = state_30484;
state_30484 = G__30507;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30484){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30499 = f__5522__auto__.call(null);(statearr_30499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
