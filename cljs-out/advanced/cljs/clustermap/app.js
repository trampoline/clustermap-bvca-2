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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__20564){var vec__20565 = p__20564;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20565,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20565,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__20566){var map__20568 = p__20566;var map__20568__$1 = ((cljs.core.seq_QMARK_(map__20568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20568):map__20568);var path_values = map__20568__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return clustermap.app.new_state(s,path_values);
}));
};
var set_state = function (var_args){
var p__20566 = null;if (arguments.length > 0) {
  p__20566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__20566);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__20569){
var p__20566 = cljs.core.seq(arglist__20569);
return set_state__delegate(p__20566);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20589){var state_val_20590 = (state_20589[1]);if((state_val_20590 === 2))
{var inst_20586 = (state_20589[2]);var inst_20587 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$236,inst_20586], 0));var state_20589__$1 = state_20589;return cljs.core.async.impl.ioc_helpers.return_chan(state_20589__$1,inst_20587);
} else
{if((state_val_20590 === 1))
{var inst_20584 = clustermap.api.portfolio_company_stats();var state_20589__$1 = state_20589;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20589__$1,2,inst_20584);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20594 = [null,null,null,null,null,null,null];(statearr_20594[0] = state_machine__5507__auto__);
(statearr_20594[1] = 1);
return statearr_20594;
});
var state_machine__5507__auto____1 = (function (state_20589){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20589);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20595){if((e20595 instanceof Object))
{var ex__5510__auto__ = e20595;var statearr_20596_20598 = state_20589;(statearr_20596_20598[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20589);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20599 = state_20589;
state_20589 = G__20599;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20589){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20597 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20619){var state_val_20620 = (state_20619[1]);if((state_val_20620 === 2))
{var inst_20616 = (state_20619[2]);var inst_20617 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$287,inst_20616], 0));var state_20619__$1 = state_20619;return cljs.core.async.impl.ioc_helpers.return_chan(state_20619__$1,inst_20617);
} else
{if((state_val_20620 === 1))
{var inst_20614 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$184,true], 0));var state_20619__$1 = state_20619;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20619__$1,2,inst_20614);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20624 = [null,null,null,null,null,null,null];(statearr_20624[0] = state_machine__5507__auto__);
(statearr_20624[1] = 1);
return statearr_20624;
});
var state_machine__5507__auto____1 = (function (state_20619){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20619);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20625){if((e20625 instanceof Object))
{var ex__5510__auto__ = e20625;var statearr_20626_20628 = state_20619;(statearr_20626_20628[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20619);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20629 = state_20619;
state_20619 = G__20629;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20619){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20627 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$271,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__20630,type){var vec__20632 = p__20630;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,2,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,3,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,type,cljs.core.constant$keyword$164,selection], null),cljs.core.constant$keyword$235,selection_portfolio_company_stats,cljs.core.constant$keyword$265,selection_portfolio_company_sites,cljs.core.constant$keyword$288,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20633){var vec__20641 = p__20633;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,1,null);var id = (function (){var pred__20642 = cljs.core._EQ_;var expr__20643 = type;if(cljs.core.truth_((pred__20642.cljs$core$IFn$_invoke$arity$2 ? pred__20642.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__20643) : pred__20642.call(null,cljs.core.constant$keyword$229,expr__20643))))
{return cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20642.cljs$core$IFn$_invoke$arity$2 ? pred__20642.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20643) : pred__20642.call(null,cljs.core.constant$keyword$230,expr__20643))))
{return cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20642.cljs$core$IFn$_invoke$arity$2 ? pred__20642.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__20643) : pred__20642.call(null,cljs.core.constant$keyword$231,expr__20643))))
{return cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20643)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$291,selector], 0));
var pred__20645 = cljs.core._EQ_;var expr__20646 = type;if(cljs.core.truth_((pred__20645.cljs$core$IFn$_invoke$arity$2 ? pred__20645.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__20646) : pred__20645.call(null,cljs.core.constant$keyword$229,expr__20646))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20645.cljs$core$IFn$_invoke$arity$2 ? pred__20645.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20646) : pred__20645.call(null,cljs.core.constant$keyword$230,expr__20646))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20645.cljs$core$IFn$_invoke$arity$2 ? pred__20645.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__20646) : pred__20645.call(null,cljs.core.constant$keyword$231,expr__20646))))
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20694){var state_val_20695 = (state_20694[1]);if((state_val_20695 === 7))
{var inst_20683 = (state_20694[2]);var inst_20684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20683,0,null);var inst_20685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20683,1,null);var inst_20686 = clustermap.app.handle_event(inst_20684,inst_20685);var state_20694__$1 = (function (){var statearr_20696 = state_20694;(statearr_20696[7] = inst_20686);
return statearr_20696;
})();var statearr_20697_20710 = state_20694__$1;(statearr_20697_20710[2] = null);
(statearr_20697_20710[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20695 === 6))
{var inst_20690 = (state_20694[2]);var state_20694__$1 = state_20694;var statearr_20698_20711 = state_20694__$1;(statearr_20698_20711[2] = inst_20690);
(statearr_20698_20711[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20695 === 5))
{var state_20694__$1 = state_20694;var statearr_20699_20712 = state_20694__$1;(statearr_20699_20712[2] = null);
(statearr_20699_20712[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20695 === 4))
{var state_20694__$1 = state_20694;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20694__$1,7,comm);
} else
{if((state_val_20695 === 3))
{var inst_20692 = (state_20694[2]);var state_20694__$1 = state_20694;return cljs.core.async.impl.ioc_helpers.return_chan(state_20694__$1,inst_20692);
} else
{if((state_val_20695 === 2))
{var state_20694__$1 = state_20694;if(true)
{var statearr_20700_20713 = state_20694__$1;(statearr_20700_20713[1] = 4);
} else
{var statearr_20701_20714 = state_20694__$1;(statearr_20701_20714[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20695 === 1))
{var state_20694__$1 = state_20694;var statearr_20702_20715 = state_20694__$1;(statearr_20702_20715[2] = null);
(statearr_20702_20715[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_20706 = [null,null,null,null,null,null,null,null];(statearr_20706[0] = state_machine__5507__auto__);
(statearr_20706[1] = 1);
return statearr_20706;
});
var state_machine__5507__auto____1 = (function (state_20694){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20694);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20707){if((e20707 instanceof Object))
{var ex__5510__auto__ = e20707;var statearr_20708_20716 = state_20694;(statearr_20708_20716[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20694);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20717 = state_20694;
state_20694 = G__20717;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20694){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20709 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
