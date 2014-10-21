// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('clustermap.components.timeline_chart');
goog.require('weasel.repl');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.routes');
goog.require('figwheel.client');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.boundarylines');
goog.require('clustermap.app');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.map_report');
goog.require('figwheel.client');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('clustermap.app');
goog.require('clustermap.components.map');
goog.require('clustermap.formats.money');
goog.require('weasel.repl');
clustermap.core.initial_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1157,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1156,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$1150,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1320,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1319,false,cljs.core.constant$keyword$1142,null,cljs.core.constant$keyword$1334,null], null),cljs.core.constant$keyword$1356,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1646,cljs.core.constant$keyword$1645,"companies",cljs.core.constant$keyword$1565,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1384,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1570,null,cljs.core.constant$keyword$1142,null,cljs.core.constant$keyword$1569,null,cljs.core.constant$keyword$1567,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1366,cljs.core.constant$keyword$1158,"companies",cljs.core.constant$keyword$1385,"company",cljs.core.constant$keyword$1243,"boundaryline_id",cljs.core.constant$keyword$1579,"!latest_employee_count"], null),cljs.core.constant$keyword$1568,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1197,cljs.core.constant$keyword$1211], null),cljs.core.constant$keyword$1581,cljs.core.constant$keyword$1215,cljs.core.constant$keyword$1579,cljs.core.constant$keyword$1584], null)], null),cljs.core.constant$keyword$1305,null], null),cljs.core.constant$keyword$1587,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1384,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1588,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,"companies",cljs.core.constant$keyword$1385,"company",cljs.core.constant$keyword$1589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1588,null], null),cljs.core.constant$keyword$1643,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1643,cljs.core.constant$keyword$1384,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1158,"companies",cljs.core.constant$keyword$1385,"company",cljs.core.constant$keyword$1397,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1586,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1398,"desc"], null)], null),cljs.core.constant$keyword$1148,(0),cljs.core.constant$keyword$1149,(50),cljs.core.constant$keyword$1409,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1647,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1648,"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1649,"Formation date",(function (p1__57219_SHARP_){return clustermap.formats.time.format_date(p1__57219_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1650,"Filing date",(function (p1__57220_SHARP_){return clustermap.formats.time.format_date(p1__57220_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1583,"Employees",(function (p1__57221_SHARP_){return clustermap.formats.number.readable.cljs$core$IFn$_invoke$arity$variadic(p1__57221_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1317,(0)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1586,"Turnover",(function (p1__57222_SHARP_){return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(p1__57222_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1315,(3),cljs.core.constant$keyword$1318,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$1403,null], null),cljs.core.constant$keyword$1644,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1365,cljs.core.constant$keyword$1645,"company_accounts",cljs.core.constant$keyword$1384,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1158,"company-accounts",cljs.core.constant$keyword$1385,"accounts",cljs.core.constant$keyword$1151,"?accounts_date",cljs.core.constant$keyword$1386,"!turnover",cljs.core.constant$keyword$1154,"year"], null),cljs.core.constant$keyword$1387,null], null),cljs.core.constant$keyword$1600,cljs.core.constant$keyword$1356], null);
clustermap.core.components = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1313,clustermap.components.map.map_component,cljs.core.constant$keyword$1252,"map-component",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1563,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356], null),cljs.core.constant$keyword$1143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150,cljs.core.constant$keyword$1334], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1587,cljs.core.constant$keyword$1313,clustermap.components.map_report.map_report_component,cljs.core.constant$keyword$1252,"map-report-component",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384], null),cljs.core.constant$keyword$1587,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1587], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1602,cljs.core.constant$keyword$1313,clustermap.components.filter.filter_component,cljs.core.constant$keyword$1252,"search-component",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1142,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1142], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1651,cljs.core.constant$keyword$1313,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),cljs.core.constant$keyword$1252,"variable-selection-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1567], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1652,cljs.core.constant$keyword$1313,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1579,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),cljs.core.constant$keyword$1252,"stat-selection-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1568], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1653,cljs.core.constant$keyword$1313,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),cljs.core.constant$keyword$1252,"scale-selection-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1568], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1654,cljs.core.constant$keyword$1313,clustermap.components.color_scale.color_scale_component,cljs.core.constant$keyword$1252,"color-scale-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1566], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1643,cljs.core.constant$keyword$1313,clustermap.components.table.table_component,cljs.core.constant$keyword$1252,"full-report-table",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1414,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1643], null),cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1142,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1142], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1644,cljs.core.constant$keyword$1313,clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$1252,"turnover-timeline",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1383,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1644], null),cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1142,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1142], null)], null)], null)], null);
clustermap.core.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.core.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__57227 = cljs.core.seq(clustermap.core.bl_collections);var chunk__57228 = null;var count__57229 = (0);var i__57230 = (0);while(true){
if((i__57230 < count__57229))
{var blcoll = chunk__57228.cljs$core$IIndexed$_nth$arity$2(null,i__57230);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1157,blcoll);
{
var G__57231 = seq__57227;
var G__57232 = chunk__57228;
var G__57233 = count__57229;
var G__57234 = (i__57230 + (1));
seq__57227 = G__57231;
chunk__57228 = G__57232;
count__57229 = G__57233;
i__57230 = G__57234;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__57227);if(temp__4126__auto__)
{var seq__57227__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__57227__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__57227__$1);{
var G__57235 = cljs.core.chunk_rest(seq__57227__$1);
var G__57236 = c__4406__auto__;
var G__57237 = cljs.core.count(c__4406__auto__);
var G__57238 = (0);
seq__57227 = G__57235;
chunk__57228 = G__57236;
count__57229 = G__57237;
i__57230 = G__57238;
continue;
}
} else
{var blcoll = cljs.core.first(seq__57227__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1157,blcoll);
{
var G__57239 = cljs.core.next(seq__57227__$1);
var G__57240 = null;
var G__57241 = (0);
var G__57242 = (0);
seq__57227 = G__57239;
chunk__57228 = G__57240;
count__57229 = G__57241;
i__57230 = G__57242;
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
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__57246 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(3),null);var type__$1 = ((((function (){var G__57247 = type;var G__57247__$1 = (((G__57247 == null))?null:clojure.string.trim(G__57247));var G__57247__$2 = (((G__57247__$1 == null))?null:cljs.core.count(G__57247__$1));return G__57247__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__57248 = id;var G__57248__$1 = (((G__57248 == null))?null:clojure.string.trim(G__57248));var G__57248__$2 = (((G__57248__$1 == null))?null:cljs.core.count(G__57248__$1));return G__57248__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1600,view,cljs.core.constant$keyword$1160,type__$1,cljs.core.constant$keyword$1162,id__$1], null);
});
clustermap.core.change_view = (function change_view(state,view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1600.cljs$core$IFn$_invoke$arity$1((function (){var G__57250 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__57250) : cljs.core.deref.call(null,G__57250));
})())))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.constant$keyword$1600,view__$1);
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.core.set_route = (function set_route(history,view,type,id){if(cljs.core.truth_((function (){var and__3625__auto__ = type;if(cljs.core.truth_(and__3625__auto__))
{return id;
} else
{return and__3625__auto__;
}
})()))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3637__auto__ = view;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
} else
{if(cljs.core.truth_(view))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view))));
} else
{return history.setToken((""));

}
}
});
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__57254 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57254,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57254,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57254,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57254,(3),null);var type__$1 = ((((function (){var G__57255 = type;var G__57255__$1 = (((G__57255 == null))?null:clojure.string.trim(G__57255));var G__57255__$2 = (((G__57255__$1 == null))?null:cljs.core.count(G__57255__$1));return G__57255__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__57256 = id;var G__57256__$1 = (((G__57256 == null))?null:clojure.string.trim(G__57256));var G__57256__$2 = (((G__57256__$1 == null))?null:cljs.core.count(G__57256__$1));return G__57256__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1600,view,cljs.core.constant$keyword$1160,type__$1,cljs.core.constant$keyword$1162,id__$1], null);
});
clustermap.core.set_view_route = (function set_view_route(history,view){var map__57258 = clustermap.core.parse_route(history);var map__57258__$1 = ((cljs.core.seq_QMARK_(map__57258))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57258):map__57258);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57258__$1,cljs.core.constant$keyword$1162);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57258__$1,cljs.core.constant$keyword$1160);return clustermap.core.set_route(history,view,type,id);
});
clustermap.core.create_event_handlers_map = (function create_event_handlers_map(state,history){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1311,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.set_view_route,history),cljs.core.constant$keyword$1655,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.change_view,state),cljs.core.constant$keyword$1281,(function (t,v){return console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [":select (ignored)",t,v], null)));
})], null);
});
clustermap.core.choose_event_handler = (function choose_event_handler(event_handlers_map,type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_handlers_map,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
var G__57260 = val;return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__57260) : handler.call(null,G__57260));
});
clustermap.core.init_routes = (function init_routes(history,comm){var action__10098__auto___57277 = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__57269 = params__10099__auto__;var map__57269__$1 = ((cljs.core.seq_QMARK_(map__57269))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57269):map__57269);return null;
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__57270 = params__10099__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__10098__auto___57277);
var action__10098__auto___57278 = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__57271 = params__10099__auto__;var map__57271__$1 = ((cljs.core.seq_QMARK_(map__57271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57271):map__57271);return null;
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__57272 = params__10099__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__10098__auto___57278);
var action__10098__auto___57279 = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__57273 = params__10099__auto__;var map__57273__$1 = ((cljs.core.seq_QMARK_(map__57273))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57273):map__57273);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57273__$1,cljs.core.constant$keyword$1600);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__57274 = params__10099__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57274,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__10098__auto___57279);
var action__10098__auto__ = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__57275 = params__10099__auto__;var map__57275__$1 = ((cljs.core.seq_QMARK_(map__57275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57275):map__57275);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57275__$1,cljs.core.constant$keyword$1162);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57275__$1,cljs.core.constant$keyword$1160);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57275__$1,cljs.core.constant$keyword$1600);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__57276 = params__10099__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57276,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57276,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57276,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__10098__auto__);
return ((function (action__10098__auto__){
return (function() { 
var G__57280__delegate = function (args__10097__auto__){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:view/:type/:id",args__10097__auto__);
};
var G__57280 = function (var_args){
var args__10097__auto__ = null;if (arguments.length > 0) {
  args__10097__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__57280__delegate.call(this,args__10097__auto__);};
G__57280.cljs$lang$maxFixedArity = 0;
G__57280.cljs$lang$applyTo = (function (arglist__57281){
var args__10097__auto__ = cljs.core.seq(arglist__57281);
return G__57280__delegate(args__10097__auto__);
});
G__57280.cljs$core$IFn$_invoke$arity$variadic = G__57280__delegate;
return G__57280;
})()
;
;})(action__10098__auto__))
});
clustermap.core.create_app_service = (function create_app_service(){var event_handlers = (function (){var G__57289 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57289) : cljs.core.atom.call(null,G__57289));
})();if(typeof clustermap.core.t57290 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.core.t57290 = (function (event_handlers,create_app_service,meta57291){
this.event_handlers = event_handlers;
this.create_app_service = create_app_service;
this.meta57291 = meta57291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.core.t57290.cljs$lang$type = true;
clustermap.core.t57290.cljs$lang$ctorStr = "clustermap.core/t57290";
clustermap.core.t57290.cljs$lang$ctorPrWriter = ((function (event_handlers){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.core/t57290");
});})(event_handlers))
;
clustermap.core.t57290.prototype.clustermap$app$IAppService$ = true;
clustermap.core.t57290.prototype.clustermap$app$IAppService$init$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;clustermap.nav.init(clustermap.app.get_comm(app));
clustermap.core.init_routes(clustermap.app.get_history(app),clustermap.app.get_comm(app));
clustermap.core.load_boundaryline_collection_indexes(clustermap.app.get_state(app));
var G__57293_57296 = self__.event_handlers;var G__57294_57297 = clustermap.core.create_event_handlers_map(clustermap.app.get_state(app),clustermap.app.get_history(app));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__57293_57296,G__57294_57297) : cljs.core.reset_BANG_.call(null,G__57293_57296,G__57294_57297));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1496,clustermap.routes.path_for,cljs.core.constant$keyword$1497,clustermap.routes.link_for,cljs.core.constant$keyword$1593,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.parse_route,clustermap.app.get_history(app))),cljs.core.constant$keyword$1576,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.get_state(app),cljs.core.constant$keyword$1157),cljs.core.constant$keyword$1575,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.get_state(app),cljs.core.constant$keyword$1157,cljs.core.constant$keyword$1656)], null);
});})(event_handlers))
;
clustermap.core.t57290.prototype.clustermap$app$IAppService$destroy$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;return null;
});})(event_handlers))
;
clustermap.core.t57290.prototype.clustermap$app$IAppService$handle_event$arity$4 = ((function (event_handlers){
return (function (this$,app,type,val){var self__ = this;
var this$__$1 = this;return clustermap.core.choose_event_handler((function (){var G__57295 = self__.event_handlers;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__57295) : cljs.core.deref.call(null,G__57295));
})(),type,val);
});})(event_handlers))
;
clustermap.core.t57290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_handlers){
return (function (_57292){var self__ = this;
var _57292__$1 = this;return self__.meta57291;
});})(event_handlers))
;
clustermap.core.t57290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_handlers){
return (function (_57292,meta57291__$1){var self__ = this;
var _57292__$1 = this;return (new clustermap.core.t57290(self__.event_handlers,self__.create_app_service,meta57291__$1));
});})(event_handlers))
;
clustermap.core.__GT_t57290 = ((function (event_handlers){
return (function __GT_t57290(event_handlers__$1,create_app_service__$1,meta57291){return (new clustermap.core.t57290(event_handlers__$1,create_app_service__$1,meta57291));
});})(event_handlers))
;
}
return (new clustermap.core.t57290(event_handlers,create_app_service,null));
});
clustermap.core.app_instance = (function (){var G__57298 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57298) : cljs.core.atom.call(null,G__57298));
})();
clustermap.core.init = (function init(){return clustermap.app.start_or_restart_app(clustermap.core.app_instance,clustermap.core.initial_state,clustermap.core.components,clustermap.core.create_app_service());
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic("ws://localhost:9001",cljs.core.array_seq([cljs.core.constant$keyword$1618,true], 0));
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1623,"ws://localhost:3449/figwheel-ws",cljs.core.constant$keyword$1635,(function (){clustermap.core.init();
return console.log("restarted");
})], 0));
clustermap.core.init();
} else
{clustermap.core.init();

}
