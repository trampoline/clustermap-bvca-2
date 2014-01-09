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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10351){var state_val_10352 = (state_10351[1]);if((state_val_10352 === 2))
{var inst_10348 = (state_10351[2]);var inst_10349 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_10348);var state_10351__$1 = state_10351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10351__$1,inst_10349);
} else
{if((state_val_10352 === 1))
{var inst_10346 = clustermap.api.all_portfolio_companies_summary.call(null);var state_10351__$1 = state_10351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10351__$1,2,inst_10346);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10356 = [null,null,null,null,null,null,null];(statearr_10356[0] = state_machine__5507__auto__);
(statearr_10356[1] = 1);
return statearr_10356;
});
var state_machine__5507__auto____1 = (function (state_10351){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10351);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10357){if((e10357 instanceof Object))
{var ex__5510__auto__ = e10357;var statearr_10358_10360 = state_10351;(statearr_10358_10360[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10351);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10361 = state_10351;
state_10351 = G__10361;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10351){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10359 = f__5522__auto__.call(null);(statearr_10359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10381){var state_val_10382 = (state_10381[1]);if((state_val_10382 === 2))
{var inst_10378 = (state_10381[2]);var inst_10379 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_10378);var state_10381__$1 = state_10381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10381__$1,inst_10379);
} else
{if((state_val_10382 === 1))
{var inst_10376 = clustermap.api.all_investor_companies_summary.call(null);var state_10381__$1 = state_10381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10381__$1,2,inst_10376);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10386 = [null,null,null,null,null,null,null];(statearr_10386[0] = state_machine__5507__auto__);
(statearr_10386[1] = 1);
return statearr_10386;
});
var state_machine__5507__auto____1 = (function (state_10381){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10387){if((e10387 instanceof Object))
{var ex__5510__auto__ = e10387;var statearr_10388_10390 = state_10381;(statearr_10388_10390[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10391 = state_10381;
state_10381 = G__10391;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10381){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10389 = f__5522__auto__.call(null);(statearr_10389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10422){var state_val_10423 = (state_10422[1]);if((state_val_10423 === 2))
{var inst_10414 = (state_10422[2]);var inst_10415 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_10414);var inst_10416 = cljs.core.deref.call(null,clustermap.app.state);var inst_10417 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_10416);var inst_10418 = cljs.core.deref.call(null,clustermap.app.state);var inst_10419 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_10418);var inst_10420 = clustermap.map.display_sites.call(null,inst_10417,inst_10419);var state_10422__$1 = (function (){var statearr_10424 = state_10422;(statearr_10424[7] = inst_10415);
return statearr_10424;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10422__$1,inst_10420);
} else
{if((state_val_10423 === 1))
{var inst_10412 = clustermap.api.all_portfolio_company_sites.call(null);var state_10422__$1 = state_10422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10422__$1,2,inst_10412);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10428 = [null,null,null,null,null,null,null,null];(statearr_10428[0] = state_machine__5507__auto__);
(statearr_10428[1] = 1);
return statearr_10428;
});
var state_machine__5507__auto____1 = (function (state_10422){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10422);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10429){if((e10429 instanceof Object))
{var ex__5510__auto__ = e10429;var statearr_10430_10432 = state_10422;(statearr_10430_10432[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10433 = state_10422;
state_10422 = G__10433;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10422){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10431 = f__5522__auto__.call(null);(statearr_10431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.search = (function search(q){if((cljs.core.count.call(null,q) > 0))
{var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10455){var state_val_10456 = (state_10455[1]);if((state_val_10456 === 2))
{var inst_10451 = (state_10455[2]);var inst_10452 = cljs.core.js__GT_clj.call(null,inst_10451);var inst_10453 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),inst_10452);var state_10455__$1 = state_10455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10455__$1,inst_10453);
} else
{if((state_val_10456 === 1))
{var inst_10449 = clustermap.api.search.call(null,q);var state_10455__$1 = state_10455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10455__$1,2,inst_10449);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10460 = [null,null,null,null,null,null,null];(statearr_10460[0] = state_machine__5507__auto__);
(statearr_10460[1] = 1);
return statearr_10460;
});
var state_machine__5507__auto____1 = (function (state_10455){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10455);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10461){if((e10461 instanceof Object))
{var ex__5510__auto__ = e10461;var statearr_10462_10464 = state_10455;(statearr_10462_10464[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10465 = state_10455;
state_10455 = G__10465;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10455){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10463 = f__5522__auto__.call(null);(statearr_10463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
} else
{return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),null);
}
});
clustermap.app.handle_event = (function handle_event(type,val){console.log(type);
console.log(val);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"search","search",4402534682)))
{return clustermap.app.search.call(null,val);
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10512){var state_val_10513 = (state_10512[1]);if((state_val_10513 === 7))
{var inst_10501 = (state_10512[2]);var inst_10502 = cljs.core.nth.call(null,inst_10501,0,null);var inst_10503 = cljs.core.nth.call(null,inst_10501,1,null);var inst_10504 = clustermap.app.handle_event.call(null,inst_10502,inst_10503);var state_10512__$1 = (function (){var statearr_10514 = state_10512;(statearr_10514[7] = inst_10504);
return statearr_10514;
})();var statearr_10515_10528 = state_10512__$1;(statearr_10515_10528[2] = null);
(statearr_10515_10528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10513 === 6))
{var inst_10508 = (state_10512[2]);var state_10512__$1 = state_10512;var statearr_10516_10529 = state_10512__$1;(statearr_10516_10529[2] = inst_10508);
(statearr_10516_10529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10513 === 5))
{var state_10512__$1 = state_10512;var statearr_10517_10530 = state_10512__$1;(statearr_10517_10530[2] = null);
(statearr_10517_10530[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10513 === 4))
{var state_10512__$1 = state_10512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10512__$1,7,comm);
} else
{if((state_val_10513 === 3))
{var inst_10510 = (state_10512[2]);var state_10512__$1 = state_10512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10512__$1,inst_10510);
} else
{if((state_val_10513 === 2))
{var state_10512__$1 = state_10512;if(true)
{var statearr_10518_10531 = state_10512__$1;(statearr_10518_10531[1] = 4);
} else
{var statearr_10519_10532 = state_10512__$1;(statearr_10519_10532[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10513 === 1))
{var state_10512__$1 = state_10512;var statearr_10520_10533 = state_10512__$1;(statearr_10520_10533[2] = null);
(statearr_10520_10533[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10524 = [null,null,null,null,null,null,null,null];(statearr_10524[0] = state_machine__5507__auto__);
(statearr_10524[1] = 1);
return statearr_10524;
});
var state_machine__5507__auto____1 = (function (state_10512){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10512);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10525){if((e10525 instanceof Object))
{var ex__5510__auto__ = e10525;var statearr_10526_10534 = state_10512;(statearr_10526_10534[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10535 = state_10512;
state_10512 = G__10535;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10512){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10527 = f__5522__auto__.call(null);(statearr_10527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10527;
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