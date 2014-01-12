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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10361){var state_val_10362 = (state_10361[1]);if((state_val_10362 === 2))
{var inst_10358 = (state_10361[2]);var inst_10359 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_10358);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10361__$1,inst_10359);
} else
{if((state_val_10362 === 1))
{var inst_10356 = clustermap.api.all_portfolio_companies_summary.call(null);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10361__$1,2,inst_10356);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10366 = [null,null,null,null,null,null,null];(statearr_10366[0] = state_machine__5507__auto__);
(statearr_10366[1] = 1);
return statearr_10366;
});
var state_machine__5507__auto____1 = (function (state_10361){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10367){if((e10367 instanceof Object))
{var ex__5510__auto__ = e10367;var statearr_10368_10370 = state_10361;(statearr_10368_10370[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10371 = state_10361;
state_10361 = G__10371;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10361){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10369 = f__5522__auto__.call(null);(statearr_10369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10391){var state_val_10392 = (state_10391[1]);if((state_val_10392 === 2))
{var inst_10388 = (state_10391[2]);var inst_10389 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_10388);var state_10391__$1 = state_10391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10391__$1,inst_10389);
} else
{if((state_val_10392 === 1))
{var inst_10386 = clustermap.api.all_investor_companies_summary.call(null);var state_10391__$1 = state_10391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10391__$1,2,inst_10386);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10396 = [null,null,null,null,null,null,null];(statearr_10396[0] = state_machine__5507__auto__);
(statearr_10396[1] = 1);
return statearr_10396;
});
var state_machine__5507__auto____1 = (function (state_10391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10397){if((e10397 instanceof Object))
{var ex__5510__auto__ = e10397;var statearr_10398_10400 = state_10391;(statearr_10398_10400[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10401 = state_10391;
state_10391 = G__10401;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10399 = f__5522__auto__.call(null);(statearr_10399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10432){var state_val_10433 = (state_10432[1]);if((state_val_10433 === 2))
{var inst_10424 = (state_10432[2]);var inst_10425 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_10424);var inst_10426 = cljs.core.deref.call(null,clustermap.app.state);var inst_10427 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_10426);var inst_10428 = cljs.core.deref.call(null,clustermap.app.state);var inst_10429 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_10428);var inst_10430 = clustermap.map.display_sites.call(null,inst_10427,inst_10429);var state_10432__$1 = (function (){var statearr_10434 = state_10432;(statearr_10434[7] = inst_10425);
return statearr_10434;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10432__$1,inst_10430);
} else
{if((state_val_10433 === 1))
{var inst_10422 = clustermap.api.all_portfolio_company_sites.call(null);var state_10432__$1 = state_10432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10432__$1,2,inst_10422);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10438 = [null,null,null,null,null,null,null,null];(statearr_10438[0] = state_machine__5507__auto__);
(statearr_10438[1] = 1);
return statearr_10438;
});
var state_machine__5507__auto____1 = (function (state_10432){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10432);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10439){if((e10439 instanceof Object))
{var ex__5510__auto__ = e10439;var statearr_10440_10442 = state_10432;(statearr_10440_10442[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10443 = state_10432;
state_10432 = G__10443;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10432){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10441 = f__5522__auto__.call(null);(statearr_10441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.process_search_results = (function process_search_results(comm){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10490){var state_val_10491 = (state_10490[1]);if((state_val_10491 === 8))
{var inst_10480 = (state_10490[2]);var inst_10481 = cljs.core.js__GT_clj.call(null,inst_10480);var inst_10482 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),inst_10481);var state_10490__$1 = (function (){var statearr_10492 = state_10490;(statearr_10492[7] = inst_10482);
return statearr_10492;
})();var statearr_10493_10506 = state_10490__$1;(statearr_10493_10506[2] = null);
(statearr_10493_10506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 7))
{var inst_10478 = (state_10490[2]);var state_10490__$1 = state_10490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10490__$1,8,inst_10478);
} else
{if((state_val_10491 === 6))
{var inst_10486 = (state_10490[2]);var state_10490__$1 = state_10490;var statearr_10494_10507 = state_10490__$1;(statearr_10494_10507[2] = inst_10486);
(statearr_10494_10507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 5))
{var state_10490__$1 = state_10490;var statearr_10495_10508 = state_10490__$1;(statearr_10495_10508[2] = null);
(statearr_10495_10508[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 4))
{var state_10490__$1 = state_10490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10490__$1,7,comm);
} else
{if((state_val_10491 === 3))
{var inst_10488 = (state_10490[2]);var state_10490__$1 = state_10490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10490__$1,inst_10488);
} else
{if((state_val_10491 === 2))
{var state_10490__$1 = state_10490;if(true)
{var statearr_10496_10509 = state_10490__$1;(statearr_10496_10509[1] = 4);
} else
{var statearr_10497_10510 = state_10490__$1;(statearr_10497_10510[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 1))
{var state_10490__$1 = state_10490;var statearr_10498_10511 = state_10490__$1;(statearr_10498_10511[2] = null);
(statearr_10498_10511[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10502 = [null,null,null,null,null,null,null,null];(statearr_10502[0] = state_machine__5507__auto__);
(statearr_10502[1] = 1);
return statearr_10502;
});
var state_machine__5507__auto____1 = (function (state_10490){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10503){if((e10503 instanceof Object))
{var ex__5510__auto__ = e10503;var statearr_10504_10512 = state_10490;(statearr_10504_10512[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10513 = state_10490;
state_10490 = G__10513;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10490){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10505 = f__5522__auto__.call(null);(statearr_10505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.handle_event = (function handle_event(p__10514,type,val){var map__10516 = p__10514;var map__10516__$1 = ((cljs.core.seq_QMARK_.call(null,map__10516))?cljs.core.apply.call(null,cljs.core.hash_map,map__10516):map__10516);var searches = cljs.core.get.call(null,map__10516__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"search","search",4402534682)))
{return cljs.core.async.put_BANG_.call(null,searches,clustermap.api.search.call(null,val));
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var map__10549 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searches","searches",1902549960),cljs.core.async.chan.call(null)], null);var map__10549__$1 = ((cljs.core.seq_QMARK_.call(null,map__10549))?cljs.core.apply.call(null,cljs.core.hash_map,map__10549):map__10549);var order_ops = map__10549__$1;var searches = cljs.core.get.call(null,map__10549__$1,new cljs.core.Keyword(null,"searches","searches",1902549960));var _ = clustermap.app.process_search_results.call(null,searches);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10565){var state_val_10566 = (state_10565[1]);if((state_val_10566 === 7))
{var inst_10554 = (state_10565[2]);var inst_10555 = cljs.core.nth.call(null,inst_10554,0,null);var inst_10556 = cljs.core.nth.call(null,inst_10554,1,null);var inst_10557 = clustermap.app.handle_event.call(null,order_ops,inst_10555,inst_10556);var state_10565__$1 = (function (){var statearr_10567 = state_10565;(statearr_10567[7] = inst_10557);
return statearr_10567;
})();var statearr_10568_10581 = state_10565__$1;(statearr_10568_10581[2] = null);
(statearr_10568_10581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 6))
{var inst_10561 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10569_10582 = state_10565__$1;(statearr_10569_10582[2] = inst_10561);
(statearr_10569_10582[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 5))
{var state_10565__$1 = state_10565;var statearr_10570_10583 = state_10565__$1;(statearr_10570_10583[2] = null);
(statearr_10570_10583[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 4))
{var state_10565__$1 = state_10565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10565__$1,7,comm);
} else
{if((state_val_10566 === 3))
{var inst_10563 = (state_10565[2]);var state_10565__$1 = state_10565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10565__$1,inst_10563);
} else
{if((state_val_10566 === 2))
{var state_10565__$1 = state_10565;if(true)
{var statearr_10571_10584 = state_10565__$1;(statearr_10571_10584[1] = 4);
} else
{var statearr_10572_10585 = state_10565__$1;(statearr_10572_10585[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 1))
{var state_10565__$1 = state_10565;var statearr_10573_10586 = state_10565__$1;(statearr_10573_10586[2] = null);
(statearr_10573_10586[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10577 = [null,null,null,null,null,null,null,null];(statearr_10577[0] = state_machine__5507__auto__);
(statearr_10577[1] = 1);
return statearr_10577;
});
var state_machine__5507__auto____1 = (function (state_10565){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10578){if((e10578 instanceof Object))
{var ex__5510__auto__ = e10578;var statearr_10579_10587 = state_10565;(statearr_10579_10587[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10588 = state_10565;
state_10565 = G__10588;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10565){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10580 = f__5522__auto__.call(null);(statearr_10580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10580;
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