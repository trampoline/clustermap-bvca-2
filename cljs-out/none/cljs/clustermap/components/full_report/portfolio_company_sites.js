// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.portfolio_company_sites');
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
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner){console.log(cljs.core.clj__GT_js.call(null,site));
if(typeof clustermap.components.full_report.portfolio_company_sites.t11153 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t11153 = (function (owner,site,portfolio_company_site,meta11154){
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11154 = meta11154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t11153.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t11153.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t11153";
clustermap.components.full_report.portfolio_company_sites.t11153.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t11153");
});
clustermap.components.full_report.portfolio_company_sites.t11153.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t11153.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11156 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11156))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11156),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11156));
}
})(),(function (){var attrs11157 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11157))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11157),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11157));
}
})(),React.DOM.td(null,"investor"),(function (){var attrs11160 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11160))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11160),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11160));
}
})(),(function (){var attrs11161 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11161))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11161),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11161));
}
})(),(function (){var attrs11162 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11162))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11162),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11162));
}
})(),(function (){var attrs11163 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11163))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11163),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11163));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t11153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11155){var self__ = this;
var _11155__$1 = this;return self__.meta11154;
});
clustermap.components.full_report.portfolio_company_sites.t11153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11155,meta11154__$1){var self__ = this;
var _11155__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t11153(self__.owner,self__.site,self__.portfolio_company_site,meta11154__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t11153 = (function __GT_t11153(owner__$1,site__$1,portfolio_company_site__$1,meta11154){return (new clustermap.components.full_report.portfolio_company_sites.t11153(owner__$1,site__$1,portfolio_company_site__$1,meta11154));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t11153(owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(data,owner){var sites = new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.components.full_report.portfolio_company_sites.t11170 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t11170 = (function (sites,owner,data,portfolio_company_sites,meta11171){
this.sites = sites;
this.owner = owner;
this.data = data;
this.portfolio_company_sites = portfolio_company_sites;
this.meta11171 = meta11171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t11170.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t11170.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t11170";
clustermap.components.full_report.portfolio_company_sites.t11170.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t11170");
});
clustermap.components.full_report.portfolio_company_sites.t11170.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t11170.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Revenue"),React.DOM.th(null,"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th(null,"Emp. change"))),(function (){var attrs11175 = (cljs.core.truth_(self__.sites)?om.core.build_all.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,self__.sites):null);if(cljs.core.map_QMARK_.call(null,attrs11175))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11175),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11175));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t11170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11172){var self__ = this;
var _11172__$1 = this;return self__.meta11171;
});
clustermap.components.full_report.portfolio_company_sites.t11170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11172,meta11171__$1){var self__ = this;
var _11172__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t11170(self__.sites,self__.owner,self__.data,self__.portfolio_company_sites,meta11171__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t11170 = (function __GT_t11170(sites__$1,owner__$1,data__$1,portfolio_company_sites__$1,meta11171){return (new clustermap.components.full_report.portfolio_company_sites.t11170(sites__$1,owner__$1,data__$1,portfolio_company_sites__$1,meta11171));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t11170(sites,owner,data,portfolio_company_sites,null));
});

//# sourceMappingURL=portfolio_company_sites.js.map