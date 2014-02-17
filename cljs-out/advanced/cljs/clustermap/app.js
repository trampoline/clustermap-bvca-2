// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.routes');
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
goog.require('clustermap.routes');
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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$379,cljs.core.constant$keyword$313,cljs.core.constant$keyword$366,cljs.core.constant$keyword$306,cljs.core.constant$keyword$413,cljs.core.constant$keyword$376,cljs.core.constant$keyword$301,cljs.core.constant$keyword$377,cljs.core.constant$keyword$412,cljs.core.constant$keyword$419,cljs.core.constant$keyword$390,cljs.core.constant$keyword$314,cljs.core.constant$keyword$414,cljs.core.constant$keyword$420],[cljs.core.constant$keyword$416,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21803){var vec__21804 = p__21803;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21804,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21804,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21805){var map__21807 = p__21805;var map__21807__$1 = ((cljs.core.seq_QMARK_(map__21807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21807):map__21807);var path_values = map__21807__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21805 = null;if (arguments.length > 0) {
  p__21805 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21805);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21808){
var p__21805 = cljs.core.seq(arglist__21808);
return set_state__delegate(p__21805);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21828){var state_val_21829 = (state_21828[1]);if((state_val_21829 === 2))
{var inst_21825 = (state_21828[2]);var inst_21826 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$413,inst_21825], 0));var state_21828__$1 = state_21828;return cljs.core.async.impl.ioc_helpers.return_chan(state_21828__$1,inst_21826);
} else
{if((state_val_21829 === 1))
{var inst_21823 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$248,true], 0));var state_21828__$1 = state_21828;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21828__$1,2,inst_21823);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21833 = [null,null,null,null,null,null,null];(statearr_21833[0] = state_machine__5507__auto__);
(statearr_21833[1] = 1);
return statearr_21833;
});
var state_machine__5507__auto____1 = (function (state_21828){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21828);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21834){if((e21834 instanceof Object))
{var ex__5510__auto__ = e21834;var statearr_21835_21837 = state_21828;(statearr_21835_21837[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21828);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e21834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__21838 = state_21828;
state_21828 = G__21838;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21828){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21836 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21858){var state_val_21859 = (state_21858[1]);if((state_val_21859 === 2))
{var inst_21855 = (state_21858[2]);var inst_21856 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$314,inst_21855], 0));var state_21858__$1 = state_21858;return cljs.core.async.impl.ioc_helpers.return_chan(state_21858__$1,inst_21856);
} else
{if((state_val_21859 === 1))
{var inst_21853 = clustermap.api.portfolio_company_site_stats();var state_21858__$1 = state_21858;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21858__$1,2,inst_21853);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21863 = [null,null,null,null,null,null,null];(statearr_21863[0] = state_machine__5507__auto__);
(statearr_21863[1] = 1);
return statearr_21863;
});
var state_machine__5507__auto____1 = (function (state_21858){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21858);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21864){if((e21864 instanceof Object))
{var ex__5510__auto__ = e21864;var statearr_21865_21867 = state_21858;(statearr_21865_21867[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21858);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e21864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__21868 = state_21858;
state_21858 = G__21868;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21858){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21866 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$390,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21869,type){var vec__21871 = p__21869;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21871,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21871,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21871,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21871,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21871,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21871,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21871,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,type,cljs.core.constant$keyword$228,selection], null),cljs.core.constant$keyword$420,selection_portfolio_company_stats,cljs.core.constant$keyword$419,selection_portfolio_companies,cljs.core.constant$keyword$313,selection_portfolio_company_site_stats,cljs.core.constant$keyword$377,selection_portfolio_company_sites,cljs.core.constant$keyword$366,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$412,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21872){var vec__21877 = p__21872;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21877,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21877,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$376,selector], 0));
var pred__21878 = cljs.core._EQ_;var expr__21879 = type;if(cljs.core.truth_((pred__21878.cljs$core$IFn$_invoke$arity$2 ? pred__21878.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__21879) : pred__21878.call(null,cljs.core.constant$keyword$296,expr__21879))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21878.cljs$core$IFn$_invoke$arity$2 ? pred__21878.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__21879) : pred__21878.call(null,cljs.core.constant$keyword$297,expr__21879))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21878.cljs$core$IFn$_invoke$arity$2 ? pred__21878.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__21879) : pred__21878.call(null,cljs.core.constant$keyword$298,expr__21879))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$379.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$379,view__$1], 0));
} else
{return null;
}
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21882 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21882,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21882,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21882,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21882,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$379,view,cljs.core.constant$keyword$263,type,cljs.core.constant$keyword$259,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21883){var vec__21886 = p__21883;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21886,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21886,1,null);var map__21887 = clustermap.app.parse_route();var map__21887__$1 = ((cljs.core.seq_QMARK_(map__21887))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21887):map__21887);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21887__$1,cljs.core.constant$keyword$379);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21889 = clustermap.app.parse_route();var map__21889__$1 = ((cljs.core.seq_QMARK_(map__21889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21889):map__21889);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$259);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$263);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$387,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$279,clustermap.app.set_selection_route,cljs.core.constant$keyword$421,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$300,clustermap.app.set_view_route,cljs.core.constant$keyword$422,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21893 = params__9259__auto__;var map__21893__$1 = ((cljs.core.seq_QMARK_(map__21893))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21893):map__21893);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$421,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21894 = params__9259__auto__;var map__21894__$1 = ((cljs.core.seq_QMARK_(map__21894))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21894):map__21894);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21894__$1,cljs.core.constant$keyword$379);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$422,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$421,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21895 = params__9259__auto__;var map__21895__$1 = ((cljs.core.seq_QMARK_(map__21895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21895):map__21895);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21895__$1,cljs.core.constant$keyword$259);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21895__$1,cljs.core.constant$keyword$263);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21895__$1,cljs.core.constant$keyword$379);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$422,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$299,comm,cljs.core.constant$keyword$302,path_fn,cljs.core.constant$keyword$303,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21942){var state_val_21943 = (state_21942[1]);if((state_val_21943 === 7))
{var inst_21931 = (state_21942[2]);var inst_21932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21931,0,null);var inst_21933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21931,1,null);var inst_21934 = clustermap.app.handle_event(inst_21932,inst_21933);var state_21942__$1 = (function (){var statearr_21944 = state_21942;(statearr_21944[7] = inst_21934);
return statearr_21944;
})();var statearr_21945_21958 = state_21942__$1;(statearr_21945_21958[2] = null);
(statearr_21945_21958[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_21943 === 6))
{var inst_21938 = (state_21942[2]);var state_21942__$1 = state_21942;var statearr_21946_21959 = state_21942__$1;(statearr_21946_21959[2] = inst_21938);
(statearr_21946_21959[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_21943 === 5))
{var state_21942__$1 = state_21942;var statearr_21947_21960 = state_21942__$1;(statearr_21947_21960[2] = null);
(statearr_21947_21960[1] = 6);
return cljs.core.constant$keyword$234;
} else
{if((state_val_21943 === 4))
{var state_21942__$1 = state_21942;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21942__$1,7,comm);
} else
{if((state_val_21943 === 3))
{var inst_21940 = (state_21942[2]);var state_21942__$1 = state_21942;return cljs.core.async.impl.ioc_helpers.return_chan(state_21942__$1,inst_21940);
} else
{if((state_val_21943 === 2))
{var state_21942__$1 = state_21942;if(true)
{var statearr_21948_21961 = state_21942__$1;(statearr_21948_21961[1] = 4);
} else
{var statearr_21949_21962 = state_21942__$1;(statearr_21949_21962[1] = 5);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_21943 === 1))
{var state_21942__$1 = state_21942;var statearr_21950_21963 = state_21942__$1;(statearr_21950_21963[2] = null);
(statearr_21950_21963[1] = 2);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_21954 = [null,null,null,null,null,null,null,null];(statearr_21954[0] = state_machine__5507__auto__);
(statearr_21954[1] = 1);
return statearr_21954;
});
var state_machine__5507__auto____1 = (function (state_21942){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21942);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21955){if((e21955 instanceof Object))
{var ex__5510__auto__ = e21955;var statearr_21956_21964 = state_21942;(statearr_21956_21964[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21942);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e21955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__21965 = state_21942;
state_21942 = G__21965;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21942){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21957 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
