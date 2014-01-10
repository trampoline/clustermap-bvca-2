// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.number');
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t19728 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19728 = (function (empty_report,meta19729){
this.empty_report = empty_report;
this.meta19729 = meta19729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19728.cljs$lang$type = true;
clustermap.map_report.t19728.cljs$lang$ctorStr = "clustermap.map-report/t19728";
clustermap.map_report.t19728.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19728");
});
clustermap.map_report.t19728.prototype.om$core$IRender$ = true;
clustermap.map_report.t19728.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t19728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19730){var self__ = this;
var _19730__$1 = this;return self__.meta19729;
});
clustermap.map_report.t19728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19730,meta19729__$1){var self__ = this;
var _19730__$1 = this;return (new clustermap.map_report.t19728(self__.empty_report,meta19729__$1));
});
clustermap.map_report.__GT_t19728 = (function __GT_t19728(empty_report__$1,meta19729){return (new clustermap.map_report.t19728(empty_report__$1,meta19729));
});
}
return (new clustermap.map_report.t19728(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(data);var ic_summ = cljs.core.constant$keyword$181.cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t19762 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19762 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta19763){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta19763 = meta19763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19762.cljs$lang$type = true;
clustermap.map_report.t19762.cljs$lang$ctorStr = "clustermap.map-report/t19762";
clustermap.map_report.t19762.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19762");
});
clustermap.map_report.t19762.prototype.om$core$IRender$ = true;
clustermap.map_report.t19762.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs19767 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19787 = self__.pc_summ;var G__19787__$1 = (((G__19787 == null))?null:(G__19787["count"]));return G__19787__$1;
})(),cljs.core.constant$keyword$113,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19787 = self__.pc_summ;var G__19787__$1 = (((G__19787 == null))?null:(G__19787["count"]));return G__19787__$1;
})(),cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19767))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19767], 0))),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19767),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs19772 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19788 = self__.ic_summ;var G__19788__$1 = (((G__19788 == null))?null:(G__19788["count"]));return G__19788__$1;
})(),cljs.core.constant$keyword$113,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19788 = self__.ic_summ;var G__19788__$1 = (((G__19788 == null))?null:(G__19788["count"]));return G__19788__$1;
})(),cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19772))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19772], 0))),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19772),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs19777 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__19789 = self__.pc_summ;var G__19789__$1 = (((G__19789 == null))?null:(G__19789["latest_turnover_stats"]["total"]));return G__19789__$1;
})(),cljs.core.constant$keyword$176,2,cljs.core.constant$keyword$113,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__19789 = self__.pc_summ;var G__19789__$1 = (((G__19789 == null))?null:(G__19789["latest_turnover_stats"]["total"]));return G__19789__$1;
})(),cljs.core.constant$keyword$176,2,cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19777))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19777], 0))),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19777),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs19782 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19790 = self__.pc_summ;var G__19790__$1 = (((G__19790 == null))?null:(G__19790["latest_employee_count_stats"]["total"]));return G__19790__$1;
})(),cljs.core.constant$keyword$113,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19790 = self__.pc_summ;var G__19790__$1 = (((G__19790 == null))?null:(G__19790["latest_employee_count_stats"]["total"]));return G__19790__$1;
})(),cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19782))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19782], 0))),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19782),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t19762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19764){var self__ = this;
var _19764__$1 = this;return self__.meta19763;
});
clustermap.map_report.t19762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19764,meta19763__$1){var self__ = this;
var _19764__$1 = this;return (new clustermap.map_report.t19762(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta19763__$1));
});
clustermap.map_report.__GT_t19762 = (function __GT_t19762(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta19763){return (new clustermap.map_report.t19762(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta19763));
});
}
return (new clustermap.map_report.t19762(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t19796 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19796 = (function (data,selection_report,meta19797){
this.data = data;
this.selection_report = selection_report;
this.meta19797 = meta19797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19796.cljs$lang$type = true;
clustermap.map_report.t19796.cljs$lang$ctorStr = "clustermap.map-report/t19796";
clustermap.map_report.t19796.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19796");
});
clustermap.map_report.t19796.prototype.om$core$IRender$ = true;
clustermap.map_report.t19796.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t19796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19798){var self__ = this;
var _19798__$1 = this;return self__.meta19797;
});
clustermap.map_report.t19796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19798,meta19797__$1){var self__ = this;
var _19798__$1 = this;return (new clustermap.map_report.t19796(self__.data,self__.selection_report,meta19797__$1));
});
clustermap.map_report.__GT_t19796 = (function __GT_t19796(data__$1,selection_report__$1,meta19797){return (new clustermap.map_report.t19796(data__$1,selection_report__$1,meta19797));
});
}
return (new clustermap.map_report.t19796(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if((cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report(data);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$183,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,cljs.core.constant$keyword$142], null))))
{return clustermap.map_report.selection_report(cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
