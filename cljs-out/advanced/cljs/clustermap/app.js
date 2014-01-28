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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$258,cljs.core.constant$keyword$303,cljs.core.constant$keyword$333,cljs.core.constant$keyword$260,cljs.core.constant$keyword$337,cljs.core.constant$keyword$255,cljs.core.constant$keyword$313,cljs.core.constant$keyword$334,cljs.core.constant$keyword$319,cljs.core.constant$keyword$259],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__20615){var vec__20616 = p__20615;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20616,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20616,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__20617){var map__20619 = p__20617;var map__20619__$1 = ((cljs.core.seq_QMARK_(map__20619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20619):map__20619);var path_values = map__20619__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return clustermap.app.new_state(s,path_values);
}));
};
var set_state = function (var_args){
var p__20617 = null;if (arguments.length > 0) {
  p__20617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__20617);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__20620){
var p__20617 = cljs.core.seq(arglist__20620);
return set_state__delegate(p__20617);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20640){var state_val_20641 = (state_20640[1]);if((state_val_20641 === 2))
{var inst_20637 = (state_20640[2]);var inst_20638 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$260,inst_20637], 0));var state_20640__$1 = state_20640;return cljs.core.async.impl.ioc_helpers.return_chan(state_20640__$1,inst_20638);
} else
{if((state_val_20641 === 1))
{var inst_20635 = clustermap.api.portfolio_company_stats();var state_20640__$1 = state_20640;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20640__$1,2,inst_20635);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20645 = [null,null,null,null,null,null,null];(statearr_20645[0] = state_machine__5507__auto__);
(statearr_20645[1] = 1);
return statearr_20645;
});
var state_machine__5507__auto____1 = (function (state_20640){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20640);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20646){if((e20646 instanceof Object))
{var ex__5510__auto__ = e20646;var statearr_20647_20649 = state_20640;(statearr_20647_20649[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20640);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e20646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__20650 = state_20640;
state_20640 = G__20650;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20640){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20648 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20670){var state_val_20671 = (state_20670[1]);if((state_val_20671 === 2))
{var inst_20667 = (state_20670[2]);var inst_20668 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$333,inst_20667], 0));var state_20670__$1 = state_20670;return cljs.core.async.impl.ioc_helpers.return_chan(state_20670__$1,inst_20668);
} else
{if((state_val_20671 === 1))
{var inst_20665 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$207,true], 0));var state_20670__$1 = state_20670;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20670__$1,2,inst_20665);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20675 = [null,null,null,null,null,null,null];(statearr_20675[0] = state_machine__5507__auto__);
(statearr_20675[1] = 1);
return statearr_20675;
});
var state_machine__5507__auto____1 = (function (state_20670){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20670);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20676){if((e20676 instanceof Object))
{var ex__5510__auto__ = e20676;var statearr_20677_20679 = state_20670;(statearr_20677_20679[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20670);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e20676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__20680 = state_20670;
state_20670 = G__20680;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20670){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20678 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$319,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__20681,type){var vec__20683 = p__20681;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,type,cljs.core.constant$keyword$187,selection], null),cljs.core.constant$keyword$259,selection_portfolio_company_stats,cljs.core.constant$keyword$258,selection_portfolio_company_site_stats,cljs.core.constant$keyword$313,selection_portfolio_company_sites,cljs.core.constant$keyword$303,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$334,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20684){var vec__20692 = p__20684;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20692,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20692,1,null);var id = (function (){var pred__20693 = cljs.core._EQ_;var expr__20694 = type;if(cljs.core.truth_((pred__20693.cljs$core$IFn$_invoke$arity$2 ? pred__20693.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$252,expr__20694) : pred__20693.call(null,cljs.core.constant$keyword$252,expr__20694))))
{return cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20693.cljs$core$IFn$_invoke$arity$2 ? pred__20693.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__20694) : pred__20693.call(null,cljs.core.constant$keyword$253,expr__20694))))
{return cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20693.cljs$core$IFn$_invoke$arity$2 ? pred__20693.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__20694) : pred__20693.call(null,cljs.core.constant$keyword$254,expr__20694))))
{return cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20694)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$337,selector], 0));
var pred__20696 = cljs.core._EQ_;var expr__20697 = type;if(cljs.core.truth_((pred__20696.cljs$core$IFn$_invoke$arity$2 ? pred__20696.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$252,expr__20697) : pred__20696.call(null,cljs.core.constant$keyword$252,expr__20697))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20696.cljs$core$IFn$_invoke$arity$2 ? pred__20696.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__20697) : pred__20696.call(null,cljs.core.constant$keyword$253,expr__20697))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20696.cljs$core$IFn$_invoke$arity$2 ? pred__20696.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__20697) : pred__20696.call(null,cljs.core.constant$keyword$254,expr__20697))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$318,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$234,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init = (function init(){clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20745){var state_val_20746 = (state_20745[1]);if((state_val_20746 === 7))
{var inst_20734 = (state_20745[2]);var inst_20735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20734,0,null);var inst_20736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20734,1,null);var inst_20737 = clustermap.app.handle_event(inst_20735,inst_20736);var state_20745__$1 = (function (){var statearr_20747 = state_20745;(statearr_20747[7] = inst_20737);
return statearr_20747;
})();var statearr_20748_20761 = state_20745__$1;(statearr_20748_20761[2] = null);
(statearr_20748_20761[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20746 === 6))
{var inst_20741 = (state_20745[2]);var state_20745__$1 = state_20745;var statearr_20749_20762 = state_20745__$1;(statearr_20749_20762[2] = inst_20741);
(statearr_20749_20762[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20746 === 5))
{var state_20745__$1 = state_20745;var statearr_20750_20763 = state_20745__$1;(statearr_20750_20763[2] = null);
(statearr_20750_20763[1] = 6);
return cljs.core.constant$keyword$193;
} else
{if((state_val_20746 === 4))
{var state_20745__$1 = state_20745;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20745__$1,7,comm);
} else
{if((state_val_20746 === 3))
{var inst_20743 = (state_20745[2]);var state_20745__$1 = state_20745;return cljs.core.async.impl.ioc_helpers.return_chan(state_20745__$1,inst_20743);
} else
{if((state_val_20746 === 2))
{var state_20745__$1 = state_20745;if(true)
{var statearr_20751_20764 = state_20745__$1;(statearr_20751_20764[1] = 4);
} else
{var statearr_20752_20765 = state_20745__$1;(statearr_20752_20765[1] = 5);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_20746 === 1))
{var state_20745__$1 = state_20745;var statearr_20753_20766 = state_20745__$1;(statearr_20753_20766[2] = null);
(statearr_20753_20766[1] = 2);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_20757 = [null,null,null,null,null,null,null,null];(statearr_20757[0] = state_machine__5507__auto__);
(statearr_20757[1] = 1);
return statearr_20757;
});
var state_machine__5507__auto____1 = (function (state_20745){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20745);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20758){if((e20758 instanceof Object))
{var ex__5510__auto__ = e20758;var statearr_20759_20767 = state_20745;(statearr_20759_20767[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20745);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e20758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__20768 = state_20745;
state_20745 = G__20768;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20745){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20760 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
