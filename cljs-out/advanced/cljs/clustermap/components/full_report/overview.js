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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21688){var map__21693 = p__21688;var map__21693__$1 = ((cljs.core.seq_QMARK_(map__21693))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21693):map__21693);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693__$1,cljs.core.constant$keyword$210);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693__$1,cljs.core.constant$keyword$242);var pred__21694 = cljs.core._EQ_;var expr__21695 = type;if(cljs.core.truth_((pred__21694.cljs$core$IFn$_invoke$arity$2 ? pred__21694.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__21695) : pred__21694.call(null,cljs.core.constant$keyword$275,expr__21695))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21694.cljs$core$IFn$_invoke$arity$2 ? pred__21694.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__21695) : pred__21694.call(null,cljs.core.constant$keyword$276,expr__21695))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21694.cljs$core$IFn$_invoke$arity$2 ? pred__21694.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__21695) : pred__21694.call(null,cljs.core.constant$keyword$277,expr__21695))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21697){var map__21706 = p__21697;var map__21706__$1 = ((cljs.core.seq_QMARK_(map__21706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21706):map__21706);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.constant$keyword$283);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.constant$keyword$284);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.constant$keyword$280);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,cljs.core.constant$keyword$285);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21707 = co_stats;var G__21707__$1 = (((G__21707 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21707));return G__21707__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21707 = co_stats;var G__21707__$1 = (((G__21707 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21707));return G__21707__$1;
})(),cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$287,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21708 = co_stats;var G__21708__$1 = (((G__21708 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21708));return G__21708__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21708 = co_stats;var G__21708__$1 = (((G__21708 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21708));return G__21708__$1;
})(),cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$288,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21709 = co_stats;var G__21709__$1 = (((G__21709 == null))?null:cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(G__21709));return G__21709__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21709 = co_stats;var G__21709__$1 = (((G__21709 == null))?null:cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(G__21709));return G__21709__$1;
})(),cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$289,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21710 = site_stats;var G__21710__$1 = (((G__21710 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21710));var G__21710__$2 = (((G__21710__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21710__$1));return G__21710__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21710 = site_stats;var G__21710__$1 = (((G__21710 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21710));var G__21710__$2 = (((G__21710__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21710__$1));return G__21710__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$290,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21711 = site_stats;var G__21711__$1 = (((G__21711 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21711));var G__21711__$2 = (((G__21711__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21711__$1));return G__21711__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21711 = site_stats;var G__21711__$1 = (((G__21711 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21711));var G__21711__$2 = (((G__21711__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21711__$1));return G__21711__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"))], null)], 0)),cljs.core.constant$keyword$281,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,"\u00A0",cljs.core.constant$keyword$287,"\u00A0",cljs.core.constant$keyword$288,"\u00A0",cljs.core.constant$keyword$289,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21712 = site_stats;var G__21712__$1 = (((G__21712 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21712));var G__21712__$2 = (((G__21712__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21712__$1));return G__21712__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21712 = site_stats;var G__21712__$1 = (((G__21712 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21712));var G__21712__$2 = (((G__21712__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21712__$1));return G__21712__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$290,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21713 = site_stats;var G__21713__$1 = (((G__21713 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21713));var G__21713__$2 = (((G__21713__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21713__$1));return G__21713__$2;
})(),cljs.core.constant$keyword$273,0,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21713 = site_stats;var G__21713__$1 = (((G__21713 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21713));var G__21713__$2 = (((G__21713__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21713__$1));return G__21713__$2;
})(),cljs.core.constant$keyword$273,0,cljs.core.constant$keyword$206,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21732 = clustermap.components.full_report.overview.overview_data(data);var map__21732__$1 = ((cljs.core.seq_QMARK_(map__21732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21732):map__21732);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732__$1,cljs.core.constant$keyword$281);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732__$1,cljs.core.constant$keyword$280);if(typeof clustermap.components.full_report.overview.t21733 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21733 = (function (selection,averages,map__21732,data,overview,meta21734){
this.selection = selection;
this.averages = averages;
this.map__21732 = map__21732;
this.data = data;
this.overview = overview;
this.meta21734 = meta21734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21733.cljs$lang$type = true;
clustermap.components.full_report.overview.t21733.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21733";
clustermap.components.full_report.overview.t21733.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21733");
});
clustermap.components.full_report.overview.t21733.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21733.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$282) : self__.selection.call(null,cljs.core.constant$keyword$282))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$252) : self__.selection.call(null,cljs.core.constant$keyword$252)))),React.DOM.td(null,(function (){var attrs21740 = cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21740))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21740], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21740));
}
})()),React.DOM.td(null,(function (){var attrs21741 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21741))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21741], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21741));
}
})()),React.DOM.td(null,(function (){var attrs21742 = cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21742))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21742], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21742));
}
})()),React.DOM.td(null,(function (){var attrs21743 = cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21743))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21743], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21743));
}
})()),React.DOM.td(null,(function (){var attrs21744 = cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21744))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21744], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21744));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$282) : self__.averages.call(null,cljs.core.constant$keyword$282))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$252) : self__.averages.call(null,cljs.core.constant$keyword$252)))),React.DOM.td(null,(function (){var attrs21745 = cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21745))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21745], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21745));
}
})()),React.DOM.td(null,(function (){var attrs21746 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21746))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21746], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21746));
}
})()),React.DOM.td(null,(function (){var attrs21747 = cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21747))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21747], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21747));
}
})()),React.DOM.td(null,(function (){var attrs21748 = cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21748))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21748], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21748));
}
})()),React.DOM.td(null,(function (){var attrs21749 = cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21749))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21749], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21749));
}
})()))))));
});
clustermap.components.full_report.overview.t21733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21735){var self__ = this;
var _21735__$1 = this;return self__.meta21734;
});
clustermap.components.full_report.overview.t21733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21735,meta21734__$1){var self__ = this;
var _21735__$1 = this;return (new clustermap.components.full_report.overview.t21733(self__.selection,self__.averages,self__.map__21732,self__.data,self__.overview,meta21734__$1));
});
clustermap.components.full_report.overview.__GT_t21733 = (function __GT_t21733(selection__$1,averages__$1,map__21732__$2,data__$1,overview__$1,meta21734){return (new clustermap.components.full_report.overview.t21733(selection__$1,averages__$1,map__21732__$2,data__$1,overview__$1,meta21734));
});
}
return (new clustermap.components.full_report.overview.t21733(selection,averages,map__21732__$1,data,overview,null));
});
