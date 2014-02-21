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
{var attrs32911 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs32911))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs32911),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs32911),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(site,owner,p__32920){var map__32936 = p__32920;var map__32936__$1 = ((cljs.core.seq_QMARK_.call(null,map__32936))?cljs.core.apply.call(null,cljs.core.hash_map,map__32936):map__32936);var opts = map__32936__$1;var path_fn = cljs.core.get.call(null,map__32936__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__32936__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t32937 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t32937 = (function (company_path,link_fn,path_fn,opts,map__32936,p__32920,owner,site,portfolio_company,meta32938){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__32936 = map__32936;
this.p__32920 = p__32920;
this.owner = owner;
this.site = site;
this.portfolio_company = portfolio_company;
this.meta32938 = meta32938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t32937.cljs$lang$type = true;
clustermap.components.full_report.company_list.t32937.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t32937";
clustermap.components.full_report.company_list.t32937.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t32937");
});
clustermap.components.full_report.company_list.t32937.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t32937.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs32940 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs32940))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32940),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32940));
}
})(),(function (){var attrs32941 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs32941))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32941),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32941));
}
})(),(function (){var attrs32942 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs32942))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32942),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32942));
}
})(),(function (){var attrs32943 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__32950 = self__.site;var G__32950__$1 = (((G__32950 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__32950));var G__32950__$2 = (((G__32950__$1 == null))?null:cljs.core.filter.call(null,((function (G__32950,G__32950__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__32950,G__32950__$1))
,G__32950__$1));return G__32950__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs32943))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32943),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32943));
}
})(),(function (){var attrs32944 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32944))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32944),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32944),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs32945 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs32945))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32945),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32945));
}
})(),(function (){var attrs32946 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32946))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32946),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32946));
}
})(),(function (){var attrs32947 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32947))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32947),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32947),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs32948 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs32948))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32948),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32948));
}
})(),(function (){var attrs32949 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32949))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32949),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32949));
}
})());
});
clustermap.components.full_report.company_list.t32937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32939){var self__ = this;
var _32939__$1 = this;return self__.meta32938;
});
clustermap.components.full_report.company_list.t32937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32939,meta32938__$1){var self__ = this;
var _32939__$1 = this;return (new clustermap.components.full_report.company_list.t32937(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__32936,self__.p__32920,self__.owner,self__.site,self__.portfolio_company,meta32938__$1));
});
clustermap.components.full_report.company_list.__GT_t32937 = (function __GT_t32937(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32936__$2,p__32920__$1,owner__$1,site__$1,portfolio_company__$1,meta32938){return (new clustermap.components.full_report.company_list.t32937(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32936__$2,p__32920__$1,owner__$1,site__$1,portfolio_company__$1,meta32938));
});
}
return (new clustermap.components.full_report.company_list.t32937(company_path,link_fn,path_fn,opts,map__32936__$1,p__32920,owner,site,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites_by_company,owner,opts){if(typeof clustermap.components.full_report.company_list.t32957 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t32957 = (function (opts,owner,selection_portfolio_company_sites_by_company,company_list,meta32958){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites_by_company = selection_portfolio_company_sites_by_company;
this.company_list = company_list;
this.meta32958 = meta32958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t32957.cljs$lang$type = true;
clustermap.components.full_report.company_list.t32957.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t32957";
clustermap.components.full_report.company_list.t32957.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t32957");
});
clustermap.components.full_report.company_list.t32957.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t32957.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs32962 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites_by_company),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs32962))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs32962),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs32962));
}
})())));
});
clustermap.components.full_report.company_list.t32957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32959){var self__ = this;
var _32959__$1 = this;return self__.meta32958;
});
clustermap.components.full_report.company_list.t32957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32959,meta32958__$1){var self__ = this;
var _32959__$1 = this;return (new clustermap.components.full_report.company_list.t32957(self__.opts,self__.owner,self__.selection_portfolio_company_sites_by_company,self__.company_list,meta32958__$1));
});
clustermap.components.full_report.company_list.__GT_t32957 = (function __GT_t32957(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta32958){return (new clustermap.components.full_report.company_list.t32957(opts__$1,owner__$1,selection_portfolio_company_sites_by_company__$1,company_list__$1,meta32958));
});
}
return (new clustermap.components.full_report.company_list.t32957(opts,owner,selection_portfolio_company_sites_by_company,company_list,null));
});
