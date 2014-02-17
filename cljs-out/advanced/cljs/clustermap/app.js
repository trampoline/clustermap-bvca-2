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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$381,cljs.core.constant$keyword$315,cljs.core.constant$keyword$368,cljs.core.constant$keyword$308,cljs.core.constant$keyword$415,cljs.core.constant$keyword$378,cljs.core.constant$keyword$303,cljs.core.constant$keyword$379,cljs.core.constant$keyword$414,cljs.core.constant$keyword$421,cljs.core.constant$keyword$392,cljs.core.constant$keyword$316,cljs.core.constant$keyword$416,cljs.core.constant$keyword$422],[cljs.core.constant$keyword$418,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21839){var vec__21840 = p__21839;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21840,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21840,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21841){var map__21843 = p__21841;var map__21843__$1 = ((cljs.core.seq_QMARK_(map__21843))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21843):map__21843);var path_values = map__21843__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21841 = null;if (arguments.length > 0) {
  p__21841 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21841);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21844){
var p__21841 = cljs.core.seq(arglist__21844);
return set_state__delegate(p__21841);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21864){var state_val_21865 = (state_21864[1]);if((state_val_21865 === 2))
{var inst_21861 = (state_21864[2]);var inst_21862 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$415,inst_21861], 0));var state_21864__$1 = state_21864;return cljs.core.async.impl.ioc_helpers.return_chan(state_21864__$1,inst_21862);
} else
{if((state_val_21865 === 1))
{var inst_21859 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$249,true], 0));var state_21864__$1 = state_21864;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21864__$1,2,inst_21859);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21869 = [null,null,null,null,null,null,null];(statearr_21869[0] = state_machine__5507__auto__);
(statearr_21869[1] = 1);
return statearr_21869;
});
var state_machine__5507__auto____1 = (function (state_21864){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21864);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21870){if((e21870 instanceof Object))
{var ex__5510__auto__ = e21870;var statearr_21871_21873 = state_21864;(statearr_21871_21873[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21864);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e21870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__21874 = state_21864;
state_21864 = G__21874;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21864){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21872 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21894){var state_val_21895 = (state_21894[1]);if((state_val_21895 === 2))
{var inst_21891 = (state_21894[2]);var inst_21892 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$316,inst_21891], 0));var state_21894__$1 = state_21894;return cljs.core.async.impl.ioc_helpers.return_chan(state_21894__$1,inst_21892);
} else
{if((state_val_21895 === 1))
{var inst_21889 = clustermap.api.portfolio_company_site_stats();var state_21894__$1 = state_21894;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21894__$1,2,inst_21889);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21899 = [null,null,null,null,null,null,null];(statearr_21899[0] = state_machine__5507__auto__);
(statearr_21899[1] = 1);
return statearr_21899;
});
var state_machine__5507__auto____1 = (function (state_21894){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21894);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21900){if((e21900 instanceof Object))
{var ex__5510__auto__ = e21900;var statearr_21901_21903 = state_21894;(statearr_21901_21903[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21894);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e21900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__21904 = state_21894;
state_21894 = G__21904;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21894){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21902 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$392,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21905,type){var vec__21907 = p__21905;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,type,cljs.core.constant$keyword$229,selection], null),cljs.core.constant$keyword$422,selection_portfolio_company_stats,cljs.core.constant$keyword$421,selection_portfolio_companies,cljs.core.constant$keyword$315,selection_portfolio_company_site_stats,cljs.core.constant$keyword$379,selection_portfolio_company_sites,cljs.core.constant$keyword$368,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$414,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21908){var vec__21913 = p__21908;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21913,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21913,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$378,selector], 0));
var pred__21914 = cljs.core._EQ_;var expr__21915 = type;if(cljs.core.truth_((pred__21914.cljs$core$IFn$_invoke$arity$2 ? pred__21914.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__21915) : pred__21914.call(null,cljs.core.constant$keyword$297,expr__21915))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21914.cljs$core$IFn$_invoke$arity$2 ? pred__21914.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__21915) : pred__21914.call(null,cljs.core.constant$keyword$298,expr__21915))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21914.cljs$core$IFn$_invoke$arity$2 ? pred__21914.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$299,expr__21915) : pred__21914.call(null,cljs.core.constant$keyword$299,expr__21915))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$381,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21918 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$381,view,cljs.core.constant$keyword$264,type,cljs.core.constant$keyword$260,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21919){var vec__21922 = p__21919;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21922,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21922,1,null);var map__21923 = clustermap.app.parse_route();var map__21923__$1 = ((cljs.core.seq_QMARK_(map__21923))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21923):map__21923);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923__$1,cljs.core.constant$keyword$381);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21925 = clustermap.app.parse_route();var map__21925__$1 = ((cljs.core.seq_QMARK_(map__21925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21925):map__21925);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925__$1,cljs.core.constant$keyword$260);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925__$1,cljs.core.constant$keyword$264);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$389,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$280,clustermap.app.set_selection_route,cljs.core.constant$keyword$423,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$302,clustermap.app.set_view_route,cljs.core.constant$keyword$424,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21929 = params__9259__auto__;var map__21929__$1 = ((cljs.core.seq_QMARK_(map__21929))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21929):map__21929);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$423,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21930 = params__9259__auto__;var map__21930__$1 = ((cljs.core.seq_QMARK_(map__21930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21930):map__21930);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21930__$1,cljs.core.constant$keyword$381);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$424,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$423,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21931 = params__9259__auto__;var map__21931__$1 = ((cljs.core.seq_QMARK_(map__21931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21931):map__21931);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21931__$1,cljs.core.constant$keyword$260);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21931__$1,cljs.core.constant$keyword$264);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21931__$1,cljs.core.constant$keyword$381);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$424,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$300,comm,cljs.core.constant$keyword$304,path_fn,cljs.core.constant$keyword$305,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21978){var state_val_21979 = (state_21978[1]);if((state_val_21979 === 7))
{var inst_21967 = (state_21978[2]);var inst_21968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21967,0,null);var inst_21969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21967,1,null);var inst_21970 = clustermap.app.handle_event(inst_21968,inst_21969);var state_21978__$1 = (function (){var statearr_21980 = state_21978;(statearr_21980[7] = inst_21970);
return statearr_21980;
})();var statearr_21981_21994 = state_21978__$1;(statearr_21981_21994[2] = null);
(statearr_21981_21994[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_21979 === 6))
{var inst_21974 = (state_21978[2]);var state_21978__$1 = state_21978;var statearr_21982_21995 = state_21978__$1;(statearr_21982_21995[2] = inst_21974);
(statearr_21982_21995[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_21979 === 5))
{var state_21978__$1 = state_21978;var statearr_21983_21996 = state_21978__$1;(statearr_21983_21996[2] = null);
(statearr_21983_21996[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_21979 === 4))
{var state_21978__$1 = state_21978;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21978__$1,7,comm);
} else
{if((state_val_21979 === 3))
{var inst_21976 = (state_21978[2]);var state_21978__$1 = state_21978;return cljs.core.async.impl.ioc_helpers.return_chan(state_21978__$1,inst_21976);
} else
{if((state_val_21979 === 2))
{var state_21978__$1 = state_21978;if(true)
{var statearr_21984_21997 = state_21978__$1;(statearr_21984_21997[1] = 4);
} else
{var statearr_21985_21998 = state_21978__$1;(statearr_21985_21998[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_21979 === 1))
{var state_21978__$1 = state_21978;var statearr_21986_21999 = state_21978__$1;(statearr_21986_21999[2] = null);
(statearr_21986_21999[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_21990 = [null,null,null,null,null,null,null,null];(statearr_21990[0] = state_machine__5507__auto__);
(statearr_21990[1] = 1);
return statearr_21990;
});
var state_machine__5507__auto____1 = (function (state_21978){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21978);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21991){if((e21991 instanceof Object))
{var ex__5510__auto__ = e21991;var statearr_21992_22000 = state_21978;(statearr_21992_22000[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21978);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e21991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__22001 = state_21978;
state_21978 = G__22001;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21978){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21993 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
