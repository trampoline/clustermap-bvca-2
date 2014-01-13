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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19656){var state_val_19657 = (state_19656[1]);if((state_val_19657 === 2))
{var inst_19653 = (state_19656[2]);var inst_19654 = clustermap.app.set_state(cljs.core.constant$keyword$199,inst_19653);var state_19656__$1 = state_19656;return cljs.core.async.impl.ioc_helpers.return_chan(state_19656__$1,inst_19654);
} else
{if((state_val_19657 === 1))
{var inst_19651 = clustermap.api.all_portfolio_companies_summary();var state_19656__$1 = state_19656;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19656__$1,2,inst_19651);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19661 = [null,null,null,null,null,null,null];(statearr_19661[0] = state_machine__5507__auto__);
(statearr_19661[1] = 1);
return statearr_19661;
});
var state_machine__5507__auto____1 = (function (state_19656){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19656);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19662){if((e19662 instanceof Object))
{var ex__5510__auto__ = e19662;var statearr_19663_19665 = state_19656;(statearr_19663_19665[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19656);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19666 = state_19656;
state_19656 = G__19666;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19656){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19664 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19686){var state_val_19687 = (state_19686[1]);if((state_val_19687 === 2))
{var inst_19683 = (state_19686[2]);var inst_19684 = clustermap.app.set_state(cljs.core.constant$keyword$200,inst_19683);var state_19686__$1 = state_19686;return cljs.core.async.impl.ioc_helpers.return_chan(state_19686__$1,inst_19684);
} else
{if((state_val_19687 === 1))
{var inst_19681 = clustermap.api.all_investor_companies_summary();var state_19686__$1 = state_19686;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19686__$1,2,inst_19681);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19691 = [null,null,null,null,null,null,null];(statearr_19691[0] = state_machine__5507__auto__);
(statearr_19691[1] = 1);
return statearr_19691;
});
var state_machine__5507__auto____1 = (function (state_19686){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19686);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19692){if((e19692 instanceof Object))
{var ex__5510__auto__ = e19692;var statearr_19693_19695 = state_19686;(statearr_19693_19695[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19686);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19696 = state_19686;
state_19686 = G__19696;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19686){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19694 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19727){var state_val_19728 = (state_19727[1]);if((state_val_19728 === 2))
{var inst_19719 = (state_19727[2]);var inst_19720 = clustermap.app.set_state(cljs.core.constant$keyword$205,inst_19719);var inst_19721 = cljs.core.deref(clustermap.app.state);var inst_19722 = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(inst_19721);var inst_19723 = cljs.core.deref(clustermap.app.state);var inst_19724 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(inst_19723);var inst_19725 = clustermap.map.display_sites(inst_19722,inst_19724);var state_19727__$1 = (function (){var statearr_19729 = state_19727;(statearr_19729[7] = inst_19720);
return statearr_19729;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19727__$1,inst_19725);
} else
{if((state_val_19728 === 1))
{var inst_19717 = clustermap.api.all_portfolio_company_sites();var state_19727__$1 = state_19727;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19727__$1,2,inst_19717);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19733 = [null,null,null,null,null,null,null,null];(statearr_19733[0] = state_machine__5507__auto__);
(statearr_19733[1] = 1);
return statearr_19733;
});
var state_machine__5507__auto____1 = (function (state_19727){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19727);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19734){if((e19734 instanceof Object))
{var ex__5510__auto__ = e19734;var statearr_19735_19737 = state_19727;(statearr_19735_19737[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19727);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19738 = state_19727;
state_19727 = G__19738;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19727){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19736 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state(cljs.core.constant$keyword$160,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results));
});
clustermap.app.process_selection = (function process_selection(result,type){console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,type], null)));
return clustermap.app.set_state(cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,type,cljs.core.constant$keyword$120,result], null));
});
clustermap.app.make_selection = (function make_selection(p__19739){var vec__19744 = p__19739;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19744,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19744,1,null);console.log(cljs.core.clj__GT_js(val));
var pred__19745 = cljs.core._EQ__EQ_;var expr__19746 = type;if(cljs.core.truth_((pred__19745.cljs$core$IFn$_invoke$arity$2 ? pred__19745.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$163,expr__19746) : pred__19745.call(null,cljs.core.constant$keyword$163,expr__19746))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company_detail(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"company_no")),type], null);
} else
{if(cljs.core.truth_((pred__19745.cljs$core$IFn$_invoke$arity$2 ? pred__19745.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$164,expr__19746) : pred__19745.call(null,cljs.core.constant$keyword$164,expr__19746))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company_detail(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"name")),type], null);
} else
{if(cljs.core.truth_((pred__19745.cljs$core$IFn$_invoke$arity$2 ? pred__19745.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$162,expr__19746) : pred__19745.call(null,cljs.core.constant$keyword$162,expr__19746))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency_detail(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"boundaryline_id")),type], null);
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19794){var state_val_19795 = (state_19794[1]);if((state_val_19795 === 7))
{var inst_19783 = (state_19794[2]);var inst_19784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19783,0,null);var inst_19785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19783,1,null);var inst_19786 = clustermap.app.handle_event(inst_19784,inst_19785);var state_19794__$1 = (function (){var statearr_19796 = state_19794;(statearr_19796[7] = inst_19786);
return statearr_19796;
})();var statearr_19797_19810 = state_19794__$1;(statearr_19797_19810[2] = null);
(statearr_19797_19810[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19795 === 6))
{var inst_19790 = (state_19794[2]);var state_19794__$1 = state_19794;var statearr_19798_19811 = state_19794__$1;(statearr_19798_19811[2] = inst_19790);
(statearr_19798_19811[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19795 === 5))
{var state_19794__$1 = state_19794;var statearr_19799_19812 = state_19794__$1;(statearr_19799_19812[2] = null);
(statearr_19799_19812[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19795 === 4))
{var state_19794__$1 = state_19794;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19794__$1,7,comm);
} else
{if((state_val_19795 === 3))
{var inst_19792 = (state_19794[2]);var state_19794__$1 = state_19794;return cljs.core.async.impl.ioc_helpers.return_chan(state_19794__$1,inst_19792);
} else
{if((state_val_19795 === 2))
{var state_19794__$1 = state_19794;if(true)
{var statearr_19800_19813 = state_19794__$1;(statearr_19800_19813[1] = 4);
} else
{var statearr_19801_19814 = state_19794__$1;(statearr_19801_19814[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_19795 === 1))
{var state_19794__$1 = state_19794;var statearr_19802_19815 = state_19794__$1;(statearr_19802_19815[2] = null);
(statearr_19802_19815[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_19806 = [null,null,null,null,null,null,null,null];(statearr_19806[0] = state_machine__5507__auto__);
(statearr_19806[1] = 1);
return statearr_19806;
});
var state_machine__5507__auto____1 = (function (state_19794){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19794);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19807){if((e19807 instanceof Object))
{var ex__5510__auto__ = e19807;var statearr_19808_19816 = state_19794;(statearr_19808_19816[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19794);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19817 = state_19794;
state_19794 = G__19817;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19794){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19809 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19809;
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
