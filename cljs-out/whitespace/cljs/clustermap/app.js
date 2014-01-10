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
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),null], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28243){var state_val_28244 = (state_28243[1]);if((state_val_28244 === 2))
{var inst_28240 = (state_28243[2]);var inst_28241 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_28240);var state_28243__$1 = state_28243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28243__$1,inst_28241);
} else
{if((state_val_28244 === 1))
{var inst_28238 = clustermap.api.all_portfolio_companies_summary.call(null);var state_28243__$1 = state_28243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28243__$1,2,inst_28238);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28248 = [null,null,null,null,null,null,null];(statearr_28248[0] = state_machine__5507__auto__);
(statearr_28248[1] = 1);
return statearr_28248;
});
var state_machine__5507__auto____1 = (function (state_28243){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28243);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28249){if((e28249 instanceof Object))
{var ex__5510__auto__ = e28249;var statearr_28250_28252 = state_28243;(statearr_28250_28252[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28243);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28253 = state_28243;
state_28243 = G__28253;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28243){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28251 = f__5522__auto__.call(null);(statearr_28251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28273){var state_val_28274 = (state_28273[1]);if((state_val_28274 === 2))
{var inst_28270 = (state_28273[2]);var inst_28271 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_28270);var state_28273__$1 = state_28273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28273__$1,inst_28271);
} else
{if((state_val_28274 === 1))
{var inst_28268 = clustermap.api.all_investor_companies_summary.call(null);var state_28273__$1 = state_28273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28273__$1,2,inst_28268);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28278 = [null,null,null,null,null,null,null];(statearr_28278[0] = state_machine__5507__auto__);
(statearr_28278[1] = 1);
return statearr_28278;
});
var state_machine__5507__auto____1 = (function (state_28273){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28273);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object))
{var ex__5510__auto__ = e28279;var statearr_28280_28282 = state_28273;(statearr_28280_28282[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28273);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28283 = state_28273;
state_28273 = G__28283;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28273){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28281 = f__5522__auto__.call(null);(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28314){var state_val_28315 = (state_28314[1]);if((state_val_28315 === 2))
{var inst_28306 = (state_28314[2]);var inst_28307 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_28306);var inst_28308 = cljs.core.deref.call(null,clustermap.app.state);var inst_28309 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_28308);var inst_28310 = cljs.core.deref.call(null,clustermap.app.state);var inst_28311 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_28310);var inst_28312 = clustermap.map.display_sites.call(null,inst_28309,inst_28311);var state_28314__$1 = (function (){var statearr_28316 = state_28314;(statearr_28316[7] = inst_28307);
return statearr_28316;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28314__$1,inst_28312);
} else
{if((state_val_28315 === 1))
{var inst_28304 = clustermap.api.all_portfolio_company_sites.call(null);var state_28314__$1 = state_28314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28314__$1,2,inst_28304);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28320 = [null,null,null,null,null,null,null,null];(statearr_28320[0] = state_machine__5507__auto__);
(statearr_28320[1] = 1);
return statearr_28320;
});
var state_machine__5507__auto____1 = (function (state_28314){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28314);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28321){if((e28321 instanceof Object))
{var ex__5510__auto__ = e28321;var statearr_28322_28324 = state_28314;(statearr_28322_28324[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28314);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28325 = state_28314;
state_28314 = G__28325;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28314){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28323 = f__5522__auto__.call(null);(statearr_28323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.process_search_results = (function process_search_results(comm){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28372){var state_val_28373 = (state_28372[1]);if((state_val_28373 === 8))
{var inst_28362 = (state_28372[2]);var inst_28363 = cljs.core.js__GT_clj.call(null,inst_28362);var inst_28364 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),inst_28363);var state_28372__$1 = (function (){var statearr_28374 = state_28372;(statearr_28374[7] = inst_28364);
return statearr_28374;
})();var statearr_28375_28388 = state_28372__$1;(statearr_28375_28388[2] = null);
(statearr_28375_28388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28373 === 7))
{var inst_28360 = (state_28372[2]);var state_28372__$1 = state_28372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28372__$1,8,inst_28360);
} else
{if((state_val_28373 === 6))
{var inst_28368 = (state_28372[2]);var state_28372__$1 = state_28372;var statearr_28376_28389 = state_28372__$1;(statearr_28376_28389[2] = inst_28368);
(statearr_28376_28389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28373 === 5))
{var state_28372__$1 = state_28372;var statearr_28377_28390 = state_28372__$1;(statearr_28377_28390[2] = null);
(statearr_28377_28390[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28373 === 4))
{var state_28372__$1 = state_28372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28372__$1,7,comm);
} else
{if((state_val_28373 === 3))
{var inst_28370 = (state_28372[2]);var state_28372__$1 = state_28372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28372__$1,inst_28370);
} else
{if((state_val_28373 === 2))
{var state_28372__$1 = state_28372;if(true)
{var statearr_28378_28391 = state_28372__$1;(statearr_28378_28391[1] = 4);
} else
{var statearr_28379_28392 = state_28372__$1;(statearr_28379_28392[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28373 === 1))
{var state_28372__$1 = state_28372;var statearr_28380_28393 = state_28372__$1;(statearr_28380_28393[2] = null);
(statearr_28380_28393[1] = 2);
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
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28384 = [null,null,null,null,null,null,null,null];(statearr_28384[0] = state_machine__5507__auto__);
(statearr_28384[1] = 1);
return statearr_28384;
});
var state_machine__5507__auto____1 = (function (state_28372){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28385){if((e28385 instanceof Object))
{var ex__5510__auto__ = e28385;var statearr_28386_28394 = state_28372;(statearr_28386_28394[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28395 = state_28372;
state_28372 = G__28395;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28372){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28387 = f__5522__auto__.call(null);(statearr_28387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.handle_event = (function handle_event(p__28396,type,val){var map__28398 = p__28396;var map__28398__$1 = ((cljs.core.seq_QMARK_.call(null,map__28398))?cljs.core.apply.call(null,cljs.core.hash_map,map__28398):map__28398);var searches = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"search","search",4402534682)))
{return cljs.core.async.put_BANG_.call(null,searches,clustermap.api.search.call(null,val));
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null);var map__28431 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searches","searches",1902549960),cljs.core.async.chan.call(null)], null);var map__28431__$1 = ((cljs.core.seq_QMARK_.call(null,map__28431))?cljs.core.apply.call(null,cljs.core.hash_map,map__28431):map__28431);var order_ops = map__28431__$1;var searches = cljs.core.get.call(null,map__28431__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));var _ = clustermap.app.process_search_results.call(null,searches);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28447){var state_val_28448 = (state_28447[1]);if((state_val_28448 === 7))
{var inst_28436 = (state_28447[2]);var inst_28437 = cljs.core.nth.call(null,inst_28436,0,null);var inst_28438 = cljs.core.nth.call(null,inst_28436,1,null);var inst_28439 = clustermap.app.handle_event.call(null,order_ops,inst_28437,inst_28438);var state_28447__$1 = (function (){var statearr_28449 = state_28447;(statearr_28449[7] = inst_28439);
return statearr_28449;
})();var statearr_28450_28463 = state_28447__$1;(statearr_28450_28463[2] = null);
(statearr_28450_28463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28448 === 6))
{var inst_28443 = (state_28447[2]);var state_28447__$1 = state_28447;var statearr_28451_28464 = state_28447__$1;(statearr_28451_28464[2] = inst_28443);
(statearr_28451_28464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28448 === 5))
{var state_28447__$1 = state_28447;var statearr_28452_28465 = state_28447__$1;(statearr_28452_28465[2] = null);
(statearr_28452_28465[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28448 === 4))
{var state_28447__$1 = state_28447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28447__$1,7,comm);
} else
{if((state_val_28448 === 3))
{var inst_28445 = (state_28447[2]);var state_28447__$1 = state_28447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28447__$1,inst_28445);
} else
{if((state_val_28448 === 2))
{var state_28447__$1 = state_28447;if(true)
{var statearr_28453_28466 = state_28447__$1;(statearr_28453_28466[1] = 4);
} else
{var statearr_28454_28467 = state_28447__$1;(statearr_28454_28467[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28448 === 1))
{var state_28447__$1 = state_28447;var statearr_28455_28468 = state_28447__$1;(statearr_28455_28468[2] = null);
(statearr_28455_28468[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_28459 = [null,null,null,null,null,null,null,null];(statearr_28459[0] = state_machine__5507__auto__);
(statearr_28459[1] = 1);
return statearr_28459;
});
var state_machine__5507__auto____1 = (function (state_28447){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28447);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28460){if((e28460 instanceof Object))
{var ex__5510__auto__ = e28460;var statearr_28461_28469 = state_28447;(statearr_28461_28469[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28447);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28470 = state_28447;
state_28447 = G__28470;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28447){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28462 = f__5522__auto__.call(null);(statearr_28462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28462;
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
