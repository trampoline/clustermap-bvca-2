// Compiled by ClojureScript 0.0-2322
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
clustermap.core.initial_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1135,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1134,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1136,null,cljs.core.constant$keyword$1137,null,cljs.core.constant$keyword$1135,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1136,null,cljs.core.constant$keyword$1137,null,cljs.core.constant$keyword$1135,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1136,null,cljs.core.constant$keyword$1137,null,cljs.core.constant$keyword$1135,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$1135,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$1128,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1290,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1289,false,cljs.core.constant$keyword$1120,null,cljs.core.constant$keyword$1304,null], null),cljs.core.constant$keyword$1326,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1616,cljs.core.constant$keyword$1615,"companies",cljs.core.constant$keyword$1535,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1354,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1540,null,cljs.core.constant$keyword$1120,null,cljs.core.constant$keyword$1539,null,cljs.core.constant$keyword$1537,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1336,cljs.core.constant$keyword$1136,"companies",cljs.core.constant$keyword$1355,"company",cljs.core.constant$keyword$1216,"boundaryline_id",cljs.core.constant$keyword$1549,"!latest_employee_count"], null),cljs.core.constant$keyword$1538,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1550,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1175,cljs.core.constant$keyword$1189], null),cljs.core.constant$keyword$1551,cljs.core.constant$keyword$1193,cljs.core.constant$keyword$1549,cljs.core.constant$keyword$1554], null)], null),cljs.core.constant$keyword$1275,null], null),cljs.core.constant$keyword$1557,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1354,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1558,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1136,"companies",cljs.core.constant$keyword$1355,"company",cljs.core.constant$keyword$1559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1558,null], null),cljs.core.constant$keyword$1613,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1613,cljs.core.constant$keyword$1354,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1136,"companies",cljs.core.constant$keyword$1355,"company",cljs.core.constant$keyword$1367,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1556,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1368,"desc"], null)], null),cljs.core.constant$keyword$1126,(0),cljs.core.constant$keyword$1127,(50),cljs.core.constant$keyword$1379,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1617,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1618,"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1619,"Formation date",(function (p1__45103_SHARP_){return clustermap.formats.time.format_date(p1__45103_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1620,"Filing date",(function (p1__45104_SHARP_){return clustermap.formats.time.format_date(p1__45104_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1553,"Employees",(function (p1__45105_SHARP_){return clustermap.formats.number.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45105_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1287,(0)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1556,"Turnover",(function (p1__45106_SHARP_){return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45106_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1285,(3),cljs.core.constant$keyword$1288,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$1373,null], null),cljs.core.constant$keyword$1614,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1335,cljs.core.constant$keyword$1615,"company_accounts",cljs.core.constant$keyword$1354,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1136,"company-accounts",cljs.core.constant$keyword$1355,"accounts",cljs.core.constant$keyword$1129,"?accounts_date",cljs.core.constant$keyword$1356,"!turnover",cljs.core.constant$keyword$1132,"year"], null),cljs.core.constant$keyword$1357,null], null),cljs.core.constant$keyword$1570,cljs.core.constant$keyword$1326], null);
clustermap.core.components = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1283,clustermap.components.map.map_component,cljs.core.constant$keyword$1224,"map-component",cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1533,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326], null),cljs.core.constant$keyword$1121,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128,cljs.core.constant$keyword$1304], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1557,cljs.core.constant$keyword$1283,clustermap.components.map_report.map_report_component,cljs.core.constant$keyword$1224,"map-report-component",cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1128,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128], null),cljs.core.constant$keyword$1561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354], null),cljs.core.constant$keyword$1557,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1557], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1572,cljs.core.constant$keyword$1283,clustermap.components.filter.filter_component,cljs.core.constant$keyword$1224,"search-component",cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1128,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128], null),cljs.core.constant$keyword$1120,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1120], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1621,cljs.core.constant$keyword$1283,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),cljs.core.constant$keyword$1224,"variable-selection-component",cljs.core.constant$keyword$1195,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1537], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1622,cljs.core.constant$keyword$1283,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1549,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),cljs.core.constant$keyword$1224,"stat-selection-component",cljs.core.constant$keyword$1195,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1538], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1623,cljs.core.constant$keyword$1283,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),cljs.core.constant$keyword$1224,"scale-selection-component",cljs.core.constant$keyword$1195,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1538], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1624,cljs.core.constant$keyword$1283,clustermap.components.color_scale.color_scale_component,cljs.core.constant$keyword$1224,"color-scale-component",cljs.core.constant$keyword$1195,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1536], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1613,cljs.core.constant$keyword$1283,clustermap.components.table.table_component,cljs.core.constant$keyword$1224,"full-report-table",cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1384,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1613], null),cljs.core.constant$keyword$1128,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128], null),cljs.core.constant$keyword$1120,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1120], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1614,cljs.core.constant$keyword$1283,clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$1224,"turnover-timeline",cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1353,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1614], null),cljs.core.constant$keyword$1128,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128], null),cljs.core.constant$keyword$1120,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1120], null)], null)], null)], null);
clustermap.core.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.core.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__45111 = cljs.core.seq(clustermap.core.bl_collections);var chunk__45112 = null;var count__45113 = (0);var i__45114 = (0);while(true){
if((i__45114 < count__45113))
{var blcoll = chunk__45112.cljs$core$IIndexed$_nth$arity$2(null,i__45114);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1135,blcoll);
{
var G__45115 = seq__45111;
var G__45116 = chunk__45112;
var G__45117 = count__45113;
var G__45118 = (i__45114 + (1));
seq__45111 = G__45115;
chunk__45112 = G__45116;
count__45113 = G__45117;
i__45114 = G__45118;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45111);if(temp__4126__auto__)
{var seq__45111__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45111__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45111__$1);{
var G__45119 = cljs.core.chunk_rest(seq__45111__$1);
var G__45120 = c__4314__auto__;
var G__45121 = cljs.core.count(c__4314__auto__);
var G__45122 = (0);
seq__45111 = G__45119;
chunk__45112 = G__45120;
count__45113 = G__45121;
i__45114 = G__45122;
continue;
}
} else
{var blcoll = cljs.core.first(seq__45111__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1135,blcoll);
{
var G__45123 = cljs.core.next(seq__45111__$1);
var G__45124 = null;
var G__45125 = (0);
var G__45126 = (0);
seq__45111 = G__45123;
chunk__45112 = G__45124;
count__45113 = G__45125;
i__45114 = G__45126;
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
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__45130 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45130,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45130,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45130,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45130,(3),null);var type__$1 = ((((function (){var G__45131 = type;var G__45131__$1 = (((G__45131 == null))?null:clojure.string.trim(G__45131));var G__45131__$2 = (((G__45131__$1 == null))?null:cljs.core.count(G__45131__$1));return G__45131__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__45132 = id;var G__45132__$1 = (((G__45132 == null))?null:clojure.string.trim(G__45132));var G__45132__$2 = (((G__45132__$1 == null))?null:cljs.core.count(G__45132__$1));return G__45132__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1570,view,cljs.core.constant$keyword$1138,type__$1,cljs.core.constant$keyword$1140,id__$1], null);
});
clustermap.core.change_view = (function change_view(state,view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1570.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.constant$keyword$1570,view__$1);
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.core.set_route = (function set_route(history,view,type,id){if(cljs.core.truth_((function (){var and__3546__auto__ = type;if(cljs.core.truth_(and__3546__auto__))
{return id;
} else
{return and__3546__auto__;
}
})()))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3558__auto__ = view;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__45136 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45136,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45136,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45136,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45136,(3),null);var type__$1 = ((((function (){var G__45137 = type;var G__45137__$1 = (((G__45137 == null))?null:clojure.string.trim(G__45137));var G__45137__$2 = (((G__45137__$1 == null))?null:cljs.core.count(G__45137__$1));return G__45137__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__45138 = id;var G__45138__$1 = (((G__45138 == null))?null:clojure.string.trim(G__45138));var G__45138__$2 = (((G__45138__$1 == null))?null:cljs.core.count(G__45138__$1));return G__45138__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1570,view,cljs.core.constant$keyword$1138,type__$1,cljs.core.constant$keyword$1140,id__$1], null);
});
clustermap.core.set_view_route = (function set_view_route(history,view){var map__45140 = clustermap.core.parse_route(history);var map__45140__$1 = ((cljs.core.seq_QMARK_(map__45140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45140):map__45140);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,cljs.core.constant$keyword$1140);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,cljs.core.constant$keyword$1138);return clustermap.core.set_route(history,view,type,id);
});
clustermap.core.create_event_handlers_map = (function create_event_handlers_map(state,history){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1281,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.set_view_route,history),cljs.core.constant$keyword$1625,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.change_view,state),cljs.core.constant$keyword$1251,(function (t,v){return console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [":select (ignored)",t,v], null)));
})], null);
});
clustermap.core.choose_event_handler = (function choose_event_handler(event_handlers_map,type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_handlers_map,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.core.init_routes = (function init_routes(history,comm){var action__9531__auto___45157 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45149 = params__9532__auto__;var map__45149__$1 = ((cljs.core.seq_QMARK_(map__45149))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45149):map__45149);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45150 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9531__auto___45157);
var action__9531__auto___45158 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45151 = params__9532__auto__;var map__45151__$1 = ((cljs.core.seq_QMARK_(map__45151))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45151):map__45151);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45152 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9531__auto___45158);
var action__9531__auto___45159 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45153 = params__9532__auto__;var map__45153__$1 = ((cljs.core.seq_QMARK_(map__45153))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45153):map__45153);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153__$1,cljs.core.constant$keyword$1570);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1625,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45154 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45154,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1625,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9531__auto___45159);
var action__9531__auto__ = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45155 = params__9532__auto__;var map__45155__$1 = ((cljs.core.seq_QMARK_(map__45155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45155):map__45155);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45155__$1,cljs.core.constant$keyword$1140);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45155__$1,cljs.core.constant$keyword$1138);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45155__$1,cljs.core.constant$keyword$1570);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1625,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45156 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45156,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45156,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45156,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1625,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9531__auto__);
return ((function (action__9531__auto__){
return (function() { 
var G__45160__delegate = function (args__9530__auto__){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:view/:type/:id",args__9530__auto__);
};
var G__45160 = function (var_args){
var args__9530__auto__ = null;if (arguments.length > 0) {
  args__9530__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__45160__delegate.call(this,args__9530__auto__);};
G__45160.cljs$lang$maxFixedArity = 0;
G__45160.cljs$lang$applyTo = (function (arglist__45161){
var args__9530__auto__ = cljs.core.seq(arglist__45161);
return G__45160__delegate(args__9530__auto__);
});
G__45160.cljs$core$IFn$_invoke$arity$variadic = G__45160__delegate;
return G__45160;
})()
;
;})(action__9531__auto__))
});
clustermap.core.create_app_service = (function create_app_service(){var event_handlers = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));if(typeof clustermap.core.t45165 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.core.t45165 = (function (event_handlers,create_app_service,meta45166){
this.event_handlers = event_handlers;
this.create_app_service = create_app_service;
this.meta45166 = meta45166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.core.t45165.cljs$lang$type = true;
clustermap.core.t45165.cljs$lang$ctorStr = "clustermap.core/t45165";
clustermap.core.t45165.cljs$lang$ctorPrWriter = ((function (event_handlers){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.core/t45165");
});})(event_handlers))
;
clustermap.core.t45165.prototype.clustermap$app$IAppService$ = true;
clustermap.core.t45165.prototype.clustermap$app$IAppService$init$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;clustermap.nav.init(clustermap.app.get_comm(app));
clustermap.core.init_routes(clustermap.app.get_history(app),clustermap.app.get_comm(app));
clustermap.core.load_boundaryline_collection_indexes(clustermap.app.get_state(app));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.event_handlers,clustermap.core.create_event_handlers_map(clustermap.app.get_state(app),clustermap.app.get_history(app))) : cljs.core.reset_BANG_.call(null,self__.event_handlers,clustermap.core.create_event_handlers_map(clustermap.app.get_state(app),clustermap.app.get_history(app))));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1466,clustermap.routes.path_for,cljs.core.constant$keyword$1467,clustermap.routes.link_for,cljs.core.constant$keyword$1563,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.core.parse_route,clustermap.app.get_history(app))),cljs.core.constant$keyword$1546,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.get_state(app),cljs.core.constant$keyword$1135),cljs.core.constant$keyword$1545,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.get_state(app),cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1626)], null);
});})(event_handlers))
;
clustermap.core.t45165.prototype.clustermap$app$IAppService$destroy$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;return null;
});})(event_handlers))
;
clustermap.core.t45165.prototype.clustermap$app$IAppService$handle_event$arity$4 = ((function (event_handlers){
return (function (this$,app,type,val){var self__ = this;
var this$__$1 = this;return clustermap.core.choose_event_handler((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.event_handlers) : cljs.core.deref.call(null,self__.event_handlers)),type,val);
});})(event_handlers))
;
clustermap.core.t45165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_handlers){
return (function (_45167){var self__ = this;
var _45167__$1 = this;return self__.meta45166;
});})(event_handlers))
;
clustermap.core.t45165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_handlers){
return (function (_45167,meta45166__$1){var self__ = this;
var _45167__$1 = this;return (new clustermap.core.t45165(self__.event_handlers,self__.create_app_service,meta45166__$1));
});})(event_handlers))
;
clustermap.core.__GT_t45165 = ((function (event_handlers){
return (function __GT_t45165(event_handlers__$1,create_app_service__$1,meta45166){return (new clustermap.core.t45165(event_handlers__$1,create_app_service__$1,meta45166));
});})(event_handlers))
;
}
return (new clustermap.core.t45165(event_handlers,create_app_service,null));
});
clustermap.core.app_instance = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
clustermap.core.init = (function init(){return clustermap.app.start_or_restart_app(clustermap.core.app_instance,clustermap.core.initial_state,clustermap.core.components,clustermap.core.create_app_service());
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic("ws://localhost:9001",cljs.core.array_seq([cljs.core.constant$keyword$1588,true], 0));
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1593,"ws://localhost:3449/figwheel-ws",cljs.core.constant$keyword$1605,(function (){clustermap.core.init();
return console.log("restarted");
})], 0));
clustermap.core.init();
} else
{clustermap.core.init();

}
