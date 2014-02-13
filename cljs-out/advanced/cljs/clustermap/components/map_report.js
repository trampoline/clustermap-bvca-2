// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__22072 = apc_stats;var G__22072__$1 = (((G__22072 == null))?null:cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(G__22072));return G__22072__$1;
})();var ic_count = (function (){var G__22073 = apc_stats;var G__22073__$1 = (((G__22073 == null))?null:cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(G__22073));return G__22073__$1;
})();if(typeof clustermap.components.map_report.t22074 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22074 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta22075){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22075 = meta22075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22074.cljs$lang$type = true;
clustermap.components.map_report.t22074.cljs$lang$ctorStr = "clustermap.components.map-report/t22074";
clustermap.components.map_report.t22074.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22074");
});
clustermap.components.map_report.t22074.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22074.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22079 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22079))
{return React.DOM.li(sablono.interpreter.attributes(attrs22079),(function (){var attrs22080 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22080))
{return React.DOM.small(sablono.interpreter.attributes(attrs22080),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22080));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22079),(function (){var attrs22081 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22081))
{return React.DOM.small(sablono.interpreter.attributes(attrs22081),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22081));
}
})());
}
})(),(function (){var attrs22082 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22082))
{return React.DOM.li(sablono.interpreter.attributes(attrs22082),(function (){var attrs22083 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22083))
{return React.DOM.small(sablono.interpreter.attributes(attrs22083),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22083));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22082),(function (){var attrs22084 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22084))
{return React.DOM.small(sablono.interpreter.attributes(attrs22084),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22084));
}
})());
}
})(),(function (){var attrs22085 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22095 = self__.apc_stats;var G__22095__$1 = (((G__22095 == null))?null:cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(G__22095));var G__22095__$2 = (((G__22095__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__22095__$1));return G__22095__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22095 = self__.apc_stats;var G__22095__$1 = (((G__22095 == null))?null:cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(G__22095));var G__22095__$2 = (((G__22095__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__22095__$1));return G__22095__$2;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22085))
{return React.DOM.li(sablono.interpreter.attributes(attrs22085),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22085),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22090 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22096 = self__.apc_stats;var G__22096__$1 = (((G__22096 == null))?null:cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(G__22096));var G__22096__$2 = (((G__22096__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__22096__$1));return G__22096__$2;
})(),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22096 = self__.apc_stats;var G__22096__$1 = (((G__22096 == null))?null:cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(G__22096));var G__22096__$2 = (((G__22096__$1 == null))?null:cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(G__22096__$1));return G__22096__$2;
})(),cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22090))
{return React.DOM.li(sablono.interpreter.attributes(attrs22090),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22090),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22076){var self__ = this;
var _22076__$1 = this;return self__.meta22075;
});
clustermap.components.map_report.t22074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22076,meta22075__$1){var self__ = this;
var _22076__$1 = this;return (new clustermap.components.map_report.t22074(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta22075__$1));
});
clustermap.components.map_report.__GT_t22074 = (function __GT_t22074(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta22075){return (new clustermap.components.map_report.t22074(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta22075));
});
}
return (new clustermap.components.map_report.t22074(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__22121 = portfolio_company;var G__22121__$1 = (((G__22121 == null))?null:cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(G__22121));var G__22121__$2 = (((G__22121__$1 == null))?null:cljs.core.count(G__22121__$1));return G__22121__$2;
})();var const_count = (function (){var G__22122 = portfolio_company;var G__22122__$1 = (((G__22122 == null))?null:cljs.core.constant$keyword$375.cljs$core$IFn$_invoke$arity$1(G__22122));var G__22122__$2 = (((G__22122__$1 == null))?null:cljs.core.constant$keyword$376.cljs$core$IFn$_invoke$arity$1(G__22122__$1));var G__22122__$3 = (((G__22122__$2 == null))?null:cljs.core.count(G__22122__$2));return G__22122__$3;
})();if(typeof clustermap.components.map_report.t22123 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22123 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta22124){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22124 = meta22124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22123.cljs$lang$type = true;
clustermap.components.map_report.t22123.cljs$lang$ctorStr = "clustermap.components.map-report/t22123";
clustermap.components.map_report.t22123.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22123");
});
clustermap.components.map_report.t22123.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22123.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22126 = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22126))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22126),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22126));
}
})()),React.DOM.ul(null,(function (){var attrs22127 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22127))
{return React.DOM.li(sablono.interpreter.attributes(attrs22127),(function (){var attrs22128 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22128))
{return React.DOM.small(sablono.interpreter.attributes(attrs22128),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22128));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22127),(function (){var attrs22129 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22129))
{return React.DOM.small(sablono.interpreter.attributes(attrs22129),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22129));
}
})());
}
})(),(function (){var attrs22130 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22130))
{return React.DOM.li(sablono.interpreter.attributes(attrs22130),(function (){var attrs22131 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22131))
{return React.DOM.small(sablono.interpreter.attributes(attrs22131),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22131));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22130),(function (){var attrs22132 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22132))
{return React.DOM.small(sablono.interpreter.attributes(attrs22132),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22132));
}
})());
}
})(),(function (){var attrs22133 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22143 = self__.portfolio_company;var G__22143__$1 = (((G__22143 == null))?null:cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(G__22143));return G__22143__$1;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22143 = self__.portfolio_company;var G__22143__$1 = (((G__22143 == null))?null:cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(G__22143));return G__22143__$1;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22133))
{return React.DOM.li(sablono.interpreter.attributes(attrs22133),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22133),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs22138 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22144 = self__.portfolio_company;var G__22144__$1 = (((G__22144 == null))?null:cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(G__22144));return G__22144__$1;
})(),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22144 = self__.portfolio_company;var G__22144__$1 = (((G__22144 == null))?null:cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(G__22144));return G__22144__$1;
})(),cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22138))
{return React.DOM.li(sablono.interpreter.attributes(attrs22138),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22138),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22125){var self__ = this;
var _22125__$1 = this;return self__.meta22124;
});
clustermap.components.map_report.t22123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22125,meta22124__$1){var self__ = this;
var _22125__$1 = this;return (new clustermap.components.map_report.t22123(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta22124__$1));
});
clustermap.components.map_report.__GT_t22123 = (function __GT_t22123(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta22124){return (new clustermap.components.map_report.t22123(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta22124));
});
}
return (new clustermap.components.map_report.t22123(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__22169 = investor_company;var G__22169__$1 = (((G__22169 == null))?null:cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(G__22169));var G__22169__$2 = (((G__22169__$1 == null))?null:cljs.core.count(G__22169__$1));return G__22169__$2;
})();var const_count = (function (){var G__22170 = investor_company;var G__22170__$1 = (((G__22170 == null))?null:cljs.core.constant$keyword$375.cljs$core$IFn$_invoke$arity$1(G__22170));var G__22170__$2 = (((G__22170__$1 == null))?null:cljs.core.constant$keyword$376.cljs$core$IFn$_invoke$arity$1(G__22170__$1));var G__22170__$3 = (((G__22170__$2 == null))?null:cljs.core.count(G__22170__$2));return G__22170__$3;
})();if(typeof clustermap.components.map_report.t22171 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22171 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta22172){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22172 = meta22172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22171.cljs$lang$type = true;
clustermap.components.map_report.t22171.cljs$lang$ctorStr = "clustermap.components.map-report/t22171";
clustermap.components.map_report.t22171.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22171");
});
clustermap.components.map_report.t22171.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22171.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22174 = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22174))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22174),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22174));
}
})()),React.DOM.ul(null,(function (){var attrs22175 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22175))
{return React.DOM.li(sablono.interpreter.attributes(attrs22175),(function (){var attrs22176 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22176))
{return React.DOM.small(sablono.interpreter.attributes(attrs22176),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22176));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22175),(function (){var attrs22177 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22177))
{return React.DOM.small(sablono.interpreter.attributes(attrs22177),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22177));
}
})());
}
})(),(function (){var attrs22178 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22178))
{return React.DOM.li(sablono.interpreter.attributes(attrs22178),(function (){var attrs22179 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22179))
{return React.DOM.small(sablono.interpreter.attributes(attrs22179),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22179));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22178),(function (){var attrs22180 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22180))
{return React.DOM.small(sablono.interpreter.attributes(attrs22180),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22180));
}
})());
}
})(),(function (){var attrs22181 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22191 = self__.investor_company;var G__22191__$1 = (((G__22191 == null))?null:cljs.core.constant$keyword$377.cljs$core$IFn$_invoke$arity$1(G__22191));return G__22191__$1;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22191 = self__.investor_company;var G__22191__$1 = (((G__22191 == null))?null:cljs.core.constant$keyword$377.cljs$core$IFn$_invoke$arity$1(G__22191));return G__22191__$1;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22181))
{return React.DOM.li(sablono.interpreter.attributes(attrs22181),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22181),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22186 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22192 = self__.investor_company;var G__22192__$1 = (((G__22192 == null))?null:cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(G__22192));return G__22192__$1;
})(),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22192 = self__.investor_company;var G__22192__$1 = (((G__22192 == null))?null:cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(G__22192));return G__22192__$1;
})(),cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22186))
{return React.DOM.li(sablono.interpreter.attributes(attrs22186),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22186),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22173){var self__ = this;
var _22173__$1 = this;return self__.meta22172;
});
clustermap.components.map_report.t22171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22173,meta22172__$1){var self__ = this;
var _22173__$1 = this;return (new clustermap.components.map_report.t22171(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta22172__$1));
});
clustermap.components.map_report.__GT_t22171 = (function __GT_t22171(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22172){return (new clustermap.components.map_report.t22171(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22172));
});
}
return (new clustermap.components.map_report.t22171(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__22218 = constituency;var G__22218__$1 = (((G__22218 == null))?null:cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(G__22218));var G__22218__$2 = (((G__22218__$1 == null))?null:cljs.core.count(G__22218__$1));return G__22218__$2;
})();var ic_count = (function (){var G__22219 = constituency;var G__22219__$1 = (((G__22219 == null))?null:cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(G__22219));var G__22219__$2 = (((G__22219__$1 == null))?null:cljs.core.count(G__22219__$1));return G__22219__$2;
})();if(typeof clustermap.components.map_report.t22220 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22220 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta22221){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22221 = meta22221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22220.cljs$lang$type = true;
clustermap.components.map_report.t22220.cljs$lang$ctorStr = "clustermap.components.map-report/t22220";
clustermap.components.map_report.t22220.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22220");
});
clustermap.components.map_report.t22220.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22220.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22223 = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22223))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22223),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22223));
}
})(),(function (){var attrs22224 = cljs.core.constant$keyword$379.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22224))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22224),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$380.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22224),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$380.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22225 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22225))
{return React.DOM.li(sablono.interpreter.attributes(attrs22225),(function (){var attrs22226 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22226))
{return React.DOM.small(sablono.interpreter.attributes(attrs22226),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22226));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22225),(function (){var attrs22227 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22227))
{return React.DOM.small(sablono.interpreter.attributes(attrs22227),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22227));
}
})());
}
})(),(function (){var attrs22228 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22228))
{return React.DOM.li(sablono.interpreter.attributes(attrs22228),(function (){var attrs22229 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22229))
{return React.DOM.small(sablono.interpreter.attributes(attrs22229),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22229));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22228),(function (){var attrs22230 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22230))
{return React.DOM.small(sablono.interpreter.attributes(attrs22230),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22230));
}
})());
}
})(),(function (){var attrs22231 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22241 = self__.constituency;var G__22241__$1 = (((G__22241 == null))?null:cljs.core.constant$keyword$377.cljs$core$IFn$_invoke$arity$1(G__22241));return G__22241__$1;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22241 = self__.constituency;var G__22241__$1 = (((G__22241 == null))?null:cljs.core.constant$keyword$377.cljs$core$IFn$_invoke$arity$1(G__22241));return G__22241__$1;
})(),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22231))
{return React.DOM.li(sablono.interpreter.attributes(attrs22231),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22231),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22236 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22242 = self__.constituency;var G__22242__$1 = (((G__22242 == null))?null:cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(G__22242));return G__22242__$1;
})(),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22242 = self__.constituency;var G__22242__$1 = (((G__22242 == null))?null:cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(G__22242));return G__22242__$1;
})(),cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs22236))
{return React.DOM.li(sablono.interpreter.attributes(attrs22236),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22236),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22222){var self__ = this;
var _22222__$1 = this;return self__.meta22221;
});
clustermap.components.map_report.t22220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22222,meta22221__$1){var self__ = this;
var _22222__$1 = this;return (new clustermap.components.map_report.t22220(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta22221__$1));
});
clustermap.components.map_report.__GT_t22220 = (function __GT_t22220(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22221){return (new clustermap.components.map_report.t22220(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22221));
});
}
return (new clustermap.components.map_report.t22220(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$287);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,cljs.core.constant$keyword$251], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,cljs.core.constant$keyword$218], null));var pred__22246 = cljs.core._EQ__EQ_;var expr__22247 = type;if(cljs.core.truth_((pred__22246.cljs$core$IFn$_invoke$arity$2 ? pred__22246.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,expr__22247) : pred__22246.call(null,cljs.core.constant$keyword$284,expr__22247))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22246.cljs$core$IFn$_invoke$arity$2 ? pred__22246.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$285,expr__22247) : pred__22246.call(null,cljs.core.constant$keyword$285,expr__22247))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22246.cljs$core$IFn$_invoke$arity$2 ? pred__22246.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$286,expr__22247) : pred__22246.call(null,cljs.core.constant$keyword$286,expr__22247))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
