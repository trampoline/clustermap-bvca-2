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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10431){var state_val_10432 = (state_10431[1]);if((state_val_10432 === 2))
{var inst_10428 = (state_10431[2]);var inst_10429 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_10428);var state_10431__$1 = state_10431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10431__$1,inst_10429);
} else
{if((state_val_10432 === 1))
{var inst_10426 = clustermap.api.all_portfolio_companies_summary.call(null);var state_10431__$1 = state_10431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10431__$1,2,inst_10426);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10436 = [null,null,null,null,null,null,null];(statearr_10436[0] = state_machine__5507__auto__);
(statearr_10436[1] = 1);
return statearr_10436;
});
var state_machine__5507__auto____1 = (function (state_10431){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10431);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10437){if((e10437 instanceof Object))
{var ex__5510__auto__ = e10437;var statearr_10438_10440 = state_10431;(statearr_10438_10440[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10441 = state_10431;
state_10431 = G__10441;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10431){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10439 = f__5522__auto__.call(null);(statearr_10439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10461){var state_val_10462 = (state_10461[1]);if((state_val_10462 === 2))
{var inst_10458 = (state_10461[2]);var inst_10459 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_10458);var state_10461__$1 = state_10461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10461__$1,inst_10459);
} else
{if((state_val_10462 === 1))
{var inst_10456 = clustermap.api.all_investor_companies_summary.call(null);var state_10461__$1 = state_10461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10461__$1,2,inst_10456);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10466 = [null,null,null,null,null,null,null];(statearr_10466[0] = state_machine__5507__auto__);
(statearr_10466[1] = 1);
return statearr_10466;
});
var state_machine__5507__auto____1 = (function (state_10461){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10461);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10467){if((e10467 instanceof Object))
{var ex__5510__auto__ = e10467;var statearr_10468_10470 = state_10461;(statearr_10468_10470[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10471 = state_10461;
state_10461 = G__10471;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10461){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10469 = f__5522__auto__.call(null);(statearr_10469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10502){var state_val_10503 = (state_10502[1]);if((state_val_10503 === 2))
{var inst_10494 = (state_10502[2]);var inst_10495 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_10494);var inst_10496 = cljs.core.deref.call(null,clustermap.app.state);var inst_10497 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_10496);var inst_10498 = cljs.core.deref.call(null,clustermap.app.state);var inst_10499 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_10498);var inst_10500 = clustermap.map.display_sites.call(null,inst_10497,inst_10499);var state_10502__$1 = (function (){var statearr_10504 = state_10502;(statearr_10504[7] = inst_10495);
return statearr_10504;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10502__$1,inst_10500);
} else
{if((state_val_10503 === 1))
{var inst_10492 = clustermap.api.all_portfolio_company_sites.call(null);var state_10502__$1 = state_10502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10502__$1,2,inst_10492);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10508 = [null,null,null,null,null,null,null,null];(statearr_10508[0] = state_machine__5507__auto__);
(statearr_10508[1] = 1);
return statearr_10508;
});
var state_machine__5507__auto____1 = (function (state_10502){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10502);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10509){if((e10509 instanceof Object))
{var ex__5510__auto__ = e10509;var statearr_10510_10512 = state_10502;(statearr_10510_10512[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10502);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10513 = state_10502;
state_10502 = G__10513;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10502){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10511 = f__5522__auto__.call(null);(statearr_10511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results)], null);
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10560){var state_val_10561 = (state_10560[1]);if((state_val_10561 === 7))
{var inst_10549 = (state_10560[2]);var inst_10550 = cljs.core.nth.call(null,inst_10549,0,null);var inst_10551 = cljs.core.nth.call(null,inst_10549,1,null);var inst_10552 = clustermap.app.handle_event.call(null,inst_10550,inst_10551);var state_10560__$1 = (function (){var statearr_10562 = state_10560;(statearr_10562[7] = inst_10552);
return statearr_10562;
})();var statearr_10563_10576 = state_10560__$1;(statearr_10563_10576[2] = null);
(statearr_10563_10576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10561 === 6))
{var inst_10556 = (state_10560[2]);var state_10560__$1 = state_10560;var statearr_10564_10577 = state_10560__$1;(statearr_10564_10577[2] = inst_10556);
(statearr_10564_10577[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10561 === 5))
{var state_10560__$1 = state_10560;var statearr_10565_10578 = state_10560__$1;(statearr_10565_10578[2] = null);
(statearr_10565_10578[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10561 === 4))
{var state_10560__$1 = state_10560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10560__$1,7,comm);
} else
{if((state_val_10561 === 3))
{var inst_10558 = (state_10560[2]);var state_10560__$1 = state_10560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10560__$1,inst_10558);
} else
{if((state_val_10561 === 2))
{var state_10560__$1 = state_10560;if(true)
{var statearr_10566_10579 = state_10560__$1;(statearr_10566_10579[1] = 4);
} else
{var statearr_10567_10580 = state_10560__$1;(statearr_10567_10580[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10561 === 1))
{var state_10560__$1 = state_10560;var statearr_10568_10581 = state_10560__$1;(statearr_10568_10581[2] = null);
(statearr_10568_10581[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10572 = [null,null,null,null,null,null,null,null];(statearr_10572[0] = state_machine__5507__auto__);
(statearr_10572[1] = 1);
return statearr_10572;
});
var state_machine__5507__auto____1 = (function (state_10560){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10560);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10573){if((e10573 instanceof Object))
{var ex__5510__auto__ = e10573;var statearr_10574_10582 = state_10560;(statearr_10574_10582[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10583 = state_10560;
state_10560 = G__10583;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10560){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10575 = f__5522__auto__.call(null);(statearr_10575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10575;
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