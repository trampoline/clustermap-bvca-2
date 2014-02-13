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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11861 = apc_stats;var G__11861__$1 = (((G__11861 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11861));return G__11861__$1;
})();var ic_count = (function (){var G__11862 = apc_stats;var G__11862__$1 = (((G__11862 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11862));return G__11862__$1;
})();if(typeof clustermap.components.map_report.t11863 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11863 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11864){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11864 = meta11864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11863.cljs$lang$type = true;
clustermap.components.map_report.t11863.cljs$lang$ctorStr = "clustermap.components.map-report/t11863";
clustermap.components.map_report.t11863.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11863");
});
clustermap.components.map_report.t11863.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11863.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11868 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11868))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11868),(function (){var attrs11869 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11869))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11869),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11869));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11868),(function (){var attrs11870 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11870))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11870),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11870));
}
})());
}
})(),(function (){var attrs11871 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11871))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11871),(function (){var attrs11872 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11872))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11872),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11872));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11871),(function (){var attrs11873 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11873))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11873),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11873));
}
})());
}
})(),(function (){var attrs11874 = clustermap.formats.money.fmoney.call(null,(function (){var G__11884 = self__.apc_stats;var G__11884__$1 = (((G__11884 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11884));var G__11884__$2 = (((G__11884__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11884__$1));return G__11884__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11874))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11874),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11874),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11879 = clustermap.formats.number.fnum.call(null,(function (){var G__11885 = self__.apc_stats;var G__11885__$1 = (((G__11885 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11885));var G__11885__$2 = (((G__11885__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11885__$1));return G__11885__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11879))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11879),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11879),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11865){var self__ = this;
var _11865__$1 = this;return self__.meta11864;
});
clustermap.components.map_report.t11863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11865,meta11864__$1){var self__ = this;
var _11865__$1 = this;return (new clustermap.components.map_report.t11863(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11864__$1));
});
clustermap.components.map_report.__GT_t11863 = (function __GT_t11863(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11864){return (new clustermap.components.map_report.t11863(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11864));
});
}
return (new clustermap.components.map_report.t11863(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11910 = portfolio_company;var G__11910__$1 = (((G__11910 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11910));var G__11910__$2 = (((G__11910__$1 == null))?null:cljs.core.count.call(null,G__11910__$1));return G__11910__$2;
})();var const_count = (function (){var G__11911 = portfolio_company;var G__11911__$1 = (((G__11911 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11911));var G__11911__$2 = (((G__11911__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11911__$1));var G__11911__$3 = (((G__11911__$2 == null))?null:cljs.core.count.call(null,G__11911__$2));return G__11911__$3;
})();if(typeof clustermap.components.map_report.t11912 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11912 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11913){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11913 = meta11913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11912.cljs$lang$type = true;
clustermap.components.map_report.t11912.cljs$lang$ctorStr = "clustermap.components.map-report/t11912";
clustermap.components.map_report.t11912.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11912");
});
clustermap.components.map_report.t11912.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11912.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11915 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11915))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11915),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11915));
}
})()),React.DOM.ul(null,(function (){var attrs11916 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11916))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11916),(function (){var attrs11917 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11917))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11917),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11917));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11916),(function (){var attrs11918 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11918))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11918),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11918));
}
})());
}
})(),(function (){var attrs11919 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11919))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11919),(function (){var attrs11920 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11920))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11920),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11920));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11919),(function (){var attrs11921 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11921))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11921),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11921));
}
})());
}
})(),(function (){var attrs11922 = clustermap.formats.money.fmoney.call(null,(function (){var G__11932 = self__.portfolio_company;var G__11932__$1 = (((G__11932 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11932));return G__11932__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11922))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11922),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11922),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11927 = clustermap.formats.number.fnum.call(null,(function (){var G__11933 = self__.portfolio_company;var G__11933__$1 = (((G__11933 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11933));return G__11933__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11927))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11927),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11927),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11914){var self__ = this;
var _11914__$1 = this;return self__.meta11913;
});
clustermap.components.map_report.t11912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11914,meta11913__$1){var self__ = this;
var _11914__$1 = this;return (new clustermap.components.map_report.t11912(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11913__$1));
});
clustermap.components.map_report.__GT_t11912 = (function __GT_t11912(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11913){return (new clustermap.components.map_report.t11912(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11913));
});
}
return (new clustermap.components.map_report.t11912(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11958 = investor_company;var G__11958__$1 = (((G__11958 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11958));var G__11958__$2 = (((G__11958__$1 == null))?null:cljs.core.count.call(null,G__11958__$1));return G__11958__$2;
})();var const_count = (function (){var G__11959 = investor_company;var G__11959__$1 = (((G__11959 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11959));var G__11959__$2 = (((G__11959__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11959__$1));var G__11959__$3 = (((G__11959__$2 == null))?null:cljs.core.count.call(null,G__11959__$2));return G__11959__$3;
})();if(typeof clustermap.components.map_report.t11960 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11960 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11961){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11961 = meta11961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11960.cljs$lang$type = true;
clustermap.components.map_report.t11960.cljs$lang$ctorStr = "clustermap.components.map-report/t11960";
clustermap.components.map_report.t11960.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11960");
});
clustermap.components.map_report.t11960.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11960.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11963 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11963))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11963),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11963));
}
})()),React.DOM.ul(null,(function (){var attrs11964 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11964))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11964),(function (){var attrs11965 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11965))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11965),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11965));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11964),(function (){var attrs11966 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11966))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11966),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11966));
}
})());
}
})(),(function (){var attrs11967 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11967))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11967),(function (){var attrs11968 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11968))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11968),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11968));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11967),(function (){var attrs11969 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11969))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11969),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11969));
}
})());
}
})(),(function (){var attrs11970 = clustermap.formats.money.fmoney.call(null,(function (){var G__11980 = self__.investor_company;var G__11980__$1 = (((G__11980 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11980));return G__11980__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11970))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11970),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11970),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11975 = clustermap.formats.number.fnum.call(null,(function (){var G__11981 = self__.investor_company;var G__11981__$1 = (((G__11981 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11981));return G__11981__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11975))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11975),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11975),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11962){var self__ = this;
var _11962__$1 = this;return self__.meta11961;
});
clustermap.components.map_report.t11960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11962,meta11961__$1){var self__ = this;
var _11962__$1 = this;return (new clustermap.components.map_report.t11960(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11961__$1));
});
clustermap.components.map_report.__GT_t11960 = (function __GT_t11960(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11961){return (new clustermap.components.map_report.t11960(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11961));
});
}
return (new clustermap.components.map_report.t11960(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__12007 = constituency;var G__12007__$1 = (((G__12007 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__12007));var G__12007__$2 = (((G__12007__$1 == null))?null:cljs.core.count.call(null,G__12007__$1));return G__12007__$2;
})();var ic_count = (function (){var G__12008 = constituency;var G__12008__$1 = (((G__12008 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__12008));var G__12008__$2 = (((G__12008__$1 == null))?null:cljs.core.count.call(null,G__12008__$1));return G__12008__$2;
})();if(typeof clustermap.components.map_report.t12009 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12009 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta12010){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12010 = meta12010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12009.cljs$lang$type = true;
clustermap.components.map_report.t12009.cljs$lang$ctorStr = "clustermap.components.map-report/t12009";
clustermap.components.map_report.t12009.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12009");
});
clustermap.components.map_report.t12009.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12009.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12012 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12012))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs12012),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs12012));
}
})(),(function (){var attrs12013 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12013))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12013),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12013),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12014 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12014))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12014),(function (){var attrs12015 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12015))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12015),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12015));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12014),(function (){var attrs12016 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12016))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12016),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12016));
}
})());
}
})(),(function (){var attrs12017 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12017))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12017),(function (){var attrs12018 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12018))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12018),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12018));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12017),(function (){var attrs12019 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12019))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12019),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12019));
}
})());
}
})(),(function (){var attrs12020 = clustermap.formats.money.fmoney.call(null,(function (){var G__12030 = self__.constituency;var G__12030__$1 = (((G__12030 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__12030));return G__12030__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12020))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12020),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12020),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12025 = clustermap.formats.number.fnum.call(null,(function (){var G__12031 = self__.constituency;var G__12031__$1 = (((G__12031 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__12031));return G__12031__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12025))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12025),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12025),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12011){var self__ = this;
var _12011__$1 = this;return self__.meta12010;
});
clustermap.components.map_report.t12009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12011,meta12010__$1){var self__ = this;
var _12011__$1 = this;return (new clustermap.components.map_report.t12009(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta12010__$1));
});
clustermap.components.map_report.__GT_t12009 = (function __GT_t12009(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta12010){return (new clustermap.components.map_report.t12009(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta12010));
});
}
return (new clustermap.components.map_report.t12009(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__12035 = cljs.core._EQ__EQ_;var expr__12036 = type;if(cljs.core.truth_(pred__12035.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12036)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__12035.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12036)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__12035.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12036)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map