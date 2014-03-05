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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__34134){var map__34139 = p__34134;var map__34139__$1 = ((cljs.core.seq_QMARK_(map__34139))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34139):map__34139);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34139__$1,cljs.core.constant$keyword$549);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34139__$1,cljs.core.constant$keyword$588);var pred__34140 = cljs.core._EQ_;var expr__34141 = type;if(cljs.core.truth_((pred__34140.cljs$core$IFn$_invoke$arity$2 ? pred__34140.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__34141) : pred__34140.call(null,cljs.core.constant$keyword$633,expr__34141))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$643,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$670,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$670,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$669,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$670,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34140.cljs$core$IFn$_invoke$arity$2 ? pred__34140.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$634,expr__34141) : pred__34140.call(null,cljs.core.constant$keyword$634,expr__34141))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$643,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$670,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$670,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$669,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$670,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34140.cljs$core$IFn$_invoke$arity$2 ? pred__34140.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$635,expr__34141) : pred__34140.call(null,cljs.core.constant$keyword$635,expr__34141))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$643,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$670,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$670,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$669,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$670,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$643,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Total",cljs.core.constant$keyword$670,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$668,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Mean",cljs.core.constant$keyword$670,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$669,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,"Benchmark",cljs.core.constant$keyword$670,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__34143){var map__34169 = p__34143;var map__34169__$1 = ((cljs.core.seq_QMARK_(map__34169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34169):map__34169);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34169__$1,cljs.core.constant$keyword$671);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34169__$1,cljs.core.constant$keyword$643);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34169__$1,cljs.core.constant$keyword$672);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$643,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680,cljs.core.constant$keyword$681],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34170 = site_stats;var G__34170__$1 = (((G__34170 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34170));return G__34170__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34170 = site_stats;var G__34170__$1 = (((G__34170 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34170));return G__34170__$1;
})(),cljs.core.constant$keyword$545,"-")),(function (){var G__34171 = site_stats;var G__34171__$1 = (((G__34171 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34171));var G__34171__$2 = (((G__34171__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34171__$1));return G__34171__$2;
})(),(function (){var G__34172 = site_stats;var G__34172__$1 = (((G__34172 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34172));var G__34172__$2 = (((G__34172__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34172__$1));return G__34172__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34173 = site_stats;var G__34173__$1 = (((G__34173 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34173));return G__34173__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34173 = site_stats;var G__34173__$1 = (((G__34173 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34173));return G__34173__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34174 = site_stats;var G__34174__$1 = (((G__34174 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34174));var G__34174__$2 = (((G__34174__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34174__$1));return G__34174__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34174 = site_stats;var G__34174__$1 = (((G__34174 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34174));var G__34174__$2 = (((G__34174__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34174__$1));return G__34174__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34175 = site_stats;var G__34175__$1 = (((G__34175 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34175));var G__34175__$2 = (((G__34175__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34175__$1));return G__34175__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34175 = site_stats;var G__34175__$1 = (((G__34175 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34175));var G__34175__$2 = (((G__34175__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34175__$1));return G__34175__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34176 = site_stats;var G__34176__$1 = (((G__34176 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34176));var G__34176__$2 = (((G__34176__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34176__$1));return G__34176__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34176 = site_stats;var G__34176__$1 = (((G__34176 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34176));var G__34176__$2 = (((G__34176__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34176__$1));return G__34176__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34177 = site_stats;var G__34177__$1 = (((G__34177 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__34177));return G__34177__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34177 = site_stats;var G__34177__$1 = (((G__34177 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__34177));return G__34177__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34178 = site_stats;var G__34178__$1 = (((G__34178 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34178));var G__34178__$2 = (((G__34178__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34178__$1));return G__34178__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34178 = site_stats;var G__34178__$1 = (((G__34178 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34178));var G__34178__$2 = (((G__34178__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34178__$1));return G__34178__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"))])], 0)),cljs.core.constant$keyword$668,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680,cljs.core.constant$keyword$681],["\u00A0",(function (){var G__34179 = site_stats;var G__34179__$1 = (((G__34179 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34179));var G__34179__$2 = (((G__34179__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34179__$1));return G__34179__$2;
})(),(function (){var G__34180 = site_stats;var G__34180__$1 = (((G__34180 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34180));var G__34180__$2 = (((G__34180__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34180__$1));return G__34180__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34181 = site_stats;var G__34181__$1 = (((G__34181 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34181));var G__34181__$2 = (((G__34181__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34181__$1));return G__34181__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34181 = site_stats;var G__34181__$1 = (((G__34181 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34181));var G__34181__$2 = (((G__34181__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34181__$1));return G__34181__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34182 = site_stats;var G__34182__$1 = (((G__34182 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34182));var G__34182__$2 = (((G__34182__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34182__$1));return G__34182__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34182 = site_stats;var G__34182__$1 = (((G__34182 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34182));var G__34182__$2 = (((G__34182__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34182__$1));return G__34182__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34183 = site_stats;var G__34183__$1 = (((G__34183 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34183));var G__34183__$2 = (((G__34183__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34183__$1));return G__34183__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34183 = site_stats;var G__34183__$1 = (((G__34183 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34183));var G__34183__$2 = (((G__34183__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34183__$1));return G__34183__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34184 = site_stats;var G__34184__$1 = (((G__34184 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34184));var G__34184__$2 = (((G__34184__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34184__$1));return G__34184__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34184 = site_stats;var G__34184__$1 = (((G__34184 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34184));var G__34184__$2 = (((G__34184__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34184__$1));return G__34184__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"))])], 0)),cljs.core.constant$keyword$669,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$669.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677,cljs.core.constant$keyword$678,cljs.core.constant$keyword$679,cljs.core.constant$keyword$680,cljs.core.constant$keyword$681],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34185 = all_investment_stats;var G__34185__$1 = (((G__34185 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34185));return G__34185__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34185 = all_investment_stats;var G__34185__$1 = (((G__34185 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34185));return G__34185__$1;
})(),cljs.core.constant$keyword$545,"-")),(function (){var G__34186 = all_investment_stats;var G__34186__$1 = (((G__34186 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34186));var G__34186__$2 = (((G__34186__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34186__$1));return G__34186__$2;
})(),(function (){var G__34187 = all_investment_stats;var G__34187__$1 = (((G__34187 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34187));var G__34187__$2 = (((G__34187__$1 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34187__$1));return G__34187__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34188 = all_investment_stats;var G__34188__$1 = (((G__34188 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34188));return G__34188__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34188 = all_investment_stats;var G__34188__$1 = (((G__34188 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34188));return G__34188__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34189 = all_investment_stats;var G__34189__$1 = (((G__34189 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34189));var G__34189__$2 = (((G__34189__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34189__$1));return G__34189__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34189 = all_investment_stats;var G__34189__$1 = (((G__34189 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34189));var G__34189__$2 = (((G__34189__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34189__$1));return G__34189__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34190 = all_investment_stats;var G__34190__$1 = (((G__34190 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34190));var G__34190__$2 = (((G__34190__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34190__$1));return G__34190__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34190 = all_investment_stats;var G__34190__$1 = (((G__34190 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34190));var G__34190__$2 = (((G__34190__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34190__$1));return G__34190__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34191 = all_investment_stats;var G__34191__$1 = (((G__34191 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34191));var G__34191__$2 = (((G__34191__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34191__$1));return G__34191__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34191 = all_investment_stats;var G__34191__$1 = (((G__34191 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34191));var G__34191__$2 = (((G__34191__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34191__$1));return G__34191__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34192 = all_investment_stats;var G__34192__$1 = (((G__34192 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__34192));return G__34192__$1;
})(),cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34192 = all_investment_stats;var G__34192__$1 = (((G__34192 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__34192));return G__34192__$1;
})(),cljs.core.constant$keyword$545,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34193 = all_investment_stats;var G__34193__$1 = (((G__34193 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34193));var G__34193__$2 = (((G__34193__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34193__$1));return G__34193__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34193 = all_investment_stats;var G__34193__$1 = (((G__34193 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34193));var G__34193__$2 = (((G__34193__$1 == null))?null:cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(G__34193__$1));return G__34193__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__34237 = clustermap.components.full_report.overview.overview_data(data);var map__34237__$1 = ((cljs.core.seq_QMARK_(map__34237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34237):map__34237);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34237__$1,cljs.core.constant$keyword$669);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34237__$1,cljs.core.constant$keyword$668);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34237__$1,cljs.core.constant$keyword$643);if(typeof clustermap.components.full_report.overview.t34238 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t34238 = (function (selection,averages,benchmark,map__34237,data,overview,meta34239){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__34237 = map__34237;
this.data = data;
this.overview = overview;
this.meta34239 = meta34239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t34238.cljs$lang$type = true;
clustermap.components.full_report.overview.t34238.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t34238";
clustermap.components.full_report.overview.t34238.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t34238");
});
clustermap.components.full_report.overview.t34238.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t34238.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$670) : self__.selection.call(null,cljs.core.constant$keyword$670))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$598) : self__.selection.call(null,cljs.core.constant$keyword$598)))),React.DOM.td(null,(function (){var attrs34245 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34245))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34245], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34245));
}
})()),React.DOM.td(null,(function (){var attrs34246 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34246))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34246], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34246));
}
})()),React.DOM.td(null,(function (){var attrs34247 = cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34247))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34247], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34247));
}
})()),React.DOM.td(null,(function (){var attrs34248 = cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34248))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34248], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34248));
}
})()),React.DOM.td(null,(function (){var attrs34249 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34249))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34249], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34249));
}
})()),React.DOM.td(null,(function (){var attrs34250 = cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34250))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34250], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34250));
}
})()),React.DOM.td(null,(function (){var attrs34251 = cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34251))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34251], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34251));
}
})()),React.DOM.td(null,(function (){var attrs34252 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34252))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34252], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34252));
}
})()),React.DOM.td(null,(function (){var attrs34253 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34253))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34253], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34253));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$670) : self__.averages.call(null,cljs.core.constant$keyword$670))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$598) : self__.averages.call(null,cljs.core.constant$keyword$598)))),React.DOM.td(null,(function (){var attrs34254 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34254))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34254], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34254));
}
})()),React.DOM.td(null,(function (){var attrs34255 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34255))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34255], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34255));
}
})()),React.DOM.td(null,(function (){var attrs34256 = cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34256))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34256], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34256));
}
})()),React.DOM.td(null,(function (){var attrs34257 = cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34257))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34257], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34257));
}
})()),React.DOM.td(null,(function (){var attrs34258 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs34258))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34258], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34258));
}
})()),React.DOM.td(null,(function (){var attrs34259 = cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34259))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34259], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34259));
}
})()),React.DOM.td(null,(function (){var attrs34260 = cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34260))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34260], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34260));
}
})()),React.DOM.td(null,(function (){var attrs34261 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs34261))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34261], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34261));
}
})()),React.DOM.td(null,(function (){var attrs34262 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34262))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34262], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34262));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$670) : self__.benchmark.call(null,cljs.core.constant$keyword$670))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$598) : self__.benchmark.call(null,cljs.core.constant$keyword$598)))),React.DOM.td(null,(function (){var attrs34263 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34263))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34263], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34263));
}
})()),React.DOM.td(null,(function (){var attrs34264 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34264))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34264], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34264));
}
})()),React.DOM.td(null,(function (){var attrs34265 = cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34265))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34265], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34265));
}
})()),React.DOM.td(null,(function (){var attrs34266 = cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34266))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34266], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34266));
}
})()),React.DOM.td(null,(function (){var attrs34267 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs34267))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34267], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34267));
}
})()),React.DOM.td(null,(function (){var attrs34268 = cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34268))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34268], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34268));
}
})()),React.DOM.td(null,(function (){var attrs34269 = cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34269))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34269], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34269));
}
})()),React.DOM.td(null,(function (){var attrs34270 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs34270))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34270], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34270));
}
})()),React.DOM.td(null,(function (){var attrs34271 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34271))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34271], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34271));
}
})()))))));
});
clustermap.components.full_report.overview.t34238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34240){var self__ = this;
var _34240__$1 = this;return self__.meta34239;
});
clustermap.components.full_report.overview.t34238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34240,meta34239__$1){var self__ = this;
var _34240__$1 = this;return (new clustermap.components.full_report.overview.t34238(self__.selection,self__.averages,self__.benchmark,self__.map__34237,self__.data,self__.overview,meta34239__$1));
});
clustermap.components.full_report.overview.__GT_t34238 = (function __GT_t34238(selection__$1,averages__$1,benchmark__$1,map__34237__$2,data__$1,overview__$1,meta34239){return (new clustermap.components.full_report.overview.t34238(selection__$1,averages__$1,benchmark__$1,map__34237__$2,data__$1,overview__$1,meta34239));
});
}
return (new clustermap.components.full_report.overview.t34238(selection,averages,benchmark,map__34237__$1,data,overview,null));
});
