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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__45202){var vec__45203 = p__45202;var key_or_path = cljs.core.nth.call(null,vec__45203,0,null);var value_or_fn = cljs.core.nth.call(null,vec__45203,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__45203,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__45203,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__45204){var map__45206 = p__45204;var map__45206__$1 = ((cljs.core.seq_QMARK_.call(null,map__45206))?cljs.core.apply.call(null,cljs.core.hash_map,map__45206):map__45206);var path_values = map__45206__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__45204 = null;if (arguments.length > 0) {
  p__45204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__45204);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__45207){
var p__45204 = cljs.core.seq(arglist__45207);
return set_state__delegate(p__45204);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_45229){var state_val_45230 = (state_45229[1]);if((state_val_45230 === 2))
{var inst_45225 = (state_45229[2]);var inst_45226 = clustermap.rtree.rtree_index.call(null,inst_45225);var inst_45227 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_45225,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_45226);var state_45229__$1 = state_45229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45229__$1,inst_45227);
} else
{if((state_val_45230 === 1))
{var inst_45223 = clustermap.api.boundaryline_collection_index.call(null,"uk_constituencies",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_45229__$1 = state_45229;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45229__$1,2,inst_45223);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_45234 = [null,null,null,null,null,null,null];(statearr_45234[0] = state_machine__5675__auto__);
(statearr_45234[1] = 1);
return statearr_45234;
});
var state_machine__5675__auto____1 = (function (state_45229){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_45229);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e45235){if((e45235 instanceof Object))
{var ex__5678__auto__ = e45235;var statearr_45236_45238 = state_45229;(statearr_45236_45238[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45229);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45239 = state_45229;
state_45229 = G__45239;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_45229){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_45229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_45237 = f__5690__auto__.call(null);(statearr_45237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_45237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_45259){var state_val_45260 = (state_45259[1]);if((state_val_45260 === 2))
{var inst_45256 = (state_45259[2]);var inst_45257 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_45256);var state_45259__$1 = state_45259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45259__$1,inst_45257);
} else
{if((state_val_45260 === 1))
{var inst_45254 = clustermap.api.investment_stats.call(null);var state_45259__$1 = state_45259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45259__$1,2,inst_45254);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_45264 = [null,null,null,null,null,null,null];(statearr_45264[0] = state_machine__5675__auto__);
(statearr_45264[1] = 1);
return statearr_45264;
});
var state_machine__5675__auto____1 = (function (state_45259){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_45259);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e45265){if((e45265 instanceof Object))
{var ex__5678__auto__ = e45265;var statearr_45266_45268 = state_45259;(statearr_45266_45268[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45259);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45269 = state_45259;
state_45259 = G__45269;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_45259){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_45259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_45267 = f__5690__auto__.call(null);(statearr_45267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_45267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__45270,type){var vec__45272 = p__45270;var selection = cljs.core.nth.call(null,vec__45272,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__45272,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__45272,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__45272,3,null);var selection_investments = cljs.core.nth.call(null,vec__45272,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__45272,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__45273){var vec__45278 = p__45273;var type = cljs.core.nth.call(null,vec__45278,0,null);var id = cljs.core.nth.call(null,vec__45278,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__45279 = cljs.core._EQ_;var expr__45280 = type;if(cljs.core.truth_(pred__45279.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45280)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__45279.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45280)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__45279.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45280)))
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
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3527__auto__ = type;if(cljs.core.truth_(and__3527__auto__))
{return id;
} else
{return and__3527__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3539__auto__ = view;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__45283 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__45283,0,null);var view = cljs.core.nth.call(null,vec__45283,1,null);var type = cljs.core.nth.call(null,vec__45283,2,null);var id = cljs.core.nth.call(null,vec__45283,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__45284){var vec__45287 = p__45284;var type = cljs.core.nth.call(null,vec__45287,0,null);var id = cljs.core.nth.call(null,vec__45287,1,null);var map__45288 = clustermap.app.parse_route.call(null);var map__45288__$1 = ((cljs.core.seq_QMARK_.call(null,map__45288))?cljs.core.apply.call(null,cljs.core.hash_map,map__45288):map__45288);var view = cljs.core.get.call(null,map__45288__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__45290 = clustermap.app.parse_route.call(null);var map__45290__$1 = ((cljs.core.seq_QMARK_.call(null,map__45290))?cljs.core.apply.call(null,cljs.core.hash_map,map__45290):map__45290);var id = cljs.core.get.call(null,map__45290__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__45290__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_45323){var state_val_45324 = (state_45323[1]);if((state_val_45324 === 2))
{var inst_45314 = (state_45323[7]);var inst_45320 = (state_45323[2]);var inst_45321 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_45314,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_45320);var state_45323__$1 = state_45323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45323__$1,inst_45321);
} else
{if((state_val_45324 === 1))
{var inst_45314 = (state_45323[7]);var inst_45312 = cljs.core.deref.call(null,clustermap.app.state);var inst_45313 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_45312);var inst_45314__$1 = cljs.core.merge.call(null,inst_45313,table_view);var inst_45315 = cljs.core.deref.call(null,clustermap.app.state);var inst_45316 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_45315);var inst_45317 = cljs.core.merge.call(null,inst_45316,inst_45314__$1);var inst_45318 = clustermap.api.investment_aggs.call(null,inst_45317);var state_45323__$1 = (function (){var statearr_45325 = state_45323;(statearr_45325[7] = inst_45314__$1);
return statearr_45325;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45323__$1,2,inst_45318);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_45329 = [null,null,null,null,null,null,null,null];(statearr_45329[0] = state_machine__5675__auto__);
(statearr_45329[1] = 1);
return statearr_45329;
});
var state_machine__5675__auto____1 = (function (state_45323){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_45323);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e45330){if((e45330 instanceof Object))
{var ex__5678__auto__ = e45330;var statearr_45331_45333 = state_45323;(statearr_45331_45333[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45334 = state_45323;
state_45323 = G__45334;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_45323){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_45323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_45332 = f__5690__auto__.call(null);(statearr_45332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_45332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_45367){var state_val_45368 = (state_45367[1]);if((state_val_45368 === 2))
{var inst_45358 = (state_45367[7]);var inst_45364 = (state_45367[2]);var inst_45365 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_45358,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_45364);var state_45367__$1 = state_45367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45367__$1,inst_45365);
} else
{if((state_val_45368 === 1))
{var inst_45358 = (state_45367[7]);var inst_45356 = cljs.core.deref.call(null,clustermap.app.state);var inst_45357 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_45356);var inst_45358__$1 = cljs.core.merge.call(null,inst_45357,table_view);var inst_45359 = cljs.core.deref.call(null,clustermap.app.state);var inst_45360 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_45359);var inst_45361 = cljs.core.merge.call(null,inst_45360,inst_45358__$1);var inst_45362 = clustermap.api.investments.call(null,inst_45361);var state_45367__$1 = (function (){var statearr_45369 = state_45367;(statearr_45369[7] = inst_45358__$1);
return statearr_45369;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45367__$1,2,inst_45362);
} else
{return null;
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_45373 = [null,null,null,null,null,null,null,null];(statearr_45373[0] = state_machine__5675__auto__);
(statearr_45373[1] = 1);
return statearr_45373;
});
var state_machine__5675__auto____1 = (function (state_45367){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_45367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e45374){if((e45374 instanceof Object))
{var ex__5678__auto__ = e45374;var statearr_45375_45377 = state_45367;(statearr_45375_45377[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45378 = state_45367;
state_45367 = G__45378;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_45367){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_45367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_45376 = f__5690__auto__.call(null);(statearr_45376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_45376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",4402534682),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",4402849902),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",529886322),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",3608283668),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__9443__auto___45395 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__45387 = params__9444__auto__;var map__45387__$1 = ((cljs.core.seq_QMARK_.call(null,map__45387))?cljs.core.apply.call(null,cljs.core.hash_map,map__45387):map__45387);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__45388 = params__9444__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9443__auto___45395);
var action__9443__auto___45396 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__45389 = params__9444__auto__;var map__45389__$1 = ((cljs.core.seq_QMARK_.call(null,map__45389))?cljs.core.apply.call(null,cljs.core.hash_map,map__45389):map__45389);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__45390 = params__9444__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9443__auto___45396);
var action__9443__auto___45397 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__45391 = params__9444__auto__;var map__45391__$1 = ((cljs.core.seq_QMARK_.call(null,map__45391))?cljs.core.apply.call(null,cljs.core.hash_map,map__45391):map__45391);var view = cljs.core.get.call(null,map__45391__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__45392 = params__9444__auto__;var view = cljs.core.nth.call(null,vec__45392,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9443__auto___45397);
var action__9443__auto___45398 = (function (params__9444__auto__){if(cljs.core.map_QMARK_.call(null,params__9444__auto__))
{var map__45393 = params__9444__auto__;var map__45393__$1 = ((cljs.core.seq_QMARK_.call(null,map__45393))?cljs.core.apply.call(null,cljs.core.hash_map,map__45393):map__45393);var id = cljs.core.get.call(null,map__45393__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__45393__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__45393__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9444__auto__))
{var vec__45394 = params__9444__auto__;var view = cljs.core.nth.call(null,vec__45394,0,null);var type = cljs.core.nth.call(null,vec__45394,1,null);var id = cljs.core.nth.call(null,vec__45394,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9443__auto___45398);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),link_fn], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.app.load_all_investment_stats.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",shared);
clustermap.components.search.mount.call(null,clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount.call(null,clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount.call(null,clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount.call(null,clustermap.app.state,"full-report-component",shared);
var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,comm,path_fn,link_fn,shared){
return (function (state_45445){var state_val_45446 = (state_45445[1]);if((state_val_45446 === 7))
{var inst_45434 = (state_45445[2]);var inst_45435 = cljs.core.nth.call(null,inst_45434,0,null);var inst_45436 = cljs.core.nth.call(null,inst_45434,1,null);var inst_45437 = clustermap.app.handle_event.call(null,inst_45435,inst_45436);var state_45445__$1 = (function (){var statearr_45447 = state_45445;(statearr_45447[7] = inst_45437);
return statearr_45447;
})();var statearr_45448_45461 = state_45445__$1;(statearr_45448_45461[2] = null);
(statearr_45448_45461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45446 === 6))
{var inst_45441 = (state_45445[2]);var state_45445__$1 = state_45445;var statearr_45449_45462 = state_45445__$1;(statearr_45449_45462[2] = inst_45441);
(statearr_45449_45462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45446 === 5))
{var state_45445__$1 = state_45445;var statearr_45450_45463 = state_45445__$1;(statearr_45450_45463[2] = null);
(statearr_45450_45463[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45446 === 4))
{var state_45445__$1 = state_45445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45445__$1,7,comm);
} else
{if((state_val_45446 === 3))
{var inst_45443 = (state_45445[2]);var state_45445__$1 = state_45445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45445__$1,inst_45443);
} else
{if((state_val_45446 === 2))
{var state_45445__$1 = state_45445;if(true)
{var statearr_45451_45464 = state_45445__$1;(statearr_45451_45464[1] = 4);
} else
{var statearr_45452_45465 = state_45445__$1;(statearr_45452_45465[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45446 === 1))
{var state_45445__$1 = state_45445;var statearr_45453_45466 = state_45445__$1;(statearr_45453_45466[2] = null);
(statearr_45453_45466[1] = 2);
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
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_45457 = [null,null,null,null,null,null,null,null];(statearr_45457[0] = state_machine__5675__auto__);
(statearr_45457[1] = 1);
return statearr_45457;
});
var state_machine__5675__auto____1 = (function (state_45445){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_45445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e45458){if((e45458 instanceof Object))
{var ex__5678__auto__ = e45458;var statearr_45459_45467 = state_45445;(statearr_45459_45467[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45468 = state_45445;
state_45445 = G__45468;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_45445){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_45445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,comm,path_fn,link_fn,shared))
})();var state__5691__auto__ = (function (){var statearr_45460 = f__5690__auto__.call(null);(statearr_45460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_45460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__,comm,path_fn,link_fn,shared))
);
return c__5689__auto__;
});
