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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__34120){var map__34125 = p__34120;var map__34125__$1 = ((cljs.core.seq_QMARK_(map__34125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34125):map__34125);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34125__$1,cljs.core.constant$keyword$545);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34125__$1,cljs.core.constant$keyword$584);var pred__34126 = cljs.core._EQ_;var expr__34127 = type;if(cljs.core.truth_((pred__34126.cljs$core$IFn$_invoke$arity$2 ? pred__34126.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34127) : pred__34126.call(null,cljs.core.constant$keyword$629,expr__34127))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34126.cljs$core$IFn$_invoke$arity$2 ? pred__34126.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34127) : pred__34126.call(null,cljs.core.constant$keyword$630,expr__34127))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34126.cljs$core$IFn$_invoke$arity$2 ? pred__34126.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34127) : pred__34126.call(null,cljs.core.constant$keyword$631,expr__34127))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Total",cljs.core.constant$keyword$666,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$664,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Mean",cljs.core.constant$keyword$666,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$665,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,"Benchmark",cljs.core.constant$keyword$666,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__34129){var map__34155 = p__34129;var map__34155__$1 = ((cljs.core.seq_QMARK_(map__34155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34155):map__34155);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34155__$1,cljs.core.constant$keyword$667);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34155__$1,cljs.core.constant$keyword$639);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34155__$1,cljs.core.constant$keyword$668);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$639,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$639.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34156 = site_stats;var G__34156__$1 = (((G__34156 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34156));return G__34156__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34156 = site_stats;var G__34156__$1 = (((G__34156 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34156));return G__34156__$1;
})(),cljs.core.constant$keyword$541,"-")),(function (){var G__34157 = site_stats;var G__34157__$1 = (((G__34157 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34157));var G__34157__$2 = (((G__34157__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34157__$1));return G__34157__$2;
})(),(function (){var G__34158 = site_stats;var G__34158__$1 = (((G__34158 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34158));var G__34158__$2 = (((G__34158__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34158__$1));return G__34158__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34159 = site_stats;var G__34159__$1 = (((G__34159 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34159));return G__34159__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34159 = site_stats;var G__34159__$1 = (((G__34159 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34159));return G__34159__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34160 = site_stats;var G__34160__$1 = (((G__34160 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34160));var G__34160__$2 = (((G__34160__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34160__$1));return G__34160__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34160 = site_stats;var G__34160__$1 = (((G__34160 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34160));var G__34160__$2 = (((G__34160__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34160__$1));return G__34160__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34161 = site_stats;var G__34161__$1 = (((G__34161 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34161));var G__34161__$2 = (((G__34161__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34161__$1));return G__34161__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34161 = site_stats;var G__34161__$1 = (((G__34161 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34161));var G__34161__$2 = (((G__34161__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34161__$1));return G__34161__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34162 = site_stats;var G__34162__$1 = (((G__34162 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34162));var G__34162__$2 = (((G__34162__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34162__$1));return G__34162__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34162 = site_stats;var G__34162__$1 = (((G__34162 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34162));var G__34162__$2 = (((G__34162__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34162__$1));return G__34162__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34163 = site_stats;var G__34163__$1 = (((G__34163 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34163));return G__34163__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34163 = site_stats;var G__34163__$1 = (((G__34163 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34163));return G__34163__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34164 = site_stats;var G__34164__$1 = (((G__34164 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34164));var G__34164__$2 = (((G__34164__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34164__$1));return G__34164__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34164 = site_stats;var G__34164__$1 = (((G__34164 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34164));var G__34164__$2 = (((G__34164__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34164__$1));return G__34164__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"))])], 0)),cljs.core.constant$keyword$664,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$664.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677],["\u00A0",(function (){var G__34165 = site_stats;var G__34165__$1 = (((G__34165 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34165));var G__34165__$2 = (((G__34165__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34165__$1));return G__34165__$2;
})(),(function (){var G__34166 = site_stats;var G__34166__$1 = (((G__34166 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34166));var G__34166__$2 = (((G__34166__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34166__$1));return G__34166__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34167 = site_stats;var G__34167__$1 = (((G__34167 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34167));var G__34167__$2 = (((G__34167__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34167__$1));return G__34167__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34167 = site_stats;var G__34167__$1 = (((G__34167 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34167));var G__34167__$2 = (((G__34167__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34167__$1));return G__34167__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34168 = site_stats;var G__34168__$1 = (((G__34168 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34168));var G__34168__$2 = (((G__34168__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34168__$1));return G__34168__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34168 = site_stats;var G__34168__$1 = (((G__34168 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34168));var G__34168__$2 = (((G__34168__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34168__$1));return G__34168__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34169 = site_stats;var G__34169__$1 = (((G__34169 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34169));var G__34169__$2 = (((G__34169__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34169__$1));return G__34169__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34169 = site_stats;var G__34169__$1 = (((G__34169 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34169));var G__34169__$2 = (((G__34169__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34169__$1));return G__34169__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34170 = site_stats;var G__34170__$1 = (((G__34170 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34170));var G__34170__$2 = (((G__34170__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34170__$1));return G__34170__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34170 = site_stats;var G__34170__$1 = (((G__34170 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34170));var G__34170__$2 = (((G__34170__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34170__$1));return G__34170__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"))])], 0)),cljs.core.constant$keyword$665,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$665.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673,cljs.core.constant$keyword$674,cljs.core.constant$keyword$675,cljs.core.constant$keyword$676,cljs.core.constant$keyword$677],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34171 = all_investment_stats;var G__34171__$1 = (((G__34171 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34171));return G__34171__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34171 = all_investment_stats;var G__34171__$1 = (((G__34171 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34171));return G__34171__$1;
})(),cljs.core.constant$keyword$541,"-")),(function (){var G__34172 = all_investment_stats;var G__34172__$1 = (((G__34172 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34172));var G__34172__$2 = (((G__34172__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34172__$1));return G__34172__$2;
})(),(function (){var G__34173 = all_investment_stats;var G__34173__$1 = (((G__34173 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34173));var G__34173__$2 = (((G__34173__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34173__$1));return G__34173__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34174 = all_investment_stats;var G__34174__$1 = (((G__34174 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34174));return G__34174__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34174 = all_investment_stats;var G__34174__$1 = (((G__34174 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34174));return G__34174__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34175 = all_investment_stats;var G__34175__$1 = (((G__34175 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34175));var G__34175__$2 = (((G__34175__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34175__$1));return G__34175__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34175 = all_investment_stats;var G__34175__$1 = (((G__34175 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34175));var G__34175__$2 = (((G__34175__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34175__$1));return G__34175__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34176 = all_investment_stats;var G__34176__$1 = (((G__34176 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34176));var G__34176__$2 = (((G__34176__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34176__$1));return G__34176__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34176 = all_investment_stats;var G__34176__$1 = (((G__34176 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34176));var G__34176__$2 = (((G__34176__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34176__$1));return G__34176__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34177 = all_investment_stats;var G__34177__$1 = (((G__34177 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34177));var G__34177__$2 = (((G__34177__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34177__$1));return G__34177__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34177 = all_investment_stats;var G__34177__$1 = (((G__34177 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34177));var G__34177__$2 = (((G__34177__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34177__$1));return G__34177__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34178 = all_investment_stats;var G__34178__$1 = (((G__34178 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34178));return G__34178__$1;
})(),cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34178 = all_investment_stats;var G__34178__$1 = (((G__34178 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34178));return G__34178__$1;
})(),cljs.core.constant$keyword$541,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34179 = all_investment_stats;var G__34179__$1 = (((G__34179 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34179));var G__34179__$2 = (((G__34179__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34179__$1));return G__34179__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34179 = all_investment_stats;var G__34179__$1 = (((G__34179 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34179));var G__34179__$2 = (((G__34179__$1 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34179__$1));return G__34179__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__34223 = clustermap.components.full_report.overview.overview_data(data);var map__34223__$1 = ((cljs.core.seq_QMARK_(map__34223))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34223):map__34223);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34223__$1,cljs.core.constant$keyword$665);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34223__$1,cljs.core.constant$keyword$664);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34223__$1,cljs.core.constant$keyword$639);if(typeof clustermap.components.full_report.overview.t34224 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t34224 = (function (selection,averages,benchmark,map__34223,data,overview,meta34225){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__34223 = map__34223;
this.data = data;
this.overview = overview;
this.meta34225 = meta34225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t34224.cljs$lang$type = true;
clustermap.components.full_report.overview.t34224.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t34224";
clustermap.components.full_report.overview.t34224.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t34224");
});
clustermap.components.full_report.overview.t34224.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t34224.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$666) : self__.selection.call(null,cljs.core.constant$keyword$666))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.selection.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34231 = cljs.core.constant$keyword$669.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34231))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34231], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34231));
}
})()),React.DOM.td(null,(function (){var attrs34232 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34232))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34232], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34232));
}
})()),React.DOM.td(null,(function (){var attrs34233 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34233))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34233], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34233));
}
})()),React.DOM.td(null,(function (){var attrs34234 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34234))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34234], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34234));
}
})()),React.DOM.td(null,(function (){var attrs34235 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34235))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34235], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34235));
}
})()),React.DOM.td(null,(function (){var attrs34236 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34236))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34236], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34236));
}
})()),React.DOM.td(null,(function (){var attrs34237 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34237))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34237], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34237));
}
})()),React.DOM.td(null,(function (){var attrs34238 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34238))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34238], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34238));
}
})()),React.DOM.td(null,(function (){var attrs34239 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34239))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34239], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34239));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$666) : self__.averages.call(null,cljs.core.constant$keyword$666))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.averages.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34240 = cljs.core.constant$keyword$669.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34240))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34240], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34240));
}
})()),React.DOM.td(null,(function (){var attrs34241 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34241))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34241], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34241));
}
})()),React.DOM.td(null,(function (){var attrs34242 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34242))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34242], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34242));
}
})()),React.DOM.td(null,(function (){var attrs34243 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34243))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34243], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34243));
}
})()),React.DOM.td(null,(function (){var attrs34244 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs34244))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34244], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34244));
}
})()),React.DOM.td(null,(function (){var attrs34245 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34245))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34245], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34245));
}
})()),React.DOM.td(null,(function (){var attrs34246 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34246))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34246], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34246));
}
})()),React.DOM.td(null,(function (){var attrs34247 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs34247))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34247], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34247));
}
})()),React.DOM.td(null,(function (){var attrs34248 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34248))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34248], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34248));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$666) : self__.benchmark.call(null,cljs.core.constant$keyword$666))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$594) : self__.benchmark.call(null,cljs.core.constant$keyword$594)))),React.DOM.td(null,(function (){var attrs34249 = cljs.core.constant$keyword$669.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34249))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34249], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34249));
}
})()),React.DOM.td(null,(function (){var attrs34250 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34250))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34250], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34250));
}
})()),React.DOM.td(null,(function (){var attrs34251 = cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34251))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34251], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34251));
}
})()),React.DOM.td(null,(function (){var attrs34252 = cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34252))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34252], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34252));
}
})()),React.DOM.td(null,(function (){var attrs34253 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs34253))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34253], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34253));
}
})()),React.DOM.td(null,(function (){var attrs34254 = cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34254))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34254], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34254));
}
})()),React.DOM.td(null,(function (){var attrs34255 = cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34255))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34255], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34255));
}
})()),React.DOM.td(null,(function (){var attrs34256 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs34256))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34256], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34256));
}
})()),React.DOM.td(null,(function (){var attrs34257 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34257))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34257], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34257));
}
})()))))));
});
clustermap.components.full_report.overview.t34224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34226){var self__ = this;
var _34226__$1 = this;return self__.meta34225;
});
clustermap.components.full_report.overview.t34224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34226,meta34225__$1){var self__ = this;
var _34226__$1 = this;return (new clustermap.components.full_report.overview.t34224(self__.selection,self__.averages,self__.benchmark,self__.map__34223,self__.data,self__.overview,meta34225__$1));
});
clustermap.components.full_report.overview.__GT_t34224 = (function __GT_t34224(selection__$1,averages__$1,benchmark__$1,map__34223__$2,data__$1,overview__$1,meta34225){return (new clustermap.components.full_report.overview.t34224(selection__$1,averages__$1,benchmark__$1,map__34223__$2,data__$1,overview__$1,meta34225));
});
}
return (new clustermap.components.full_report.overview.t34224(selection,averages,benchmark,map__34223__$1,data,overview,null));
});
