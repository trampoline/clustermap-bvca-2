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
{var attrs33941 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs33941))
{return React.DOM.div(sablono.interpreter.attributes(attrs33941),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs33941),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__33950){var map__33963 = p__33950;var map__33963__$1 = ((cljs.core.seq_QMARK_(map__33963))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33963):map__33963);var opts = map__33963__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33963__$1,cljs.core.constant$keyword$632);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33963__$1,cljs.core.constant$keyword$649);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,company) : path_fn.call(null,cljs.core.constant$keyword$629,company));if(typeof clustermap.components.full_report.company_list.t33964 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33964 = (function (company_path,link_fn,path_fn,opts,map__33963,p__33950,owner,company,portfolio_company,meta33965){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33963 = map__33963;
this.p__33950 = p__33950;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta33965 = meta33965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33964.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33964.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33964";
clustermap.components.full_report.company_list.t33964.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t33964");
});
clustermap.components.full_report.company_list.t33964.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33964.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33967 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$629,self__.company));if(cljs.core.map_QMARK_(attrs33967))
{return React.DOM.td(sablono.interpreter.attributes(attrs33967),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33967));
}
})(),(function (){var attrs33968 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$630,cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33968))
{return React.DOM.td(sablono.interpreter.attributes(attrs33968),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33968));
}
})(),(function (){var attrs33969 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$631,(function (){var G__33974 = self__.company;var G__33974__$1 = (((G__33974 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__33974));var G__33974__$2 = (((G__33974__$1 == null))?null:cljs.core.filter(((function (G__33974,G__33974__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33974,G__33974__$1))
,G__33974__$1));return G__33974__$2;
})());if(cljs.core.map_QMARK_(attrs33969))
{return React.DOM.td(sablono.interpreter.attributes(attrs33969),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33969));
}
})(),(function (){var attrs33970 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$570.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$570.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs33970))
{return React.DOM.td(sablono.interpreter.attributes(attrs33970),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33970),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs33971 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33971))
{return React.DOM.td(sablono.interpreter.attributes(attrs33971),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33971));
}
})(),(function (){var attrs33972 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs33972))
{return React.DOM.td(sablono.interpreter.attributes(attrs33972),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33972));
}
})(),(function (){var attrs33973 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$691.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$691.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs33973))
{return React.DOM.td(sablono.interpreter.attributes(attrs33973),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33973),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t33964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33966){var self__ = this;
var _33966__$1 = this;return self__.meta33965;
});
clustermap.components.full_report.company_list.t33964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33966,meta33965__$1){var self__ = this;
var _33966__$1 = this;return (new clustermap.components.full_report.company_list.t33964(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33963,self__.p__33950,self__.owner,self__.company,self__.portfolio_company,meta33965__$1));
});
clustermap.components.full_report.company_list.__GT_t33964 = (function __GT_t33964(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33963__$2,p__33950__$1,owner__$1,company__$1,portfolio_company__$1,meta33965){return (new clustermap.components.full_report.company_list.t33964(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33963__$2,p__33950__$1,owner__$1,company__$1,portfolio_company__$1,meta33965));
});
}
return (new clustermap.components.full_report.company_list.t33964(company_path,link_fn,path_fn,opts,map__33963__$1,p__33950,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$633);if(typeof clustermap.components.full_report.company_list.t33995 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33995 = (function (comm,opts,owner,companies,company_list,meta33996){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta33996 = meta33996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33995.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33995.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33995";
clustermap.components.full_report.company_list.t33995.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t33995");
});
clustermap.components.full_report.company_list.t33995.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33995.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs33998 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$692);if(cljs.core.map_QMARK_(attrs33998))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs33998], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33999 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Investor-backed company",cljs.core.constant$keyword$594);if(cljs.core.map_QMARK_(attrs33999))
{return React.DOM.th(sablono.interpreter.attributes(attrs33999),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33999));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34004 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Revenue",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs34004))
{return React.DOM.th(sablono.interpreter.attributes(attrs34004),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34004));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Rev. change",cljs.core.constant$keyword$690))),(function (){var attrs34005 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Employees",cljs.core.constant$keyword$691);if(cljs.core.map_QMARK_(attrs34005))
{return React.DOM.th(sablono.interpreter.attributes(attrs34005),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34005));
}
})())),(function (){var attrs34006 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$662.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$650,cljs.core.constant$keyword$620,self__.opts], null));if(cljs.core.map_QMARK_(attrs34006))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34006),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34006));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$692)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs33998),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34007 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Investor-backed company",cljs.core.constant$keyword$594);if(cljs.core.map_QMARK_(attrs34007))
{return React.DOM.th(sablono.interpreter.attributes(attrs34007),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34007));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34012 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Revenue",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs34012))
{return React.DOM.th(sablono.interpreter.attributes(attrs34012),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34012));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Rev. change",cljs.core.constant$keyword$690))),(function (){var attrs34013 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$692,"Employees",cljs.core.constant$keyword$691);if(cljs.core.map_QMARK_(attrs34013))
{return React.DOM.th(sablono.interpreter.attributes(attrs34013),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34013));
}
})())),(function (){var attrs34014 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$662.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$650,cljs.core.constant$keyword$620,self__.opts], null));if(cljs.core.map_QMARK_(attrs34014))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34014),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34014));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$692)));
}
});
clustermap.components.full_report.company_list.t33995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33997){var self__ = this;
var _33997__$1 = this;return self__.meta33996;
});
clustermap.components.full_report.company_list.t33995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33997,meta33996__$1){var self__ = this;
var _33997__$1 = this;return (new clustermap.components.full_report.company_list.t33995(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta33996__$1));
});
clustermap.components.full_report.company_list.__GT_t33995 = (function __GT_t33995(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33996){return (new clustermap.components.full_report.company_list.t33995(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33996));
});
}
return (new clustermap.components.full_report.company_list.t33995(comm,opts,owner,companies,company_list,null));
});
