// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('goog.History');
goog.require('clustermap.nav');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('goog.events');
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
goog.require('clustermap.nav');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('goog.events');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$267,cljs.core.constant$keyword$314,cljs.core.constant$keyword$344,cljs.core.constant$keyword$269,cljs.core.constant$keyword$348,cljs.core.constant$keyword$264,cljs.core.constant$keyword$324,cljs.core.constant$keyword$347,cljs.core.constant$keyword$329,cljs.core.constant$keyword$268],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21105){var vec__21106 = p__21105;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21106,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21106,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21107){var map__21109 = p__21107;var map__21109__$1 = ((cljs.core.seq_QMARK_(map__21109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21109):map__21109);var path_values = map__21109__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21107 = null;if (arguments.length > 0) {
  p__21107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21107);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21110){
var p__21107 = cljs.core.seq(arglist__21110);
return set_state__delegate(p__21107);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21130){var state_val_21131 = (state_21130[1]);if((state_val_21131 === 2))
{var inst_21127 = (state_21130[2]);var inst_21128 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$269,inst_21127], 0));var state_21130__$1 = state_21130;return cljs.core.async.impl.ioc_helpers.return_chan(state_21130__$1,inst_21128);
} else
{if((state_val_21131 === 1))
{var inst_21125 = clustermap.api.portfolio_company_stats();var state_21130__$1 = state_21130;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21130__$1,2,inst_21125);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21135 = [null,null,null,null,null,null,null];(statearr_21135[0] = state_machine__5507__auto__);
(statearr_21135[1] = 1);
return statearr_21135;
});
var state_machine__5507__auto____1 = (function (state_21130){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21130);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21136){if((e21136 instanceof Object))
{var ex__5510__auto__ = e21136;var statearr_21137_21139 = state_21130;(statearr_21137_21139[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21130);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e21136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__21140 = state_21130;
state_21130 = G__21140;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21138 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21160){var state_val_21161 = (state_21160[1]);if((state_val_21161 === 2))
{var inst_21157 = (state_21160[2]);var inst_21158 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$344,inst_21157], 0));var state_21160__$1 = state_21160;return cljs.core.async.impl.ioc_helpers.return_chan(state_21160__$1,inst_21158);
} else
{if((state_val_21161 === 1))
{var inst_21155 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$214,true], 0));var state_21160__$1 = state_21160;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21160__$1,2,inst_21155);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21165 = [null,null,null,null,null,null,null];(statearr_21165[0] = state_machine__5507__auto__);
(statearr_21165[1] = 1);
return statearr_21165;
});
var state_machine__5507__auto____1 = (function (state_21160){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21160);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21166){if((e21166 instanceof Object))
{var ex__5510__auto__ = e21166;var statearr_21167_21169 = state_21160;(statearr_21167_21169[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21160);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e21166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__21170 = state_21160;
state_21160 = G__21170;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21160){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21168 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$329,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21171,type){var vec__21173 = p__21171;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21173,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21173,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21173,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21173,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21173,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21173,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,type,cljs.core.constant$keyword$194,selection], null),cljs.core.constant$keyword$268,selection_portfolio_company_stats,cljs.core.constant$keyword$267,selection_portfolio_company_site_stats,cljs.core.constant$keyword$324,selection_portfolio_company_sites,cljs.core.constant$keyword$314,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$347,selection_portfolio_company_locations], 0));
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__21177 = cljs.core._EQ_;var expr__21178 = type;if(cljs.core.truth_((pred__21177.cljs$core$IFn$_invoke$arity$2 ? pred__21177.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21178) : pred__21177.call(null,cljs.core.constant$keyword$259,expr__21178))))
{return cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21177.cljs$core$IFn$_invoke$arity$2 ? pred__21177.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21178) : pred__21177.call(null,cljs.core.constant$keyword$260,expr__21178))))
{return cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21177.cljs$core$IFn$_invoke$arity$2 ? pred__21177.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21178) : pred__21177.call(null,cljs.core.constant$keyword$261,expr__21178))))
{return cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(obj);
} else
{return null;
}
}
}
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21180){var vec__21185 = p__21180;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21185,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21185,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$348,selector], 0));
var pred__21186 = cljs.core._EQ_;var expr__21187 = type;if(cljs.core.truth_((pred__21186.cljs$core$IFn$_invoke$arity$2 ? pred__21186.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21187) : pred__21186.call(null,cljs.core.constant$keyword$259,expr__21187))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21186.cljs$core$IFn$_invoke$arity$2 ? pred__21186.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21187) : pred__21186.call(null,cljs.core.constant$keyword$260,expr__21187))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21186.cljs$core$IFn$_invoke$arity$2 ? pred__21186.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21187) : pred__21186.call(null,cljs.core.constant$keyword$261,expr__21187))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){return clustermap.nav.change_view(cljs.core.name(view));
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3394__auto__ = type;if(cljs.core.truth_(and__3394__auto__))
{return id;
} else
{return and__3394__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name((function (){var or__3406__auto__ = view;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "map";
}
})())),cljs.core.str("/"),cljs.core.str(cljs.core.name(type)),cljs.core.str("/"),cljs.core.str(cljs.core.name(id))].join(''));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name(view))].join(''));
} else
{if(true)
{return clustermap.app.history.setToken([cljs.core.str("")].join(''));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21190 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$352,view,cljs.core.constant$keyword$224,type,cljs.core.constant$keyword$221,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21191){var vec__21194 = p__21191;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21194,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21194,1,null);var map__21195 = clustermap.app.parse_route();var map__21195__$1 = ((cljs.core.seq_QMARK_(map__21195))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21195):map__21195);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21195__$1,cljs.core.constant$keyword$352);var id = clustermap.app.extract_id(type,val);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21197 = clustermap.app.parse_route();var map__21197__$1 = ((cljs.core.seq_QMARK_(map__21197))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21197):map__21197);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.constant$keyword$221);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.constant$keyword$224);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$328,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$241,clustermap.app.set_selection_route,cljs.core.constant$keyword$353,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$263,clustermap.app.set_view_route,cljs.core.constant$keyword$354,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9246__auto__){var map__21201 = params__9246__auto__;var map__21201__$1 = ((cljs.core.seq_QMARK_(map__21201))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21201):map__21201);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$353,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9246__auto__){var map__21202 = params__9246__auto__;var map__21202__$1 = ((cljs.core.seq_QMARK_(map__21202))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21202):map__21202);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,cljs.core.constant$keyword$352);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$354,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$353,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9246__auto__){var map__21203 = params__9246__auto__;var map__21203__$1 = ((cljs.core.seq_QMARK_(map__21203))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21203):map__21203);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21203__$1,cljs.core.constant$keyword$221);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21203__$1,cljs.core.constant$keyword$224);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21203__$1,cljs.core.constant$keyword$352);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$354,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21250){var state_val_21251 = (state_21250[1]);if((state_val_21251 === 7))
{var inst_21239 = (state_21250[2]);var inst_21240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21239,0,null);var inst_21241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21239,1,null);var inst_21242 = clustermap.app.handle_event(inst_21240,inst_21241);var state_21250__$1 = (function (){var statearr_21252 = state_21250;(statearr_21252[7] = inst_21242);
return statearr_21252;
})();var statearr_21253_21266 = state_21250__$1;(statearr_21253_21266[2] = null);
(statearr_21253_21266[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21251 === 6))
{var inst_21246 = (state_21250[2]);var state_21250__$1 = state_21250;var statearr_21254_21267 = state_21250__$1;(statearr_21254_21267[2] = inst_21246);
(statearr_21254_21267[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21251 === 5))
{var state_21250__$1 = state_21250;var statearr_21255_21268 = state_21250__$1;(statearr_21255_21268[2] = null);
(statearr_21255_21268[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21251 === 4))
{var state_21250__$1 = state_21250;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21250__$1,7,comm);
} else
{if((state_val_21251 === 3))
{var inst_21248 = (state_21250[2]);var state_21250__$1 = state_21250;return cljs.core.async.impl.ioc_helpers.return_chan(state_21250__$1,inst_21248);
} else
{if((state_val_21251 === 2))
{var state_21250__$1 = state_21250;if(true)
{var statearr_21256_21269 = state_21250__$1;(statearr_21256_21269[1] = 4);
} else
{var statearr_21257_21270 = state_21250__$1;(statearr_21257_21270[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_21251 === 1))
{var state_21250__$1 = state_21250;var statearr_21258_21271 = state_21250__$1;(statearr_21258_21271[2] = null);
(statearr_21258_21271[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_21262 = [null,null,null,null,null,null,null,null];(statearr_21262[0] = state_machine__5507__auto__);
(statearr_21262[1] = 1);
return statearr_21262;
});
var state_machine__5507__auto____1 = (function (state_21250){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21250);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21263){if((e21263 instanceof Object))
{var ex__5510__auto__ = e21263;var statearr_21264_21272 = state_21250;(statearr_21264_21272[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21250);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e21263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__21273 = state_21250;
state_21250 = G__21273;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21250){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21265 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
