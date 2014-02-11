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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21902 = apc_stats;var G__21902__$1 = (((G__21902 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21902));return G__21902__$1;
})();var ic_count = (function (){var G__21903 = apc_stats;var G__21903__$1 = (((G__21903 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21903));return G__21903__$1;
})();if(typeof clustermap.components.map_report.t21904 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21904 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21905){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21905 = meta21905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21904.cljs$lang$type = true;
clustermap.components.map_report.t21904.cljs$lang$ctorStr = "clustermap.components.map-report/t21904";
clustermap.components.map_report.t21904.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21904");
});
clustermap.components.map_report.t21904.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21904.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21909 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21909))
{return React.DOM.li(sablono.interpreter.attributes(attrs21909),(function (){var attrs21910 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21910))
{return React.DOM.small(sablono.interpreter.attributes(attrs21910),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21910));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21909),(function (){var attrs21911 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21911))
{return React.DOM.small(sablono.interpreter.attributes(attrs21911),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21911));
}
})());
}
})(),(function (){var attrs21912 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21912))
{return React.DOM.li(sablono.interpreter.attributes(attrs21912),(function (){var attrs21913 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21913))
{return React.DOM.small(sablono.interpreter.attributes(attrs21913),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21913));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21912),(function (){var attrs21914 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21914))
{return React.DOM.small(sablono.interpreter.attributes(attrs21914),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21914));
}
})());
}
})(),(function (){var attrs21915 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21925 = self__.apc_stats;var G__21925__$1 = (((G__21925 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21925));var G__21925__$2 = (((G__21925__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21925__$1));return G__21925__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21925 = self__.apc_stats;var G__21925__$1 = (((G__21925 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21925));var G__21925__$2 = (((G__21925__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21925__$1));return G__21925__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21915))
{return React.DOM.li(sablono.interpreter.attributes(attrs21915),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21915),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21920 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21926 = self__.apc_stats;var G__21926__$1 = (((G__21926 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21926));var G__21926__$2 = (((G__21926__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21926__$1));return G__21926__$2;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21926 = self__.apc_stats;var G__21926__$1 = (((G__21926 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21926));var G__21926__$2 = (((G__21926__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21926__$1));return G__21926__$2;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21920))
{return React.DOM.li(sablono.interpreter.attributes(attrs21920),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21920),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21906){var self__ = this;
var _21906__$1 = this;return self__.meta21905;
});
clustermap.components.map_report.t21904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21906,meta21905__$1){var self__ = this;
var _21906__$1 = this;return (new clustermap.components.map_report.t21904(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21905__$1));
});
clustermap.components.map_report.__GT_t21904 = (function __GT_t21904(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21905){return (new clustermap.components.map_report.t21904(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21905));
});
}
return (new clustermap.components.map_report.t21904(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21951 = portfolio_company;var G__21951__$1 = (((G__21951 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21951));var G__21951__$2 = (((G__21951__$1 == null))?null:cljs.core.count(G__21951__$1));return G__21951__$2;
})();var const_count = (function (){var G__21952 = portfolio_company;var G__21952__$1 = (((G__21952 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__21952));var G__21952__$2 = (((G__21952__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__21952__$1));var G__21952__$3 = (((G__21952__$2 == null))?null:cljs.core.count(G__21952__$2));return G__21952__$3;
})();if(typeof clustermap.components.map_report.t21953 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21953 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21954){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21954 = meta21954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21953.cljs$lang$type = true;
clustermap.components.map_report.t21953.cljs$lang$ctorStr = "clustermap.components.map-report/t21953";
clustermap.components.map_report.t21953.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21953");
});
clustermap.components.map_report.t21953.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21953.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21956 = cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21956))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21956),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21956));
}
})()),React.DOM.ul(null,(function (){var attrs21957 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21957))
{return React.DOM.li(sablono.interpreter.attributes(attrs21957),(function (){var attrs21958 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21958))
{return React.DOM.small(sablono.interpreter.attributes(attrs21958),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21958));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21957),(function (){var attrs21959 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21959))
{return React.DOM.small(sablono.interpreter.attributes(attrs21959),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21959));
}
})());
}
})(),(function (){var attrs21960 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21960))
{return React.DOM.li(sablono.interpreter.attributes(attrs21960),(function (){var attrs21961 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21961))
{return React.DOM.small(sablono.interpreter.attributes(attrs21961),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21961));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21960),(function (){var attrs21962 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21962))
{return React.DOM.small(sablono.interpreter.attributes(attrs21962),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21962));
}
})());
}
})(),(function (){var attrs21963 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21973 = self__.portfolio_company;var G__21973__$1 = (((G__21973 == null))?null:cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(G__21973));return G__21973__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21973 = self__.portfolio_company;var G__21973__$1 = (((G__21973 == null))?null:cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(G__21973));return G__21973__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21963))
{return React.DOM.li(sablono.interpreter.attributes(attrs21963),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21963),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21968 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21974 = self__.portfolio_company;var G__21974__$1 = (((G__21974 == null))?null:cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(G__21974));return G__21974__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21974 = self__.portfolio_company;var G__21974__$1 = (((G__21974 == null))?null:cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(G__21974));return G__21974__$1;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21968))
{return React.DOM.li(sablono.interpreter.attributes(attrs21968),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21968),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21955){var self__ = this;
var _21955__$1 = this;return self__.meta21954;
});
clustermap.components.map_report.t21953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21955,meta21954__$1){var self__ = this;
var _21955__$1 = this;return (new clustermap.components.map_report.t21953(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21954__$1));
});
clustermap.components.map_report.__GT_t21953 = (function __GT_t21953(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21954){return (new clustermap.components.map_report.t21953(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21954));
});
}
return (new clustermap.components.map_report.t21953(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21999 = investor_company;var G__21999__$1 = (((G__21999 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__21999));var G__21999__$2 = (((G__21999__$1 == null))?null:cljs.core.count(G__21999__$1));return G__21999__$2;
})();var const_count = (function (){var G__22000 = investor_company;var G__22000__$1 = (((G__22000 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22000));var G__22000__$2 = (((G__22000__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22000__$1));var G__22000__$3 = (((G__22000__$2 == null))?null:cljs.core.count(G__22000__$2));return G__22000__$3;
})();if(typeof clustermap.components.map_report.t22001 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22001 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta22002){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
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
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22004 = cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22004))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22004),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22004));
}
})()),React.DOM.ul(null,(function (){var attrs22005 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22005))
{return React.DOM.li(sablono.interpreter.attributes(attrs22005),(function (){var attrs22006 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22006))
{return React.DOM.small(sablono.interpreter.attributes(attrs22006),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22006));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22005),(function (){var attrs22007 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22007))
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
})(),(function (){var attrs22011 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22021 = self__.investor_company;var G__22021__$1 = (((G__22021 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22021));return G__22021__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22021 = self__.investor_company;var G__22021__$1 = (((G__22021 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22021));return G__22021__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22011))
{return React.DOM.li(sablono.interpreter.attributes(attrs22011),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22011),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22016 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22022 = self__.investor_company;var G__22022__$1 = (((G__22022 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22022));return G__22022__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22022 = self__.investor_company;var G__22022__$1 = (((G__22022 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22022));return G__22022__$1;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22016))
{return React.DOM.li(sablono.interpreter.attributes(attrs22016),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22016),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22003){var self__ = this;
var _22003__$1 = this;return self__.meta22002;
});
clustermap.components.map_report.t22001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22003,meta22002__$1){var self__ = this;
var _22003__$1 = this;return (new clustermap.components.map_report.t22001(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta22002__$1));
});
clustermap.components.map_report.__GT_t22001 = (function __GT_t22001(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22002){return (new clustermap.components.map_report.t22001(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22002));
});
}
return (new clustermap.components.map_report.t22001(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__22048 = constituency;var G__22048__$1 = (((G__22048 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22048));var G__22048__$2 = (((G__22048__$1 == null))?null:cljs.core.count(G__22048__$1));return G__22048__$2;
})();var ic_count = (function (){var G__22049 = constituency;var G__22049__$1 = (((G__22049 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__22049));var G__22049__$2 = (((G__22049__$1 == null))?null:cljs.core.count(G__22049__$1));return G__22049__$2;
})();if(typeof clustermap.components.map_report.t22050 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22050 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta22051){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22051 = meta22051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22050.cljs$lang$type = true;
clustermap.components.map_report.t22050.cljs$lang$ctorStr = "clustermap.components.map-report/t22050";
clustermap.components.map_report.t22050.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22050");
});
clustermap.components.map_report.t22050.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22050.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22053 = cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22053))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22053),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22053));
}
})(),(function (){var attrs22054 = cljs.core.constant$keyword$366.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22054))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22054),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22054),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22055 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22055))
{return React.DOM.li(sablono.interpreter.attributes(attrs22055),(function (){var attrs22056 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22056))
{return React.DOM.small(sablono.interpreter.attributes(attrs22056),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22056));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22055),(function (){var attrs22057 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22057))
{return React.DOM.small(sablono.interpreter.attributes(attrs22057),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22057));
}
})());
}
})(),(function (){var attrs22058 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22058))
{return React.DOM.li(sablono.interpreter.attributes(attrs22058),(function (){var attrs22059 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22059))
{return React.DOM.small(sablono.interpreter.attributes(attrs22059),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22059));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22058),(function (){var attrs22060 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22060))
{return React.DOM.small(sablono.interpreter.attributes(attrs22060),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22060));
}
})());
}
})(),(function (){var attrs22061 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22071 = self__.constituency;var G__22071__$1 = (((G__22071 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22071));return G__22071__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22071 = self__.constituency;var G__22071__$1 = (((G__22071 == null))?null:cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(G__22071));return G__22071__$1;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22061))
{return React.DOM.li(sablono.interpreter.attributes(attrs22061),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22061),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22066 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22072 = self__.constituency;var G__22072__$1 = (((G__22072 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22072));return G__22072__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22072 = self__.constituency;var G__22072__$1 = (((G__22072 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22072));return G__22072__$1;
})(),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs22066))
{return React.DOM.li(sablono.interpreter.attributes(attrs22066),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22066),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22052){var self__ = this;
var _22052__$1 = this;return self__.meta22051;
});
clustermap.components.map_report.t22050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22052,meta22051__$1){var self__ = this;
var _22052__$1 = this;return (new clustermap.components.map_report.t22050(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta22051__$1));
});
clustermap.components.map_report.__GT_t22050 = (function __GT_t22050(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22051){return (new clustermap.components.map_report.t22050(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22051));
});
}
return (new clustermap.components.map_report.t22050(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$278);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,cljs.core.constant$keyword$242], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,cljs.core.constant$keyword$210], null));var pred__22076 = cljs.core._EQ__EQ_;var expr__22077 = type;if(cljs.core.truth_((pred__22076.cljs$core$IFn$_invoke$arity$2 ? pred__22076.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__22077) : pred__22076.call(null,cljs.core.constant$keyword$275,expr__22077))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22076.cljs$core$IFn$_invoke$arity$2 ? pred__22076.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__22077) : pred__22076.call(null,cljs.core.constant$keyword$276,expr__22077))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22076.cljs$core$IFn$_invoke$arity$2 ? pred__22076.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__22077) : pred__22076.call(null,cljs.core.constant$keyword$277,expr__22077))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
