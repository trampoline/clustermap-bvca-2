// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
clustermap.components.full_report.describe_selection = (function describe_selection(data){var sel = cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(data);var val = cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(sel);var pred__20596 = cljs.core._EQ_;var expr__20597 = cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(sel);if(cljs.core.truth_((pred__20596.cljs$core$IFn$_invoke$arity$2 ? pred__20596.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$203,expr__20597) : pred__20596.call(null,cljs.core.constant$keyword$203,expr__20597))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,(val["name"]),cljs.core.constant$keyword$204,"Totals for the selected Portfolio Company"], null);
} else
{if(cljs.core.truth_((pred__20596.cljs$core$IFn$_invoke$arity$2 ? pred__20596.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$205,expr__20597) : pred__20596.call(null,cljs.core.constant$keyword$205,expr__20597))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,(val["name"]),cljs.core.constant$keyword$204,"Totals for the Portfolio Companies of the selected Investor"], null);
} else
{if(cljs.core.truth_((pred__20596.cljs$core$IFn$_invoke$arity$2 ? pred__20596.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,expr__20597) : pred__20596.call(null,cljs.core.constant$keyword$206,expr__20597))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,(val["name"]),cljs.core.constant$keyword$204,"Totals for the selected Constituency"], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,"All Portfolio Companies",cljs.core.constant$keyword$204,"Totals over all Portfolio Companies"], null);
}
}
}
});
clustermap.components.full_report.overview_data = (function overview_data(data){var apc_stats = cljs.core.constant$keyword$207.cljs$core$IFn$_invoke$arity$1(data);var sel_stats = (function (){var or__3406__auto__ = cljs.core.constant$keyword$208.cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return apc_stats;
}
})();var sel_descr = clustermap.components.full_report.describe_selection(data);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([sel_descr,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$210,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20606 = sel_stats;var G__20606__$1 = (((G__20606 == null))?null:(G__20606["portfolio_company_count"]));return G__20606__$1;
})(),cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20606 = sel_stats;var G__20606__$1 = (((G__20606 == null))?null:(G__20606["portfolio_company_count"]));return G__20606__$1;
})(),cljs.core.constant$keyword$125,"-")),cljs.core.constant$keyword$211,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20607 = sel_stats;var G__20607__$1 = (((G__20607 == null))?null:(G__20607["investor_company_count"]));return G__20607__$1;
})(),cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20607 = sel_stats;var G__20607__$1 = (((G__20607 == null))?null:(G__20607["investor_company_count"]));return G__20607__$1;
})(),cljs.core.constant$keyword$125,"-")),cljs.core.constant$keyword$212,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20608 = sel_stats;var G__20608__$1 = (((G__20608 == null))?null:(G__20608["constituency_count"]));return G__20608__$1;
})(),cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20608 = sel_stats;var G__20608__$1 = (((G__20608 == null))?null:(G__20608["constituency_count"]));return G__20608__$1;
})(),cljs.core.constant$keyword$125,"-")),cljs.core.constant$keyword$213,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20609 = sel_stats;var G__20609__$1 = (((G__20609 == null))?null:(G__20609["turnover"]["total"]));return G__20609__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20609 = sel_stats;var G__20609__$1 = (((G__20609 == null))?null:(G__20609["turnover"]["total"]));return G__20609__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-")),cljs.core.constant$keyword$214,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20610 = sel_stats;var G__20610__$1 = (((G__20610 == null))?null:(G__20610["employee_count"]["total"]));return G__20610__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20610 = sel_stats;var G__20610__$1 = (((G__20610 == null))?null:(G__20610["employee_count"]["total"]));return G__20610__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-"))], null)], 0)),cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$169,"Average",cljs.core.constant$keyword$204,"Averages over all portfolio companies",cljs.core.constant$keyword$210,"\u00A0",cljs.core.constant$keyword$211,"\u00A0",cljs.core.constant$keyword$212,"\u00A0",cljs.core.constant$keyword$213,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20611 = apc_stats;var G__20611__$1 = (((G__20611 == null))?null:(G__20611["turnover"]["mean"]));return G__20611__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20611 = apc_stats;var G__20611__$1 = (((G__20611 == null))?null:(G__20611["turnover"]["mean"]));return G__20611__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-")),cljs.core.constant$keyword$214,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20612 = apc_stats;var G__20612__$1 = (((G__20612 == null))?null:(G__20612["employee_count"]["mean"]));return G__20612__$1;
})(),cljs.core.constant$keyword$189,0,cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20612 = apc_stats;var G__20612__$1 = (((G__20612 == null))?null:(G__20612["employee_count"]["mean"]));return G__20612__$1;
})(),cljs.core.constant$keyword$189,0,cljs.core.constant$keyword$125,"-"))], null)], null);
});
clustermap.components.full_report.overview = (function overview(p__20613){var map__20633 = p__20613;var map__20633__$1 = ((cljs.core.seq_QMARK_(map__20633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20633):map__20633);var data = map__20633__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20633__$1,cljs.core.constant$keyword$191);var map__20634 = clustermap.components.full_report.overview_data(data);var map__20634__$1 = ((cljs.core.seq_QMARK_(map__20634))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20634):map__20634);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20634__$1,cljs.core.constant$keyword$209);var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20634__$1,cljs.core.constant$keyword$191);if(typeof clustermap.components.full_report.t20635 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t20635 = (function (averages,map__20634,selection,data,map__20633,p__20613,overview,meta20636){
this.averages = averages;
this.map__20634 = map__20634;
this.selection = selection;
this.data = data;
this.map__20633 = map__20633;
this.p__20613 = p__20613;
this.overview = overview;
this.meta20636 = meta20636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t20635.cljs$lang$type = true;
clustermap.components.full_report.t20635.cljs$lang$ctorStr = "clustermap.components.full-report/t20635";
clustermap.components.full_report.t20635.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t20635");
});
clustermap.components.full_report.t20635.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t20635.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$204) : self__.selection.call(null,cljs.core.constant$keyword$204))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$169) : self__.selection.call(null,cljs.core.constant$keyword$169)))),React.DOM.td(null,(function (){var attrs20642 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$210) : self__.selection.call(null,cljs.core.constant$keyword$210));if(cljs.core.map_QMARK_(attrs20642))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20642], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20642));
}
})()),React.DOM.td(null,(function (){var attrs20643 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$211) : self__.selection.call(null,cljs.core.constant$keyword$211));if(cljs.core.map_QMARK_(attrs20643))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20643], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20643));
}
})()),React.DOM.td(null,(function (){var attrs20644 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$212) : self__.selection.call(null,cljs.core.constant$keyword$212));if(cljs.core.map_QMARK_(attrs20644))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20644], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20644));
}
})()),React.DOM.td(null,(function (){var attrs20645 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$213) : self__.selection.call(null,cljs.core.constant$keyword$213));if(cljs.core.map_QMARK_(attrs20645))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20645], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20645));
}
})()),React.DOM.td(null,(function (){var attrs20646 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$214) : self__.selection.call(null,cljs.core.constant$keyword$214));if(cljs.core.map_QMARK_(attrs20646))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20646], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20646));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$204) : self__.averages.call(null,cljs.core.constant$keyword$204))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$169) : self__.averages.call(null,cljs.core.constant$keyword$169)))),React.DOM.td(null,(function (){var attrs20647 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$210) : self__.averages.call(null,cljs.core.constant$keyword$210));if(cljs.core.map_QMARK_(attrs20647))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20647], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20647));
}
})()),React.DOM.td(null,(function (){var attrs20648 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$211) : self__.averages.call(null,cljs.core.constant$keyword$211));if(cljs.core.map_QMARK_(attrs20648))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20648], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20648));
}
})()),React.DOM.td(null,(function (){var attrs20649 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$212) : self__.averages.call(null,cljs.core.constant$keyword$212));if(cljs.core.map_QMARK_(attrs20649))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20649], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20649));
}
})()),React.DOM.td(null,(function (){var attrs20650 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$213) : self__.averages.call(null,cljs.core.constant$keyword$213));if(cljs.core.map_QMARK_(attrs20650))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20650], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20650));
}
})()),React.DOM.td(null,(function (){var attrs20651 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$214) : self__.averages.call(null,cljs.core.constant$keyword$214));if(cljs.core.map_QMARK_(attrs20651))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20651], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20651));
}
})()))))));
});
clustermap.components.full_report.t20635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20637){var self__ = this;
var _20637__$1 = this;return self__.meta20636;
});
clustermap.components.full_report.t20635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20637,meta20636__$1){var self__ = this;
var _20637__$1 = this;return (new clustermap.components.full_report.t20635(self__.averages,self__.map__20634,self__.selection,self__.data,self__.map__20633,self__.p__20613,self__.overview,meta20636__$1));
});
clustermap.components.full_report.__GT_t20635 = (function __GT_t20635(averages__$1,map__20634__$2,selection__$2,data__$1,map__20633__$2,p__20613__$1,overview__$1,meta20636){return (new clustermap.components.full_report.t20635(averages__$1,map__20634__$2,selection__$2,data__$1,map__20633__$2,p__20613__$1,overview__$1,meta20636));
});
}
return (new clustermap.components.full_report.t20635(averages,map__20634__$1,selection__$1,data,map__20633__$1,p__20613,overview,null));
});
clustermap.components.full_report.portfolio_company_sites = (function portfolio_company_sites(p__20652){var map__20656 = p__20652;var map__20656__$1 = ((cljs.core.seq_QMARK_(map__20656))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20656):map__20656);var data = map__20656__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656__$1,cljs.core.constant$keyword$215);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656__$1,cljs.core.constant$keyword$191);return React.DOM.div({"className": "full-report-portfolio-company-sites"},"portfolio-company-sites");
});
clustermap.components.full_report.details = (function details(p__20659){var map__20663 = p__20659;var map__20663__$1 = ((cljs.core.seq_QMARK_(map__20663))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20663):map__20663);var data = map__20663__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20663__$1,cljs.core.constant$keyword$215);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20663__$1,cljs.core.constant$keyword$191);return React.DOM.div({"className": "full-report-details"},"details");
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__20666,owner){var map__20672 = p__20666;var map__20672__$1 = ((cljs.core.seq_QMARK_(map__20672))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20672):map__20672);var data = map__20672__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20672__$1,cljs.core.constant$keyword$215);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20672__$1,cljs.core.constant$keyword$191);if(typeof clustermap.components.full_report.t20673 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t20673 = (function (selection,all_portfolio_companies_summary,data,map__20672,owner,p__20666,full_report_component,meta20674){
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__20672 = map__20672;
this.owner = owner;
this.p__20666 = p__20666;
this.full_report_component = full_report_component;
this.meta20674 = meta20674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t20673.cljs$lang$type = true;
clustermap.components.full_report.t20673.cljs$lang$ctorStr = "clustermap.components.full-report/t20673";
clustermap.components.full_report.t20673.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t20673");
});
clustermap.components.full_report.t20673.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t20673.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t20673.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t20673.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs20676 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.full_report.overview,self__.data);if(cljs.core.map_QMARK_(attrs20676))
{return React.DOM.div(sablono.interpreter.attributes(attrs20676),sablono.interpreter.interpret(clustermap.components.full_report.portfolio_company_sites(self__.data)),sablono.interpreter.interpret(clustermap.components.full_report.details(self__.data)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs20676),sablono.interpreter.interpret(clustermap.components.full_report.portfolio_company_sites(self__.data)),sablono.interpreter.interpret(clustermap.components.full_report.details(self__.data)));
}
});
clustermap.components.full_report.t20673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20675){var self__ = this;
var _20675__$1 = this;return self__.meta20674;
});
clustermap.components.full_report.t20673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20675,meta20674__$1){var self__ = this;
var _20675__$1 = this;return (new clustermap.components.full_report.t20673(self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__20672,self__.owner,self__.p__20666,self__.full_report_component,meta20674__$1));
});
clustermap.components.full_report.__GT_t20673 = (function __GT_t20673(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__20672__$2,owner__$1,p__20666__$1,full_report_component__$1,meta20674){return (new clustermap.components.full_report.t20673(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__20672__$2,owner__$1,p__20666__$1,full_report_component__$1,meta20674));
});
}
return (new clustermap.components.full_report.t20673(selection,all_portfolio_companies_summary,data,map__20672__$1,owner,p__20666,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
