// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('clustermap.rtree');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.rtree');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.nav');
goog.require('clustermap.components.page_title');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$782,cljs.core.constant$keyword$835,cljs.core.constant$keyword$834,cljs.core.constant$keyword$766,cljs.core.constant$keyword$833,cljs.core.constant$keyword$765,cljs.core.constant$keyword$832,cljs.core.constant$keyword$752,cljs.core.constant$keyword$842,cljs.core.constant$keyword$843,cljs.core.constant$keyword$785,cljs.core.constant$keyword$844,cljs.core.constant$keyword$789,cljs.core.constant$keyword$761,cljs.core.constant$keyword$702,cljs.core.constant$keyword$784,cljs.core.constant$keyword$788],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,cljs.core.constant$keyword$799]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__34068){var vec__34069 = p__34068;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34069,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34069,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__34069,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__34069,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__34070){var map__34072 = p__34070;var map__34072__$1 = ((cljs.core.seq_QMARK_(map__34072))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34072):map__34072);var path_values = map__34072__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__34070 = null;if (arguments.length > 0) {
  p__34070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__34070);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__34073){
var p__34070 = cljs.core.seq(arglist__34073);
return set_state__delegate(p__34070);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34095){var state_val_34096 = (state_34095[1]);if((state_val_34096 === 2))
{var inst_34091 = (state_34095[2]);var inst_34092 = clustermap.rtree.rtree_index(inst_34091);var inst_34093 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$833,inst_34091,cljs.core.constant$keyword$834,inst_34092], 0));var state_34095__$1 = state_34095;return cljs.core.async.impl.ioc_helpers.return_chan(state_34095__$1,inst_34093);
} else
{if((state_val_34096 === 1))
{var inst_34089 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$603,true], 0));var state_34095__$1 = state_34095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34095__$1,2,inst_34089);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34100 = [null,null,null,null,null,null,null];(statearr_34100[0] = state_machine__5675__auto__);
(statearr_34100[1] = 1);
return statearr_34100;
});
var state_machine__5675__auto____1 = (function (state_34095){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34095);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34101){if((e34101 instanceof Object))
{var ex__5678__auto__ = e34101;var statearr_34102_34104 = state_34095;(statearr_34102_34104[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34095);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e34101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__34105 = state_34095;
state_34095 = G__34105;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34095){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34103 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34125){var state_val_34126 = (state_34125[1]);if((state_val_34126 === 2))
{var inst_34122 = (state_34125[2]);var inst_34123 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$766,inst_34122], 0));var state_34125__$1 = state_34125;return cljs.core.async.impl.ioc_helpers.return_chan(state_34125__$1,inst_34123);
} else
{if((state_val_34126 === 1))
{var inst_34120 = clustermap.api.investment_stats();var state_34125__$1 = state_34125;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34125__$1,2,inst_34120);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34130 = [null,null,null,null,null,null,null];(statearr_34130[0] = state_machine__5675__auto__);
(statearr_34130[1] = 1);
return statearr_34130;
});
var state_machine__5675__auto____1 = (function (state_34125){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34125);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34131){if((e34131 instanceof Object))
{var ex__5678__auto__ = e34131;var statearr_34132_34134 = state_34125;(statearr_34132_34134[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34125);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e34131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__34135 = state_34125;
state_34125 = G__34135;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34133 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$789,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__34136,type){var vec__34138 = p__34136;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$761,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$612,type,cljs.core.constant$keyword$583,selection], null),cljs.core.constant$keyword$765,selection_investment_stats,cljs.core.constant$keyword$752,selection_investment_account_timelines,cljs.core.constant$keyword$785,selection_investment_aggs,cljs.core.constant$keyword$784,selection_investments,cljs.core.constant$keyword$832,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__34139){var vec__34144 = p__34139;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34144,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34144,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$782,selector], 0));
var pred__34145 = cljs.core._EQ_;var expr__34146 = type;if(cljs.core.truth_((pred__34145.cljs$core$IFn$_invoke$arity$2 ? pred__34145.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$698,expr__34146) : pred__34145.call(null,cljs.core.constant$keyword$698,expr__34146))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34145.cljs$core$IFn$_invoke$arity$2 ? pred__34145.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$699,expr__34146) : pred__34145.call(null,cljs.core.constant$keyword$699,expr__34146))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34145.cljs$core$IFn$_invoke$arity$2 ? pred__34145.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__34146) : pred__34145.call(null,cljs.core.constant$keyword$701,expr__34146))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$788.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$788,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3527__auto__ = type;if(cljs.core.truth_(and__3527__auto__))
{return id;
} else
{return and__3527__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3539__auto__ = view;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view))));
} else
{if(true)
{return clustermap.app.history.setToken((""));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__34149 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34149,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34149,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34149,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34149,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$788,view,cljs.core.constant$keyword$612,type,cljs.core.constant$keyword$614,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__34150){var vec__34153 = p__34150;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34153,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34153,1,null);var map__34154 = clustermap.app.parse_route();var map__34154__$1 = ((cljs.core.seq_QMARK_(map__34154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34154):map__34154);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34154__$1,cljs.core.constant$keyword$788);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__34156 = clustermap.app.parse_route();var map__34156__$1 = ((cljs.core.seq_QMARK_(map__34156))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34156):map__34156);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34156__$1,cljs.core.constant$keyword$614);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34156__$1,cljs.core.constant$keyword$612);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34189){var state_val_34190 = (state_34189[1]);if((state_val_34190 === 2))
{var inst_34180 = (state_34189[7]);var inst_34186 = (state_34189[2]);var inst_34187 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$842,inst_34180,cljs.core.constant$keyword$785,inst_34186], 0));var state_34189__$1 = state_34189;return cljs.core.async.impl.ioc_helpers.return_chan(state_34189__$1,inst_34187);
} else
{if((state_val_34190 === 1))
{var inst_34180 = (state_34189[7]);var inst_34178 = cljs.core.deref(clustermap.app.state);var inst_34179 = cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(inst_34178);var inst_34180__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34179,table_view], 0));var inst_34181 = cljs.core.deref(clustermap.app.state);var inst_34182 = cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(inst_34181);var inst_34183 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34182,inst_34180__$1], 0));var inst_34184 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34183], 0));var state_34189__$1 = (function (){var statearr_34191 = state_34189;(statearr_34191[7] = inst_34180__$1);
return statearr_34191;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34189__$1,2,inst_34184);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34195 = [null,null,null,null,null,null,null,null];(statearr_34195[0] = state_machine__5675__auto__);
(statearr_34195[1] = 1);
return statearr_34195;
});
var state_machine__5675__auto____1 = (function (state_34189){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34189);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34196){if((e34196 instanceof Object))
{var ex__5678__auto__ = e34196;var statearr_34197_34199 = state_34189;(statearr_34197_34199[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34189);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e34196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__34200 = state_34189;
state_34189 = G__34200;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34189){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34198 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_34233){var state_val_34234 = (state_34233[1]);if((state_val_34234 === 2))
{var inst_34224 = (state_34233[7]);var inst_34230 = (state_34233[2]);var inst_34231 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$844,inst_34224,cljs.core.constant$keyword$784,inst_34230], 0));var state_34233__$1 = state_34233;return cljs.core.async.impl.ioc_helpers.return_chan(state_34233__$1,inst_34231);
} else
{if((state_val_34234 === 1))
{var inst_34224 = (state_34233[7]);var inst_34222 = cljs.core.deref(clustermap.app.state);var inst_34223 = cljs.core.constant$keyword$844.cljs$core$IFn$_invoke$arity$1(inst_34222);var inst_34224__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34223,table_view], 0));var inst_34225 = cljs.core.deref(clustermap.app.state);var inst_34226 = cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(inst_34225);var inst_34227 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34226,inst_34224__$1], 0));var inst_34228 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34227], 0));var state_34233__$1 = (function (){var statearr_34235 = state_34233;(statearr_34235[7] = inst_34224__$1);
return statearr_34235;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34233__$1,2,inst_34228);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34239 = [null,null,null,null,null,null,null,null];(statearr_34239[0] = state_machine__5675__auto__);
(statearr_34239[1] = 1);
return statearr_34239;
});
var state_machine__5675__auto____1 = (function (state_34233){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34233);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34240){if((e34240 instanceof Object))
{var ex__5678__auto__ = e34240;var statearr_34241_34243 = state_34233;(statearr_34241_34243[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34233);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e34240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__34244 = state_34233;
state_34233 = G__34244;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34233){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_34242 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$790,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$650,clustermap.app.set_selection_route,cljs.core.constant$keyword$845,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$793,clustermap.app.set_view_route,cljs.core.constant$keyword$846,clustermap.app.change_view,cljs.core.constant$keyword$708,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$716,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9443__auto___34261 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34253 = params__9444__auto__;var map__34253__$1 = ((cljs.core.seq_QMARK_(map__34253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34253):map__34253);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34254 = params__9444__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9443__auto___34261);
var action__9443__auto___34262 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34255 = params__9444__auto__;var map__34255__$1 = ((cljs.core.seq_QMARK_(map__34255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34255):map__34255);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34256 = params__9444__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9443__auto___34262);
var action__9443__auto___34263 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34257 = params__9444__auto__;var map__34257__$1 = ((cljs.core.seq_QMARK_(map__34257))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34257):map__34257);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,cljs.core.constant$keyword$788);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34258 = params__9444__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34258,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9443__auto___34263);
var action__9443__auto___34264 = (function (params__9444__auto__){if(cljs.core.map_QMARK_(params__9444__auto__))
{var map__34259 = params__9444__auto__;var map__34259__$1 = ((cljs.core.seq_QMARK_(map__34259))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34259):map__34259);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34259__$1,cljs.core.constant$keyword$614);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34259__$1,cljs.core.constant$keyword$612);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34259__$1,cljs.core.constant$keyword$788);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9444__auto__))
{var vec__34260 = params__9444__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34260,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34260,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34260,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9443__auto___34264);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$707,comm,cljs.core.constant$keyword$696,path_fn,cljs.core.constant$keyword$697,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (state_34311){var state_val_34312 = (state_34311[1]);if((state_val_34312 === 7))
{var inst_34300 = (state_34311[2]);var inst_34301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34300,0,null);var inst_34302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34300,1,null);var inst_34303 = clustermap.app.handle_event(inst_34301,inst_34302);var state_34311__$1 = (function (){var statearr_34313 = state_34311;(statearr_34313[7] = inst_34303);
return statearr_34313;
})();var statearr_34314_34327 = state_34311__$1;(statearr_34314_34327[2] = null);
(statearr_34314_34327[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34312 === 6))
{var inst_34307 = (state_34311[2]);var state_34311__$1 = state_34311;var statearr_34315_34328 = state_34311__$1;(statearr_34315_34328[2] = inst_34307);
(statearr_34315_34328[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34312 === 5))
{var state_34311__$1 = state_34311;var statearr_34316_34329 = state_34311__$1;(statearr_34316_34329[2] = null);
(statearr_34316_34329[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34312 === 4))
{var state_34311__$1 = state_34311;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34311__$1,7,comm);
} else
{if((state_val_34312 === 3))
{var inst_34309 = (state_34311[2]);var state_34311__$1 = state_34311;return cljs.core.async.impl.ioc_helpers.return_chan(state_34311__$1,inst_34309);
} else
{if((state_val_34312 === 2))
{var state_34311__$1 = state_34311;if(true)
{var statearr_34317_34330 = state_34311__$1;(statearr_34317_34330[1] = 4);
} else
{var statearr_34318_34331 = state_34311__$1;(statearr_34318_34331[1] = 5);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_34312 === 1))
{var state_34311__$1 = state_34311;var statearr_34319_34332 = state_34311__$1;(statearr_34319_34332[2] = null);
(statearr_34319_34332[1] = 2);
return cljs.core.constant$keyword$589;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34323 = [null,null,null,null,null,null,null,null];(statearr_34323[0] = state_machine__5675__auto__);
(statearr_34323[1] = 1);
return statearr_34323;
});
var state_machine__5675__auto____1 = (function (state_34311){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34311);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34324){if((e34324 instanceof Object))
{var ex__5678__auto__ = e34324;var statearr_34325_34333 = state_34311;(statearr_34325_34333[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34311);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e34324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__34334 = state_34311;
state_34311 = G__34334;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34311){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared))
})();var state__5691__auto__ = (function (){var statearr_34326 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_34326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
);
return c__5689__auto__;
});
