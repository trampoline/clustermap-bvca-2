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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__33900){var map__33905 = p__33900;var map__33905__$1 = ((cljs.core.seq_QMARK_(map__33905))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33905):map__33905);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33905__$1,cljs.core.constant$keyword$549);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33905__$1,cljs.core.constant$keyword$588);var pred__33906 = cljs.core._EQ_;var expr__33907 = type;if(cljs.core.truth_((pred__33906.cljs$core$IFn$_invoke$arity$2 ? pred__33906.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__33907) : pred__33906.call(null,cljs.core.constant$keyword$633,expr__33907))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__33906.cljs$core$IFn$_invoke$arity$2 ? pred__33906.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$634,expr__33907) : pred__33906.call(null,cljs.core.constant$keyword$634,expr__33907))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__33906.cljs$core$IFn$_invoke$arity$2 ? pred__33906.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$635,expr__33907) : pred__33906.call(null,cljs.core.constant$keyword$635,expr__33907))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$669,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$667,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$669,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$669,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__33909){var map__33935 = p__33909;var map__33935__$1 = ((cljs.core.seq_QMARK_(map__33935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33935):map__33935);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33935__$1,cljs.core.constant$keyword$670);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33935__$1,cljs.core.constant$keyword$644);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33935__$1,cljs.core.constant$keyword$671);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$644,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$644.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33936 = site_stats;var G__33936__$1 = (((G__33936 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33936));return G__33936__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33936 = site_stats;var G__33936__$1 = (((G__33936 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33936));return G__33936__$1;
})(),cljs.core.constant$keyword$545,"-")),(function (){var G__33937 = site_stats;var G__33937__$1 = (((G__33937 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33937));var G__33937__$2 = (((G__33937__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33937__$1));return G__33937__$2;
})(),(function (){var G__33938 = site_stats;var G__33938__$1 = (((G__33938 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33938));var G__33938__$2 = (((G__33938__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33938__$1));return G__33938__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33939 = site_stats;var G__33939__$1 = (((G__33939 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33939));return G__33939__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33939 = site_stats;var G__33939__$1 = (((G__33939 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33939));return G__33939__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33940 = site_stats;var G__33940__$1 = (((G__33940 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33940));var G__33940__$2 = (((G__33940__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33940__$1));return G__33940__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33940 = site_stats;var G__33940__$1 = (((G__33940 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33940));var G__33940__$2 = (((G__33940__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33940__$1));return G__33940__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33941 = site_stats;var G__33941__$1 = (((G__33941 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33941));var G__33941__$2 = (((G__33941__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33941__$1));return G__33941__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33941 = site_stats;var G__33941__$1 = (((G__33941 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33941));var G__33941__$2 = (((G__33941__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33941__$1));return G__33941__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33942 = site_stats;var G__33942__$1 = (((G__33942 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33942));var G__33942__$2 = (((G__33942__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33942__$1));return G__33942__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33942 = site_stats;var G__33942__$1 = (((G__33942 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33942));var G__33942__$2 = (((G__33942__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33942__$1));return G__33942__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33943 = site_stats;var G__33943__$1 = (((G__33943 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33943));return G__33943__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33943 = site_stats;var G__33943__$1 = (((G__33943 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33943));return G__33943__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33944 = site_stats;var G__33944__$1 = (((G__33944 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33944));var G__33944__$2 = (((G__33944__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33944__$1));return G__33944__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33944 = site_stats;var G__33944__$1 = (((G__33944 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33944));var G__33944__$2 = (((G__33944__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33944__$1));return G__33944__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"))])], 0)),cljs.core.constant$keyword$667,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680],["\u00A0",(function (){var G__33945 = site_stats;var G__33945__$1 = (((G__33945 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33945));var G__33945__$2 = (((G__33945__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33945__$1));return G__33945__$2;
})(),(function (){var G__33946 = site_stats;var G__33946__$1 = (((G__33946 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33946));var G__33946__$2 = (((G__33946__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33946__$1));return G__33946__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33947 = site_stats;var G__33947__$1 = (((G__33947 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33947));var G__33947__$2 = (((G__33947__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33947__$1));return G__33947__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33947 = site_stats;var G__33947__$1 = (((G__33947 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33947));var G__33947__$2 = (((G__33947__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33947__$1));return G__33947__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33948 = site_stats;var G__33948__$1 = (((G__33948 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33948));var G__33948__$2 = (((G__33948__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33948__$1));return G__33948__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33948 = site_stats;var G__33948__$1 = (((G__33948 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33948));var G__33948__$2 = (((G__33948__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33948__$1));return G__33948__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33949 = site_stats;var G__33949__$1 = (((G__33949 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33949));var G__33949__$2 = (((G__33949__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33949__$1));return G__33949__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33949 = site_stats;var G__33949__$1 = (((G__33949 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33949));var G__33949__$2 = (((G__33949__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33949__$1));return G__33949__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33950 = site_stats;var G__33950__$1 = (((G__33950 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33950));var G__33950__$2 = (((G__33950__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33950__$1));return G__33950__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33950 = site_stats;var G__33950__$1 = (((G__33950 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33950));var G__33950__$2 = (((G__33950__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33950__$1));return G__33950__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"))])], 0)),cljs.core.constant$keyword$668,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33951 = all_investment_stats;var G__33951__$1 = (((G__33951 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33951));return G__33951__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33951 = all_investment_stats;var G__33951__$1 = (((G__33951 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__33951));return G__33951__$1;
})(),cljs.core.constant$keyword$545,"-")),(function (){var G__33952 = all_investment_stats;var G__33952__$1 = (((G__33952 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33952));var G__33952__$2 = (((G__33952__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33952__$1));return G__33952__$2;
})(),(function (){var G__33953 = all_investment_stats;var G__33953__$1 = (((G__33953 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33953));var G__33953__$2 = (((G__33953__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33953__$1));return G__33953__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33954 = all_investment_stats;var G__33954__$1 = (((G__33954 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33954));return G__33954__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33954 = all_investment_stats;var G__33954__$1 = (((G__33954 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__33954));return G__33954__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33955 = all_investment_stats;var G__33955__$1 = (((G__33955 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33955));var G__33955__$2 = (((G__33955__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33955__$1));return G__33955__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33955 = all_investment_stats;var G__33955__$1 = (((G__33955 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__33955));var G__33955__$2 = (((G__33955__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33955__$1));return G__33955__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33956 = all_investment_stats;var G__33956__$1 = (((G__33956 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33956));var G__33956__$2 = (((G__33956__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33956__$1));return G__33956__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33956 = all_investment_stats;var G__33956__$1 = (((G__33956 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__33956));var G__33956__$2 = (((G__33956__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33956__$1));return G__33956__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__33957 = all_investment_stats;var G__33957__$1 = (((G__33957 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33957));var G__33957__$2 = (((G__33957__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33957__$1));return G__33957__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33957 = all_investment_stats;var G__33957__$1 = (((G__33957 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33957));var G__33957__$2 = (((G__33957__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33957__$1));return G__33957__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__33958 = all_investment_stats;var G__33958__$1 = (((G__33958 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33958));return G__33958__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__33958 = all_investment_stats;var G__33958__$1 = (((G__33958 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33958));return G__33958__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__33959 = all_investment_stats;var G__33959__$1 = (((G__33959 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33959));var G__33959__$2 = (((G__33959__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33959__$1));return G__33959__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__33959 = all_investment_stats;var G__33959__$1 = (((G__33959 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__33959));var G__33959__$2 = (((G__33959__$1 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33959__$1));return G__33959__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__33983 = clustermap.components.full_report.overview.overview_data(data);var map__33983__$1 = ((cljs.core.seq_QMARK_(map__33983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33983):map__33983);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33983__$1,cljs.core.constant$keyword$668);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33983__$1,cljs.core.constant$keyword$667);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33983__$1,cljs.core.constant$keyword$644);if(typeof clustermap.components.full_report.overview.t33984 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t33984 = (function (selection,averages,benchmark,map__33983,data,overview,meta33985){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__33983 = map__33983;
this.data = data;
this.overview = overview;
this.meta33985 = meta33985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t33984.cljs$lang$type = true;
clustermap.components.full_report.overview.t33984.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t33984";
clustermap.components.full_report.overview.t33984.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t33984");
});
clustermap.components.full_report.overview.t33984.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t33984.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$669) : self__.selection.call(null,cljs.core.constant$keyword$669))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$598) : self__.selection.call(null,cljs.core.constant$keyword$598)))),React.DOM.td(null,(function (){var attrs33991 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs33991))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33991], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs33991));
}
})()),React.DOM.td(null,(function (){var attrs33992 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs33992))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33992], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs33992));
}
})()),React.DOM.td(null,(function (){var attrs33993 = cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs33993))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33993], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs33993));
}
})()),React.DOM.td(null,(function (){var attrs33994 = cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs33994))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33994], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs33994));
}
})()),React.DOM.td(null,(function (){var attrs33995 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs33995))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33995], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs33995));
}
})()),React.DOM.td(null,(function (){var attrs33996 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs33996))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33996], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs33996));
}
})()),React.DOM.td(null,(function (){var attrs33997 = cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs33997))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs33997], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs33997));
}
})()))))));
});
clustermap.components.full_report.overview.t33984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33986){var self__ = this;
var _33986__$1 = this;return self__.meta33985;
});
clustermap.components.full_report.overview.t33984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33986,meta33985__$1){var self__ = this;
var _33986__$1 = this;return (new clustermap.components.full_report.overview.t33984(self__.selection,self__.averages,self__.benchmark,self__.map__33983,self__.data,self__.overview,meta33985__$1));
});
clustermap.components.full_report.overview.__GT_t33984 = (function __GT_t33984(selection__$1,averages__$1,benchmark__$1,map__33983__$2,data__$1,overview__$1,meta33985){return (new clustermap.components.full_report.overview.t33984(selection__$1,averages__$1,benchmark__$1,map__33983__$2,data__$1,overview__$1,meta33985));
});
}
return (new clustermap.components.full_report.overview.t33984(selection,averages,benchmark,map__33983__$1,data,overview,null));
});
