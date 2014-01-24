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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__30094){var vec__30095 = p__30094;var key_or_path = cljs.core.nth.call(null,vec__30095,0,null);var value_or_fn = cljs.core.nth.call(null,vec__30095,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__30096){var map__30098 = p__30096;var map__30098__$1 = ((cljs.core.seq_QMARK_.call(null,map__30098))?cljs.core.apply.call(null,cljs.core.hash_map,map__30098):map__30098);var path_values = map__30098__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return clustermap.app.new_state.call(null,s,path_values);
}));
};
var set_state = function (var_args){
var p__30096 = null;if (arguments.length > 0) {
  p__30096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__30096);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__30099){
var p__30096 = cljs.core.seq(arglist__30099);
return set_state__delegate(p__30096);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30119){var state_val_30120 = (state_30119[1]);if((state_val_30120 === 2))
{var inst_30116 = (state_30119[2]);var inst_30117 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704),inst_30116);var state_30119__$1 = state_30119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else
{if((state_val_30120 === 1))
{var inst_30114 = clustermap.api.portfolio_company_stats.call(null);var state_30119__$1 = state_30119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,2,inst_30114);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30124 = [null,null,null,null,null,null,null];(statearr_30124[0] = state_machine__5507__auto__);
(statearr_30124[1] = 1);
return statearr_30124;
});
var state_machine__5507__auto____1 = (function (state_30119){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30125){if((e30125 instanceof Object))
{var ex__5510__auto__ = e30125;var statearr_30126_30128 = state_30119;(statearr_30126_30128[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30129 = state_30119;
state_30119 = G__30129;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30127 = f__5522__auto__.call(null);(statearr_30127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30149){var state_val_30150 = (state_30149[1]);if((state_val_30150 === 2))
{var inst_30146 = (state_30149[2]);var inst_30147 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_30146);var state_30149__$1 = state_30149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30149__$1,inst_30147);
} else
{if((state_val_30150 === 1))
{var inst_30144 = clustermap.api.boundaryline_collections.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_30149__$1 = state_30149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30149__$1,2,inst_30144);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30154 = [null,null,null,null,null,null,null];(statearr_30154[0] = state_machine__5507__auto__);
(statearr_30154[1] = 1);
return statearr_30154;
});
var state_machine__5507__auto____1 = (function (state_30149){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30149);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30155){if((e30155 instanceof Object))
{var ex__5510__auto__ = e30155;var statearr_30156_30158 = state_30149;(statearr_30156_30158[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30159 = state_30149;
state_30149 = G__30159;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30149){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30157 = f__5522__auto__.call(null);(statearr_30157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__30160,type){var vec__30162 = p__30160;var selection = cljs.core.nth.call(null,vec__30162,0,null);var selection_portfolio_company_stats = cljs.core.nth.call(null,vec__30162,1,null);var selection_portfolio_company_sites = cljs.core.nth.call(null,vec__30162,2,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__30162,3,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587),selection_portfolio_company_stats,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680),selection_portfolio_company_sites,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__30163){var vec__30171 = p__30163;var type = cljs.core.nth.call(null,vec__30171,0,null);var val = cljs.core.nth.call(null,vec__30171,1,null);var id = (function (){var pred__30172 = cljs.core._EQ_;var expr__30173 = type;if(cljs.core.truth_(pred__30172.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30173)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__30172.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30173)))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_(pred__30172.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30173)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30173)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__30175 = cljs.core._EQ_;var expr__30176 = type;if(cljs.core.truth_(pred__30175.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30176)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__30175.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30176)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.portfolio_company_stats.call(null,selector),clustermap.api.portfolio_company_sites.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__30175.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30176)))
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30224){var state_val_30225 = (state_30224[1]);if((state_val_30225 === 7))
{var inst_30213 = (state_30224[2]);var inst_30214 = cljs.core.nth.call(null,inst_30213,0,null);var inst_30215 = cljs.core.nth.call(null,inst_30213,1,null);var inst_30216 = clustermap.app.handle_event.call(null,inst_30214,inst_30215);var state_30224__$1 = (function (){var statearr_30226 = state_30224;(statearr_30226[7] = inst_30216);
return statearr_30226;
})();var statearr_30227_30240 = state_30224__$1;(statearr_30227_30240[2] = null);
(statearr_30227_30240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30225 === 6))
{var inst_30220 = (state_30224[2]);var state_30224__$1 = state_30224;var statearr_30228_30241 = state_30224__$1;(statearr_30228_30241[2] = inst_30220);
(statearr_30228_30241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30225 === 5))
{var state_30224__$1 = state_30224;var statearr_30229_30242 = state_30224__$1;(statearr_30229_30242[2] = null);
(statearr_30229_30242[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30225 === 4))
{var state_30224__$1 = state_30224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30224__$1,7,comm);
} else
{if((state_val_30225 === 3))
{var inst_30222 = (state_30224[2]);var state_30224__$1 = state_30224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30224__$1,inst_30222);
} else
{if((state_val_30225 === 2))
{var state_30224__$1 = state_30224;if(true)
{var statearr_30230_30243 = state_30224__$1;(statearr_30230_30243[1] = 4);
} else
{var statearr_30231_30244 = state_30224__$1;(statearr_30231_30244[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30225 === 1))
{var state_30224__$1 = state_30224;var statearr_30232_30245 = state_30224__$1;(statearr_30232_30245[2] = null);
(statearr_30232_30245[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30236 = [null,null,null,null,null,null,null,null];(statearr_30236[0] = state_machine__5507__auto__);
(statearr_30236[1] = 1);
return statearr_30236;
});
var state_machine__5507__auto____1 = (function (state_30224){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30237){if((e30237 instanceof Object))
{var ex__5510__auto__ = e30237;var statearr_30238_30246 = state_30224;(statearr_30238_30246[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30247 = state_30224;
state_30224 = G__30247;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30224){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30239 = f__5522__auto__.call(null);(statearr_30239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
