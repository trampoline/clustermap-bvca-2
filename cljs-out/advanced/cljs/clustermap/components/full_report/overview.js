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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21071){var map__21076 = p__21071;var map__21076__$1 = ((cljs.core.seq_QMARK_(map__21076))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21076):map__21076);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,cljs.core.constant$keyword$188);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,cljs.core.constant$keyword$218);var pred__21077 = cljs.core._EQ_;var expr__21078 = type;if(cljs.core.truth_((pred__21077.cljs$core$IFn$_invoke$arity$2 ? pred__21077.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__21078) : pred__21077.call(null,cljs.core.constant$keyword$253,expr__21078))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Total",cljs.core.constant$keyword$258,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Average",cljs.core.constant$keyword$258,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21077.cljs$core$IFn$_invoke$arity$2 ? pred__21077.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__21078) : pred__21077.call(null,cljs.core.constant$keyword$254,expr__21078))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Total",cljs.core.constant$keyword$258,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Average",cljs.core.constant$keyword$258,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21077.cljs$core$IFn$_invoke$arity$2 ? pred__21077.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21078) : pred__21077.call(null,cljs.core.constant$keyword$255,expr__21078))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Total",cljs.core.constant$keyword$258,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Average",cljs.core.constant$keyword$258,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Total",cljs.core.constant$keyword$258,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,"Average",cljs.core.constant$keyword$258,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21080){var map__21089 = p__21080;var map__21089__$1 = ((cljs.core.seq_QMARK_(map__21089))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21089):map__21089);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,cljs.core.constant$keyword$259);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,cljs.core.constant$keyword$260);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,cljs.core.constant$keyword$256);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,cljs.core.constant$keyword$261);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$256.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$262,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21090 = co_stats;var G__21090__$1 = (((G__21090 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21090));return G__21090__$1;
})(),cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21090 = co_stats;var G__21090__$1 = (((G__21090 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21090));return G__21090__$1;
})(),cljs.core.constant$keyword$184,"-")),cljs.core.constant$keyword$263,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21091 = co_stats;var G__21091__$1 = (((G__21091 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21091));return G__21091__$1;
})(),cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21091 = co_stats;var G__21091__$1 = (((G__21091 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21091));return G__21091__$1;
})(),cljs.core.constant$keyword$184,"-")),cljs.core.constant$keyword$264,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21092 = co_stats;var G__21092__$1 = (((G__21092 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21092));return G__21092__$1;
})(),cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21092 = co_stats;var G__21092__$1 = (((G__21092 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21092));return G__21092__$1;
})(),cljs.core.constant$keyword$184,"-")),cljs.core.constant$keyword$265,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21093 = site_stats;var G__21093__$1 = (((G__21093 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21093));var G__21093__$2 = (((G__21093__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21093__$1));return G__21093__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21093 = site_stats;var G__21093__$1 = (((G__21093 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21093));var G__21093__$2 = (((G__21093__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21093__$1));return G__21093__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-")),cljs.core.constant$keyword$266,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21094 = site_stats;var G__21094__$1 = (((G__21094 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21094));var G__21094__$2 = (((G__21094__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21094__$1));return G__21094__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21094 = site_stats;var G__21094__$1 = (((G__21094 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21094));var G__21094__$2 = (((G__21094__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21094__$1));return G__21094__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-"))], null)], 0)),cljs.core.constant$keyword$257,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$262,"\u00A0",cljs.core.constant$keyword$263,"\u00A0",cljs.core.constant$keyword$264,"\u00A0",cljs.core.constant$keyword$265,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21095 = site_stats;var G__21095__$1 = (((G__21095 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21095));var G__21095__$2 = (((G__21095__$1 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21095__$1));return G__21095__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21095 = site_stats;var G__21095__$1 = (((G__21095 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21095));var G__21095__$2 = (((G__21095__$1 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21095__$1));return G__21095__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-")),cljs.core.constant$keyword$266,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21096 = site_stats;var G__21096__$1 = (((G__21096 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21096));var G__21096__$2 = (((G__21096__$1 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21096__$1));return G__21096__$2;
})(),cljs.core.constant$keyword$251,0,cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21096 = site_stats;var G__21096__$1 = (((G__21096 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21096));var G__21096__$2 = (((G__21096__$1 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21096__$1));return G__21096__$2;
})(),cljs.core.constant$keyword$251,0,cljs.core.constant$keyword$184,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21115 = clustermap.components.full_report.overview.overview_data(data);var map__21115__$1 = ((cljs.core.seq_QMARK_(map__21115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21115):map__21115);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,cljs.core.constant$keyword$257);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,cljs.core.constant$keyword$256);if(typeof clustermap.components.full_report.overview.t21116 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21116 = (function (selection,averages,map__21115,data,overview,meta21117){
this.selection = selection;
this.averages = averages;
this.map__21115 = map__21115;
this.data = data;
this.overview = overview;
this.meta21117 = meta21117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21116.cljs$lang$type = true;
clustermap.components.full_report.overview.t21116.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21116";
clustermap.components.full_report.overview.t21116.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21116");
});
clustermap.components.full_report.overview.t21116.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21116.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$258) : self__.selection.call(null,cljs.core.constant$keyword$258))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$229) : self__.selection.call(null,cljs.core.constant$keyword$229)))),React.DOM.td(null,(function (){var attrs21123 = cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21123))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21123], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21123));
}
})()),React.DOM.td(null,(function (){var attrs21124 = cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21124))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21124], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21124));
}
})()),React.DOM.td(null,(function (){var attrs21125 = cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21125))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21125], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21125));
}
})()),React.DOM.td(null,(function (){var attrs21126 = cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21126))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21126], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21126));
}
})()),React.DOM.td(null,(function (){var attrs21127 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21127))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21127], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21127));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$258) : self__.averages.call(null,cljs.core.constant$keyword$258))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$229) : self__.averages.call(null,cljs.core.constant$keyword$229)))),React.DOM.td(null,(function (){var attrs21128 = cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21128))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21128], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21128));
}
})()),React.DOM.td(null,(function (){var attrs21129 = cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21129))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21129], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21129));
}
})()),React.DOM.td(null,(function (){var attrs21130 = cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21130))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21130], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21130));
}
})()),React.DOM.td(null,(function (){var attrs21131 = cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21131))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21131], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21131));
}
})()),React.DOM.td(null,(function (){var attrs21132 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21132))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21132], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21132));
}
})()))))));
});
clustermap.components.full_report.overview.t21116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21118){var self__ = this;
var _21118__$1 = this;return self__.meta21117;
});
clustermap.components.full_report.overview.t21116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21118,meta21117__$1){var self__ = this;
var _21118__$1 = this;return (new clustermap.components.full_report.overview.t21116(self__.selection,self__.averages,self__.map__21115,self__.data,self__.overview,meta21117__$1));
});
clustermap.components.full_report.overview.__GT_t21116 = (function __GT_t21116(selection__$1,averages__$1,map__21115__$2,data__$1,overview__$1,meta21117){return (new clustermap.components.full_report.overview.t21116(selection__$1,averages__$1,map__21115__$2,data__$1,overview__$1,meta21117));
});
}
return (new clustermap.components.full_report.overview.t21116(selection,averages,map__21115__$1,data,overview,null));
});
