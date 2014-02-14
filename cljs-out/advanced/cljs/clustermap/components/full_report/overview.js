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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__11778){var map__11783 = p__11778;var map__11783__$1 = ((cljs.core.seq_QMARK_(map__11783))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11783):map__11783);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11783__$1,cljs.core.constant$keyword$11);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11783__$1,cljs.core.constant$keyword$44);var pred__11784 = cljs.core._EQ_;var expr__11785 = type;if(cljs.core.truth_((pred__11784.cljs$core$IFn$_invoke$arity$2 ? pred__11784.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,expr__11785) : pred__11784.call(null,cljs.core.constant$keyword$77,expr__11785))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Total",cljs.core.constant$keyword$93,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$91,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Average",cljs.core.constant$keyword$93,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$92,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Benchmark",cljs.core.constant$keyword$93,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__11784.cljs$core$IFn$_invoke$arity$2 ? pred__11784.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78,expr__11785) : pred__11784.call(null,cljs.core.constant$keyword$78,expr__11785))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Total",cljs.core.constant$keyword$93,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$91,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Average",cljs.core.constant$keyword$93,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$92,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Benchmark",cljs.core.constant$keyword$93,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__11784.cljs$core$IFn$_invoke$arity$2 ? pred__11784.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$79,expr__11785) : pred__11784.call(null,cljs.core.constant$keyword$79,expr__11785))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Total",cljs.core.constant$keyword$93,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$91,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Average",cljs.core.constant$keyword$93,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$92,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Benchmark",cljs.core.constant$keyword$93,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Total",cljs.core.constant$keyword$93,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$91,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Average",cljs.core.constant$keyword$93,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$92,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,"Benchmark",cljs.core.constant$keyword$93,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__11787){var map__11813 = p__11787;var map__11813__$1 = ((cljs.core.seq_QMARK_(map__11813))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11813):map__11813);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11813__$1,cljs.core.constant$keyword$94);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11813__$1,cljs.core.constant$keyword$82);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11813__$1,cljs.core.constant$keyword$95);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$82,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99,cljs.core.constant$keyword$100,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11814 = site_stats;var G__11814__$1 = (((G__11814 == null))?null:cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(G__11814));return G__11814__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11814 = site_stats;var G__11814__$1 = (((G__11814 == null))?null:cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(G__11814));return G__11814__$1;
})(),cljs.core.constant$keyword$7,"-")),(function (){var G__11815 = site_stats;var G__11815__$1 = (((G__11815 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11815));var G__11815__$2 = (((G__11815__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11815__$1));return G__11815__$2;
})(),(function (){var G__11816 = site_stats;var G__11816__$1 = (((G__11816 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11816));var G__11816__$2 = (((G__11816__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11816__$1));return G__11816__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11817 = site_stats;var G__11817__$1 = (((G__11817 == null))?null:cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(G__11817));return G__11817__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11817 = site_stats;var G__11817__$1 = (((G__11817 == null))?null:cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(G__11817));return G__11817__$1;
})(),cljs.core.constant$keyword$7,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11818 = site_stats;var G__11818__$1 = (((G__11818 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11818));var G__11818__$2 = (((G__11818__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11818__$1));return G__11818__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11818 = site_stats;var G__11818__$1 = (((G__11818 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11818));var G__11818__$2 = (((G__11818__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11818__$1));return G__11818__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11819 = site_stats;var G__11819__$1 = (((G__11819 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11819));var G__11819__$2 = (((G__11819__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11819__$1));return G__11819__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11819 = site_stats;var G__11819__$1 = (((G__11819 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11819));var G__11819__$2 = (((G__11819__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11819__$1));return G__11819__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11820 = site_stats;var G__11820__$1 = (((G__11820 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__11820));var G__11820__$2 = (((G__11820__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11820__$1));return G__11820__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11820 = site_stats;var G__11820__$1 = (((G__11820 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__11820));var G__11820__$2 = (((G__11820__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11820__$1));return G__11820__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11821 = site_stats;var G__11821__$1 = (((G__11821 == null))?null:cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(G__11821));return G__11821__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11821 = site_stats;var G__11821__$1 = (((G__11821 == null))?null:cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(G__11821));return G__11821__$1;
})(),cljs.core.constant$keyword$7,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11822 = site_stats;var G__11822__$1 = (((G__11822 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__11822));var G__11822__$2 = (((G__11822__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11822__$1));return G__11822__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11822 = site_stats;var G__11822__$1 = (((G__11822 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__11822));var G__11822__$2 = (((G__11822__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11822__$1));return G__11822__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"))])], 0)),cljs.core.constant$keyword$91,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99,cljs.core.constant$keyword$100,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104],["\u00A0",(function (){var G__11823 = site_stats;var G__11823__$1 = (((G__11823 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11823));var G__11823__$2 = (((G__11823__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11823__$1));return G__11823__$2;
})(),(function (){var G__11824 = site_stats;var G__11824__$1 = (((G__11824 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11824));var G__11824__$2 = (((G__11824__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11824__$1));return G__11824__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11825 = site_stats;var G__11825__$1 = (((G__11825 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11825));var G__11825__$2 = (((G__11825__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11825__$1));return G__11825__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11825 = site_stats;var G__11825__$1 = (((G__11825 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11825));var G__11825__$2 = (((G__11825__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11825__$1));return G__11825__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11826 = site_stats;var G__11826__$1 = (((G__11826 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11826));var G__11826__$2 = (((G__11826__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11826__$1));return G__11826__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11826 = site_stats;var G__11826__$1 = (((G__11826 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11826));var G__11826__$2 = (((G__11826__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11826__$1));return G__11826__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11827 = site_stats;var G__11827__$1 = (((G__11827 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__11827));var G__11827__$2 = (((G__11827__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11827__$1));return G__11827__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11827 = site_stats;var G__11827__$1 = (((G__11827 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__11827));var G__11827__$2 = (((G__11827__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11827__$1));return G__11827__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11828 = site_stats;var G__11828__$1 = (((G__11828 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__11828));var G__11828__$2 = (((G__11828__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11828__$1));return G__11828__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11828 = site_stats;var G__11828__$1 = (((G__11828 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__11828));var G__11828__$2 = (((G__11828__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11828__$1));return G__11828__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"))])], 0)),cljs.core.constant$keyword$92,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99,cljs.core.constant$keyword$100,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11829 = all_portfolio_company_site_stats;var G__11829__$1 = (((G__11829 == null))?null:cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(G__11829));return G__11829__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11829 = all_portfolio_company_site_stats;var G__11829__$1 = (((G__11829 == null))?null:cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(G__11829));return G__11829__$1;
})(),cljs.core.constant$keyword$7,"-")),(function (){var G__11830 = all_portfolio_company_site_stats;var G__11830__$1 = (((G__11830 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11830));var G__11830__$2 = (((G__11830__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11830__$1));return G__11830__$2;
})(),(function (){var G__11831 = all_portfolio_company_site_stats;var G__11831__$1 = (((G__11831 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11831));var G__11831__$2 = (((G__11831__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__11831__$1));return G__11831__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11832 = all_portfolio_company_site_stats;var G__11832__$1 = (((G__11832 == null))?null:cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(G__11832));return G__11832__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11832 = all_portfolio_company_site_stats;var G__11832__$1 = (((G__11832 == null))?null:cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(G__11832));return G__11832__$1;
})(),cljs.core.constant$keyword$7,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11833 = all_portfolio_company_site_stats;var G__11833__$1 = (((G__11833 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11833));var G__11833__$2 = (((G__11833__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11833__$1));return G__11833__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11833 = all_portfolio_company_site_stats;var G__11833__$1 = (((G__11833 == null))?null:cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(G__11833));var G__11833__$2 = (((G__11833__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11833__$1));return G__11833__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11834 = all_portfolio_company_site_stats;var G__11834__$1 = (((G__11834 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11834));var G__11834__$2 = (((G__11834__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11834__$1));return G__11834__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11834 = all_portfolio_company_site_stats;var G__11834__$1 = (((G__11834 == null))?null:cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(G__11834));var G__11834__$2 = (((G__11834__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11834__$1));return G__11834__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11835 = all_portfolio_company_site_stats;var G__11835__$1 = (((G__11835 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__11835));var G__11835__$2 = (((G__11835__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11835__$1));return G__11835__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11835 = all_portfolio_company_site_stats;var G__11835__$1 = (((G__11835 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__11835));var G__11835__$2 = (((G__11835__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11835__$1));return G__11835__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11836 = all_portfolio_company_site_stats;var G__11836__$1 = (((G__11836 == null))?null:cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(G__11836));return G__11836__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11836 = all_portfolio_company_site_stats;var G__11836__$1 = (((G__11836 == null))?null:cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(G__11836));return G__11836__$1;
})(),cljs.core.constant$keyword$7,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11837 = all_portfolio_company_site_stats;var G__11837__$1 = (((G__11837 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__11837));var G__11837__$2 = (((G__11837__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11837__$1));return G__11837__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11837 = all_portfolio_company_site_stats;var G__11837__$1 = (((G__11837 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__11837));var G__11837__$2 = (((G__11837__$1 == null))?null:cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(G__11837__$1));return G__11837__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__11881 = clustermap.components.full_report.overview.overview_data(data);var map__11881__$1 = ((cljs.core.seq_QMARK_(map__11881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11881):map__11881);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881__$1,cljs.core.constant$keyword$92);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881__$1,cljs.core.constant$keyword$91);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881__$1,cljs.core.constant$keyword$82);if(typeof clustermap.components.full_report.overview.t11882 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t11882 = (function (selection,averages,benchmark,map__11881,data,overview,meta11883){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__11881 = map__11881;
this.data = data;
this.overview = overview;
this.meta11883 = meta11883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t11882.cljs$lang$type = true;
clustermap.components.full_report.overview.t11882.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t11882";
clustermap.components.full_report.overview.t11882.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t11882");
});
clustermap.components.full_report.overview.t11882.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t11882.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93) : self__.selection.call(null,cljs.core.constant$keyword$93))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$54) : self__.selection.call(null,cljs.core.constant$keyword$54)))),React.DOM.td(null,(function (){var attrs11889 = cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11889))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11889], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11889));
}
})()),React.DOM.td(null,(function (){var attrs11890 = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11890))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11890], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11890));
}
})()),React.DOM.td(null,(function (){var attrs11891 = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11891))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11891], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11891));
}
})()),React.DOM.td(null,(function (){var attrs11892 = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11892))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11892], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11892));
}
})()),React.DOM.td(null,(function (){var attrs11893 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs11893))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11893], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11893));
}
})()),React.DOM.td(null,(function (){var attrs11894 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11894))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11894], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11894));
}
})()),React.DOM.td(null,(function (){var attrs11895 = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11895))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11895], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11895));
}
})()),React.DOM.td(null,(function (){var attrs11896 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs11896))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11896], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11896));
}
})()),React.DOM.td(null,(function (){var attrs11897 = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11897))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11897], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11897));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93) : self__.averages.call(null,cljs.core.constant$keyword$93))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$54) : self__.averages.call(null,cljs.core.constant$keyword$54)))),React.DOM.td(null,(function (){var attrs11898 = cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11898))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11898], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11898));
}
})()),React.DOM.td(null,(function (){var attrs11899 = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11899))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11899], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11899));
}
})()),React.DOM.td(null,(function (){var attrs11900 = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11900))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11900], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11900));
}
})()),React.DOM.td(null,(function (){var attrs11901 = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11901))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11901], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11901));
}
})()),React.DOM.td(null,(function (){var attrs11902 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs11902))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11902], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11902));
}
})()),React.DOM.td(null,(function (){var attrs11903 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11903))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11903], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11903));
}
})()),React.DOM.td(null,(function (){var attrs11904 = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11904))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11904], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11904));
}
})()),React.DOM.td(null,(function (){var attrs11905 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs11905))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11905], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11905));
}
})()),React.DOM.td(null,(function (){var attrs11906 = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11906))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11906], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11906));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93) : self__.benchmark.call(null,cljs.core.constant$keyword$93))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$54) : self__.benchmark.call(null,cljs.core.constant$keyword$54)))),React.DOM.td(null,(function (){var attrs11907 = cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs11907))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11907], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11907));
}
})()),React.DOM.td(null,(function (){var attrs11908 = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs11908))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11908], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11908));
}
})()),React.DOM.td(null,(function (){var attrs11909 = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs11909))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11909], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11909));
}
})()),React.DOM.td(null,(function (){var attrs11910 = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs11910))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11910], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11910));
}
})()),React.DOM.td(null,(function (){var attrs11911 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs11911))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11911], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11911));
}
})()),React.DOM.td(null,(function (){var attrs11912 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs11912))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11912], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11912));
}
})()),React.DOM.td(null,(function (){var attrs11913 = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs11913))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11913], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11913));
}
})()),React.DOM.td(null,(function (){var attrs11914 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs11914))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11914], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11914));
}
})()),React.DOM.td(null,(function (){var attrs11915 = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs11915))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs11915], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs11915));
}
})()))))));
});
clustermap.components.full_report.overview.t11882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11884){var self__ = this;
var _11884__$1 = this;return self__.meta11883;
});
clustermap.components.full_report.overview.t11882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11884,meta11883__$1){var self__ = this;
var _11884__$1 = this;return (new clustermap.components.full_report.overview.t11882(self__.selection,self__.averages,self__.benchmark,self__.map__11881,self__.data,self__.overview,meta11883__$1));
});
clustermap.components.full_report.overview.__GT_t11882 = (function __GT_t11882(selection__$1,averages__$1,benchmark__$1,map__11881__$2,data__$1,overview__$1,meta11883){return (new clustermap.components.full_report.overview.t11882(selection__$1,averages__$1,benchmark__$1,map__11881__$2,data__$1,overview__$1,meta11883));
});
}
return (new clustermap.components.full_report.overview.t11882(selection,averages,benchmark,map__11881__$1,data,overview,null));
});
