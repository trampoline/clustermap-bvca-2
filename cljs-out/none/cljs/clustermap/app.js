// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('om.dom');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18291){var state_val_18292 = (state_18291[1]);if((state_val_18292 === 2))
{var inst_18288 = (state_18291[2]);var inst_18289 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_18288);var state_18291__$1 = state_18291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18291__$1,inst_18289);
} else
{if((state_val_18292 === 1))
{var inst_18286 = clustermap.api.all_portfolio_companies_summary.call(null);var state_18291__$1 = state_18291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18291__$1,2,inst_18286);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18296 = [null,null,null,null,null,null,null];(statearr_18296[0] = state_machine__5507__auto__);
(statearr_18296[1] = 1);
return statearr_18296;
});
var state_machine__5507__auto____1 = (function (state_18291){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18291);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18297){if((e18297 instanceof Object))
{var ex__5510__auto__ = e18297;var statearr_18298_18300 = state_18291;(statearr_18298_18300[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18301 = state_18291;
state_18291 = G__18301;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18291){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18299 = f__5522__auto__.call(null);(statearr_18299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18321){var state_val_18322 = (state_18321[1]);if((state_val_18322 === 2))
{var inst_18318 = (state_18321[2]);var inst_18319 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_18318);var state_18321__$1 = state_18321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18321__$1,inst_18319);
} else
{if((state_val_18322 === 1))
{var inst_18316 = clustermap.api.all_investor_companies_summary.call(null);var state_18321__$1 = state_18321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18321__$1,2,inst_18316);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18326 = [null,null,null,null,null,null,null];(statearr_18326[0] = state_machine__5507__auto__);
(statearr_18326[1] = 1);
return statearr_18326;
});
var state_machine__5507__auto____1 = (function (state_18321){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18321);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18327){if((e18327 instanceof Object))
{var ex__5510__auto__ = e18327;var statearr_18328_18330 = state_18321;(statearr_18328_18330[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18321);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18331 = state_18321;
state_18321 = G__18331;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18321){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18329 = f__5522__auto__.call(null);(statearr_18329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18362){var state_val_18363 = (state_18362[1]);if((state_val_18363 === 2))
{var inst_18354 = (state_18362[2]);var inst_18355 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_18354);var inst_18356 = cljs.core.deref.call(null,clustermap.app.state);var inst_18357 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_18356);var inst_18358 = cljs.core.deref.call(null,clustermap.app.state);var inst_18359 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_18358);var inst_18360 = clustermap.map.display_sites.call(null,inst_18357,inst_18359);var state_18362__$1 = (function (){var statearr_18364 = state_18362;(statearr_18364[7] = inst_18355);
return statearr_18364;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18362__$1,inst_18360);
} else
{if((state_val_18363 === 1))
{var inst_18352 = clustermap.api.all_portfolio_company_sites.call(null);var state_18362__$1 = state_18362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18362__$1,2,inst_18352);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18368 = [null,null,null,null,null,null,null,null];(statearr_18368[0] = state_machine__5507__auto__);
(statearr_18368[1] = 1);
return statearr_18368;
});
var state_machine__5507__auto____1 = (function (state_18362){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18369){if((e18369 instanceof Object))
{var ex__5510__auto__ = e18369;var statearr_18370_18372 = state_18362;(statearr_18370_18372[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18373 = state_18362;
state_18362 = G__18373;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18362){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18371 = f__5522__auto__.call(null);(statearr_18371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(results){return console.log(results);
});
clustermap.app.make_selection = (function make_selection(p__18374){var vec__18379 = p__18374;var type = cljs.core.nth.call(null,vec__18379,0,null);var val = cljs.core.nth.call(null,vec__18379,1,null);var pred__18380 = cljs.core._EQ__EQ_;var expr__18381 = type;if(cljs.core.truth_(pred__18380.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__18381)))
{return clustermap.api.portfolio_company_detail.call(null,cljs.core.get.call(null,val,"company_no"));
} else
{return null;
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
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18429){var state_val_18430 = (state_18429[1]);if((state_val_18430 === 7))
{var inst_18418 = (state_18429[2]);var inst_18419 = cljs.core.nth.call(null,inst_18418,0,null);var inst_18420 = cljs.core.nth.call(null,inst_18418,1,null);var inst_18421 = clustermap.app.handle_event.call(null,inst_18419,inst_18420);var state_18429__$1 = (function (){var statearr_18431 = state_18429;(statearr_18431[7] = inst_18421);
return statearr_18431;
})();var statearr_18432_18445 = state_18429__$1;(statearr_18432_18445[2] = null);
(statearr_18432_18445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18430 === 6))
{var inst_18425 = (state_18429[2]);var state_18429__$1 = state_18429;var statearr_18433_18446 = state_18429__$1;(statearr_18433_18446[2] = inst_18425);
(statearr_18433_18446[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18430 === 5))
{var state_18429__$1 = state_18429;var statearr_18434_18447 = state_18429__$1;(statearr_18434_18447[2] = null);
(statearr_18434_18447[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18430 === 4))
{var state_18429__$1 = state_18429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18429__$1,7,comm);
} else
{if((state_val_18430 === 3))
{var inst_18427 = (state_18429[2]);var state_18429__$1 = state_18429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18429__$1,inst_18427);
} else
{if((state_val_18430 === 2))
{var state_18429__$1 = state_18429;if(true)
{var statearr_18435_18448 = state_18429__$1;(statearr_18435_18448[1] = 4);
} else
{var statearr_18436_18449 = state_18429__$1;(statearr_18436_18449[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18430 === 1))
{var state_18429__$1 = state_18429;var statearr_18437_18450 = state_18429__$1;(statearr_18437_18450[2] = null);
(statearr_18437_18450[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_18441 = [null,null,null,null,null,null,null,null];(statearr_18441[0] = state_machine__5507__auto__);
(statearr_18441[1] = 1);
return statearr_18441;
});
var state_machine__5507__auto____1 = (function (state_18429){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18429);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18442){if((e18442 instanceof Object))
{var ex__5510__auto__ = e18442;var statearr_18443_18451 = state_18429;(statearr_18443_18451[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18429);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18452 = state_18429;
state_18429 = G__18452;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18429){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18444 = f__5522__auto__.call(null);(statearr_18444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18444;
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

//# sourceMappingURL=app.js.map