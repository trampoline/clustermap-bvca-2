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
clustermap.core.initial_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1157,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1156,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$1157,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$1150,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1564,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1372,false,cljs.core.constant$keyword$1142,null,cljs.core.constant$keyword$1373,null], null),cljs.core.constant$keyword$1339,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1646,cljs.core.constant$keyword$1645,"companies",cljs.core.constant$keyword$1625,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1368,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1631,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1630,null,cljs.core.constant$keyword$1142,null,cljs.core.constant$keyword$1629,null,cljs.core.constant$keyword$1627,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1350,cljs.core.constant$keyword$1158,"companies",cljs.core.constant$keyword$1369,"company",cljs.core.constant$keyword$1243,"boundaryline_id",cljs.core.constant$keyword$1639,"!latest_employee_count"], null),cljs.core.constant$keyword$1628,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1197,cljs.core.constant$keyword$1211], null),cljs.core.constant$keyword$1641,cljs.core.constant$keyword$1215,cljs.core.constant$keyword$1639,cljs.core.constant$keyword$1554], null)], null),cljs.core.constant$keyword$1305,null], null),cljs.core.constant$keyword$1557,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1368,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1558,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1158,"companies",cljs.core.constant$keyword$1369,"company",cljs.core.constant$keyword$1559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1558,null], null),cljs.core.constant$keyword$1643,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1643,cljs.core.constant$keyword$1368,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1158,"companies",cljs.core.constant$keyword$1369,"company",cljs.core.constant$keyword$1393,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1556,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1394,"desc"], null)], null),cljs.core.constant$keyword$1148,(0),cljs.core.constant$keyword$1149,(50),cljs.core.constant$keyword$1405,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1647,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1648,"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1649,"Formation date",(function (p1__58502_SHARP_){return clustermap.formats.time.format_date(p1__58502_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1650,"Filing date",(function (p1__58503_SHARP_){return clustermap.formats.time.format_date(p1__58503_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1553,"Employees",(function (p1__58504_SHARP_){return clustermap.formats.number.readable.cljs$core$IFn$_invoke$arity$variadic(p1__58504_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1317,(0)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1556,"Turnover",(function (p1__58505_SHARP_){return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(p1__58505_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1315,(3),cljs.core.constant$keyword$1346,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$1399,null], null),cljs.core.constant$keyword$1644,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1349,cljs.core.constant$keyword$1645,"company_accounts",cljs.core.constant$keyword$1368,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1158,"company-accounts",cljs.core.constant$keyword$1369,"accounts",cljs.core.constant$keyword$1151,"?accounts_date",cljs.core.constant$keyword$1370,"!turnover",cljs.core.constant$keyword$1154,"year"], null),cljs.core.constant$keyword$1371,null], null),cljs.core.constant$keyword$1548,cljs.core.constant$keyword$1339], null);
clustermap.core.components = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1313,clustermap.components.map.map_component,cljs.core.constant$keyword$1252,"map-component",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339], null),cljs.core.constant$keyword$1143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150,cljs.core.constant$keyword$1373], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1557,cljs.core.constant$keyword$1313,clustermap.components.map_report.map_report_component,cljs.core.constant$keyword$1252,"map-report-component",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368], null),cljs.core.constant$keyword$1557,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1557], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1550,cljs.core.constant$keyword$1313,clustermap.components.filter.filter_component,cljs.core.constant$keyword$1252,"search-component",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1142,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1142], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1651,cljs.core.constant$keyword$1313,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),cljs.core.constant$keyword$1252,"variable-selection-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1627], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1652,cljs.core.constant$keyword$1313,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1639,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),cljs.core.constant$keyword$1252,"stat-selection-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1628], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1653,cljs.core.constant$keyword$1313,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),cljs.core.constant$keyword$1252,"scale-selection-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1628], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1654,cljs.core.constant$keyword$1313,clustermap.components.color_scale.color_scale_component,cljs.core.constant$keyword$1252,"color-scale-component",cljs.core.constant$keyword$1217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1626], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1643,cljs.core.constant$keyword$1313,clustermap.components.table.table_component,cljs.core.constant$keyword$1252,"full-report-table",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1410,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1643], null),cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1142,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1142], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$1644,cljs.core.constant$keyword$1313,clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$1252,"turnover-timeline",cljs.core.constant$keyword$1255,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1367,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1644], null),cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1150], null),cljs.core.constant$keyword$1142,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1142], null)], null)], null)], null);
clustermap.core.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.core.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__58510 = cljs.core.seq(clustermap.core.bl_collections);var chunk__58511 = null;var count__58512 = (0);var i__58513 = (0);while(true){
if((i__58513 < count__58512))
{var blcoll = chunk__58511.cljs$core$IIndexed$_nth$arity$2(null,i__58513);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1157,blcoll);
{
var G__58514 = seq__58510;
var G__58515 = chunk__58511;
var G__58516 = count__58512;
var G__58517 = (i__58513 + (1));
seq__58510 = G__58514;
chunk__58511 = G__58515;
count__58512 = G__58516;
i__58513 = G__58517;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__58510);if(temp__4126__auto__)
{var seq__58510__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__58510__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__58510__$1);{
var G__58518 = cljs.core.chunk_rest(seq__58510__$1);
var G__58519 = c__4406__auto__;
var G__58520 = cljs.core.count(c__4406__auto__);
var G__58521 = (0);
seq__58510 = G__58518;
chunk__58511 = G__58519;
count__58512 = G__58520;
i__58513 = G__58521;
continue;
}
} else
{var blcoll = cljs.core.first(seq__58510__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1157,blcoll);
{
var G__58522 = cljs.core.next(seq__58510__$1);
var G__58523 = null;
var G__58524 = (0);
var G__58525 = (0);
seq__58510 = G__58522;
chunk__58511 = G__58523;
count__58512 = G__58524;
i__58513 = G__58525;
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
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__58529 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(3),null);var type__$1 = ((((function (){var G__58530 = type;var G__58530__$1 = (((G__58530 == null))?null:clojure.string.trim(G__58530));var G__58530__$2 = (((G__58530__$1 == null))?null:cljs.core.count(G__58530__$1));return G__58530__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__58531 = id;var G__58531__$1 = (((G__58531 == null))?null:clojure.string.trim(G__58531));var G__58531__$2 = (((G__58531__$1 == null))?null:cljs.core.count(G__58531__$1));return G__58531__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1548,view,cljs.core.constant$keyword$1160,type__$1,cljs.core.constant$keyword$1162,id__$1], null);
});
clustermap.core.change_view = (function change_view(state,view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1548.cljs$core$IFn$_invoke$arity$1((function (){var G__58533 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__58533) : cljs.core.deref.call(null,G__58533));
})())))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.constant$keyword$1548,view__$1);
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
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__58537 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(3),null);var type__$1 = ((((function (){var G__58538 = type;var G__58538__$1 = (((G__58538 == null))?null:clojure.string.trim(G__58538));var G__58538__$2 = (((G__58538__$1 == null))?null:cljs.core.count(G__58538__$1));return G__58538__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__58539 = id;var G__58539__$1 = (((G__58539 == null))?null:clojure.string.trim(G__58539));var G__58539__$2 = (((G__58539__$1 == null))?null:cljs.core.count(G__58539__$1));return G__58539__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1548,view,cljs.core.constant$keyword$1160,type__$1,cljs.core.constant$keyword$1162,id__$1], null);
});
clustermap.core.set_view_route = (function set_view_route(history,view){var map__58541 = clustermap.core.parse_route(history);var map__58541__$1 = ((cljs.core.seq_QMARK_(map__58541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58541):map__58541);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,cljs.core.constant$keyword$1162);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,cljs.core.constant$keyword$1160);return clustermap.core.set_route(history,view,type,id);
});
clustermap.core.create_event_handlers_map = (function create_event_handlers_map(state,history){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1311,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.set_view_route,history),cljs.core.constant$keyword$1655,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.change_view,state),cljs.core.constant$keyword$1281,(function (t,v){return console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [":select (ignored)",t,v], null)));
})], null);
});
clustermap.core.choose_event_handler = (function choose_event_handler(event_handlers_map,type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_handlers_map,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
var G__58543 = val;return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__58543) : handler.call(null,G__58543));
});
clustermap.core.init_routes = (function init_routes(history,comm){var action__10098__auto___58560 = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__58552 = params__10099__auto__;var map__58552__$1 = ((cljs.core.seq_QMARK_(map__58552))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58552):map__58552);return null;
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__58553 = params__10099__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__10098__auto___58560);
var action__10098__auto___58561 = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__58554 = params__10099__auto__;var map__58554__$1 = ((cljs.core.seq_QMARK_(map__58554))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58554):map__58554);return null;
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__58555 = params__10099__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__10098__auto___58561);
var action__10098__auto___58562 = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__58556 = params__10099__auto__;var map__58556__$1 = ((cljs.core.seq_QMARK_(map__58556))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58556):map__58556);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,cljs.core.constant$keyword$1548);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__58557 = params__10099__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__10098__auto___58562);
var action__10098__auto__ = (function (params__10099__auto__){if(cljs.core.map_QMARK_(params__10099__auto__))
{var map__58558 = params__10099__auto__;var map__58558__$1 = ((cljs.core.seq_QMARK_(map__58558))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58558):map__58558);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,cljs.core.constant$keyword$1162);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,cljs.core.constant$keyword$1160);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,cljs.core.constant$keyword$1548);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{if(cljs.core.vector_QMARK_(params__10099__auto__))
{var vec__58559 = params__10099__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58559,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58559,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58559,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1655,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__10098__auto__);
return ((function (action__10098__auto__){
return (function() { 
var G__58563__delegate = function (args__10097__auto__){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:view/:type/:id",args__10097__auto__);
};
var G__58563 = function (var_args){
var args__10097__auto__ = null;if (arguments.length > 0) {
  args__10097__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__58563__delegate.call(this,args__10097__auto__);};
G__58563.cljs$lang$maxFixedArity = 0;
G__58563.cljs$lang$applyTo = (function (arglist__58564){
var args__10097__auto__ = cljs.core.seq(arglist__58564);
return G__58563__delegate(args__10097__auto__);
});
G__58563.cljs$core$IFn$_invoke$arity$variadic = G__58563__delegate;
return G__58563;
})()
;
;})(action__10098__auto__))
});
clustermap.core.create_app_service = (function create_app_service(){var event_handlers = (function (){var G__58572 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58572) : cljs.core.atom.call(null,G__58572));
})();if(typeof clustermap.core.t58573 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.core.t58573 = (function (event_handlers,create_app_service,meta58574){
this.event_handlers = event_handlers;
this.create_app_service = create_app_service;
this.meta58574 = meta58574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.core.t58573.cljs$lang$type = true;
clustermap.core.t58573.cljs$lang$ctorStr = "clustermap.core/t58573";
clustermap.core.t58573.cljs$lang$ctorPrWriter = ((function (event_handlers){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.core/t58573");
});})(event_handlers))
;
clustermap.core.t58573.prototype.clustermap$app$IAppService$ = true;
clustermap.core.t58573.prototype.clustermap$app$IAppService$init$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;clustermap.nav.init(clustermap.app.get_comm(app));
clustermap.core.init_routes(clustermap.app.get_history(app),clustermap.app.get_comm(app));
clustermap.core.load_boundaryline_collection_indexes(clustermap.app.get_state(app));
var G__58576_58579 = self__.event_handlers;var G__58577_58580 = clustermap.core.create_event_handlers_map(clustermap.app.get_state(app),clustermap.app.get_history(app));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__58576_58579,G__58577_58580) : cljs.core.reset_BANG_.call(null,G__58576_58579,G__58577_58580));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1491,clustermap.routes.path_for,cljs.core.constant$keyword$1492,clustermap.routes.link_for,cljs.core.constant$keyword$1563,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.parse_route,clustermap.app.get_history(app))),cljs.core.constant$keyword$1636,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.get_state(app),cljs.core.constant$keyword$1157),cljs.core.constant$keyword$1635,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.get_state(app),cljs.core.constant$keyword$1157,cljs.core.constant$keyword$1656)], null);
});})(event_handlers))
;
clustermap.core.t58573.prototype.clustermap$app$IAppService$destroy$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;return null;
});})(event_handlers))
;
clustermap.core.t58573.prototype.clustermap$app$IAppService$handle_event$arity$4 = ((function (event_handlers){
return (function (this$,app,type,val){var self__ = this;
var this$__$1 = this;return clustermap.core.choose_event_handler((function (){var G__58578 = self__.event_handlers;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__58578) : cljs.core.deref.call(null,G__58578));
})(),type,val);
});})(event_handlers))
;
clustermap.core.t58573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_handlers){
return (function (_58575){var self__ = this;
var _58575__$1 = this;return self__.meta58574;
});})(event_handlers))
;
clustermap.core.t58573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_handlers){
return (function (_58575,meta58574__$1){var self__ = this;
var _58575__$1 = this;return (new clustermap.core.t58573(self__.event_handlers,self__.create_app_service,meta58574__$1));
});})(event_handlers))
;
clustermap.core.__GT_t58573 = ((function (event_handlers){
return (function __GT_t58573(event_handlers__$1,create_app_service__$1,meta58574){return (new clustermap.core.t58573(event_handlers__$1,create_app_service__$1,meta58574));
});})(event_handlers))
;
}
return (new clustermap.core.t58573(event_handlers,create_app_service,null));
});
clustermap.core.app_instance = (function (){var G__58581 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58581) : cljs.core.atom.call(null,G__58581));
})();
clustermap.core.init = (function init(){return clustermap.app.start_or_restart_app(clustermap.core.app_instance,clustermap.core.initial_state,clustermap.core.components,clustermap.core.create_app_service());
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic("ws://localhost:9001",cljs.core.array_seq([cljs.core.constant$keyword$1388,true], 0));
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1578,"ws://localhost:3449/figwheel-ws",cljs.core.constant$keyword$1590,(function (){clustermap.core.init();
return console.log("restarted");
})], 0));
clustermap.core.init();
} else
{clustermap.core.init();

}
