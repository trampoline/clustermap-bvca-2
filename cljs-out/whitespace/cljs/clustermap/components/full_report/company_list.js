// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs32976 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs32976))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs32976),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs32976),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(site,owner,p__32985){var map__33001 = p__32985;var map__33001__$1 = ((cljs.core.seq_QMARK_.call(null,map__33001))?cljs.core.apply.call(null,cljs.core.hash_map,map__33001):map__33001);var opts = map__33001__$1;var path_fn = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t33002 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33002 = (function (company_path,link_fn,path_fn,opts,map__33001,p__32985,owner,site,portfolio_company,meta33003){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33001 = map__33001;
this.p__32985 = p__32985;
this.owner = owner;
this.site = site;
this.portfolio_company = portfolio_company;
this.meta33003 = meta33003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33002.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33002.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33002";
clustermap.components.full_report.company_list.t33002.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t33002");
});
clustermap.components.full_report.company_list.t33002.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33002.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33005 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs33005))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33005),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33005));
}
})(),(function (){var attrs33006 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs33006))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33006),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33006));
}
})(),(function (){var attrs33007 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs33007))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33007),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33007));
}
})(),(function (){var attrs33008 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__33015 = self__.site;var G__33015__$1 = (((G__33015 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__33015));var G__33015__$2 = (((G__33015__$1 == null))?null:cljs.core.filter.call(null,((function (G__33015,G__33015__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33015,G__33015__$1))
,G__33015__$1));return G__33015__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs33008))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33008),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33008));
}
})(),(function (){var attrs33009 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33009))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33009),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33009),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs33010 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs33010))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33010),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33010));
}
})(),(function (){var attrs33011 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33011))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33011),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33011));
}
})(),(function (){var attrs33012 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33012))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33012),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33012),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs33013 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs33013))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33013),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33013));
}
})(),(function (){var attrs33014 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33014))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33014),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33014));
}
})());
});
clustermap.components.full_report.company_list.t33002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33004){var self__ = this;
var _33004__$1 = this;return self__.meta33003;
});
clustermap.components.full_report.company_list.t33002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33004,meta33003__$1){var self__ = this;
var _33004__$1 = this;return (new clustermap.components.full_report.company_list.t33002(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33001,self__.p__32985,self__.owner,self__.site,self__.portfolio_company,meta33003__$1));
});
clustermap.components.full_report.company_list.__GT_t33002 = (function __GT_t33002(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33001__$2,p__32985__$1,owner__$1,site__$1,portfolio_company__$1,meta33003){return (new clustermap.components.full_report.company_list.t33002(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33001__$2,p__32985__$1,owner__$1,site__$1,portfolio_company__$1,meta33003));
});
}
return (new clustermap.components.full_report.company_list.t33002(company_path,link_fn,path_fn,opts,map__33001__$1,p__32985,owner,site,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites_by_company,owner,opts){if(typeof clustermap.components.full_report.company_list.t33022 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33022 = (function (opts,owner,selection_portfolio_company_sites_by_company,company_list,meta33023){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites_by_company = selection_portfolio_company_sites_by_company;
this.company_list = company_list;
this.meta33023 = meta33023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33022.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33022.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33022";
clustermap.components.full_report.company_list.t33022.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t33022");
});
clustermap.components.full_report.company_list.t33022.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33022.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs33027 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites_by_company),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33027))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33027),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33027));
}
})())));
});
clustermap.components.full_report.company_list.t33022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33024){var self__ = this;
var _33024__$1 = this;return self__.meta33023;
});
clustermap.components.full_report.company_list.t33022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33024,meta33023__$1){var self__ = this;
var _33024__$1 = this;return (new clustermap.components.full_report.company_list.t33022(self__.opts,self__.owner,self__.selection_portfolio_company_sites_by_company,self__.company_list,meta33023__$1));
});
clustermap.components.full_report.company_list.__GT_t33022 = (function __GT_t33022(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta33023){return (new clustermap.components.full_report.company_list.t33022(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta33023));
});
}
return (new clustermap.components.full_report.company_list.t33022(opts,owner,selection_portfolio_company_sites_by_company,company_list,null));
});
