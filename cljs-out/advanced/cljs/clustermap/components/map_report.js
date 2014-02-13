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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21950 = apc_stats;var G__21950__$1 = (((G__21950 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21950));return G__21950__$1;
})();var ic_count = (function (){var G__21951 = apc_stats;var G__21951__$1 = (((G__21951 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21951));return G__21951__$1;
})();if(typeof clustermap.components.map_report.t21952 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21952 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21953){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21953 = meta21953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21952.cljs$lang$type = true;
clustermap.components.map_report.t21952.cljs$lang$ctorStr = "clustermap.components.map-report/t21952";
clustermap.components.map_report.t21952.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21952");
});
clustermap.components.map_report.t21952.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21952.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21957 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21957))
{return React.DOM.li(sablono.interpreter.attributes(attrs21957),(function (){var attrs21958 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21958))
{return React.DOM.small(sablono.interpreter.attributes(attrs21958),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21958));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21957),(function (){var attrs21959 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21959))
{return React.DOM.small(sablono.interpreter.attributes(attrs21959),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21959));
}
})());
}
})(),(function (){var attrs21960 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21960))
{return React.DOM.li(sablono.interpreter.attributes(attrs21960),(function (){var attrs21961 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21961))
{return React.DOM.small(sablono.interpreter.attributes(attrs21961),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21961));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21960),(function (){var attrs21962 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21962))
{return React.DOM.small(sablono.interpreter.attributes(attrs21962),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21962));
}
})());
}
})(),(function (){var attrs21963 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21973 = self__.apc_stats;var G__21973__$1 = (((G__21973 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21973));var G__21973__$2 = (((G__21973__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21973__$1));return G__21973__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21973 = self__.apc_stats;var G__21973__$1 = (((G__21973 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21973));var G__21973__$2 = (((G__21973__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21973__$1));return G__21973__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21963))
{return React.DOM.li(sablono.interpreter.attributes(attrs21963),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21963),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21968 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21974 = self__.apc_stats;var G__21974__$1 = (((G__21974 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21974));var G__21974__$2 = (((G__21974__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21974__$1));return G__21974__$2;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21974 = self__.apc_stats;var G__21974__$1 = (((G__21974 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21974));var G__21974__$2 = (((G__21974__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21974__$1));return G__21974__$2;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21968))
{return React.DOM.li(sablono.interpreter.attributes(attrs21968),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21968),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21954){var self__ = this;
var _21954__$1 = this;return self__.meta21953;
});
clustermap.components.map_report.t21952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21954,meta21953__$1){var self__ = this;
var _21954__$1 = this;return (new clustermap.components.map_report.t21952(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21953__$1));
});
clustermap.components.map_report.__GT_t21952 = (function __GT_t21952(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21953){return (new clustermap.components.map_report.t21952(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21953));
});
}
return (new clustermap.components.map_report.t21952(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21999 = portfolio_company;var G__21999__$1 = (((G__21999 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21999));var G__21999__$2 = (((G__21999__$1 == null))?null:cljs.core.count(G__21999__$1));return G__21999__$2;
})();var const_count = (function (){var G__22000 = portfolio_company;var G__22000__$1 = (((G__22000 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22000));var G__22000__$2 = (((G__22000__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22000__$1));var G__22000__$3 = (((G__22000__$2 == null))?null:cljs.core.count(G__22000__$2));return G__22000__$3;
})();if(typeof clustermap.components.map_report.t22001 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22001 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta22002){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22002 = meta22002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22001.cljs$lang$type = true;
clustermap.components.map_report.t22001.cljs$lang$ctorStr = "clustermap.components.map-report/t22001";
clustermap.components.map_report.t22001.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22001");
});
clustermap.components.map_report.t22001.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22001.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22004 = cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22004))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22004),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22004));
}
})()),React.DOM.ul(null,(function (){var attrs22005 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22005))
{return React.DOM.li(sablono.interpreter.attributes(attrs22005),(function (){var attrs22006 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22006))
{return React.DOM.small(sablono.interpreter.attributes(attrs22006),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22006));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22005),(function (){var attrs22007 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22007))
{return React.DOM.small(sablono.interpreter.attributes(attrs22007),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22007));
}
})());
}
})(),(function (){var attrs22008 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22008))
{return React.DOM.li(sablono.interpreter.attributes(attrs22008),(function (){var attrs22009 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22009))
{return React.DOM.small(sablono.interpreter.attributes(attrs22009),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22009));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22008),(function (){var attrs22010 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22010))
{return React.DOM.small(sablono.interpreter.attributes(attrs22010),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22010));
}
})());
}
})(),(function (){var attrs22011 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22021 = self__.portfolio_company;var G__22021__$1 = (((G__22021 == null))?null:cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(G__22021));return G__22021__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22021 = self__.portfolio_company;var G__22021__$1 = (((G__22021 == null))?null:cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(G__22021));return G__22021__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22011))
{return React.DOM.li(sablono.interpreter.attributes(attrs22011),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22011),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs22016 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22022 = self__.portfolio_company;var G__22022__$1 = (((G__22022 == null))?null:cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(G__22022));return G__22022__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22022 = self__.portfolio_company;var G__22022__$1 = (((G__22022 == null))?null:cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(G__22022));return G__22022__$1;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22016))
{return React.DOM.li(sablono.interpreter.attributes(attrs22016),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22016),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22003){var self__ = this;
var _22003__$1 = this;return self__.meta22002;
});
clustermap.components.map_report.t22001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22003,meta22002__$1){var self__ = this;
var _22003__$1 = this;return (new clustermap.components.map_report.t22001(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta22002__$1));
});
clustermap.components.map_report.__GT_t22001 = (function __GT_t22001(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta22002){return (new clustermap.components.map_report.t22001(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta22002));
});
}
return (new clustermap.components.map_report.t22001(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__22047 = investor_company;var G__22047__$1 = (((G__22047 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22047));var G__22047__$2 = (((G__22047__$1 == null))?null:cljs.core.count(G__22047__$1));return G__22047__$2;
})();var const_count = (function (){var G__22048 = investor_company;var G__22048__$1 = (((G__22048 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22048));var G__22048__$2 = (((G__22048__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22048__$1));var G__22048__$3 = (((G__22048__$2 == null))?null:cljs.core.count(G__22048__$2));return G__22048__$3;
})();if(typeof clustermap.components.map_report.t22049 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22049 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta22050){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22050 = meta22050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22049.cljs$lang$type = true;
clustermap.components.map_report.t22049.cljs$lang$ctorStr = "clustermap.components.map-report/t22049";
clustermap.components.map_report.t22049.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22049");
});
clustermap.components.map_report.t22049.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22049.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22052 = cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22052))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22052),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22052));
}
})()),React.DOM.ul(null,(function (){var attrs22053 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22053))
{return React.DOM.li(sablono.interpreter.attributes(attrs22053),(function (){var attrs22054 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22054))
{return React.DOM.small(sablono.interpreter.attributes(attrs22054),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22054));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22053),(function (){var attrs22055 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22055))
{return React.DOM.small(sablono.interpreter.attributes(attrs22055),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22055));
}
})());
}
})(),(function (){var attrs22056 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22056))
{return React.DOM.li(sablono.interpreter.attributes(attrs22056),(function (){var attrs22057 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22057))
{return React.DOM.small(sablono.interpreter.attributes(attrs22057),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22057));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22056),(function (){var attrs22058 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22058))
{return React.DOM.small(sablono.interpreter.attributes(attrs22058),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22058));
}
})());
}
})(),(function (){var attrs22059 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22069 = self__.investor_company;var G__22069__$1 = (((G__22069 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22069));return G__22069__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22069 = self__.investor_company;var G__22069__$1 = (((G__22069 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22069));return G__22069__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22059))
{return React.DOM.li(sablono.interpreter.attributes(attrs22059),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22059),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22064 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22070 = self__.investor_company;var G__22070__$1 = (((G__22070 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22070));return G__22070__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22070 = self__.investor_company;var G__22070__$1 = (((G__22070 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22070));return G__22070__$1;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22064))
{return React.DOM.li(sablono.interpreter.attributes(attrs22064),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22064),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22051){var self__ = this;
var _22051__$1 = this;return self__.meta22050;
});
clustermap.components.map_report.t22049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22051,meta22050__$1){var self__ = this;
var _22051__$1 = this;return (new clustermap.components.map_report.t22049(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta22050__$1));
});
clustermap.components.map_report.__GT_t22049 = (function __GT_t22049(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22050){return (new clustermap.components.map_report.t22049(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22050));
});
}
return (new clustermap.components.map_report.t22049(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__22096 = constituency;var G__22096__$1 = (((G__22096 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22096));var G__22096__$2 = (((G__22096__$1 == null))?null:cljs.core.count(G__22096__$1));return G__22096__$2;
})();var ic_count = (function (){var G__22097 = constituency;var G__22097__$1 = (((G__22097 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__22097));var G__22097__$2 = (((G__22097__$1 == null))?null:cljs.core.count(G__22097__$1));return G__22097__$2;
})();if(typeof clustermap.components.map_report.t22098 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22098 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta22099){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22099 = meta22099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22098.cljs$lang$type = true;
clustermap.components.map_report.t22098.cljs$lang$ctorStr = "clustermap.components.map-report/t22098";
clustermap.components.map_report.t22098.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22098");
});
clustermap.components.map_report.t22098.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22098.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22101 = cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22101))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22101),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22101));
}
})(),(function (){var attrs22102 = cljs.core.constant$keyword$366.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22102))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22102),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22102),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22103 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22103))
{return React.DOM.li(sablono.interpreter.attributes(attrs22103),(function (){var attrs22104 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22104))
{return React.DOM.small(sablono.interpreter.attributes(attrs22104),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22104));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22103),(function (){var attrs22105 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22105))
{return React.DOM.small(sablono.interpreter.attributes(attrs22105),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22105));
}
})());
}
})(),(function (){var attrs22106 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22106))
{return React.DOM.li(sablono.interpreter.attributes(attrs22106),(function (){var attrs22107 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22107))
{return React.DOM.small(sablono.interpreter.attributes(attrs22107),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22107));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22106),(function (){var attrs22108 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22108))
{return React.DOM.small(sablono.interpreter.attributes(attrs22108),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22108));
}
})());
}
})(),(function (){var attrs22109 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22119 = self__.constituency;var G__22119__$1 = (((G__22119 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22119));return G__22119__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22119 = self__.constituency;var G__22119__$1 = (((G__22119 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22119));return G__22119__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22109))
{return React.DOM.li(sablono.interpreter.attributes(attrs22109),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22109),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22114 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22120 = self__.constituency;var G__22120__$1 = (((G__22120 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22120));return G__22120__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22120 = self__.constituency;var G__22120__$1 = (((G__22120 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22120));return G__22120__$1;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22114))
{return React.DOM.li(sablono.interpreter.attributes(attrs22114),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22114),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22100){var self__ = this;
var _22100__$1 = this;return self__.meta22099;
});
clustermap.components.map_report.t22098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22100,meta22099__$1){var self__ = this;
var _22100__$1 = this;return (new clustermap.components.map_report.t22098(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta22099__$1));
});
clustermap.components.map_report.__GT_t22098 = (function __GT_t22098(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22099){return (new clustermap.components.map_report.t22098(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22099));
});
}
return (new clustermap.components.map_report.t22098(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$278);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,cljs.core.constant$keyword$242], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,cljs.core.constant$keyword$210], null));var pred__22124 = cljs.core._EQ__EQ_;var expr__22125 = type;if(cljs.core.truth_((pred__22124.cljs$core$IFn$_invoke$arity$2 ? pred__22124.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__22125) : pred__22124.call(null,cljs.core.constant$keyword$275,expr__22125))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22124.cljs$core$IFn$_invoke$arity$2 ? pred__22124.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__22125) : pred__22124.call(null,cljs.core.constant$keyword$276,expr__22125))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22124.cljs$core$IFn$_invoke$arity$2 ? pred__22124.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__22125) : pred__22124.call(null,cljs.core.constant$keyword$277,expr__22125))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
