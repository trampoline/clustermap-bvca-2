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
{var attrs11760 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs11760))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11760),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11760),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__11769){var map__11784 = p__11769;var map__11784__$1 = ((cljs.core.seq_QMARK_.call(null,map__11784))?cljs.core.apply.call(null,cljs.core.hash_map,map__11784):map__11784);var opts = map__11784__$1;var path_fn = cljs.core.get.call(null,map__11784__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__11784__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t11785 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11785 = (function (company_path,link_fn,path_fn,opts,map__11784,p__11769,owner,company,portfolio_company,meta11786){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11784 = map__11784;
this.p__11769 = p__11769;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta11786 = meta11786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11785.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11785.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11785";
clustermap.components.full_report.company_list.t11785.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11785");
});
clustermap.components.full_report.company_list.t11785.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11785.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11788 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs11788))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11788),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11788));
}
})(),(function (){var attrs11789 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs11789))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11789),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11789));
}
})(),(function (){var attrs11790 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__11797 = self__.company;var G__11797__$1 = (((G__11797 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__11797));var G__11797__$2 = (((G__11797__$1 == null))?null:cljs.core.filter.call(null,((function (G__11797,G__11797__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11797,G__11797__$1))
,G__11797__$1));return G__11797__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11790))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11790),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11790));
}
})(),(function (){var attrs11791 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11791))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11791),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11791),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs11792 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs11792))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11792),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11792));
}
})(),(function (){var attrs11793 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11793))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11793),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11793));
}
})(),(function (){var attrs11794 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11794))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11794),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11794),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs11795 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs11795))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11795),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11795));
}
})(),(function (){var attrs11796 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11796))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11796),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11796));
}
})());
});
clustermap.components.full_report.company_list.t11785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11787){var self__ = this;
var _11787__$1 = this;return self__.meta11786;
});
clustermap.components.full_report.company_list.t11785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11787,meta11786__$1){var self__ = this;
var _11787__$1 = this;return (new clustermap.components.full_report.company_list.t11785(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11784,self__.p__11769,self__.owner,self__.company,self__.portfolio_company,meta11786__$1));
});
clustermap.components.full_report.company_list.__GT_t11785 = (function __GT_t11785(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11784__$2,p__11769__$1,owner__$1,company__$1,portfolio_company__$1,meta11786){return (new clustermap.components.full_report.company_list.t11785(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11784__$2,p__11769__$1,owner__$1,company__$1,portfolio_company__$1,meta11786));
});
}
return (new clustermap.components.full_report.company_list.t11785(company_path,link_fn,path_fn,opts,map__11784__$1,p__11769,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){if(typeof clustermap.components.full_report.company_list.t11804 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11804 = (function (opts,owner,companies,company_list,meta11805){
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta11805 = meta11805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11804.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11804.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11804";
clustermap.components.full_report.company_list.t11804.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11804");
});
clustermap.components.full_report.company_list.t11804.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11804.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs11809 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs11809))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11809),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11809));
}
})())));
});
clustermap.components.full_report.company_list.t11804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11806){var self__ = this;
var _11806__$1 = this;return self__.meta11805;
});
clustermap.components.full_report.company_list.t11804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11806,meta11805__$1){var self__ = this;
var _11806__$1 = this;return (new clustermap.components.full_report.company_list.t11804(self__.opts,self__.owner,self__.companies,self__.company_list,meta11805__$1));
});
clustermap.components.full_report.company_list.__GT_t11804 = (function __GT_t11804(opts__$1,owner__$1,companies__$1,company_list__$1,meta11805){return (new clustermap.components.full_report.company_list.t11804(opts__$1,owner__$1,companies__$1,company_list__$1,meta11805));
});
}
return (new clustermap.components.full_report.company_list.t11804(opts,owner,companies,company_list,null));
});

//# sourceMappingURL=company_list.js.map