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
{var attrs33911 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs33911))
{return React.DOM.div(sablono.interpreter.attributes(attrs33911),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs33911),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__33920){var map__33933 = p__33920;var map__33933__$1 = ((cljs.core.seq_QMARK_(map__33933))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33933):map__33933);var opts = map__33933__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33933__$1,cljs.core.constant$keyword$632);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33933__$1,cljs.core.constant$keyword$650);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,company) : path_fn.call(null,cljs.core.constant$keyword$629,company));if(typeof clustermap.components.full_report.company_list.t33934 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33934 = (function (company_path,link_fn,path_fn,opts,map__33933,p__33920,owner,company,portfolio_company,meta33935){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33933 = map__33933;
this.p__33920 = p__33920;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta33935 = meta33935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33934.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33934.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33934";
clustermap.components.full_report.company_list.t33934.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t33934");
});
clustermap.components.full_report.company_list.t33934.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33934.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33937 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$629,self__.company));if(cljs.core.map_QMARK_(attrs33937))
{return React.DOM.td(sablono.interpreter.attributes(attrs33937),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33937));
}
})(),(function (){var attrs33938 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$630,cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33938))
{return React.DOM.td(sablono.interpreter.attributes(attrs33938),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33938));
}
})(),(function (){var attrs33939 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$631,(function (){var G__33944 = self__.company;var G__33944__$1 = (((G__33944 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__33944));var G__33944__$2 = (((G__33944__$1 == null))?null:cljs.core.filter(((function (G__33944,G__33944__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33944,G__33944__$1))
,G__33944__$1));return G__33944__$2;
})());if(cljs.core.map_QMARK_(attrs33939))
{return React.DOM.td(sablono.interpreter.attributes(attrs33939),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33939));
}
})(),(function (){var attrs33940 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$570.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$570.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs33940))
{return React.DOM.td(sablono.interpreter.attributes(attrs33940),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33940),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs33941 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33941))
{return React.DOM.td(sablono.interpreter.attributes(attrs33941),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33941));
}
})(),(function (){var attrs33942 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs33942))
{return React.DOM.td(sablono.interpreter.attributes(attrs33942),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33942));
}
})(),(function (){var attrs33943 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs33943))
{return React.DOM.td(sablono.interpreter.attributes(attrs33943),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33943),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t33934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33936){var self__ = this;
var _33936__$1 = this;return self__.meta33935;
});
clustermap.components.full_report.company_list.t33934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33936,meta33935__$1){var self__ = this;
var _33936__$1 = this;return (new clustermap.components.full_report.company_list.t33934(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33933,self__.p__33920,self__.owner,self__.company,self__.portfolio_company,meta33935__$1));
});
clustermap.components.full_report.company_list.__GT_t33934 = (function __GT_t33934(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33933__$2,p__33920__$1,owner__$1,company__$1,portfolio_company__$1,meta33935){return (new clustermap.components.full_report.company_list.t33934(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33933__$2,p__33920__$1,owner__$1,company__$1,portfolio_company__$1,meta33935));
});
}
return (new clustermap.components.full_report.company_list.t33934(company_path,link_fn,path_fn,opts,map__33933__$1,p__33920,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$633);if(typeof clustermap.components.full_report.company_list.t33965 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33965 = (function (comm,opts,owner,companies,company_list,meta33966){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta33966 = meta33966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33965.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33965.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33965";
clustermap.components.full_report.company_list.t33965.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t33965");
});
clustermap.components.full_report.company_list.t33965.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33965.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs33968 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$691);if(cljs.core.map_QMARK_(attrs33968))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs33968], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33969 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Investor-backed company",cljs.core.constant$keyword$594);if(cljs.core.map_QMARK_(attrs33969))
{return React.DOM.th(sablono.interpreter.attributes(attrs33969),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33969));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33974 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Revenue",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs33974))
{return React.DOM.th(sablono.interpreter.attributes(attrs33974),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33974));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Rev. change",cljs.core.constant$keyword$689))),(function (){var attrs33975 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Employees",cljs.core.constant$keyword$690);if(cljs.core.map_QMARK_(attrs33975))
{return React.DOM.th(sablono.interpreter.attributes(attrs33975),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33975));
}
})())),(function (){var attrs33976 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$661.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$692,cljs.core.constant$keyword$620,self__.opts], null));if(cljs.core.map_QMARK_(attrs33976))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs33976),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs33976));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$691)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs33968),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33977 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Investor-backed company",cljs.core.constant$keyword$594);if(cljs.core.map_QMARK_(attrs33977))
{return React.DOM.th(sablono.interpreter.attributes(attrs33977),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33977));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33982 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Revenue",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs33982))
{return React.DOM.th(sablono.interpreter.attributes(attrs33982),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33982));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Rev. change",cljs.core.constant$keyword$689))),(function (){var attrs33983 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$691,"Employees",cljs.core.constant$keyword$690);if(cljs.core.map_QMARK_(attrs33983))
{return React.DOM.th(sablono.interpreter.attributes(attrs33983),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33983));
}
})())),(function (){var attrs33984 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$661.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$692,cljs.core.constant$keyword$620,self__.opts], null));if(cljs.core.map_QMARK_(attrs33984))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs33984),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs33984));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$691)));
}
});
clustermap.components.full_report.company_list.t33965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33967){var self__ = this;
var _33967__$1 = this;return self__.meta33966;
});
clustermap.components.full_report.company_list.t33965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33967,meta33966__$1){var self__ = this;
var _33967__$1 = this;return (new clustermap.components.full_report.company_list.t33965(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta33966__$1));
});
clustermap.components.full_report.company_list.__GT_t33965 = (function __GT_t33965(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33966){return (new clustermap.components.full_report.company_list.t33965(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33966));
});
}
return (new clustermap.components.full_report.company_list.t33965(comm,opts,owner,companies,company_list,null));
});
