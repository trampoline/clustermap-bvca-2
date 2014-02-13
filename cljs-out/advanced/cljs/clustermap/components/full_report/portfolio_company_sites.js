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
clustermap.components.full_report.portfolio_company_sites.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs21751 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs21751))
{return React.DOM.div(sablono.interpreter.attributes(attrs21751),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs21751),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.portfolio_company_sites.pos_neg = (function pos_neg(value){if((value == null))
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
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner,p__21760){var map__21775 = p__21760;var map__21775__$1 = ((cljs.core.seq_QMARK_(map__21775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21775):map__21775);var opts = map__21775__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21775__$1,cljs.core.constant$keyword$297);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21775__$1,cljs.core.constant$keyword$298);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,site) : path_fn.call(null,cljs.core.constant$keyword$275,site));if(typeof clustermap.components.full_report.portfolio_company_sites.t21776 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t21776 = (function (company_path,link_fn,path_fn,opts,map__21775,p__21760,owner,site,portfolio_company_site,meta21777){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__21775 = map__21775;
this.p__21760 = p__21760;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta21777 = meta21777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t21776.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t21776.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t21776";
clustermap.components.full_report.portfolio_company_sites.t21776.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t21776");
});
clustermap.components.full_report.portfolio_company_sites.t21776.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t21776.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs21779 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$275,self__.site));if(cljs.core.map_QMARK_(attrs21779))
{return React.DOM.td(sablono.interpreter.attributes(attrs21779),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21779));
}
})(),(function (){var attrs21780 = clustermap.components.full_report.portfolio_company_sites.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$276,cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21780))
{return React.DOM.td(sablono.interpreter.attributes(attrs21780),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21780));
}
})(),(function (){var attrs21781 = clustermap.components.full_report.portfolio_company_sites.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$277,(function (){var G__21788 = self__.site;var G__21788__$1 = (((G__21788 == null))?null:cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__21788));var G__21788__$2 = (((G__21788__$1 == null))?null:cljs.core.filter(((function (G__21788,G__21788__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__21788,G__21788__$1))
,G__21788__$1));return G__21788__$2;
})());if(cljs.core.map_QMARK_(attrs21781))
{return React.DOM.td(sablono.interpreter.attributes(attrs21781),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21781));
}
})(),(function (){var attrs21782 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21782))
{return React.DOM.td(sablono.interpreter.attributes(attrs21782),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21782),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs21783 = clustermap.components.full_report.portfolio_company_sites.pos_neg(cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21783))
{return React.DOM.td(sablono.interpreter.attributes(attrs21783),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21783));
}
})(),(function (){var attrs21784 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21784))
{return React.DOM.td(sablono.interpreter.attributes(attrs21784),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21784));
}
})(),(function (){var attrs21785 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21785))
{return React.DOM.td(sablono.interpreter.attributes(attrs21785),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21785),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs21786 = clustermap.components.full_report.portfolio_company_sites.pos_neg(cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21786))
{return React.DOM.td(sablono.interpreter.attributes(attrs21786),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21786));
}
})(),(function (){var attrs21787 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$206,"-"));if(cljs.core.map_QMARK_(attrs21787))
{return React.DOM.td(sablono.interpreter.attributes(attrs21787),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21787));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t21776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21778){var self__ = this;
var _21778__$1 = this;return self__.meta21777;
});
clustermap.components.full_report.portfolio_company_sites.t21776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21778,meta21777__$1){var self__ = this;
var _21778__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t21776(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__21775,self__.p__21760,self__.owner,self__.site,self__.portfolio_company_site,meta21777__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t21776 = (function __GT_t21776(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21775__$2,p__21760__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21777){return (new clustermap.components.full_report.portfolio_company_sites.t21776(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21775__$2,p__21760__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21777));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t21776(company_path,link_fn,path_fn,opts,map__21775__$1,p__21760,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.portfolio_company_sites.t21795 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t21795 = (function (opts,owner,selection_portfolio_company_sites,portfolio_company_sites,meta21796){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.portfolio_company_sites = portfolio_company_sites;
this.meta21796 = meta21796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t21795.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t21795.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t21795";
clustermap.components.full_report.portfolio_company_sites.t21795.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t21795");
});
clustermap.components.full_report.portfolio_company_sites.t21795.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t21795.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs21800 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$308,cljs.core.constant$keyword$269,self__.opts], null));if(cljs.core.map_QMARK_(attrs21800))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs21800),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs21800));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t21795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21797){var self__ = this;
var _21797__$1 = this;return self__.meta21796;
});
clustermap.components.full_report.portfolio_company_sites.t21795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21797,meta21796__$1){var self__ = this;
var _21797__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t21795(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.portfolio_company_sites,meta21796__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t21795 = (function __GT_t21795(opts__$1,owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta21796){return (new clustermap.components.full_report.portfolio_company_sites.t21795(opts__$1,owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta21796));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t21795(opts,owner,selection_portfolio_company_sites,portfolio_company_sites,null));
});
