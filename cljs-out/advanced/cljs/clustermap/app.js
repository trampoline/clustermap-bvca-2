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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$236,null,cljs.core.constant$keyword$287,null,cljs.core.constant$keyword$271,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$291,null,cljs.core.constant$keyword$232,null,cljs.core.constant$keyword$235,null,cljs.core.constant$keyword$265,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$288,null], null));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__20555){var vec__20556 = p__20555;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20556,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20556,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__20557){var map__20559 = p__20557;var map__20559__$1 = ((cljs.core.seq_QMARK_(map__20559))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20559):map__20559);var path_values = map__20559__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return clustermap.app.new_state(s,path_values);
}));
};
var set_state = function (var_args){
var p__20557 = null;if (arguments.length > 0) {
  p__20557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__20557);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__20560){
var p__20557 = cljs.core.seq(arglist__20560);
return set_state__delegate(p__20557);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20580){var state_val_20581 = (state_20580[1]);if((state_val_20581 === 2))
{var inst_20577 = (state_20580[2]);var inst_20578 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$236,inst_20577], 0));var state_20580__$1 = state_20580;return cljs.core.async.impl.ioc_helpers.return_chan(state_20580__$1,inst_20578);
} else
{if((state_val_20581 === 1))
{var inst_20575 = clustermap.api.portfolio_company_stats();var state_20580__$1 = state_20580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20580__$1,2,inst_20575);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20585 = [null,null,null,null,null,null,null];(statearr_20585[0] = state_machine__5507__auto__);
(statearr_20585[1] = 1);
return statearr_20585;
});
var state_machine__5507__auto____1 = (function (state_20580){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20580);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20586){if((e20586 instanceof Object))
{var ex__5510__auto__ = e20586;var statearr_20587_20589 = state_20580;(statearr_20587_20589[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20580);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20590 = state_20580;
state_20580 = G__20590;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20580){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20588 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20610){var state_val_20611 = (state_20610[1]);if((state_val_20611 === 2))
{var inst_20607 = (state_20610[2]);var inst_20608 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$287,inst_20607], 0));var state_20610__$1 = state_20610;return cljs.core.async.impl.ioc_helpers.return_chan(state_20610__$1,inst_20608);
} else
{if((state_val_20611 === 1))
{var inst_20605 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$184,true], 0));var state_20610__$1 = state_20610;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20610__$1,2,inst_20605);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20615 = [null,null,null,null,null,null,null];(statearr_20615[0] = state_machine__5507__auto__);
(statearr_20615[1] = 1);
return statearr_20615;
});
var state_machine__5507__auto____1 = (function (state_20610){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20610);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20616){if((e20616 instanceof Object))
{var ex__5510__auto__ = e20616;var statearr_20617_20619 = state_20610;(statearr_20617_20619[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20610);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20620 = state_20610;
state_20610 = G__20620;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20610){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20618 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$271,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__20621,type){var vec__20623 = p__20621;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,2,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,3,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,type,cljs.core.constant$keyword$164,selection], null),cljs.core.constant$keyword$235,selection_portfolio_company_stats,cljs.core.constant$keyword$265,selection_portfolio_company_sites,cljs.core.constant$keyword$288,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20624){var vec__20632 = p__20624;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,1,null);var id = (function (){var pred__20633 = cljs.core._EQ_;var expr__20634 = type;if(cljs.core.truth_((pred__20633.cljs$core$IFn$_invoke$arity$2 ? pred__20633.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__20634) : pred__20633.call(null,cljs.core.constant$keyword$229,expr__20634))))
{return cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20633.cljs$core$IFn$_invoke$arity$2 ? pred__20633.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20634) : pred__20633.call(null,cljs.core.constant$keyword$230,expr__20634))))
{return cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20633.cljs$core$IFn$_invoke$arity$2 ? pred__20633.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__20634) : pred__20633.call(null,cljs.core.constant$keyword$231,expr__20634))))
{return cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20634)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$291,selector], 0));
var pred__20636 = cljs.core._EQ_;var expr__20637 = type;if(cljs.core.truth_((pred__20636.cljs$core$IFn$_invoke$arity$2 ? pred__20636.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__20637) : pred__20636.call(null,cljs.core.constant$keyword$229,expr__20637))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20636.cljs$core$IFn$_invoke$arity$2 ? pred__20636.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20637) : pred__20636.call(null,cljs.core.constant$keyword$230,expr__20637))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20636.cljs$core$IFn$_invoke$arity$2 ? pred__20636.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__20637) : pred__20636.call(null,cljs.core.constant$keyword$231,expr__20637))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$211,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20685){var state_val_20686 = (state_20685[1]);if((state_val_20686 === 7))
{var inst_20674 = (state_20685[2]);var inst_20675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20674,0,null);var inst_20676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20674,1,null);var inst_20677 = clustermap.app.handle_event(inst_20675,inst_20676);var state_20685__$1 = (function (){var statearr_20687 = state_20685;(statearr_20687[7] = inst_20677);
return statearr_20687;
})();var statearr_20688_20701 = state_20685__$1;(statearr_20688_20701[2] = null);
(statearr_20688_20701[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20686 === 6))
{var inst_20681 = (state_20685[2]);var state_20685__$1 = state_20685;var statearr_20689_20702 = state_20685__$1;(statearr_20689_20702[2] = inst_20681);
(statearr_20689_20702[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20686 === 5))
{var state_20685__$1 = state_20685;var statearr_20690_20703 = state_20685__$1;(statearr_20690_20703[2] = null);
(statearr_20690_20703[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20686 === 4))
{var state_20685__$1 = state_20685;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20685__$1,7,comm);
} else
{if((state_val_20686 === 3))
{var inst_20683 = (state_20685[2]);var state_20685__$1 = state_20685;return cljs.core.async.impl.ioc_helpers.return_chan(state_20685__$1,inst_20683);
} else
{if((state_val_20686 === 2))
{var state_20685__$1 = state_20685;if(true)
{var statearr_20691_20704 = state_20685__$1;(statearr_20691_20704[1] = 4);
} else
{var statearr_20692_20705 = state_20685__$1;(statearr_20692_20705[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20686 === 1))
{var state_20685__$1 = state_20685;var statearr_20693_20706 = state_20685__$1;(statearr_20693_20706[2] = null);
(statearr_20693_20706[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_20697 = [null,null,null,null,null,null,null,null];(statearr_20697[0] = state_machine__5507__auto__);
(statearr_20697[1] = 1);
return statearr_20697;
});
var state_machine__5507__auto____1 = (function (state_20685){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20685);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20698){if((e20698 instanceof Object))
{var ex__5510__auto__ = e20698;var statearr_20699_20707 = state_20685;(statearr_20699_20707[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20685);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20708 = state_20685;
state_20685 = G__20708;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20685){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20700 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
