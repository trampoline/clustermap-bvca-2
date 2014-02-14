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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$377,cljs.core.constant$keyword$309,cljs.core.constant$keyword$363,cljs.core.constant$keyword$302,cljs.core.constant$keyword$410,cljs.core.constant$keyword$373,cljs.core.constant$keyword$297,cljs.core.constant$keyword$375,cljs.core.constant$keyword$409,cljs.core.constant$keyword$374,cljs.core.constant$keyword$387,cljs.core.constant$keyword$310,cljs.core.constant$keyword$411,cljs.core.constant$keyword$416],[cljs.core.constant$keyword$413,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21740){var vec__21741 = p__21740;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21742){var map__21744 = p__21742;var map__21744__$1 = ((cljs.core.seq_QMARK_(map__21744))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21744):map__21744);var path_values = map__21744__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21742 = null;if (arguments.length > 0) {
  p__21742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21742);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21745){
var p__21742 = cljs.core.seq(arglist__21745);
return set_state__delegate(p__21742);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21765){var state_val_21766 = (state_21765[1]);if((state_val_21766 === 2))
{var inst_21762 = (state_21765[2]);var inst_21763 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$410,inst_21762], 0));var state_21765__$1 = state_21765;return cljs.core.async.impl.ioc_helpers.return_chan(state_21765__$1,inst_21763);
} else
{if((state_val_21766 === 1))
{var inst_21760 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$246,true], 0));var state_21765__$1 = state_21765;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21765__$1,2,inst_21760);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21770 = [null,null,null,null,null,null,null];(statearr_21770[0] = state_machine__5507__auto__);
(statearr_21770[1] = 1);
return statearr_21770;
});
var state_machine__5507__auto____1 = (function (state_21765){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21765);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21771){if((e21771 instanceof Object))
{var ex__5510__auto__ = e21771;var statearr_21772_21774 = state_21765;(statearr_21772_21774[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21765);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e21771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__21775 = state_21765;
state_21765 = G__21775;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21765){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21773 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21795){var state_val_21796 = (state_21795[1]);if((state_val_21796 === 2))
{var inst_21792 = (state_21795[2]);var inst_21793 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$310,inst_21792], 0));var state_21795__$1 = state_21795;return cljs.core.async.impl.ioc_helpers.return_chan(state_21795__$1,inst_21793);
} else
{if((state_val_21796 === 1))
{var inst_21790 = clustermap.api.portfolio_company_site_stats();var state_21795__$1 = state_21795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21795__$1,2,inst_21790);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21800 = [null,null,null,null,null,null,null];(statearr_21800[0] = state_machine__5507__auto__);
(statearr_21800[1] = 1);
return statearr_21800;
});
var state_machine__5507__auto____1 = (function (state_21795){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21795);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21801){if((e21801 instanceof Object))
{var ex__5510__auto__ = e21801;var statearr_21802_21804 = state_21795;(statearr_21802_21804[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21795);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e21801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__21805 = state_21795;
state_21795 = G__21805;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21795){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21803 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$387,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21806,type){var vec__21808 = p__21806;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,type,cljs.core.constant$keyword$226,selection], null),cljs.core.constant$keyword$416,selection_portfolio_company_stats,cljs.core.constant$keyword$374,selection_portfolio_companies,cljs.core.constant$keyword$309,selection_portfolio_company_site_stats,cljs.core.constant$keyword$375,selection_portfolio_company_sites,cljs.core.constant$keyword$363,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$409,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21809){var vec__21814 = p__21809;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$373,selector], 0));
var pred__21815 = cljs.core._EQ_;var expr__21816 = type;if(cljs.core.truth_((pred__21815.cljs$core$IFn$_invoke$arity$2 ? pred__21815.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$292,expr__21816) : pred__21815.call(null,cljs.core.constant$keyword$292,expr__21816))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21815.cljs$core$IFn$_invoke$arity$2 ? pred__21815.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$293,expr__21816) : pred__21815.call(null,cljs.core.constant$keyword$293,expr__21816))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21815.cljs$core$IFn$_invoke$arity$2 ? pred__21815.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$294,expr__21816) : pred__21815.call(null,cljs.core.constant$keyword$294,expr__21816))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$377.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$377,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21819 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21819,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21819,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21819,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21819,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$377,view,cljs.core.constant$keyword$259,type,cljs.core.constant$keyword$255,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21820){var vec__21823 = p__21820;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21823,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21823,1,null);var map__21824 = clustermap.app.parse_route();var map__21824__$1 = ((cljs.core.seq_QMARK_(map__21824))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21824):map__21824);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824__$1,cljs.core.constant$keyword$377);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21826 = clustermap.app.parse_route();var map__21826__$1 = ((cljs.core.seq_QMARK_(map__21826))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21826):map__21826);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826__$1,cljs.core.constant$keyword$255);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826__$1,cljs.core.constant$keyword$259);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$385,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$275,clustermap.app.set_selection_route,cljs.core.constant$keyword$417,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$296,clustermap.app.set_view_route,cljs.core.constant$keyword$418,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21830 = params__9259__auto__;var map__21830__$1 = ((cljs.core.seq_QMARK_(map__21830))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21830):map__21830);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21831 = params__9259__auto__;var map__21831__$1 = ((cljs.core.seq_QMARK_(map__21831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21831):map__21831);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21831__$1,cljs.core.constant$keyword$377);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$418,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21832 = params__9259__auto__;var map__21832__$1 = ((cljs.core.seq_QMARK_(map__21832))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21832):map__21832);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21832__$1,cljs.core.constant$keyword$255);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21832__$1,cljs.core.constant$keyword$259);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21832__$1,cljs.core.constant$keyword$377);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$418,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$295,comm,cljs.core.constant$keyword$298,path_fn,cljs.core.constant$keyword$299,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21879){var state_val_21880 = (state_21879[1]);if((state_val_21880 === 7))
{var inst_21868 = (state_21879[2]);var inst_21869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21868,0,null);var inst_21870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21868,1,null);var inst_21871 = clustermap.app.handle_event(inst_21869,inst_21870);var state_21879__$1 = (function (){var statearr_21881 = state_21879;(statearr_21881[7] = inst_21871);
return statearr_21881;
})();var statearr_21882_21895 = state_21879__$1;(statearr_21882_21895[2] = null);
(statearr_21882_21895[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21880 === 6))
{var inst_21875 = (state_21879[2]);var state_21879__$1 = state_21879;var statearr_21883_21896 = state_21879__$1;(statearr_21883_21896[2] = inst_21875);
(statearr_21883_21896[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21880 === 5))
{var state_21879__$1 = state_21879;var statearr_21884_21897 = state_21879__$1;(statearr_21884_21897[2] = null);
(statearr_21884_21897[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21880 === 4))
{var state_21879__$1 = state_21879;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21879__$1,7,comm);
} else
{if((state_val_21880 === 3))
{var inst_21877 = (state_21879[2]);var state_21879__$1 = state_21879;return cljs.core.async.impl.ioc_helpers.return_chan(state_21879__$1,inst_21877);
} else
{if((state_val_21880 === 2))
{var state_21879__$1 = state_21879;if(true)
{var statearr_21885_21898 = state_21879__$1;(statearr_21885_21898[1] = 4);
} else
{var statearr_21886_21899 = state_21879__$1;(statearr_21886_21899[1] = 5);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_21880 === 1))
{var state_21879__$1 = state_21879;var statearr_21887_21900 = state_21879__$1;(statearr_21887_21900[2] = null);
(statearr_21887_21900[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_21891 = [null,null,null,null,null,null,null,null];(statearr_21891[0] = state_machine__5507__auto__);
(statearr_21891[1] = 1);
return statearr_21891;
});
var state_machine__5507__auto____1 = (function (state_21879){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21879);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21892){if((e21892 instanceof Object))
{var ex__5510__auto__ = e21892;var statearr_21893_21901 = state_21879;(statearr_21893_21901[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21879);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e21892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__21902 = state_21879;
state_21879 = G__21902;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21879){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21894 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
