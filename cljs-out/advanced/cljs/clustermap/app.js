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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$201,null,cljs.core.constant$keyword$205,null,cljs.core.constant$keyword$199,null,cljs.core.constant$keyword$200,null,cljs.core.constant$keyword$160,cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20034){var state_val_20035 = (state_20034[1]);if((state_val_20035 === 2))
{var inst_20031 = (state_20034[2]);var inst_20032 = clustermap.app.set_state(cljs.core.constant$keyword$199,inst_20031);var state_20034__$1 = state_20034;return cljs.core.async.impl.ioc_helpers.return_chan(state_20034__$1,inst_20032);
} else
{if((state_val_20035 === 1))
{var inst_20029 = clustermap.api.portfolio_companies_summary();var state_20034__$1 = state_20034;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20034__$1,2,inst_20029);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20039 = [null,null,null,null,null,null,null];(statearr_20039[0] = state_machine__5507__auto__);
(statearr_20039[1] = 1);
return statearr_20039;
});
var state_machine__5507__auto____1 = (function (state_20034){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20034);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20040){if((e20040 instanceof Object))
{var ex__5510__auto__ = e20040;var statearr_20041_20043 = state_20034;(statearr_20041_20043[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20034);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20044 = state_20034;
state_20034 = G__20044;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20034){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20042 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20064){var state_val_20065 = (state_20064[1]);if((state_val_20065 === 2))
{var inst_20061 = (state_20064[2]);var inst_20062 = clustermap.app.set_state(cljs.core.constant$keyword$200,inst_20061);var state_20064__$1 = state_20064;return cljs.core.async.impl.ioc_helpers.return_chan(state_20064__$1,inst_20062);
} else
{if((state_val_20065 === 1))
{var inst_20059 = clustermap.api.investor_companies_summary();var state_20064__$1 = state_20064;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20064__$1,2,inst_20059);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20069 = [null,null,null,null,null,null,null];(statearr_20069[0] = state_machine__5507__auto__);
(statearr_20069[1] = 1);
return statearr_20069;
});
var state_machine__5507__auto____1 = (function (state_20064){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20064);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20070){if((e20070 instanceof Object))
{var ex__5510__auto__ = e20070;var statearr_20071_20073 = state_20064;(statearr_20071_20073[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20064);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20074 = state_20064;
state_20064 = G__20074;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20064){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20072 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20105){var state_val_20106 = (state_20105[1]);if((state_val_20106 === 2))
{var inst_20097 = (state_20105[2]);var inst_20098 = clustermap.app.set_state(cljs.core.constant$keyword$205,inst_20097);var inst_20099 = cljs.core.deref(clustermap.app.state);var inst_20100 = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(inst_20099);var inst_20101 = cljs.core.deref(clustermap.app.state);var inst_20102 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(inst_20101);var inst_20103 = clustermap.map.display_sites(inst_20100,inst_20102);var state_20105__$1 = (function (){var statearr_20107 = state_20105;(statearr_20107[7] = inst_20098);
return statearr_20107;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_20105__$1,inst_20103);
} else
{if((state_val_20106 === 1))
{var inst_20095 = clustermap.api.portfolio_company_sites();var state_20105__$1 = state_20105;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20105__$1,2,inst_20095);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20111 = [null,null,null,null,null,null,null,null];(statearr_20111[0] = state_machine__5507__auto__);
(statearr_20111[1] = 1);
return statearr_20111;
});
var state_machine__5507__auto____1 = (function (state_20105){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20105);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20112){if((e20112 instanceof Object))
{var ex__5510__auto__ = e20112;var statearr_20113_20115 = state_20105;(statearr_20113_20115[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20105);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20116 = state_20105;
state_20105 = G__20116;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20105){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20114 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state(cljs.core.constant$keyword$160,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results));
});
clustermap.app.process_selection = (function process_selection(result,type){return clustermap.app.set_state(cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,type,cljs.core.constant$keyword$120,result], null));
});
clustermap.app.make_selection = (function make_selection(p__20117){var vec__20122 = p__20117;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,1,null);var pred__20123 = cljs.core._EQ__EQ_;var expr__20124 = type;if(cljs.core.truth_((pred__20123.cljs$core$IFn$_invoke$arity$2 ? pred__20123.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$163,expr__20124) : pred__20123.call(null,cljs.core.constant$keyword$163,expr__20124))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"company_no")),type], null);
} else
{if(cljs.core.truth_((pred__20123.cljs$core$IFn$_invoke$arity$2 ? pred__20123.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$164,expr__20124) : pred__20123.call(null,cljs.core.constant$keyword$164,expr__20124))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"name")),type], null);
} else
{if(cljs.core.truth_((pred__20123.cljs$core$IFn$_invoke$arity$2 ? pred__20123.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$162,expr__20124) : pred__20123.call(null,cljs.core.constant$keyword$162,expr__20124))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"boundaryline_id")),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$159,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$206,clustermap.map.create_map());
clustermap.app.load_all_portfolio_companies_summary();
clustermap.app.load_all_investor_companies_summary();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.search.mount(clustermap.app.state,"search-component",comm);
clustermap.map_report.mount(clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20172){var state_val_20173 = (state_20172[1]);if((state_val_20173 === 7))
{var inst_20161 = (state_20172[2]);var inst_20162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20161,0,null);var inst_20163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20161,1,null);var inst_20164 = clustermap.app.handle_event(inst_20162,inst_20163);var state_20172__$1 = (function (){var statearr_20174 = state_20172;(statearr_20174[7] = inst_20164);
return statearr_20174;
})();var statearr_20175_20188 = state_20172__$1;(statearr_20175_20188[2] = null);
(statearr_20175_20188[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20173 === 6))
{var inst_20168 = (state_20172[2]);var state_20172__$1 = state_20172;var statearr_20176_20189 = state_20172__$1;(statearr_20176_20189[2] = inst_20168);
(statearr_20176_20189[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20173 === 5))
{var state_20172__$1 = state_20172;var statearr_20177_20190 = state_20172__$1;(statearr_20177_20190[2] = null);
(statearr_20177_20190[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20173 === 4))
{var state_20172__$1 = state_20172;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20172__$1,7,comm);
} else
{if((state_val_20173 === 3))
{var inst_20170 = (state_20172[2]);var state_20172__$1 = state_20172;return cljs.core.async.impl.ioc_helpers.return_chan(state_20172__$1,inst_20170);
} else
{if((state_val_20173 === 2))
{var state_20172__$1 = state_20172;if(true)
{var statearr_20178_20191 = state_20172__$1;(statearr_20178_20191[1] = 4);
} else
{var statearr_20179_20192 = state_20172__$1;(statearr_20179_20192[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20173 === 1))
{var state_20172__$1 = state_20172;var statearr_20180_20193 = state_20172__$1;(statearr_20180_20193[2] = null);
(statearr_20180_20193[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_20184 = [null,null,null,null,null,null,null,null];(statearr_20184[0] = state_machine__5507__auto__);
(statearr_20184[1] = 1);
return statearr_20184;
});
var state_machine__5507__auto____1 = (function (state_20172){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20172);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20185){if((e20185 instanceof Object))
{var ex__5510__auto__ = e20185;var statearr_20186_20194 = state_20172;(statearr_20186_20194[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20172);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20195 = state_20172;
state_20172 = G__20195;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20172){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20187 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.init = (function init(){if(cljs.core.truth_(config.repl))
{return setTimeout(clustermap.app.do_init,2000);
} else
{if(true)
{return clustermap.app.do_init();
} else
{return null;
}
}
});
