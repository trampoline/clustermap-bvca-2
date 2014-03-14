// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs33951 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs33951))
{return React.DOM.div(sablono.interpreter.attributes(attrs33951),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs33951),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__33960){var map__33973 = p__33960;var map__33973__$1 = ((cljs.core.seq_QMARK_(map__33973))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33973):map__33973);var opts = map__33973__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,cljs.core.constant$keyword$630);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,cljs.core.constant$keyword$647);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$627,company) : path_fn.call(null,cljs.core.constant$keyword$627,company));if(typeof clustermap.components.full_report.company_list.t33974 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33974 = (function (company_path,link_fn,path_fn,opts,map__33973,p__33960,owner,company,portfolio_company,meta33975){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33973 = map__33973;
this.p__33960 = p__33960;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta33975 = meta33975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33974.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33974.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33974";
clustermap.components.full_report.company_list.t33974.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t33974");
});
clustermap.components.full_report.company_list.t33974.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33974.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33977 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$627,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$627,self__.company));if(cljs.core.map_QMARK_(attrs33977))
{return React.DOM.td(sablono.interpreter.attributes(attrs33977),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33977));
}
})(),(function (){var attrs33978 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$628,cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33978))
{return React.DOM.td(sablono.interpreter.attributes(attrs33978),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33978));
}
})(),(function (){var attrs33979 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$629,(function (){var G__33984 = self__.company;var G__33984__$1 = (((G__33984 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__33984));var G__33984__$2 = (((G__33984__$1 == null))?null:cljs.core.filter(((function (G__33984,G__33984__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33984,G__33984__$1))
,G__33984__$1));return G__33984__$2;
})());if(cljs.core.map_QMARK_(attrs33979))
{return React.DOM.td(sablono.interpreter.attributes(attrs33979),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33979));
}
})(),(function (){var attrs33980 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$568.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$568.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs33980))
{return React.DOM.td(sablono.interpreter.attributes(attrs33980),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33980),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs33981 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33981))
{return React.DOM.td(sablono.interpreter.attributes(attrs33981),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33981));
}
})(),(function (){var attrs33982 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs33982))
{return React.DOM.td(sablono.interpreter.attributes(attrs33982),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33982));
}
})(),(function (){var attrs33983 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs33983))
{return React.DOM.td(sablono.interpreter.attributes(attrs33983),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33983),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t33974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33976){var self__ = this;
var _33976__$1 = this;return self__.meta33975;
});
clustermap.components.full_report.company_list.t33974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33976,meta33975__$1){var self__ = this;
var _33976__$1 = this;return (new clustermap.components.full_report.company_list.t33974(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33973,self__.p__33960,self__.owner,self__.company,self__.portfolio_company,meta33975__$1));
});
clustermap.components.full_report.company_list.__GT_t33974 = (function __GT_t33974(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33973__$2,p__33960__$1,owner__$1,company__$1,portfolio_company__$1,meta33975){return (new clustermap.components.full_report.company_list.t33974(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33973__$2,p__33960__$1,owner__$1,company__$1,portfolio_company__$1,meta33975));
});
}
return (new clustermap.components.full_report.company_list.t33974(company_path,link_fn,path_fn,opts,map__33973__$1,p__33960,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$631);if(typeof clustermap.components.full_report.company_list.t34005 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34005 = (function (comm,opts,owner,companies,company_list,meta34006){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta34006 = meta34006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34005.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34005.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34005";
clustermap.components.full_report.company_list.t34005.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t34005");
});
clustermap.components.full_report.company_list.t34005.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34005.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs34008 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$688);if(cljs.core.map_QMARK_(attrs34008))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34008], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34009 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Investor-backed company",cljs.core.constant$keyword$592);if(cljs.core.map_QMARK_(attrs34009))
{return React.DOM.th(sablono.interpreter.attributes(attrs34009),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34009));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34014 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Revenue",cljs.core.constant$keyword$568);if(cljs.core.map_QMARK_(attrs34014))
{return React.DOM.th(sablono.interpreter.attributes(attrs34014),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34014));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Rev. change",cljs.core.constant$keyword$686))),(function (){var attrs34015 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Employees",cljs.core.constant$keyword$687);if(cljs.core.map_QMARK_(attrs34015))
{return React.DOM.th(sablono.interpreter.attributes(attrs34015),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34015));
}
})())),(function (){var attrs34016 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$658.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,cljs.core.constant$keyword$689,cljs.core.constant$keyword$618,self__.opts], null));if(cljs.core.map_QMARK_(attrs34016))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34016),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34016));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$688)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs34008),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34017 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Investor-backed company",cljs.core.constant$keyword$592);if(cljs.core.map_QMARK_(attrs34017))
{return React.DOM.th(sablono.interpreter.attributes(attrs34017),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34017));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34022 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Revenue",cljs.core.constant$keyword$568);if(cljs.core.map_QMARK_(attrs34022))
{return React.DOM.th(sablono.interpreter.attributes(attrs34022),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34022));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Rev. change",cljs.core.constant$keyword$686))),(function (){var attrs34023 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$688,"Employees",cljs.core.constant$keyword$687);if(cljs.core.map_QMARK_(attrs34023))
{return React.DOM.th(sablono.interpreter.attributes(attrs34023),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34023));
}
})())),(function (){var attrs34024 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$658.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,cljs.core.constant$keyword$689,cljs.core.constant$keyword$618,self__.opts], null));if(cljs.core.map_QMARK_(attrs34024))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34024),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34024));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$688)));
}
});
clustermap.components.full_report.company_list.t34005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34007){var self__ = this;
var _34007__$1 = this;return self__.meta34006;
});
clustermap.components.full_report.company_list.t34005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34007,meta34006__$1){var self__ = this;
var _34007__$1 = this;return (new clustermap.components.full_report.company_list.t34005(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta34006__$1));
});
clustermap.components.full_report.company_list.__GT_t34005 = (function __GT_t34005(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34006){return (new clustermap.components.full_report.company_list.t34005(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34006));
});
}
return (new clustermap.components.full_report.company_list.t34005(comm,opts,owner,companies,company_list,null));
});
