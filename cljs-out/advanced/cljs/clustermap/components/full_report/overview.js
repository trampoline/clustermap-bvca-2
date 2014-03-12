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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__34060){var map__34065 = p__34060;var map__34065__$1 = ((cljs.core.seq_QMARK_(map__34065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34065):map__34065);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34065__$1,cljs.core.constant$keyword$545);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34065__$1,cljs.core.constant$keyword$584);var pred__34066 = cljs.core._EQ_;var expr__34067 = type;if(cljs.core.truth_((pred__34066.cljs$core$IFn$_invoke$arity$2 ? pred__34066.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34067) : pred__34066.call(null,cljs.core.constant$keyword$629,expr__34067))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34066.cljs$core$IFn$_invoke$arity$2 ? pred__34066.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34067) : pred__34066.call(null,cljs.core.constant$keyword$630,expr__34067))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34066.cljs$core$IFn$_invoke$arity$2 ? pred__34066.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34067) : pred__34066.call(null,cljs.core.constant$keyword$631,expr__34067))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__34069){var map__34095 = p__34069;var map__34095__$1 = ((cljs.core.seq_QMARK_(map__34095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34095):map__34095);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34095__$1,cljs.core.constant$keyword$667);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34095__$1,cljs.core.constant$keyword$639);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34095__$1,cljs.core.constant$keyword$668);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$639.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34096 = site_stats;var G__34096__$1 = (((G__34096 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34096));return G__34096__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34096 = site_stats;var G__34096__$1 = (((G__34096 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34096));return G__34096__$1;
})(),cljs.core.constant$keyword$541,"-")),(function (){var G__34097 = site_stats;var G__34097__$1 = (((G__34097 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34097));var G__34097__$2 = (((G__34097__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34097__$1));return G__34097__$2;
})(),(function (){var G__34098 = site_stats;var G__34098__$1 = (((G__34098 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34098));var G__34098__$2 = (((G__34098__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34098__$1));return G__34098__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34099 = site_stats;var G__34099__$1 = (((G__34099 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34099));return G__34099__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34099 = site_stats;var G__34099__$1 = (((G__34099 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34099));return G__34099__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34100 = site_stats;var G__34100__$1 = (((G__34100 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34100));var G__34100__$2 = (((G__34100__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34100__$1));return G__34100__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34100 = site_stats;var G__34100__$1 = (((G__34100 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34100));var G__34100__$2 = (((G__34100__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34100__$1));return G__34100__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34101 = site_stats;var G__34101__$1 = (((G__34101 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34101));var G__34101__$2 = (((G__34101__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34101__$1));return G__34101__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34101 = site_stats;var G__34101__$1 = (((G__34101 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34101));var G__34101__$2 = (((G__34101__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34101__$1));return G__34101__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34102 = site_stats;var G__34102__$1 = (((G__34102 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34102));var G__34102__$2 = (((G__34102__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34102__$1));return G__34102__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34102 = site_stats;var G__34102__$1 = (((G__34102 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34102));var G__34102__$2 = (((G__34102__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34102__$1));return G__34102__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34103 = site_stats;var G__34103__$1 = (((G__34103 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34103));return G__34103__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34103 = site_stats;var G__34103__$1 = (((G__34103 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34103));return G__34103__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34104 = site_stats;var G__34104__$1 = (((G__34104 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34104));var G__34104__$2 = (((G__34104__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34104__$1));return G__34104__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34104 = site_stats;var G__34104__$1 = (((G__34104 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34104));var G__34104__$2 = (((G__34104__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34104__$1));return G__34104__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"))])], 0)),cljs.core.constant$keyword$664,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$664.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677],["\u00A0",(function (){var G__34105 = site_stats;var G__34105__$1 = (((G__34105 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34105));var G__34105__$2 = (((G__34105__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34105__$1));return G__34105__$2;
})(),(function (){var G__34106 = site_stats;var G__34106__$1 = (((G__34106 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34106));var G__34106__$2 = (((G__34106__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34106__$1));return G__34106__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34107 = site_stats;var G__34107__$1 = (((G__34107 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34107));var G__34107__$2 = (((G__34107__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34107__$1));return G__34107__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34107 = site_stats;var G__34107__$1 = (((G__34107 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34107));var G__34107__$2 = (((G__34107__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34107__$1));return G__34107__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34108 = site_stats;var G__34108__$1 = (((G__34108 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34108));var G__34108__$2 = (((G__34108__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34108__$1));return G__34108__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34108 = site_stats;var G__34108__$1 = (((G__34108 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34108));var G__34108__$2 = (((G__34108__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34108__$1));return G__34108__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34109 = site_stats;var G__34109__$1 = (((G__34109 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34109));var G__34109__$2 = (((G__34109__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34109__$1));return G__34109__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34109 = site_stats;var G__34109__$1 = (((G__34109 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34109));var G__34109__$2 = (((G__34109__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34109__$1));return G__34109__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34110 = site_stats;var G__34110__$1 = (((G__34110 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34110));var G__34110__$2 = (((G__34110__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34110__$1));return G__34110__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34110 = site_stats;var G__34110__$1 = (((G__34110 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34110));var G__34110__$2 = (((G__34110__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34110__$1));return G__34110__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"))])], 0)),cljs.core.constant$keyword$665,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$665.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34111 = all_investment_stats;var G__34111__$1 = (((G__34111 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34111));return G__34111__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34111 = all_investment_stats;var G__34111__$1 = (((G__34111 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34111));return G__34111__$1;
})(),cljs.core.constant$keyword$541,"-")),(function (){var G__34112 = all_investment_stats;var G__34112__$1 = (((G__34112 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34112));var G__34112__$2 = (((G__34112__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34112__$1));return G__34112__$2;
})(),(function (){var G__34113 = all_investment_stats;var G__34113__$1 = (((G__34113 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34113));var G__34113__$2 = (((G__34113__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34113__$1));return G__34113__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34114 = all_investment_stats;var G__34114__$1 = (((G__34114 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34114));return G__34114__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34114 = all_investment_stats;var G__34114__$1 = (((G__34114 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34114));return G__34114__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34115 = all_investment_stats;var G__34115__$1 = (((G__34115 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34115));var G__34115__$2 = (((G__34115__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34115__$1));return G__34115__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34115 = all_investment_stats;var G__34115__$1 = (((G__34115 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34115));var G__34115__$2 = (((G__34115__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34115__$1));return G__34115__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34116 = all_investment_stats;var G__34116__$1 = (((G__34116 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34116));var G__34116__$2 = (((G__34116__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34116__$1));return G__34116__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34116 = all_investment_stats;var G__34116__$1 = (((G__34116 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34116));var G__34116__$2 = (((G__34116__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34116__$1));return G__34116__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34117 = all_investment_stats;var G__34117__$1 = (((G__34117 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34117));var G__34117__$2 = (((G__34117__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34117__$1));return G__34117__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34117 = all_investment_stats;var G__34117__$1 = (((G__34117 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34117));var G__34117__$2 = (((G__34117__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34117__$1));return G__34117__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34118 = all_investment_stats;var G__34118__$1 = (((G__34118 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34118));return G__34118__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34118 = all_investment_stats;var G__34118__$1 = (((G__34118 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34118));return G__34118__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34119 = all_investment_stats;var G__34119__$1 = (((G__34119 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34119));var G__34119__$2 = (((G__34119__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34119__$1));return G__34119__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34119 = all_investment_stats;var G__34119__$1 = (((G__34119 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34119));var G__34119__$2 = (((G__34119__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34119__$1));return G__34119__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__34157 = clustermap.components.full_report.overview.overview_data(data);var map__34157__$1 = ((cljs.core.seq_QMARK_(map__34157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34157):map__34157);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,cljs.core.constant$keyword$665);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,cljs.core.constant$keyword$664);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,cljs.core.constant$keyword$639);if(typeof clustermap.components.full_report.overview.t34158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t34158 = (function (selection,averages,benchmark,map__34157,data,overview,meta34159){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__34157 = map__34157;
this.data = data;
this.overview = overview;
this.meta34159 = meta34159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t34158.cljs$lang$type = true;
clustermap.components.full_report.overview.t34158.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t34158";
clustermap.components.full_report.overview.t34158.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t34158");
});
clustermap.components.full_report.overview.t34158.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t34158.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$666) : self__.selection.call(null,cljs.core.constant$keyword$666))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.selection.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34165 = cljs.core.constant$keyword$669.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34165))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34165], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34165));
}
})()),React.DOM.td(null,(function (){var attrs34166 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34166))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34166], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34166));
}
})()),React.DOM.td(null,(function (){var attrs34167 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34167))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34167], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34167));
}
})()),React.DOM.td(null,(function (){var attrs34168 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34168))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34168], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34168));
}
})()),React.DOM.td(null,(function (){var attrs34169 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34169))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34169], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34169));
}
})()),React.DOM.td(null,(function (){var attrs34170 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34170))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34170], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34170));
}
})()),React.DOM.td(null,(function (){var attrs34171 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34171))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34171], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34171));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$666) : self__.averages.call(null,cljs.core.constant$keyword$666))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.averages.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34172 = cljs.core.constant$keyword$669.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34172))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34172], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34172));
}
})()),React.DOM.td(null,(function (){var attrs34173 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34173))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34173], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34173));
}
})()),React.DOM.td(null,(function (){var attrs34174 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34174))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34174], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34174));
}
})()),React.DOM.td(null,(function (){var attrs34175 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34175))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34175], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34175));
}
})()),React.DOM.td(null,(function (){var attrs34176 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs34176))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34176], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34176));
}
})()),React.DOM.td(null,(function (){var attrs34177 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34177))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34177], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34177));
}
})()),React.DOM.td(null,(function (){var attrs34178 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34178))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34178], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34178));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$666) : self__.benchmark.call(null,cljs.core.constant$keyword$666))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.benchmark.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34179 = cljs.core.constant$keyword$669.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34179))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34179], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34179));
}
})()),React.DOM.td(null,(function (){var attrs34180 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34180))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34180], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34180));
}
})()),React.DOM.td(null,(function (){var attrs34181 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34181))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34181], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34181));
}
})()),React.DOM.td(null,(function (){var attrs34182 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34182))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34182], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34182));
}
})()),React.DOM.td(null,(function (){var attrs34183 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs34183))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34183], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34183));
}
})()),React.DOM.td(null,(function (){var attrs34184 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34184))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34184], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34184));
}
})()),React.DOM.td(null,(function (){var attrs34185 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34185))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34185], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34185));
}
})()))))));
});
clustermap.components.full_report.overview.t34158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34160){var self__ = this;
var _34160__$1 = this;return self__.meta34159;
});
clustermap.components.full_report.overview.t34158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34160,meta34159__$1){var self__ = this;
var _34160__$1 = this;return (new clustermap.components.full_report.overview.t34158(self__.selection,self__.averages,self__.benchmark,self__.map__34157,self__.data,self__.overview,meta34159__$1));
});
clustermap.components.full_report.overview.__GT_t34158 = (function __GT_t34158(selection__$1,averages__$1,benchmark__$1,map__34157__$2,data__$1,overview__$1,meta34159){return (new clustermap.components.full_report.overview.t34158(selection__$1,averages__$1,benchmark__$1,map__34157__$2,data__$1,overview__$1,meta34159));
});
}
return (new clustermap.components.full_report.overview.t34158(selection,averages,benchmark,map__34157__$1,data,overview,null));
});
