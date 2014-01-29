// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.portfolio_company_sites');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t31440 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t31440 = (function (owner,site,portfolio_company_site,meta31441){
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta31441 = meta31441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t31440.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t31440.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t31440";
clustermap.components.full_report.portfolio_company_sites.t31440.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t31440");
});
clustermap.components.full_report.portfolio_company_sites.t31440.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t31440.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs31443 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs31443))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31443),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31443));
}
})(),(function (){var attrs31444 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs31444))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31444),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31444));
}
})(),React.DOM.td(null,"investor"),React.DOM.td(null,"constituency"),(function (){var attrs31449 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31449))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31449),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31449),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs31450 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31450))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31450),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31450));
}
})(),(function (){var attrs31451 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31451))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31451),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31451),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs31452 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31452))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31452),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31452));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t31440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31442){var self__ = this;
var _31442__$1 = this;return self__.meta31441;
});
clustermap.components.full_report.portfolio_company_sites.t31440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31442,meta31441__$1){var self__ = this;
var _31442__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t31440(self__.owner,self__.site,self__.portfolio_company_site,meta31441__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t31440 = (function __GT_t31440(owner__$1,site__$1,portfolio_company_site__$1,meta31441){return (new clustermap.components.full_report.portfolio_company_sites.t31440(owner__$1,site__$1,portfolio_company_site__$1,meta31441));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t31440(owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(selection_portfolio_company_sites,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t31459 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t31459 = (function (owner,selection_portfolio_company_sites,portfolio_company_sites,meta31460){
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.portfolio_company_sites = portfolio_company_sites;
this.meta31460 = meta31460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t31459.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t31459.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t31459";
clustermap.components.full_report.portfolio_company_sites.t31459.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t31459");
});
clustermap.components.full_report.portfolio_company_sites.t31459.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t31459.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th(null,"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th(null,"Emp. change"))),(function (){var attrs31464 = om.core.build_all.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,self__.selection_portfolio_company_sites);if(cljs.core.map_QMARK_.call(null,attrs31464))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs31464),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs31464));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t31459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31461){var self__ = this;
var _31461__$1 = this;return self__.meta31460;
});
clustermap.components.full_report.portfolio_company_sites.t31459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31461,meta31460__$1){var self__ = this;
var _31461__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t31459(self__.owner,self__.selection_portfolio_company_sites,self__.portfolio_company_sites,meta31460__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t31459 = (function __GT_t31459(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta31460){return (new clustermap.components.full_report.portfolio_company_sites.t31459(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta31460));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t31459(owner,selection_portfolio_company_sites,portfolio_company_sites,null));
});
