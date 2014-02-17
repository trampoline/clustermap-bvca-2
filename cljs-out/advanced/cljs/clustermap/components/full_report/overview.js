// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22283){var map__22288 = p__22283;var map__22288__$1 = ((cljs.core.seq_QMARK_(map__22288))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22288):map__22288);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22288__$1,cljs.core.constant$keyword$229);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22288__$1,cljs.core.constant$keyword$264);var pred__22289 = cljs.core._EQ_;var expr__22290 = type;if(cljs.core.truth_((pred__22289.cljs$core$IFn$_invoke$arity$2 ? pred__22289.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22290) : pred__22289.call(null,cljs.core.constant$keyword$297,expr__22290))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Total",cljs.core.constant$keyword$314,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Average",cljs.core.constant$keyword$314,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Benchmark",cljs.core.constant$keyword$314,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22289.cljs$core$IFn$_invoke$arity$2 ? pred__22289.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__22290) : pred__22289.call(null,cljs.core.constant$keyword$298,expr__22290))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Total",cljs.core.constant$keyword$314,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Average",cljs.core.constant$keyword$314,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Benchmark",cljs.core.constant$keyword$314,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22289.cljs$core$IFn$_invoke$arity$2 ? pred__22289.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$299,expr__22290) : pred__22289.call(null,cljs.core.constant$keyword$299,expr__22290))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Total",cljs.core.constant$keyword$314,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Average",cljs.core.constant$keyword$314,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Benchmark",cljs.core.constant$keyword$314,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Total",cljs.core.constant$keyword$314,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Average",cljs.core.constant$keyword$314,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,"Benchmark",cljs.core.constant$keyword$314,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22292){var map__22318 = p__22292;var map__22318__$1 = ((cljs.core.seq_QMARK_(map__22318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22318):map__22318);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,cljs.core.constant$keyword$315);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,cljs.core.constant$keyword$303);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,cljs.core.constant$keyword$316);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$303,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322,cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22319 = site_stats;var G__22319__$1 = (((G__22319 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22319));return G__22319__$1;
})(),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22319 = site_stats;var G__22319__$1 = (((G__22319 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22319));return G__22319__$1;
})(),cljs.core.constant$keyword$225,"-")),(function (){var G__22320 = site_stats;var G__22320__$1 = (((G__22320 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22320));var G__22320__$2 = (((G__22320__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22320__$1));return G__22320__$2;
})(),(function (){var G__22321 = site_stats;var G__22321__$1 = (((G__22321 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22321));var G__22321__$2 = (((G__22321__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22321__$1));return G__22321__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22322 = site_stats;var G__22322__$1 = (((G__22322 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22322));return G__22322__$1;
})(),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22322 = site_stats;var G__22322__$1 = (((G__22322 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22322));return G__22322__$1;
})(),cljs.core.constant$keyword$225,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22323 = site_stats;var G__22323__$1 = (((G__22323 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22323));var G__22323__$2 = (((G__22323__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22323__$1));return G__22323__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22323 = site_stats;var G__22323__$1 = (((G__22323 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22323));var G__22323__$2 = (((G__22323__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22323__$1));return G__22323__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22324 = site_stats;var G__22324__$1 = (((G__22324 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22324));var G__22324__$2 = (((G__22324__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22324__$1));return G__22324__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22324 = site_stats;var G__22324__$1 = (((G__22324 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22324));var G__22324__$2 = (((G__22324__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22324__$1));return G__22324__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22325 = site_stats;var G__22325__$1 = (((G__22325 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22325));var G__22325__$2 = (((G__22325__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22325__$1));return G__22325__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22325 = site_stats;var G__22325__$1 = (((G__22325 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22325));var G__22325__$2 = (((G__22325__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22325__$1));return G__22325__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22326 = site_stats;var G__22326__$1 = (((G__22326 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22326));return G__22326__$1;
})(),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22326 = site_stats;var G__22326__$1 = (((G__22326 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22326));return G__22326__$1;
})(),cljs.core.constant$keyword$225,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22327 = site_stats;var G__22327__$1 = (((G__22327 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22327));var G__22327__$2 = (((G__22327__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22327__$1));return G__22327__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22327 = site_stats;var G__22327__$1 = (((G__22327 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22327));var G__22327__$2 = (((G__22327__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22327__$1));return G__22327__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"))])], 0)),cljs.core.constant$keyword$312,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322,cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325],["\u00A0",(function (){var G__22328 = site_stats;var G__22328__$1 = (((G__22328 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22328));var G__22328__$2 = (((G__22328__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22328__$1));return G__22328__$2;
})(),(function (){var G__22329 = site_stats;var G__22329__$1 = (((G__22329 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22329));var G__22329__$2 = (((G__22329__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22329__$1));return G__22329__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22330 = site_stats;var G__22330__$1 = (((G__22330 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22330));var G__22330__$2 = (((G__22330__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22330__$1));return G__22330__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22330 = site_stats;var G__22330__$1 = (((G__22330 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22330));var G__22330__$2 = (((G__22330__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22330__$1));return G__22330__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22331 = site_stats;var G__22331__$1 = (((G__22331 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22331));var G__22331__$2 = (((G__22331__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22331__$1));return G__22331__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22331 = site_stats;var G__22331__$1 = (((G__22331 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22331));var G__22331__$2 = (((G__22331__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22331__$1));return G__22331__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22332 = site_stats;var G__22332__$1 = (((G__22332 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22332));var G__22332__$2 = (((G__22332__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22332__$1));return G__22332__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22332 = site_stats;var G__22332__$1 = (((G__22332 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22332));var G__22332__$2 = (((G__22332__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22332__$1));return G__22332__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22333 = site_stats;var G__22333__$1 = (((G__22333 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22333));var G__22333__$2 = (((G__22333__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22333__$1));return G__22333__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22333 = site_stats;var G__22333__$1 = (((G__22333 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22333));var G__22333__$2 = (((G__22333__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22333__$1));return G__22333__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"))])], 0)),cljs.core.constant$keyword$313,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322,cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22334 = all_portfolio_company_site_stats;var G__22334__$1 = (((G__22334 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22334));return G__22334__$1;
})(),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22334 = all_portfolio_company_site_stats;var G__22334__$1 = (((G__22334 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22334));return G__22334__$1;
})(),cljs.core.constant$keyword$225,"-")),(function (){var G__22335 = all_portfolio_company_site_stats;var G__22335__$1 = (((G__22335 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22335));var G__22335__$2 = (((G__22335__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22335__$1));return G__22335__$2;
})(),(function (){var G__22336 = all_portfolio_company_site_stats;var G__22336__$1 = (((G__22336 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22336));var G__22336__$2 = (((G__22336__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22336__$1));return G__22336__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22337 = all_portfolio_company_site_stats;var G__22337__$1 = (((G__22337 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22337));return G__22337__$1;
})(),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22337 = all_portfolio_company_site_stats;var G__22337__$1 = (((G__22337 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22337));return G__22337__$1;
})(),cljs.core.constant$keyword$225,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22338 = all_portfolio_company_site_stats;var G__22338__$1 = (((G__22338 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22338));var G__22338__$2 = (((G__22338__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22338__$1));return G__22338__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22338 = all_portfolio_company_site_stats;var G__22338__$1 = (((G__22338 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22338));var G__22338__$2 = (((G__22338__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22338__$1));return G__22338__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22339 = all_portfolio_company_site_stats;var G__22339__$1 = (((G__22339 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22339));var G__22339__$2 = (((G__22339__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22339__$1));return G__22339__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22339 = all_portfolio_company_site_stats;var G__22339__$1 = (((G__22339 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22339));var G__22339__$2 = (((G__22339__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22339__$1));return G__22339__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22340 = all_portfolio_company_site_stats;var G__22340__$1 = (((G__22340 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22340));var G__22340__$2 = (((G__22340__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22340__$1));return G__22340__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22340 = all_portfolio_company_site_stats;var G__22340__$1 = (((G__22340 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22340));var G__22340__$2 = (((G__22340__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22340__$1));return G__22340__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22341 = all_portfolio_company_site_stats;var G__22341__$1 = (((G__22341 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22341));return G__22341__$1;
})(),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22341 = all_portfolio_company_site_stats;var G__22341__$1 = (((G__22341 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22341));return G__22341__$1;
})(),cljs.core.constant$keyword$225,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22342 = all_portfolio_company_site_stats;var G__22342__$1 = (((G__22342 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22342));var G__22342__$2 = (((G__22342__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22342__$1));return G__22342__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22342 = all_portfolio_company_site_stats;var G__22342__$1 = (((G__22342 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22342));var G__22342__$2 = (((G__22342__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22342__$1));return G__22342__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__22386 = clustermap.components.full_report.overview.overview_data(data);var map__22386__$1 = ((cljs.core.seq_QMARK_(map__22386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22386):map__22386);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22386__$1,cljs.core.constant$keyword$313);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22386__$1,cljs.core.constant$keyword$312);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22386__$1,cljs.core.constant$keyword$303);if(typeof clustermap.components.full_report.overview.t22387 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22387 = (function (selection,averages,benchmark,map__22386,data,overview,meta22388){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22386 = map__22386;
this.data = data;
this.overview = overview;
this.meta22388 = meta22388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22387.cljs$lang$type = true;
clustermap.components.full_report.overview.t22387.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22387";
clustermap.components.full_report.overview.t22387.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22387");
});
clustermap.components.full_report.overview.t22387.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22387.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$314) : self__.selection.call(null,cljs.core.constant$keyword$314))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$274) : self__.selection.call(null,cljs.core.constant$keyword$274)))),React.DOM.td(null,(function (){var attrs22394 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22394))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22394], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22394));
}
})()),React.DOM.td(null,(function (){var attrs22395 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22395))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22395], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22395));
}
})()),React.DOM.td(null,(function (){var attrs22396 = cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22396))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22396], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22396));
}
})()),React.DOM.td(null,(function (){var attrs22397 = cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22397))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22397], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22397));
}
})()),React.DOM.td(null,(function (){var attrs22398 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22398))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22398], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22398));
}
})()),React.DOM.td(null,(function (){var attrs22399 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22399))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22399], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22399));
}
})()),React.DOM.td(null,(function (){var attrs22400 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22400))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22400], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22400));
}
})()),React.DOM.td(null,(function (){var attrs22401 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22401))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22401], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22401));
}
})()),React.DOM.td(null,(function (){var attrs22402 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22402))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22402], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22402));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$314) : self__.averages.call(null,cljs.core.constant$keyword$314))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$274) : self__.averages.call(null,cljs.core.constant$keyword$274)))),React.DOM.td(null,(function (){var attrs22403 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22403))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22403], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22403));
}
})()),React.DOM.td(null,(function (){var attrs22404 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22404))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22404], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22404));
}
})()),React.DOM.td(null,(function (){var attrs22405 = cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22405))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22405], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22405));
}
})()),React.DOM.td(null,(function (){var attrs22406 = cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22406))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22406], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22406));
}
})()),React.DOM.td(null,(function (){var attrs22407 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22407))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22407], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22407));
}
})()),React.DOM.td(null,(function (){var attrs22408 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22408))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22408], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22408));
}
})()),React.DOM.td(null,(function (){var attrs22409 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22409))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22409], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22409));
}
})()),React.DOM.td(null,(function (){var attrs22410 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22410))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22410], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22410));
}
})()),React.DOM.td(null,(function (){var attrs22411 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22411))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22411], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22411));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$314) : self__.benchmark.call(null,cljs.core.constant$keyword$314))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$274) : self__.benchmark.call(null,cljs.core.constant$keyword$274)))),React.DOM.td(null,(function (){var attrs22412 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22412))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22412], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22412));
}
})()),React.DOM.td(null,(function (){var attrs22413 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22413))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22413], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22413));
}
})()),React.DOM.td(null,(function (){var attrs22414 = cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22414))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22414], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22414));
}
})()),React.DOM.td(null,(function (){var attrs22415 = cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22415))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22415], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22415));
}
})()),React.DOM.td(null,(function (){var attrs22416 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22416))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22416], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22416));
}
})()),React.DOM.td(null,(function (){var attrs22417 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22417))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22417], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22417));
}
})()),React.DOM.td(null,(function (){var attrs22418 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22418))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22418], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22418));
}
})()),React.DOM.td(null,(function (){var attrs22419 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22419))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22419], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22419));
}
})()),React.DOM.td(null,(function (){var attrs22420 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22420))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22420], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22420));
}
})()))))));
});
clustermap.components.full_report.overview.t22387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22389){var self__ = this;
var _22389__$1 = this;return self__.meta22388;
});
clustermap.components.full_report.overview.t22387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22389,meta22388__$1){var self__ = this;
var _22389__$1 = this;return (new clustermap.components.full_report.overview.t22387(self__.selection,self__.averages,self__.benchmark,self__.map__22386,self__.data,self__.overview,meta22388__$1));
});
clustermap.components.full_report.overview.__GT_t22387 = (function __GT_t22387(selection__$1,averages__$1,benchmark__$1,map__22386__$2,data__$1,overview__$1,meta22388){return (new clustermap.components.full_report.overview.t22387(selection__$1,averages__$1,benchmark__$1,map__22386__$2,data__$1,overview__$1,meta22388));
});
}
return (new clustermap.components.full_report.overview.t22387(selection,averages,benchmark,map__22386__$1,data,overview,null));
});
