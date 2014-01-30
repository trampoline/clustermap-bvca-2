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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$267,cljs.core.constant$keyword$314,cljs.core.constant$keyword$344,cljs.core.constant$keyword$269,cljs.core.constant$keyword$348,cljs.core.constant$keyword$264,cljs.core.constant$keyword$324,cljs.core.constant$keyword$345,cljs.core.constant$keyword$329,cljs.core.constant$keyword$268],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21099){var vec__21100 = p__21099;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21100,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21100,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21101){var map__21103 = p__21101;var map__21103__$1 = ((cljs.core.seq_QMARK_(map__21103))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21103):map__21103);var path_values = map__21103__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21101 = null;if (arguments.length > 0) {
  p__21101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21101);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21104){
var p__21101 = cljs.core.seq(arglist__21104);
return set_state__delegate(p__21101);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21124){var state_val_21125 = (state_21124[1]);if((state_val_21125 === 2))
{var inst_21121 = (state_21124[2]);var inst_21122 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$269,inst_21121], 0));var state_21124__$1 = state_21124;return cljs.core.async.impl.ioc_helpers.return_chan(state_21124__$1,inst_21122);
} else
{if((state_val_21125 === 1))
{var inst_21119 = clustermap.api.portfolio_company_stats();var state_21124__$1 = state_21124;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21124__$1,2,inst_21119);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21129 = [null,null,null,null,null,null,null];(statearr_21129[0] = state_machine__5507__auto__);
(statearr_21129[1] = 1);
return statearr_21129;
});
var state_machine__5507__auto____1 = (function (state_21124){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21124);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21130){if((e21130 instanceof Object))
{var ex__5510__auto__ = e21130;var statearr_21131_21133 = state_21124;(statearr_21131_21133[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21124);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e21130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__21134 = state_21124;
state_21124 = G__21134;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21124){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21132 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21154){var state_val_21155 = (state_21154[1]);if((state_val_21155 === 2))
{var inst_21151 = (state_21154[2]);var inst_21152 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$344,inst_21151], 0));var state_21154__$1 = state_21154;return cljs.core.async.impl.ioc_helpers.return_chan(state_21154__$1,inst_21152);
} else
{if((state_val_21155 === 1))
{var inst_21149 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$214,true], 0));var state_21154__$1 = state_21154;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21154__$1,2,inst_21149);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21159 = [null,null,null,null,null,null,null];(statearr_21159[0] = state_machine__5507__auto__);
(statearr_21159[1] = 1);
return statearr_21159;
});
var state_machine__5507__auto____1 = (function (state_21154){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21154);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21160){if((e21160 instanceof Object))
{var ex__5510__auto__ = e21160;var statearr_21161_21163 = state_21154;(statearr_21161_21163[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21154);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e21160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__21164 = state_21154;
state_21154 = G__21164;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21154){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21162 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$329,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21165,type){var vec__21167 = p__21165;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,type,cljs.core.constant$keyword$194,selection], null),cljs.core.constant$keyword$268,selection_portfolio_company_stats,cljs.core.constant$keyword$267,selection_portfolio_company_site_stats,cljs.core.constant$keyword$324,selection_portfolio_company_sites,cljs.core.constant$keyword$314,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$345,selection_portfolio_company_locations], 0));
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__21171 = cljs.core._EQ_;var expr__21172 = type;if(cljs.core.truth_((pred__21171.cljs$core$IFn$_invoke$arity$2 ? pred__21171.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21172) : pred__21171.call(null,cljs.core.constant$keyword$259,expr__21172))))
{return cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21171.cljs$core$IFn$_invoke$arity$2 ? pred__21171.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21172) : pred__21171.call(null,cljs.core.constant$keyword$260,expr__21172))))
{return cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21171.cljs$core$IFn$_invoke$arity$2 ? pred__21171.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21172) : pred__21171.call(null,cljs.core.constant$keyword$261,expr__21172))))
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
clustermap.app.make_selection = (function make_selection(p__21174){var vec__21179 = p__21174;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21179,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21179,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$348,selector], 0));
var pred__21180 = cljs.core._EQ_;var expr__21181 = type;if(cljs.core.truth_((pred__21180.cljs$core$IFn$_invoke$arity$2 ? pred__21180.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21181) : pred__21180.call(null,cljs.core.constant$keyword$259,expr__21181))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21180.cljs$core$IFn$_invoke$arity$2 ? pred__21180.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21181) : pred__21180.call(null,cljs.core.constant$keyword$260,expr__21181))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21180.cljs$core$IFn$_invoke$arity$2 ? pred__21180.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21181) : pred__21180.call(null,cljs.core.constant$keyword$261,expr__21181))))
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
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3394__auto__ = view;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = type;if(cljs.core.truth_(and__3394__auto____$1))
{return id;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name(view)),cljs.core.str("/"),cljs.core.str(cljs.core.name(type)),cljs.core.str("/"),cljs.core.str(cljs.core.name(id))].join(''));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21184 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21184,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21184,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21184,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21184,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$352,view,cljs.core.constant$keyword$224,type,cljs.core.constant$keyword$221,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21185){var vec__21188 = p__21185;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21188,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21188,1,null);var map__21189 = clustermap.app.parse_route();var map__21189__$1 = ((cljs.core.seq_QMARK_(map__21189))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21189):map__21189);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21189__$1,cljs.core.constant$keyword$352);return clustermap.app.set_route(view,type,clustermap.app.extract_id(type,val));
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21191 = clustermap.app.parse_route();var map__21191__$1 = ((cljs.core.seq_QMARK_(map__21191))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21191):map__21191);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.constant$keyword$221);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.constant$keyword$224);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$328,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$241,clustermap.app.set_selection_route,cljs.core.constant$keyword$353,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$263,clustermap.app.set_view_route,cljs.core.constant$keyword$354,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.put_route_commands = (function put_route_commands(comm,new_view,new_type,new_id){if(cljs.core.truth_(new_view))
{cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$354,new_view], null));
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = new_type;if(cljs.core.truth_(and__3394__auto__))
{return new_id;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_type),new_id], null)], null));
} else
{return null;
}
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9246__auto__){var map__21195 = params__9246__auto__;var map__21195__$1 = ((cljs.core.seq_QMARK_(map__21195))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21195):map__21195);return clustermap.app.put_route_commands(comm,null,null,null);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9246__auto__){var map__21196 = params__9246__auto__;var map__21196__$1 = ((cljs.core.seq_QMARK_(map__21196))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21196):map__21196);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21196__$1,cljs.core.constant$keyword$352);return clustermap.app.put_route_commands(comm,view,null,null);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9246__auto__){var map__21197 = params__9246__auto__;var map__21197__$1 = ((cljs.core.seq_QMARK_(map__21197))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21197):map__21197);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.constant$keyword$221);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.constant$keyword$224);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,cljs.core.constant$keyword$352);return clustermap.app.put_route_commands(comm,view,type,id);
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$353,null], null));
clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21244){var state_val_21245 = (state_21244[1]);if((state_val_21245 === 7))
{var inst_21233 = (state_21244[2]);var inst_21234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21233,0,null);var inst_21235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21233,1,null);var inst_21236 = clustermap.app.handle_event(inst_21234,inst_21235);var state_21244__$1 = (function (){var statearr_21246 = state_21244;(statearr_21246[7] = inst_21236);
return statearr_21246;
})();var statearr_21247_21260 = state_21244__$1;(statearr_21247_21260[2] = null);
(statearr_21247_21260[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21245 === 6))
{var inst_21240 = (state_21244[2]);var state_21244__$1 = state_21244;var statearr_21248_21261 = state_21244__$1;(statearr_21248_21261[2] = inst_21240);
(statearr_21248_21261[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21245 === 5))
{var state_21244__$1 = state_21244;var statearr_21249_21262 = state_21244__$1;(statearr_21249_21262[2] = null);
(statearr_21249_21262[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21245 === 4))
{var state_21244__$1 = state_21244;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21244__$1,7,comm);
} else
{if((state_val_21245 === 3))
{var inst_21242 = (state_21244[2]);var state_21244__$1 = state_21244;return cljs.core.async.impl.ioc_helpers.return_chan(state_21244__$1,inst_21242);
} else
{if((state_val_21245 === 2))
{var state_21244__$1 = state_21244;if(true)
{var statearr_21250_21263 = state_21244__$1;(statearr_21250_21263[1] = 4);
} else
{var statearr_21251_21264 = state_21244__$1;(statearr_21251_21264[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_21245 === 1))
{var state_21244__$1 = state_21244;var statearr_21252_21265 = state_21244__$1;(statearr_21252_21265[2] = null);
(statearr_21252_21265[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_21256 = [null,null,null,null,null,null,null,null];(statearr_21256[0] = state_machine__5507__auto__);
(statearr_21256[1] = 1);
return statearr_21256;
});
var state_machine__5507__auto____1 = (function (state_21244){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21244);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21257){if((e21257 instanceof Object))
{var ex__5510__auto__ = e21257;var statearr_21258_21266 = state_21244;(statearr_21258_21266[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21244);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e21257;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__21267 = state_21244;
state_21244 = G__21267;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21244){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21259 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
