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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__34030){var map__34035 = p__34030;var map__34035__$1 = ((cljs.core.seq_QMARK_(map__34035))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34035):map__34035);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34035__$1,cljs.core.constant$keyword$545);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34035__$1,cljs.core.constant$keyword$584);var pred__34036 = cljs.core._EQ_;var expr__34037 = type;if(cljs.core.truth_((pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34037) : pred__34036.call(null,cljs.core.constant$keyword$629,expr__34037))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$665,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$663,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$665,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$665,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34037) : pred__34036.call(null,cljs.core.constant$keyword$630,expr__34037))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$665,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$663,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$665,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$665,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34036.cljs$core$IFn$_invoke$arity$2 ? pred__34036.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34037) : pred__34036.call(null,cljs.core.constant$keyword$631,expr__34037))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$665,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$663,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$665,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$665,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$665,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$663,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$665,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$665,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__34039){var map__34065 = p__34039;var map__34065__$1 = ((cljs.core.seq_QMARK_(map__34065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34065):map__34065);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34065__$1,cljs.core.constant$keyword$666);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34065__$1,cljs.core.constant$keyword$640);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34065__$1,cljs.core.constant$keyword$667);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$640,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$640.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$668,cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34066 = site_stats;var G__34066__$1 = (((G__34066 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34066));return G__34066__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34066 = site_stats;var G__34066__$1 = (((G__34066 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34066));return G__34066__$1;
})(),cljs.core.constant$keyword$541,"-")),(function (){var G__34067 = site_stats;var G__34067__$1 = (((G__34067 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34067));var G__34067__$2 = (((G__34067__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34067__$1));return G__34067__$2;
})(),(function (){var G__34068 = site_stats;var G__34068__$1 = (((G__34068 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34068));var G__34068__$2 = (((G__34068__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34068__$1));return G__34068__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34069 = site_stats;var G__34069__$1 = (((G__34069 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34069));return G__34069__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34069 = site_stats;var G__34069__$1 = (((G__34069 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34069));return G__34069__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34070 = site_stats;var G__34070__$1 = (((G__34070 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34070));var G__34070__$2 = (((G__34070__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34070__$1));return G__34070__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34070 = site_stats;var G__34070__$1 = (((G__34070 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34070));var G__34070__$2 = (((G__34070__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34070__$1));return G__34070__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34071 = site_stats;var G__34071__$1 = (((G__34071 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34071));var G__34071__$2 = (((G__34071__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34071__$1));return G__34071__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34071 = site_stats;var G__34071__$1 = (((G__34071 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34071));var G__34071__$2 = (((G__34071__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34071__$1));return G__34071__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34072 = site_stats;var G__34072__$1 = (((G__34072 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34072));var G__34072__$2 = (((G__34072__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34072__$1));return G__34072__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34072 = site_stats;var G__34072__$1 = (((G__34072 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34072));var G__34072__$2 = (((G__34072__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34072__$1));return G__34072__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34073 = site_stats;var G__34073__$1 = (((G__34073 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34073));return G__34073__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34073 = site_stats;var G__34073__$1 = (((G__34073 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34073));return G__34073__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34074 = site_stats;var G__34074__$1 = (((G__34074 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34074));var G__34074__$2 = (((G__34074__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34074__$1));return G__34074__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34074 = site_stats;var G__34074__$1 = (((G__34074 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34074));var G__34074__$2 = (((G__34074__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34074__$1));return G__34074__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"))])], 0)),cljs.core.constant$keyword$663,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$663.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$668,cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676],["\u00A0",(function (){var G__34075 = site_stats;var G__34075__$1 = (((G__34075 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34075));var G__34075__$2 = (((G__34075__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34075__$1));return G__34075__$2;
})(),(function (){var G__34076 = site_stats;var G__34076__$1 = (((G__34076 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34076));var G__34076__$2 = (((G__34076__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34076__$1));return G__34076__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34077 = site_stats;var G__34077__$1 = (((G__34077 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34077));var G__34077__$2 = (((G__34077__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34077__$1));return G__34077__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34077 = site_stats;var G__34077__$1 = (((G__34077 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34077));var G__34077__$2 = (((G__34077__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34077__$1));return G__34077__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34078 = site_stats;var G__34078__$1 = (((G__34078 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34078));var G__34078__$2 = (((G__34078__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34078__$1));return G__34078__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34078 = site_stats;var G__34078__$1 = (((G__34078 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34078));var G__34078__$2 = (((G__34078__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34078__$1));return G__34078__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34079 = site_stats;var G__34079__$1 = (((G__34079 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34079));var G__34079__$2 = (((G__34079__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34079__$1));return G__34079__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34079 = site_stats;var G__34079__$1 = (((G__34079 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34079));var G__34079__$2 = (((G__34079__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34079__$1));return G__34079__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34080 = site_stats;var G__34080__$1 = (((G__34080 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34080));var G__34080__$2 = (((G__34080__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34080__$1));return G__34080__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34080 = site_stats;var G__34080__$1 = (((G__34080 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34080));var G__34080__$2 = (((G__34080__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34080__$1));return G__34080__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"))])], 0)),cljs.core.constant$keyword$664,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$664.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$668,cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34081 = all_investment_stats;var G__34081__$1 = (((G__34081 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34081));return G__34081__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34081 = all_investment_stats;var G__34081__$1 = (((G__34081 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34081));return G__34081__$1;
})(),cljs.core.constant$keyword$541,"-")),(function (){var G__34082 = all_investment_stats;var G__34082__$1 = (((G__34082 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34082));var G__34082__$2 = (((G__34082__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34082__$1));return G__34082__$2;
})(),(function (){var G__34083 = all_investment_stats;var G__34083__$1 = (((G__34083 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34083));var G__34083__$2 = (((G__34083__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34083__$1));return G__34083__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34084 = all_investment_stats;var G__34084__$1 = (((G__34084 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34084));return G__34084__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34084 = all_investment_stats;var G__34084__$1 = (((G__34084 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34084));return G__34084__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34085 = all_investment_stats;var G__34085__$1 = (((G__34085 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34085));var G__34085__$2 = (((G__34085__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34085__$1));return G__34085__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34085 = all_investment_stats;var G__34085__$1 = (((G__34085 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34085));var G__34085__$2 = (((G__34085__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34085__$1));return G__34085__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34086 = all_investment_stats;var G__34086__$1 = (((G__34086 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34086));var G__34086__$2 = (((G__34086__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34086__$1));return G__34086__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34086 = all_investment_stats;var G__34086__$1 = (((G__34086 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34086));var G__34086__$2 = (((G__34086__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34086__$1));return G__34086__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34087 = all_investment_stats;var G__34087__$1 = (((G__34087 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34087));var G__34087__$2 = (((G__34087__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34087__$1));return G__34087__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34087 = all_investment_stats;var G__34087__$1 = (((G__34087 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34087));var G__34087__$2 = (((G__34087__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34087__$1));return G__34087__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34088 = all_investment_stats;var G__34088__$1 = (((G__34088 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34088));return G__34088__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34088 = all_investment_stats;var G__34088__$1 = (((G__34088 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34088));return G__34088__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34089 = all_investment_stats;var G__34089__$1 = (((G__34089 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34089));var G__34089__$2 = (((G__34089__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34089__$1));return G__34089__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34089 = all_investment_stats;var G__34089__$1 = (((G__34089 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34089));var G__34089__$2 = (((G__34089__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34089__$1));return G__34089__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__34127 = clustermap.components.full_report.overview.overview_data(data);var map__34127__$1 = ((cljs.core.seq_QMARK_(map__34127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34127):map__34127);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34127__$1,cljs.core.constant$keyword$664);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34127__$1,cljs.core.constant$keyword$663);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34127__$1,cljs.core.constant$keyword$640);if(typeof clustermap.components.full_report.overview.t34128 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t34128 = (function (selection,averages,benchmark,map__34127,data,overview,meta34129){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__34127 = map__34127;
this.data = data;
this.overview = overview;
this.meta34129 = meta34129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t34128.cljs$lang$type = true;
clustermap.components.full_report.overview.t34128.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t34128";
clustermap.components.full_report.overview.t34128.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t34128");
});
clustermap.components.full_report.overview.t34128.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t34128.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$665) : self__.selection.call(null,cljs.core.constant$keyword$665))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.selection.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34135 = cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34135))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34135], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34135));
}
})()),React.DOM.td(null,(function (){var attrs34136 = cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34136))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34136], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34136));
}
})()),React.DOM.td(null,(function (){var attrs34137 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34137))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34137], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34137));
}
})()),React.DOM.td(null,(function (){var attrs34138 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34138))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34138], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34138));
}
})()),React.DOM.td(null,(function (){var attrs34139 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34139))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34139], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34139));
}
})()),React.DOM.td(null,(function (){var attrs34140 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34140))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34140], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34140));
}
})()),React.DOM.td(null,(function (){var attrs34141 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34141))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34141], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34141));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$665) : self__.averages.call(null,cljs.core.constant$keyword$665))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.averages.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34142 = cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34142))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34142], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34142));
}
})()),React.DOM.td(null,(function (){var attrs34143 = cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34143))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34143], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34143));
}
})()),React.DOM.td(null,(function (){var attrs34144 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34144))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34144], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34144));
}
})()),React.DOM.td(null,(function (){var attrs34145 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34145))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34145], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34145));
}
})()),React.DOM.td(null,(function (){var attrs34146 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs34146))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34146], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34146));
}
})()),React.DOM.td(null,(function (){var attrs34147 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34147))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34147], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34147));
}
})()),React.DOM.td(null,(function (){var attrs34148 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34148))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34148], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34148));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$665) : self__.benchmark.call(null,cljs.core.constant$keyword$665))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.benchmark.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34149 = cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34149))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34149], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34149));
}
})()),React.DOM.td(null,(function (){var attrs34150 = cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34150))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34150], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34150));
}
})()),React.DOM.td(null,(function (){var attrs34151 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34151))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34151], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34151));
}
})()),React.DOM.td(null,(function (){var attrs34152 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34152))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34152], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34152));
}
})()),React.DOM.td(null,(function (){var attrs34153 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs34153))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34153], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34153));
}
})()),React.DOM.td(null,(function (){var attrs34154 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34154))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34154], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34154));
}
})()),React.DOM.td(null,(function (){var attrs34155 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34155))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34155], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34155));
}
})()))))));
});
clustermap.components.full_report.overview.t34128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34130){var self__ = this;
var _34130__$1 = this;return self__.meta34129;
});
clustermap.components.full_report.overview.t34128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34130,meta34129__$1){var self__ = this;
var _34130__$1 = this;return (new clustermap.components.full_report.overview.t34128(self__.selection,self__.averages,self__.benchmark,self__.map__34127,self__.data,self__.overview,meta34129__$1));
});
clustermap.components.full_report.overview.__GT_t34128 = (function __GT_t34128(selection__$1,averages__$1,benchmark__$1,map__34127__$2,data__$1,overview__$1,meta34129){return (new clustermap.components.full_report.overview.t34128(selection__$1,averages__$1,benchmark__$1,map__34127__$2,data__$1,overview__$1,meta34129));
});
}
return (new clustermap.components.full_report.overview.t34128(selection,averages,benchmark,map__34127__$1,data,overview,null));
});
