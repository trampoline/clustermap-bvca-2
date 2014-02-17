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
{var attrs32606 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs32606))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs32606),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs32606),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__32615){var map__32631 = p__32615;var map__32631__$1 = ((cljs.core.seq_QMARK_.call(null,map__32631))?cljs.core.apply.call(null,cljs.core.hash_map,map__32631):map__32631);var opts = map__32631__$1;var path_fn = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t32632 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t32632 = (function (company_path,link_fn,path_fn,opts,map__32631,p__32615,owner,site,portfolio_company_site,meta32633){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__32631 = map__32631;
this.p__32615 = p__32615;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta32633 = meta32633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t32632.cljs$lang$type = true;
clustermap.components.full_report.company_list.t32632.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t32632";
clustermap.components.full_report.company_list.t32632.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t32632");
});
clustermap.components.full_report.company_list.t32632.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t32632.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs32635 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs32635))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32635),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32635));
}
})(),(function (){var attrs32636 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs32636))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32636),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32636));
}
})(),(function (){var attrs32637 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs32637))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32637),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32637));
}
})(),(function (){var attrs32638 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__32645 = self__.site;var G__32645__$1 = (((G__32645 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__32645));var G__32645__$2 = (((G__32645__$1 == null))?null:cljs.core.filter.call(null,((function (G__32645,G__32645__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__32645,G__32645__$1))
,G__32645__$1));return G__32645__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs32638))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32638),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32638));
}
})(),(function (){var attrs32639 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32639))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32639),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32639),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs32640 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs32640))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32640),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32640));
}
})(),(function (){var attrs32641 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32641))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32641),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32641));
}
})(),(function (){var attrs32642 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32642))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32642),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32642),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs32643 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs32643))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32643),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32643));
}
})(),(function (){var attrs32644 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32644))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32644),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32644));
}
})());
});
clustermap.components.full_report.company_list.t32632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32634){var self__ = this;
var _32634__$1 = this;return self__.meta32633;
});
clustermap.components.full_report.company_list.t32632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32634,meta32633__$1){var self__ = this;
var _32634__$1 = this;return (new clustermap.components.full_report.company_list.t32632(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__32631,self__.p__32615,self__.owner,self__.site,self__.portfolio_company_site,meta32633__$1));
});
clustermap.components.full_report.company_list.__GT_t32632 = (function __GT_t32632(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32631__$2,p__32615__$1,owner__$1,site__$1,portfolio_company_site__$1,meta32633){return (new clustermap.components.full_report.company_list.t32632(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32631__$2,p__32615__$1,owner__$1,site__$1,portfolio_company_site__$1,meta32633));
});
}
return (new clustermap.components.full_report.company_list.t32632(company_path,link_fn,path_fn,opts,map__32631__$1,p__32615,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t32652 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t32652 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta32653){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta32653 = meta32653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t32652.cljs$lang$type = true;
clustermap.components.full_report.company_list.t32652.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t32652";
clustermap.components.full_report.company_list.t32652.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t32652");
});
clustermap.components.full_report.company_list.t32652.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t32652.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs32657 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs32657))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs32657),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs32657));
}
})())));
});
clustermap.components.full_report.company_list.t32652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32654){var self__ = this;
var _32654__$1 = this;return self__.meta32653;
});
clustermap.components.full_report.company_list.t32652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32654,meta32653__$1){var self__ = this;
var _32654__$1 = this;return (new clustermap.components.full_report.company_list.t32652(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta32653__$1));
});
clustermap.components.full_report.company_list.__GT_t32652 = (function __GT_t32652(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta32653){return (new clustermap.components.full_report.company_list.t32652(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta32653));
});
}
return (new clustermap.components.full_report.company_list.t32652(opts,owner,selection_portfolio_company_sites,company_list,null));
});
