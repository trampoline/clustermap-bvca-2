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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22179){var map__22184 = p__22179;var map__22184__$1 = ((cljs.core.seq_QMARK_(map__22184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22184):map__22184);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22184__$1,cljs.core.constant$keyword$226);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22184__$1,cljs.core.constant$keyword$259);var pred__22185 = cljs.core._EQ_;var expr__22186 = type;if(cljs.core.truth_((pred__22185.cljs$core$IFn$_invoke$arity$2 ? pred__22185.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$292,expr__22186) : pred__22185.call(null,cljs.core.constant$keyword$292,expr__22186))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22185.cljs$core$IFn$_invoke$arity$2 ? pred__22185.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$293,expr__22186) : pred__22185.call(null,cljs.core.constant$keyword$293,expr__22186))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22185.cljs$core$IFn$_invoke$arity$2 ? pred__22185.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$294,expr__22186) : pred__22185.call(null,cljs.core.constant$keyword$294,expr__22186))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22188){var map__22214 = p__22188;var map__22214__$1 = ((cljs.core.seq_QMARK_(map__22214))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22214):map__22214);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22214__$1,cljs.core.constant$keyword$309);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22214__$1,cljs.core.constant$keyword$297);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22214__$1,cljs.core.constant$keyword$310);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$297.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$311,cljs.core.constant$keyword$312,cljs.core.constant$keyword$313,cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22215 = site_stats;var G__22215__$1 = (((G__22215 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22215));return G__22215__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22215 = site_stats;var G__22215__$1 = (((G__22215 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22215));return G__22215__$1;
})(),cljs.core.constant$keyword$222,"-")),(function (){var G__22216 = site_stats;var G__22216__$1 = (((G__22216 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22216));var G__22216__$2 = (((G__22216__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22216__$1));return G__22216__$2;
})(),(function (){var G__22217 = site_stats;var G__22217__$1 = (((G__22217 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22217));var G__22217__$2 = (((G__22217__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22217__$1));return G__22217__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22218 = site_stats;var G__22218__$1 = (((G__22218 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22218));return G__22218__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22218 = site_stats;var G__22218__$1 = (((G__22218 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22218));return G__22218__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22219 = site_stats;var G__22219__$1 = (((G__22219 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22219));var G__22219__$2 = (((G__22219__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22219__$1));return G__22219__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22219 = site_stats;var G__22219__$1 = (((G__22219 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22219));var G__22219__$2 = (((G__22219__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22219__$1));return G__22219__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22220 = site_stats;var G__22220__$1 = (((G__22220 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22220));var G__22220__$2 = (((G__22220__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22220__$1));return G__22220__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22220 = site_stats;var G__22220__$1 = (((G__22220 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22220));var G__22220__$2 = (((G__22220__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22220__$1));return G__22220__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22221 = site_stats;var G__22221__$1 = (((G__22221 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22221));var G__22221__$2 = (((G__22221__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22221__$1));return G__22221__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22221 = site_stats;var G__22221__$1 = (((G__22221 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22221));var G__22221__$2 = (((G__22221__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22221__$1));return G__22221__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22222 = site_stats;var G__22222__$1 = (((G__22222 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22222));return G__22222__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22222 = site_stats;var G__22222__$1 = (((G__22222 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22222));return G__22222__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22223 = site_stats;var G__22223__$1 = (((G__22223 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22223));var G__22223__$2 = (((G__22223__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22223__$1));return G__22223__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22223 = site_stats;var G__22223__$1 = (((G__22223 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22223));var G__22223__$2 = (((G__22223__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22223__$1));return G__22223__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"))])], 0)),cljs.core.constant$keyword$306,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$311,cljs.core.constant$keyword$312,cljs.core.constant$keyword$313,cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319],["\u00A0",(function (){var G__22224 = site_stats;var G__22224__$1 = (((G__22224 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22224));var G__22224__$2 = (((G__22224__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22224__$1));return G__22224__$2;
})(),(function (){var G__22225 = site_stats;var G__22225__$1 = (((G__22225 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22225));var G__22225__$2 = (((G__22225__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22225__$1));return G__22225__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22226 = site_stats;var G__22226__$1 = (((G__22226 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22226));var G__22226__$2 = (((G__22226__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22226__$1));return G__22226__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22226 = site_stats;var G__22226__$1 = (((G__22226 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22226));var G__22226__$2 = (((G__22226__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22226__$1));return G__22226__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22227 = site_stats;var G__22227__$1 = (((G__22227 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22227));var G__22227__$2 = (((G__22227__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22227__$1));return G__22227__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22227 = site_stats;var G__22227__$1 = (((G__22227 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22227));var G__22227__$2 = (((G__22227__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22227__$1));return G__22227__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22228 = site_stats;var G__22228__$1 = (((G__22228 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22228));var G__22228__$2 = (((G__22228__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22228__$1));return G__22228__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22228 = site_stats;var G__22228__$1 = (((G__22228 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22228));var G__22228__$2 = (((G__22228__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22228__$1));return G__22228__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22229 = site_stats;var G__22229__$1 = (((G__22229 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22229));var G__22229__$2 = (((G__22229__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22229__$1));return G__22229__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22229 = site_stats;var G__22229__$1 = (((G__22229 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22229));var G__22229__$2 = (((G__22229__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22229__$1));return G__22229__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"))])], 0)),cljs.core.constant$keyword$307,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$311,cljs.core.constant$keyword$312,cljs.core.constant$keyword$313,cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22230 = all_portfolio_company_site_stats;var G__22230__$1 = (((G__22230 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22230));return G__22230__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22230 = all_portfolio_company_site_stats;var G__22230__$1 = (((G__22230 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22230));return G__22230__$1;
})(),cljs.core.constant$keyword$222,"-")),(function (){var G__22231 = all_portfolio_company_site_stats;var G__22231__$1 = (((G__22231 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22231));var G__22231__$2 = (((G__22231__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22231__$1));return G__22231__$2;
})(),(function (){var G__22232 = all_portfolio_company_site_stats;var G__22232__$1 = (((G__22232 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22232));var G__22232__$2 = (((G__22232__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22232__$1));return G__22232__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22233 = all_portfolio_company_site_stats;var G__22233__$1 = (((G__22233 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22233));return G__22233__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22233 = all_portfolio_company_site_stats;var G__22233__$1 = (((G__22233 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22233));return G__22233__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22234 = all_portfolio_company_site_stats;var G__22234__$1 = (((G__22234 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22234));var G__22234__$2 = (((G__22234__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22234__$1));return G__22234__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22234 = all_portfolio_company_site_stats;var G__22234__$1 = (((G__22234 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22234));var G__22234__$2 = (((G__22234__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22234__$1));return G__22234__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22235 = all_portfolio_company_site_stats;var G__22235__$1 = (((G__22235 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22235));var G__22235__$2 = (((G__22235__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22235__$1));return G__22235__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22235 = all_portfolio_company_site_stats;var G__22235__$1 = (((G__22235 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22235));var G__22235__$2 = (((G__22235__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22235__$1));return G__22235__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22236 = all_portfolio_company_site_stats;var G__22236__$1 = (((G__22236 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22236));var G__22236__$2 = (((G__22236__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22236__$1));return G__22236__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22236 = all_portfolio_company_site_stats;var G__22236__$1 = (((G__22236 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22236));var G__22236__$2 = (((G__22236__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22236__$1));return G__22236__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22237 = all_portfolio_company_site_stats;var G__22237__$1 = (((G__22237 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22237));return G__22237__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22237 = all_portfolio_company_site_stats;var G__22237__$1 = (((G__22237 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22237));return G__22237__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22238 = all_portfolio_company_site_stats;var G__22238__$1 = (((G__22238 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22238));var G__22238__$2 = (((G__22238__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22238__$1));return G__22238__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22238 = all_portfolio_company_site_stats;var G__22238__$1 = (((G__22238 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22238));var G__22238__$2 = (((G__22238__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22238__$1));return G__22238__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__22282 = clustermap.components.full_report.overview.overview_data(data);var map__22282__$1 = ((cljs.core.seq_QMARK_(map__22282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22282):map__22282);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22282__$1,cljs.core.constant$keyword$307);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22282__$1,cljs.core.constant$keyword$306);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22282__$1,cljs.core.constant$keyword$297);if(typeof clustermap.components.full_report.overview.t22283 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22283 = (function (selection,averages,benchmark,map__22282,data,overview,meta22284){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22282 = map__22282;
this.data = data;
this.overview = overview;
this.meta22284 = meta22284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22283.cljs$lang$type = true;
clustermap.components.full_report.overview.t22283.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22283";
clustermap.components.full_report.overview.t22283.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22283");
});
clustermap.components.full_report.overview.t22283.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22283.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$308) : self__.selection.call(null,cljs.core.constant$keyword$308))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$269) : self__.selection.call(null,cljs.core.constant$keyword$269)))),React.DOM.td(null,(function (){var attrs22290 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22290))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22290], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22290));
}
})()),React.DOM.td(null,(function (){var attrs22291 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22291))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22291], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22291));
}
})()),React.DOM.td(null,(function (){var attrs22292 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22292))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22292], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22292));
}
})()),React.DOM.td(null,(function (){var attrs22293 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22293))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22293], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22293));
}
})()),React.DOM.td(null,(function (){var attrs22294 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22294))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22294], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22294));
}
})()),React.DOM.td(null,(function (){var attrs22295 = cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22295))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22295], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22295));
}
})()),React.DOM.td(null,(function (){var attrs22296 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22296))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22296], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22296));
}
})()),React.DOM.td(null,(function (){var attrs22297 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22297))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22297], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22297));
}
})()),React.DOM.td(null,(function (){var attrs22298 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22298))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22298], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22298));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$308) : self__.averages.call(null,cljs.core.constant$keyword$308))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$269) : self__.averages.call(null,cljs.core.constant$keyword$269)))),React.DOM.td(null,(function (){var attrs22299 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22299))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22299], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22299));
}
})()),React.DOM.td(null,(function (){var attrs22300 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22300))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22300], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22300));
}
})()),React.DOM.td(null,(function (){var attrs22301 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22301))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22301], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22301));
}
})()),React.DOM.td(null,(function (){var attrs22302 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22302))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22302], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22302));
}
})()),React.DOM.td(null,(function (){var attrs22303 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22303))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22303], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22303));
}
})()),React.DOM.td(null,(function (){var attrs22304 = cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22304))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22304], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22304));
}
})()),React.DOM.td(null,(function (){var attrs22305 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22305))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22305], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22305));
}
})()),React.DOM.td(null,(function (){var attrs22306 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22306))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22306], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22306));
}
})()),React.DOM.td(null,(function (){var attrs22307 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22307))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22307], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22307));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$308) : self__.benchmark.call(null,cljs.core.constant$keyword$308))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$269) : self__.benchmark.call(null,cljs.core.constant$keyword$269)))),React.DOM.td(null,(function (){var attrs22308 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22308))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22308], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22308));
}
})()),React.DOM.td(null,(function (){var attrs22309 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22309))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22309], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22309));
}
})()),React.DOM.td(null,(function (){var attrs22310 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22310))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22310], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22310));
}
})()),React.DOM.td(null,(function (){var attrs22311 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22311))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22311], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22311));
}
})()),React.DOM.td(null,(function (){var attrs22312 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22312))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22312], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22312));
}
})()),React.DOM.td(null,(function (){var attrs22313 = cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22313))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22313], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22313));
}
})()),React.DOM.td(null,(function (){var attrs22314 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22314))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22314], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22314));
}
})()),React.DOM.td(null,(function (){var attrs22315 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22315))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22315], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22315));
}
})()),React.DOM.td(null,(function (){var attrs22316 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22316))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22316], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22316));
}
})()))))));
});
clustermap.components.full_report.overview.t22283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22285){var self__ = this;
var _22285__$1 = this;return self__.meta22284;
});
clustermap.components.full_report.overview.t22283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22285,meta22284__$1){var self__ = this;
var _22285__$1 = this;return (new clustermap.components.full_report.overview.t22283(self__.selection,self__.averages,self__.benchmark,self__.map__22282,self__.data,self__.overview,meta22284__$1));
});
clustermap.components.full_report.overview.__GT_t22283 = (function __GT_t22283(selection__$1,averages__$1,benchmark__$1,map__22282__$2,data__$1,overview__$1,meta22284){return (new clustermap.components.full_report.overview.t22283(selection__$1,averages__$1,benchmark__$1,map__22282__$2,data__$1,overview__$1,meta22284));
});
}
return (new clustermap.components.full_report.overview.t22283(selection,averages,benchmark,map__22282__$1,data,overview,null));
});
