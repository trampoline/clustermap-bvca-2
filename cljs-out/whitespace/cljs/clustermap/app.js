// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selector","selector",2205476689),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),null,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29909){var state_val_29910 = (state_29909[1]);if((state_val_29910 === 2))
{var inst_29906 = (state_29909[2]);var inst_29907 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_29906);var state_29909__$1 = state_29909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29909__$1,inst_29907);
} else
{if((state_val_29910 === 1))
{var inst_29904 = clustermap.api.portfolio_company_stats.call(null);var state_29909__$1 = state_29909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29909__$1,2,inst_29904);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29914 = [null,null,null,null,null,null,null];(statearr_29914[0] = state_machine__5507__auto__);
(statearr_29914[1] = 1);
return statearr_29914;
});
var state_machine__5507__auto____1 = (function (state_29909){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29909);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29915){if((e29915 instanceof Object))
{var ex__5510__auto__ = e29915;var statearr_29916_29918 = state_29909;(statearr_29916_29918[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29919 = state_29909;
state_29909 = G__29919;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29909){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29917 = f__5522__auto__.call(null);(statearr_29917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__29920,type){var vec__29922 = p__29920;var selection = cljs.core.nth.call(null,vec__29922,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__29922,1,null);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null));
return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__29923){var vec__29931 = p__29923;var type = cljs.core.nth.call(null,vec__29931,0,null);var val = cljs.core.nth.call(null,vec__29931,1,null);var id = (function (){var pred__29932 = cljs.core._EQ_;var expr__29933 = type;if(cljs.core.truth_(pred__29932.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__29933)))
{return cljs.core.get.call(null,val,"company_no");
} else
{if(cljs.core.truth_(pred__29932.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__29933)))
{return cljs.core.get.call(null,val,"name");
} else
{if(cljs.core.truth_(pred__29932.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__29933)))
{return cljs.core.get.call(null,val,"boundaryline_id");
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29933)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__29935 = cljs.core._EQ_;var expr__29936 = type;if(cljs.core.truth_(pred__29935.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__29936)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__29935.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__29936)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__29935.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__29936)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector)], null),type], null);
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
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_company_stats.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29984){var state_val_29985 = (state_29984[1]);if((state_val_29985 === 7))
{var inst_29973 = (state_29984[2]);var inst_29974 = cljs.core.nth.call(null,inst_29973,0,null);var inst_29975 = cljs.core.nth.call(null,inst_29973,1,null);var inst_29976 = clustermap.app.handle_event.call(null,inst_29974,inst_29975);var state_29984__$1 = (function (){var statearr_29986 = state_29984;(statearr_29986[7] = inst_29976);
return statearr_29986;
})();var statearr_29987_30000 = state_29984__$1;(statearr_29987_30000[2] = null);
(statearr_29987_30000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29985 === 6))
{var inst_29980 = (state_29984[2]);var state_29984__$1 = state_29984;var statearr_29988_30001 = state_29984__$1;(statearr_29988_30001[2] = inst_29980);
(statearr_29988_30001[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29985 === 5))
{var state_29984__$1 = state_29984;var statearr_29989_30002 = state_29984__$1;(statearr_29989_30002[2] = null);
(statearr_29989_30002[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29985 === 4))
{var state_29984__$1 = state_29984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29984__$1,7,comm);
} else
{if((state_val_29985 === 3))
{var inst_29982 = (state_29984[2]);var state_29984__$1 = state_29984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29984__$1,inst_29982);
} else
{if((state_val_29985 === 2))
{var state_29984__$1 = state_29984;if(true)
{var statearr_29990_30003 = state_29984__$1;(statearr_29990_30003[1] = 4);
} else
{var statearr_29991_30004 = state_29984__$1;(statearr_29991_30004[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29985 === 1))
{var state_29984__$1 = state_29984;var statearr_29992_30005 = state_29984__$1;(statearr_29992_30005[2] = null);
(statearr_29992_30005[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_29996 = [null,null,null,null,null,null,null,null];(statearr_29996[0] = state_machine__5507__auto__);
(statearr_29996[1] = 1);
return statearr_29996;
});
var state_machine__5507__auto____1 = (function (state_29984){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29997){if((e29997 instanceof Object))
{var ex__5510__auto__ = e29997;var statearr_29998_30006 = state_29984;(statearr_29998_30006[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30007 = state_29984;
state_29984 = G__30007;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29999 = f__5522__auto__.call(null);(statearr_29999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.init = (function init(){if(cljs.core.truth_(config.repl))
{return setTimeout(clustermap.app.do_init,2000);
} else
{if(true)
{return clustermap.app.do_init.call(null);
} else
{return null;
}
}
});
