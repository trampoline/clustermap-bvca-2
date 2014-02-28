// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$429,(function (){var G__22717 = site_stats;var G__22717__$1 = (((G__22717 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22717));return G__22717__$1;
})(),cljs.core.constant$keyword$430,(function (){var G__22718 = site_stats;var G__22718__$1 = (((G__22718 == null))?null:cljs.core.constant$keyword$360.cljs$core$IFn$_invoke$arity$1(G__22718));return G__22718__$1;
})(),cljs.core.constant$keyword$431,(function (){var G__22719 = site_stats;var G__22719__$1 = (((G__22719 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22719));return G__22719__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22751 = clustermap.components.map_report.type_counts(site_stats);var map__22751__$1 = ((cljs.core.seq_QMARK_(map__22751))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22751):map__22751);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22751__$1,cljs.core.constant$keyword$431);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22751__$1,cljs.core.constant$keyword$430);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22751__$1,cljs.core.constant$keyword$429);if(typeof clustermap.components.map_report.t22752 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22752 = (function (pc_count,ic_count,const_count,map__22751,comm,site_stats,all_portfolio_companies_summary_report,meta22753){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22751 = map__22751;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22753 = meta22753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22752.cljs$lang$type = true;
clustermap.components.map_report.t22752.cljs$lang$ctorStr = "clustermap.components.map-report/t22752";
clustermap.components.map_report.t22752.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22752");
});
clustermap.components.map_report.t22752.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22752.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22757 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22757))
{return React.DOM.li(sablono.interpreter.attributes(attrs22757),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22757),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22762 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22762))
{return React.DOM.li(sablono.interpreter.attributes(attrs22762),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22762),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22767 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22767))
{return React.DOM.li(sablono.interpreter.attributes(attrs22767),(function (){var attrs22768 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22768))
{return React.DOM.small(sablono.interpreter.attributes(attrs22768),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22768));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22767),(function (){var attrs22769 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22769))
{return React.DOM.small(sablono.interpreter.attributes(attrs22769),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22769));
}
})());
}
})(),(function (){var attrs22770 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22780 = self__.site_stats;var G__22780__$1 = (((G__22780 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22780));var G__22780__$2 = (((G__22780__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22780__$1));return G__22780__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22780 = self__.site_stats;var G__22780__$1 = (((G__22780 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22780));var G__22780__$2 = (((G__22780__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22780__$1));return G__22780__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22770))
{return React.DOM.li(sablono.interpreter.attributes(attrs22770),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22770),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22775 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22781 = self__.site_stats;var G__22781__$1 = (((G__22781 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22781));var G__22781__$2 = (((G__22781__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22781__$1));return G__22781__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22781 = self__.site_stats;var G__22781__$1 = (((G__22781 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22781));var G__22781__$2 = (((G__22781__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22781__$1));return G__22781__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22775))
{return React.DOM.li(sablono.interpreter.attributes(attrs22775),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22775),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22754){var self__ = this;
var _22754__$1 = this;return self__.meta22753;
});
clustermap.components.map_report.t22752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22754,meta22753__$1){var self__ = this;
var _22754__$1 = this;return (new clustermap.components.map_report.t22752(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22751,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22753__$1));
});
clustermap.components.map_report.__GT_t22752 = (function __GT_t22752(pc_count__$1,ic_count__$1,const_count__$1,map__22751__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22753){return (new clustermap.components.map_report.t22752(pc_count__$1,ic_count__$1,const_count__$1,map__22751__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22753));
});
}
return (new clustermap.components.map_report.t22752(pc_count,ic_count,const_count,map__22751__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22807 = clustermap.components.map_report.type_counts(site_stats);var map__22807__$1 = ((cljs.core.seq_QMARK_(map__22807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22807):map__22807);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22807__$1,cljs.core.constant$keyword$431);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22807__$1,cljs.core.constant$keyword$430);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22807__$1,cljs.core.constant$keyword$429);if(typeof clustermap.components.map_report.t22808 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22808 = (function (pc_count,ic_count,const_count,map__22807,comm,site_stats,portfolio_company,portfolio_company_report,meta22809){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22807 = map__22807;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22809 = meta22809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22808.cljs$lang$type = true;
clustermap.components.map_report.t22808.cljs$lang$ctorStr = "clustermap.components.map-report/t22808";
clustermap.components.map_report.t22808.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22808");
});
clustermap.components.map_report.t22808.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22808.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22813 = cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22813))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22813),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22813));
}
})()),React.DOM.ul(null,(function (){var attrs22814 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22814))
{return React.DOM.li(sablono.interpreter.attributes(attrs22814),(function (){var attrs22815 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22815))
{return React.DOM.small(sablono.interpreter.attributes(attrs22815),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22815));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22814),(function (){var attrs22816 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22816))
{return React.DOM.small(sablono.interpreter.attributes(attrs22816),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22816));
}
})());
}
})(),(function (){var attrs22817 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22817))
{return React.DOM.li(sablono.interpreter.attributes(attrs22817),(function (){var attrs22818 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22818))
{return React.DOM.small(sablono.interpreter.attributes(attrs22818),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22818));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22817),(function (){var attrs22819 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22819))
{return React.DOM.small(sablono.interpreter.attributes(attrs22819),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22819));
}
})());
}
})(),(function (){var attrs22820 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22830 = self__.site_stats;var G__22830__$1 = (((G__22830 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22830));var G__22830__$2 = (((G__22830__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22830__$1));return G__22830__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22830 = self__.site_stats;var G__22830__$1 = (((G__22830 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22830));var G__22830__$2 = (((G__22830__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22830__$1));return G__22830__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22820))
{return React.DOM.li(sablono.interpreter.attributes(attrs22820),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22820),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22825 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22831 = self__.site_stats;var G__22831__$1 = (((G__22831 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22831));var G__22831__$2 = (((G__22831__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22831__$1));return G__22831__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22831 = self__.site_stats;var G__22831__$1 = (((G__22831 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22831));var G__22831__$2 = (((G__22831__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22831__$1));return G__22831__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22825))
{return React.DOM.li(sablono.interpreter.attributes(attrs22825),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22825),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22810){var self__ = this;
var _22810__$1 = this;return self__.meta22809;
});
clustermap.components.map_report.t22808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22810,meta22809__$1){var self__ = this;
var _22810__$1 = this;return (new clustermap.components.map_report.t22808(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22807,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22809__$1));
});
clustermap.components.map_report.__GT_t22808 = (function __GT_t22808(pc_count__$1,ic_count__$1,const_count__$1,map__22807__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22809){return (new clustermap.components.map_report.t22808(pc_count__$1,ic_count__$1,const_count__$1,map__22807__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22809));
});
}
return (new clustermap.components.map_report.t22808(pc_count,ic_count,const_count,map__22807__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22857 = clustermap.components.map_report.type_counts(site_stats);var map__22857__$1 = ((cljs.core.seq_QMARK_(map__22857))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22857):map__22857);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,cljs.core.constant$keyword$431);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,cljs.core.constant$keyword$430);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,cljs.core.constant$keyword$429);if(typeof clustermap.components.map_report.t22858 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22858 = (function (pc_count,ic_count,const_count,map__22857,comm,site_stats,investor_company,investor_company_report,meta22859){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22857 = map__22857;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22859 = meta22859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22858.cljs$lang$type = true;
clustermap.components.map_report.t22858.cljs$lang$ctorStr = "clustermap.components.map-report/t22858";
clustermap.components.map_report.t22858.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22858");
});
clustermap.components.map_report.t22858.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22858.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22863 = cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22863))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22863),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22863));
}
})()),React.DOM.ul(null,(function (){var attrs22864 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22864))
{return React.DOM.li(sablono.interpreter.attributes(attrs22864),(function (){var attrs22865 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22865))
{return React.DOM.small(sablono.interpreter.attributes(attrs22865),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22865));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22864),(function (){var attrs22866 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22866))
{return React.DOM.small(sablono.interpreter.attributes(attrs22866),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22866));
}
})());
}
})(),(function (){var attrs22867 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22867))
{return React.DOM.li(sablono.interpreter.attributes(attrs22867),(function (){var attrs22868 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22868))
{return React.DOM.small(sablono.interpreter.attributes(attrs22868),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22868));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22867),(function (){var attrs22869 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22869))
{return React.DOM.small(sablono.interpreter.attributes(attrs22869),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22869));
}
})());
}
})(),(function (){var attrs22870 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22880 = self__.site_stats;var G__22880__$1 = (((G__22880 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22880));var G__22880__$2 = (((G__22880__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22880__$1));return G__22880__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22880 = self__.site_stats;var G__22880__$1 = (((G__22880 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22880));var G__22880__$2 = (((G__22880__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22880__$1));return G__22880__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22870))
{return React.DOM.li(sablono.interpreter.attributes(attrs22870),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22870),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22875 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22881 = self__.site_stats;var G__22881__$1 = (((G__22881 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22881));var G__22881__$2 = (((G__22881__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22881__$1));return G__22881__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22881 = self__.site_stats;var G__22881__$1 = (((G__22881 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22881));var G__22881__$2 = (((G__22881__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22881__$1));return G__22881__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22875))
{return React.DOM.li(sablono.interpreter.attributes(attrs22875),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22875),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22860){var self__ = this;
var _22860__$1 = this;return self__.meta22859;
});
clustermap.components.map_report.t22858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22860,meta22859__$1){var self__ = this;
var _22860__$1 = this;return (new clustermap.components.map_report.t22858(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22857,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22859__$1));
});
clustermap.components.map_report.__GT_t22858 = (function __GT_t22858(pc_count__$1,ic_count__$1,const_count__$1,map__22857__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22859){return (new clustermap.components.map_report.t22858(pc_count__$1,ic_count__$1,const_count__$1,map__22857__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22859));
});
}
return (new clustermap.components.map_report.t22858(pc_count,ic_count,const_count,map__22857__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22911 = clustermap.components.map_report.type_counts(site_stats);var map__22911__$1 = ((cljs.core.seq_QMARK_(map__22911))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22911):map__22911);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22911__$1,cljs.core.constant$keyword$431);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22911__$1,cljs.core.constant$keyword$430);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22911__$1,cljs.core.constant$keyword$429);if(typeof clustermap.components.map_report.t22912 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22912 = (function (pc_count,ic_count,const_count,map__22911,comm,site_stats,constituency,constituency_report,meta22913){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22911 = map__22911;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22913 = meta22913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22912.cljs$lang$type = true;
clustermap.components.map_report.t22912.cljs$lang$ctorStr = "clustermap.components.map-report/t22912";
clustermap.components.map_report.t22912.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22912");
});
clustermap.components.map_report.t22912.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22912.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22917 = cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22917))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22917),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22917),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})()),React.DOM.ul(null,(function (){var attrs22922 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22922))
{return React.DOM.li(sablono.interpreter.attributes(attrs22922),(function (){var attrs22923 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22923))
{return React.DOM.small(sablono.interpreter.attributes(attrs22923),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22923));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22922),(function (){var attrs22924 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22924))
{return React.DOM.small(sablono.interpreter.attributes(attrs22924),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22924));
}
})());
}
})(),(function (){var attrs22925 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22925))
{return React.DOM.li(sablono.interpreter.attributes(attrs22925),(function (){var attrs22926 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22926))
{return React.DOM.small(sablono.interpreter.attributes(attrs22926),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22926));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22925),(function (){var attrs22927 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22927))
{return React.DOM.small(sablono.interpreter.attributes(attrs22927),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22927));
}
})());
}
})(),(function (){var attrs22928 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22938 = self__.site_stats;var G__22938__$1 = (((G__22938 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22938));var G__22938__$2 = (((G__22938__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22938__$1));return G__22938__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22938 = self__.site_stats;var G__22938__$1 = (((G__22938 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22938));var G__22938__$2 = (((G__22938__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22938__$1));return G__22938__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22928))
{return React.DOM.li(sablono.interpreter.attributes(attrs22928),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22928),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22933 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22939 = self__.site_stats;var G__22939__$1 = (((G__22939 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22939));var G__22939__$2 = (((G__22939__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22939__$1));return G__22939__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22939 = self__.site_stats;var G__22939__$1 = (((G__22939 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22939));var G__22939__$2 = (((G__22939__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22939__$1));return G__22939__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22933))
{return React.DOM.li(sablono.interpreter.attributes(attrs22933),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22933),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22914){var self__ = this;
var _22914__$1 = this;return self__.meta22913;
});
clustermap.components.map_report.t22912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22914,meta22913__$1){var self__ = this;
var _22914__$1 = this;return (new clustermap.components.map_report.t22912(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22911,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22913__$1));
});
clustermap.components.map_report.__GT_t22912 = (function __GT_t22912(pc_count__$1,ic_count__$1,const_count__$1,map__22911__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22913){return (new clustermap.components.map_report.t22912(pc_count__$1,ic_count__$1,const_count__$1,map__22911__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22913));
});
}
return (new clustermap.components.map_report.t22912(pc_count,ic_count,const_count,map__22911__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$322);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.constant$keyword$286], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,cljs.core.constant$keyword$249], null));var site_stats = cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(data);var pred__22943 = cljs.core._EQ__EQ_;var expr__22944 = type;if(cljs.core.truth_((pred__22943.cljs$core$IFn$_invoke$arity$2 ? pred__22943.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$319,expr__22944) : pred__22943.call(null,cljs.core.constant$keyword$319,expr__22944))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22943.cljs$core$IFn$_invoke$arity$2 ? pred__22943.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$320,expr__22944) : pred__22943.call(null,cljs.core.constant$keyword$320,expr__22944))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22943.cljs$core$IFn$_invoke$arity$2 ? pred__22943.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$321,expr__22944) : pred__22943.call(null,cljs.core.constant$keyword$321,expr__22944))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
