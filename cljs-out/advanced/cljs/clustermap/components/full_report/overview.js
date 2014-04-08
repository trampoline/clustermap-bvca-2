// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__33920){var map__33925 = p__33920;var map__33925__$1 = ((cljs.core.seq_QMARK_(map__33925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33925):map__33925);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,cljs.core.constant$keyword$549);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,cljs.core.constant$keyword$588);var pred__33926 = cljs.core._EQ_;var expr__33927 = type;if(cljs.core.truth_((pred__33926.cljs$core$IFn$_invoke$arity$2 ? pred__33926.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__33927) : pred__33926.call(null,cljs.core.constant$keyword$633,expr__33927))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__33926.cljs$core$IFn$_invoke$arity$2 ? pred__33926.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$634,expr__33927) : pred__33926.call(null,cljs.core.constant$keyword$634,expr__33927))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__33926.cljs$core$IFn$_invoke$arity$2 ? pred__33926.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$635,expr__33927) : pred__33926.call(null,cljs.core.constant$keyword$635,expr__33927))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__33929){var map__33955 = p__33929;var map__33955__$1 = ((cljs.core.seq_QMARK_(map__33955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33955):map__33955);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33955__$1,cljs.core.constant$keyword$670);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33955__$1,cljs.core.constant$keyword$644);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33955__$1,cljs.core.constant$keyword$671);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$644.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33956 = site_stats;var G__33956__$1 = (((G__33956 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33956));return G__33956__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33956 = site_stats;var G__33956__$1 = (((G__33956 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33956));return G__33956__$1;
})(),cljs.core.constant$keyword$545,"-")),(function (){var G__33957 = site_stats;var G__33957__$1 = (((G__33957 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33957));var G__33957__$2 = (((G__33957__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33957__$1));return G__33957__$2;
})(),(function (){var G__33958 = site_stats;var G__33958__$1 = (((G__33958 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33958));var G__33958__$2 = (((G__33958__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33958__$1));return G__33958__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33959 = site_stats;var G__33959__$1 = (((G__33959 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33959));return G__33959__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33959 = site_stats;var G__33959__$1 = (((G__33959 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33959));return G__33959__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33960 = site_stats;var G__33960__$1 = (((G__33960 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33960));var G__33960__$2 = (((G__33960__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33960__$1));return G__33960__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33960 = site_stats;var G__33960__$1 = (((G__33960 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33960));var G__33960__$2 = (((G__33960__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33960__$1));return G__33960__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33961 = site_stats;var G__33961__$1 = (((G__33961 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33961));var G__33961__$2 = (((G__33961__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33961__$1));return G__33961__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33961 = site_stats;var G__33961__$1 = (((G__33961 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33961));var G__33961__$2 = (((G__33961__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33961__$1));return G__33961__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33962 = site_stats;var G__33962__$1 = (((G__33962 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33962));var G__33962__$2 = (((G__33962__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33962__$1));return G__33962__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33962 = site_stats;var G__33962__$1 = (((G__33962 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33962));var G__33962__$2 = (((G__33962__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33962__$1));return G__33962__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33963 = site_stats;var G__33963__$1 = (((G__33963 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33963));return G__33963__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33963 = site_stats;var G__33963__$1 = (((G__33963 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33963));return G__33963__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33964 = site_stats;var G__33964__$1 = (((G__33964 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33964));var G__33964__$2 = (((G__33964__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33964__$1));return G__33964__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33964 = site_stats;var G__33964__$1 = (((G__33964 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33964));var G__33964__$2 = (((G__33964__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33964__$1));return G__33964__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"))])], 0)),cljs.core.constant$keyword$667,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680],["\u00A0",(function (){var G__33965 = site_stats;var G__33965__$1 = (((G__33965 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33965));var G__33965__$2 = (((G__33965__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33965__$1));return G__33965__$2;
})(),(function (){var G__33966 = site_stats;var G__33966__$1 = (((G__33966 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33966));var G__33966__$2 = (((G__33966__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33966__$1));return G__33966__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33967 = site_stats;var G__33967__$1 = (((G__33967 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33967));var G__33967__$2 = (((G__33967__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33967__$1));return G__33967__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33967 = site_stats;var G__33967__$1 = (((G__33967 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33967));var G__33967__$2 = (((G__33967__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33967__$1));return G__33967__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33968 = site_stats;var G__33968__$1 = (((G__33968 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33968));var G__33968__$2 = (((G__33968__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33968__$1));return G__33968__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33968 = site_stats;var G__33968__$1 = (((G__33968 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33968));var G__33968__$2 = (((G__33968__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33968__$1));return G__33968__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33969 = site_stats;var G__33969__$1 = (((G__33969 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33969));var G__33969__$2 = (((G__33969__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33969__$1));return G__33969__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33969 = site_stats;var G__33969__$1 = (((G__33969 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33969));var G__33969__$2 = (((G__33969__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33969__$1));return G__33969__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33970 = site_stats;var G__33970__$1 = (((G__33970 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33970));var G__33970__$2 = (((G__33970__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33970__$1));return G__33970__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33970 = site_stats;var G__33970__$1 = (((G__33970 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33970));var G__33970__$2 = (((G__33970__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33970__$1));return G__33970__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"))])], 0)),cljs.core.constant$keyword$668,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33971 = all_investment_stats;var G__33971__$1 = (((G__33971 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33971));return G__33971__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33971 = all_investment_stats;var G__33971__$1 = (((G__33971 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33971));return G__33971__$1;
})(),cljs.core.constant$keyword$545,"-")),(function (){var G__33972 = all_investment_stats;var G__33972__$1 = (((G__33972 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33972));var G__33972__$2 = (((G__33972__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33972__$1));return G__33972__$2;
})(),(function (){var G__33973 = all_investment_stats;var G__33973__$1 = (((G__33973 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33973));var G__33973__$2 = (((G__33973__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33973__$1));return G__33973__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33974 = all_investment_stats;var G__33974__$1 = (((G__33974 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33974));return G__33974__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33974 = all_investment_stats;var G__33974__$1 = (((G__33974 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33974));return G__33974__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33975 = all_investment_stats;var G__33975__$1 = (((G__33975 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33975));var G__33975__$2 = (((G__33975__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33975__$1));return G__33975__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33975 = all_investment_stats;var G__33975__$1 = (((G__33975 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33975));var G__33975__$2 = (((G__33975__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33975__$1));return G__33975__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33976 = all_investment_stats;var G__33976__$1 = (((G__33976 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33976));var G__33976__$2 = (((G__33976__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33976__$1));return G__33976__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33976 = all_investment_stats;var G__33976__$1 = (((G__33976 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33976));var G__33976__$2 = (((G__33976__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33976__$1));return G__33976__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33977 = all_investment_stats;var G__33977__$1 = (((G__33977 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33977));var G__33977__$2 = (((G__33977__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33977__$1));return G__33977__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33977 = all_investment_stats;var G__33977__$1 = (((G__33977 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33977));var G__33977__$2 = (((G__33977__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33977__$1));return G__33977__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33978 = all_investment_stats;var G__33978__$1 = (((G__33978 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33978));return G__33978__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33978 = all_investment_stats;var G__33978__$1 = (((G__33978 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33978));return G__33978__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33979 = all_investment_stats;var G__33979__$1 = (((G__33979 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33979));var G__33979__$2 = (((G__33979__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33979__$1));return G__33979__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33979 = all_investment_stats;var G__33979__$1 = (((G__33979 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33979));var G__33979__$2 = (((G__33979__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33979__$1));return G__33979__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"))])], 0))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__34003 = clustermap.components.full_report.overview.overview_data(data);var map__34003__$1 = ((cljs.core.seq_QMARK_(map__34003))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34003):map__34003);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34003__$1,cljs.core.constant$keyword$668);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34003__$1,cljs.core.constant$keyword$667);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34003__$1,cljs.core.constant$keyword$644);if(typeof clustermap.components.full_report.overview.t34004 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t34004 = (function (selection,averages,benchmark,map__34003,data,overview,meta34005){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__34003 = map__34003;
this.data = data;
this.overview = overview;
this.meta34005 = meta34005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t34004.cljs$lang$type = true;
clustermap.components.full_report.overview.t34004.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t34004";
clustermap.components.full_report.overview.t34004.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t34004");
});
clustermap.components.full_report.overview.t34004.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t34004.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$669) : self__.selection.call(null,cljs.core.constant$keyword$669))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$598) : self__.selection.call(null,cljs.core.constant$keyword$598)))),React.DOM.td(null,(function (){var attrs34011 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34011))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34011], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34011));
}
})()),React.DOM.td(null,(function (){var attrs34012 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34012))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34012], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34012));
}
})()),React.DOM.td(null,(function (){var attrs34013 = cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34013))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34013], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34013));
}
})()),React.DOM.td(null,(function (){var attrs34014 = cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34014))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34014], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34014));
}
})()),React.DOM.td(null,(function (){var attrs34015 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34015))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34015], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34015));
}
})()),React.DOM.td(null,(function (){var attrs34016 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34016))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34016], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34016));
}
})()),React.DOM.td(null,(function (){var attrs34017 = cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34017))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34017], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34017));
}
})()))))));
});
clustermap.components.full_report.overview.t34004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34006){var self__ = this;
var _34006__$1 = this;return self__.meta34005;
});
clustermap.components.full_report.overview.t34004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34006,meta34005__$1){var self__ = this;
var _34006__$1 = this;return (new clustermap.components.full_report.overview.t34004(self__.selection,self__.averages,self__.benchmark,self__.map__34003,self__.data,self__.overview,meta34005__$1));
});
clustermap.components.full_report.overview.__GT_t34004 = (function __GT_t34004(selection__$1,averages__$1,benchmark__$1,map__34003__$2,data__$1,overview__$1,meta34005){return (new clustermap.components.full_report.overview.t34004(selection__$1,averages__$1,benchmark__$1,map__34003__$2,data__$1,overview__$1,meta34005));
});
}
return (new clustermap.components.full_report.overview.t34004(selection,averages,benchmark,map__34003__$1,data,overview,null));
});
