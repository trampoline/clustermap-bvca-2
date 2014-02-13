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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21871){var map__21876 = p__21871;var map__21876__$1 = ((cljs.core.seq_QMARK_(map__21876))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21876):map__21876);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21876__$1,cljs.core.constant$keyword$218);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21876__$1,cljs.core.constant$keyword$251);var pred__21877 = cljs.core._EQ_;var expr__21878 = type;if(cljs.core.truth_((pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,expr__21878) : pred__21877.call(null,cljs.core.constant$keyword$284,expr__21878))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Total",cljs.core.constant$keyword$299,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$298,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Average",cljs.core.constant$keyword$299,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$285,expr__21878) : pred__21877.call(null,cljs.core.constant$keyword$285,expr__21878))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Total",cljs.core.constant$keyword$299,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$298,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Average",cljs.core.constant$keyword$299,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$286,expr__21878) : pred__21877.call(null,cljs.core.constant$keyword$286,expr__21878))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Total",cljs.core.constant$keyword$299,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$298,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Average",cljs.core.constant$keyword$299,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Total",cljs.core.constant$keyword$299,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$298,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,"Average",cljs.core.constant$keyword$299,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21880){var map__21889 = p__21880;var map__21889__$1 = ((cljs.core.seq_QMARK_(map__21889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21889):map__21889);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$300);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$301);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$289);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$302);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$303,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21890 = co_stats;var G__21890__$1 = (((G__21890 == null))?null:cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(G__21890));return G__21890__$1;
})(),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21890 = co_stats;var G__21890__$1 = (((G__21890 == null))?null:cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(G__21890));return G__21890__$1;
})(),cljs.core.constant$keyword$214,"-")),cljs.core.constant$keyword$304,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21891 = co_stats;var G__21891__$1 = (((G__21891 == null))?null:cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(G__21891));return G__21891__$1;
})(),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21891 = co_stats;var G__21891__$1 = (((G__21891 == null))?null:cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(G__21891));return G__21891__$1;
})(),cljs.core.constant$keyword$214,"-")),cljs.core.constant$keyword$305,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21892 = co_stats;var G__21892__$1 = (((G__21892 == null))?null:cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(G__21892));return G__21892__$1;
})(),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21892 = co_stats;var G__21892__$1 = (((G__21892 == null))?null:cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(G__21892));return G__21892__$1;
})(),cljs.core.constant$keyword$214,"-")),cljs.core.constant$keyword$306,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21893 = site_stats;var G__21893__$1 = (((G__21893 == null))?null:cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(G__21893));var G__21893__$2 = (((G__21893__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__21893__$1));return G__21893__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21893 = site_stats;var G__21893__$1 = (((G__21893 == null))?null:cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(G__21893));var G__21893__$2 = (((G__21893__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__21893__$1));return G__21893__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-")),cljs.core.constant$keyword$307,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21894 = site_stats;var G__21894__$1 = (((G__21894 == null))?null:cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(G__21894));var G__21894__$2 = (((G__21894__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__21894__$1));return G__21894__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21894 = site_stats;var G__21894__$1 = (((G__21894 == null))?null:cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(G__21894));var G__21894__$2 = (((G__21894__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__21894__$1));return G__21894__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-"))], null)], 0)),cljs.core.constant$keyword$298,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$298.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$303,"\u00A0",cljs.core.constant$keyword$304,"\u00A0",cljs.core.constant$keyword$305,"\u00A0",cljs.core.constant$keyword$306,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21895 = site_stats;var G__21895__$1 = (((G__21895 == null))?null:cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(G__21895));var G__21895__$2 = (((G__21895__$1 == null))?null:cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(G__21895__$1));return G__21895__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21895 = site_stats;var G__21895__$1 = (((G__21895 == null))?null:cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(G__21895));var G__21895__$2 = (((G__21895__$1 == null))?null:cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(G__21895__$1));return G__21895__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-")),cljs.core.constant$keyword$307,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21896 = site_stats;var G__21896__$1 = (((G__21896 == null))?null:cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(G__21896));var G__21896__$2 = (((G__21896__$1 == null))?null:cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(G__21896__$1));return G__21896__$2;
})(),cljs.core.constant$keyword$282,0,cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21896 = site_stats;var G__21896__$1 = (((G__21896 == null))?null:cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(G__21896));var G__21896__$2 = (((G__21896__$1 == null))?null:cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(G__21896__$1));return G__21896__$2;
})(),cljs.core.constant$keyword$282,0,cljs.core.constant$keyword$214,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21915 = clustermap.components.full_report.overview.overview_data(data);var map__21915__$1 = ((cljs.core.seq_QMARK_(map__21915))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21915):map__21915);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.constant$keyword$298);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,cljs.core.constant$keyword$289);if(typeof clustermap.components.full_report.overview.t21916 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21916 = (function (selection,averages,map__21915,data,overview,meta21917){
this.selection = selection;
this.averages = averages;
this.map__21915 = map__21915;
this.data = data;
this.overview = overview;
this.meta21917 = meta21917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21916.cljs$lang$type = true;
clustermap.components.full_report.overview.t21916.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21916";
clustermap.components.full_report.overview.t21916.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21916");
});
clustermap.components.full_report.overview.t21916.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21916.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$299) : self__.selection.call(null,cljs.core.constant$keyword$299))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$261) : self__.selection.call(null,cljs.core.constant$keyword$261)))),React.DOM.td(null,(function (){var attrs21923 = cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21923))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21923], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21923));
}
})()),React.DOM.td(null,(function (){var attrs21924 = cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21924))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21924], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21924));
}
})()),React.DOM.td(null,(function (){var attrs21925 = cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21925))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21925], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21925));
}
})()),React.DOM.td(null,(function (){var attrs21926 = cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21926))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21926], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21926));
}
})()),React.DOM.td(null,(function (){var attrs21927 = cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21927))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21927], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21927));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$299) : self__.averages.call(null,cljs.core.constant$keyword$299))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$261) : self__.averages.call(null,cljs.core.constant$keyword$261)))),React.DOM.td(null,(function (){var attrs21928 = cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21928))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21928], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21928));
}
})()),React.DOM.td(null,(function (){var attrs21929 = cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21929))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21929], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21929));
}
})()),React.DOM.td(null,(function (){var attrs21930 = cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21930))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21930], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21930));
}
})()),React.DOM.td(null,(function (){var attrs21931 = cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21931))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21931], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21931));
}
})()),React.DOM.td(null,(function (){var attrs21932 = cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21932))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21932], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21932));
}
})()))))));
});
clustermap.components.full_report.overview.t21916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21918){var self__ = this;
var _21918__$1 = this;return self__.meta21917;
});
clustermap.components.full_report.overview.t21916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21918,meta21917__$1){var self__ = this;
var _21918__$1 = this;return (new clustermap.components.full_report.overview.t21916(self__.selection,self__.averages,self__.map__21915,self__.data,self__.overview,meta21917__$1));
});
clustermap.components.full_report.overview.__GT_t21916 = (function __GT_t21916(selection__$1,averages__$1,map__21915__$2,data__$1,overview__$1,meta21917){return (new clustermap.components.full_report.overview.t21916(selection__$1,averages__$1,map__21915__$2,data__$1,overview__$1,meta21917));
});
}
return (new clustermap.components.full_report.overview.t21916(selection,averages,map__21915__$1,data,overview,null));
});
