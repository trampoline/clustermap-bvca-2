// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('clustermap.components.timeline_chart');
goog.require('goog.history.EventType');
goog.require('clustermap.routes');
goog.require('clustermap.components.table');
goog.require('om.dom');
goog.require('clustermap.components.table');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.select_chooser');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.mount');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$971,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$970,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,null,cljs.core.constant$keyword$973,null,cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,null,cljs.core.constant$keyword$973,null,cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,null,cljs.core.constant$keyword$973,null,cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$964,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1260,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1113,false,cljs.core.constant$keyword$956,null,cljs.core.constant$keyword$1114,null], null),cljs.core.constant$keyword$1011,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1328,cljs.core.constant$keyword$1327,"companies",cljs.core.constant$keyword$1307,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1312,null,cljs.core.constant$keyword$956,null,cljs.core.constant$keyword$1311,null,cljs.core.constant$keyword$1309,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1091,cljs.core.constant$keyword$972,"companies",cljs.core.constant$keyword$1110,"company",cljs.core.constant$keyword$1010,"boundaryline_id",cljs.core.constant$keyword$1321,"!latest_employee_count"], null),cljs.core.constant$keyword$1310,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1241,cljs.core.constant$keyword$1255], null),cljs.core.constant$keyword$1323,cljs.core.constant$keyword$1259,cljs.core.constant$keyword$1321,cljs.core.constant$keyword$1204], null)], null),cljs.core.constant$keyword$1082,null], null),cljs.core.constant$keyword$1207,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1208,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,"companies",cljs.core.constant$keyword$1110,"company",cljs.core.constant$keyword$1209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1208,null], null),cljs.core.constant$keyword$1325,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1325,cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$972,"companies",cljs.core.constant$keyword$1110,"company",cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$962,(0),cljs.core.constant$keyword$963,(50),cljs.core.constant$keyword$1127,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1329,"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1330,"Postcode"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1331,"Formation date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1332,"Filing date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1203,"Employees"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1206,"Turnover"], null)], null)], null),cljs.core.constant$keyword$1121,null], null),cljs.core.constant$keyword$1326,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1090,cljs.core.constant$keyword$1327,"company_accounts",cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$972,"company-accounts",cljs.core.constant$keyword$1110,"accounts",cljs.core.constant$keyword$965,"?accounts_date",cljs.core.constant$keyword$1111,"!turnover",cljs.core.constant$keyword$968,"year"], null),cljs.core.constant$keyword$1112,null], null),cljs.core.constant$keyword$1198,cljs.core.constant$keyword$1011], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$971,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$970,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,null,cljs.core.constant$keyword$973,null,cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,null,cljs.core.constant$keyword$973,null,cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,null,cljs.core.constant$keyword$973,null,cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$971,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$964,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1260,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1113,false,cljs.core.constant$keyword$956,null,cljs.core.constant$keyword$1114,null], null),cljs.core.constant$keyword$1011,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1328,cljs.core.constant$keyword$1327,"companies",cljs.core.constant$keyword$1307,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1312,null,cljs.core.constant$keyword$956,null,cljs.core.constant$keyword$1311,null,cljs.core.constant$keyword$1309,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1091,cljs.core.constant$keyword$972,"companies",cljs.core.constant$keyword$1110,"company",cljs.core.constant$keyword$1010,"boundaryline_id",cljs.core.constant$keyword$1321,"!latest_employee_count"], null),cljs.core.constant$keyword$1310,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1241,cljs.core.constant$keyword$1255], null),cljs.core.constant$keyword$1323,cljs.core.constant$keyword$1259,cljs.core.constant$keyword$1321,cljs.core.constant$keyword$1204], null)], null),cljs.core.constant$keyword$1082,null], null),cljs.core.constant$keyword$1207,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1208,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$972,"companies",cljs.core.constant$keyword$1110,"company",cljs.core.constant$keyword$1209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1208,null], null),cljs.core.constant$keyword$1325,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1325,cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$972,"companies",cljs.core.constant$keyword$1110,"company",cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$962,(0),cljs.core.constant$keyword$963,(50),cljs.core.constant$keyword$1127,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1329,"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1330,"Postcode"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1331,"Formation date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1332,"Filing date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1203,"Employees"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1206,"Turnover"], null)], null)], null),cljs.core.constant$keyword$1121,null], null),cljs.core.constant$keyword$1326,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1090,cljs.core.constant$keyword$1327,"company_accounts",cljs.core.constant$keyword$1109,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$972,"company-accounts",cljs.core.constant$keyword$1110,"accounts",cljs.core.constant$keyword$965,"?accounts_date",cljs.core.constant$keyword$1111,"!turnover",cljs.core.constant$keyword$968,"year"], null),cljs.core.constant$keyword$1112,null], null),cljs.core.constant$keyword$1198,cljs.core.constant$keyword$1011], null)));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__45169){var vec__45170 = p__45169;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45170,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45170,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__45170,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__45170,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__45171){var map__45173 = p__45171;var map__45173__$1 = ((cljs.core.seq_QMARK_(map__45173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45173):map__45173);var path_values = map__45173__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__45171 = null;if (arguments.length > 0) {
  p__45171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__45171);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__45174){
var p__45171 = cljs.core.seq(arglist__45174);
return set_state__delegate(p__45171);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
/**
* @param {...*} var_args
*/
clustermap.app.get_state = (function() { 
var get_state__delegate = function (path){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)),cljs.core.flatten(path));
};
var get_state = function (var_args){
var path = null;if (arguments.length > 0) {
  path = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return get_state__delegate.call(this,path);};
get_state.cljs$lang$maxFixedArity = 0;
get_state.cljs$lang$applyTo = (function (arglist__45175){
var path = cljs.core.seq(arglist__45175);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__45180 = cljs.core.seq(clustermap.app.bl_collections);var chunk__45181 = null;var count__45182 = (0);var i__45183 = (0);while(true){
if((i__45183 < count__45182))
{var blcoll = chunk__45181.cljs$core$IIndexed$_nth$arity$2(null,i__45183);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$971,blcoll);
{
var G__45184 = seq__45180;
var G__45185 = chunk__45181;
var G__45186 = count__45182;
var G__45187 = (i__45183 + (1));
seq__45180 = G__45184;
chunk__45181 = G__45185;
count__45182 = G__45186;
i__45183 = G__45187;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45180);if(temp__4126__auto__)
{var seq__45180__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45180__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45180__$1);{
var G__45188 = cljs.core.chunk_rest(seq__45180__$1);
var G__45189 = c__4314__auto__;
var G__45190 = cljs.core.count(c__4314__auto__);
var G__45191 = (0);
seq__45180 = G__45188;
chunk__45181 = G__45189;
count__45182 = G__45190;
i__45183 = G__45191;
continue;
}
} else
{var blcoll = cljs.core.first(seq__45180__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$971,blcoll);
{
var G__45192 = cljs.core.next(seq__45180__$1);
var G__45193 = null;
var G__45194 = (0);
var G__45195 = (0);
seq__45180 = G__45192;
chunk__45181 = G__45193;
count__45182 = G__45194;
i__45183 = G__45195;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_45215){var state_val_45216 = (state_45215[(1)]);if((state_val_45216 === (2)))
{var inst_45212 = (state_45215[(2)]);var inst_45213 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1175,inst_45212], 0));var state_45215__$1 = state_45215;return cljs.core.async.impl.ioc_helpers.return_chan(state_45215__$1,inst_45213);
} else
{if((state_val_45216 === (1)))
{var inst_45210 = (clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0() : clustermap.api.investment_stats.call(null));var state_45215__$1 = state_45215;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45215__$1,(2),inst_45210);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45220 = [null,null,null,null,null,null,null];(statearr_45220[(0)] = state_machine__5694__auto__);
(statearr_45220[(1)] = (1));
return statearr_45220;
});
var state_machine__5694__auto____1 = (function (state_45215){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45215);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45221){if((e45221 instanceof Object))
{var ex__5697__auto__ = e45221;var statearr_45222_45224 = state_45215;(statearr_45222_45224[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45215);
return cljs.core.constant$keyword$936;
} else
{throw e45221;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__45225 = state_45215;
state_45215 = G__45225;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45215){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_45223 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1199,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__45226,type){var vec__45228 = p__45226;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1170,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,type,cljs.core.constant$keyword$989,selection], null),cljs.core.constant$keyword$1174,selection_investment_stats,cljs.core.constant$keyword$1161,selection_investment_account_timelines,cljs.core.constant$keyword$1195,selection_investment_aggs,cljs.core.constant$keyword$1194,selection_investments,cljs.core.constant$keyword$1333], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__45229){var vec__45234 = p__45229;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$1192.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1192,selector], 0));
var pred__45235 = cljs.core._EQ_;var expr__45236 = type;if(cljs.core.truth_((pred__45235.cljs$core$IFn$_invoke$arity$2 ? pred__45235.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1137,expr__45236) : pred__45235.call(null,cljs.core.constant$keyword$1137,expr__45236))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.portfolio_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__45235.cljs$core$IFn$_invoke$arity$2 ? pred__45235.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1138,expr__45236) : pred__45235.call(null,cljs.core.constant$keyword$1138,expr__45236))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.investor_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__45235.cljs$core$IFn$_invoke$arity$2 ? pred__45235.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1140,expr__45236) : pred__45235.call(null,cljs.core.constant$keyword$1140,expr__45236))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.constituency.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.constituency.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.constituency.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1198.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1198,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3546__auto__ = type;if(cljs.core.truth_(and__3546__auto__))
{return id;
} else
{return and__3546__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3558__auto__ = view;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view))));
} else
{return clustermap.app.history.setToken((""));

}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__45241 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45241,(3),null);var type__$1 = ((((function (){var G__45242 = type;var G__45242__$1 = (((G__45242 == null))?null:clojure.string.trim(G__45242));var G__45242__$2 = (((G__45242__$1 == null))?null:cljs.core.count(G__45242__$1));return G__45242__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__45243 = id;var G__45243__$1 = (((G__45243 == null))?null:clojure.string.trim(G__45243));var G__45243__$2 = (((G__45243__$1 == null))?null:cljs.core.count(G__45243__$1));return G__45243__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1198,view,cljs.core.constant$keyword$974,type__$1,cljs.core.constant$keyword$976,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__45244){var vec__45247 = p__45244;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45247,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45247,(1),null);var map__45248 = clustermap.app.parse_route();var map__45248__$1 = ((cljs.core.seq_QMARK_(map__45248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45248):map__45248);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45248__$1,cljs.core.constant$keyword$1198);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__45250 = clustermap.app.parse_route();var map__45250__$1 = ((cljs.core.seq_QMARK_(map__45250))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45250):map__45250);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,cljs.core.constant$keyword$976);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,cljs.core.constant$keyword$974);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_45283){var state_val_45284 = (state_45283[(1)]);if((state_val_45284 === (2)))
{var inst_45274 = (state_45283[(7)]);var inst_45280 = (state_45283[(2)]);var inst_45281 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1334,inst_45274,cljs.core.constant$keyword$1195,inst_45280], 0));var state_45283__$1 = state_45283;return cljs.core.async.impl.ioc_helpers.return_chan(state_45283__$1,inst_45281);
} else
{if((state_val_45284 === (1)))
{var inst_45274 = (state_45283[(7)]);var inst_45272 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45273 = cljs.core.constant$keyword$1334.cljs$core$IFn$_invoke$arity$1(inst_45272);var inst_45274__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45273,table_view], 0));var inst_45275 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45276 = cljs.core.constant$keyword$1192.cljs$core$IFn$_invoke$arity$1(inst_45275);var inst_45277 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45276,inst_45274__$1], 0));var inst_45278 = (clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(inst_45277) : clustermap.api.investment_aggs.call(null,inst_45277));var state_45283__$1 = (function (){var statearr_45285 = state_45283;(statearr_45285[(7)] = inst_45274__$1);
return statearr_45285;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45283__$1,(2),inst_45278);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45289 = [null,null,null,null,null,null,null,null];(statearr_45289[(0)] = state_machine__5694__auto__);
(statearr_45289[(1)] = (1));
return statearr_45289;
});
var state_machine__5694__auto____1 = (function (state_45283){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45283);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45290){if((e45290 instanceof Object))
{var ex__5697__auto__ = e45290;var statearr_45291_45293 = state_45283;(statearr_45291_45293[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45283);
return cljs.core.constant$keyword$936;
} else
{throw e45290;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__45294 = state_45283;
state_45283 = G__45294;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45283){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_45292 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_45327){var state_val_45328 = (state_45327[(1)]);if((state_val_45328 === (2)))
{var inst_45318 = (state_45327[(7)]);var inst_45324 = (state_45327[(2)]);var inst_45325 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1335,inst_45318,cljs.core.constant$keyword$1194,inst_45324], 0));var state_45327__$1 = state_45327;return cljs.core.async.impl.ioc_helpers.return_chan(state_45327__$1,inst_45325);
} else
{if((state_val_45328 === (1)))
{var inst_45318 = (state_45327[(7)]);var inst_45316 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45317 = cljs.core.constant$keyword$1335.cljs$core$IFn$_invoke$arity$1(inst_45316);var inst_45318__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45317,table_view], 0));var inst_45319 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45320 = cljs.core.constant$keyword$1192.cljs$core$IFn$_invoke$arity$1(inst_45319);var inst_45321 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45320,inst_45318__$1], 0));var inst_45322 = (clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(inst_45321) : clustermap.api.investments.call(null,inst_45321));var state_45327__$1 = (function (){var statearr_45329 = state_45327;(statearr_45329[(7)] = inst_45318__$1);
return statearr_45329;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45327__$1,(2),inst_45322);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45333 = [null,null,null,null,null,null,null,null];(statearr_45333[(0)] = state_machine__5694__auto__);
(statearr_45333[(1)] = (1));
return statearr_45333;
});
var state_machine__5694__auto____1 = (function (state_45327){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45327);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45334){if((e45334 instanceof Object))
{var ex__5697__auto__ = e45334;var statearr_45335_45337 = state_45327;(statearr_45335_45337[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45327);
return cljs.core.constant$keyword$936;
} else
{throw e45334;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__45338 = state_45327;
state_45327 = G__45338;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45327){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_45336 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1200,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$1071,clustermap.app.set_selection_route,cljs.core.constant$keyword$1336,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1279,clustermap.app.set_view_route,cljs.core.constant$keyword$1337,clustermap.app.change_view,cljs.core.constant$keyword$1147,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$1155,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9531__auto___45355 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45347 = params__9532__auto__;var map__45347__$1 = ((cljs.core.seq_QMARK_(map__45347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45347):map__45347);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45348 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9531__auto___45355);
var action__9531__auto___45356 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45349 = params__9532__auto__;var map__45349__$1 = ((cljs.core.seq_QMARK_(map__45349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45349):map__45349);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45350 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9531__auto___45356);
var action__9531__auto___45357 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45351 = params__9532__auto__;var map__45351__$1 = ((cljs.core.seq_QMARK_(map__45351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45351):map__45351);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45351__$1,cljs.core.constant$keyword$1198);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1337,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45352 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45352,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1337,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9531__auto___45357);
var action__9531__auto___45358 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45353 = params__9532__auto__;var map__45353__$1 = ((cljs.core.seq_QMARK_(map__45353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45353):map__45353);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45353__$1,cljs.core.constant$keyword$976);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45353__$1,cljs.core.constant$keyword$974);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45353__$1,cljs.core.constant$keyword$1198);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1337,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45354 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45354,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45354,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45354,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1337,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9531__auto___45358);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1146,comm,cljs.core.constant$keyword$1135,path_fn,cljs.core.constant$keyword$1136,link_fn,cljs.core.constant$keyword$1213,clustermap.app.change_view_path,cljs.core.constant$keyword$1318,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$971),cljs.core.constant$keyword$1317,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$971,cljs.core.constant$keyword$1338)], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1011,clustermap.components.map.map_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"map-component",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011], null),cljs.core.constant$keyword$957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$964,cljs.core.constant$keyword$1114], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1207,clustermap.components.map_report.map_report_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"map-report-component",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$964,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$964], null),cljs.core.constant$keyword$1211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109], null),cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1207], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1200,clustermap.components.filter.filter_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"search-component",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$964,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$964], null),cljs.core.constant$keyword$956,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$956], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1339,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"variable-selection-component",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1019,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1309], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1340,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1321,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"stat-selection-component",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1019,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1310], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1341,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"scale-selection-component",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1019,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1310], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1342,clustermap.components.color_scale.color_scale_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"color-scale-component",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1019,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1308], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1325,clustermap.components.table.table_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"full-report-table",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1132,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1325], null),cljs.core.constant$keyword$964,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$964], null),cljs.core.constant$keyword$956,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$956], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1326,clustermap.components.timeline_chart.timeline_chart,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1047,"turnover-timeline",cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1108,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326], null),cljs.core.constant$keyword$964,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$964], null),cljs.core.constant$keyword$956,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$956], null)], null)], 0));
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (state_45405){var state_val_45406 = (state_45405[(1)]);if((state_val_45406 === (7)))
{var inst_45394 = (state_45405[(2)]);var inst_45395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45394,(0),null);var inst_45396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45394,(1),null);var inst_45397 = clustermap.app.handle_event(inst_45395,inst_45396);var state_45405__$1 = (function (){var statearr_45407 = state_45405;(statearr_45407[(7)] = inst_45397);
return statearr_45407;
})();var statearr_45408_45421 = state_45405__$1;(statearr_45408_45421[(2)] = null);
(statearr_45408_45421[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45406 === (6)))
{var inst_45401 = (state_45405[(2)]);var state_45405__$1 = state_45405;var statearr_45409_45422 = state_45405__$1;(statearr_45409_45422[(2)] = inst_45401);
(statearr_45409_45422[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45406 === (5)))
{var state_45405__$1 = state_45405;var statearr_45410_45423 = state_45405__$1;(statearr_45410_45423[(2)] = null);
(statearr_45410_45423[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45406 === (4)))
{var state_45405__$1 = state_45405;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45405__$1,(7),comm);
} else
{if((state_val_45406 === (3)))
{var inst_45403 = (state_45405[(2)]);var state_45405__$1 = state_45405;return cljs.core.async.impl.ioc_helpers.return_chan(state_45405__$1,inst_45403);
} else
{if((state_val_45406 === (2)))
{var state_45405__$1 = state_45405;var statearr_45411_45424 = state_45405__$1;(statearr_45411_45424[(1)] = (4));

return cljs.core.constant$keyword$936;
} else
{if((state_val_45406 === (1)))
{var state_45405__$1 = state_45405;var statearr_45413_45425 = state_45405__$1;(statearr_45413_45425[(2)] = null);
(statearr_45413_45425[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45417 = [null,null,null,null,null,null,null,null];(statearr_45417[(0)] = state_machine__5694__auto__);
(statearr_45417[(1)] = (1));
return statearr_45417;
});
var state_machine__5694__auto____1 = (function (state_45405){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45405);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45418){if((e45418 instanceof Object))
{var ex__5697__auto__ = e45418;var statearr_45419_45426 = state_45405;(statearr_45419_45426[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45405);
return cljs.core.constant$keyword$936;
} else
{throw e45418;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__45427 = state_45405;
state_45405 = G__45427;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45405){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared))
})();var state__5710__auto__ = (function (){var statearr_45420 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
);
return c__5708__auto__;
});
