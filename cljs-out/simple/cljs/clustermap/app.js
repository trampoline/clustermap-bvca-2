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
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"zoom","zoom",1017648965),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847),new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),new cljs.core.Keyword(null,"view","view",1017523735)],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,new cljs.core.Keyword(null,"map","map",1014012110)]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__22922){var vec__22923 = p__22922;var key_or_path = cljs.core.nth.call(null,vec__22923,0,null);var value_or_fn = cljs.core.nth.call(null,vec__22923,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__22923,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__22923,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22924){var map__22926 = p__22924;var map__22926__$1 = ((cljs.core.seq_QMARK_.call(null,map__22926))?cljs.core.apply.call(null,cljs.core.hash_map,map__22926):map__22926);var path_values = map__22926__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22924 = null;if (arguments.length > 0) {
  p__22924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22924);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22927){
var p__22924 = cljs.core.seq(arglist__22927);
return set_state__delegate(p__22924);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_22949){var state_val_22950 = (state_22949[1]);if((state_val_22950 === 2))
{var inst_22945 = (state_22949[2]);var inst_22946 = clustermap.rtree.rtree_index.call(null,inst_22945);var inst_22947 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_22945,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_22946);var state_22949__$1 = state_22949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22949__$1,inst_22947);
} else
{if((state_val_22950 === 1))
{var inst_22943 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_22949__$1 = state_22949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22949__$1,2,inst_22943);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_22954 = [null,null,null,null,null,null,null];(statearr_22954[0] = state_machine__5677__auto__);
(statearr_22954[1] = 1);
return statearr_22954;
});
var state_machine__5677__auto____1 = (function (state_22949){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_22949);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e22955){if((e22955 instanceof Object))
{var ex__5680__auto__ = e22955;var statearr_22956_22958 = state_22949;(statearr_22956_22958[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22959 = state_22949;
state_22949 = G__22959;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_22949){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_22949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_22957 = f__5692__auto__.call(null);(statearr_22957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_22957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_22979){var state_val_22980 = (state_22979[1]);if((state_val_22980 === 2))
{var inst_22976 = (state_22979[2]);var inst_22977 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_22976);var state_22979__$1 = state_22979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22979__$1,inst_22977);
} else
{if((state_val_22980 === 1))
{var inst_22974 = clustermap.api.investment_stats.call(null);var state_22979__$1 = state_22979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22979__$1,2,inst_22974);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_22984 = [null,null,null,null,null,null,null];(statearr_22984[0] = state_machine__5677__auto__);
(statearr_22984[1] = 1);
return statearr_22984;
});
var state_machine__5677__auto____1 = (function (state_22979){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_22979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e22985){if((e22985 instanceof Object))
{var ex__5680__auto__ = e22985;var statearr_22986_22988 = state_22979;(statearr_22986_22988[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22989 = state_22979;
state_22979 = G__22989;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_22979){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_22979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_22987 = f__5692__auto__.call(null);(statearr_22987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_22987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__22990,type){var vec__22992 = p__22990;var selection = cljs.core.nth.call(null,vec__22992,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__22992,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__22992,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__22992,3,null);var selection_investments = cljs.core.nth.call(null,vec__22992,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__22992,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22993){var vec__22998 = p__22993;var type = cljs.core.nth.call(null,vec__22998,0,null);var id = cljs.core.nth.call(null,vec__22998,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__22999 = cljs.core._EQ_;var expr__23000 = type;if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23000)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23000)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__22999.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23000)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state))))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"view","view",1017523735),view__$1);
return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3529__auto__ = type;if(cljs.core.truth_(and__3529__auto__))
{return id;
} else
{return and__3529__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3541__auto__ = view;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view))));
} else
{if(true)
{return clustermap.app.history.setToken((""));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__23005 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__23005,0,null);var view = cljs.core.nth.call(null,vec__23005,1,null);var type = cljs.core.nth.call(null,vec__23005,2,null);var id = cljs.core.nth.call(null,vec__23005,3,null);var type__$1 = ((((function (){var G__23006 = type;var G__23006__$1 = (((G__23006 == null))?null:clojure.string.trim.call(null,G__23006));var G__23006__$2 = (((G__23006__$1 == null))?null:cljs.core.count.call(null,G__23006__$1));return G__23006__$2;
})() > 0))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__23007 = id;var G__23007__$1 = (((G__23007 == null))?null:clojure.string.trim.call(null,G__23007));var G__23007__$2 = (((G__23007__$1 == null))?null:cljs.core.count.call(null,G__23007__$1));return G__23007__$2;
})() > 0))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type__$1,new cljs.core.Keyword(null,"id","id",1013907597),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__23008){var vec__23011 = p__23008;var type = cljs.core.nth.call(null,vec__23011,0,null);var id = cljs.core.nth.call(null,vec__23011,1,null);var map__23012 = clustermap.app.parse_route.call(null);var map__23012__$1 = ((cljs.core.seq_QMARK_.call(null,map__23012))?cljs.core.apply.call(null,cljs.core.hash_map,map__23012):map__23012);var view = cljs.core.get.call(null,map__23012__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__23014 = clustermap.app.parse_route.call(null);var map__23014__$1 = ((cljs.core.seq_QMARK_.call(null,map__23014))?cljs.core.apply.call(null,cljs.core.hash_map,map__23014):map__23014);var id = cljs.core.get.call(null,map__23014__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__23014__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_23047){var state_val_23048 = (state_23047[1]);if((state_val_23048 === 2))
{var inst_23038 = (state_23047[7]);var inst_23044 = (state_23047[2]);var inst_23045 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_23038,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_23044);var state_23047__$1 = state_23047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23047__$1,inst_23045);
} else
{if((state_val_23048 === 1))
{var inst_23038 = (state_23047[7]);var inst_23036 = cljs.core.deref.call(null,clustermap.app.state);var inst_23037 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_23036);var inst_23038__$1 = cljs.core.merge.call(null,inst_23037,table_view);var inst_23039 = cljs.core.deref.call(null,clustermap.app.state);var inst_23040 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_23039);var inst_23041 = cljs.core.merge.call(null,inst_23040,inst_23038__$1);var inst_23042 = clustermap.api.investment_aggs.call(null,inst_23041);var state_23047__$1 = (function (){var statearr_23049 = state_23047;(statearr_23049[7] = inst_23038__$1);
return statearr_23049;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23047__$1,2,inst_23042);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_23053 = [null,null,null,null,null,null,null,null];(statearr_23053[0] = state_machine__5677__auto__);
(statearr_23053[1] = 1);
return statearr_23053;
});
var state_machine__5677__auto____1 = (function (state_23047){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_23047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e23054){if((e23054 instanceof Object))
{var ex__5680__auto__ = e23054;var statearr_23055_23057 = state_23047;(statearr_23055_23057[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23058 = state_23047;
state_23047 = G__23058;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_23047){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_23047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_23056 = f__5692__auto__.call(null);(statearr_23056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_23056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_23091){var state_val_23092 = (state_23091[1]);if((state_val_23092 === 2))
{var inst_23082 = (state_23091[7]);var inst_23088 = (state_23091[2]);var inst_23089 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_23082,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_23088);var state_23091__$1 = state_23091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23091__$1,inst_23089);
} else
{if((state_val_23092 === 1))
{var inst_23082 = (state_23091[7]);var inst_23080 = cljs.core.deref.call(null,clustermap.app.state);var inst_23081 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_23080);var inst_23082__$1 = cljs.core.merge.call(null,inst_23081,table_view);var inst_23083 = cljs.core.deref.call(null,clustermap.app.state);var inst_23084 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_23083);var inst_23085 = cljs.core.merge.call(null,inst_23084,inst_23082__$1);var inst_23086 = clustermap.api.investments.call(null,inst_23085);var state_23091__$1 = (function (){var statearr_23093 = state_23091;(statearr_23093[7] = inst_23082__$1);
return statearr_23093;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23091__$1,2,inst_23086);
} else
{return null;
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_23097 = [null,null,null,null,null,null,null,null];(statearr_23097[0] = state_machine__5677__auto__);
(statearr_23097[1] = 1);
return statearr_23097;
});
var state_machine__5677__auto____1 = (function (state_23091){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_23091);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e23098){if((e23098 instanceof Object))
{var ex__5680__auto__ = e23098;var statearr_23099_23101 = state_23091;(statearr_23099_23101[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23102 = state_23091;
state_23091 = G__23102;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_23091){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_23091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_23100 = f__5692__auto__.call(null);(statearr_23100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_23100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__9445__auto___23119 = (function (params__9446__auto__){if(cljs.core.map_QMARK_.call(null,params__9446__auto__))
{var map__23111 = params__9446__auto__;var map__23111__$1 = ((cljs.core.seq_QMARK_.call(null,map__23111))?cljs.core.apply.call(null,cljs.core.hash_map,map__23111):map__23111);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9446__auto__))
{var vec__23112 = params__9446__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9445__auto___23119);
var action__9445__auto___23120 = (function (params__9446__auto__){if(cljs.core.map_QMARK_.call(null,params__9446__auto__))
{var map__23113 = params__9446__auto__;var map__23113__$1 = ((cljs.core.seq_QMARK_.call(null,map__23113))?cljs.core.apply.call(null,cljs.core.hash_map,map__23113):map__23113);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9446__auto__))
{var vec__23114 = params__9446__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9445__auto___23120);
var action__9445__auto___23121 = (function (params__9446__auto__){if(cljs.core.map_QMARK_.call(null,params__9446__auto__))
{var map__23115 = params__9446__auto__;var map__23115__$1 = ((cljs.core.seq_QMARK_.call(null,map__23115))?cljs.core.apply.call(null,cljs.core.hash_map,map__23115):map__23115);var view = cljs.core.get.call(null,map__23115__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9446__auto__))
{var vec__23116 = params__9446__auto__;var view = cljs.core.nth.call(null,vec__23116,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9445__auto___23121);
var action__9445__auto___23122 = (function (params__9446__auto__){if(cljs.core.map_QMARK_.call(null,params__9446__auto__))
{var map__23117 = params__9446__auto__;var map__23117__$1 = ((cljs.core.seq_QMARK_.call(null,map__23117))?cljs.core.apply.call(null,cljs.core.hash_map,map__23117):map__23117);var id = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9446__auto__))
{var vec__23118 = params__9446__auto__;var view = cljs.core.nth.call(null,vec__23118,0,null);var type = cljs.core.nth.call(null,vec__23118,1,null);var id = cljs.core.nth.call(null,vec__23118,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9445__auto___23122);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186),clustermap.app.change_view_path], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.app.load_all_investment_stats.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",shared);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",shared);
var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,comm,path_fn,link_fn,shared){
return (function (state_23169){var state_val_23170 = (state_23169[1]);if((state_val_23170 === 7))
{var inst_23158 = (state_23169[2]);var inst_23159 = cljs.core.nth.call(null,inst_23158,0,null);var inst_23160 = cljs.core.nth.call(null,inst_23158,1,null);var inst_23161 = clustermap.app.handle_event.call(null,inst_23159,inst_23160);var state_23169__$1 = (function (){var statearr_23171 = state_23169;(statearr_23171[7] = inst_23161);
return statearr_23171;
})();var statearr_23172_23185 = state_23169__$1;(statearr_23172_23185[2] = null);
(statearr_23172_23185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23170 === 6))
{var inst_23165 = (state_23169[2]);var state_23169__$1 = state_23169;var statearr_23173_23186 = state_23169__$1;(statearr_23173_23186[2] = inst_23165);
(statearr_23173_23186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23170 === 5))
{var state_23169__$1 = state_23169;var statearr_23174_23187 = state_23169__$1;(statearr_23174_23187[2] = null);
(statearr_23174_23187[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23170 === 4))
{var state_23169__$1 = state_23169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23169__$1,7,comm);
} else
{if((state_val_23170 === 3))
{var inst_23167 = (state_23169[2]);var state_23169__$1 = state_23169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23169__$1,inst_23167);
} else
{if((state_val_23170 === 2))
{var state_23169__$1 = state_23169;if(true)
{var statearr_23175_23188 = state_23169__$1;(statearr_23175_23188[1] = 4);
} else
{var statearr_23176_23189 = state_23169__$1;(statearr_23176_23189[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23170 === 1))
{var state_23169__$1 = state_23169;var statearr_23177_23190 = state_23169__$1;(statearr_23177_23190[2] = null);
(statearr_23177_23190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5691__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5676__auto__,c__5691__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_23181 = [null,null,null,null,null,null,null,null];(statearr_23181[0] = state_machine__5677__auto__);
(statearr_23181[1] = 1);
return statearr_23181;
});
var state_machine__5677__auto____1 = (function (state_23169){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_23169);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e23182){if((e23182 instanceof Object))
{var ex__5680__auto__ = e23182;var statearr_23183_23191 = state_23169;(statearr_23183_23191[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23169);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23192 = state_23169;
state_23169 = G__23192;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_23169){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_23169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,comm,path_fn,link_fn,shared))
})();var state__5693__auto__ = (function (){var statearr_23184 = f__5692__auto__.call(null);(statearr_23184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_23184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,comm,path_fn,link_fn,shared))
);
return c__5691__auto__;
});
