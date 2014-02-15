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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22187){var map__22192 = p__22187;var map__22192__$1 = ((cljs.core.seq_QMARK_(map__22192))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22192):map__22192);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22192__$1,cljs.core.constant$keyword$227);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22192__$1,cljs.core.constant$keyword$262);var pred__22193 = cljs.core._EQ_;var expr__22194 = type;if(cljs.core.truth_((pred__22193.cljs$core$IFn$_invoke$arity$2 ? pred__22193.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$295,expr__22194) : pred__22193.call(null,cljs.core.constant$keyword$295,expr__22194))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Total",cljs.core.constant$keyword$311,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Average",cljs.core.constant$keyword$311,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Benchmark",cljs.core.constant$keyword$311,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22193.cljs$core$IFn$_invoke$arity$2 ? pred__22193.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__22194) : pred__22193.call(null,cljs.core.constant$keyword$296,expr__22194))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Total",cljs.core.constant$keyword$311,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Average",cljs.core.constant$keyword$311,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Benchmark",cljs.core.constant$keyword$311,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22193.cljs$core$IFn$_invoke$arity$2 ? pred__22193.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22194) : pred__22193.call(null,cljs.core.constant$keyword$297,expr__22194))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Total",cljs.core.constant$keyword$311,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Average",cljs.core.constant$keyword$311,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Benchmark",cljs.core.constant$keyword$311,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Total",cljs.core.constant$keyword$311,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Average",cljs.core.constant$keyword$311,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,"Benchmark",cljs.core.constant$keyword$311,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22196){var map__22222 = p__22196;var map__22222__$1 = ((cljs.core.seq_QMARK_(map__22222))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22222):map__22222);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,cljs.core.constant$keyword$312);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,cljs.core.constant$keyword$300);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,cljs.core.constant$keyword$313);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$300,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22223 = site_stats;var G__22223__$1 = (((G__22223 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22223));return G__22223__$1;
})(),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22223 = site_stats;var G__22223__$1 = (((G__22223 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22223));return G__22223__$1;
})(),cljs.core.constant$keyword$223,"-")),(function (){var G__22224 = site_stats;var G__22224__$1 = (((G__22224 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22224));var G__22224__$2 = (((G__22224__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22224__$1));return G__22224__$2;
})(),(function (){var G__22225 = site_stats;var G__22225__$1 = (((G__22225 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22225));var G__22225__$2 = (((G__22225__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22225__$1));return G__22225__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22226 = site_stats;var G__22226__$1 = (((G__22226 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22226));return G__22226__$1;
})(),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22226 = site_stats;var G__22226__$1 = (((G__22226 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22226));return G__22226__$1;
})(),cljs.core.constant$keyword$223,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22227 = site_stats;var G__22227__$1 = (((G__22227 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22227));var G__22227__$2 = (((G__22227__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22227__$1));return G__22227__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22227 = site_stats;var G__22227__$1 = (((G__22227 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22227));var G__22227__$2 = (((G__22227__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22227__$1));return G__22227__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22228 = site_stats;var G__22228__$1 = (((G__22228 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22228));var G__22228__$2 = (((G__22228__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22228__$1));return G__22228__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22228 = site_stats;var G__22228__$1 = (((G__22228 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22228));var G__22228__$2 = (((G__22228__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22228__$1));return G__22228__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22229 = site_stats;var G__22229__$1 = (((G__22229 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22229));var G__22229__$2 = (((G__22229__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22229__$1));return G__22229__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22229 = site_stats;var G__22229__$1 = (((G__22229 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22229));var G__22229__$2 = (((G__22229__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22229__$1));return G__22229__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22230 = site_stats;var G__22230__$1 = (((G__22230 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22230));return G__22230__$1;
})(),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22230 = site_stats;var G__22230__$1 = (((G__22230 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22230));return G__22230__$1;
})(),cljs.core.constant$keyword$223,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22231 = site_stats;var G__22231__$1 = (((G__22231 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22231));var G__22231__$2 = (((G__22231__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22231__$1));return G__22231__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22231 = site_stats;var G__22231__$1 = (((G__22231 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22231));var G__22231__$2 = (((G__22231__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22231__$1));return G__22231__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"))])], 0)),cljs.core.constant$keyword$309,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322],["\u00A0",(function (){var G__22232 = site_stats;var G__22232__$1 = (((G__22232 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22232));var G__22232__$2 = (((G__22232__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22232__$1));return G__22232__$2;
})(),(function (){var G__22233 = site_stats;var G__22233__$1 = (((G__22233 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22233));var G__22233__$2 = (((G__22233__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22233__$1));return G__22233__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22234 = site_stats;var G__22234__$1 = (((G__22234 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22234));var G__22234__$2 = (((G__22234__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22234__$1));return G__22234__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22234 = site_stats;var G__22234__$1 = (((G__22234 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22234));var G__22234__$2 = (((G__22234__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22234__$1));return G__22234__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22235 = site_stats;var G__22235__$1 = (((G__22235 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22235));var G__22235__$2 = (((G__22235__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22235__$1));return G__22235__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22235 = site_stats;var G__22235__$1 = (((G__22235 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22235));var G__22235__$2 = (((G__22235__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22235__$1));return G__22235__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22236 = site_stats;var G__22236__$1 = (((G__22236 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22236));var G__22236__$2 = (((G__22236__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22236__$1));return G__22236__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22236 = site_stats;var G__22236__$1 = (((G__22236 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22236));var G__22236__$2 = (((G__22236__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22236__$1));return G__22236__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22237 = site_stats;var G__22237__$1 = (((G__22237 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22237));var G__22237__$2 = (((G__22237__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22237__$1));return G__22237__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22237 = site_stats;var G__22237__$1 = (((G__22237 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22237));var G__22237__$2 = (((G__22237__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22237__$1));return G__22237__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"))])], 0)),cljs.core.constant$keyword$310,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22238 = all_portfolio_company_site_stats;var G__22238__$1 = (((G__22238 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22238));return G__22238__$1;
})(),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22238 = all_portfolio_company_site_stats;var G__22238__$1 = (((G__22238 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22238));return G__22238__$1;
})(),cljs.core.constant$keyword$223,"-")),(function (){var G__22239 = all_portfolio_company_site_stats;var G__22239__$1 = (((G__22239 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22239));var G__22239__$2 = (((G__22239__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22239__$1));return G__22239__$2;
})(),(function (){var G__22240 = all_portfolio_company_site_stats;var G__22240__$1 = (((G__22240 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22240));var G__22240__$2 = (((G__22240__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22240__$1));return G__22240__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22241 = all_portfolio_company_site_stats;var G__22241__$1 = (((G__22241 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22241));return G__22241__$1;
})(),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22241 = all_portfolio_company_site_stats;var G__22241__$1 = (((G__22241 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22241));return G__22241__$1;
})(),cljs.core.constant$keyword$223,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22242 = all_portfolio_company_site_stats;var G__22242__$1 = (((G__22242 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22242));var G__22242__$2 = (((G__22242__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22242__$1));return G__22242__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22242 = all_portfolio_company_site_stats;var G__22242__$1 = (((G__22242 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22242));var G__22242__$2 = (((G__22242__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22242__$1));return G__22242__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22243 = all_portfolio_company_site_stats;var G__22243__$1 = (((G__22243 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22243));var G__22243__$2 = (((G__22243__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22243__$1));return G__22243__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22243 = all_portfolio_company_site_stats;var G__22243__$1 = (((G__22243 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22243));var G__22243__$2 = (((G__22243__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22243__$1));return G__22243__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22244 = all_portfolio_company_site_stats;var G__22244__$1 = (((G__22244 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22244));var G__22244__$2 = (((G__22244__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22244__$1));return G__22244__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22244 = all_portfolio_company_site_stats;var G__22244__$1 = (((G__22244 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22244));var G__22244__$2 = (((G__22244__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22244__$1));return G__22244__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22245 = all_portfolio_company_site_stats;var G__22245__$1 = (((G__22245 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22245));return G__22245__$1;
})(),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22245 = all_portfolio_company_site_stats;var G__22245__$1 = (((G__22245 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22245));return G__22245__$1;
})(),cljs.core.constant$keyword$223,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22246 = all_portfolio_company_site_stats;var G__22246__$1 = (((G__22246 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22246));var G__22246__$2 = (((G__22246__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22246__$1));return G__22246__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22246 = all_portfolio_company_site_stats;var G__22246__$1 = (((G__22246 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22246));var G__22246__$2 = (((G__22246__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22246__$1));return G__22246__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__22290 = clustermap.components.full_report.overview.overview_data(data);var map__22290__$1 = ((cljs.core.seq_QMARK_(map__22290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22290):map__22290);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.constant$keyword$310);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.constant$keyword$309);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,cljs.core.constant$keyword$300);if(typeof clustermap.components.full_report.overview.t22291 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22291 = (function (selection,averages,benchmark,map__22290,data,overview,meta22292){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22290 = map__22290;
this.data = data;
this.overview = overview;
this.meta22292 = meta22292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22291.cljs$lang$type = true;
clustermap.components.full_report.overview.t22291.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22291";
clustermap.components.full_report.overview.t22291.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22291");
});
clustermap.components.full_report.overview.t22291.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22291.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$311) : self__.selection.call(null,cljs.core.constant$keyword$311))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$272) : self__.selection.call(null,cljs.core.constant$keyword$272)))),React.DOM.td(null,(function (){var attrs22298 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22298))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22298], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22298));
}
})()),React.DOM.td(null,(function (){var attrs22299 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22299))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22299], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22299));
}
})()),React.DOM.td(null,(function (){var attrs22300 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22300))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22300], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22300));
}
})()),React.DOM.td(null,(function (){var attrs22301 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22301))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22301], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22301));
}
})()),React.DOM.td(null,(function (){var attrs22302 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22302))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22302], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22302));
}
})()),React.DOM.td(null,(function (){var attrs22303 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22303))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22303], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22303));
}
})()),React.DOM.td(null,(function (){var attrs22304 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22304))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22304], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22304));
}
})()),React.DOM.td(null,(function (){var attrs22305 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22305))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22305], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22305));
}
})()),React.DOM.td(null,(function (){var attrs22306 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22306))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22306], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22306));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$311) : self__.averages.call(null,cljs.core.constant$keyword$311))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$272) : self__.averages.call(null,cljs.core.constant$keyword$272)))),React.DOM.td(null,(function (){var attrs22307 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22307))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22307], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22307));
}
})()),React.DOM.td(null,(function (){var attrs22308 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22308))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22308], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22308));
}
})()),React.DOM.td(null,(function (){var attrs22309 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22309))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22309], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22309));
}
})()),React.DOM.td(null,(function (){var attrs22310 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22310))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22310], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22310));
}
})()),React.DOM.td(null,(function (){var attrs22311 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22311))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22311], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22311));
}
})()),React.DOM.td(null,(function (){var attrs22312 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22312))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22312], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22312));
}
})()),React.DOM.td(null,(function (){var attrs22313 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22313))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22313], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22313));
}
})()),React.DOM.td(null,(function (){var attrs22314 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22314))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22314], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22314));
}
})()),React.DOM.td(null,(function (){var attrs22315 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22315))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22315], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22315));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$311) : self__.benchmark.call(null,cljs.core.constant$keyword$311))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$272) : self__.benchmark.call(null,cljs.core.constant$keyword$272)))),React.DOM.td(null,(function (){var attrs22316 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22316))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22316], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22316));
}
})()),React.DOM.td(null,(function (){var attrs22317 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22317))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22317], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22317));
}
})()),React.DOM.td(null,(function (){var attrs22318 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22318))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22318], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22318));
}
})()),React.DOM.td(null,(function (){var attrs22319 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22319))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22319], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22319));
}
})()),React.DOM.td(null,(function (){var attrs22320 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22320))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22320], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22320));
}
})()),React.DOM.td(null,(function (){var attrs22321 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22321))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22321], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22321));
}
})()),React.DOM.td(null,(function (){var attrs22322 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22322))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22322], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22322));
}
})()),React.DOM.td(null,(function (){var attrs22323 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22323))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22323], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22323));
}
})()),React.DOM.td(null,(function (){var attrs22324 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22324))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22324], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22324));
}
})()))))));
});
clustermap.components.full_report.overview.t22291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22293){var self__ = this;
var _22293__$1 = this;return self__.meta22292;
});
clustermap.components.full_report.overview.t22291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22293,meta22292__$1){var self__ = this;
var _22293__$1 = this;return (new clustermap.components.full_report.overview.t22291(self__.selection,self__.averages,self__.benchmark,self__.map__22290,self__.data,self__.overview,meta22292__$1));
});
clustermap.components.full_report.overview.__GT_t22291 = (function __GT_t22291(selection__$1,averages__$1,benchmark__$1,map__22290__$2,data__$1,overview__$1,meta22292){return (new clustermap.components.full_report.overview.t22291(selection__$1,averages__$1,benchmark__$1,map__22290__$2,data__$1,overview__$1,meta22292));
});
}
return (new clustermap.components.full_report.overview.t22291(selection,averages,benchmark,map__22290__$1,data,overview,null));
});
