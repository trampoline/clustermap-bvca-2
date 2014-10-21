// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__44003){var map__44008 = p__44003;var map__44008__$1 = ((cljs.core.seq_QMARK_(map__44008))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44008):map__44008);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44008__$1,cljs.core.constant$keyword$1245);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44008__$1,cljs.core.constant$keyword$1138);var pred__44009 = cljs.core._EQ_;var expr__44010 = type;if(cljs.core.truth_((pred__44009.cljs$core$IFn$_invoke$arity$2 ? pred__44009.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1256,expr__44010) : pred__44009.call(null,cljs.core.constant$keyword$1256,expr__44010))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1486,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Total",cljs.core.constant$keyword$1489,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$1487,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Mean",cljs.core.constant$keyword$1489,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$1488,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Benchmark",cljs.core.constant$keyword$1489,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__44009.cljs$core$IFn$_invoke$arity$2 ? pred__44009.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1257,expr__44010) : pred__44009.call(null,cljs.core.constant$keyword$1257,expr__44010))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1486,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Total",cljs.core.constant$keyword$1489,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$1487,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Mean",cljs.core.constant$keyword$1489,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$1488,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Benchmark",cljs.core.constant$keyword$1489,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__44009.cljs$core$IFn$_invoke$arity$2 ? pred__44009.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1258,expr__44010) : pred__44009.call(null,cljs.core.constant$keyword$1258,expr__44010))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1486,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Total",cljs.core.constant$keyword$1489,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$1487,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Mean",cljs.core.constant$keyword$1489,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$1488,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Benchmark",cljs.core.constant$keyword$1489,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1486,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Total",cljs.core.constant$keyword$1489,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$1487,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Mean",cljs.core.constant$keyword$1489,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$1488,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,"Benchmark",cljs.core.constant$keyword$1489,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__44012){var map__44038 = p__44012;var map__44038__$1 = ((cljs.core.seq_QMARK_(map__44038))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44038):map__44038);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,cljs.core.constant$keyword$1490);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,cljs.core.constant$keyword$1486);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,cljs.core.constant$keyword$1491);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3558__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1486,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1486.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1492,cljs.core.constant$keyword$1493,cljs.core.constant$keyword$1297,cljs.core.constant$keyword$1494,cljs.core.constant$keyword$1495,cljs.core.constant$keyword$1496,cljs.core.constant$keyword$1497,cljs.core.constant$keyword$1498,cljs.core.constant$keyword$1499],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__44039 = site_stats;var G__44039__$1 = (((G__44039 == null))?null:cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(G__44039));var G__44039__$2 = (((G__44039__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44039__$1));return G__44039__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44039 = site_stats;var G__44039__$1 = (((G__44039 == null))?null:cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(G__44039));var G__44039__$2 = (((G__44039__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44039__$1));return G__44039__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__44040 = site_stats;var G__44040__$1 = (((G__44040 == null))?null:cljs.core.constant$keyword$1502.cljs$core$IFn$_invoke$arity$1(G__44040));return G__44040__$1;
})(),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44040 = site_stats;var G__44040__$1 = (((G__44040 == null))?null:cljs.core.constant$keyword$1502.cljs$core$IFn$_invoke$arity$1(G__44040));return G__44040__$1;
})(),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__44041 = site_stats;var G__44041__$1 = (((G__44041 == null))?null:cljs.core.constant$keyword$1297.cljs$core$IFn$_invoke$arity$1(G__44041));var G__44041__$2 = (((G__44041__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44041__$1));return G__44041__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__44041 = site_stats;var G__44041__$1 = (((G__44041 == null))?null:cljs.core.constant$keyword$1297.cljs$core$IFn$_invoke$arity$1(G__44041));var G__44041__$2 = (((G__44041__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44041__$1));return G__44041__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__44042 = site_stats;var G__44042__$1 = (((G__44042 == null))?null:cljs.core.constant$keyword$1503.cljs$core$IFn$_invoke$arity$1(G__44042));return G__44042__$1;
})(),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44042 = site_stats;var G__44042__$1 = (((G__44042 == null))?null:cljs.core.constant$keyword$1503.cljs$core$IFn$_invoke$arity$1(G__44042));return G__44042__$1;
})(),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__44043 = site_stats;var G__44043__$1 = (((G__44043 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44043));var G__44043__$2 = (((G__44043__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44043__$1));return G__44043__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44043 = site_stats;var G__44043__$1 = (((G__44043 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44043));var G__44043__$2 = (((G__44043__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44043__$1));return G__44043__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-")),(function (){var G__44044 = site_stats;var G__44044__$1 = (((G__44044 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44044));var G__44044__$2 = (((G__44044__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44044__$1));return G__44044__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__44045 = site_stats;var G__44045__$1 = (((G__44045 == null))?null:cljs.core.constant$keyword$1506.cljs$core$IFn$_invoke$arity$1(G__44045));return G__44045__$1;
})(),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44045 = site_stats;var G__44045__$1 = (((G__44045 == null))?null:cljs.core.constant$keyword$1506.cljs$core$IFn$_invoke$arity$1(G__44045));return G__44045__$1;
})(),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__44046 = site_stats;var G__44046__$1 = (((G__44046 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44046));var G__44046__$2 = (((G__44046__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44046__$1));return G__44046__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__44046 = site_stats;var G__44046__$1 = (((G__44046 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44046));var G__44046__$2 = (((G__44046__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44046__$1));return G__44046__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-")),(function (){var G__44047 = site_stats;var G__44047__$1 = (((G__44047 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44047));var G__44047__$2 = (((G__44047__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44047__$1));return G__44047__$2;
})()])], 0)),cljs.core.constant$keyword$1487,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1487.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1492,cljs.core.constant$keyword$1493,cljs.core.constant$keyword$1297,cljs.core.constant$keyword$1494,cljs.core.constant$keyword$1495,cljs.core.constant$keyword$1496,cljs.core.constant$keyword$1497,cljs.core.constant$keyword$1498,cljs.core.constant$keyword$1499],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__44048 = site_stats;var G__44048__$1 = (((G__44048 == null))?null:cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(G__44048));var G__44048__$2 = (((G__44048__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44048__$1));return G__44048__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44048 = site_stats;var G__44048__$1 = (((G__44048 == null))?null:cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(G__44048));var G__44048__$2 = (((G__44048__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44048__$1));return G__44048__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__44049 = site_stats;var G__44049__$1 = (((G__44049 == null))?null:cljs.core.constant$keyword$1297.cljs$core$IFn$_invoke$arity$1(G__44049));var G__44049__$2 = (((G__44049__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44049__$1));return G__44049__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__44049 = site_stats;var G__44049__$1 = (((G__44049 == null))?null:cljs.core.constant$keyword$1297.cljs$core$IFn$_invoke$arity$1(G__44049));var G__44049__$2 = (((G__44049__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44049__$1));return G__44049__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-")),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__44050 = site_stats;var G__44050__$1 = (((G__44050 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44050));var G__44050__$2 = (((G__44050__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44050__$1));return G__44050__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44050 = site_stats;var G__44050__$1 = (((G__44050 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44050));var G__44050__$2 = (((G__44050__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44050__$1));return G__44050__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-")),(function (){var G__44051 = site_stats;var G__44051__$1 = (((G__44051 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44051));var G__44051__$2 = (((G__44051__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44051__$1));return G__44051__$2;
})(),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__44052 = site_stats;var G__44052__$1 = (((G__44052 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44052));var G__44052__$2 = (((G__44052__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44052__$1));return G__44052__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__44052 = site_stats;var G__44052__$1 = (((G__44052 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44052));var G__44052__$2 = (((G__44052__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44052__$1));return G__44052__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-")),(function (){var G__44053 = site_stats;var G__44053__$1 = (((G__44053 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44053));var G__44053__$2 = (((G__44053__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44053__$1));return G__44053__$2;
})()])], 0)),cljs.core.constant$keyword$1488,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1488.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1492,cljs.core.constant$keyword$1493,cljs.core.constant$keyword$1297,cljs.core.constant$keyword$1494,cljs.core.constant$keyword$1495,cljs.core.constant$keyword$1496,cljs.core.constant$keyword$1497,cljs.core.constant$keyword$1498,cljs.core.constant$keyword$1499],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__44054 = all_investment_stats;var G__44054__$1 = (((G__44054 == null))?null:cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(G__44054));var G__44054__$2 = (((G__44054__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44054__$1));return G__44054__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44054 = all_investment_stats;var G__44054__$1 = (((G__44054 == null))?null:cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(G__44054));var G__44054__$2 = (((G__44054__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44054__$1));return G__44054__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__44055 = all_investment_stats;var G__44055__$1 = (((G__44055 == null))?null:cljs.core.constant$keyword$1502.cljs$core$IFn$_invoke$arity$1(G__44055));return G__44055__$1;
})(),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44055 = all_investment_stats;var G__44055__$1 = (((G__44055 == null))?null:cljs.core.constant$keyword$1502.cljs$core$IFn$_invoke$arity$1(G__44055));return G__44055__$1;
})(),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__44056 = all_investment_stats;var G__44056__$1 = (((G__44056 == null))?null:cljs.core.constant$keyword$1297.cljs$core$IFn$_invoke$arity$1(G__44056));var G__44056__$2 = (((G__44056__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44056__$1));return G__44056__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__44056 = all_investment_stats;var G__44056__$1 = (((G__44056 == null))?null:cljs.core.constant$keyword$1297.cljs$core$IFn$_invoke$arity$1(G__44056));var G__44056__$2 = (((G__44056__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44056__$1));return G__44056__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__44057 = all_investment_stats;var G__44057__$1 = (((G__44057 == null))?null:cljs.core.constant$keyword$1503.cljs$core$IFn$_invoke$arity$1(G__44057));return G__44057__$1;
})(),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44057 = all_investment_stats;var G__44057__$1 = (((G__44057 == null))?null:cljs.core.constant$keyword$1503.cljs$core$IFn$_invoke$arity$1(G__44057));return G__44057__$1;
})(),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__44058 = all_investment_stats;var G__44058__$1 = (((G__44058 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44058));var G__44058__$2 = (((G__44058__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44058__$1));return G__44058__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44058 = all_investment_stats;var G__44058__$1 = (((G__44058 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44058));var G__44058__$2 = (((G__44058__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44058__$1));return G__44058__$2;
})(),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-")),(function (){var G__44059 = all_investment_stats;var G__44059__$1 = (((G__44059 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44059));var G__44059__$2 = (((G__44059__$1 == null))?null:cljs.core.constant$keyword$1501.cljs$core$IFn$_invoke$arity$1(G__44059__$1));return G__44059__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__44060 = all_investment_stats;var G__44060__$1 = (((G__44060 == null))?null:cljs.core.constant$keyword$1506.cljs$core$IFn$_invoke$arity$1(G__44060));return G__44060__$1;
})(),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__44060 = all_investment_stats;var G__44060__$1 = (((G__44060 == null))?null:cljs.core.constant$keyword$1506.cljs$core$IFn$_invoke$arity$1(G__44060));return G__44060__$1;
})(),cljs.core.constant$keyword$1091,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__44061 = all_investment_stats;var G__44061__$1 = (((G__44061 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44061));var G__44061__$2 = (((G__44061__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44061__$1));return G__44061__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__44061 = all_investment_stats;var G__44061__$1 = (((G__44061 == null))?null:cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(G__44061));var G__44061__$2 = (((G__44061__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44061__$1));return G__44061__$2;
})(),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-")),(function (){var G__44062 = all_investment_stats;var G__44062__$1 = (((G__44062 == null))?null:cljs.core.constant$keyword$1504.cljs$core$IFn$_invoke$arity$1(G__44062));var G__44062__$2 = (((G__44062__$1 == null))?null:cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__44062__$1));return G__44062__$2;
})()])], 0))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{return null;

}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__44086 = clustermap.components.full_report.overview.overview_data(data);var map__44086__$1 = ((cljs.core.seq_QMARK_(map__44086))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44086):map__44086);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44086__$1,cljs.core.constant$keyword$1488);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44086__$1,cljs.core.constant$keyword$1487);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44086__$1,cljs.core.constant$keyword$1486);if(typeof clustermap.components.full_report.overview.t44087 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t44087 = (function (selection,averages,benchmark,map__44086,data,overview,meta44088){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__44086 = map__44086;
this.data = data;
this.overview = overview;
this.meta44088 = meta44088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t44087.cljs$lang$type = true;
clustermap.components.full_report.overview.t44087.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t44087";
clustermap.components.full_report.overview.t44087.cljs$lang$ctorPrWriter = ((function (map__44086,map__44086__$1,benchmark,averages,selection){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.overview/t44087");
});})(map__44086,map__44086__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t44087.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t44087.prototype.om$core$IRender$render$arity$1 = ((function (map__44086,map__44086__$1,benchmark,averages,selection){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1489) : self__.selection.call(null,cljs.core.constant$keyword$1489))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1244) : self__.selection.call(null,cljs.core.constant$keyword$1244)))),React.DOM.td(null,(function (){var attrs44094 = cljs.core.constant$keyword$1497.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44094))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs44094], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44094))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44094)], null))));
})()),React.DOM.td(null,(function (){var attrs44095 = cljs.core.constant$keyword$1494.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44095))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs44095], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44095))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44095)], null))));
})()),React.DOM.td(null,(function (){var attrs44096 = cljs.core.constant$keyword$1493.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44096))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs44096], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44096))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44096)], null))));
})()),React.DOM.td(null,(function (){var attrs44097 = cljs.core.constant$keyword$1297.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44097))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs44097], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44097))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44097)], null))));
})()),React.DOM.td(null,(function (){var attrs44098 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$1496.cljs$core$IFn$_invoke$arity$1(self__.selection));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44098))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs44098], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44098))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44098)], null))));
})()),React.DOM.td(null,(function (){var attrs44099 = cljs.core.constant$keyword$1498.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44099))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs44099], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44099))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44099)], null))));
})()),React.DOM.td(null,(function (){var attrs44100 = cljs.core.constant$keyword$1492.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44100))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs44100], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44100))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44100)], null))));
})()))))));
});})(map__44086,map__44086__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t44087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44086,map__44086__$1,benchmark,averages,selection){
return (function (_44089){var self__ = this;
var _44089__$1 = this;return self__.meta44088;
});})(map__44086,map__44086__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t44087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44086,map__44086__$1,benchmark,averages,selection){
return (function (_44089,meta44088__$1){var self__ = this;
var _44089__$1 = this;return (new clustermap.components.full_report.overview.t44087(self__.selection,self__.averages,self__.benchmark,self__.map__44086,self__.data,self__.overview,meta44088__$1));
});})(map__44086,map__44086__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.__GT_t44087 = ((function (map__44086,map__44086__$1,benchmark,averages,selection){
return (function __GT_t44087(selection__$1,averages__$1,benchmark__$1,map__44086__$2,data__$1,overview__$1,meta44088){return (new clustermap.components.full_report.overview.t44087(selection__$1,averages__$1,benchmark__$1,map__44086__$2,data__$1,overview__$1,meta44088));
});})(map__44086,map__44086__$1,benchmark,averages,selection))
;
}
return (new clustermap.components.full_report.overview.t44087(selection,averages,benchmark,map__44086__$1,data,overview,null));
});
