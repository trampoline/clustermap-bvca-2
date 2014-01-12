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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28335){var state_val_28336 = (state_28335[1]);if((state_val_28336 === 2))
{var inst_28332 = (state_28335[2]);var inst_28333 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_28332);var state_28335__$1 = state_28335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28335__$1,inst_28333);
} else
{if((state_val_28336 === 1))
{var inst_28330 = clustermap.api.all_portfolio_companies_summary.call(null);var state_28335__$1 = state_28335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28335__$1,2,inst_28330);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28340 = [null,null,null,null,null,null,null];(statearr_28340[0] = state_machine__5507__auto__);
(statearr_28340[1] = 1);
return statearr_28340;
});
var state_machine__5507__auto____1 = (function (state_28335){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28341){if((e28341 instanceof Object))
{var ex__5510__auto__ = e28341;var statearr_28342_28344 = state_28335;(statearr_28342_28344[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28345 = state_28335;
state_28335 = G__28345;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28335){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28343 = f__5522__auto__.call(null);(statearr_28343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28365){var state_val_28366 = (state_28365[1]);if((state_val_28366 === 2))
{var inst_28362 = (state_28365[2]);var inst_28363 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_28362);var state_28365__$1 = state_28365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28365__$1,inst_28363);
} else
{if((state_val_28366 === 1))
{var inst_28360 = clustermap.api.all_investor_companies_summary.call(null);var state_28365__$1 = state_28365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,2,inst_28360);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28370 = [null,null,null,null,null,null,null];(statearr_28370[0] = state_machine__5507__auto__);
(statearr_28370[1] = 1);
return statearr_28370;
});
var state_machine__5507__auto____1 = (function (state_28365){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28365);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28371){if((e28371 instanceof Object))
{var ex__5510__auto__ = e28371;var statearr_28372_28374 = state_28365;(statearr_28372_28374[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28375 = state_28365;
state_28365 = G__28375;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28365){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28373 = f__5522__auto__.call(null);(statearr_28373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28406){var state_val_28407 = (state_28406[1]);if((state_val_28407 === 2))
{var inst_28398 = (state_28406[2]);var inst_28399 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_28398);var inst_28400 = cljs.core.deref.call(null,clustermap.app.state);var inst_28401 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_28400);var inst_28402 = cljs.core.deref.call(null,clustermap.app.state);var inst_28403 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_28402);var inst_28404 = clustermap.map.display_sites.call(null,inst_28401,inst_28403);var state_28406__$1 = (function (){var statearr_28408 = state_28406;(statearr_28408[7] = inst_28399);
return statearr_28408;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else
{if((state_val_28407 === 1))
{var inst_28396 = clustermap.api.all_portfolio_company_sites.call(null);var state_28406__$1 = state_28406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,2,inst_28396);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28412 = [null,null,null,null,null,null,null,null];(statearr_28412[0] = state_machine__5507__auto__);
(statearr_28412[1] = 1);
return statearr_28412;
});
var state_machine__5507__auto____1 = (function (state_28406){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28413){if((e28413 instanceof Object))
{var ex__5510__auto__ = e28413;var statearr_28414_28416 = state_28406;(statearr_28414_28416[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28417 = state_28406;
state_28406 = G__28417;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28415 = f__5522__auto__.call(null);(statearr_28415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.process_search_results = (function process_search_results(comm){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28464){var state_val_28465 = (state_28464[1]);if((state_val_28465 === 8))
{var inst_28454 = (state_28464[2]);var inst_28455 = cljs.core.js__GT_clj.call(null,inst_28454);var inst_28456 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),inst_28455);var state_28464__$1 = (function (){var statearr_28466 = state_28464;(statearr_28466[7] = inst_28456);
return statearr_28466;
})();var statearr_28467_28480 = state_28464__$1;(statearr_28467_28480[2] = null);
(statearr_28467_28480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28465 === 7))
{var inst_28452 = (state_28464[2]);var state_28464__$1 = state_28464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28464__$1,8,inst_28452);
} else
{if((state_val_28465 === 6))
{var inst_28460 = (state_28464[2]);var state_28464__$1 = state_28464;var statearr_28468_28481 = state_28464__$1;(statearr_28468_28481[2] = inst_28460);
(statearr_28468_28481[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28465 === 5))
{var state_28464__$1 = state_28464;var statearr_28469_28482 = state_28464__$1;(statearr_28469_28482[2] = null);
(statearr_28469_28482[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28465 === 4))
{var state_28464__$1 = state_28464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28464__$1,7,comm);
} else
{if((state_val_28465 === 3))
{var inst_28462 = (state_28464[2]);var state_28464__$1 = state_28464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28464__$1,inst_28462);
} else
{if((state_val_28465 === 2))
{var state_28464__$1 = state_28464;if(true)
{var statearr_28470_28483 = state_28464__$1;(statearr_28470_28483[1] = 4);
} else
{var statearr_28471_28484 = state_28464__$1;(statearr_28471_28484[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28465 === 1))
{var state_28464__$1 = state_28464;var statearr_28472_28485 = state_28464__$1;(statearr_28472_28485[2] = null);
(statearr_28472_28485[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_28476 = [null,null,null,null,null,null,null,null];(statearr_28476[0] = state_machine__5507__auto__);
(statearr_28476[1] = 1);
return statearr_28476;
});
var state_machine__5507__auto____1 = (function (state_28464){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28464);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28477){if((e28477 instanceof Object))
{var ex__5510__auto__ = e28477;var statearr_28478_28486 = state_28464;(statearr_28478_28486[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28464);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28487 = state_28464;
state_28464 = G__28487;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28464){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28479 = f__5522__auto__.call(null);(statearr_28479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.handle_event = (function handle_event(p__28488,type,val){var map__28490 = p__28488;var map__28490__$1 = ((cljs.core.seq_QMARK_.call(null,map__28490))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);var searches = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"search","search",4402534682)))
{return cljs.core.async.put_BANG_.call(null,searches,clustermap.api.search.call(null,val));
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var map__28523 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searches","searches",1902549960),cljs.core.async.chan.call(null)], null);var map__28523__$1 = ((cljs.core.seq_QMARK_.call(null,map__28523))?cljs.core.apply.call(null,cljs.core.hash_map,map__28523):map__28523);var order_ops = map__28523__$1;var searches = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));var _ = clustermap.app.process_search_results.call(null,searches);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28539){var state_val_28540 = (state_28539[1]);if((state_val_28540 === 7))
{var inst_28528 = (state_28539[2]);var inst_28529 = cljs.core.nth.call(null,inst_28528,0,null);var inst_28530 = cljs.core.nth.call(null,inst_28528,1,null);var inst_28531 = clustermap.app.handle_event.call(null,order_ops,inst_28529,inst_28530);var state_28539__$1 = (function (){var statearr_28541 = state_28539;(statearr_28541[7] = inst_28531);
return statearr_28541;
})();var statearr_28542_28555 = state_28539__$1;(statearr_28542_28555[2] = null);
(statearr_28542_28555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28540 === 6))
{var inst_28535 = (state_28539[2]);var state_28539__$1 = state_28539;var statearr_28543_28556 = state_28539__$1;(statearr_28543_28556[2] = inst_28535);
(statearr_28543_28556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28540 === 5))
{var state_28539__$1 = state_28539;var statearr_28544_28557 = state_28539__$1;(statearr_28544_28557[2] = null);
(statearr_28544_28557[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28540 === 4))
{var state_28539__$1 = state_28539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28539__$1,7,comm);
} else
{if((state_val_28540 === 3))
{var inst_28537 = (state_28539[2]);var state_28539__$1 = state_28539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28539__$1,inst_28537);
} else
{if((state_val_28540 === 2))
{var state_28539__$1 = state_28539;if(true)
{var statearr_28545_28558 = state_28539__$1;(statearr_28545_28558[1] = 4);
} else
{var statearr_28546_28559 = state_28539__$1;(statearr_28546_28559[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28540 === 1))
{var state_28539__$1 = state_28539;var statearr_28547_28560 = state_28539__$1;(statearr_28547_28560[2] = null);
(statearr_28547_28560[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_28551 = [null,null,null,null,null,null,null,null];(statearr_28551[0] = state_machine__5507__auto__);
(statearr_28551[1] = 1);
return statearr_28551;
});
var state_machine__5507__auto____1 = (function (state_28539){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28552){if((e28552 instanceof Object))
{var ex__5510__auto__ = e28552;var statearr_28553_28561 = state_28539;(statearr_28553_28561[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28562 = state_28539;
state_28539 = G__28562;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28539){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28554 = f__5522__auto__.call(null);(statearr_28554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28554;
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
