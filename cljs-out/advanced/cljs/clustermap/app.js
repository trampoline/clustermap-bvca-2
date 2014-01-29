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
goog.require('secretary.core');
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
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$259,cljs.core.constant$keyword$305,cljs.core.constant$keyword$335,cljs.core.constant$keyword$261,cljs.core.constant$keyword$339,cljs.core.constant$keyword$256,cljs.core.constant$keyword$315,cljs.core.constant$keyword$336,cljs.core.constant$keyword$321,cljs.core.constant$keyword$260],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__20759){var vec__20760 = p__20759;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20760,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20760,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__20761){var map__20763 = p__20761;var map__20763__$1 = ((cljs.core.seq_QMARK_(map__20763))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20763):map__20763);var path_values = map__20763__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return clustermap.app.new_state(s,path_values);
}));
};
var set_state = function (var_args){
var p__20761 = null;if (arguments.length > 0) {
  p__20761 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__20761);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__20764){
var p__20761 = cljs.core.seq(arglist__20764);
return set_state__delegate(p__20761);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20784){var state_val_20785 = (state_20784[1]);if((state_val_20785 === 2))
{var inst_20781 = (state_20784[2]);var inst_20782 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$261,inst_20781], 0));var state_20784__$1 = state_20784;return cljs.core.async.impl.ioc_helpers.return_chan(state_20784__$1,inst_20782);
} else
{if((state_val_20785 === 1))
{var inst_20779 = clustermap.api.portfolio_company_stats();var state_20784__$1 = state_20784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20784__$1,2,inst_20779);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20789 = [null,null,null,null,null,null,null];(statearr_20789[0] = state_machine__5507__auto__);
(statearr_20789[1] = 1);
return statearr_20789;
});
var state_machine__5507__auto____1 = (function (state_20784){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20784);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20790){if((e20790 instanceof Object))
{var ex__5510__auto__ = e20790;var statearr_20791_20793 = state_20784;(statearr_20791_20793[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20784);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e20790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__20794 = state_20784;
state_20784 = G__20794;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20784){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20792 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20814){var state_val_20815 = (state_20814[1]);if((state_val_20815 === 2))
{var inst_20811 = (state_20814[2]);var inst_20812 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$335,inst_20811], 0));var state_20814__$1 = state_20814;return cljs.core.async.impl.ioc_helpers.return_chan(state_20814__$1,inst_20812);
} else
{if((state_val_20815 === 1))
{var inst_20809 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$208,true], 0));var state_20814__$1 = state_20814;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20814__$1,2,inst_20809);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20819 = [null,null,null,null,null,null,null];(statearr_20819[0] = state_machine__5507__auto__);
(statearr_20819[1] = 1);
return statearr_20819;
});
var state_machine__5507__auto____1 = (function (state_20814){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20814);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20820){if((e20820 instanceof Object))
{var ex__5510__auto__ = e20820;var statearr_20821_20823 = state_20814;(statearr_20821_20823[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20814);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e20820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__20824 = state_20814;
state_20814 = G__20824;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20814){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20822 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$321,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__20825,type){var vec__20827 = p__20825;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20827,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20827,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20827,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20827,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20827,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20827,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,type,cljs.core.constant$keyword$188,selection], null),cljs.core.constant$keyword$260,selection_portfolio_company_stats,cljs.core.constant$keyword$259,selection_portfolio_company_site_stats,cljs.core.constant$keyword$315,selection_portfolio_company_sites,cljs.core.constant$keyword$305,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$336,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20828){var vec__20836 = p__20828;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,1,null);var id = (function (){var pred__20837 = cljs.core._EQ_;var expr__20838 = type;if(cljs.core.truth_((pred__20837.cljs$core$IFn$_invoke$arity$2 ? pred__20837.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__20838) : pred__20837.call(null,cljs.core.constant$keyword$253,expr__20838))))
{return cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20837.cljs$core$IFn$_invoke$arity$2 ? pred__20837.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__20838) : pred__20837.call(null,cljs.core.constant$keyword$254,expr__20838))))
{return cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20837.cljs$core$IFn$_invoke$arity$2 ? pred__20837.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__20838) : pred__20837.call(null,cljs.core.constant$keyword$255,expr__20838))))
{return cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(val);
} else
{return null;
}
}
}
})();var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$339,selector], 0));
var pred__20840 = cljs.core._EQ_;var expr__20841 = type;if(cljs.core.truth_((pred__20840.cljs$core$IFn$_invoke$arity$2 ? pred__20840.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__20841) : pred__20840.call(null,cljs.core.constant$keyword$253,expr__20841))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20840.cljs$core$IFn$_invoke$arity$2 ? pred__20840.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__20841) : pred__20840.call(null,cljs.core.constant$keyword$254,expr__20841))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20840.cljs$core$IFn$_invoke$arity$2 ? pred__20840.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__20841) : pred__20840.call(null,cljs.core.constant$keyword$255,expr__20841))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$235,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init = (function init(){clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
clustermap.app.handle_event(cljs.core.constant$keyword$235,null);
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20889){var state_val_20890 = (state_20889[1]);if((state_val_20890 === 7))
{var inst_20878 = (state_20889[2]);var inst_20879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20878,0,null);var inst_20880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20878,1,null);var inst_20881 = clustermap.app.handle_event(inst_20879,inst_20880);var state_20889__$1 = (function (){var statearr_20891 = state_20889;(statearr_20891[7] = inst_20881);
return statearr_20891;
})();var statearr_20892_20905 = state_20889__$1;(statearr_20892_20905[2] = null);
(statearr_20892_20905[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_20890 === 6))
{var inst_20885 = (state_20889[2]);var state_20889__$1 = state_20889;var statearr_20893_20906 = state_20889__$1;(statearr_20893_20906[2] = inst_20885);
(statearr_20893_20906[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_20890 === 5))
{var state_20889__$1 = state_20889;var statearr_20894_20907 = state_20889__$1;(statearr_20894_20907[2] = null);
(statearr_20894_20907[1] = 6);
return cljs.core.constant$keyword$194;
} else
{if((state_val_20890 === 4))
{var state_20889__$1 = state_20889;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20889__$1,7,comm);
} else
{if((state_val_20890 === 3))
{var inst_20887 = (state_20889[2]);var state_20889__$1 = state_20889;return cljs.core.async.impl.ioc_helpers.return_chan(state_20889__$1,inst_20887);
} else
{if((state_val_20890 === 2))
{var state_20889__$1 = state_20889;if(true)
{var statearr_20895_20908 = state_20889__$1;(statearr_20895_20908[1] = 4);
} else
{var statearr_20896_20909 = state_20889__$1;(statearr_20896_20909[1] = 5);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_20890 === 1))
{var state_20889__$1 = state_20889;var statearr_20897_20910 = state_20889__$1;(statearr_20897_20910[2] = null);
(statearr_20897_20910[1] = 2);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_20901 = [null,null,null,null,null,null,null,null];(statearr_20901[0] = state_machine__5507__auto__);
(statearr_20901[1] = 1);
return statearr_20901;
});
var state_machine__5507__auto____1 = (function (state_20889){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20889);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20902){if((e20902 instanceof Object))
{var ex__5510__auto__ = e20902;var statearr_20903_20911 = state_20889;(statearr_20903_20911[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20889);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e20902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__20912 = state_20889;
state_20889 = G__20912;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20889){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20904 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
