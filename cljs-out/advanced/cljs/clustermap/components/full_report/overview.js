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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__11441){var map__11446 = p__11441;var map__11446__$1 = ((cljs.core.seq_QMARK_(map__11446))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11446):map__11446);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11446__$1,cljs.core.constant$keyword$11);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11446__$1,cljs.core.constant$keyword$41);var pred__11447 = cljs.core._EQ_;var expr__11448 = type;if(cljs.core.truth_((pred__11447.cljs$core$IFn$_invoke$arity$2 ? pred__11447.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$76,expr__11448) : pred__11447.call(null,cljs.core.constant$keyword$76,expr__11448))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Total",cljs.core.constant$keyword$83,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Average",cljs.core.constant$keyword$83,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__11447.cljs$core$IFn$_invoke$arity$2 ? pred__11447.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,expr__11448) : pred__11447.call(null,cljs.core.constant$keyword$77,expr__11448))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Total",cljs.core.constant$keyword$83,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Average",cljs.core.constant$keyword$83,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__11447.cljs$core$IFn$_invoke$arity$2 ? pred__11447.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78,expr__11448) : pred__11447.call(null,cljs.core.constant$keyword$78,expr__11448))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Total",cljs.core.constant$keyword$83,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Average",cljs.core.constant$keyword$83,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Total",cljs.core.constant$keyword$83,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,"Average",cljs.core.constant$keyword$83,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__11450){var map__11459 = p__11450;var map__11459__$1 = ((cljs.core.seq_QMARK_(map__11459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11459):map__11459);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11459__$1,cljs.core.constant$keyword$84);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11459__$1,cljs.core.constant$keyword$85);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11459__$1,cljs.core.constant$keyword$81);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11459__$1,cljs.core.constant$keyword$86);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$87,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11460 = co_stats;var G__11460__$1 = (((G__11460 == null))?null:cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(G__11460));return G__11460__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11460 = co_stats;var G__11460__$1 = (((G__11460 == null))?null:cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(G__11460));return G__11460__$1;
})(),cljs.core.constant$keyword$7,"-")),cljs.core.constant$keyword$88,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11461 = co_stats;var G__11461__$1 = (((G__11461 == null))?null:cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(G__11461));return G__11461__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11461 = co_stats;var G__11461__$1 = (((G__11461 == null))?null:cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(G__11461));return G__11461__$1;
})(),cljs.core.constant$keyword$7,"-")),cljs.core.constant$keyword$89,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11462 = co_stats;var G__11462__$1 = (((G__11462 == null))?null:cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(G__11462));return G__11462__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11462 = co_stats;var G__11462__$1 = (((G__11462 == null))?null:cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(G__11462));return G__11462__$1;
})(),cljs.core.constant$keyword$7,"-")),cljs.core.constant$keyword$90,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11463 = site_stats;var G__11463__$1 = (((G__11463 == null))?null:cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__11463));var G__11463__$2 = (((G__11463__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11463__$1));return G__11463__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11463 = site_stats;var G__11463__$1 = (((G__11463 == null))?null:cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__11463));var G__11463__$2 = (((G__11463__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11463__$1));return G__11463__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-")),cljs.core.constant$keyword$91,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11464 = site_stats;var G__11464__$1 = (((G__11464 == null))?null:cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__11464));var G__11464__$2 = (((G__11464__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11464__$1));return G__11464__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11464 = site_stats;var G__11464__$1 = (((G__11464 == null))?null:cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__11464));var G__11464__$2 = (((G__11464__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11464__$1));return G__11464__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-"))], null)], 0)),cljs.core.constant$keyword$82,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$87,"\u00A0",cljs.core.constant$keyword$88,"\u00A0",cljs.core.constant$keyword$89,"\u00A0",cljs.core.constant$keyword$90,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11465 = site_stats;var G__11465__$1 = (((G__11465 == null))?null:cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__11465));var G__11465__$2 = (((G__11465__$1 == null))?null:cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(G__11465__$1));return G__11465__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11465 = site_stats;var G__11465__$1 = (((G__11465 == null))?null:cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__11465));var G__11465__$2 = (((G__11465__$1 == null))?null:cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(G__11465__$1));return G__11465__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-")),cljs.core.constant$keyword$91,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__11466 = site_stats;var G__11466__$1 = (((G__11466 == null))?null:cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__11466));var G__11466__$2 = (((G__11466__$1 == null))?null:cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(G__11466__$1));return G__11466__$2;
})(),cljs.core.constant$keyword$74,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11466 = site_stats;var G__11466__$1 = (((G__11466 == null))?null:cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__11466));var G__11466__$2 = (((G__11466__$1 == null))?null:cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(G__11466__$1));return G__11466__$2;
})(),cljs.core.constant$keyword$74,0,cljs.core.constant$keyword$7,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__11485 = clustermap.components.full_report.overview.overview_data(data);var map__11485__$1 = ((cljs.core.seq_QMARK_(map__11485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11485):map__11485);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11485__$1,cljs.core.constant$keyword$82);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11485__$1,cljs.core.constant$keyword$81);if(typeof clustermap.components.full_report.overview.t11486 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t11486 = (function (selection,averages,map__11485,data,overview,meta11487){
this.selection = selection;
this.averages = averages;
this.map__11485 = map__11485;
this.data = data;
this.overview = overview;
this.meta11487 = meta11487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t11486.cljs$lang$type = true;
clustermap.components.full_report.overview.t11486.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t11486";
clustermap.components.full_report.overview.t11486.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t11486");
});
clustermap.components.full_report.overview.t11486.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t11486.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$83) : self__.selection.call(null,cljs.core.constant$keyword$83))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$52) : self__.selection.call(null,cljs.core.constant$keyword$52)))),React.DOM.td(null,(function (){var attrs11493 = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11493))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11493], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11493));
}
})()),React.DOM.td(null,(function (){var attrs11494 = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11494))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11494], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11494));
}
})()),React.DOM.td(null,(function (){var attrs11495 = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11495))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11495], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11495));
}
})()),React.DOM.td(null,(function (){var attrs11496 = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11496))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11496], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11496));
}
})()),React.DOM.td(null,(function (){var attrs11497 = cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs11497))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11497], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs11497));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$83) : self__.averages.call(null,cljs.core.constant$keyword$83))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$52) : self__.averages.call(null,cljs.core.constant$keyword$52)))),React.DOM.td(null,(function (){var attrs11498 = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11498))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11498], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11498));
}
})()),React.DOM.td(null,(function (){var attrs11499 = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11499))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11499], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11499));
}
})()),React.DOM.td(null,(function (){var attrs11500 = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11500))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11500], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11500));
}
})()),React.DOM.td(null,(function (){var attrs11501 = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11501))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11501], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11501));
}
})()),React.DOM.td(null,(function (){var attrs11502 = cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs11502))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11502], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs11502));
}
})()))))));
});
clustermap.components.full_report.overview.t11486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11488){var self__ = this;
var _11488__$1 = this;return self__.meta11487;
});
clustermap.components.full_report.overview.t11486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11488,meta11487__$1){var self__ = this;
var _11488__$1 = this;return (new clustermap.components.full_report.overview.t11486(self__.selection,self__.averages,self__.map__11485,self__.data,self__.overview,meta11487__$1));
});
clustermap.components.full_report.overview.__GT_t11486 = (function __GT_t11486(selection__$1,averages__$1,map__11485__$2,data__$1,overview__$1,meta11487){return (new clustermap.components.full_report.overview.t11486(selection__$1,averages__$1,map__11485__$2,data__$1,overview__$1,meta11487));
});
}
return (new clustermap.components.full_report.overview.t11486(selection,averages,map__11485__$1,data,overview,null));
});
