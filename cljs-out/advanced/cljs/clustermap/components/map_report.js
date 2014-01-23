// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_stats = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(data);var pc_count = (function (){var G__20837 = pc_stats;var G__20837__$1 = (((G__20837 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20837));return G__20837__$1;
})();var ic_count = (function (){var G__20838 = pc_stats;var G__20838__$1 = (((G__20838 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20838));return G__20838__$1;
})();if(typeof clustermap.components.map_report.t20839 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20839 = (function (ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,meta20840){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.pc_stats = pc_stats;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta20840 = meta20840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20839.cljs$lang$type = true;
clustermap.components.map_report.t20839.cljs$lang$ctorStr = "clustermap.components.map-report/t20839";
clustermap.components.map_report.t20839.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20839");
});
clustermap.components.map_report.t20839.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20839.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs20844 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20844))
{return React.DOM.li(sablono.interpreter.attributes(attrs20844),(function (){var attrs20845 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20845))
{return React.DOM.small(sablono.interpreter.attributes(attrs20845),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20845));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20844),(function (){var attrs20846 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20846))
{return React.DOM.small(sablono.interpreter.attributes(attrs20846),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20846));
}
})());
}
})(),(function (){var attrs20847 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20847))
{return React.DOM.li(sablono.interpreter.attributes(attrs20847),(function (){var attrs20848 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20848))
{return React.DOM.small(sablono.interpreter.attributes(attrs20848),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20848));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20847),(function (){var attrs20849 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20849))
{return React.DOM.small(sablono.interpreter.attributes(attrs20849),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20849));
}
})());
}
})(),(function (){var attrs20850 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20860 = self__.pc_stats;var G__20860__$1 = (((G__20860 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20860));var G__20860__$2 = (((G__20860__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20860__$1));return G__20860__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20860 = self__.pc_stats;var G__20860__$1 = (((G__20860 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20860));var G__20860__$2 = (((G__20860__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20860__$1));return G__20860__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20850))
{return React.DOM.li(sablono.interpreter.attributes(attrs20850),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20850),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs20855 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20861 = self__.pc_stats;var G__20861__$1 = (((G__20861 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20861));var G__20861__$2 = (((G__20861__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20861__$1));return G__20861__$2;
})(),cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20861 = self__.pc_stats;var G__20861__$1 = (((G__20861 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20861));var G__20861__$2 = (((G__20861__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20861__$1));return G__20861__$2;
})(),cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20855))
{return React.DOM.li(sablono.interpreter.attributes(attrs20855),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20855),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t20839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20841){var self__ = this;
var _20841__$1 = this;return self__.meta20840;
});
clustermap.components.map_report.t20839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20841,meta20840__$1){var self__ = this;
var _20841__$1 = this;return (new clustermap.components.map_report.t20839(self__.ic_count,self__.pc_count,self__.pc_stats,self__.data,self__.all_portfolio_companies_summary_report,meta20840__$1));
});
clustermap.components.map_report.__GT_t20839 = (function __GT_t20839(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20840){return (new clustermap.components.map_report.t20839(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20840));
});
}
return (new clustermap.components.map_report.t20839(ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){var ic_count = (function (){var G__20886 = data;var G__20886__$1 = (((G__20886 == null))?null:cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(G__20886));var G__20886__$2 = (((G__20886__$1 == null))?null:cljs.core.count(G__20886__$1));return G__20886__$2;
})();var const_count = (function (){var G__20887 = data;var G__20887__$1 = (((G__20887 == null))?null:cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(G__20887));var G__20887__$2 = (((G__20887__$1 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__20887__$1));var G__20887__$3 = (((G__20887__$2 == null))?null:cljs.core.count(G__20887__$2));return G__20887__$3;
})();if(typeof clustermap.components.map_report.t20888 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20888 = (function (const_count,ic_count,data,portfolio_company_report,meta20889){
this.const_count = const_count;
this.ic_count = ic_count;
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta20889 = meta20889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20888.cljs$lang$type = true;
clustermap.components.map_report.t20888.cljs$lang$ctorStr = "clustermap.components.map-report/t20888";
clustermap.components.map_report.t20888.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20888");
});
clustermap.components.map_report.t20888.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20888.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20891 = cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_(attrs20891))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20891),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20891));
}
})()),React.DOM.ul(null,(function (){var attrs20892 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs20892))
{return React.DOM.li(sablono.interpreter.attributes(attrs20892),(function (){var attrs20893 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20893))
{return React.DOM.small(sablono.interpreter.attributes(attrs20893),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20893));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20892),(function (){var attrs20894 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20894))
{return React.DOM.small(sablono.interpreter.attributes(attrs20894),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20894));
}
})());
}
})(),(function (){var attrs20895 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs20895))
{return React.DOM.li(sablono.interpreter.attributes(attrs20895),(function (){var attrs20896 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20896))
{return React.DOM.small(sablono.interpreter.attributes(attrs20896),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20896));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20895),(function (){var attrs20897 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20897))
{return React.DOM.small(sablono.interpreter.attributes(attrs20897),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20897));
}
})());
}
})(),(function (){var attrs20898 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20908 = self__.data;var G__20908__$1 = (((G__20908 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__20908));return G__20908__$1;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20908 = self__.data;var G__20908__$1 = (((G__20908 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__20908));return G__20908__$1;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20898))
{return React.DOM.li(sablono.interpreter.attributes(attrs20898),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20898),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20903 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20909 = self__.data;var G__20909__$1 = (((G__20909 == null))?null:cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(G__20909));return G__20909__$1;
})(),cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20909 = self__.data;var G__20909__$1 = (((G__20909 == null))?null:cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(G__20909));return G__20909__$1;
})(),cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20903))
{return React.DOM.li(sablono.interpreter.attributes(attrs20903),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20903),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t20888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20890){var self__ = this;
var _20890__$1 = this;return self__.meta20889;
});
clustermap.components.map_report.t20888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20890,meta20889__$1){var self__ = this;
var _20890__$1 = this;return (new clustermap.components.map_report.t20888(self__.const_count,self__.ic_count,self__.data,self__.portfolio_company_report,meta20889__$1));
});
clustermap.components.map_report.__GT_t20888 = (function __GT_t20888(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta20889){return (new clustermap.components.map_report.t20888(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta20889));
});
}
return (new clustermap.components.map_report.t20888(const_count,ic_count,data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){var pc_count = (function (){var G__20934 = data;var G__20934__$1 = (((G__20934 == null))?null:cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(G__20934));var G__20934__$2 = (((G__20934__$1 == null))?null:cljs.core.count(G__20934__$1));return G__20934__$2;
})();var const_count = (function (){var G__20935 = data;var G__20935__$1 = (((G__20935 == null))?null:cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(G__20935));var G__20935__$2 = (((G__20935__$1 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__20935__$1));var G__20935__$3 = (((G__20935__$2 == null))?null:cljs.core.count(G__20935__$2));return G__20935__$3;
})();if(typeof clustermap.components.map_report.t20936 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20936 = (function (const_count,pc_count,data,investor_company_report,meta20937){
this.const_count = const_count;
this.pc_count = pc_count;
this.data = data;
this.investor_company_report = investor_company_report;
this.meta20937 = meta20937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20936.cljs$lang$type = true;
clustermap.components.map_report.t20936.cljs$lang$ctorStr = "clustermap.components.map-report/t20936";
clustermap.components.map_report.t20936.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20936");
});
clustermap.components.map_report.t20936.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20936.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20939 = cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_(attrs20939))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20939),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20939));
}
})()),React.DOM.ul(null,(function (){var attrs20940 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs20940))
{return React.DOM.li(sablono.interpreter.attributes(attrs20940),(function (){var attrs20941 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20941))
{return React.DOM.small(sablono.interpreter.attributes(attrs20941),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20941));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20940),(function (){var attrs20942 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20942))
{return React.DOM.small(sablono.interpreter.attributes(attrs20942),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20942));
}
})());
}
})(),(function (){var attrs20943 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs20943))
{return React.DOM.li(sablono.interpreter.attributes(attrs20943),(function (){var attrs20944 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20944))
{return React.DOM.small(sablono.interpreter.attributes(attrs20944),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20944));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20943),(function (){var attrs20945 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20945))
{return React.DOM.small(sablono.interpreter.attributes(attrs20945),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20945));
}
})());
}
})(),(function (){var attrs20946 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20956 = self__.data;var G__20956__$1 = (((G__20956 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__20956));return G__20956__$1;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20956 = self__.data;var G__20956__$1 = (((G__20956 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__20956));return G__20956__$1;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20946))
{return React.DOM.li(sablono.interpreter.attributes(attrs20946),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20946),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs20951 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20957 = self__.data;var G__20957__$1 = (((G__20957 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__20957));return G__20957__$1;
})(),cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20957 = self__.data;var G__20957__$1 = (((G__20957 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__20957));return G__20957__$1;
})(),cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20951))
{return React.DOM.li(sablono.interpreter.attributes(attrs20951),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20951),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t20936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20938){var self__ = this;
var _20938__$1 = this;return self__.meta20937;
});
clustermap.components.map_report.t20936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20938,meta20937__$1){var self__ = this;
var _20938__$1 = this;return (new clustermap.components.map_report.t20936(self__.const_count,self__.pc_count,self__.data,self__.investor_company_report,meta20937__$1));
});
clustermap.components.map_report.__GT_t20936 = (function __GT_t20936(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta20937){return (new clustermap.components.map_report.t20936(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta20937));
});
}
return (new clustermap.components.map_report.t20936(const_count,pc_count,data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){var pc_count = (function (){var G__20983 = data;var G__20983__$1 = (((G__20983 == null))?null:cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(G__20983));var G__20983__$2 = (((G__20983__$1 == null))?null:cljs.core.count(G__20983__$1));return G__20983__$2;
})();var ic_count = (function (){var G__20984 = data;var G__20984__$1 = (((G__20984 == null))?null:cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(G__20984));var G__20984__$2 = (((G__20984__$1 == null))?null:cljs.core.count(G__20984__$1));return G__20984__$2;
})();if(typeof clustermap.components.map_report.t20985 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20985 = (function (ic_count,pc_count,data,constituency_report,meta20986){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.data = data;
this.constituency_report = constituency_report;
this.meta20986 = meta20986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20985.cljs$lang$type = true;
clustermap.components.map_report.t20985.cljs$lang$ctorStr = "clustermap.components.map-report/t20985";
clustermap.components.map_report.t20985.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20985");
});
clustermap.components.map_report.t20985.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20985.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20988 = cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_(attrs20988))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20988),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20988));
}
})(),(function (){var attrs20989 = cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_(attrs20989))
{return React.DOM.h3(sablono.interpreter.attributes(attrs20989),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.data)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs20989),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.data)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs20990 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs20990))
{return React.DOM.li(sablono.interpreter.attributes(attrs20990),(function (){var attrs20991 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20991))
{return React.DOM.small(sablono.interpreter.attributes(attrs20991),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20991));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20990),(function (){var attrs20992 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20992))
{return React.DOM.small(sablono.interpreter.attributes(attrs20992),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20992));
}
})());
}
})(),(function (){var attrs20993 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs20993))
{return React.DOM.li(sablono.interpreter.attributes(attrs20993),(function (){var attrs20994 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20994))
{return React.DOM.small(sablono.interpreter.attributes(attrs20994),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20994));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20993),(function (){var attrs20995 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20995))
{return React.DOM.small(sablono.interpreter.attributes(attrs20995),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20995));
}
})());
}
})(),(function (){var attrs20996 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21006 = self__.data;var G__21006__$1 = (((G__21006 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21006));return G__21006__$1;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21006 = self__.data;var G__21006__$1 = (((G__21006 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21006));return G__21006__$1;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs20996))
{return React.DOM.li(sablono.interpreter.attributes(attrs20996),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20996),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21001 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21007 = self__.data;var G__21007__$1 = (((G__21007 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__21007));return G__21007__$1;
})(),cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21007 = self__.data;var G__21007__$1 = (((G__21007 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__21007));return G__21007__$1;
})(),cljs.core.constant$keyword$149,"-"));if(cljs.core.map_QMARK_(attrs21001))
{return React.DOM.li(sablono.interpreter.attributes(attrs21001),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21001),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t20985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20987){var self__ = this;
var _20987__$1 = this;return self__.meta20986;
});
clustermap.components.map_report.t20985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20987,meta20986__$1){var self__ = this;
var _20987__$1 = this;return (new clustermap.components.map_report.t20985(self__.ic_count,self__.pc_count,self__.data,self__.constituency_report,meta20986__$1));
});
clustermap.components.map_report.__GT_t20985 = (function __GT_t20985(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta20986){return (new clustermap.components.map_report.t20985(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta20986));
});
}
return (new clustermap.components.map_report.t20985(ic_count,pc_count,data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,cljs.core.constant$keyword$183], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,cljs.core.constant$keyword$153], null));var pred__21011 = cljs.core._EQ__EQ_;var expr__21012 = type;if(cljs.core.truth_((pred__21011.cljs$core$IFn$_invoke$arity$2 ? pred__21011.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__21012) : pred__21011.call(null,cljs.core.constant$keyword$230,expr__21012))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__21011.cljs$core$IFn$_invoke$arity$2 ? pred__21011.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$233,expr__21012) : pred__21011.call(null,cljs.core.constant$keyword$233,expr__21012))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__21011.cljs$core$IFn$_invoke$arity$2 ? pred__21011.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$234,expr__21012) : pred__21011.call(null,cljs.core.constant$keyword$234,expr__21012))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
