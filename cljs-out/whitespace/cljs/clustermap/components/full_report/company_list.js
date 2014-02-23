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
{var attrs32966 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs32966))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs32966),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs32966),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__32975){var map__32990 = p__32975;var map__32990__$1 = ((cljs.core.seq_QMARK_.call(null,map__32990))?cljs.core.apply.call(null,cljs.core.hash_map,map__32990):map__32990);var opts = map__32990__$1;var path_fn = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t32991 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t32991 = (function (company_path,link_fn,path_fn,opts,map__32990,p__32975,owner,company,portfolio_company,meta32992){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__32990 = map__32990;
this.p__32975 = p__32975;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta32992 = meta32992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t32991.cljs$lang$type = true;
clustermap.components.full_report.company_list.t32991.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t32991";
clustermap.components.full_report.company_list.t32991.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t32991");
});
clustermap.components.full_report.company_list.t32991.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t32991.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs32994 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs32994))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32994),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32994));
}
})(),(function (){var attrs32995 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs32995))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32995),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32995));
}
})(),(function (){var attrs32996 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__33003 = self__.company;var G__33003__$1 = (((G__33003 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__33003));var G__33003__$2 = (((G__33003__$1 == null))?null:cljs.core.filter.call(null,((function (G__33003,G__33003__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33003,G__33003__$1))
,G__33003__$1));return G__33003__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs32996))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32996),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32996));
}
})(),(function (){var attrs32997 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32997))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32997),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32997),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company))),")"));
}
})(),(function (){var attrs32998 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs32998))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32998),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32998));
}
})(),(function (){var attrs32999 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32999))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32999),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32999));
}
})(),(function (){var attrs33000 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33000))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33000),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33000),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company))),")"));
}
})(),(function (){var attrs33001 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs33001))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33001),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33001));
}
})(),(function (){var attrs33002 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33002))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33002),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33002));
}
})());
});
clustermap.components.full_report.company_list.t32991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32993){var self__ = this;
var _32993__$1 = this;return self__.meta32992;
});
clustermap.components.full_report.company_list.t32991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32993,meta32992__$1){var self__ = this;
var _32993__$1 = this;return (new clustermap.components.full_report.company_list.t32991(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__32990,self__.p__32975,self__.owner,self__.company,self__.portfolio_company,meta32992__$1));
});
clustermap.components.full_report.company_list.__GT_t32991 = (function __GT_t32991(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32990__$2,p__32975__$1,owner__$1,company__$1,portfolio_company__$1,meta32992){return (new clustermap.components.full_report.company_list.t32991(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32990__$2,p__32975__$1,owner__$1,company__$1,portfolio_company__$1,meta32992));
});
}
return (new clustermap.components.full_report.company_list.t32991(company_path,link_fn,path_fn,opts,map__32990__$1,p__32975,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){if(typeof clustermap.components.full_report.company_list.t33010 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33010 = (function (opts,owner,companies,company_list,meta33011){
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta33011 = meta33011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33010.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33010.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33010";
clustermap.components.full_report.company_list.t33010.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t33010");
});
clustermap.components.full_report.company_list.t33010.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33010.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs33015 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33015))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33015),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33015));
}
})())));
});
clustermap.components.full_report.company_list.t33010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33012){var self__ = this;
var _33012__$1 = this;return self__.meta33011;
});
clustermap.components.full_report.company_list.t33010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33012,meta33011__$1){var self__ = this;
var _33012__$1 = this;return (new clustermap.components.full_report.company_list.t33010(self__.opts,self__.owner,self__.companies,self__.company_list,meta33011__$1));
});
clustermap.components.full_report.company_list.__GT_t33010 = (function __GT_t33010(opts__$1,owner__$1,companies__$1,company_list__$1,meta33011){return (new clustermap.components.full_report.company_list.t33010(opts__$1,owner__$1,companies__$1,company_list__$1,meta33011));
});
}
return (new clustermap.components.full_report.company_list.t33010(opts,owner,companies,company_list,null));
});
