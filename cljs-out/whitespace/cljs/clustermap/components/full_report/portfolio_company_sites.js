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
clustermap.components.full_report.portfolio_company_sites.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs31838 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs31838))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs31838),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs31838),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner,p__31839){var map__31852 = p__31839;var map__31852__$1 = ((cljs.core.seq_QMARK_.call(null,map__31852))?cljs.core.apply.call(null,cljs.core.hash_map,map__31852):map__31852);var opts = map__31852__$1;var path_fn = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.portfolio_company_sites.t31853 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t31853 = (function (company_path,link_fn,path_fn,opts,map__31852,p__31839,owner,site,portfolio_company_site,meta31854){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__31852 = map__31852;
this.p__31839 = p__31839;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta31854 = meta31854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t31853.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t31853.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t31853";
clustermap.components.full_report.portfolio_company_sites.t31853.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t31853");
});
clustermap.components.full_report.portfolio_company_sites.t31853.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t31853.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs31856 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs31856))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31856),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31856));
}
})(),(function (){var attrs31857 = clustermap.components.full_report.portfolio_company_sites.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs31857))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31857),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31857));
}
})(),(function (){var attrs31858 = clustermap.components.full_report.portfolio_company_sites.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__31863 = self__.site;var G__31863__$1 = (((G__31863 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__31863));var G__31863__$2 = (((G__31863__$1 == null))?null:cljs.core.filter.call(null,((function (G__31863,G__31863__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__31863,G__31863__$1))
,G__31863__$1));return G__31863__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs31858))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31858),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31858));
}
})(),(function (){var attrs31859 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31859))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31859),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31859),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs31860 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31860))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31860),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31860));
}
})(),(function (){var attrs31861 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31861))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31861),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31861),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs31862 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31862))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31862),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31862));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t31853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31855){var self__ = this;
var _31855__$1 = this;return self__.meta31854;
});
clustermap.components.full_report.portfolio_company_sites.t31853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31855,meta31854__$1){var self__ = this;
var _31855__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t31853(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__31852,self__.p__31839,self__.owner,self__.site,self__.portfolio_company_site,meta31854__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t31853 = (function __GT_t31853(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__31852__$2,p__31839__$1,owner__$1,site__$1,portfolio_company_site__$1,meta31854){return (new clustermap.components.full_report.portfolio_company_sites.t31853(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__31852__$2,p__31839__$1,owner__$1,site__$1,portfolio_company_site__$1,meta31854));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t31853(company_path,link_fn,path_fn,opts,map__31852__$1,p__31839,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.portfolio_company_sites.t31870 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t31870 = (function (opts,owner,selection_portfolio_company_sites,portfolio_company_sites,meta31871){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.portfolio_company_sites = portfolio_company_sites;
this.meta31871 = meta31871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t31870.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t31870.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t31870";
clustermap.components.full_report.portfolio_company_sites.t31870.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t31870");
});
clustermap.components.full_report.portfolio_company_sites.t31870.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t31870.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th(null,"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th(null,"Emp. change"))),(function (){var attrs31875 = om.core.build_all.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_id","portfolio_company_id",771436262),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs31875))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs31875),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs31875));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t31870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31872){var self__ = this;
var _31872__$1 = this;return self__.meta31871;
});
clustermap.components.full_report.portfolio_company_sites.t31870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31872,meta31871__$1){var self__ = this;
var _31872__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t31870(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.portfolio_company_sites,meta31871__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t31870 = (function __GT_t31870(opts__$1,owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta31871){return (new clustermap.components.full_report.portfolio_company_sites.t31870(opts__$1,owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta31871));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t31870(opts,owner,selection_portfolio_company_sites,portfolio_company_sites,null));
});
