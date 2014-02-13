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
{var attrs21739 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs21739))
{return React.DOM.div(sablono.interpreter.attributes(attrs21739),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs21739),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner,p__21748){var map__21763 = p__21748;var map__21763__$1 = ((cljs.core.seq_QMARK_(map__21763))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21763):map__21763);var opts = map__21763__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,cljs.core.constant$keyword$302);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,cljs.core.constant$keyword$303);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,site) : path_fn.call(null,cljs.core.constant$keyword$280,site));if(typeof clustermap.components.full_report.portfolio_company_sites.t21764 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t21764 = (function (company_path,link_fn,path_fn,opts,map__21763,p__21748,owner,site,portfolio_company_site,meta21765){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__21763 = map__21763;
this.p__21748 = p__21748;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta21765 = meta21765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t21764.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t21764.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t21764";
clustermap.components.full_report.portfolio_company_sites.t21764.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t21764");
});
clustermap.components.full_report.portfolio_company_sites.t21764.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t21764.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs21767 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$280,self__.site));if(cljs.core.map_QMARK_(attrs21767))
{return React.DOM.td(sablono.interpreter.attributes(attrs21767),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21767));
}
})(),(function (){var attrs21768 = clustermap.components.full_report.portfolio_company_sites.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$281,cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21768))
{return React.DOM.td(sablono.interpreter.attributes(attrs21768),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21768));
}
})(),(function (){var attrs21769 = clustermap.components.full_report.portfolio_company_sites.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$282,(function (){var G__21776 = self__.site;var G__21776__$1 = (((G__21776 == null))?null:cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(G__21776));var G__21776__$2 = (((G__21776__$1 == null))?null:cljs.core.filter(((function (G__21776,G__21776__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__21776,G__21776__$1))
,G__21776__$1));return G__21776__$2;
})());if(cljs.core.map_QMARK_(attrs21769))
{return React.DOM.td(sablono.interpreter.attributes(attrs21769),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21769));
}
})(),(function (){var attrs21770 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21770))
{return React.DOM.td(sablono.interpreter.attributes(attrs21770),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21770),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs21771 = clustermap.components.full_report.portfolio_company_sites.pos_neg(cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21771))
{return React.DOM.td(sablono.interpreter.attributes(attrs21771),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21771));
}
})(),(function (){var attrs21772 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21772))
{return React.DOM.td(sablono.interpreter.attributes(attrs21772),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21772));
}
})(),(function (){var attrs21773 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21773))
{return React.DOM.td(sablono.interpreter.attributes(attrs21773),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21773),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs21774 = clustermap.components.full_report.portfolio_company_sites.pos_neg(cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21774))
{return React.DOM.td(sablono.interpreter.attributes(attrs21774),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21774));
}
})(),(function (){var attrs21775 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21775))
{return React.DOM.td(sablono.interpreter.attributes(attrs21775),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21775));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t21764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21766){var self__ = this;
var _21766__$1 = this;return self__.meta21765;
});
clustermap.components.full_report.portfolio_company_sites.t21764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21766,meta21765__$1){var self__ = this;
var _21766__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t21764(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__21763,self__.p__21748,self__.owner,self__.site,self__.portfolio_company_site,meta21765__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t21764 = (function __GT_t21764(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21763__$2,p__21748__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21765){return (new clustermap.components.full_report.portfolio_company_sites.t21764(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21763__$2,p__21748__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21765));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t21764(company_path,link_fn,path_fn,opts,map__21763__$1,p__21748,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.portfolio_company_sites.t21783 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t21783 = (function (opts,owner,selection_portfolio_company_sites,portfolio_company_sites,meta21784){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.portfolio_company_sites = portfolio_company_sites;
this.meta21784 = meta21784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t21783.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t21783.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t21783";
clustermap.components.full_report.portfolio_company_sites.t21783.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t21783");
});
clustermap.components.full_report.portfolio_company_sites.t21783.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t21783.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs21788 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,cljs.core.constant$keyword$313,cljs.core.constant$keyword$274,self__.opts], null));if(cljs.core.map_QMARK_(attrs21788))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs21788),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs21788));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t21783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21785){var self__ = this;
var _21785__$1 = this;return self__.meta21784;
});
clustermap.components.full_report.portfolio_company_sites.t21783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21785,meta21784__$1){var self__ = this;
var _21785__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t21783(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.portfolio_company_sites,meta21784__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t21783 = (function __GT_t21783(opts__$1,owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta21784){return (new clustermap.components.full_report.portfolio_company_sites.t21783(opts__$1,owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta21784));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t21783(opts,owner,selection_portfolio_company_sites,portfolio_company_sites,null));
});
